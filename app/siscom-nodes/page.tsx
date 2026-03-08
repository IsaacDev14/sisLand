"use client";

import Navbar from "@/components/Navbar";
import Nodes from "@/components/Nodes";
import PartnersSection from "@/components/PartnersSection";
import PricingNodes from "@/components/PricingNodes";

import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function NodesPage() {
    return (
        <>
            <Navbar />
            <main>
                <Nodes />
                <PartnersSection />
                <PricingNodes />
                <FooterCTA />
            </main>
            <Footer />
        </>
    );
}
