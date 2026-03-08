"use client";

import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import LandingLocations from "@/components/LandingLocations";
import LandingServices from "@/components/LandingServices";
import LandingTargetMarket from "@/components/LandingTargetMarket";
import LandingInfrastructure from "@/components/LandingInfrastructure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero />
        <LandingLocations />
        <LandingServices />
        <LandingTargetMarket />
        <LandingInfrastructure />
      </main>
      <Footer />
    </>
  );
}
