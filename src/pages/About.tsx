import React from "react";
import { Shield, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONTENT } from "../constants";

const TeamMember = ({ member, i }: { member: any; i: number; key?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
    className="flex flex-col md:flex-row gap-8 items-start bg-white border border-border p-6 hover:shadow-md transition-shadow"
  >
    <div className="w-full md:w-40 shrink-0 aspect-[4/5] overflow-hidden bg-muted">
      <img 
        src={`https://picsum.photos/seed/${member.name}/400/500`} 
        alt={member.name} 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex-1">
      <h4 className="text-2xl font-heading font-bold text-primary mb-1">{member.name}</h4>
      <p className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed italic">
        {member.bio}
      </p>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <main>
      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Shield className="w-full h-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Mission</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">Advancing human rights in repressive environments.</h2>
              <p className="text-xl font-sans font-light text-white/80 mb-10 leading-relaxed">
                {SITE_CONTENT.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Educational Programs",
                  "Evidence-based Research",
                  "Strategic Training",
                  "Secure Software Development",
                  "Network Building"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-semibold uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="border-8 border-secondary/20 p-4">
                <img 
                  src="https://picsum.photos/seed/lab/800/1000" 
                  alt="Rights Action Lab" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-secondary p-8 text-primary max-w-[280px] hidden md:block">
                <p className="font-heading font-bold text-2xl mb-2 italic">Impact First.</p>
                <p className="text-sm font-sans font-medium leading-relaxed">
                  We harness the power of secure digital communications with creative nonviolent activism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Our Leadership</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary italic">The <span className="not-italic text-secondary">Team.</span></h2>
          </div>
          
          <div className="mb-16">
            <h3 className="text-3xl font-heading font-bold text-primary mb-6 border-b border-secondary/30 pb-4 italic">Executive Team</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SITE_CONTENT.team.map((member, i) => (
                <TeamMember key={i} member={member} i={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-heading font-bold text-primary mb-10 border-b border-secondary/30 pb-4 italic">Board of Directors</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SITE_CONTENT.board.map((member, i) => (
                <TeamMember key={i} member={member} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
