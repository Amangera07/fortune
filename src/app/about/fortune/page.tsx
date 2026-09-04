"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Header from "@/components/Header";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const PILLARS = [
  {
    icon: "👁",
    title: "Vision",
    desc: "To be the pioneer in the sustainable sourcing, innovating and distribution of diverse quality foods.",
  },
  {
    icon: "🚀",
    title: "Mission",
    desc: "To uplift the supply chain of premium gourmet foods and deliver quality products that nourish people and create a better future.",
  },
  {
    icon: "💎",
    title: "Values",
    desc: "Integrity guides our path. Passion to pursue our goals. Innovation that helps us maintain market leadership.",
  },
  {
    icon: "🏆",
    title: "Success",
    desc: "Consistent quality and reliability of our supply. Co-creation and synergistic philosophies. A strong foundation for new markets.",
  },
];

const CATEGORIES = [
  { label: "Cheese", emoji: "🧀" },
  { label: "Raw Meat", emoji: "🥩" },
  { label: "Salumi", emoji: "🍖" },
  { label: "Seafood", emoji: "🐟" },
  { label: "Bakery", emoji: "🥐" },
  { label: "Poultry", emoji: "🍗" },
];

const TIMELINE = [
  { year: "1997", text: "Fortune founded with a vision to bring global gourmet foods to India." },
  { year: "2005", text: "Expanded product range to include premium cheese and charcuterie." },
  { year: "2010", text: "Strengthened distribution network with multi temperature warehouses." },
  { year: "2015", text: "Partnered with leading global brands across Europe, Asia and USA." },
  { year: "2020", text: "Expanded nationwide reach, serving customers across India." },
  { year: "2026", text: "Continuing to raise the bar with innovation, quality and trust." },
];

