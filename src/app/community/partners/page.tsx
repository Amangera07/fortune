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

const PARTNERS = [
  { id: 1, name: "Zanetti", color: "#004B87", desc: "Zanetti S.p.A. is an Italian cheese company that is an international leader in the production and export of Italian cheeses." },
  { id: 2, name: "Arla", color: "#00875A", desc: "Arla Foods is a dairy cooperative owned by over 12,000 farmers and is the largest producer of dairy products in Scandinavia." },
  { id: 3, name: "DODONI", color: "#E32636", desc: "Dodoni is the leading Greek producer of Feta cheese and other authentic Greek dairy products." },
  { id: 4, name: "Vandersterre", color: "#111", desc: "Vandersterre is a family-owned Dutch cheese company packaging and supplying premium Holland cheeses." },
  { id: 5, name: "Thomas Foods", color: "#163527", desc: "Thomas Foods International is Australia's largest 100% family-owned meat processing company." },
  { id: 6, name: "Fratelli Beretta", color: "#D1121B", desc: "Fratelli Beretta is an Italian company renowned for producing premium quality salumi since 1812." },
  { id: 7, name: "BRIDOR", color: "#1A1A1A", desc: "Bridor is a French bakery manufacturer offering traditional European bakery and pastry products." },
  { id: 8, name: "Cargills", color: "#E31837", desc: "Cargills is a leading food and agribusiness company ensuring high quality sustainable agricultural products." },
  { id: 9, name: "Valio", color: "#0055A4", desc: "Valio is a Finnish dairy and food company offering innovative and delicious dairy products globally." },
  { id: 10, name: "WYKE FARMS", color: "#000", desc: "Wyke Farms is a large independent cheese producer in Somerset, England, known for their premium cheddar." },
  { id: 11, name: "POSEIDON", color: "#005EB8", desc: "Poseidon offers premium seafood products sourced from the finest origins to bring quality to your table." },
  { id: 12, name: "Patissier", color: "#4A4A4A", desc: "Patissier provides exquisite chocolates and pastry ingredients for professional chefs and artisans." },
];

export default function PartnersPage() {
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
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power2.out", scrollTrigger: { trigger: ".content-section", start: "top 80%" } }
      );
      
      gsap.fromTo(".partner-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out", scrollTrigger: { trigger: ".partners-grid", start: "top 85%" } }
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
            src="https://fortunegourmet.com/wp-content/uploads/2025/03/WhatsApp-Image-2023-04-04-at-11.37.30-AM.jpeg" 
            alt="Partners Background" 
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
              Our Partners
            </h1>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ────────────────────────────────────────────────────── */}
      <section className="content-section relative bg-[#f7f8f6] -mt-32 pt-32 pb-24 px-6 sm:px-10 z-10 flex-1">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="fade-up font-royal-sans font-bold text-3xl sm:text-4xl text-[#163527] mb-8">
              Quality without Compromise
            </h2>
            <div className="fade-up text-[#6b7280] font-royal-sans text-[14px] sm:text-[15px] leading-relaxed font-light text-justify sm:text-center space-y-6">
              <p>
                We partner with global brands who share our philosophy of uncompromising quality. We carefully select our partners through extensive evaluations, ensuring rigorous standards for both ethical sourcing and product safety.
              </p>
              <p>
                Our commitment to quality is consistently integrated in the products we carry, the suppliers we represent, and the channels we service. Our strong, growing and mutually beneficial relationships guarantee a steady and safe supply, transparent documentation, and a sustainable approach to product development.
              </p>
              <p>
                Our comprehensive portfolio caters to the diverse needs of HoReCa professionals. They include luxury and star hotels, modern restaurants, QSR, cafes, modern trade and general trade retail outlets. They are backed by a full-scale culinary and customer service department trained to deal passionately, efficiently and effectively with our customers' individual requirements.
              </p>
              <p>
                We partner with brands and businesses that are passionate about food service and who provide exceptional, unique gourmet products from local gastronomic markets or international offerings. Each country where we operate has its own range of key items that we actively promote globally. With close relationships and strategic partnerships across the world, Fortune Gourmet enables you to create authentic, diverse menus utilizing the most traditional ingredients and unique products that seamlessly blend with the daily operations of our customers in every country where we operate.
              </p>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="partners-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="partner-card bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-[320px] p-6 relative group overflow-hidden">
                {/* Logo Area Placeholder */}
                <div className="h-[100px] flex items-center justify-center mb-6">
                  <h3 
                    className="font-royal-cinzel font-bold text-2xl tracking-wide uppercase text-center px-4"
                    style={{ color: partner.color }}
                  >
                    {partner.name}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="flex-1">
                  <p className="font-royal-sans text-[11px] leading-relaxed text-gray-500 line-clamp-6">
                    {partner.desc}
                  </p>
                </div>
                
                {/* Blue Arrow Icon (Bottom Right) */}
                <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-[#7bc3ec] flex items-center justify-center text-white opacity-60 group-hover:opacity-100 transition-opacity shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
