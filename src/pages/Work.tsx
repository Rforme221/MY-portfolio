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
      <section className="pt-20 pb-16 border-b border-brand-border/30 bg-[#fdfcf9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <ScrollReveal y={20}>
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#bda881] uppercase block mb-3">
                CASE STUDY INDEX // COMPLETED PROJECTS
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-brand-dark leading-none uppercase tracking-tight">
                Selected Work
              </h1>
            </ScrollReveal>

            <div className="bg-brand-cream border border-brand-border/40 px-4 py-2 rounded-xl self-start">
              <span className="font-mono text-xs text-brand-dark/60 font-semibold uppercase">
                0{PROJECTS.length} CASES RECORDED
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE STACKED SHOWCASE (SAME AS HOME PAGE) */}
      <section className="py-24 bg-[#fdfcf9] text-brand-dark border-b border-brand-border/30 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Stacking Staggered Slides - Pure CSS Smooth Scroll Stack */}
          <div className="relative flex flex-col gap-24 md:gap-32 pb-12">
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
                  className={`sticky top-28 w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] rounded-3xl overflow-hidden bg-gradient-to-b ${gradient} border border-zinc-800/10 shadow-[0_30px_80px_rgba(0,0,0,0.2)] p-6 md:p-12 flex flex-col justify-between`}
                  style={{ transform: "translate3d(0, 0, 0)", zIndex: idx + 10 }}
                >
                  {/* Subtle background element */}
                  <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Card Header Detail */}
                  <div className="relative z-10 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    <span>{num} // {project.category}</span>
                    <span>CLIENT: {project.client}</span>
                  </div>

                  {/* Central Laptop Device Mockup */}
                  <div className="relative z-10 w-full flex flex-col justify-center items-center py-6">
                    
                    {/* CSS Laptop Frame */}
                    <div className="w-[85%] md:w-[70%] max-w-2xl aspect-[16/10] bg-zinc-950 border-[6px] md:border-[10px] border-zinc-800 rounded-t-2xl shadow-2xl overflow-hidden relative">
                      {/* High-Fidelity Website Mockup Image */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover select-none"
                      />
                    </div>

                    {/* CSS Laptop Base */}
                    <div className="w-[95%] md:w-[80%] max-w-3xl h-2 bg-zinc-700 rounded-b-xl shadow-md relative" />
                    <div className="w-12 h-0.5 bg-zinc-800 mx-auto rounded-b-sm relative" />
                  </div>

                  {/* Bottom-Left Glassmorphic Floating Information Card */}
                  <div className="relative z-20 self-start max-w-sm backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 text-left shadow-lg mt-4 sm:mt-0">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <Link
                      to={`/work/${project.id}`}
                      className="flex items-center gap-3 px-4 py-2 border border-white/10 text-white rounded-full text-[10px] font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase self-start"
                    >
                      <span>DISCOVER</span>
                      <span className="h-4 w-4 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] transition-colors">
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Staggered bottom reveal card */}
          <ScrollReveal y={30} className="mt-24 border border-brand-border/40 bg-white rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="font-mono text-[9px] text-[#bda881] uppercase tracking-widest font-bold">CASE STUDY PIPELINE</span>
              <h3 className="font-display text-xl sm:text-2xl font-normal uppercase text-brand-dark mt-2 mb-4">
                Your Brand Case Study Is Coming Next
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-dark/70 leading-relaxed mb-6 max-w-md mx-auto font-light">
                Ready to build a millisecond-fast React experience and scale your leads with high-ROAS ad campaigns? Let's analyze your current setup and launch a custom blueprint.
              </p>
              <Link 
                to="/contact"
                className="inline-flex font-display text-[10px] font-bold tracking-widest text-white bg-brand-dark hover:bg-brand-accent hover:text-white px-6 py-3.5 rounded-full uppercase transition-all duration-300"
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

