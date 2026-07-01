import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { PROJECTS } from "../data";

export default function Work() {
  return (
    <div className="w-full">
      <SEO 
        title="Showcase of Selected Work — Raj Shrestha Kathmandu"
        description="Explore Raj Shrestha's portfolio of web development and Meta Ads scaling cases, featuring medical, photography, and hospitality businesses in Nepal."
      />

      {/* 1. HERO WORK HEADER */}
      <section className="section border-b border-brand-border/30 bg-[#fdfcf9] pt-[clamp(4rem,10vw,8rem)] pb-[clamp(2.5rem,6vw,5rem)]">
        <div className="section__inner w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[var(--gap-scale)]">
            <ScrollReveal y={20}>
              <span className="font-mono text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold tracking-widest text-[#bda881] uppercase block mb-[clamp(0.4rem,1vw,0.8rem)]">
                CASE STUDY INDEX // COMPLETED PROJECTS
              </span>
              <h1 className="hero-title font-display font-normal text-brand-dark uppercase tracking-tight">
                Selected Work
              </h1>
            </ScrollReveal>

            <div className="bg-brand-cream border border-brand-border/40 px-[clamp(0.75rem,1.8vw,1.5rem)] py-[clamp(0.4rem,1vw,0.75rem)] rounded-xl self-start">
              <span className="font-mono text-[clamp(0.65rem,0.9vw,0.8rem)] text-brand-dark/60 font-semibold uppercase">
                0{PROJECTS.length} CASES RECORDED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STACKED SHOWCASE (SAME AS HOME PAGE) */}
      <section className="section bg-[#fdfcf9] text-brand-dark border-b border-brand-border/30 relative z-20">
        <div className="section__inner w-full">
          
          {/* Stacking Staggered Slides - Pure CSS Smooth Scroll Stack */}
          <div className="relative flex flex-col gap-[clamp(4rem,8vw,12rem)] pb-[clamp(2rem,5vw,6rem)]">
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

              return (
                <div 
                  key={project.id}
                  className={`sticky top-[clamp(4.5rem,12vh,9rem)] w-full min-h-[460px] sm:min-h-[clamp(450px,78vh,850px)] rounded-[clamp(1.25rem,3vw,3rem)] overflow-hidden bg-gradient-to-b ${gradient} border border-zinc-800/10 shadow-[0_30px_80px_rgba(0,0,0,0.2)] p-5 sm:p-[clamp(1.5rem,4vw,4rem)] flex flex-col justify-between`}
                  style={{ transform: "translate3d(0, 0, 0)", zIndex: idx + 10 }}
                >
                  {/* Subtle background element */}
                  <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Card Header Detail */}
                  <div className="relative z-10 flex justify-between items-center text-[clamp(0.6rem,0.8vw,0.75rem)] font-mono uppercase tracking-widest text-zinc-500">
                    <span>{num} // {project.category}</span>
                    <span>CLIENT: {project.client}</span>
                  </div>

                  {/* Central Laptop Device Mockup */}
                  <div className="relative z-10 w-full flex flex-col justify-center items-center py-4 sm:py-[clamp(1.25rem,3vw,3.5rem)]">
                    
                    {/* CSS Laptop Frame */}
                    <div className="w-full sm:w-[85%] md:w-[70%] max-w-[clamp(24rem,55vw,52rem)] aspect-[16/10] bg-zinc-950 border-[clamp(4px,0.8vw,10px)] border-zinc-800 rounded-t-[clamp(0.5rem,1.2vw,1.25rem)] shadow-2xl overflow-hidden relative">
                      {/* High-Fidelity Website Mockup Image */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover select-none"
                      />
                    </div>

                    {/* CSS Laptop Base */}
                    <div className="w-[95%] md:w-[80%] max-w-[clamp(27rem,60vw,57rem)] h-[clamp(6px,0.6vw,10px)] bg-zinc-700 rounded-b-[clamp(0.35rem,1vw,0.8rem)] shadow-md relative" />
                    <div className="w-[clamp(2.5rem,5vw,5rem)] h-[clamp(2px,0.25vw,4px)] bg-zinc-800 mx-auto rounded-b-sm relative" />
                  </div>

                  {/* Bottom-Left Glassmorphic Floating Information Card */}
                  <div className="relative z-20 self-start max-w-[clamp(18rem,34vw,26rem)] backdrop-blur-xl bg-black/40 border border-white/10 p-4 sm:p-[clamp(1rem,2.2vw,2.5rem)] rounded-2xl sm:rounded-[clamp(0.75rem,2vw,1.5rem)] flex flex-col gap-3 sm:gap-[clamp(0.75rem,2vw,2rem)] text-left shadow-lg mt-4 sm:mt-0">
                    <div className="flex flex-col gap-[clamp(0.4rem,1vw,1rem)]">
                      <h3 className="font-display text-[clamp(1.15rem,2.4vw,2.25rem)] font-bold uppercase text-white tracking-tight leading-[1.1]">
                        {project.title}
                      </h3>
                      <p className="font-sans text-[clamp(0.7rem,1.05vw,0.9rem)] text-zinc-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <Link
                      to={`/work/${project.id}`}
                      className="flex items-center gap-[clamp(0.5rem,1vw,1rem)] px-[clamp(0.8rem,2vw,2rem)] py-[clamp(0.4rem,1vw,1rem)] border border-white/10 text-white rounded-full text-[clamp(0.6rem,0.8vw,0.75rem)] font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transform hover:scale-105 active:scale-95 transition-all duration-300 uppercase self-start"
                    >
                      <span>DISCOVER</span>
                      <span className="h-[clamp(1.25rem,2.5vw,2.25rem)] w-[clamp(1.25rem,2.5vw,2.25rem)] rounded-full bg-white/10 text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight className="h-[clamp(0.75rem,1.5vw,1.25rem)] w-[clamp(0.75rem,1.5vw,1.25rem)]" />
                      </span>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

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

