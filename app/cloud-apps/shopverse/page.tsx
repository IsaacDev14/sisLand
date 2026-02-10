"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { ShoppingCart, Package, CreditCard, BarChart3, Globe, Truck, Tags, Users } from "lucide-react";

export default function ShopversePage() {
    return (
        <AppPageTemplate
            appName="SHOPVERSE"
            tagline="The All-in-One E-Commerce Platform for African Merchants"
            description="Build, launch, and scale your online store. From product listings to payment processing and logistics integration, everything you need to sell online in one platform."
            heroImage="/images/dashboards/shopverse.png"
            ctaText="Launch Your Online Store Today"
            stats={[
                { value: "10K+", label: "Active Merchants" },
                { value: "$2M+", label: "Monthly GMV" },
                { value: "15+", label: "Payment Methods" },
                { value: "<2s", label: "Page Load Time" }
            ]}
            features={[
                {
                    icon: <ShoppingCart className="w-6 h-6" />,
                    title: "Storefront Builder",
                    description: "Beautiful, customizable storefronts optimized for mobile and desktop shoppers."
                },
                {
                    icon: <Package className="w-6 h-6" />,
                    title: "Inventory Management",
                    description: "Real-time stock tracking, automated reorder alerts, and multi-warehouse support."
                },
                {
                    icon: <CreditCard className="w-6 h-6" />,
                    title: "Payment Integration",
                    description: "Accept M-Pesa, cards, bank transfers, and mobile wallets with seamless checkout."
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "Sales Analytics",
                    description: "Track revenue, top products, customer behavior, and conversion funnels."
                },
                {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Multi-Channel Sales",
                    description: "Sell on your website, social media, and in-store from one dashboard."
                },
                {
                    icon: <Truck className="w-6 h-6" />,
                    title: "Logistics Integration",
                    description: "Integrated shipping partners, real-time delivery tracking, and automated dispatch."
                },
                {
                    icon: <Tags className="w-6 h-6" />,
                    title: "Promotions Engine",
                    description: "Create discounts, flash sales, loyalty rewards, and coupon campaigns."
                },
                {
                    icon: <Users className="w-6 h-6" />,
                    title: "Customer Management",
                    description: "Build customer profiles, track purchase history, and personalize marketing."
                }
            ]}
            pillars={[
                {
                    title: "Storefront & Catalog",
                    features: [
                        "Drag-and-drop page builder",
                        "Product variants & categories",
                        "SEO-optimized pages",
                        "Custom domain support"
                    ]
                },
                {
                    title: "Orders & Fulfillment",
                    features: [
                        "Automated order processing",
                        "Multi-carrier shipping",
                        "Return & refund management",
                        "Real-time order tracking"
                    ]
                },
                {
                    title: "Growth & Marketing",
                    features: [
                        "Email & SMS campaigns",
                        "Abandoned cart recovery",
                        "Customer segmentation",
                        "Social media integration"
                    ]
                }
            ]}
            useCases={[
                { title: "Fashion & Apparel", description: "Size guides, lookbooks, and variant management for clothing brands." },
                { title: "Electronics Retailers", description: "Spec sheets, warranty tracking, and comparison shopping features." },
                { title: "Grocery & FMCG", description: "Perishable stock management, delivery slots, and subscription orders." },
                { title: "Artisans & Crafts", description: "Showcase handmade products with rich media and story-driven storefronts." },
                { title: "B2B Wholesale", description: "Bulk pricing, tiered discounts, and purchase order workflows." },
                { title: "Digital Products", description: "Sell courses, e-books, and software with instant digital delivery." }
            ]}
            faqs={[
                { question: "How much does it cost to open a store?", answer: "You can start free with our Starter plan. Paid plans start at affordable monthly rates and scale with your sales volume. No hidden fees." },
                { question: "Which payment methods are supported?", answer: "We support M-Pesa, Airtel Money, bank transfers, Visa/Mastercard, and 10+ other payment methods popular across Africa." },
                { question: "Can I sell internationally?", answer: "Yes. Shopverse supports multi-currency checkout, international shipping integrations, and tax calculations for cross-border commerce." },
                { question: "Do I need technical skills?", answer: "Not at all. Our drag-and-drop builder lets you create a professional store in minutes. For advanced customization, our API and theme system are available." }
            ]}
        />
    );
}
