"use client";

import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import LandingServices from "@/components/LandingServices";
import LandingInfrastructure from "@/components/LandingInfrastructure";
import LandingTargetMarket from "@/components/LandingTargetMarket";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero />
        <LandingServices />
        <LandingInfrastructure />
        <LandingTargetMarket />
      </main>
      <Footer />
    </>
  );
}
