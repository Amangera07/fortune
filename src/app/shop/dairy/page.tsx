"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Dairy Product Data ────────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: "Lactima Cheddar Cheese Spread", tags: "DAIRY, CHEESE, SPREAD, SHOP", img: "/assets/1.jpg" },
  { id: 2, name: "Castello Danish Blue Cheese", tags: "DAIRY, CHEESE, DENMARK, SHOP", img: "/assets/2.jpg" },
  { id: 3, name: "Lactima Cheddar Cheese Slices", tags: "DAIRY, CHEESE, SLICES, SHOP", img: "/assets/3.jpg" },
  { id: 4, name: "Lactima Processed Cheddar Spread", tags: "DAIRY, CHEESE, SPREAD, SHOP", img: "/assets/1.jpg" },
  { id: 5, name: "Castello Traditional Danish Blue", tags: "DAIRY, CHEESE, DENMARK, SHOP", img: "/assets/2.jpg" },
  { id: 6, name: "Lactima Toast Cheddar Slices", tags: "DAIRY, CHEESE, SLICES, SHOP", img: "/assets/3.jpg" },
  { id: 7, name: "Lactima Creamy Cheddar Cup", tags: "DAIRY, CHEESE, SPREAD, SHOP", img: "/assets/1.jpg" },
  { id: 8, name: "Castello Noble Danish Blue", tags: "DAIRY, CHEESE, DENMARK, SHOP", img: "/assets/2.jpg" },
  { id: 9, name: "Lactima Gourmet Cheddar Slices", tags: "DAIRY, CHEESE, SLICES, SHOP", img: "/assets/3.jpg" },
];

