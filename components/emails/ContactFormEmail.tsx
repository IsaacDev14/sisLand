import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
    country: string;
    serviceInterest: string;
    resourceCount: string;
    gpuType: string[];
    timeline: string;
    message: string;
}

export const ContactFormEmail = ({
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
}: ContactFormEmailProps) => {
    const previewText = `New Contact Request from ${firstName} ${lastName} - ${company}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-full max-w-[600px]">
                        <Section className="mt-[32px]">
                            <Img
                                src="https://siscom.africa/logo.png" // Replace with actual logo URL if available
                                width="120"
                                height="40"
                                alt="Siscom"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            New Contact Request
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello Admin,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            You have received a new contact request from <strong>{firstName} {lastName}</strong> at <strong>{company}</strong>.
                        </Text>
                        <Hr className="border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Section>
                            <Row>
                                <Column className="w-1/3 align-top">
                                    <Text className="text-[#666666] text-[12px] font-bold uppercase tracking-wider mb-1">Contact Info</Text>
                                    <Text className="text-black text-[14px] m-0 mb-4">
                                        {firstName} {lastName}<br />
                                        <Link href={`mailto:${email}`} className="text-blue-600 no-underline">
                                            {email}
                                        </Link><br />
                                        {jobTitle}<br />
                                        {country}
                                    </Text>
                                </Column>
                                <Column className="w-1/3 align-top">
                                    <Text className="text-[#666666] text-[12px] font-bold uppercase tracking-wider mb-1">Interest</Text>
                                    <Text className="text-black text-[14px] m-0 mb-4">
                                        {serviceInterest}<br />
                                        Timeline: {timeline}
                                    </Text>
                                </Column>
                                <Column className="w-1/3 align-top">
                                    <Text className="text-[#666666] text-[12px] font-bold uppercase tracking-wider mb-1">Resources</Text>
                                    <Text className="text-black text-[14px] m-0 mb-4">
                                        {resourceCount}<br />
                                        GPU Types: {gpuType.join(", ")}
                                    </Text>
                                </Column>
                            </Row>
                        </Section>
                        <Hr className="border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Section>
                            <Text className="text-[#666666] text-[12px] font-bold uppercase tracking-wider mb-1">Message</Text>
                            <Text className="text-black text-[14px] leading-[24px] bg-gray-50 p-4 rounded-md border border-gray-100">
                                {message}
                            </Text>
                        </Section>
                        <Hr className="border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
                            This message was sent from the Siscom Contact Form.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactFormEmail;
