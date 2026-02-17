"use server";

import { Resend } from "resend";
import { ContactFormEmail } from "@/components/emails/ContactFormEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: any) {
    const { firstName, lastName, email, company, jobTitle, country, serviceInterest, resourceCount, gpuType, timeline, message } = formData;

    console.log("Starting contact form submission for:", firstName, lastName);
    try {
        console.log("Rendering email template...");
        const emailHtml = await render(ContactFormEmail({
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
        }));
        console.log("Email template rendered successfully.");

        console.log("Sending email via Resend...");
        const data = await resend.emails.send({
            from: "Siscom Contact Form <onboarding@resend.dev>", // Update this when you have a custom domain
            to: ["mwitiisaac14@gmail.com"], // Keeping user's email for their continued testing
            subject: `New Contact Request: ${firstName} ${lastName} - ${company}`,
            html: emailHtml,
        });
        console.log("Email sent successfully:", data);

        return { success: true, data };
    } catch (error: any) {
        console.error("Resend Error in server action:", error);
        return { success: false, error: error.message || JSON.stringify(error) };
    }
}
