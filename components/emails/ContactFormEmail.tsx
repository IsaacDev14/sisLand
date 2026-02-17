import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
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
    return (
        <Html>
            <Head />
            <Preview>New Contact Request from {firstName} {lastName} at {company}</Preview>
            <Tailwind>
                <Body className="bg-[#f4f4f7] my-auto mx-auto font-sans text-[#1a1a1a]">
                    <Container className="border border-solid border-[#eaeaea] rounded-lg my-[40px] mx-auto w-full max-w-[600px] bg-white overflow-hidden shadow-md">

                        {/* HEADER */}
                        <Section className="bg-white p-[30px] border-b border-solid border-[#f0f0f0]">
                            <Row>
                                <Column>
                                    <Text className="text-[#FF0055] text-[26px] font-extrabold tracking-tight m-0 leading-none">
                                        <span className="mr-1">///</span>SISCOM
                                    </Text>
                                </Column>
                                <Column align="right">
                                    <Text className="text-[#999] text-[12px] font-medium m-0 mt-2">
                                        New Lead Notification
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* CONTENT BODY */}
                        <Section className="p-[40px]">
                            <Heading className="text-[22px] font-bold text-[#111] leading-tight m-0 mb-[15px]">
                                New contact request from {company}
                            </Heading>
                            <Text className="text-[16px] leading-[1.6] text-[#555] m-0 mb-[20px]">
                                Hello Admin,<br />
                                <strong>{firstName} {lastName}</strong> has submitted a new inquiry regarding <strong>{serviceInterest}</strong>.
                            </Text>

                            {/* INFO TABLE */}
                            <Section className="border border-solid border-[#e0e0e0] rounded-md overflow-hidden mt-[20px] mb-[30px] w-full">
                                <Row className="border-b border-solid border-[#eee]">
                                    <Column className="bg-[#f9f9f9] w-[30%] text-[#666] font-bold uppercase text-[12px] p-[12px] border-r border-solid border-[#eee] align-top">
                                        Contact Name
                                    </Column>
                                    <Column className="text-[#222] font-medium text-[14px] p-[12px] align-top">
                                        {firstName} {lastName}
                                    </Column>
                                </Row>
                                <Row className="border-b border-solid border-[#eee]">
                                    <Column className="bg-[#f9f9f9] w-[30%] text-[#666] font-bold uppercase text-[12px] p-[12px] border-r border-solid border-[#eee] align-top">
                                        Email Address
                                    </Column>
                                    <Column className="text-[#222] font-medium text-[14px] p-[12px] align-top">
                                        <Link href={`mailto:${email}`} className="text-[#FF0055] no-underline font-medium">
                                            {email}
                                        </Link>
                                    </Column>
                                </Row>
                                <Row className="border-b border-solid border-[#eee]">
                                    <Column className="bg-[#f9f9f9] w-[30%] text-[#666] font-bold uppercase text-[12px] p-[12px] border-r border-solid border-[#eee] align-top">
                                        Company
                                    </Column>
                                    <Column className="text-[#222] font-medium text-[14px] p-[12px] align-top">
                                        {company}
                                    </Column>
                                </Row>
                                <Row className="border-b border-solid border-[#eee]">
                                    <Column className="bg-[#f9f9f9] w-[30%] text-[#666] font-bold uppercase text-[12px] p-[12px] border-r border-solid border-[#eee] align-top">
                                        Job Title
                                    </Column>
                                    <Column className="text-[#222] font-medium text-[14px] p-[12px] align-top">
                                        {jobTitle}
                                    </Column>
                                </Row>
                                <Row className="border-b border-solid border-[#eee]">
                                    <Column className="bg-[#f9f9f9] w-[30%] text-[#666] font-bold uppercase text-[12px] p-[12px] border-r border-solid border-[#eee] align-top">
                                        Location
                                    </Column>
                                    <Column className="text-[#222] font-medium text-[14px] p-[12px] align-top">
                                        {country}
                                    </Column>
                                </Row>
                                <Row>
                                    <Column className="bg-[#f9f9f9] w-[30%] text-[#666] font-bold uppercase text-[12px] p-[12px] border-r border-solid border-[#eee] align-top">
                                        Timeline
                                    </Column>
                                    <Column className="text-[#222] font-medium text-[14px] p-[12px] align-top">
                                        {timeline}
                                    </Column>
                                </Row>
                            </Section>

                            {/* HIGHLIGHT BOX */}
                            <Section className="bg-[#f8f9fc] border border-solid border-[#eef0f5] border-l-4 border-l-[#FF0055] rounded-sm p-[25px] mb-[30px]">
                                <Text className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-[15px] pb-[10px] border-b border-solid border-[#e0e0e0] block">
                                    Infrastructure Requirements
                                </Text>
                                <Row>
                                    <Column className="w-[50%] align-top">
                                        <Text className="text-[20px] font-bold text-[#111] m-0 mb-1">
                                            {resourceCount}
                                        </Text>
                                        <Text className="text-[14px] text-[#666] m-0">
                                            Quantity Requested
                                        </Text>
                                    </Column>
                                    <Column className="w-[50%] align-top">
                                        <Text className="text-[20px] font-bold text-[#111] m-0 mb-1">
                                            {gpuType.length > 0 ? gpuType[0] : 'None'}
                                            {gpuType.length > 1 && <span className="text-[14px] ml-1 font-normal text-[#666]">(+{gpuType.length - 1} more)</span>}
                                        </Text>
                                        <Text className="text-[14px] text-[#666] m-0">
                                            {gpuType.length > 1 ? `Models: ${gpuType.join(", ")}` : 'Model'}
                                        </Text>
                                    </Column>
                                </Row>
                            </Section>

                            {/* MESSAGE BOX */}
                            <Section className="bg-white p-0 mb-[35px]">
                                <Text className="text-[12px] font-bold text-[#888] uppercase tracking-wide m-0 mb-[5px] block">
                                    Message
                                </Text>
                                <Text className="italic text-[#555] text-[16px] border-l-[3px] border-solid border-[#ddd] pl-[15px] py-[5px] m-0">
                                    "{message}"
                                </Text>
                            </Section>

                            {/* ACTION BUTTON */}
                            <Section className="text-left pt-[10px] border-t border-solid border-[#f0f0f0] mt-[10px]">
                                <Link
                                    href={`mailto:${email}`}
                                    className="bg-[#FF0055] text-white text-[15px] font-semibold px-[28px] py-[12px] rounded-md no-underline inline-block mt-[25px] hover:bg-[#d40047]"
                                >
                                    Reply to Lead
                                </Link>
                            </Section>
                        </Section>

                        {/* FOOTER */}
                        <Section className="bg-[#fafafa] p-[20px] text-center border-t border-solid border-[#eeeeee]">
                            <Text className="text-[12px] text-[#999] leading-[1.5] m-0">
                                System Notification • SISCOM Internal<br />
                                Reliance Center, Woodvale, Nairobi, Kenya
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactFormEmail;
