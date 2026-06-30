import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2, Cpu, TrendingUp } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import Accordion from "../components/Accordion";
import { SERVICES, FAQS } from "../data";

export default function Services() {
  return (
    <div className="w-full">
      <SEO 
        title="AI Marketing & High-End Web Services Kathmandu — Raj Shrestha"
        description="Explore Raj Shrestha's specialized services: AI Launchpad (custom React web development & local SEO) and Scale Engine (expert Meta ads & full-funnel tracking)."
      />

      {/* 1. HERO SERVICES HEADER */}
      <section className="pt-16 pb-24 border-b border-brand-border/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <ScrollReveal y={20} className="max-w-3xl mb-12">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3 animate-pulse">
              SYSTEM CAPABILITIES // MARKETING SOLUTIONS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark leading-tight uppercase">
              HIGH-CONVERTING INFRASTRUCTURE AND TARGETED AD MOTORS
            </h1>
          </ScrollReveal>

          <ScrollReveal y={30} delay={0.1}>
            <p className="font-sans text-base sm:text-lg text-brand-dark/70 leading-relaxed max-w-3xl">
              We do not build typical WordPress sites or run standard vanity likes campaigns. Operating out of Kathmandu, we engineer custom-coded React storefronts and high-conversion Meta Ads funnels designed specifically to capture, track, and scale commercial inquiries.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. THE SERVICES ENGINE STATIONS */}
      <section className="py-24 bg-brand-cream/15 border-b border-brand-border/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {SERVICES.map((service, idx) => {
              const IsFirst = idx === 0;
              return (
                <ScrollReveal 
                  key={service.id}
                  y={40}
                  delay={idx * 0.2}
                  className="flex flex-col justify-between bg-brand-bg border border-brand-border/30 rounded-3xl p-8 sm:p-12 relative group shadow-sm hover:border-brand-accent hover:shadow-md transition-all duration-300"
                >
                  {/* Subtle watermarked background grid detail */}
                  <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-3xl" />
                  
                  <div className="relative z-10 flex-grow">
                    {/* Top row */}
                    <div className="flex items-center justify-between border-b border-brand-border/20 pb-6 mb-8">
                      <span className="font-display text-4xl sm:text-5xl font-black text-brand-accent/40 group-hover:text-brand-accent transition-colors">
                        {service.number}
                      </span>
                      <span className="font-mono text-[9px] text-brand-accent uppercase tracking-widest font-semibold bg-brand-cream px-3 py-1 rounded-full border border-brand-border/30">
                        {IsFirst ? "ENGINE NODE: WEB_BUILD" : "ENGINE NODE: ADS_MOTOR"}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-brand-dark mb-4">
                      {service.title}
                    </h3>

                    {/* Paragraph */}
                    <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-dark/75 mb-8">
                      {service.description}
                    </p>

                    {/* Custom Bullet list of deliverables */}
                    <div className="border-t border-brand-border/15 pt-8 mb-8">
                      <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-4">
                        CORE DELIVERABLES:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="font-sans text-xs sm:text-sm text-brand-dark/80 font-medium">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Action button inside card */}
                  <div className="relative z-10 mt-8 pt-6 border-t border-brand-border/20">
                    <Link
                      to="/contact"
                      className="font-display text-xs font-bold tracking-widest text-brand-dark hover:text-brand-accent uppercase inline-flex items-center gap-2 group"
                    >
                      <span>ACTIVATE SOLUTION ENGINE</span>
                      <span className="h-7 w-7 rounded-full bg-brand-cream border border-brand-border/50 flex items-center justify-center text-brand-dark group-hover:bg-brand-accent group-hover:text-brand-bg transition-colors">
                        →
                      </span>
                    </Link>
                  </div>

                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <ScrollReveal y={20} className="text-center mb-16">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3 animate-pulse">
              SYSTEM FAQ // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
              Clearing the Friction
            </h2>
          </ScrollReveal>

          <ScrollReveal y={30}>
            <Accordion items={FAQS} />
          </ScrollReveal>

          <div className="mt-16 bg-brand-cream/30 border border-brand-border/40 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h4 className="font-display text-lg font-bold uppercase text-brand-dark mb-2">Have a custom question?</h4>
            <p className="font-sans text-xs sm:text-sm text-brand-dark/70 mb-6">
              If your specific query is not listed above, connect with Raj directly for a custom scaling audit of your Kathmandu or overseas business.
            </p>
            <Link
              to="/contact"
              className="font-display text-xs font-semibold tracking-widest text-brand-bg bg-brand-dark hover:bg-brand-accent hover:text-brand-bg px-6 py-3.5 rounded-full uppercase transition-colors inline-block"
            >
              Ask Raj Direct
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
