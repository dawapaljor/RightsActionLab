import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "../constants";
import { ArrowRight, ExternalLink, Hash } from "lucide-react";

const ProjectExhibition = ({ project, index }: { project: any; index: number; key?: string }) => {
  return (
    <motion.div
      id={project.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative min-h-[80vh] flex items-center py-20 overflow-hidden border-b border-border last:border-0"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <span className="text-[40rem] font-heading font-bold leading-none select-none">
          {index + 1}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-secondary">
                <Hash className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.4em]">Initiative {String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <div className="space-y-4">
                <img 
                  src={project.logo} 
                  alt="" 
                  className="h-10 w-auto object-contain brightness-0 opacity-60" 
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-6xl md:text-7xl font-heading font-bold text-primary leading-[0.9] tracking-tighter">
                  {project.name}
                </h3>
              </div>

              <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed italic">
                {project.description}
              </p>
            </div>

            <div className="pt-6">
              <Button 
                variant="secondary" 
                className="h-16 px-12 text-xs font-bold uppercase tracking-widest rounded-none shadow-xl hover:scale-105 transition-all"
                asChild
              >
                <a href={project.learnMoreUrl} target="_blank" rel="noopener noreferrer">
                  Project Dossier <ArrowRight className="ml-3 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Media Column - Gallery Style */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {project.cards.map((card: any, i: number) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className={`relative group overflow-hidden bg-muted shadow-2xl ${i === 0 ? 'col-span-2 aspect-[16/7]' : 'aspect-[4/5]'}`}
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <h4 className="text-xl font-heading font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {card.title}
                    </h4>
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      Explore Document <ExternalLink className="ml-2 h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="bg-background min-h-screen">
      {/* Hero Index */}
      <div className="pt-32 pb-20 border-b border-border bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <h2 className="text-7xl md:text-9xl font-heading font-bold leading-[0.85] tracking-tighter">
                The <span className="italic text-secondary">Lab</span> <br /> Index.
              </h2>
              <p className="text-xl text-white/60 font-sans font-light italic leading-relaxed max-w-xl">
                A curated collection of mission-aligned initiatives advancing human rights through secure technology and creative activism.
              </p>
            </div>
            
            <div className="space-y-4 border-l border-white/10 pl-10">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Quick Navigation</span>
              <nav className="flex flex-col gap-4">
                {SITE_CONTENT.projects.map((project, i) => (
                  <a 
                    key={project.id} 
                    href={`#${project.id}`}
                    className="group flex items-center gap-4 text-xl font-heading font-medium hover:text-secondary transition-colors"
                  >
                    <span className="text-[10px] font-sans font-bold text-white/30 group-hover:text-secondary">0{i + 1}</span>
                    {project.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Exhibition Sections */}
      <div>
        {SITE_CONTENT.projects.map((project, index) => (
          <ProjectExhibition key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="py-24 bg-secondary text-primary text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h3 className="text-5xl md:text-7xl font-heading font-bold mb-6 italic leading-tight">Join the Movement.</h3>
          <p className="text-xl font-sans font-light mb-10 leading-relaxed opacity-80">
            Our work is only possible through the support of individuals who believe in a free and secure digital future for all.
          </p>
          <Button size="lg" className="h-20 px-16 text-sm font-bold uppercase tracking-widest bg-primary text-white hover:bg-primary/90 rounded-none shadow-2xl" asChild>
            <a href="/donate">Support the Lab</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
