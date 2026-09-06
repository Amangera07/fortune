"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ClientsPage() {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const rafTicker = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.fromTo(heroTextRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.2 });
      
      gsap.fromTo(".fade-up", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".content-section", start: "top 80%" } }
      );
    });

    return () => { ctx.revert(); gsap.ticker.remove(rafTicker); lenis.destroy(); };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-neutral-900 font-sans overflow-x-hidden flex flex-col">
      <Header />

      {/* ── HERO ───────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[80vh] md:min-h-[120vh] lg:min-h-[160vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/clients-hero.jpg" 
            alt="Clients Background" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex justify-start text-left" style={{ paddingTop: "100px", paddingBottom: "160px" }}>
          <div ref={heroTextRef} className="max-w-3xl flex flex-col relative z-10">
            <h1 className="font-royal-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              Our Clientele
            </h1>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ────────────────────────────────────────────────────── */}
      <section className="content-section relative bg-[#f7f8f6] -mt-32 pt-32 pb-24 px-6 sm:px-10 z-10 flex-1">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="fade-up mb-16 text-[#6b7280] font-royal-sans text-[15px] sm:text-[17px] leading-[1.8] font-light max-w-4xl mx-auto text-justify sm:text-center">
            <p className="mb-6">
              The DNA of our company is to work towards building strong and long-term relationships with our customers, they are at the heart of every decision we make, whether for creating recipes, providing cost effective solutions and bringing in world class specialty foods for their kitchen/stores. We bring them, every day, the most essential and unique ingredients from around the world and make their daily life a little bit easier and hassle free.
            </p>
            <p>
              Today, we have more than 2,500 customers across the country.
            </p>
          </div>

          {/* Logos Row */}
          <div className="fade-up flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 mb-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text representations since we don't have SVGs */}
            <h3 className="font-royal-cinzel text-xl sm:text-2xl font-bold tracking-widest text-[#163527]">SHANGRI-LA</h3>
            <h3 className="font-royal-sans text-lg sm:text-xl font-light tracking-[0.2em] text-[#163527]">S O F I T E L</h3>
            <div className="w-12 h-12 bg-[#F68F1E] flex items-center justify-center text-white font-bold text-xl rounded-sm">Q</div>
            <h3 className="font-royal-serif text-2xl sm:text-3xl font-bold text-[#163527] italic">starwood</h3>
            <h3 className="font-royal-cinzel text-3xl sm:text-4xl text-[#9A7B4F]">TAJ</h3>
            <div className="flex items-center gap-2">
              <h3 className="font-royal-cinzel text-2xl text-[#9A7B4F]">TAJ</h3>
              <div className="bg-[#B5121B] text-white text-xs px-2 py-1 rounded-full font-bold">sats</div>
            </div>
          </div>

          {/* Infographic */}
          <div className="fade-up relative w-full max-w-4xl mx-auto mt-16 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-16 md:gap-4">
              
              {/* Left Side: HoReCa */}
              <div className="flex flex-col gap-3 w-full md:w-64">
                {[
                  { name: "LUXURY HOTELS", icon: "🏢" },
                  { name: "AIRPORT CATERERS", icon: "✈️" },
                  { name: "RESTAURANT CAFE", icon: "☕" },
                  { name: "WHOLESALE TRADERS", icon: "📦" },
                  { name: "QSR", icon: "🍔" },
                  { name: "MANUFACTURING", icon: "🏭" },
                  { name: "CATERERS", icon: "🍽️" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#a8d5e5] text-white font-bold text-xs sm:text-sm py-2 px-4 rounded-md flex justify-between items-center shadow-sm hover:-translate-y-1 transition-transform cursor-default">
                    <span className="text-left leading-tight pr-2">{item.name}</span>
                    <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">{item.icon}</span>
                  </div>
                ))}
              </div>

              {/* Center Logo */}
              <div className="hidden md:flex flex-col items-center justify-center bg-[#4d4d4d] w-48 h-48 rounded-xl shadow-xl z-20 relative border-4 border-white">
                <Image src="/assets/fortune-logo.webp" alt="Fortune" width={80} height={80} className="object-contain filter brightness-0 invert" />
                <p className="text-white text-[10px] uppercase mt-2 tracking-widest">Fortune</p>
                <p className="text-white/60 text-[8px] uppercase tracking-wider">Gourmet Specialities</p>
                
                {/* Lines to sides */}
                <div className="absolute top-1/2 -left-12 w-12 h-px bg-gray-300"></div>
                <div className="absolute top-1/2 -right-12 w-12 h-px bg-gray-300"></div>
                <div className="absolute top-1/2 -left-20 -translate-y-1/2 -rotate-90 text-gray-500 font-bold tracking-widest text-sm">HoReCa</div>
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 rotate-90 text-gray-500 font-bold tracking-widest text-sm">Retail</div>
              </div>

              {/* Right Side: Retail */}
              <div className="flex flex-col gap-3 w-full md:w-64">
                {[
                  { name: "RESELLERS", icon: "🛍️" },
                  { name: "HYPER MARKETS", icon: "🛒" },
                  { name: "GOURMET STORES", icon: "🍷" },
                  { name: "SUPER MARKETS", icon: "🏪" },
                  { name: "DELICATESSAN", icon: "🥖" },
                  { name: "HYPERLOCAL DELIVERY", icon: "🛵" },
                  { name: "E-COMMERCE", icon: "💻" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#4b7a99] text-white font-bold text-xs sm:text-sm py-2 px-4 rounded-md flex justify-between items-center shadow-sm hover:-translate-y-1 transition-transform cursor-default flex-row-reverse">
                    <span className="text-right leading-tight pl-2">{item.name}</span>
                    <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg">{item.icon}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
