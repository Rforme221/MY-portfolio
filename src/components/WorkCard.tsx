import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../types";

interface WorkCardProps {
  project: Project;
  index: number;
}

export default function WorkCard({ project, index }: WorkCardProps) {
  return (
    <Link 
      id={`work-card-${project.id}`}
      to={`/work/${project.id}`}
      className="group relative block aspect-[4/5] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-border/30 bg-brand-dark cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      {/* Grid lines overlay for architectural portfolio aesthetic */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Full-bleed visual background image or gradient */}
      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108 overflow-hidden">
        {project.image.startsWith("linear-gradient") ? (
          <div className="w-full h-full" style={{ background: project.image }} />
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover" 
          />
        )}
        {/* Subtle decorative vector circles inside placeholder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 rounded-full border border-white/5 pointer-events-none group-hover:border-white/10 transition-colors duration-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full border border-white/5 pointer-events-none" />
        
        {/* Ambient glow in center of card */}
        <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Vignette Overlay for maximum typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-brand-dark/20 z-10" />

      {/* Category Tag - Top Right */}
      <div className="absolute top-5 right-5 z-20">
        <span className="font-mono text-[10px] sm:text-xs font-medium tracking-wider text-brand-bg uppercase bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 group-hover:bg-white/20 group-hover:border-white/20 transition-all duration-300">
          {project.category}
        </span>
      </div>

      {/* Corner Technical Detail */}
      <div className="absolute top-5 left-5 z-20">
        <span className="font-mono text-[9px] font-semibold text-white/30 tracking-widest">
          PROJECT: 0{index + 1} // {project.year}
        </span>
      </div>

      {/* Title & Metadata Overlay - Bottom Left with modern glass-morphism aesthetic */}
      <div className="absolute bottom-5 left-5 right-5 z-20 bg-brand-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col gap-2 transition-all duration-500 group-hover:bg-brand-dark/50 group-hover:border-white/15">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1 max-w-[80%]">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-brand-bg tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="font-sans text-xs text-white/60 line-clamp-2 sm:line-clamp-1 group-hover:text-white/80 transition-colors duration-300">
              {project.description}
            </p>
          </div>
          
          {/* Circular Discover Link Trigger */}
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-white/25 flex items-center justify-center bg-transparent group-hover:bg-brand-bg group-hover:border-brand-bg group-hover:text-brand-dark text-brand-bg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 shadow-sm shrink-0">
            <ArrowUpRight className="h-4 sm:h-5 w-4 sm:w-5" />
          </div>
        </div>

        {/* Action text */}
        <div className="overflow-hidden h-0 group-hover:h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <span className="font-mono text-[10px] font-semibold tracking-wider text-[#bda881] uppercase">
            Discover Project Case Study →
          </span>
        </div>
      </div>
    </Link>
  );
}
