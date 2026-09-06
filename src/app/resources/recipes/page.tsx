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

const RECIPES = [
  {
    title: "Parma Ham Grissini",
    time: "15 Mins",
    difficulty: "Easy",
    image: "https://fortunegourmet.com/wp-content/uploads/2025/04/article_38_Parma_ham_grissini_U52B6921_landscape.jpg",
  },
  {
    title: "Spiedini Gamberi",
    time: "30 Mins",
    difficulty: "Medium",
    image: "https://fortunegourmet.com/wp-content/uploads/2025/04/spiedini-gamberi-575x450-1.jpg",
  },
  {
    title: "Homemade Manicotti",
    time: "45 Mins",
    difficulty: "Medium",
    image: "https://fortunegourmet.com/wp-content/uploads/2025/04/Homemade-Manicotti_EXPS_H13X917_6485_B06_23_5b-390x390-1.jpg",
  },
];

export default function RecipesPage() {
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
            src="https://fortunegourmet.com/wp-content/uploads/2025/04/intro-1674178392-600x337-1.jpg" 
            alt="Recipes Hero" 
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
                Culinary Inspiration
              </p>
            </div>
            
            <h1 className="font-royal-cinzel font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-[1.1] drop-shadow-xl mb-6">
              Chef-Inspired <br/>Recipes
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-lg leading-relaxed">
              Discover exquisite recipes featuring our premium ingredients, crafted by top culinary experts.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#f7f8f6] py-24 md:py-32 px-6 sm:px-10 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECIPES.map((recipe, idx) => (
              <div 
                key={idx}
                ref={(el) => { cardsRef.current[idx] = el; }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-72 overflow-hidden bg-neutral-100">
                  <Image 
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {recipe.time}
                    </span>
                    <span className="bg-[#fdb833] text-neutral-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-royal-cinzel font-bold text-2xl text-neutral-900 mb-6 leading-snug group-hover:text-amber-700 transition-colors">
                    {recipe.title}
                  </h3>
                  
                  <button className="w-full py-4 border border-gray-200 rounded-xl font-royal-sans text-sm font-semibold uppercase tracking-widest text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    View Recipe
                  </button>
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
