"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalInnovationHero from "@/components/DigitalInnovationHero";
import DigitalInnovationPartners from "@/components/DigitalInnovationPartners";
import DigitalInnovationApproach from "@/components/DigitalInnovationApproach";
import DigitalInnovationWhatWeBuild from "@/components/DigitalInnovationWhatWeBuild";
import DigitalInnovationValues from "@/components/DigitalInnovationValues";
import DigitalInnovationSuccess from "@/components/DigitalInnovationSuccess";
import DigitalInnovationCTA from "@/components/DigitalInnovationCTA";

export default function DigitalInnovationPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main>
                <DigitalInnovationHero />
                <DigitalInnovationPartners />
                <DigitalInnovationApproach />
                <DigitalInnovationWhatWeBuild />
                <DigitalInnovationValues />
                <DigitalInnovationSuccess />
                <DigitalInnovationCTA />
            </main>
            <Footer />
        </div>
    );
}
