"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfrastructureSolutionsHero from "@/components/InfrastructureSolutionsHero";
import InfrastructureDescription from "@/components/InfrastructureDescription";
import InfrastructureSolutionsCards from "@/components/InfrastructureSolutionsCards";

export default function InfrastructureSolutionsPage() {
    return (
        <>
            <Navbar />
            <main>
                <InfrastructureSolutionsHero />
                <InfrastructureDescription />
                <InfrastructureSolutionsCards />
            </main>
            <Footer />
        </>
    );
}
