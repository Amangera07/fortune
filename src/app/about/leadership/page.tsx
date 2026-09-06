"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    desc: "Integrity guides our path, Passion to pursue our goals, Innovation that helps us maintain market leadership.",
  },
];

const TIMELINE = [
  { year: "2010", text: "Founded with a vision to bring global gourmet foods to India." },
  { year: "2013", text: "Expanded product range to include premium cheese and charcuterie." },
  { year: "2016", text: "Strengthened distribution network with multi temperature warehouses." },
  { year: "2019", text: "Partnered with leading global brands across Europe, Asia and USA." },
  { year: "2022", text: "Expanded nationwide reach, serving customers across India." },
  { year: "2024", text: "Continuing to raise the bar with innovation, quality and trust." },
];

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
        </button>
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/wQmPvU85DCk?autoplay=1&rel=0&modestbranding=1" title="Fortune Gourmet Story" allowFullScreen />
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const cheeseRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const storyImgRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const timelineImgRef = useRef<HTMLDivElement>(null);

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
      gsap.fromTo(heroImgRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.4 });

      gsap.fromTo(storyImgRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.1, ease: "power2.out", scrollTrigger: { trigger: storyImgRef.current, start: "top 78%" } });
      gsap.fromTo(storyTextRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.1, ease: "power2.out", delay: 0.15, scrollTrigger: { trigger: storyTextRef.current, start: "top 78%" } });

      gsap.fromTo(".pillar-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.15, scrollTrigger: { trigger: pillarsRef.current, start: "top 75%" } });
      gsap.fromTo(".timeline-item", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.65, ease: "power2.out", stagger: 0.12, scrollTrigger: { trigger: timelineRef.current, start: "top 78%" } });
      gsap.fromTo(timelineImgRef.current, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: timelineRef.current, start: "top 78%" } });
    });
    return () => { ctx.revert(); gsap.ticker.remove(rafTicker); lenis.destroy(); };
  }, []);

  return (
    <main className="min-h-screen bg-[#fbe8c3] text-neutral-900 font-sans overflow-x-hidden">
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
      <Header cheeseRef={cheeseRef} logoRef={logoRef} />

      {/* ── HERO ───────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[160vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#080e08]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1a0f] to-[#111a0a]" />
          
          {/* Image faded on the right to match screenshot layout without breaking the full-bleed feel */}
          <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full opacity-50 lg:opacity-90">
            <Image src="/assets/banner-img-dark.png" alt="Leadership Background" fill className="object-cover object-right" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080e08] via-[#080e08]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#080e08]/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,rgba(253,184,51,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"%3E%3C/rect%3E%3C/svg%3E')" }} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full" style={{ paddingTop: "100px", paddingBottom: "200px" }}>
          <div ref={heroTextRef} className="max-w-2xl relative z-10">
            <h1 className="font-royal-cinzel font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-[#fdb833] leading-none mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              Leadership
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

        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 translate-y-[1px]">
          <img src="/assets/banner-bottom-cheese.svg" alt="" className="w-full h-auto block" />
        </div>
      </section>

      {/* ── STORY (Jehangir Lawyer) ────────────────────────────────────────────── */}
      <section className="bg-[#fbe8c3] pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div ref={storyImgRef} className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="relative aspect-[4/3] cursor-pointer group" onClick={() => setVideoOpen(true)}>
              <Image src="/assets/cheese-img.png" alt="Jehangir Lawyer" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#fdb833] flex items-center justify-center shadow-[0_8px_40px_rgba(253,184,51,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-neutral-900 ml-1.5"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden">
              <img src="/assets/section2-bottom-cheeseMelt.svg" alt="" className="w-full h-auto block opacity-80" />
            </div>
          </div>
          <div ref={storyTextRef} className="space-y-6">
            <h2 className="font-royal-cinzel font-bold text-3xl sm:text-4xl text-[#163527]">
              Our <span className="font-royal-script text-[#B8710E] font-normal text-5xl">Story</span>
            </h2>
            <div className="space-y-4 font-royal-sans text-[#2C4236] text-[15px] sm:text-base leading-relaxed">
              <p>Jehangir Lawyer is a passionate Turophile, Anthropologist, Businessman, Storyteller and Humanitarian all rolled into one.</p>
              <p>His journey to become the proud founder of Fortune Gourmet Specialities Pvt Ltd is an interesting one. He has single handedly managed to convert his passion for Gourmet Foods into a successful business model, and brought about a revolution to the F&B industry in India.</p>
              <p>The man who believes in rolling up his sleeves and getting into the details of everything even today, is a Director on the Board of the Italian Chamber of Commerce & Industry representing F&B across all verticals.</p>
              <p className="italic text-[#B8710E] font-medium pt-2">
                &quot;Meanwhile attention to cheese in India grew with the help of importer and passionate Turophile Jehangir Lawyer, who single-handedly advocated for artisanal and rare cheese varieties...&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES (Dark with Gold border) ─────────────────────────────────────── */}
      <section ref={pillarsRef} className="bg-[#fbe8c3] pb-24 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto rounded-3xl border border-[#fdb833]/40 bg-gradient-to-br from-[#0a0a0a] to-[#162719] p-8 sm:p-14 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#fdb833]/20">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`pillar-card flex flex-col items-center text-center ${i !== 0 ? 'pt-8 md:pt-0 md:pl-12' : ''}`}>
                <div className="w-16 h-16 rounded-full bg-[#fdb833]/15 border border-[#fdb833]/40 flex items-center justify-center text-2xl mb-6 shadow-[0_0_20px_rgba(253,184,51,0.15)]">
                  {p.icon}
                </div>
                <h3 className="font-royal-cinzel font-bold text-[#fdb833] text-xl mb-4">{p.title}</h3>
                <p className="font-royal-sans text-white/70 text-sm leading-relaxed max-w-[260px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────────────────────────────────── */}
      <section ref={timelineRef} className="bg-[#fbe8c3] pb-24 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-royal-cinzel font-bold text-2xl sm:text-3xl text-[#163527] mb-2 leading-tight">
                Raising the Bar –
              </h2>
              <p className="font-royal-script text-[#B8710E] font-normal text-4xl sm:text-5xl mb-6 leading-tight">
                Highlights through the Years
              </p>
              <p className="font-royal-sans text-[#3D5247] text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                Fortune Gourmet has been on a remarkable journey since its inception, transforming the Indian gourmet food landscape with premium quality and global standards.
              </p>

              <div className="relative">
                <div className="absolute left-[26px] top-2 bottom-2 w-px bg-[#fdb833]/50" />
                <div className="space-y-6">
                  {TIMELINE.map((item) => (
                    <div key={item.year} className="timeline-item relative flex gap-6 items-center">
                      <div className="w-14 h-8 rounded-full bg-[#fdb833] flex items-center justify-center shadow-[0_4px_12px_rgba(253,184,51,0.4)] flex-shrink-0 z-10">
                        <span className="font-royal-sans font-bold text-neutral-900 text-sm">{item.year}</span>
                      </div>
                      <p className="font-royal-sans text-[#2C4236] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div ref={timelineImgRef} className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] aspect-[4/3] lg:aspect-square">
              <Image src="/assets/3rd-section-img.png" alt="Global Reach" fill className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
