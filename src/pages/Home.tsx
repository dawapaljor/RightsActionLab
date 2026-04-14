import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "../constants";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/institutional/1920/1080?blur=2" 
          alt="Background" 
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="h-1 w-20 bg-secondary mb-8" />
          <h1 className="text-5xl md:text-7xl font-heading font-medium leading-[1.1] mb-8 italic">
            Advancing human rights through <span className="text-secondary not-italic font-bold">training, research & technology.</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light text-white/90 mb-10 leading-relaxed max-w-2xl">
            {SITE_CONTENT.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-sm font-bold uppercase tracking-widest" asChild>
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-sm font-bold uppercase tracking-widest border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Our Mission</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
