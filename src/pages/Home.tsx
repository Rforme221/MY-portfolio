import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Monitor, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import Marquee from "../components/Marquee";
import WorkCard from "../components/WorkCard";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import { PROJECTS, TESTIMONIALS, BLOGS, SERVICES } from "../data";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function Home() {
  const navigate = useNavigate();
  const selectedProjects = PROJECTS.slice(0, 3);
  const featuredBlogs = BLOGS.slice(0, 2);

  React.useEffect(() => {
    let isHomeMounted = true;
    // utility: convert vw/vh string to px at call-time
    const vw = (v: number) => (v / 100) * window.innerWidth;
    const vh = (v: number) => (v / 100) * window.innerHeight;

    let ctx: any;

    const initGSAP = () => {
      ctx = gsap.context(() => {
        let mm = gsap.matchMedia();

        mm.add(
          {
            isMobile: "(max-width: 767px)",
            isTablet: "(min-width: 768px) and (max-width: 1199px)",
            isDesktop: "(min-width: 1200px)",
          },
          (context) => {
            let { isMobile, isTablet, isDesktop } = context?.conditions || {};

            if (!isMobile) {
              gsap.timeline({
                scrollTrigger: {
                  trigger: ".section-2",
                  start: "top top",
                  end: "+=100%",
                  scrub: 1,
                  pin: true,
                  invalidateOnRefresh: true, // recalcs dynamic vw/vh on resize
                  anticipatePin: 1,
                },
              })
              .to(".panel", { xPercent: -100, ease: "none" }) // %-based, not px
              .to(".asset", { 
                x: () => isTablet ? -vw(15) : -vw(8), 
                y: () => vh(5), 
                scale: 1, 
                ease: "none" 
              }, "<");

              // GSAP Entrance animation for Section-2 panel contents
              gsap.fromTo(".panel-inner-content",
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.0,
                  stagger: 0.15,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: ".section-2",
                    start: "top 75%",
                    toggleActions: "play none none none"
                  }
                }
              );

              // GSAP Entrance animation for Section-2 floating asset card
              gsap.fromTo(".asset-card",
                { opacity: 0, y: 70 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  delay: 0.25,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: ".section-2",
                    start: "top 75%",
                    toggleActions: "play none none none"
                  }
                }
              );
            } else {
              // No pin on mobile — panels stack normally, just fade in on scroll
              gsap.utils.toArray(".panel").forEach((panel: any) => {
                const innerContent = panel.querySelector(".panel-inner-content");
                if (innerContent) {
                  gsap.fromTo(innerContent, 
                    { opacity: 0, y: 30 },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.8,
                      ease: "power2.out",
                      scrollTrigger: { 
                        trigger: panel, 
                        start: "top 85%", 
                        toggleActions: "play none none reverse" 
                      }
                    }
                  );
                }
              });

              // Dynamic Shared Asset Floating (Mobile Fade In)
              gsap.fromTo(".asset-card",
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: ".asset",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            }

            // Responsive parallax & zoom for the hero visual on scroll
            if (!isMobile) {
              gsap.to(".hero-visual", {
                scale: 1,
                x: isDesktop ? "10vw" : "5vw",
                scrollTrigger: {
                  trigger: ".hero-section",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });

              // Parallax scroll for hero title
              gsap.to(".hero-title", {
                yPercent: -50, // % not px — scales with element itself
                scrollTrigger: {
                  trigger: ".hero-section",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });
            } else {
              // High-performance mobile visual entry: lightweight one-time zoom & fade-in entrance animation
              gsap.fromTo(".hero-visual", 
                { scale: 1.12, opacity: 0 },
                {
                  scale: 1.02,
                  opacity: 0.9,
                  duration: 1.2,
                  ease: "power3.out",
                  delay: 0.1,
                }
              );
            }

            // GSAP Entrance animation for Hero title & description removed to let Tailwind mount animations handle it cleanly

            return () => {}; // cleanup auto-handled by matchMedia on breakpoint change
          }
        );

        // Pinning and horizontal timeline step/card reveal for methodology
        mm.add("(min-width: 768px)", () => {
          let steps = gsap.utils.toArray(".step-item") as any[];
          let cards = gsap.utils.toArray(".step-card") as any[];

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".steps-track",
              start: "top top",
              end: "+=300%",
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });

          steps.forEach((step: any, i: number) => {
            tl.to(".track-fill", { scaleX: (i + 1) * 0.25, ease: "none" }, i)
              .fromTo(cards[i], { autoAlpha: 0, yPercent: 10 }, { autoAlpha: 1, yPercent: 0, ease: "none" }, i)
              .to(cards[i], { autoAlpha: 0, yPercent: -10, ease: "none" }, i + 0.8);
          });

          return () => {
            tl.kill();
          };
        });

        mm.add("(max-width: 767px)", () => {
          let steps = gsap.utils.toArray(".step-item");
          steps.forEach((step: any) => {
            gsap.from(step, {
              autoAlpha: 0,
              x: -vw(5),
              scrollTrigger: { 
                trigger: step, 
                start: "top 85%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true
              },
            });
          });
        });

        // Parallax scroll for hero title is now handled responsively inside matchMedia for !isMobile

        // for cross-viewport translate, compute in vw at trigger time
        ScrollTrigger.create({
          trigger: ".core-systems-section",
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".system-card", 
              { x: () => -vw(5), autoAlpha: 0 },
              {
                x: 0, // recomputed live, not cached
                autoAlpha: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                overwrite: "auto"
              }
            );
          },
        });
      });
    };

    // Initialize GSAP ScrollTriggers
    initGSAP();

    let hoverCleanups: Array<() => void> = [];
    let systemRows = gsap.utils.toArray(".system-row") as HTMLElement[];
    systemRows.forEach((row) => {
      let cta = row.querySelector(".system-cta");
      if (cta) {
        const onEnter = () => {
          gsap.set(cta, { willChange: "transform" });
          gsap.to(cta, { 
            xPercent: 5, 
            duration: 0.3,
            onComplete: () => gsap.set(cta, { willChange: "auto" })
          });
        };
        const onLeave = () => {
          gsap.set(cta, { willChange: "transform" });
          gsap.to(cta, { 
            xPercent: 0, 
            duration: 0.3,
            onComplete: () => gsap.set(cta, { willChange: "auto" })
          });
        };
        row.addEventListener("mouseenter", onEnter);
        row.addEventListener("mouseleave", onLeave);
        hoverCleanups.push(() => {
          row.removeEventListener("mouseenter", onEnter);
          row.removeEventListener("mouseleave", onLeave);
        });
      }
    });

    // Listen to mobile menu state change events from Layout.tsx to toggle ScrollTriggers
    const handleMenuStateChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      const isOpen = customEvent.detail?.open;
      try {
        if (isOpen) {
          ScrollTrigger.getAll().forEach((st) => st.disable(false));
        } else {
          ScrollTrigger.getAll().forEach((st) => st.enable());
          ScrollTrigger.refresh();
        }
      } catch (err) {
        console.error("Home: Failed to sync ScrollTriggers on menu state change", err);
      }
    };
    window.addEventListener("mobileMenuStateChange", handleMenuStateChange);

    // Trigger initial refresh after render to ensure correct placement calculations
    // Wait for both fonts (document.fonts.ready) and window load event to avoid layout/font reflow issues
    const windowLoadPromise = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    const fontsReadyPromise = (document as any).fonts ? (document as any).fonts.ready : Promise.resolve();

    Promise.all([fontsReadyPromise, windowLoadPromise]).then(() => {
      if (isHomeMounted && !(window as any).aikoMobileMenuOpen) {
        ScrollTrigger.refresh();
      }
    }).catch((err) => {
      console.warn("Home: Failed to wait for fonts or load event", err);
      if (isHomeMounted && !(window as any).aikoMobileMenuOpen) {
        ScrollTrigger.refresh();
      }
    });

    // resize handling — debounce + kill/rebuild, don't just refresh
    let resizeTimer: any;
    let lastWidth = window.innerWidth;
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      // On mobile browsers, vertical scrolling triggers the browser address bar toggle,
      // which fires resize events. We ignore these and only reinitialize if the actual
      // horizontal width changed (e.g. orientation change or window resize).
      if (currentWidth === lastWidth) {
        return;
      }

      // If the mobile menu is open, ignore resize/refresh to prevent layout thrashing and flickering
      if ((window as any).aikoMobileMenuOpen) {
        return;
      }

      lastWidth = currentWidth;

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        if (ctx) {
          ctx.revert();
        }
        initGSAP();
        ScrollTrigger.refresh();
      }, 200);
    };

    const handleOrientationChange = () => {
      if (!(window as any).aikoMobileMenuOpen) {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      isHomeMounted = false;
      if (ctx) {
        ctx.revert();
      }
      window.removeEventListener("mobileMenuStateChange", handleMenuStateChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      clearTimeout(resizeTimer);
      hoverCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="w-full">
      {/* On-Page & Technical SEO Setup */}
      <SEO 
        title="Raj Shrestha — AI Marketing Expert & Web Designer (Kathmandu)"
        description="Senior AI Marketing Expert and Web Developer based in Kathmandu, Nepal. Custom React design and high-converting Meta Ads campaigns that scale local businesses."
      />

      {/* 1. HERO SECTION */}
      <section className="section hero-section relative min-h-dvh md:min-h-[85dvh] lg:min-h-[90dvh] flex flex-col md:flex-row md:items-center justify-between md:justify-start overflow-hidden bg-[#0a0a0a] border-b border-white/5 pt-24 pb-0 md:py-[clamp(4rem,10vw,12rem)]">
        {/* Subtle Ambient Brand Highlight */}
        <div 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(188, 72, 0, 0.12) 0%, transparent 60%)" }}
        />
        {/* Background Image of Profile Portrait (Desktop only) */}
        <div 
          className="hero-visual absolute inset-0 z-0 bg-no-repeat bg-cover bg-right opacity-90 hidden md:block"
          style={{
            backgroundImage: "url('/image/hero.png')",
          }}
        />
        {/* Gradient overlays to blend portrait image seamlessly into pitch-black background (Desktop only) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent lg:via-[#0a0a0a]/75 lg:to-transparent hidden md:block" />
        
        {/* Mobile bottom shadow blend overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden pointer-events-none" />
 
        <div className="section__inner w-full flex-grow flex flex-col justify-between md:justify-center relative z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <div className="max-w-3xl mx-auto md:mx-0 flex flex-col items-center md:items-start">
              <h1 className="hero-title font-display font-normal tracking-tight text-white leading-[1.08] uppercase mb-[clamp(1rem,4vw,3.5rem)] text-center md:text-left animate-fade-in-up">
                Web Design <br />
                & Meta Ads <br />
                <span className="text-[#bda881]">using AI</span>
              </h1>
 
              <p className="hero-desc font-sans text-[clamp(1rem,1.4vw+0.4rem,1.25rem)] text-zinc-400 font-light leading-relaxed max-w-[clamp(20rem,50vw,40rem)] text-center md:text-left opacity-0 animate-fade-in-up-delayed">
                High-converting digital experiences and precision Meta Ads campaigns, optimized with AI to scale local businesses and maximize your ROI.
              </p>
            </div>
          </div>

          {/* Centered Mobile Portrait / Artwork matching reference exactly */}
          <div className="md:hidden w-full flex justify-center items-end relative overflow-hidden mt-8 self-end h-[42dvh] xs:h-[46dvh]">
            <img 
              src="/image/myportfolio.png"
              alt="My Portfolio"
              width={340}
              height={460}
              className="w-[85%] max-w-[340px] h-full object-cover rounded-t-[2rem] border-t border-x border-white/10 opacity-90 object-top shadow-[0_-20px_50px_rgba(0,0,0,0.85)]"
              referrerPolicy="no-referrer"
            />
            {/* Soft dark blend at the absolute bottom of image */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Mobile Scroll Affordance (hidden on md and larger) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden flex flex-col items-center gap-1.5 pointer-events-none transition-opacity duration-300 opacity-50">
          <span className="font-mono text-[8px] text-zinc-500 tracking-[0.25em] uppercase">
            Scroll to explore
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-zinc-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#bda881] animate-scroll-hint motion-reduce:hidden" />
          </div>
        </div>
      </section>

      {/* 2. AUTO-SCROLL LOGO TICKER */}
      <Marquee />

      {/* GSAP Interactive Horizontal Panel Section */}
      <section className="section section-2 relative bg-[#0a0a0a] text-white overflow-hidden w-full h-dvh sm:h-dvh flex flex-col justify-between border-t border-white/5">
        <div className="absolute inset-0 z-0 bg-radial-gradient from-zinc-900 via-[#0a0a0a] to-[#0a0a0a] opacity-60 pointer-events-none" />
        {/* Subtle Architectural Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] pointer-events-none z-0" />
        
        <div className="section__inner full-bleed w-full h-full">
          {/* Horizontal scroll panels wrapper */}
          <div className="panels-container flex w-[200vw] h-full flex-row overflow-hidden relative z-10">
            
            {/* Panel 1 */}
            <div className="panel scroll-panel h-full flex-shrink-0 flex flex-col justify-start pt-[clamp(5rem,15dvh,8rem)] md:justify-center md:pt-0 px-[clamp(1.5rem,5vw,6rem)] relative">
              <div className="panel-inner-content max-w-2xl flex flex-col gap-[clamp(1rem,2vw,3rem)] opacity-0">
                <span className="font-mono text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold tracking-widest text-[#bda881] uppercase block">
                  01 // DESIGN & ARCHITECTURE
                </span>
                <h2 className="font-display text-[clamp(2.25rem,5.5vw,5rem)] font-bold tracking-tight uppercase leading-[1.1] text-white">
                  AI-Optimized <br />
                  Web Design
                </h2>
                <p className="font-sans text-[clamp(0.9rem,1.4vw,1.2rem)] text-zinc-400 font-light leading-relaxed max-w-xl">
                  We craft hyper-fast, React-based web experiences built on high-fidelity designs. Millisecond loading speed ensures maximum engagement and frictionless user paths.
                </p>
              </div>
            </div>
 
            {/* Panel 2 */}
            <div className="panel scroll-panel h-full flex-shrink-0 flex flex-col justify-start pt-[clamp(5rem,15dvh,8rem)] md:justify-center md:pt-0 px-[clamp(1.5rem,5vw,6rem)] relative bg-[#0d0d0d]">
              <div className="panel-inner-content max-w-2xl flex flex-col gap-[clamp(1rem,2vw,3rem)] opacity-0">
                <span className="font-mono text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold tracking-widest text-[#bda881] uppercase block">
                  02 // TRAFFIC & META ADS
                </span>
                <h2 className="font-display text-[clamp(2.25rem,5.5vw,5rem)] font-bold tracking-tight uppercase leading-[1.1] text-white">
                  High-ROAS <br />
                  AI-Driven Ads
                </h2>
                <p className="font-sans text-[clamp(0.9rem,1.4vw,1.2rem)] text-zinc-400 font-light leading-relaxed max-w-xl">
                  Precision Meta Ads combined with real-time conversion monitoring. We write psychology-backed creatives and employ smart interest-targeting to scale your pipeline.
                </p>
              </div>
            </div>
 
          </div>
        </div>
 
        {/* Dynamic Shared Asset Floating */}
        <div className="asset hidden md:block absolute md:left-auto md:translate-x-0 md:right-[clamp(2rem,8vw,12rem)] md:top-1/2 md:-translate-y-1/2 z-20 md:bottom-auto w-[90vw] sm:w-[80vw] md:w-[clamp(20rem,35vw,32rem)]">
          <div className="asset-card backdrop-blur-xl bg-zinc-900/60 border border-white/10 p-4 sm:p-[clamp(1.5rem,3vw,3rem)] rounded-2xl sm:rounded-[clamp(1.25rem,2.5vw,2rem)] shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col gap-3 sm:gap-[clamp(1rem,2vw,2.5rem)] text-left opacity-0">
            <div className="flex justify-between items-center border-b border-white/10 pb-3 sm:pb-[clamp(0.75rem,1.5vw,1.5rem)]">
              <span className="font-mono text-[10px] sm:text-xs text-[#bda881] tracking-widest font-bold">LIVE CONVERSION ENGINE</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider animate-pulse border border-emerald-500/20">
                ● ACTIVE
              </span>
            </div>
            
            <div className="flex flex-col gap-2.5 sm:gap-[clamp(0.75rem,1.5vw,1.5rem)]">
              {/* Stat 1 */}
              <div className="flex justify-between items-end">
                <span className="text-zinc-400 text-xs sm:text-sm font-light">Conversion Lift</span>
                <span className="font-display text-2xl sm:text-3xl font-normal text-white">+142%</span>
              </div>
              {/* Mini Chart */}
              <div className="h-4 sm:h-6 w-full flex items-end gap-1 sm:gap-1.5">
                <div className="h-1.5 sm:h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[40%]" />
                </div>
                <div className="h-1.5 sm:h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[78%]" />
                </div>
                <div className="h-1.5 sm:h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#bda881] to-yellow-500 w-[95%]" />
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="flex justify-between items-end border-t border-white/5 pt-2.5 sm:pt-[clamp(0.75rem,1.5vw,1.5rem)]">
                <span className="text-zinc-400 text-xs sm:text-sm font-light">Meta Pixel Match Rate</span>
                <span className="font-display text-2xl sm:text-3xl font-normal text-white">99.8%</span>
              </div>
              
              {/* Stat 3 */}
              <div className="flex justify-between items-end border-t border-white/5 pt-2.5 sm:pt-[clamp(0.75rem,1.5vw,1.5rem)]">
                <span className="text-zinc-400 text-xs sm:text-sm font-light">Cost Per Acquisition</span>
                <span className="font-display text-2xl sm:text-3xl font-normal text-[#bda881]">-48%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK SHOWCASE */}
      <section 
        className="section overflow-visible bg-brand-bg text-brand-dark border-b border-brand-border/30 relative z-20 py-24 sm:py-32"
      >
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          {/* Header Row exactly matching the video style */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[var(--gap-scale)] mb-[clamp(3rem,6vw,8rem)]">
            <ScrollReveal y={20} className="max-w-xl">
              <span className="font-mono text-[clamp(0.6rem,0.85vw,0.75rem)] font-bold tracking-widest text-brand-accent uppercase block mb-[clamp(0.4rem,1vw,0.8rem)]">
                SELECTED WORK SHOWCASE // 2025-2026
              </span>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-normal text-brand-dark uppercase tracking-tight">
                Selected Work
              </h2>
            </ScrollReveal>
            
            <Link
              to="/work"
              className="group flex items-center gap-[clamp(0.5rem,1vw,1rem)] px-[clamp(1rem,2vw,2.5rem)] py-[clamp(0.5rem,1vw,1.25rem)] border border-brand-border rounded-full text-[clamp(0.65rem,0.8vw,0.8rem)] font-bold tracking-widest text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-500 uppercase self-start"
            >
              <span>SEE ALL</span>
              <span className="h-[clamp(1.25rem,2vw,2rem)] w-[clamp(1.25rem,2vw,2rem)] rounded-full bg-brand-cream group-hover:bg-brand-accent group-hover:text-white text-brand-dark/70 flex items-center justify-center transition-colors border border-brand-border/30">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

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
                  className={`sticky top-[clamp(5.5rem,12dvh,9rem)] w-full min-h-[460px] sm:min-h-[clamp(450px,78dvh,850px)] rounded-[clamp(1.25rem,3vw,3rem)] overflow-hidden bg-gradient-to-b ${gradient} border border-zinc-800/10 shadow-[0_30px_80px_rgba(0,0,0,0.2)] p-5 sm:p-[clamp(1.5rem,4vw,4rem)] flex flex-col justify-between group`}
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
                      width={800}
                      height={600}
                      wrapperClassName="absolute inset-0 w-full h-full"
                      className="w-full h-full object-cover select-none opacity-45 group-hover:opacity-60 group-hover/link:opacity-80 transition-all duration-700 group-hover:scale-105 group-hover/link:scale-110"
                      skeletonClassName="bg-black/45 animate-pulse"
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
                      className="flex items-center gap-[clamp(0.5rem,1vw,1rem)] px-[clamp(0.8rem,2vw,2rem)] py-[clamp(0.4rem,1vw,1rem)] border border-white/15 text-white rounded-full text-[clamp(0.6rem,0.8vw,0.75rem)] font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase self-start"
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

        </div>
      </section>

      {/* 4. SERVICES SNAPSHOT */}
      <section 
        className="section core-systems-section py-24 sm:py-32 bg-brand-cream/30 border-b border-brand-border/20"
      >
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          {/* Section header */}
          <ScrollReveal y={20} className="max-w-xl mb-20">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
              WHAT I DO // CORE SYSTEMS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase">
              GROWTH PLUGINS FOR MODERN ENTERPRISES
            </h2>
          </ScrollReveal>

          {/* Numbered Row List */}
          <div className="flex flex-col">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                onClick={() => navigate("/services")}
                className="system-row system-card group cursor-pointer hover:bg-brand-cream/40 px-4 rounded-2xl transition-all duration-300"
              >
                {/* Number */}
                <div className="system-num font-display font-bold text-brand-accent/40 group-hover:text-brand-accent transition-colors">
                  {service.number}
                </div>

                {/* Title */}
                <div className="system-title flex flex-col gap-2">
                  <h3 className="font-display font-bold uppercase text-brand-dark">
                    {service.title}
                  </h3>
                  <span className="font-mono text-[9px] text-brand-accent uppercase tracking-widest block">
                    SYSTEM OPERATIVE STATUS: ONLINE
                  </span>
                </div>

                {/* Desc */}
                <div className="system-desc">
                  <p className="font-sans text-brand-dark/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* CTA Link Icon */}
                <div className="system-cta flex items-center">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/services");
                    }}
                    className="flex items-center gap-2 font-display text-[10px] font-bold tracking-widest text-brand-dark uppercase group-hover:text-brand-accent transition-colors"
                  >
                    <span>CONFIG ENGINE</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WORK PROCESS */}
      <section className="section steps-track border-b border-brand-border/20 py-24 sm:py-0 sm:h-dvh sm:min-h-dvh flex flex-col justify-center bg-brand-bg">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 h-full flex flex-col justify-center w-full">
          
          <ScrollReveal y={20} className="max-w-xl mb-16">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-primary uppercase block mb-3">
              METHODOLOGY // STEP-BY-STEP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
              A Systematic Process Designed For Predictable Scale
            </h2>
          </ScrollReveal>

          {/* Connected Timeline Row */}
          <div className="steps-row mb-16">
            {/* Real DOM line proxy for animating fill */}
            <div className="track-line bg-brand-cream">
              <div className="track-fill bg-brand-primary" />
            </div>

            {[
              { num: "01", title: "Discovery & Audit", desc: "We deep-dive into your existing analytics, current sales metrics, and market competitors in Kathmandu or overseas to uncover the leaks." },
              { num: "02", title: "AI Blueprinting", desc: "We draft a unified visual interface blueprint, write high-converting copy using proven psychological models, and structure our ad funnel." },
              { num: "03", title: "Launch Pad Setup", desc: "Our team writes lightweight React code and configures Meta Conversions API to establish pristine tracking and millisecond loads." },
              { num: "04", title: "The Scale Engine", desc: "We launch and optimize our creative ad assets, continually refining interest curves and page flows to squeeze maximum ROAS." }
            ].map((step) => (
              <div key={step.num} className="step-item flex flex-row sm:flex-col items-center sm:justify-center justify-start gap-4 sm:gap-0 relative z-10">
                <div className="step-dot border-2 border-brand-primary bg-brand-bg flex items-center justify-center flex-shrink-0 z-10 sm:mx-auto">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                </div>
                <div className="step-label font-display font-bold uppercase tracking-wider text-brand-dark/80 mt-0 sm:mt-2 text-left sm:text-center">
                  <span className="block text-[10px] font-mono text-brand-accent mb-0.5">Phase {step.num}</span>
                  {step.title}
                  <p className="block sm:hidden font-sans text-xs text-brand-dark/70 font-light mt-1.5 normal-case leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cards container: stacked cards */}
          <div className="hidden sm:block relative max-w-2xl mx-auto w-full min-h-[220px]">
            {[
              { num: "01", title: "Discovery & Audit", desc: "We deep-dive into your existing analytics, current sales metrics, and market competitors in Kathmandu or overseas to uncover the leaks." },
              { num: "02", title: "AI Blueprinting", desc: "We draft a unified visual interface blueprint, write high-converting copy using proven psychological models, and structure our ad funnel." },
              { num: "03", title: "Launch Pad Setup", desc: "Our team writes lightweight React code and configures Meta Conversions API to establish pristine tracking and millisecond loads." },
              { num: "04", title: "The Scale Engine", desc: "We launch and optimize our creative ad assets, continually refining interest curves and page flows to squeeze maximum ROAS." }
            ].map((step) => (
              <div 
                key={step.num}
                className="step-card absolute inset-0 border p-8 rounded-3xl bg-brand-bg border-brand-primary/40 shadow-[0_25px_50px_rgba(37,99,235,0.06)] ring-1 ring-brand-primary/10 text-center flex flex-col gap-3 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
                <span className="font-mono text-[9px] font-bold text-brand-primary tracking-widest uppercase block">
                  METHODOLOGY PHASE {step.num}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-brand-dark tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-light max-w-xl mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="section py-24 sm:py-32 bg-brand-cream/10 border-b border-brand-border/20">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          <ScrollReveal y={20} className="max-w-xl mb-20">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
              CLIENT TESTIMONIALS // REAL RESULTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
              Trusted By Dynamic Business Leaders
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <ScrollReveal 
                key={testimonial.id}
                y={30}
                delay={idx * 0.15}
                className="flex flex-col justify-between border border-brand-border/30 bg-brand-bg p-8 rounded-2xl relative shadow-sm"
              >
                <div className="flex flex-col gap-6">
                  {/* Glowing visual emblem */}
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    ))}
                  </div>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-dark/80 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-border/20 flex flex-col">
                  <span className="font-display text-sm font-bold text-brand-dark uppercase">
                    {testimonial.author}
                  </span>
                  <span className="font-mono text-[9px] text-brand-accent uppercase tracking-widest mt-1">
                    {testimonial.role} // {testimonial.company}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ABOUT TEASER */}
      <section className="section py-24 sm:py-32 border-b border-brand-border/20">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          <div className="about-teaser-layout grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Portrait block */}
            <div className="lg:col-span-5 w-full">
              <ScrollReveal y={30} className="about-portrait-block-container relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-border bg-brand-cream shadow-md group flex items-center justify-center w-full">
                {/* Full container image */}
                <ImageWithSkeleton 
                  src="/image/myportfolio.png" 
                  alt="Raj Shrestha" 
                  width={400}
                  height={500}
                  wrapperClassName="absolute inset-0 w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  skeletonClassName="bg-slate-200/50 dark:bg-zinc-800"
                />
              </ScrollReveal>
            </div>

            {/* Content teaser block */}
            <div className="lg:col-span-7 w-full">
              <ScrollReveal y={30} delay={0.2} className="about-text-container">
                <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
                  THE STRATEGIST // BIO
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-6">
                  ENGINEERING VISUAL SYSTEMS FROM THE CAPITAL OF NEPAL
                </h2>
                <p className="font-sans text-base text-brand-dark/70 leading-relaxed mb-8">
                  Originally trained in performance metrics and system architecture, I help businesses design interactive spaces and paid campaigns that convert. I am based in Kathmandu and consult for local powerhouses and international startups aiming for rapid market expansion.
                </p>
                <button
                  onClick={() => navigate("/about")}
                  className="font-display text-xs font-bold tracking-widest text-brand-dark hover:text-brand-accent uppercase pb-1 border-b border-brand-dark/20 hover:border-brand-accent flex items-center gap-2 group transform hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Read My Full Story</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 8. BLOG TEASER */}
      <section className="section py-24 sm:py-32">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <ScrollReveal y={20} className="max-w-xl">
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
                INSIGHTS // EXPERT INTEL
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase">
                THE MARKETING CHRONICLES
              </h2>
            </ScrollReveal>

            <Link
              to="/blog"
              className="font-display text-xs font-bold tracking-widest text-brand-dark hover:text-brand-accent uppercase flex items-center gap-2 group self-start pb-1 border-b border-brand-dark/20 hover:border-brand-accent transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog, idx) => (
              <ScrollReveal 
                key={blog.id}
                y={30}
                delay={idx * 0.15}
                className="group border border-brand-border/30 bg-brand-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Cover Header */}
                <div 
                  className="h-48 w-full relative bg-brand-cream/10"
                  style={{ 
                    background: blog.image.startsWith("linear-gradient") 
                      ? blog.image 
                      : `url("${encodeURI(blog.image)}") center/cover no-repeat` 
                  }}
                >
                  <div className="absolute inset-0 bg-brand-dark/25" />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] font-bold tracking-wider text-brand-bg bg-brand-dark/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-brand-dark/40 block mb-2">
                      {blog.date} // {blog.readTime}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-brand-dark group-hover:text-brand-accent transition-colors duration-300 mb-4 line-clamp-1">
                      {blog.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-dark/70 leading-relaxed mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>

                  <Link
                    id={`blog-teaser-link-${blog.id}`}
                    to={`/blog/${blog.id}`}
                    className="font-display text-xs font-bold tracking-widest text-brand-dark hover:text-brand-accent uppercase inline-flex items-center gap-1 self-start transform hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
