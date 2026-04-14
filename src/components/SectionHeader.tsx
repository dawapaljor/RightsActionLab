import React from "react";
import { cn } from "@/lib/utils";

export const SectionHeader = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={cn("mb-16", centered ? "text-center" : "text-left")}>
    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans italic">{subtitle}</p>}
    <div className={cn("h-1 w-20 bg-secondary mt-6", centered ? "mx-auto" : "")} />
  </div>
);
