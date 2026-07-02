import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Bookmark, Share2 } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { BLOGS } from "../data";

export default function BlogDetail() {
  const { blogId } = useParams<{ blogId: string }>();

  // Find blog
  const blog = BLOGS.find((b) => b.id === blogId);

  // Fallback if not found
  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-2xl font-bold uppercase text-brand-dark mb-4">Article Not Found</h2>
        <p className="font-sans text-sm text-brand-dark/70 mb-8">The archive registry ID is invalid.</p>
        <Link to="/blog" className="text-brand-accent hover:underline">Back to Blog Archives</Link>
      </div>
    );
  }

  // Formatting content helpers (splitting simple markdown headings etc)
  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map((para, idx) => {
      if (para.startsWith("### ")) {
        return (
          <h3 key={idx} className="font-display text-lg sm:text-xl font-bold uppercase text-brand-dark mt-8 mb-4">
            {para.replace("### ", "")}
          </h3>
        );
      }
      if (para.startsWith("## ")) {
        return (
          <h2 key={idx} className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-dark mt-10 mb-5 border-b border-brand-border/20 pb-2">
            {para.replace("## ", "")}
          </h2>
        );
      }
      return (
        <p key={idx} className="font-sans text-sm sm:text-base leading-relaxed text-brand-dark/75 mb-6">
          {para}
        </p>
      );
    });
  };

  return (
    <div className="w-full">
      <SEO 
        title={`${blog.title} — Digital Insights by Raj Shrestha`}
        description={blog.excerpt}
      />

      {/* 1. BACK BAR & HEADER */}
      <section className="section pt-12 pb-16 border-b border-brand-border/20">
        <div className="section__inner max-w-4xl mx-auto px-6 sm:px-8 w-full">
          
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-brand-dark/60 hover:text-brand-accent uppercase mb-12 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Archives</span>
          </Link>

          {/* Categorized pill */}
          <span className="font-mono text-[10px] font-bold tracking-widest text-brand-accent uppercase block mb-3">
            ARCHIVE CLASSIFICATION: {blog.category}
          </span>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark uppercase leading-tight">
            {blog.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 mt-8 border-t border-brand-border/30 pt-6">
            <div className="flex items-center gap-2 font-mono text-[10px] text-brand-dark/50">
              <Calendar className="h-4 w-4 text-brand-accent" />
              <span>{blog.date}</span>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-[10px] text-brand-dark/50">
              <Clock className="h-4 w-4 text-brand-accent" />
              <span>{blog.readTime}</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-brand-dark/50 ml-auto">
              <Bookmark className="h-4 w-4 text-brand-accent" />
              <span>SECURE RECORD</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. COVER COVER COVER */}
      <section className="section py-8 bg-brand-cream/15">
        <div className="section__inner max-w-4xl mx-auto px-6 sm:px-8 w-full">
          <ScrollReveal y={30}>
            <div 
              className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden border border-brand-border/40 shadow-sm relative bg-brand-cream/20"
              style={{ 
                background: blog.image.startsWith("linear-gradient") 
                  ? blog.image 
                  : `url("${encodeURI(blog.image)}") center/cover no-repeat` 
              }}
            >
              <div className="absolute inset-0 bg-brand-dark/15" />
              <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. CONTENT CORE BODY */}
      <section className="section py-16">
        <div className="section__inner max-w-4xl mx-auto px-6 sm:px-8 w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Sidebar quick social */}
            <div className="md:col-span-3 border-r border-brand-border/10 pr-6 hidden md:block">
              <span className="font-mono text-[9px] text-brand-dark/40 font-bold uppercase tracking-wider block mb-4">
                ARTICLE CONTROLS
              </span>
              <ul className="flex flex-col gap-3">
                <li>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article link copied to clipboard!");
                    }}
                    className="flex items-center gap-2 font-display text-[10px] font-bold text-brand-dark/60 hover:text-brand-accent uppercase"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Copy URL</span>
                  </button>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-2 font-display text-[10px] font-bold text-brand-dark/60 hover:text-brand-accent uppercase"
                  >
                    <Bookmark className="h-4 w-4" />
                    <span>Consult Raj</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Read text content column */}
            <div className="md:col-span-9">
              <div className="prose prose-neutral max-w-none">
                {renderParagraphs(blog.content)}
              </div>

              {/* Back to Blog links */}
              <div className="mt-16 pt-10 border-t border-brand-border/20 flex items-center justify-between">
                <Link
                  to="/blog"
                  className="font-display text-xs font-bold tracking-widest text-brand-dark hover:text-brand-accent uppercase inline-flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to archives</span>
                </Link>

                <Link
                  to="/contact"
                  className="font-display text-xs font-semibold tracking-widest text-brand-bg bg-brand-dark hover:bg-brand-accent hover:text-brand-bg px-6 py-3.5 rounded-full uppercase transition-all duration-300"
                >
                  Discuss with Raj
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
