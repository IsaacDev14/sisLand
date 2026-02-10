"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { Wallet, FileText, TrendingUp, CreditCard, PieChart, Shield, Banknote, ArrowLeftRight } from "lucide-react";

export default function PesaHubPage() {
    return (
        <AppPageTemplate
            appName="PESAHUB"
            tagline="PesaHub – Financial Infrastructure for African Businesses"
            description="PesaHub is a comprehensive financial management platform designed for African SMEs. From invoicing and expense tracking to payment processing and financial reporting, PesaHub gives businesses full control over their financial operations."
            heroImage="/images/dashboards/pesahub.png"
            ctaText="Take Control of Your Finances"
            features={[
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Smart Invoicing",
                    description: "Create professional invoices, automate reminders, and track payment status in real time."
                },
                {
                    icon: <Wallet className="w-6 h-6" />,
                    title: "Expense Tracking",
                    description: "Categorize expenses, scan receipts, set budgets, and monitor cash flow effortlessly."
                },
                {
                    icon: <CreditCard className="w-6 h-6" />,
                    title: "Payment Processing",
                    description: "Accept payments via M-Pesa, bank transfer, cards, and mobile money with instant settlement."
                },
                {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Financial Reports",
                    description: "Automated P&L statements, balance sheets, cash flow reports, and tax summaries."
                },
                {
                    icon: <PieChart className="w-6 h-6" />,
                    title: "Budget Management",
                    description: "Set departmental budgets, track actuals vs. planned, and get variance alerts."
                },
                {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Tax Compliance",
                    description: "Automated tax calculations, filing reminders, and regulatory-compliant record keeping."
                },
                {
                    icon: <Banknote className="w-6 h-6" />,
                    title: "Multi-Currency",
                    description: "Support for multiple currencies with real-time exchange rates and FX management."
                },
                {
                    icon: <ArrowLeftRight className="w-6 h-6" />,
                    title: "Bank Reconciliation",
                    description: "Automated bank feed matching, exception handling, and reconciliation workflows."
                }
            ]}
            pillars={[
                {
                    title: "Revenue Management",
                    features: [
                        "Professional invoicing",
                        "Payment tracking & reminders",
                        "Recurring billing",
                        "Revenue recognition"
                    ]
                },
                {
                    title: "Cost Management",
                    features: [
                        "Expense categorization",
                        "Purchase order management",
                        "Budget vs. actuals",
                        "Approval workflows"
                    ]
                },
                {
                    title: "Reporting & Compliance",
                    features: [
                        "Financial dashboards",
                        "Tax-ready reports",
                        "Audit trail",
                        "Multi-entity consolidation"
                    ]
                }
            ]}
        />
    );
}
