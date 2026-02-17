import { Resend } from "resend";
// import { ContactFormEmail } from "@/components/emails/ContactFormEmail";
// import { ContactFormEmail } from "@/components/emails/ContactFormEmail.test"; 
// import { render } from "@react-email/render";
import { generateEmailHtml } from "./generateEmailHtml";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';

export async function POST(request: Request) {
    console.log("SERVER: /api/contact POST received");
    try {
        const apiKey = process.env.RESEND_API_KEY;
        console.log("SERVER: Checking API Key:", apiKey ? "Present" : "Missing");
        if (!apiKey) {
            throw new Error("Missing RESEND_API_KEY");
        }
        const resend = new Resend(apiKey);

        const formData = await request.json();
        const { firstName, lastName, email, company, jobTitle, country, serviceInterest, resourceCount, gpuType, timeline, message } = formData;

        console.log("SERVER: Starting contact form submission via API Route for:", firstName, lastName);

        const emailHtml = generateEmailHtml({
            firstName,
            lastName,
            email,
            company,
            jobTitle,
            country,
            serviceInterest,
            resourceCount,
            gpuType,
            timeline,
            message,
        });

        const data = await resend.emails.send({
            from: "Siscom Contact Form <onboarding@resend.dev>", // Update this when you have a custom domain
            to: ["mwitiisaac14@gmail.com"], // Keeping user's email for their continued testing
            subject: `New Contact Request: ${firstName} ${lastName} - ${company}`,
            html: emailHtml,
        });

        console.log("SERVER: Email sent successfully:", data);
        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("SERVER: Resend Error in API Route:", error);
        return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
