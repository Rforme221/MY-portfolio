import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Twitter, Mail, MapPin, Clock } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ktmTime, setKtmTime] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  // Live Kathmandu local time ticker
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kathmandu",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        }).format(new Date());
        setKtmTime(timeString);
      } catch (e) {
        // Fallback if internationalization timezone is not supported
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const ktmOffset = 5.75; // UTC+5:45
        const ktmDate = new Date(utc + 3600000 * ktmOffset);
        setKtmTime(ktmDate.toLocaleTimeString("en-US"));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  // Prevent page scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const overlayVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.7, 0, 0.84, 0],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-accent selection:text-brand-bg font-sans">
      
      {/* Sticky Top Navigation Bar */}
      <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isHome 
          ? "bg-[#0a0a0a] text-white border-b border-white/5" 
          : "bg-brand-bg/85 text-brand-dark border-b border-brand-border/30"
      } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Name */}
          <Link 
            id="nav-logo"
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            {isHome ? (
              <img 
                src="/image/3.png" 
                alt="aiko logo" 
                className="h-8 sm:h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            ) : (
              <img 
                src="/image/4.png" 
                alt="Raj Shrestha logo" 
                className="h-8 sm:h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            )}
            
            {/* Pulsing Availability Pill - Hidden on mobile */}
            <div className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] font-bold tracking-wider uppercase transition-all duration-300 ${
              isHome 
                ? "bg-[#0b1a13] border-emerald-500/20 text-[#10b981]" 
                : "bg-emerald-50 border-emerald-200 text-emerald-700"
            }`}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  id={`nav-link-${link.name.toLowerCase()}`}
                  key={link.path}
                  to={link.path}
                  className={`font-sans text-[11px] font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 relative py-1 hover:text-brand-accent focus:outline-none uppercase inline-block ${
                    isActive 
                      ? "text-brand-accent" 
                      : isHome 
                        ? "text-zinc-400 hover:text-white" 
                        : "text-brand-dark/70"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button - Desktop Only */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              id="nav-cta-talk"
              to="/contact"
              className={`font-display text-[10px] font-bold tracking-widest px-5 py-2.5 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase border rounded-md ${
                isHome 
                  ? "border-zinc-800 text-white bg-transparent hover:bg-white hover:text-black hover:border-white" 
                  : "border-transparent text-brand-bg bg-brand-dark hover:bg-brand-accent hover:text-brand-bg rounded-full"
              }`}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex lg:hidden h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 focus:outline-none active:scale-95 ${
              isHome 
                ? "border-white/10 hover:bg-white/5 text-white active:bg-white/10" 
                : "border-brand-border/50 hover:bg-brand-cream/50 text-brand-dark active:bg-brand-cream"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-[100] w-full h-screen bg-[#070708]/98 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden select-none"
          >
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-accent/20 blur-[90px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] rounded-full bg-brand-accent/10 blur-[80px]" />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
            </div>

            {/* Overlay Header */}
            <div className="relative z-10 w-full flex items-center justify-between">
              {/* Brand Logo in overlay */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 focus:outline-none"
              >
                <img
                  src="/image/3.png"
                  alt="aiko logo"
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-display font-bold tracking-wider text-sm uppercase">
                  Aiko / Raj
                </span>
              </Link>

              {/* Close Button with Spin Animation */}
              <button
                id="close-mobile-menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 focus:outline-none hover:bg-white hover:text-black hover:border-white active:scale-90"
                aria-label="Close Navigation Menu"
              >
                <X className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
              </button>
            </div>

            {/* Navigation Links Grid / Staggered list */}
            <div className="relative z-10 my-auto flex flex-col justify-center items-start gap-4 w-full pl-2 sm:pl-6 max-w-lg">
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mb-1">
                // Menu Index
              </div>
              <nav className="flex flex-col gap-2.5 w-full [perspective:1000px]">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  const num = String(idx + 1).padStart(2, "0");
                  return (
                    <motion.div
                      key={link.path}
                      variants={linkVariants}
                      className="w-full"
                    >
                      <Link
                        id={`mobile-overlay-link-${link.name.toLowerCase()}`}
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-baseline gap-4 py-1 text-[clamp(1.75rem,7vw,3.25rem)] font-display font-extrabold uppercase tracking-tight transition-all duration-300 relative w-full ${
                          isActive
                            ? "text-brand-accent pl-2"
                            : "text-zinc-400 hover:text-white hover:pl-2"
                        }`}
                      >
                        <span className="font-mono text-[10px] font-medium tracking-normal text-brand-accent/70 group-hover:text-brand-accent">
                          {num}
                        </span>
                        <span className="relative">
                          {link.name}
                          {/* Underline link animation */}
                          <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="mobileOverlayActiveIndicator"
                            className="ml-auto text-brand-accent flex items-center"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          >
                            <ArrowUpRight className="h-6 w-6" />
                          </motion.span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Footer Info */}
            <div className="relative z-10 w-full border-t border-white/5 pt-6 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between text-xs text-zinc-500">
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                  // Local Time
                </span>
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-[10px]">
                  <Clock className="h-3.5 w-3.5 text-brand-accent animate-pulse" />
                  <span>KTM, NEPAL: {ktmTime}</span>
                </div>
              </div>

              {/* Social and CTA section */}
              <div className="flex flex-col sm:items-end gap-1.5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 sm:text-right">
                  // Let's connect
                </span>
                <div className="flex items-center gap-4 text-zinc-400">
                  <a
                    href="mailto:stha41010@gmail.com"
                    className="hover:text-brand-accent transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="h-4 w-4 text-brand-accent" />
                    <span className="font-mono text-[10px]">Email</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Area Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sticky/Fixed Page Bottom CTA & Corporate Footer */}
      <footer className="w-full bg-brand-dark text-brand-bg pt-24 pb-12 overflow-hidden border-t border-brand-border/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Aiko-style Footer Hero Banner */}
          <div className="border-b border-white/10 pb-16 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] font-semibold tracking-widest text-brand-accent uppercase block mb-3">
                LET'S COLLABORATE // 2026
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                Ready to scale your business with custom web and paid traffic?
              </h2>
            </div>

            {/* Premium Circular Interactive Call-to-Action Link */}
            <button
              id="footer-circle-cta"
              onClick={() => navigate("/contact")}
              className="group relative h-28 w-28 sm:h-36 sm:w-36 rounded-full border border-white/20 flex flex-col items-center justify-center bg-transparent overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95"
            >
              {/* Spinning or hovering circle effect */}
              <div className="absolute inset-0 bg-brand-accent scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center z-0" />
              <div className="relative z-10 flex flex-col items-center gap-1 text-white group-hover:text-brand-dark transition-colors duration-300">
                <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8 transform group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-display text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                  Get In Touch
                </span>
              </div>
            </button>
          </div>

          {/* Multi-column Footer Sitemap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10 pb-16 mb-12">
            
            {/* Col 1: About Brief / Kathmandu Identity */}
            <div className="col-span-2 flex flex-col gap-4">
              <span className="font-display text-base font-bold text-white tracking-tight">
                Raj Shrestha
              </span>
              <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm">
                AI Marketing Expert specializing in pixel-perfect visual development (React & Vite) and high-ROI Meta Ads scaling. Operating from the cultural heart of Kathmandu, Nepal.
              </p>
              
              {/* Pulsing clock for Kathmandu local time */}
              <div className="flex items-center gap-2 mt-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl self-start">
                <Clock className="h-4 w-4 text-brand-accent" />
                <span className="font-mono text-xs text-white/70 tracking-wide">
                  Kathmandu Local Time: <span className="font-semibold text-white">{ktmTime || "Loading..."}</span>
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                Navigation
              </span>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      id={`footer-link-${link.name.toLowerCase()}`}
                      to={link.path}
                      className="font-sans text-xs text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact & Office */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                Reach Me
              </span>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-xs text-white/60">
                  <MapPin className="h-4 w-4 text-brand-accent flex-shrink-0" />
                  <span>Baluwatar, Kathmandu 44600</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-white/60">
                  <Mail className="h-4 w-4 text-brand-accent flex-shrink-0" />
                  <a href="mailto:stha41010@gmail.com" className="hover:text-white transition-colors">
                    stha41010@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Metadata & Copyright Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <span className="font-mono text-[10px] text-white/40">
              © {new Date().getFullYear()} RAJ SHRESTHA. ALL RIGHTS RESERVED. MADE IN KATHMANDU.
            </span>
            
            {/* Social handles */}
            <div className="flex items-center gap-4">
              <a 
                id="social-linkedin"
                href="https://linkedin.com/in/stha41010" 
                target="_blank" 
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                id="social-twitter"
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                id="social-github"
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
