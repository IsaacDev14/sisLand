"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { MessageSquare, BarChart3, Award, Target, Users, TrendingUp, Bell, Lightbulb } from "lucide-react";

export default function Pulse360Page() {
    return (
        <AppPageTemplate
            appName="PULSE 360"
            tagline="Pulse 360 – Customer Engagement & Feedback Platform"
            description="Pulse 360 is a customer engagement and feedback management platform designed to help businesses listen, understand, and respond to their customers. With real-time surveys, NPS tracking, and advanced engagement analytics, you get a 360° view of customer sentiment."
            heroImage="/images/dashboards/pulse-360.png"
            ctaText="Start Listening to Your Customers"
            features={[
                {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Smart Surveys",
                    description: "Create beautiful surveys with conditional logic, multi-language support, and mobile-first design."
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "NPS Tracking",
                    description: "Track Net Promoter Score over time, by segment, by product—spot trends instantly."
                },
                {
                    icon: <Award className="w-6 h-6" />,
                    title: "Sentiment Analysis",
                    description: "AI-powered analysis of open-ended feedback to surface themes and emotions."
                },
                {
                    icon: <Target className="w-6 h-6" />,
                    title: "Targeted Outreach",
                    description: "Reach the right customers at the right time with trigger-based survey distribution."
                },
                {
                    icon: <Users className="w-6 h-6" />,
                    title: "Customer Segmentation",
                    description: "Group customers by behavior, demographics, or satisfaction level for targeted actions."
                },
                {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Real-Time Dashboards",
                    description: "Live analytics, trend tracking, and customizable reports for stakeholders."
                },
                {
                    icon: <Bell className="w-6 h-6" />,
                    title: "Alert System",
                    description: "Instant alerts for negative feedback, enabling rapid response and recovery."
                },
                {
                    icon: <Lightbulb className="w-6 h-6" />,
                    title: "Actionable Insights",
                    description: "Turn feedback into action with automated workflows and improvement tracking."
                }
            ]}
            pillars={[
                {
                    title: "Data Collection",
                    features: [
                        "Multi-channel surveys (SMS, Email, In-App)",
                        "QR code & kiosk distribution",
                        "Post-interaction triggers",
                        "Offline survey support"
                    ]
                },
                {
                    title: "Analysis & Insights",
                    features: [
                        "AI sentiment analysis",
                        "Trend & benchmark reports",
                        "Customer journey mapping",
                        "Competitive benchmarking"
                    ]
                },
                {
                    title: "Action & Response",
                    features: [
                        "Automated follow-up workflows",
                        "Ticket creation from feedback",
                        "Service recovery programs",
                        "Impact measurement"
                    ]
                }
            ]}
        />
    );
}
