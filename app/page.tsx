"use client";

import Navbar from "@/components/Navbar";
import Home2Hero from "@/components/Home2Hero";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import BlogSection from "@/components/BlogSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Home2Hero />
        <PartnersSection />
        <TestimonialsSection />
        <SolutionsSection />
        <BlogSection />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
