import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { BLOGS } from "../data";

export default function Blog() {
  return (
    <div className="w-full">
      <SEO 
        title="Marketing Chronicles & Digital Insights — Raj Shrestha Kathmandu"
        description="Read Raj Shrestha's analysis of paid traffic scaling, local SEO optimization, and custom conversion web designs in the Nepalese context."
      />

      {/* 1. HERO HEADER */}
      <section className="section pt-16 pb-16 border-b border-brand-border/20">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          <div className="max-w-3xl flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <ScrollReveal y={20}>
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3 animate-pulse">
                THE CHRONICLES // ARTICLES & RELEASES
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-dark leading-none uppercase">
                DIGITAL INTEL
              </h1>
            </ScrollReveal>

            <div className="bg-brand-cream border border-brand-border/40 px-4 py-2 rounded-xl">
              <span className="font-mono text-xs text-brand-dark/60 font-semibold uppercase">
                ARCHIVES: 0{BLOGS.length} RELEASES ONLINE
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BLOG INDEX GRID */}
      <section className="section py-16 sm:py-24 bg-brand-cream/10">
        <div className="section__inner max-w-7xl mx-auto px-6 sm:px-8 w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog, idx) => (
              <ScrollReveal 
                key={blog.id}
                y={40}
                delay={idx * 0.15}
                className="group border border-brand-border/30 bg-brand-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-brand-accent transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header */}
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
                    <span className="font-mono text-[9px] font-bold tracking-wider text-brand-bg bg-brand-dark/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-brand-dark/40 block mb-2 font-semibold">
                      {blog.date} // {blog.readTime}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-brand-dark group-hover:text-brand-accent transition-colors duration-300 mb-4 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-dark/70 leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <Link
                    id={`blog-article-link-${blog.id}`}
                    to={`/blog/${blog.id}`}
                    className="font-display text-xs font-bold tracking-widest text-brand-dark hover:text-brand-accent uppercase inline-flex items-center gap-1.5 self-start group"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
