"use client";

import Navbar from "@/components/Navbar";
import Home2Hero from "@/components/Home2Hero";
import PartnersSection from "@/components/PartnersSection";
import PricingNodes from "@/components/PricingNodes";
import SolutionsSection from "@/components/SolutionsSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function NodesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Home2Hero />
        <PartnersSection />
        <PricingNodes />
        <SolutionsSection />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
