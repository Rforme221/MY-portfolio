import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, MapPin, Mail, Phone, Calendar, ArrowRight, Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "all",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: "all", label: "Full-Funnel Scaling (Web + Ads)" },
    { value: "web", label: "AI Launchpad (React Web Design)" },
    { value: "ads", label: "Scale Engine (Meta & Paid Ads)" },
    { value: "ai", label: "Custom AI & System Automations" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API transport latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "all",
        message: ""
      });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      <SEO 
        title="Start Your Project Scaling Plan — Raj Shrestha Kathmandu"
        description="Connect with Raj Shrestha, AI Marketing Expert, to schedule your digital growth audit and launch customized Web Design & Meta Ads campaigns."
      />

      {/* 1. HERO HEADER */}
      <section className="section pt-16 pb-12 border-b border-brand-border/20">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          <ScrollReveal y={20} className="max-w-3xl">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3 animate-pulse">
              INITIATE COLLABORATION // CONTACT PORTAL
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark leading-tight uppercase">
              Schedule Your Scaling Audit
            </h1>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. THE PORTAL split section */}
      <section className="section py-16 sm:py-24 bg-brand-cream/10">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left Info Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              <ScrollReveal y={30}>
                <h3 className="font-display text-lg font-bold uppercase text-brand-dark mb-4 pb-2 border-b border-brand-border/20">
                  OFFICE REGISTRY Node
                </h3>
                
                <ul className="flex flex-col gap-6">
                  <li className="flex gap-4 items-start">
                    <span className="h-10 w-10 rounded-full bg-brand-cream border border-brand-border/40 flex items-center justify-center text-brand-dark flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="font-mono text-[9px] text-brand-dark/40 uppercase block">Headquarters Node</span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-brand-dark leading-relaxed uppercase">
                        Baluwatar, Kathmandu<br />
                        Bagmati, Nepal 44600
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <span className="h-10 w-10 rounded-full bg-brand-cream border border-brand-border/40 flex items-center justify-center text-brand-dark flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="font-mono text-[9px] text-brand-dark/40 uppercase block">Digital Mailbox</span>
                      <a 
                        id="contact-email-link"
                        href="mailto:stha41010@gmail.com" 
                        className="font-sans text-xs sm:text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors leading-relaxed uppercase"
                      >
                        stha41010@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4 items-start">
                    <span className="h-10 w-10 rounded-full bg-brand-cream border border-brand-border/40 flex items-center justify-center text-brand-dark flex-shrink-0">
                      <Calendar className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="font-mono text-[9px] text-brand-dark/40 uppercase block">Consultation Days</span>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-brand-dark leading-relaxed uppercase">
                        Monday - Saturday<br />
                        09:00 AM - 06:00 PM NPT
                      </span>
                    </div>
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal y={30} delay={0.1} className="bg-brand-cream/35 border border-brand-border/40 p-8 rounded-2xl relative overflow-hidden">
                <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">SECURE PROTOCOL</span>
                <p className="font-sans text-xs text-brand-dark/70 leading-relaxed">
                  All shared metrics, project goals, and client details submitted through this portal are held strictly confidential. Initial digital audits are returned via secure email within 48 business hours.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Contact Form Panel */}
            <div className="lg:col-span-8 bg-brand-bg border border-brand-border/30 p-8 sm:p-12 rounded-3xl relative shadow-md">
              <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none rounded-3xl" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col gap-6"
                  >
                    {/* Double Columns Input for Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-mono text-[10px] font-semibold text-brand-dark/60 tracking-wider uppercase">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          placeholder="Dr. Amit Joshi"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-brand-cream/30 border border-brand-border/40 focus:border-brand-accent focus:outline-none p-4 rounded-xl text-brand-dark font-sans text-sm transition-colors duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-mono text-[10px] font-semibold text-brand-dark/60 tracking-wider uppercase">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          placeholder="doctor@kathmandudental.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-brand-cream/30 border border-brand-border/40 focus:border-brand-accent focus:outline-none p-4 rounded-xl text-brand-dark font-sans text-sm transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Company name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="font-mono text-[10px] font-semibold text-brand-dark/60 tracking-wider uppercase">
                        Company Name / Brand Registry
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        placeholder="Kathmandu Dental Clinic Co."
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-brand-cream/30 border border-brand-border/40 focus:border-brand-accent focus:outline-none p-4 rounded-xl text-brand-dark font-sans text-sm transition-colors duration-300"
                      />
                    </div>

                    {/* Services request selector */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="font-mono text-[10px] font-semibold text-brand-dark/60 tracking-wider uppercase">
                        Core System Requirement
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-brand-cream/30 border border-brand-border/40 focus:border-brand-accent focus:outline-none p-4 rounded-xl text-brand-dark font-sans text-sm transition-colors duration-300 appearance-none cursor-pointer"
                        >
                          {services.map((serv) => (
                            <option key={serv.value} value={serv.value} className="bg-brand-bg text-brand-dark py-2">
                              {serv.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-dark/40">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Textarea message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-mono text-[10px] font-semibold text-brand-dark/60 tracking-wider uppercase">
                        Operational Project Goals *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Detail your metrics, target audience constraints, and what you aim to achieve with custom design or Meta Ads..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-brand-cream/30 border border-brand-border/40 focus:border-brand-accent focus:outline-none p-4 rounded-xl text-brand-dark font-sans text-sm transition-colors duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-display text-xs font-semibold tracking-widest text-brand-bg bg-brand-dark hover:bg-brand-accent hover:text-brand-bg px-6 py-4.5 rounded-xl uppercase transition-all duration-300 transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SYNCHRONIZING TRANSPORT ENGINE...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Scaling Audit Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Breathtaking interactive success overlay
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 py-12 flex flex-col items-center text-center gap-6"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 animate-bounce">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    
                    <div className="max-w-md flex flex-col gap-2">
                      <span className="font-mono text-[9px] text-emerald-600 font-bold uppercase tracking-widest">
                        TRANSMISSION COMPLETED // EN ROUTE
                      </span>
                      <h3 className="font-display text-2xl font-bold uppercase text-brand-dark">
                        Audit Request Registered
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-brand-dark/70">
                        Thank you. Your project goals and contact details have been securely logged. Raj Shrestha will analyze your current metrics and respond within 48 business hours with your custom scaling plan.
                      </p>
                    </div>

                    <button
                      id="contact-reset-btn"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 font-display text-[10px] font-bold tracking-widest text-brand-dark hover:text-brand-accent uppercase pb-1 border-b border-brand-dark/20 hover:border-brand-accent"
                    >
                      Transmit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
