import { NextResponse } from "next/server";

export const runtime = 'nodejs';

export async function POST(request: Request) {
    console.log("SERVER: /api/contact POST received");
    try {
        const formData = await request.json();

        // Route colocation submissions to dedicated sheet
        const isColocation = formData.formSource === "colocation-page";
        const scriptUrl = isColocation
            ? process.env.COLOCATION_SHEETS_WEBHOOK_URL
            : process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        const envVarName = isColocation ? "COLOCATION_SHEETS_WEBHOOK_URL" : "GOOGLE_SHEETS_WEBHOOK_URL";
        console.log("SERVER: Checking", envVarName + ":", scriptUrl ? "Present" : "Missing");

        if (!scriptUrl) {
            throw new Error(`Missing ${envVarName} in environment variables.`);
        }

        // Log the submission attempt
        console.log("SERVER: Forwarding", isColocation ? "colocation" : "contact", "submission for:", formData.fullName);

        // Forward to Google Apps Script
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        let result;
        const responseText = await response.text();

        try {
            result = JSON.parse(responseText);
        } catch (e) {
            console.error("SERVER: Failed to parse Google Script response as JSON.");
            console.error("SERVER: Status:", response.status);
            console.error("SERVER: Response starts with:", responseText.substring(0, 200));
            throw new Error(`Google Script returned invalid response (Status ${response.status}). Ensure it is deployed as 'Anyone'.`);
        }

        console.log("SERVER: Google Script response:", result);

        // Check for success
        if (result.result === "success" || result.status === "success") {
            return NextResponse.json({ success: true, data: result });
        } else {
            throw new Error(result.error || result.message || "Unknown error from Google Script");
        }

    } catch (error: any) {
        console.error("SERVER: Error in API Route:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
