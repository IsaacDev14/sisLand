"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { ClipboardCheck, Users, FileText, Shield, BarChart3, Clock, Zap, Heart } from "lucide-react";

export default function KayaCLMPage() {
    return (
        <AppPageTemplate
            appName="KAYA CLM"
            tagline="Customer Lifecycle Management for Service Businesses"
            description="From onboarding to retention, manage every stage of your customer relationship with intelligent workflows, real-time tracking, and automated follow-ups."
            heroImage="/images/dashboards/kaya-clm.png"
            ctaText="Ready to Transform Your Customer Management?"
            stats={[
                { value: "40%", label: "Faster Onboarding" },
                { value: "3x", label: "Customer Retention" },
                { value: "60%", label: "Less Manual Work" },
                { value: "99.9%", label: "Uptime SLA" }
            ]}
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
                    description: "Trigger actions based on events — reminders, follow-ups, escalations all automated."
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
            useCases={[
                { title: "Salons & Spas", description: "Manage appointments, track client preferences, and automate rebooking reminders." },
                { title: "Field Service Companies", description: "Dispatch technicians, track job progress, and invoice on completion." },
                { title: "Healthcare Clinics", description: "Patient intake, visit history, follow-up scheduling, and compliance." },
                { title: "Professional Services", description: "Client onboarding, project tracking, and milestone billing." },
                { title: "Automotive Workshops", description: "Vehicle service history, part ordering, and maintenance reminders." },
                { title: "Property Management", description: "Tenant lifecycle, maintenance requests, and lease management." }
            ]}
            faqs={[
                { question: "How long does setup take?", answer: "Most businesses are up and running within 48 hours. Our onboarding team helps migrate your existing data and configure workflows to match your operations." },
                { question: "Can I integrate with my existing tools?", answer: "Yes. Kaya CLM integrates with popular payment gateways, accounting software, SMS providers, and calendar apps via our API and pre-built connectors." },
                { question: "Is there a limit on the number of customers?", answer: "No. Kaya CLM scales with your business. Our infrastructure handles thousands of active customer records without performance degradation." },
                { question: "Do you offer mobile access?", answer: "Yes. Kaya CLM is fully responsive and works on any device. We also offer dedicated mobile apps for field staff." }
            ]}
        />
    );
}
