// src/pages/Index.tsx
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { TeamSection } from "@/components/TeamSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key="content"
        >
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SpeakersSection />
          <TeamSection />
          <RegistrationSection />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;