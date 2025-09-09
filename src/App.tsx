/** @format */

import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/sections/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { TrustedBySection } from "./components/sections/TrustedBySection";
import { SolutionsSection } from "./components/sections/SolutionsSection";
import { TechnologiesSection } from "./components/sections/TechnologiesSection";
import { ResultsSection } from "./components/sections/ResultsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";

const imgWaveBackground = "assets/wave-bg.svg";


export default function WebsiteFacss() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-facss-dark min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-0 scale-x-[-1] w-96 h-96 opacity-30"
          style={{
            backgroundImage: `url(${imgWaveBackground})`,
            backgroundSize: "cover",
          }}
        />
        {/* Subtle glow effects without visible dots */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 opacity-0 shadow-[0_0_300px_120px_rgba(19,162,85,0.08)]" />
        <div className="absolute top-3/4 left-1/4 w-1 h-1 opacity-0 shadow-[0_0_200px_100px_rgba(19,162,85,0.12)]" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 opacity-0 shadow-[0_0_250px_80px_rgba(19,162,85,0.06)]" />
      </div>

      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main>
        <HeroSection />
        <TrustedBySection />
        <SolutionsSection />
        <TechnologiesSection />
        <ResultsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
