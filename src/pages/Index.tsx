import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loading } from "@/components/Loading";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { TeamSection } from "@/components/TeamSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increased to 3 seconds to see the loading animation better

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SpeakersSection />
          <TeamSection />
          <RegistrationSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;