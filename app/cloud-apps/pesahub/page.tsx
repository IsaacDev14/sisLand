"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { Wallet, FileText, TrendingUp, CreditCard, PieChart, Shield, Banknote, ArrowLeftRight } from "lucide-react";

export default function PesaHubPage() {
    return (
        <AppPageTemplate
            appName="PESAHUB"
            tagline="Financial Infrastructure for African Businesses"
            description="From invoicing and expense tracking to payment processing and financial reporting, PesaHub gives SMEs full control over their financial operations."
            heroImage="/images/dashboards/pesahub.png"
            ctaText="Take Control of Your Finances"
            stats={[
                { value: "$50M+", label: "Transactions Processed" },
                { value: "5K+", label: "Active Businesses" },
                { value: "8", label: "Currencies Supported" },
                { value: "99.99%", label: "Payment Uptime" }
            ]}
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
            useCases={[
                { title: "Startups & SMEs", description: "Simple invoicing, expense tracking, and cash flow visibility without an accountant." },
                { title: "Freelancers & Consultants", description: "Professional invoicing, time tracking, and multi-client billing." },
                { title: "Retail Businesses", description: "POS integration, inventory costing, and daily sales reconciliation." },
                { title: "Import/Export Companies", description: "Multi-currency invoicing, customs documentation, and FX management." },
                { title: "NGOs & Nonprofits", description: "Grant tracking, donor reporting, and fund accountability." },
                { title: "Multi-Entity Groups", description: "Consolidated reporting, inter-company transactions, and group-level analytics." }
            ]}
            faqs={[
                { question: "Is PesaHub a replacement for an accountant?", answer: "PesaHub automates bookkeeping, invoicing, and reporting but works alongside your accountant. Many accountants use PesaHub to access real-time financials and prepare tax filings faster." },
                { question: "Which payment methods are supported?", answer: "M-Pesa, Airtel Money, bank transfers, Visa/Mastercard, and multiple mobile money platforms across East and West Africa." },
                { question: "Can PesaHub handle multiple currencies?", answer: "Yes. We support 8+ currencies with real-time exchange rates, automatic FX gain/loss calculations, and multi-currency reporting." },
                { question: "Is my financial data secure?", answer: "Yes. We use bank-grade encryption, SOC 2 compliant infrastructure, and role-based access controls. Your data is backed up in real time across multiple regions." }
            ]}
        />
    );
}
