"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { ClipboardCheck, Users, FileText, Shield, BarChart3, Clock, Zap, Heart } from "lucide-react";

export default function KayaCLMPage() {
    return (
        <AppPageTemplate
            appName="KAYA CLM"
            tagline="Siscom Kaya CLM – Customer Lifecycle Management for Service Businesses"
            description="KAYA CLM is a complete customer lifecycle management solution built for service businesses. From onboarding to retention, manage every stage of your customer relationship with intelligent workflows, real-time tracking, and automated follow-ups."
            heroImage="/images/dashboards/kaya-clm.png"
            ctaText="Ready to Transform Your Customer Management?"
            features={[
                {
                    icon: <ClipboardCheck className="w-6 h-6" />,
                    title: "Smart Scheduling",
                    description: "Drag-and-drop calendars, auto-assign jobs based on staff availability, skills, and location."
                },
                {
                    icon: <Users className="w-6 h-6" />,
                    title: "360° Customer View",
                    description: "Complete profiles with service history, preferences, notes, and communication logs."
                },
                {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Real-Time Tracking",
                    description: "Live status and transparent wait times create trust and satisfaction."
                },
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Automated Workflows",
                    description: "Trigger actions based on events—reminders, follow-ups, escalations all automated."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Invoicing & Billing",
                    description: "Generate professional invoices and track payments with integrated billing."
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Compliance Ready",
                    description: "Audit trails, consent management, and data protection built in."
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "Scale Operations",
                    description: "Serve more customers without chaos or operational overhead."
                },
                {
                    icon: <Heart className="w-6 h-6" />,
                    title: "Build Loyalty",
                    description: "Track history, automate follow-ups, reward repeat visits."
                }
            ]}
            pillars={[
                {
                    title: "Customer Management",
                    features: [
                        "Unified customer profiles",
                        "Service history & preferences",
                        "Automated onboarding flows",
                        "Customer segmentation"
                    ]
                },
                {
                    title: "Operations",
                    features: [
                        "Smart scheduling & dispatch",
                        "Real-time job tracking",
                        "Inventory management",
                        "Staff performance analytics"
                    ]
                },
                {
                    title: "Growth",
                    features: [
                        "Automated follow-ups",
                        "Feedback collection",
                        "Loyalty programs",
                        "Revenue analytics"
                    ]
                }
            ]}
        />
    );
}
