"use client";

import AppPageTemplate from "@/components/AppPageTemplate";
import { ShoppingCart, Package, CreditCard, BarChart3, Globe, Truck, Tags, Users } from "lucide-react";

export default function ShopversePage() {
    return (
        <AppPageTemplate
            appName="SHOPVERSE"
            tagline="Shopverse – The All‑in‑One E‑Commerce Platform for African Merchants"
            description="Shopverse empowers African merchants to build, launch, and scale their online stores. From product listings to payment processing and logistics integration, everything you need to sell online is in one platform."
            heroImage="/images/dashboards/shopverse.png"
            ctaText="Launch Your Online Store Today"
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
        />
    );
}
