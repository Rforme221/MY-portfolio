import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import { PROJECTS } from "../data";

export default function Work() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate remote dynamic fetch to show the skeleton loader
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 550); // fast but visible 550ms perceived latency
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <SEO 
        title="Showcase of Selected Work — Raj Shrestha Kathmandu"
        description="Explore Raj Shrestha's portfolio of web development and Meta Ads scaling cases, featuring medical, photography, and hospitality businesses in Nepal."
      />

      {/* 1. HERO WORK HEADER */}
      <section className="section border-b border-brand-border/30 bg-brand-bg pt-[clamp(4rem,10vw,8rem)] pb-[clamp(2.5rem,6vw,5rem)]">
        <div className="section__inner w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[var(--gap-scale)]">
            <ScrollReveal y={20}>
              <span className="font-mono text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold tracking-widest text-brand-primary uppercase block mb-[clamp(0.4rem,1vw,0.8rem)]">
                CASE STUDY INDEX // COMPLETED PROJECTS
              </span>
              <h1 className="hero-title font-display font-normal text-brand-dark uppercase tracking-tight">
                Selected Work
              </h1>
            </ScrollReveal>

            <div className="bg-brand-cream border border-brand-border/40 px-[clamp(0.75rem,1.8vw,1.5rem)] py-[clamp(0.4rem,1vw,0.75rem)] rounded-xl self-start">
              <span className={`font-mono text-[clamp(0.65rem,0.9vw,0.8rem)] text-brand-dark/60 font-semibold uppercase ${isLoading ? "animate-pulse" : ""}`}>
                {isLoading ? "LOADING REGISTRIES..." : `0${PROJECTS.length} CASES RECORDED`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STACKED SHOWCASE (OR HIGH-FIDELITY SKELETON LOADER) */}
      <section className="section bg-brand-bg text-brand-dark border-b border-brand-border/30 relative z-20">
        <div className="section__inner w-full">
          
          {isLoading ? (
            /* High-Fidelity Skeletal Stack resembling the exact card heights and layouts */
            <div className="relative flex flex-col gap-8 md:gap-[clamp(4rem,8vw,12rem)] pb-[clamp(2rem,5vw,6rem)] animate-fadeIn" id="work-skeleton-stack">
              {[...Array(3)].map((_, idx) => {
                const zIndexValue = idx + 10;
                return (
                  <div key={idx} className="w-full">
                    {/* MOBILE SKELETON CARD */}
                    <div 
                      className="block md:hidden w-full rounded-[1.25rem] overflow-hidden bg-slate-50 border border-slate-200/50 animate-mobileFadeIn"
                    >
                      {/* Image Block Skeleton */}
                      <div className="relative w-full aspect-[4/3] bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" style={{ backgroundSize: '200% 100%' }} />

                      {/* Content Block Skeleton */}
                      <div className="p-5 flex flex-col gap-4">
                        {/* Header Row Skeleton */}
                        <div className="flex flex-col gap-1.5">
                          <div className="h-3 w-28 bg-slate-200 rounded-md" />
                          <div className="h-3 w-36 bg-slate-200 rounded-md" />
                        </div>
                        {/* Title Skeleton */}
                        <div className="h-6 w-2/3 bg-slate-200 rounded-md" />
                        {/* Description Skeleton */}
                        <div className="space-y-1.5">
                          <div className="h-3 w-full bg-slate-200/80 rounded-md" />
                          <div className="h-3 w-4/5 bg-slate-200/80 rounded-md" />
                        </div>
                        {/* Button Skeleton */}
                        <div className="h-8 w-24 bg-slate-300 rounded-full" />
                      </div>
                    </div>

                    {/* DESKTOP SKELETON CARD */}
                    <div 
                      className="hidden md:flex sticky top-[clamp(5.5rem,12vh,9rem)] w-full min-h-[460px] sm:min-h-[clamp(450px,78vh,850px)] rounded-[clamp(1.25rem,3vw,3rem)] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-50 border border-slate-200/50 p-5 sm:p-[clamp(1.5rem,4vw,4rem)] flex flex-col justify-between"
                      style={{ transform: "translate3d(0, 0, 0)", zIndex: zIndexValue }}
                    >
                      {/* Pulsing skeleton background shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse" style={{ backgroundSize: '200% 100%' }} />

                      {/* Fake Header Row */}
                      <div className="relative z-10 flex justify-between items-center text-[clamp(0.6rem,0.8vw,0.75rem)] font-mono uppercase tracking-widest text-slate-400">
                        <div className="h-4 w-32 bg-slate-200/80 rounded-md" />
                        <div className="h-4 w-40 bg-slate-200/80 rounded-md" />
                      </div>

                      <div className="flex-grow" />

                      {/* Fake Glassmorphic Bottom-Left Info Card */}
                      <div className="relative z-20 self-start w-full max-w-[18rem] sm:max-w-[clamp(18rem,34vw,26rem)] backdrop-blur-xl bg-white/70 border border-slate-200 p-4 sm:p-[clamp(1rem,2.2vw,2.5rem)] rounded-2xl sm:rounded-[clamp(0.75rem,2vw,1.5rem)] flex flex-col gap-4 text-left shadow-md mt-4 sm:mt-0">
                        <div className="space-y-3">
                          {/* Title block */}
                          <div className="h-7 w-3/4 bg-slate-200 rounded-md" />
                          {/* Description lines */}
                          <div className="space-y-2">
                            <div className="h-3.5 w-full bg-slate-200/80 rounded-md" />
                            <div className="h-3.5 w-5/6 bg-slate-200/80 rounded-md" />
                          </div>
                        </div>
                        {/* Action button */}
                        <div className="h-10 w-32 bg-slate-300 rounded-full" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* The Active Stacking Staggered Slides */
            <div className="relative flex flex-col gap-8 md:gap-[clamp(4rem,8vw,12rem)] pb-[clamp(2rem,5vw,6rem)] animate-fadeIn" id="work-content-stack">
              {PROJECTS.map((project, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                const gradients = [
                  "from-[#1c1d1e] to-[#121314]", // Newari
                  "from-[#111827] to-[#090d16]", // Thakali
                  "from-[#0a1515] to-[#040909]", // Hotel
                  "from-[#18181b] to-[#09090b]", // Photography
                  "from-[#1c1614] to-[#100c0a]"  // Unique
                ];
                const gradient = gradients[idx] || "from-[#1c1d1e] to-[#121314]";
                const isGradient = project.image.startsWith("linear-gradient") || project.image.includes("gradient");

                return (
                  <div key={project.id} className={`w-full ${project.id === "nep-photography" ? "hidden md:block" : ""}`}>
                    {/* MOBILE ONLY CARD (stacked card) */}
                    <div 
                      className={`block md:hidden w-full rounded-[1.25rem] overflow-hidden bg-gradient-to-b ${gradient} border border-zinc-800/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-mobileFadeIn`}
                    >
                      {/* Image Block */}
                      <a 
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full aspect-[4/3] overflow-hidden cursor-pointer"
                        aria-label={`View external site for ${project.title}`}
                      >
                        {isGradient ? (
                          <div 
                            className="w-full h-full" 
                            style={{ background: project.image }} 
                          />
                        ) : (
                          <ImageWithSkeleton 
                            src={project.image} 
                            alt={project.title} 
                            wrapperClassName="w-full h-full"
                            className="w-full h-full object-cover select-none opacity-100"
                            skeletonClassName="bg-black/40 animate-pulse"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                      </a>

                      {/* Content Block */}
                      <div className="p-5 flex flex-col gap-4 text-left">
                        {/* category/client meta row */}
                        <div className="flex flex-col gap-1 text-[11px] font-mono uppercase tracking-widest text-zinc-300">
                          <span>{num} // {project.category}</span>
                          <span>CLIENT: {project.client}</span>
                        </div>

                        {/* title */}
                        <h3 className="font-display text-xl font-bold uppercase text-white tracking-tight leading-tight">
                          {project.title}
                        </h3>

                        {/* description */}
                        <p className="font-sans text-xs text-zinc-300 font-light leading-relaxed">
                          {project.description}
                        </p>

                        {/* DISCOVER button/link */}
                        <Link
                          to={`/work/${project.id}`}
                          className="flex items-center gap-2 px-4 py-2 border border-white/15 text-white rounded-full text-[11px] font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transform active:scale-95 transition-all duration-300 uppercase self-start"
                        >
                          <span>DISCOVER</span>
                          <span className="h-6 w-6 rounded-full bg-white/10 text-white flex items-center justify-center">
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* DESKTOP ONLY CARD (original sticky/pin/glass layout) */}
                    <div 
                      className={`hidden md:flex sticky top-[clamp(5.5rem,12vh,9rem)] w-full min-h-[460px] sm:min-h-[clamp(450px,78vh,850px)] rounded-[clamp(1.25rem,3vw,3rem)] overflow-hidden bg-gradient-to-b ${gradient} border border-zinc-800/10 shadow-[0_30px_80px_rgba(0,0,0,0.2)] p-5 sm:p-[clamp(1.5rem,4vw,4rem)] flex flex-col justify-between group`}
                      style={{ transform: "translate3d(0, 0, 0)", zIndex: idx + 10 }}
                    >
                      {/* True Full-Bleed Background Image (Clickable Link to External URL) */}
                      <a 
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-0 overflow-hidden block cursor-pointer group/link"
                        aria-label={`View external site for ${project.title}`}
                      >
                        <ImageWithSkeleton 
                          src={project.image} 
                          alt={project.title} 
                          wrapperClassName="absolute inset-0 w-full h-full"
                          className="w-full h-full object-cover select-none opacity-45 group-hover:opacity-60 group-hover/link:opacity-80 transition-all duration-700 group-hover:scale-105 group-hover/link:scale-110"
                          skeletonClassName="bg-black/40 animate-pulse"
                        />
                        {/* Premium gradient overlays to blend cleanly and ensure text is highly legible */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/85 pointer-events-none" />
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                      </a>
                      
                      {/* Card Header Detail */}
                      <div className="relative z-10 flex justify-between items-center text-[clamp(0.6rem,0.8vw,0.75rem)] font-mono uppercase tracking-widest text-zinc-300">
                        <span>{num} // {project.category}</span>
                        <span>CLIENT: {project.client}</span>
                      </div>

                      {/* Empty spacer / flex-grow to push bottom content down */}
                      <div className="flex-grow" />

                      {/* Bottom-Left Glassmorphic Floating Information Card */}
                      <div className="relative z-20 self-start max-w-[18rem] sm:max-w-[clamp(18rem,34vw,26rem)] backdrop-blur-xl bg-black/45 border border-white/10 p-4 sm:p-[clamp(1rem,2.2vw,2.5rem)] rounded-2xl sm:rounded-[clamp(0.75rem,2vw,1.5rem)] flex flex-col gap-3 sm:gap-[clamp(0.75rem,2vw,2rem)] text-left shadow-lg mt-4 sm:mt-0">
                        <div className="flex flex-col gap-[clamp(0.4rem,1vw,1rem)]">
                          <h3 className="font-display text-[clamp(1.15rem,2.4vw,2.25rem)] font-bold uppercase text-white tracking-tight leading-[1.1]">
                            {project.title}
                          </h3>
                          <p className="font-sans text-[clamp(0.7rem,1.05vw,0.9rem)] text-zinc-300 font-light leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <Link
                          to={`/work/${project.id}`}
                          className="flex items-center gap-[clamp(0.5rem,1vw,1rem)] px-[clamp(0.8rem,2vw,2rem)] py-[clamp(0.4rem,1vw,1rem)] border border-white/15 text-white rounded-full text-[clamp(0.6rem,0.8vw,0.75rem)] font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transform hover:scale-105 active:scale-95 transition-all duration-300 uppercase self-start"
                        >
                          <span>DISCOVER</span>
                          <span className="h-[clamp(1.25rem,2.5vw,2.25rem)] w-[clamp(1.25rem,2.5vw,2.25rem)] rounded-full bg-white/10 text-white flex items-center justify-center transition-colors">
                            <ArrowUpRight className="h-[clamp(0.75rem,1.5vw,1.25rem)] w-[clamp(0.75rem,1.5vw,1.25rem)]" />
                          </span>
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Staggered bottom reveal card */}
          <ScrollReveal y={30} className="mt-[clamp(4rem,10vw,12rem)] border border-brand-border/40 bg-white rounded-[clamp(1.25rem,3vw,3rem)] p-[clamp(1.5rem,4vw,4rem)] text-center max-w-[clamp(25rem,50vw,45rem)] mx-auto relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="font-mono text-[clamp(0.55rem,0.8vw,0.7rem)] text-[#bda881] uppercase tracking-widest font-bold">CASE STUDY PIPELINE</span>
              <h3 className="font-display text-[clamp(1.25rem,3.2vw,2.5rem)] font-normal uppercase text-brand-dark mt-[clamp(0.5rem,1vw,1rem)] mb-[clamp(0.75rem,1.8vw,1.5rem)]">
                Your Brand Case Study Is Coming Next
              </h3>
              <p className="font-sans text-[clamp(0.75rem,1.1vw,0.95rem)] text-brand-dark/70 leading-relaxed mb-[clamp(1rem,2vw,2rem)] max-w-[clamp(20rem,40vw,35rem)] mx-auto font-light">
                Ready to build a millisecond-fast React experience and scale your leads with high-ROAS ad campaigns? Let's analyze your current setup and launch a custom blueprint.
              </p>
              <Link 
                to="/contact"
                className="inline-flex font-display text-[clamp(0.6rem,0.8vw,0.75rem)] font-bold tracking-widest text-white bg-brand-dark hover:bg-brand-accent hover:text-white px-[clamp(1.25rem,3vw,2.5rem)] py-[clamp(0.65rem,1.5vw,1.25rem)] rounded-full uppercase transform hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Start Launch Blueprint
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
