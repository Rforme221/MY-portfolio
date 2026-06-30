import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Star, Calendar, User, MapPin, Award } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { PROJECTS } from "../data";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  // Find project
  const project = PROJECTS.find((p) => p.id === projectId);

  // If project not found, redirect to /work
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-2xl font-bold uppercase text-brand-dark mb-4">Case File Not Found</h2>
        <p className="font-sans text-sm text-brand-dark/70 mb-8">The project registry ID is invalid.</p>
        <Link to="/work" className="text-brand-accent hover:underline">Back to Case Index</Link>
      </div>
    );
  }

  // Schema data for SEO
  const schemaData = {
    name: project.title,
    description: project.description,
    author: "Raj Shrestha",
    year: project.year,
    location: project.location
  };

  return (
    <div className="w-full">
      <SEO 
        title={`${project.title} — Case Study by Raj Shrestha`}
        description={project.description}
        isProject={true}
        projectSchemaData={schemaData}
      />

      {/* 1. HEADER HERO PANEL */}
      <section className="pt-12 pb-16 border-b border-brand-border/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Back Trigger */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-brand-dark/60 hover:text-brand-accent uppercase mb-12 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Case Index</span>
          </Link>

          {/* Title and Category */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
                PROJECT CLASSIFICATION: {project.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark uppercase leading-none">
                {project.title}
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <span className="font-mono text-[9px] text-brand-dark/40 font-bold uppercase block">SECURE METRIC PROTOCOL</span>
              <span className="font-display text-lg font-bold text-brand-accent uppercase mt-2 block bg-brand-cream border border-brand-border/40 px-4 py-2 rounded-xl inline-block">
                {project.results[0]}
              </span>
            </div>
          </div>

          {/* Structured Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-brand-border/30 pt-10 mt-12">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-brand-accent flex-shrink-0" />
              <div>
                <span className="font-mono text-[9px] text-brand-dark/40 uppercase block">Client Name</span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-brand-dark uppercase">{project.client}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand-accent flex-shrink-0" />
              <div>
                <span className="font-mono text-[9px] text-brand-dark/40 uppercase block">Location Node</span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-brand-dark uppercase">{project.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-brand-accent flex-shrink-0" />
              <div>
                <span className="font-mono text-[9px] text-brand-dark/40 uppercase block">Role Assigned</span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-brand-dark uppercase">{project.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-brand-accent flex-shrink-0" />
              <div>
                <span className="font-mono text-[9px] text-brand-dark/40 uppercase block">Launch Year</span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-brand-dark uppercase">{project.year}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FULL-BLEED VISUAL CONTAINER */}
      <section className="py-8 bg-brand-cream/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal y={30}>
            <div 
              className="w-full aspect-[16/7] md:aspect-[21/9] rounded-3xl overflow-hidden border border-brand-border/40 shadow-md relative"
            >
              {project.image.startsWith("linear-gradient") ? (
                <div className="absolute inset-0" style={{ background: project.image }} />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-brand-dark/15" />
              <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              
              <div className="absolute bottom-6 right-6">
                <span className="font-mono text-[9px] text-white/50 bg-brand-dark/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 tracking-widest uppercase">
                  WIRE_BLUEPRINT // VISUAL_DOCKET_RS
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. CASE CONTEXT DETAILS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <ScrollReveal y={30}>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-dark pb-3 border-b border-brand-border/20">
                  PROJECT OVERVIEW & CONVERSION DEFICIT
                </h3>
                <p className="font-sans text-base leading-relaxed text-brand-dark/75 mt-6">
                  {project.description} Each solution in this case was architected from scratch. We diagnosed heavy templates, structural bottlenecks in local routing, and pixel leakage points where standard conversion events were failing.
                </p>
                <p className="font-sans text-base leading-relaxed text-brand-dark/75 mt-4">
                  By mapping standard user-behavior vectors and deploying clean, native React page architectures, we optimized the viewport speeds to load under a single second, completely eliminating bounce rates in Kathmandu or overseas test hubs.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Operational Stats Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Core Services rendered list */}
              <ScrollReveal y={30} delay={0.1} className="bg-brand-cream/35 border border-brand-border/40 p-8 rounded-2xl">
                <h4 className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-4 border-b border-brand-border/20 pb-3">
                  SERVICES RENDERED
                </h4>
                <ul className="flex flex-col gap-3">
                  {project.services.map((serv, index) => (
                    <li key={index} className="flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-brand-dark/80 uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      <span>{serv}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Verified Metrics block */}
              <ScrollReveal y={30} delay={0.2} className="bg-brand-dark border border-white/10 p-8 rounded-2xl text-white">
                <h4 className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-4 border-b border-white/10 pb-3">
                  AUDITED PERFORMANCE METRICS
                </h4>
                <ul className="flex flex-col gap-4">
                  {project.results.map((res, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-display text-sm sm:text-base font-bold tracking-wide uppercase text-white block">
                          {res}
                        </span>
                        <span className="font-mono text-[9px] text-white/45 tracking-wider uppercase block mt-0.5">
                          VERIFIED BY GA4 AUDIT ENGINE
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
