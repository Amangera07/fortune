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

const TESTIMONIALS = [
  {
    name: "Chef Marcus",
    role: "Executive Chef, The Grand",
    text: "Fortune Gourmet has been our trusted partner for years. Their selection of artisanal cheeses is unparalleled, and the quality is consistently exceptional.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Culinary Director",
    text: "The charcuterie selection brings authentic European flavors right to our kitchen. Our guests constantly praise the premium quality.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Restaurant Owner",
    text: "From their prompt delivery to the pristine condition of the products upon arrival, Fortune Gourmet sets the standard for premium food distribution.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Head Pastry Chef",
    text: "Their dairy products, especially the premium butter and creams, have elevated our pastry program significantly. Highly recommended.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
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
            src="https://fortunegourmet.com/wp-content/uploads/2025/03/Untitled-design-2.jpg" 
            alt="Testimonials Hero" 
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
                What They Say
              </p>
            </div>
            
            <h1 className="font-royal-cinzel font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-[1.1] drop-shadow-xl mb-6">
              Client <br/>Testimonials
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-lg leading-relaxed">
              Hear from the world's leading chefs and culinary directors who trust Fortune Gourmet for their premium ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#f7f8f6] py-24 md:py-32 px-6 sm:px-10 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div 
                key={idx}
                ref={(el) => { cardsRef.current[idx] = el; }}
                className="bg-white p-10 md:p-14 shadow-xl border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition-shadow duration-500"
              >
                <div>
                  {/* Quote Icon */}
                  <svg className="w-12 h-12 text-[#fdb833]/30 mb-8 transform -translate-x-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-10 italic">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-[#fdb833] font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-royal-cinzel font-bold text-xl text-neutral-900">{testimonial.name}</h4>
                    <p className="font-royal-sans text-sm text-gray-500 uppercase tracking-wider mt-1">{testimonial.role}</p>
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
