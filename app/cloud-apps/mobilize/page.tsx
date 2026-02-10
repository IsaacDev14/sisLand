"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { Megaphone, MapPin, Gift, BarChart3, Users, Vote, Calendar, Radio } from "lucide-react";

export default function MobilizePage() {
    return (
        <AppPageTemplate
            appName="MOBILIZE"
            tagline="Mobilize – Digital Mobilization Platform for Campaigns & Advocacy"
            description="Mobilize is a comprehensive digital mobilization platform built for political campaigns, advocacy groups, and community organizations. Manage outreach, fundraising, polling, events, and real-time analytics from a single command center."
            heroImage="/images/dashboards/mobilize.png"
            ctaText="Power Your Next Campaign with Mobilize"
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
        />
    );
}
