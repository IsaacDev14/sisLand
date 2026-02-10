"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { MessageSquare, BarChart3, Award, Target, Users, TrendingUp, Bell, Lightbulb } from "lucide-react";

export default function Pulse360Page() {
    return (
        <AppPageTemplate
            appName="PULSE 360"
            tagline="Customer Engagement & Feedback Platform"
            description="Listen, understand, and respond to your customers. Real-time surveys, NPS tracking, and advanced engagement analytics give you a 360° view of customer sentiment."
            heroImage="/images/dashboards/pulse-360.png"
            ctaText="Start Listening to Your Customers"
            stats={[
                { value: "85%", label: "Avg Response Rate" },
                { value: "50+", label: "Survey Templates" },
                { value: "5min", label: "Setup Time" },
                { value: "24/7", label: "Real-Time Alerts" }
            ]}
            features={[
                {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Smart Surveys",
                    description: "Create beautiful surveys with conditional logic, multi-language support, and mobile-first design."
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "NPS Tracking",
                    description: "Track Net Promoter Score over time, by segment, by product — spot trends instantly."
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
            useCases={[
                { title: "Hospitality & Hotels", description: "Post-stay surveys, real-time alerts for unhappy guests, and service recovery." },
                { title: "Retail Chains", description: "Store-level NPS, mystery shopper integration, and brand perception tracking." },
                { title: "Financial Services", description: "Transaction feedback, branch experience surveys, and complaint resolution." },
                { title: "Healthcare Providers", description: "Patient satisfaction, appointment feedback, and care quality metrics." },
                { title: "Telecom & ISPs", description: "Support interaction feedback, churn prediction, and service quality monitoring." },
                { title: "Education Institutions", description: "Student feedback, course evaluations, and campus experience surveys." }
            ]}
            faqs={[
                { question: "How are surveys distributed?", answer: "Via SMS, email, in-app widgets, QR codes, or kiosk mode. You can set automatic triggers after interactions like purchases, support calls, or service visits." },
                { question: "What is NPS and how do you track it?", answer: "Net Promoter Score measures customer loyalty on a 0-10 scale. We calculate NPS automatically, track it over time, and let you drill down by segment, product, or location." },
                { question: "Can I customize the survey design?", answer: "Absolutely. Choose from 50+ templates or build from scratch with our drag-and-drop editor. Brand it with your logo, colors, and custom domains." },
                { question: "Is offline surveying possible?", answer: "Yes. Our kiosk and mobile app modes work offline and sync data once connectivity is restored." }
            ]}
        />
    );
}
