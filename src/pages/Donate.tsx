import React from "react";
import { Heart, Shield } from "lucide-react";
import { SITE_CONTENT } from "../constants";
import { SectionHeader } from "../components/SectionHeader";

const DonatelyForm = ({ donatelyId }: { donatelyId: string }) => {
  React.useEffect(() => {
    const scriptId = "donately-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://donately.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="donately-donation-form" 
      data-donately-id={donatelyId}
      data-donately-style="classic"
    ></div>
  );
};

export default function Donate() {
  return (
    <section className="py-20 bg-secondary/10 border-y border-secondary/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="Support Our Work" centered={false} />
            <p className="text-xl text-muted-foreground mb-8 font-sans font-light italic leading-relaxed">
              Your contribution directly supports activists, researchers, and developers working for human rights in the world's most repressive environments.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white p-2 rounded-sm shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-primary">Tax-Deductible</h4>
                  <p className="text-sm text-muted-foreground">Rights Action Lab is a 501(c)(3) nonprofit organization.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white p-2 rounded-sm shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-primary">Secure Giving</h4>
                  <p className="text-sm text-muted-foreground">Your donation is processed through encrypted, secure channels.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border p-1 shadow-2xl relative min-h-[600px] flex items-center justify-center">
            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 -z-10" />
            <div className="w-full">
              <DonatelyForm donatelyId={SITE_CONTENT.donatelyId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
