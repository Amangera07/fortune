"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Header from "@/components/Header";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Banner Bottom Cheese ─────────────────────────────────────────────────────
function BannerBottomCheese() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="2.3 0 801.5 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
    >
      <path
        d="M2.3 35.9383V267H803.801V15.9385C772.301 4.43835 700.801 56.9383 685.801 65.4385C670.801 73.9387 603.801 86.4387 587.301 86.9385C570.801 87.4384 539.801 84.6472 495.301 81.9385C450.801 79.2299 440.301 95.9387 379.801 81.9385C319.301 67.9384 323.301 63.9387 273.301 60.9385C223.301 57.9384 224.801 67.9387 169.301 62.4385C113.801 56.9384 120.801 42.9387 86.8008 35.9383H2.3Z"
        fill="#fbe8c3"
      />
      <path
        d="M86.8008 35.9383C52.8008 28.9379 30.1341 33.605 13.8008 35.9383H2.30078V60.9385C26.3008 58.2719 65.3008 45.9371 86.8008 60.9385C108.301 75.9399 186.301 87.9371 216.801 81.9385C247.301 75.9399 340.801 98.9399 357.301 108.939C373.801 118.937 351.301 159.44 366.801 159.44C382.301 159.44 361.801 112.437 385.301 108.939C408.801 105.44 426.801 150.937 447.801 155.939C468.801 160.94 462.801 129.94 473.301 112.439C483.801 94.9375 505.801 131.439 518.801 110.44C531.801 89.4412 552.801 190.94 568.301 115.439C583.801 39.9375 619.301 155.44 643.801 160.94C668.301 166.44 647.801 221.94 685.801 196.441C723.801 170.942 724.059 204.437 720.301 219.439C716.542 234.44 712.801 252.94 724.801 259.44C755.801 259.44 724.301 205.44 734.801 175.939C745.301 146.437 784.967 144.439 803.801 150.439C803.801 150.439 835.301 27.4387 803.801 15.9385C772.301 4.43835 700.801 56.9383 685.801 65.4385C670.801 73.9387 603.801 86.4387 587.301 86.9385C570.801 87.4384 539.801 84.6472 495.301 81.9385C450.801 79.2299 440.301 95.9387 379.801 81.9385C319.301 67.9384 323.301 63.9387 273.301 60.9385C223.301 57.9384 224.801 67.9387 169.301 62.4385C113.801 56.9384 120.801 42.9387 86.8008 35.9383Z"
        fill="#FFE492"
      />
    </svg>
  );
}

// ─── PageLayout Props ─────────────────────────────────────────────────────────
interface PageLayoutProps {
  /** Small uppercase eyebrow label above the heading */
  eyebrow: string;
  /** Main hero heading (can be JSX for multi-line styling) */
  heading: React.ReactNode;
  /** Optional italic subtitle below heading */
  subtitle?: string;
  /** Hero background image path (from /public) */
  heroBg?: string;
  /** Page content rendered below the hero */
  children: React.ReactNode;
}

export default function PageLayout({
  eyebrow,
  heading,
  subtitle,
  heroBg = "/assets/banner-white-theme.png",
  children,
}: PageLayoutProps) {
  const cheeseRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

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
      const headerStreams = gsap.utils.toArray<SVGPathElement>(".header-melt-stream");
      headerStreams.forEach((stream) => {
        const len = stream.getTotalLength ? stream.getTotalLength() : 400;
        gsap.set(stream, { strokeDasharray: len + 10, strokeDashoffset: len + 10 });
      });

      if (cheeseRef.current) gsap.set(cheeseRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(cheeseRef.current, { opacity: 1, duration: 0.25, ease: "power1.out" })
        .to(".header-melt-stream", {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.out",
          stagger: { amount: 0.35, from: "start" },
        }, "-=0.1");

      gsap.fromTo(
        heroContentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.15 }
      );

      gsap.to(cheeseRef.current, {
        scaleY: 1.015, scaleX: 0.995, y: "+=2",
        duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true,
        delay: 2.2, transformOrigin: "top center",
      });
    });

    return () => { ctx.revert(); gsap.ticker.remove(rafTicker); lenis.destroy(); };
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden">
      {/* Header */}
      <Header cheeseRef={cheeseRef} logoRef={logoRef} />

      {/* Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[480px] flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Page Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-neutral-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/0 via-black/25 to-black/75" />
        </div>

        {/* Hero Text */}
        <div
          ref={heroContentRef}
          className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center gap-4 mt-10 select-none"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#fdb833]/60" />
            <span className="font-royal-sans text-xs font-semibold tracking-[0.22em] uppercase text-[#fdb833]">
              {eyebrow}
            </span>
            <span className="h-px w-10 bg-[#fdb833]/60" />
          </div>

          {/* Main Heading */}
          <div className="font-royal-cinzel font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            {heading}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p className="font-royal-subheading italic text-lg sm:text-xl md:text-2xl text-[#FAF0D7]/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Bottom Cheese Melt */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 translate-y-[1px]">
          <BannerBottomCheese />
        </div>
      </section>

      {/* Page Content — rendered on cream bg matching landing page section 2 */}
      <div className="relative bg-[#fbe8c3] z-20">
        {children}
      </div>
    </main>
  );
}
