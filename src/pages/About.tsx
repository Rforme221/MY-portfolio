import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, TrendingUp, Cpu, HeartHandshake } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  const stats = [
    { value: "+140%", label: "Clinic Appointment Scaling", icon: HeartHandshake },
    { value: "4.8X", label: "Meta Campaigns Avg. ROAS", icon: TrendingUp },
    { value: "3X", label: "Table Reservations Boost", icon: Monitor },
    { value: "SUB-1S", label: "React/Vite Page Latency", icon: Cpu }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="About Raj Shrestha — AI Marketing Strategist Kathmandu"
        description="Learn about Raj Shrestha's journey from Kathmandu's tech alleys to running custom AI marketing systems and high-converting Meta Ads for local and global clients."
      />

      {/* 1. HERO STORY HEADER */}
      <section className="pt-16 pb-24 border-b border-brand-border/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <ScrollReveal y={20} className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3 animate-pulse">
              ORIGIN STORY // BIOGRAPHY
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark leading-tight uppercase">
              CREATIVE ENGINEERING AND THE MATHEMATICS OF AD CONVERSIONS
            </h1>
          </ScrollReveal>

          {/* Split Biography Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Core Bio */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal y={30} delay={0.1}>
                <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-dark">
                  I am Raj Shrestha, a digital growth architect operating from Baluwatar, Kathmandu.
                </h2>
              </ScrollReveal>

              <ScrollReveal y={30} delay={0.2}>
                <p className="font-sans text-base text-brand-dark/70 leading-relaxed">
                  Originally, I began my career analyzing web analytics and performance data for local travel agencies and dental clinics in Nepal. I observed a recurring, critical flaw: businesses were spending thousands of rupees on Facebook Ads that pointed to slow, generic, unresponsive website templates. The traffic clicked, got frustrated by the 5-second lag, and bounced.
                </p>
              </ScrollReveal>

              <ScrollReveal y={30} delay={0.3}>
                <p className="font-sans text-base text-brand-dark/70 leading-relaxed">
                  To solve this, I spent years mastering lightweight React architecture, conversion design, and Meta's complex server-side pixel integrations (Conversions API). By combining **pixel-perfect visual development** with **high-ROI ad scripting**, I build unified systems that load in milliseconds and actively close sales.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Column - Mission & Values */}
            <div className="lg:col-span-5 bg-brand-cream/35 border border-brand-border/40 p-8 rounded-3xl flex flex-col gap-8">
              <ScrollReveal y={30} delay={0.4}>
                <span className="font-mono text-[9px] font-bold tracking-widest text-brand-accent uppercase">
                  MY WORK PRINCIPLES
                </span>
                
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex gap-4">
                    <span className="font-display text-xs font-black text-brand-accent">01</span>
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase text-brand-dark mb-1">Architectural Honesty</h4>
                      <p className="font-sans text-xs text-brand-dark/65 leading-relaxed">No marketing fluff. I use lightweight custom React-code templates and solid databases. Every section must have a conversion purpose.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-display text-xs font-black text-brand-accent">02</span>
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase text-brand-dark mb-1">Analytical Mathematics</h4>
                      <p className="font-sans text-xs text-brand-dark/65 leading-relaxed">Ads should never be a lottery. We test ad copies systematically and route traffic into customized, split-tested landing pages.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-display text-xs font-black text-brand-accent">03</span>
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase text-brand-dark mb-1">Local Context, Global Speed</h4>
                      <p className="font-sans text-xs text-brand-dark/65 leading-relaxed">Designing specifically for the fast-paced mobile market in Kathmandu and Pokhara, utilizing compressed media CDN architectures.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS BENTO SECTION */}
      <section className="py-24 bg-brand-cream/15 border-b border-brand-border/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <ScrollReveal y={20} className="max-w-2xl mb-16">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
              THE HARD METRICS // TRACK RECORD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
              Proven Results Delivered Across Nepalese Markets
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal 
                  key={idx}
                  y={30}
                  delay={idx * 0.12}
                  className="flex flex-col justify-between border border-brand-border/30 bg-brand-bg p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-brand-accent transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="h-8 w-8 rounded-full bg-brand-cream flex items-center justify-center border border-brand-border/30 group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors duration-300">
                      <Icon className="h-4 w-4 text-brand-dark group-hover:text-brand-bg transition-colors" />
                    </span>
                    <span className="font-mono text-[9px] text-brand-dark/30 group-hover:text-brand-dark/50 font-bold uppercase">
                      METRIC // 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs font-semibold text-brand-dark/60 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. TECHNICAL EXPERTISE / STACK MATRIX */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <ScrollReveal y={20} className="max-w-2xl mb-16">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
              TECH STACK // ENGINE SPECIFICATIONS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
              The Digital Machinery That Runs My Systems
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Front-End Node */}
            <ScrollReveal y={30} delay={0.1} className="border border-brand-border/30 p-8 rounded-2xl bg-brand-bg flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-brand-dark">VISUAL FRONT-END</h3>
              </div>
              <ul className="flex flex-col gap-3 font-sans text-sm text-brand-dark/75">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>React 19 & Vite Ecosystem</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Tailwind CSS v4 (Surgical Styling)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Framer Motion 12 (Dynamic Micro-Triggers)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Lucide Vector Suite Integration</span>
                </li>
              </ul>
            </ScrollReveal>

            {/* Paid Ad Node */}
            <ScrollReveal y={30} delay={0.2} className="border border-brand-border/30 p-8 rounded-2xl bg-brand-bg flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-brand-dark">PERFORMANCE ADS</h3>
              </div>
              <ul className="flex flex-col gap-3 font-sans text-sm text-brand-dark/75">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Meta Pixel & Conversions API (CAPI)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Google Analytics 4 UTM Arcs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Advanced Lookalike Segmenting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Systematic A/B Creative Testing</span>
                </li>
              </ul>
            </ScrollReveal>

            {/* AI Node */}
            <ScrollReveal y={30} delay={0.3} className="border border-brand-border/30 p-8 rounded-2xl bg-brand-bg flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-brand-dark">AI & AUTOMATIONS</h3>
              </div>
              <ul className="flex flex-col gap-3 font-sans text-sm text-brand-dark/75">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Google GenAI / Gemini API Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Automated AI Chat assistants</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Webhooks, Make.com, & Zapier flows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>Dynamic Booking & CRM syncing</span>
                </li>
              </ul>
            </ScrollReveal>

          </div>

          {/* Core Footer Outro */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="font-display text-xs font-semibold tracking-widest text-brand-bg bg-brand-dark hover:bg-brand-accent hover:text-brand-bg px-8 py-4 rounded-full transition-all duration-300 uppercase shadow-md flex-inline items-center justify-center"
            >
              Consult With Raj Shrestha
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
