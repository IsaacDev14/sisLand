import { NextResponse } from "next/server";

export const runtime = 'nodejs';

export async function POST(request: Request) {
    console.log("SERVER: /api/contact POST received");
    try {
        const scriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        // Log environment status (don't log the full URL for security if possible, though it's public anyway)
        console.log("SERVER: Checking GOOGLE_SHEETS_WEBHOOK_URL:", scriptUrl ? "Present" : "Missing");

        if (!scriptUrl) {
            throw new Error("Missing GOOGLE_SHEETS_WEBHOOK_URL in environment variables.");
        }

        const formData = await request.json();

        // Log the submission attempt
        console.log("SERVER: Forwarding contact submission to Google Script for:", formData.fullName, formData.company);

        // Forward to Google Apps Script
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log("SERVER: Google Script response:", result);

        // Check for success (Google Script usually returns { result: "success" } or { status: "success" })
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
