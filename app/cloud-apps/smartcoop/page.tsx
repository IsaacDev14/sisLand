"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { Users, Wallet, HandCoins, PieChart, FileText, Shield, Building, TrendingUp } from "lucide-react";

export default function SmartCoopPage() {
    return (
        <AppPageTemplate
            appName="SMARTCOOP"
            tagline="Digital Solution for SACCO & Cooperative Management"
            description="From member registration to loan management, savings tracking, and dividend calculations, SmartCoop automates and streamlines cooperative operations for the modern era."
            heroImage="/images/dashboards/smartcoop.png"
            ctaText="Modernize Your Cooperative Today"
            stats={[
                { value: "200+", label: "SACCOs Managed" },
                { value: "500K+", label: "Members Served" },
                { value: "98%", label: "Accuracy Rate" },
                { value: "70%", label: "Time Saved" }
            ]}
            features={[
                {
                    icon: <Users className="w-6 h-6" />,
                    title: "Member Management",
                    description: "Digital registration, KYC verification, member directories, and communication portals."
                },
                {
                    icon: <HandCoins className="w-6 h-6" />,
                    title: "Loan Processing",
                    description: "End-to-end loan lifecycle — application, appraisal, approval, disbursement, and repayment tracking."
                },
                {
                    icon: <Wallet className="w-6 h-6" />,
                    title: "Savings Management",
                    description: "Multiple savings products, automated deductions, interest calculations, and withdrawal processing."
                },
                {
                    icon: <PieChart className="w-6 h-6" />,
                    title: "Dividend Calculation",
                    description: "Automated dividend computations based on shares, deposits, and configurable formulas."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Financial Reports",
                    description: "Regulatory-compliant reports, trial balances, income statements, and balance sheets."
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Compliance & Audit",
                    description: "Built-in compliance checks, audit trails, and regulatory reporting tools."
                },
                {
                    icon: <Building className="w-6 h-6" />,
                    title: "Multi-Branch",
                    description: "Manage multiple branches and chapters from a single unified dashboard."
                },
                {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Growth Analytics",
                    description: "Track membership growth, loan portfolio health, and operational KPIs."
                }
            ]}
            pillars={[
                {
                    title: "Member Services",
                    features: [
                        "Self-service member portal",
                        "Mobile app for members",
                        "Statement generation",
                        "Communication center"
                    ]
                },
                {
                    title: "Financial Operations",
                    features: [
                        "Loan product configuration",
                        "Guarantor management",
                        "Interest rate computation",
                        "Payment integration"
                    ]
                },
                {
                    title: "Governance",
                    features: [
                        "Board meeting management",
                        "Voting & elections",
                        "Policy enforcement",
                        "Regulatory compliance"
                    ]
                }
            ]}
            useCases={[
                { title: "Employee SACCOs", description: "Payroll-deducted savings, employer-guaranteed loans, and automated member contributions." },
                { title: "Agricultural Cooperatives", description: "Seasonal savings products, crop financing, and input supply chain management." },
                { title: "Housing Cooperatives", description: "Share capital tracking, project financing, and member property allocation." },
                { title: "Transport SACCOs", description: "Vehicle financing, fleet management integration, and revenue pooling." },
                { title: "Community Savings Groups", description: "Chama management, rotating funds, and group lending with accountability." },
                { title: "Multi-Purpose Cooperatives", description: "Flexible product configuration for diverse cooperative models and member needs." }
            ]}
            faqs={[
                { question: "Is SmartCoop compliant with local regulations?", answer: "Yes. SmartCoop is built to meet SASRA (Kenya), AMFI, and other East African cooperative regulatory requirements. Reports are generated in regulator-required formats." },
                { question: "Can members access their accounts online?", answer: "Yes. Members get a self-service portal and mobile app to view balances, apply for loans, download statements, and communicate with the SACCO." },
                { question: "How does loan processing work?", answer: "Members apply online, the system performs automatic eligibility checks based on your configured rules, sends for committee approval, and handles disbursement and repayment tracking." },
                { question: "Can we migrate from our existing system?", answer: "Absolutely. Our team handles full data migration from Excel, legacy systems, or other SACCO software with zero downtime." }
            ]}
        />
    );
}
