"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { Users, Wallet, HandCoins, PieChart, FileText, Shield, Building, TrendingUp } from "lucide-react";

export default function SmartCoopPage() {
    return (
        <AppPageTemplate
            appName="SMARTCOOP"
            tagline="SmartCoop – Digital Solution for SACCO & Cooperative Management"
            description="SmartCoop is a comprehensive digital platform for SACCOs and cooperative societies. From member registration to loan management, savings tracking, and dividend calculations, SmartCoop automates and streamlines cooperative operations."
            heroImage="/images/dashboards/smartcoop.png"
            ctaText="Modernize Your Cooperative Today"
            features={[
                {
                    icon: <Users className="w-6 h-6" />,
                    title: "Member Management",
                    description: "Digital registration, KYC verification, member directories, and communication portals."
                },
                {
                    icon: <HandCoins className="w-6 h-6" />,
                    title: "Loan Processing",
                    description: "End-to-end loan lifecycle—application, appraisal, approval, disbursement, and repayment tracking."
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
        />
    );
}
