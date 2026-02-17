import { Resend } from "resend";
import { ContactFormEmail } from "@/components/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: any) {
    const { firstName, lastName, email, company, jobTitle, country, serviceInterest, resourceCount, gpuType, timeline, message } = formData;

    try {
        const data = await resend.emails.send({
            from: "Siscom Contact Form <onboarding@resend.dev>", // Update this when you have a custom domain
            to: ["mwitiisaac14@gmail.com"], // Keeping user's email for their continued testing
            subject: `New Contact Request: ${firstName} ${lastName}`,
            react: ContactFormEmail({
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
            }),
        });

        return { success: true, data };
    } catch (error: any) {
        console.log("Resend Error:", error);
        return { success: false, error: error.message || JSON.stringify(error) };
    }
}
