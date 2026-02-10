"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { Megaphone, MapPin, Gift, BarChart3, Users, Vote, Calendar, Radio } from "lucide-react";

export default function MobilizePage() {
    return (
        <AppPageTemplate
            appName="MOBILIZE"
            tagline="Digital Mobilization Platform for Campaigns & Advocacy"
            description="Manage outreach, fundraising, polling, events, and real-time analytics from a single command center. Built for political campaigns, advocacy groups, and community organizations."
            heroImage="/images/dashboards/mobilize.png"
            ctaText="Power Your Next Campaign with Mobilize"
            stats={[
                { value: "1M+", label: "People Reached" },
                { value: "50+", label: "Campaigns Powered" },
                { value: "12", label: "Countries Active" },
                { value: "4x", label: "Engagement Rate" }
            ]}
            features={[
                {
                    icon: <Megaphone className="w-6 h-6" />,
                    title: "Multi-Channel Outreach",
                    description: "SMS, WhatsApp, email, and social media campaigns from one unified interface."
                },
                {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Geo-Targeted Campaigns",
                    description: "Region-specific messaging, constituency mapping, and location-based engagement."
                },
                {
                    icon: <Gift className="w-6 h-6" />,
                    title: "Fundraising Tools",
                    description: "Online donation pages, peer-to-peer fundraising, and contribution tracking."
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "Real-Time Analytics",
                    description: "Live dashboards, sentiment tracking, and engagement metrics in real time."
                },
                {
                    icon: <Users className="w-6 h-6" />,
                    title: "Volunteer Management",
                    description: "Recruit, train, and deploy volunteers with task assignment and communication tools."
                },
                {
                    icon: <Vote className="w-6 h-6" />,
                    title: "Polling & Surveys",
                    description: "Conduct polls, gather opinions, and track public sentiment across demographics."
                },
                {
                    icon: <Calendar className="w-6 h-6" />,
                    title: "Event Management",
                    description: "Plan rallies, town halls, and meetings with RSVPs, check-ins, and logistics."
                },
                {
                    icon: <Radio className="w-6 h-6" />,
                    title: "Command Center",
                    description: "Centralized war room with live monitoring, rapid response, and crisis management."
                }
            ]}
            pillars={[
                {
                    title: "Engagement",
                    features: [
                        "Multi-channel communication",
                        "Audience segmentation",
                        "Personalized messaging",
                        "Social media integration"
                    ]
                },
                {
                    title: "Operations",
                    features: [
                        "Volunteer coordination",
                        "Event planning & logistics",
                        "Regional team management",
                        "Task tracking & reporting"
                    ]
                },
                {
                    title: "Intelligence",
                    features: [
                        "Real-time sentiment analysis",
                        "Polling data visualization",
                        "Competitive monitoring",
                        "Impact measurement"
                    ]
                }
            ]}
            useCases={[
                { title: "Political Campaigns", description: "Voter outreach, constituency mapping, door-to-door tracking, and election day coordination." },
                { title: "Advocacy & NGOs", description: "Petition campaigns, grassroots mobilization, and impact reporting for donors." },
                { title: "Trade Unions", description: "Member communication, strike coordination, collective bargaining campaigns." },
                { title: "Community Organizations", description: "Neighborhood initiatives, fundraising drives, and volunteer coordination." },
                { title: "Religious Organizations", description: "Event management, congregation outreach, and community project mobilization." },
                { title: "Corporate CSR", description: "Employee engagement programs, volunteer drives, and social impact measurement." }
            ]}
            faqs={[
                { question: "Can I target specific regions or demographics?", answer: "Yes. Mobilize supports geo-fencing, constituency mapping, and demographic targeting. Send different messages to different audiences based on location, age, gender, or custom segments." },
                { question: "How does fundraising work?", answer: "Create branded donation pages, enable peer-to-peer fundraising, accept payments via M-Pesa and cards, and track all contributions with real-time dashboards." },
                { question: "Is data secure and private?", answer: "Absolutely. All data is encrypted at rest and in transit. We comply with data protection regulations and offer role-based access controls." },
                { question: "Can I manage multiple campaigns simultaneously?", answer: "Yes. Our multi-campaign dashboard lets you run parallel campaigns with separate teams, budgets, and analytics while maintaining a unified command view." }
            ]}
        />
    );
}
