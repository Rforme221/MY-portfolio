import React from "react";

export default function Marquee() {
  const logos = [
    { name: "KTM DENTAL CLINIC", geo: "KATHMANDU" },
    { name: "NEP.PHOTOGRAPHY", geo: "POKHARA" },
    { name: "HIMALAYAN RESTRO", geo: "LAKESIDE" },
    { name: "YETI OUTDOORS", geo: "EVEREST REGION" },
    { name: "THAMEL CRAFTS", geo: "KATHMANDU" },
    { name: "POKHARA ADVENTURES", geo: "POKHARA" },
    { name: "NEPAL ART INITIATIVE", geo: "PATAN" }
  ];

  // Repeat logos twice to make it seamless
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-brand-cream border-y border-brand-border/40 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-cream to-transparent z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex gap-12 sm:gap-20 whitespace-nowrap">
          {duplicatedLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 group cursor-default transition-opacity duration-300 hover:opacity-80"
            >
              <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="font-display text-xs sm:text-sm font-semibold tracking-widest text-brand-dark/40 group-hover:text-brand-dark transition-colors duration-300">
                {logo.name}
              </span>
              <span className="font-mono text-[10px] text-brand-dark/25 px-2 py-0.5 rounded-full bg-brand-border/20">
                {logo.geo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
