"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const cheeseRef = useRef<HTMLDivElement>(null);
  const cheeseImgRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const showcaseSectionRef = useRef<HTMLElement>(null);
  const cheeseMeltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Master Timeline for Header & Hero Entrance (Runs immediately on load without delays)
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Initial state for header cheese melt
      gsap.set(cheeseRef.current, {
        yPercent: -100,
        scaleY: 0.5,
        transformOrigin: "top center",
        opacity: 0.9,
      });

      // Quick, fluid cheese dropdown synchronized with load
      tl.to(cheeseRef.current, {
        yPercent: 0,
        scaleY: 1.05,
        opacity: 1,
        duration: 0.85,
        ease: "power2.out",
      })
      .to(cheeseRef.current, {
        scaleY: 0.98,
        duration: 0.2,
        ease: "power1.inOut",
      })
      .to(cheeseRef.current, {
        scaleY: 1,
        duration: 0.35,
        ease: "elastic.out(1.2, 0.4)",
      });

      // Hero content smooth immediate reveal (t=0.05s)
      gsap.fromTo(
        heroContentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.05,
        }
      );

      // Idle continuous header wobble (starts after initial entrance)
      gsap.to(cheeseImgRef.current, {
        scaleY: 1.02,
        scaleX: 0.995,
        y: "+=3",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
        transformOrigin: "top center",
      });

      // 2. Showcase Section Authentic DrawSVG Progressive Flow Animation (ScrollTriggered only)
      const leftStream = ".draw-stream-left";
      const rightStream = ".draw-stream-right";
      const stroke1 = ".draw-stroke-1";
      const stroke2 = ".draw-stroke-2";

      // Set initial DrawSVG path dash states (hidden / offset at 100%)
      gsap.set([leftStream, rightStream], {
        strokeDasharray: 450,
        strokeDashoffset: 450,
      });
      gsap.set([stroke1, stroke2], {
        strokeDasharray: 300,
        strokeDashoffset: 300,
      });
      gsap.set(cheeseMeltRef.current, {
        opacity: 0,
        scaleY: 0.94,
        scaleX: 0.96,
        transformOrigin: "32% 0%",
      });

      const meltTl = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      meltTl
        // 1. Initial fade in at the nozzle tip
        .to(cheeseMeltRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        // 2. DrawSVG progressive pouring: smooth flow from top to bottom
        .to(
          [leftStream, rightStream],
          {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: "power2.inOut",
            stagger: 0.1,
          },
          "-=0.1"
        )
        // 3. Highlight and edge strokes draw in sync with the liquid flow
        .to(
          [stroke1, stroke2],
          {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.out",
          },
          "-=2.0"
        )
        // 4. Subtle elastic settling of the full molten mass
        .to(
          cheeseMeltRef.current,
          {
            scaleY: 1,
            scaleX: 1,
            duration: 0.8,
            ease: "elastic.out(1.15, 0.45)",
          },
          "-=0.4"
        );

      // Continuous subtle organic molten breathing
      gsap.to(cheeseMeltRef.current, {
        scaleY: 1.02,
        scaleX: 0.995,
        y: "+=2",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 3.5,
        transformOrigin: "32% 0%",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden">
      {/* Animated Header Section */}
      <header className="absolute top-0 left-0 w-full z-50">
        {/* The Cheese Element coming from the top, sticking to the header with melting animation */}
        <div
          ref={cheeseRef}
          className="absolute top-0 left-0 w-full pointer-events-none -z-10 origin-top will-change-transform"
        >
          <img
            ref={cheeseImgRef}
            src="/assets/header-cheese.svg"
            alt="Header Cheese"
            className="w-full h-auto transform -translate-y-[15%] origin-top will-change-transform"
          />
        </div>

        {/* Header Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            {/* Dummy Logo */}
            <div ref={logoRef} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <span className="font-extrabold text-lg text-yellow-400">FG</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-black transition-colors duration-300">
                Fortune
              </span>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-7">
              {[
                { name: 'Home', hasDropdown: false },
                { name: 'About', hasDropdown: true },
                { name: 'Product', hasDropdown: true },
                { name: 'Shop', hasDropdown: true },
                { name: 'Community', hasDropdown: true },
                { name: 'Resources', hasDropdown: true },
                { name: 'Career', hasDropdown: false },
                { name: 'Contact', hasDropdown: false },
              ].map((item) => (
                <div key={item.name} className="nav-item-animate relative group/item flex items-center gap-1 cursor-pointer">
                  <a
                    href="#"
                    className="text-[15px] font-semibold text-black/90 hover:text-black transition-colors tracking-tight flex items-center gap-1"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-black transition-transform duration-200 group-hover/item:rotate-180"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover/item:w-full"></span>
                </div>
              ))}

              {/* Search Bar / Icon */}
              <div className="nav-item-animate flex items-center ml-2">
                <button
                  aria-label="Search"
                  className="p-2 text-black hover:bg-black/10 rounded-full transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-black hover:opacity-75 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="relative w-full h-[128vh] min-h-[980px] lg:min-h-[1150px] flex items-center justify-center">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/banner-img.png" 
            alt="Delicious Gourmet Banner" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-neutral-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/0 via-black/20 to-black/80"></div>
        </div>

        {/* Royal Hero Heading & Text */}
        <div ref={heroContentRef} className="relative z-20 text-center max-w-6xl px-4 flex flex-col items-center justify-center -mt-16 md:-mt-20 select-none">
          {/* Subtle Royal Accent Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-yellow-500/20 mb-3 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="font-royal-sans text-xs tracking-[0.25em] uppercase text-yellow-300/90 font-medium">
              Finest Artisanal Heritage
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
          </div>

          {/* Line 1: India's Leading */}
          <h1 className="font-royal-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.06em] text-[#FAF6ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            India&apos;s Leading
          </h1>

          {/* Line 2: Gourmet Food Purveyors */}
          <h2 className="font-royal-script text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-[#FDB833] drop-shadow-[0_4px_22px_rgba(245,175,25,0.4)] tracking-wide leading-tight py-1 my-0.5 whitespace-nowrap">
            Gourmet Food Purveyors
          </h2>

          {/* Subtitle Line with Flourish: For the Gourmand in all of us */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-yellow-500/60"></span>
            <p className="font-royal-subheading text-base sm:text-xl md:text-2xl italic font-medium tracking-wide text-[#F5E6C4] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              For the Gourmand in all of us
            </p>
            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-yellow-500/60"></span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Bottom Banner Cheese Element attached flush to the bottom edge */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 translate-y-[1px]">
          <img 
            src="/assets/banner-bottom-cheese.svg" 
            alt="Banner Bottom Cheese" 
            className="w-full h-auto block" 
          />
        </div>
      </section>
      
      {/* Gourmet Products Showcase Section */}
      <section ref={showcaseSectionRef} className="min-h-screen w-full bg-[#FFF6E5] text-neutral-900 relative z-20 pt-2 sm:pt-4 md:pt-6 pb-24 overflow-visible">
        {/* Decorative Cheese Image Container on the Right */}
        <div className="absolute -top-12 sm:-top-16 md:-top-24 lg:-top-28 xl:-top-32 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 w-64 sm:w-80 md:w-[440px] lg:w-[560px] xl:w-[640px] z-20 pointer-events-none select-none">
          {/* Main Cheese Image */}
          <img
            src="/assets/cheese-img.png"
            alt="Artisanal Cheese Selection"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(180,120,40,0.25)] relative z-10"
          />

          {/* Flowing Melting Cheese with authentic DrawSVG path-drawing animation */}
          <div
            ref={cheeseMeltRef}
            className="absolute -top-[42%] left-[14.5%] w-[48%] h-auto z-30 pointer-events-none origin-top will-change-transform drop-shadow-[0_8px_16px_rgba(190,120,20,0.3)]"
          >
            <svg
              viewBox="0 0 232 346"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
            >
              <defs>
                <mask id="drawMeltMask" maskUnits="userSpaceOnUse" x="-50" y="-50" width="350" height="450">
                  {/* Left Stream Draw Path */}
                  <path
                    className="draw-stream-left"
                    d="M 78 -10 L 80 80 Q 75 160 62 230 Q 45 285 20 338"
                    stroke="white"
                    strokeWidth="110"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Right Stream Draw Path */}
                  <path
                    className="draw-stream-right"
                    d="M 78 -10 L 95 90 Q 130 160 185 240 L 204 315"
                    stroke="white"
                    strokeWidth="110"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </mask>

                <filter id="mf0" x="-0.000391006" y="220.554" width="75.2" height="125.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="9.3" result="effect1_foregroundBlur_215_13"/>
                </filter>
                <filter id="mf1" x="31.3996" y="18.9543" width="190.4" height="263.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="16.1" result="effect1_foregroundBlur_215_13"/>
                </filter>
                <filter id="mf2" x="19.1246" y="148.393" width="120.927" height="115.301" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="2.3" result="effect1_foregroundBlur_215_13"/>
                </filter>
                <filter id="mf3" x="7.39961" y="206.954" width="56.4" height="64.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="8.6" result="effect1_foregroundBlur_215_13"/>
                </filter>
                <filter id="mf4" x="175.4" y="198.954" width="56.4" height="106.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="8.6" result="effect1_foregroundBlur_215_13"/>
                </filter>
                <filter id="mf5" x="56.9051" y="28.3538" width="114.495" height="156.433" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="5.15" result="effect1_foregroundBlur_215_13"/>
                </filter>
              </defs>

              <g mask="url(#drawMeltMask)">
                <path d="M73.5996 30.1543C48.1022 -81.8457 168.1 151.651 190.1 186.651C212.1 221.651 214.577 234.151 214.577 234.151C221.1 243.151 228.099 314.151 202.599 304.651C196.099 298.151 193.599 298.651 164.335 212.651C151.555 185.246 137.933 153.651 119.099 153.651C98.9996 152.914 86.3806 170.062 76.9033 191.151C76.2276 192.655 75.5679 194.178 74.9226 195.717C69.0851 211.862 69.0964 239.653 66.0992 264.151C62.796 291.151 41.5992 342.151 17.0993 330.151C-7.40064 318.151 17.0993 272.651 21.9215 252.151C5.52003 211.263 99.097 142.154 73.5996 30.1543Z" fill="#FFE491"/>
                <g filter="url(#mf0)">
                  <path d="M20.1787 325.328C15.0066 319.53 23.7704 289.946 28.7988 275.878C38.856 261.953 58.4674 235.211 56.456 239.644C53.9418 245.186 47.1175 290.372 44.6032 303.587C42.089 316.802 26.6438 332.574 20.1787 325.328Z" fill="#FFB147"/>
                </g>
                <g filter="url(#mf1)">
                  <path d="M71.5251 176.294C93.2953 142.421 92.5881 78.754 89.5132 51.1543L132.406 104.315L189.6 250.154C176.378 218.477 144.308 153.054 121.8 144.774C101.586 137.338 70.4212 178.71 64.5656 186.896C63.3344 188.617 63.2221 188.871 64.5656 186.896C65.7263 185.19 67.9737 181.819 71.5251 176.294Z" fill="#FDB753"/>
                </g>
                <g filter="url(#mf2)">
                  <path className="draw-stroke-1" d="M24.0996 253.654C32.4329 263.154 53.7996 265.454 72.5996 198.654C96.1996 142.654 124.1 150.321 135.1 161.154" stroke="#FF9400"/>
                </g>
                <g opacity="0.63" filter="url(#mf3)">
                  <ellipse cx="35.5996" cy="239.154" rx="11" ry="15" fill="white"/>
                </g>
                <g opacity="0.63" filter="url(#mf4)">
                  <ellipse cx="203.6" cy="252.154" rx="11" ry="36" fill="white"/>
                </g>
                <g filter="url(#mf5)">
                  <path className="draw-stroke-2" d="M81.1296 39.8859C84.3033 75.9903 86.0404 153.39 67.5996 174.154C113.702 115.256 167.822 174.653 159.804 165.17C151.786 155.686 108.189 28.4057 81.1296 39.8859Z" stroke="#FF9400"/>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Content Container on the Left */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 -mt-24 sm:-mt-32 md:-mt-44 lg:-mt-56 xl:-mt-64">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-[680px] space-y-5 sm:space-y-6">
            {/* Elegant Accent Line */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#183B2B]/8 border border-[#183B2B]/15 text-[#183B2B] text-xs font-semibold tracking-wider uppercase font-royal-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#183B2B]"></span>
              Premium Selection
            </div>

            {/* Main H2 Heading broken into two styled lines */}
            <h2 className="flex flex-col gap-1">
              <span className="font-royal-cinzel font-bold text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#163527] tracking-[0.03em] leading-tight">
                Masterfully Curated
              </span>
              <span className="font-royal-script text-3xl sm:text-4xl md:text-[46px] lg:text-[54px] text-[#B8710E] font-normal tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(184,113,14,0.15)]">
                Range of Gourmet Products
              </span>
            </h2>

            {/* Paragraphs with Refined Typography */}
            <div className="space-y-3.5 sm:space-y-4 text-[#2C4236] font-royal-sans">
              <p className="text-base sm:text-[16.5px] md:text-[17.5px] leading-[1.65] font-medium text-[#1E3A2B]">
                Elevate your dishes, at home, restaurant, cafe or your side hustle, with quality ingredients from globally loved brands.
              </p>

              <p className="text-base sm:text-[16px] md:text-[17px] leading-[1.65] text-[#2C4236]">
                We have a wide array of Cheeses, Raw Meats, Salumi &ndash; Charcuterie , Seafood , Viennoiserie, Bakery and Poultry.
              </p>

              <p className="text-[14px] sm:text-[14.5px] md:text-[15.5px] leading-[1.7] text-[#3D5247] pt-0.5">
                Procuring our products from diverse international Sources, we source high-quality goods from regions spanning Europe, Asia, Australia, and the Americas. Explore our distinguished selection featuring renowned brands like Arla, Zanetti, Beretta, Theo Bauwens, Dodoni, and many others. Each brand within our offering is carefully curated, embodying a commitment to exceptional quality and taste. Elevate your culinary experience with our premium range of products, sourced from globally acclaimed names in the gourmet industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