export default function DairyPage() {
  const cheeseRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("Default sorting");

  const sortOptions = [
    "Default sorting",
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price: low to high",
    "Sort by price: high to low"
  ];

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const rafTicker = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      if (cheeseRef.current) gsap.set(cheeseRef.current, { opacity: 0 });
      gsap.to(cheeseRef.current, { opacity: 1, duration: 0.25 });
      
      const streams = gsap.utils.toArray<SVGPathElement>(".header-melt-stream");
      streams.forEach(s => gsap.set(s, { strokeDasharray: 400, strokeDashoffset: 400 }));
      gsap.to(".header-melt-stream", { strokeDashoffset: 0, duration: 1.8, stagger: 0.1 });

      gsap.fromTo(heroTextRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 });
      
      gsap.fromTo(".product-card", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out", scrollTrigger: { trigger: ".product-grid", start: "top 80%" } }
      );
    });

    return () => { ctx.revert(); gsap.ticker.remove(rafTicker); lenis.destroy(); };
  }, []);

  return (
    <main className="min-h-screen bg-[#fbe8c3] text-neutral-900 font-sans overflow-x-hidden">
      <Header cheeseRef={cheeseRef} logoRef={logoRef} />

      {/* ── HERO ───────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[80vh] md:min-h-[120vh] lg:min-h-[160vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#080e08]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1a0f] to-[#111a0a]" />
          
          {/* Image faded on the right to match screenshot layout without breaking the full-bleed feel */}
          <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full opacity-50 lg:opacity-90">
            <Image src="/assets/banner-img-dark.png" alt="Dairy Background" fill className="object-cover object-right" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080e08] via-[#080e08]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#080e08]/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,rgba(253,184,51,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"%3E%3C/rect%3E%3C/svg%3E')" }} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full" style={{ paddingTop: "100px", paddingBottom: "160px" }}>
          <div ref={heroTextRef} className="max-w-2xl relative z-10">
            <h1 className="font-royal-cinzel font-bold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-[#fdb833] leading-none mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              Dairy
            </h1>
            <p className="font-royal-sans text-white text-xl sm:text-2xl max-w-md leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              A Vision to Bring World-Class<br/> Gourmet Foods to Every Home
            </p>
            {/* Small decorative line to match fortune page text eyebrow style */}
            <div className="flex items-center gap-3 mt-6">
              <span className="h-px w-10 bg-[#fdb833]" />
              <p className="font-royal-sans text-white/50 text-xs font-semibold tracking-[0.2em] uppercase">
                Fortune Gourmet
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cheese Wave */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 translate-y-[1px]">
          <img src="/assets/banner-bottom-cheese.svg" alt="" className="w-full h-auto block" />
        </div>
      </section>

      {/* ── PRODUCT SECTION ────────────────────────────────────────────────────── */}
      <section className="bg-[#fbe8c3] relative -mt-32 pt-32 pb-24 px-6 sm:px-10 z-0">
        <div className="max-w-7xl mx-auto">
          
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-[#fdb833]/20">
            <p className="font-royal-sans text-[#3D5247] flex items-center gap-2 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              Showing all {PRODUCTS.length} results
            </p>
            
            <div className="flex items-center gap-4 w-full md:w-auto relative z-20">
              {/* Custom React Dropdown */}
              <div className="relative min-w-[200px]">
                <button 
                  onClick={() => setSortOpen(!sortOpen)}
                  className="w-full bg-white border border-[#e3c695] text-[#163527] font-royal-sans text-sm py-2.5 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00875A] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-between transition-all"
                >
                  {sortValue}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform duration-300 ${sortOpen ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>

                {sortOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#e3c695] rounded-md shadow-[0_10px_25px_rgba(0,0,0,0.1)] overflow-hidden z-50">
                    {sortOptions.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setSortValue(option); setSortOpen(false); }}
                        className="w-full text-left px-4 py-2 text-sm font-royal-sans text-[#163527] hover:bg-[#fbe8c3]/40 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative flex-1 md:w-[260px]">
                <input 
                  type="text" 
                  placeholder="Search any products..." 
                  className="w-full bg-white border border-[#e3c695] text-[#163527] font-royal-sans text-sm py-2.5 pl-4 pr-10 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00875A] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-[#163527] text-white rounded-r-md flex items-center justify-center hover:bg-[#0f291f] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 group flex flex-col border border-black/5 hover:border-[#fdb833]/40 transform hover:-translate-y-1">
                {/* Product Image Area - Black background matching original product packaging */}
                <div className="relative aspect-square w-full bg-black flex items-center justify-center p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  
                  {/* Image with standard img tag */}
                  <div className="relative w-full h-full z-10 flex items-center justify-center">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center flex flex-col flex-grow bg-white relative z-20 justify-between">
                  <div>
                    <h3 className="font-royal-cinzel font-bold text-[#111827] text-lg sm:text-[19px] mb-2 group-hover:text-[#fdb833] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="font-royal-sans text-[#71717a] text-[10.5px] font-semibold tracking-widest uppercase leading-relaxed mb-6">
                      {product.tags}
                    </p>
                  </div>
                  
                  <div className="border-t border-neutral-100 pt-4 mt-auto">
                    <button className="font-royal-sans text-xs font-bold text-neutral-800 hover:text-[#fdb833] uppercase tracking-wider transition-colors inline-block">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FEATURES STRIP ────────────────────────────────────────────────────── */}
      <section className="bg-[#163527] py-10 px-6 relative z-10 border-t-4 border-[#fdb833]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#fdb833]/40 flex items-center justify-center text-[#fdb833]">
              <span className="text-xl">🌿</span>
            </div>
            <p className="font-royal-sans text-white text-sm font-medium leading-tight">100%<br/>Pure & Natural</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#fdb833]/40 flex items-center justify-center text-[#fdb833]">
              <span className="text-xl">🐄</span>
            </div>
            <p className="font-royal-sans text-white text-sm font-medium leading-tight">Farm Fresh<br/>Quality</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#fdb833]/40 flex items-center justify-center text-[#fdb833]">
              <span className="text-xl">🛡️</span>
            </div>
            <p className="font-royal-sans text-white text-sm font-medium leading-tight">Hygienically<br/>Processed</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#fdb833]/40 flex items-center justify-center text-[#fdb833]">
              <span className="text-xl">🚚</span>
            </div>
            <p className="font-royal-sans text-white text-sm font-medium leading-tight">Fast & Safe<br/>Delivery</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
