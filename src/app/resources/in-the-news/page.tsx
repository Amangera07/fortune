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

const NEWS_ARTICLES = [
  {
    title: "Greek Dairy excels at International Taste Awards",
    date: "March 2025",
    excerpt: "Fortune Gourmet has been featured for our premium selection of Greek Dairy.",
    image: "https://fortunegourmet.com/wp-content/uploads/2025/03/Greek-Dairy-excels-at-InternationalTasteAwards-AmbrosiaMagazine.jpg",
  },
  {
    title: "Upper Crust Feature Article",
    date: "March 2025",
    excerpt: "Read about our latest feature in the Upper Crust magazine showcasing our fine food selection.",
    image: "https://fortunegourmet.com/wp-content/uploads/2025/03/Upper-crust-article-scaled-1.jpg",
  },
  {
    title: "Fortune Gourmet Latest News Updates",
    date: "March 2025",
    excerpt: "Catch up with our latest announcements and partnerships across the industry.",
    image: "https://fortunegourmet.com/wp-content/uploads/2025/03/news-articles_page-0001.jpg",
  },
];

export default function InTheNewsPage() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const rafTicker = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(heroTextRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.2 });

      // Cards Animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        }
      });
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
            src="https://fortunegourmet.com/wp-content/uploads/2025/03/Untitled-design.jpg" 
            alt="News Hero" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex justify-start">
          <div ref={heroTextRef} className="max-w-2xl flex flex-col items-start relative z-10 pt-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#fdb833]" />
              <p className="font-royal-sans text-[#fdb833] text-sm font-semibold tracking-[0.2em] uppercase">
                Media & Press
              </p>
            </div>
            
            <h1 className="font-royal-cinzel font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-[1.1] drop-shadow-xl mb-6">
              In The News
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-lg leading-relaxed">
              Stay up to date with the latest announcements, awards, and insights from Fortune Gourmet.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#f7f8f6] py-24 md:py-32 px-6 sm:px-10 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article, idx) => (
              <div 
                key={idx}
                ref={(el) => { cardsRef.current[idx] = el; }}
                className="bg-white flex flex-col group cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-64 overflow-hidden bg-neutral-100">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="font-royal-sans text-sm text-[#fdb833] font-semibold tracking-wider uppercase mb-3">
                    {article.date}
                  </p>
                  <h3 className="font-royal-cinzel font-bold text-2xl text-neutral-900 mb-4 leading-snug group-hover:text-amber-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-light text-base leading-relaxed mb-8 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 font-royal-sans text-sm font-semibold uppercase tracking-widest text-neutral-900 group-hover:text-amber-700 transition-colors">
                      Read More
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
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