// ─── Video Modal ───────────────────────────────────────────────────────────────
function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors duration-200"
          aria-label="Close video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
        {/* YouTube embed — Fortune/gourmet food showcase */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wQmPvU85DCk?autoplay=1&rel=0&modestbranding=1"
          title="Fortune Gourmet — The World of Fine Foods"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function AboutFortunePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  const cheeseRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const storyImgRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const timelineImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
      infinite: false,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const rafTicker = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Header cheese entrance
      const headerStreams = gsap.utils.toArray<SVGPathElement>(".header-melt-stream");
      headerStreams.forEach((s) => {
        const len = s.getTotalLength ? s.getTotalLength() : 400;
        gsap.set(s, { strokeDasharray: len + 10, strokeDashoffset: len + 10 });
      });
      if (cheeseRef.current) gsap.set(cheeseRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(cheeseRef.current, { opacity: 1, duration: 0.25 })
        .to(".header-melt-stream", {
          strokeDashoffset: 0, duration: 1.8,
          stagger: { amount: 0.35, from: "start" },
        }, "-=0.1");

      gsap.to(cheeseRef.current, {
        scaleY: 1.015, scaleX: 0.995, y: "+=2",
        duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true,
        delay: 2.2, transformOrigin: "top center",
      });

      // Hero text
      gsap.fromTo(heroTextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
      );

      // Story slide in
      gsap.fromTo(storyImgRef.current, { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1.1, ease: "power2.out",
        scrollTrigger: { trigger: storyImgRef.current, start: "top 78%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(storyTextRef.current, { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 1.1, ease: "power2.out", delay: 0.15,
        scrollTrigger: { trigger: storyTextRef.current, start: "top 78%", toggleActions: "play none none reverse" },
      });

      // Pillars stagger
      gsap.fromTo(".pillar-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.15,
        scrollTrigger: { trigger: pillarsRef.current, start: "top 75%", toggleActions: "play none none reverse" },
      });

      // Categories pop
      gsap.fromTo(".cat-card", { opacity: 0, scale: 0.85 }, {
        opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.4)", stagger: 0.1,
        scrollTrigger: { trigger: categoriesRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      // Timeline
      gsap.fromTo(".timeline-item", { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.65, ease: "power2.out", stagger: 0.12,
        scrollTrigger: { trigger: timelineRef.current, start: "top 78%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(timelineImgRef.current, { opacity: 0, scale: 0.92 }, {
        opacity: 1, scale: 1, duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: timelineRef.current, start: "top 78%", toggleActions: "play none none reverse" },
      });
    });

    return () => { ctx.revert(); gsap.ticker.remove(rafTicker); lenis.destroy(); };
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden">
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

      {/* ── HEADER ────────────────────────────────────────────────────────────── */}
      <Header cheeseRef={cheeseRef} logoRef={logoRef} />

      {/* ── HERO — Clean dark gradient, no image ───────────────────────────────── */}
      <section className="relative w-full min-h-[160vh] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Rich dark gradient background */}
          <div className="absolute inset-0 bg-[#080e08]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1a0f] to-[#111a0a]" />
          {/* Radial gold glow — subtle brand touch */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,rgba(253,184,51,0.08)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_75%_30%,rgba(24,59,43,0.6)_0%,transparent_70%)]" />
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"%3E%3C/rect%3E%3C/svg%3E')" }} />
        </div>

        <div
          ref={heroTextRef}
          className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full"
          style={{ paddingTop: "100px", paddingBottom: "200px" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#fdb833]" />
            <p className="font-royal-sans text-[#fdb833] text-xs font-semibold tracking-[0.22em] uppercase">
              Crafting Pureness, Delivering Trust
            </p>
          </div>

          <h1 className="font-royal-cinzel font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-none mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            About{" "}
            <span className="text-[#fdb833]">Fortune</span>
          </h1>

          <p className="font-royal-sans text-white/80 text-base sm:text-lg max-w-md leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Built on a dedication and overriding passion for quality gourmet food.
          </p>
        </div>

        {/* Cheese wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 translate-y-[1px]">
          <img src="/assets/banner-bottom-cheese.svg" alt="" className="w-full h-auto block" />
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#fbe8c3] pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Video player (YouTube embed, no play-button-over-image hack) */}
          <div ref={storyImgRef} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            {/* Video thumbnail with play button — clicking opens modal */}
            <div className="relative aspect-[4/3] cursor-pointer group" onClick={() => setVideoOpen(true)}>
              <Image
                src="/assets/cheese-img.png"
                alt="Watch our story"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#fdb833] flex items-center justify-center shadow-[0_8px_40px_rgba(253,184,51,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-neutral-900 ml-1.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Caption strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-royal-sans text-white text-sm font-medium">▶ Our Story — The Fortune Journey</p>
              </div>
            </div>

          </div>

          {/* Right — text */}
          <div ref={storyTextRef} className="space-y-5">
            <h2 className="font-royal-cinzel font-bold text-3xl sm:text-4xl text-[#163527]">
              Our{" "}
              <span className="font-royal-script text-[#B8710E] font-normal text-5xl">Story</span>
            </h2>
            <div className="space-y-4 font-royal-sans text-[#2C4236] text-[15px] sm:text-base leading-relaxed">
              <p>
                Fortune Gourmet Specialities Pvt. Ltd. is one of the leading importer and distributor
                of gourmet foods in India. Headquartered in Mumbai, we dispatch goods from our 13 multi
                temperature warehouses to Pan India locations.
              </p>
              <p>
                Since we began our journey in 1997, our love of fine foods has driven every aspect of
                the company&apos;s development. From our foundation as one of the country&apos;s only
                specialists in cheese, we have rapidly expanded into Cheese, Raw meat, Salumi – Charcuterie,
                Seafood, Viennoiserie, Poultry and Bakery foods.
              </p>
              <p>
                Our suppliers include enterprises like Aria, Zanetti, Theo Bauwens, Bridor, Beretta,
                Dodoni, etc, who are leaders in their category of gourmet cheeses, charcuterie, and
                processed meats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS — Light cream, not dark ───────────────────────────────────── */}
      <section ref={pillarsRef} className="bg-white py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-16 bg-[#fdb833]/60" />
              <span className="font-royal-sans text-[#fdb833] text-xs font-semibold tracking-[0.22em] uppercase">
                Our Values
              </span>
              <span className="h-px w-16 bg-[#fdb833]/60" />
            </div>
            <h2 className="font-royal-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163527] leading-tight">
              The Pillars of{" "}
              <span className="text-[#fdb833]">Our Success</span>
            </h2>
            <p className="font-royal-sans text-neutral-500 text-sm sm:text-base mt-4">
              Consistent quality. Responsible sourcing. A better tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="pillar-card group border border-[#fdb833]/20 rounded-2xl p-7 bg-[#fffdf5] hover:shadow-[0_8px_30px_rgba(253,184,51,0.15)] hover:border-[#fdb833]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#fdb833]/15 border border-[#fdb833]/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
                <h3 className="font-royal-cinzel font-bold text-[#fdb833] text-lg mb-3">{p.title}</h3>
                <p className="font-royal-sans text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES — Image bg, moderate overlay ────────────────────────────── */}
      <section ref={categoriesRef} className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/3rd-section-img.png" alt="Gourmet Categories" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 py-20 px-6 sm:px-10 text-center">
          <h2 className="font-royal-cinzel font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
            Bringing the World&apos;s{" "}
            <span className="text-[#fdb833]">Finest</span>{" "}
            Gourmet Foods to India
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12 mt-3">
            <span className="h-px w-12 bg-[#fdb833]/60" />
            <span className="text-[#fdb833] text-sm">✦</span>
            <span className="h-px w-12 bg-[#fdb833]/60" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 max-w-4xl mx-auto">
            {CATEGORIES.map((c) => (
              <div key={c.label} className="cat-card flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 border border-white/25 group-hover:border-[#fdb833] group-hover:bg-[#fdb833]/20 transition-all duration-300 flex items-center justify-center text-3xl sm:text-4xl">
                  {c.emoji}
                </div>
                <span className="font-royal-sans text-white/80 group-hover:text-[#fdb833] text-sm font-medium tracking-wide transition-colors duration-300">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────────── */}
      <section ref={timelineRef} className="bg-[#fbe8c3] py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-royal-cinzel font-bold text-2xl sm:text-3xl text-[#163527] mb-2 leading-tight">
                Raising the Bar —
              </h2>
              <p className="font-royal-script text-[#B8710E] font-normal text-4xl sm:text-5xl mb-4 leading-tight">
                Highlights through the Years
              </p>
              <p className="font-royal-sans text-[#3D5247] text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                In 1997, Fortune took the risk of introducing speciality products to India that didn&apos;t
                previously exist here. Since then, we have been pivotal in creating and expanding the gourmet
                food market on the subcontinent.
              </p>

              <div className="relative">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-[#fdb833]/40" />
                <div className="space-y-6 pl-12">
                  {TIMELINE.map((item) => (
                    <div key={item.year} className="timeline-item relative flex gap-4 items-start">
                      <div className="absolute -left-[2.85rem] w-8 h-8 rounded-full bg-[#fdb833] flex items-center justify-center shadow-[0_4px_12px_rgba(253,184,51,0.4)] flex-shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      </div>
                      <div>
                        <span className="font-royal-sans font-bold text-[#fdb833] text-sm tracking-wide block mb-0.5">
                          {item.year}
                        </span>
                        <p className="font-royal-sans text-[#2C4236] text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div ref={timelineImgRef} className="aspect-[4/3] lg:min-h-[420px]">
              <Image src="/assets/cheese-img.png" alt="Gourmet cheese and charcuterie" fill className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND PARTNERS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6 sm:px-10 border-t border-[#fdb833]/15">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-royal-sans text-[#fdb833] text-xs font-semibold tracking-[0.22em] uppercase mb-3">Our Partners</p>
          <h2 className="font-royal-cinzel font-bold text-2xl sm:text-3xl text-[#163527] mb-10">
            Globally Celebrated Brands
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {["Arla", "Zanetti", "Beretta", "Theo Bauwens", "Dodoni", "Président", "Elle & Vire", "Bridor", "Belpomme", "Florentin", "Heston Foods", "Tenuta Marchesini"].map((b) => (
              <div key={b} className="px-5 py-2.5 rounded-full bg-[#fffdf5] border border-[#fdb833]/30 hover:border-[#fdb833] hover:shadow-[0_4px_16px_rgba(253,184,51,0.2)] transition-all duration-200 cursor-pointer">
                <span className="font-royal-sans text-[#163527] text-sm font-medium tracking-wide">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ─────────────────────────────────────────────────────── */}
      <div className="bg-[#163527] py-5 px-6 text-center">
        <p className="font-royal-cinzel font-bold text-[#fdb833] text-base sm:text-lg tracking-widest">
          Quality &nbsp;•&nbsp; Trust &nbsp;•&nbsp; Global Taste
        </p>
      </div>
    </main>
  );
}
