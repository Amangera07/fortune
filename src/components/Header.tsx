"use client";

import React, { useState } from "react";

// ─── HeaderCheese SVG ────────────────────────────────────────────────────────
// The animated melting cheese block that sticks to the top of the header.
// DrawSVG animation streams are controlled by GSAP in the parent page via
// the .header-melt-stream className selector.

function HeaderCheese() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="49.5 41.8 759.4 348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block transform -translate-y-[15%] origin-top will-change-transform"
    >
      <defs>
        <mask id="header_drawMeltMask" maskUnits="userSpaceOnUse" x="30" y="-20" width="800" height="440">
          {/* Fluid DrawSVG stream paths starting from the ceiling down */}
          <path className="header-melt-stream" d="M 80 -10 L 80 140 Q 80 180 80 220" stroke="white" strokeWidth="180" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 149 -10 L 149 170 Q 149 230 149 285" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 215 -10 L 215 150 Q 215 190 215 230" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 327 -10 L 327 130 Q 327 160 327 195" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 448 -10 L 448 130 Q 448 165 448 205" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 551 -10 L 551 130 Q 551 170 551 215" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 625 -10 L 625 140 Q 625 170 625 200" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 695 -10 L 695 170 Q 695 230 695 285" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 740 -10 L 740 200 Q 740 300 740 395" stroke="white" strokeWidth="180" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="header-melt-stream" d="M 795 -10 L 795 130 Q 795 160 795 200" stroke="white" strokeWidth="170" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </mask>
        <filter id="hdr_f1" x="38.1063" y="46.4822" width="282.936" height="204.507" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="31.9" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f2" x="196.259" y="23.7034" width="121.959" height="79.3476" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="15.4" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f3" x="342.72" y="120.048" width="121.959" height="79.3476" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="15.4" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f4" x="573.501" y="127.654" width="93.9984" height="81.038" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="15.4" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f5" x="695.11" y="193.997" width="83.1586" height="154.987" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="15.4" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f6" x="421.563" y="-0.00019455" width="282.936" height="204.507" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="31.9" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f10" x="253.217" y="142.174" width="78.1711" height="39.322" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="6.45" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f11" x="488.678" y="121.022" width="40.1242" height="89.822" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="6.45" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f12" x="137.467" y="225.869" width="30.007" height="55.4743" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="6.45" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f13" x="47.6773" y="140.996" width="174.141" height="77.1731" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="13.8" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f14" x="723.834" y="320.08" width="21.0148" height="20.716" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="3.7" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f15" x="711.635" y="36.9267" width="111.3" height="201.3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="13.45" result="effect1_foregroundBlur_201_28"/>
        </filter>
        <filter id="hdr_f16" x="255.732" y="107.204" width="81.1297" height="58.554" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="8.3" result="effect1_foregroundBlur_201_28"/>
        </filter>
      </defs>

      <g mask="url(#header_drawMeltMask)">
        <path d="M137.41 218.445C130.309 198.994 118.326 226.051 99.2424 206.191C80.1584 186.33 49.5352 206.191 49.5352 206.191V41.8267H808.902C810.233 97.8868 823.104 194.795 790.706 187.611C758.307 180.428 765.852 173.244 755.2 187.611C744.549 201.978 802.869 389.015 739.535 383.327C676.201 377.638 749.875 199.02 715.257 194.795C683.302 200.711 716.589 273.392 695.729 276.772C674.87 280.153 692.622 181.695 676.201 183.386C659.78 185.076 664.218 187.611 659.336 176.625C654.454 165.638 648.685 194.795 624.719 191.837C600.753 188.879 621.612 204.514 599.421 210.007C577.231 215.5 570.13 162.68 551.933 166.483C533.737 170.286 539.506 207.472 512.434 201.978C485.361 196.485 503.557 143.665 482.254 147.89C460.951 152.116 480.923 198.175 464.058 199.02C447.193 199.866 461.839 172.399 448.968 171.131C442.932 172.145 444.53 180.85 431.216 176.625C417.901 172.399 406.362 199.02 390.829 199.02C381.065 199.02 383.284 182.118 372.632 180.85C361.981 179.583 360.205 185.895 349.998 183.373C339.79 180.85 343.784 159.724 327.363 159.724C315.38 165.64 312.273 181.697 292.302 184.655C259.903 185.923 248.364 178.316 233.718 183.373C212.415 194.782 230.611 220.135 215.078 220.135C202.207 220.135 211.084 197.726 200.432 194.782C189.781 191.837 194.663 212.542 182.68 207.881C170.697 203.22 152.056 189.275 160.933 226.051C169.809 262.828 170.035 272.327 149.035 272.327C128.035 272.327 144.511 237.896 137.41 218.445Z" fill="#FBD169"/>
        <g filter="url(#hdr_f1)">
          <path d="M101.906 158.032L257.241 110.282L205.315 144.932L157.383 187.189L101.906 172.399V158.032Z" fill="#EFA43D"/>
        </g>
        <g filter="url(#hdr_f2)">
          <path d="M227.059 65.5226L287.417 54.5034L267.24 62.4996L248.615 72.2511L227.059 68.8381V65.5226Z" fill="#FF9400"/>
        </g>
        <g filter="url(#hdr_f3)">
          <path d="M373.52 161.867L433.878 150.848L413.701 158.844L395.076 168.596L373.52 165.183V161.867Z" fill="#FF9400"/>
        </g>
        <g filter="url(#hdr_f4)">
          <path d="M604.301 171.164L630.486 158.454L636.699 177.892H625.857L604.301 174.479V171.164Z" fill="#FF9400"/>
        </g>
        <g filter="url(#hdr_f5)">
          <path d="M725.91 286.946L737.893 224.797L744.994 318.184L747.467 293.675L725.91 290.262V286.946Z" fill="#FF9400"/>
        </g>
        <g filter="url(#hdr_f6)">
          <path d="M485.363 111.55L640.698 63.7998L588.772 98.45L540.84 140.706L485.363 125.917V111.55Z" fill="#FF9E19"/>
        </g>
        <g filter="url(#hdr_f10)">
          <path d="M266.33 165.302L318.487 155.074C310.471 159.179 291.366 167.598 279.08 168.433C266.794 169.268 265.461 166.693 266.33 165.302Z" fill="white"/>
        </g>
        <g filter="url(#hdr_f11)">
          <path d="M510.705 134.056L515.903 197.944C513.26 189.65 493.907 162.023 504.962 145.337C509.397 138.642 509.444 132.969 510.705 134.056Z" fill="white"/>
        </g>
        <g filter="url(#hdr_f12)">
          <path d="M154.573 249.846L151.328 268.443C151.441 264.764 148.825 273.714 151.778 254.819C152.32 251.352 153.923 223.823 154.573 249.846Z" fill="white"/>
        </g>
        <g filter="url(#hdr_f13)">
          <path d="M75.2773 181.701C91.8894 190.694 138.935 200.664 194.22 168.596C144.516 182.369 94.2151 183.071 75.2773 181.701Z" fill="white"/>
        </g>
        <g filter="url(#hdr_f14)">
          <ellipse cx="734.341" cy="330.438" rx="3.1067" ry="2.95795" fill="white"/>
        </g>
        <g filter="url(#hdr_f15)">
          <path d="M752.035 173.827L738.535 211.327L746.035 96.3267L796.035 63.8267V173.827L781.081 167.827L752.035 173.827Z" fill="#EEA23C"/>
        </g>
        <g filter="url(#hdr_f16)">
          <ellipse cx="296.298" cy="136.481" rx="23.966" ry="12.6769" fill="#FFD062"/>
        </g>
      </g>
    </svg>
  );
}

// ─── Nav Items with Dropdown Data ───────────────────────────────────────────
type DropdownItem = {
  label: string;
  hasArrow?: boolean;
  href?: string;
};

type NavItem = {
  name: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
};

const NAV_ITEMS: NavItem[] = [
  { name: "Home", hasDropdown: false },
  {
    name: "About",
    hasDropdown: true,
    dropdownItems: [
      { label: "Leadership", href: "/about/leadership" },
      { label: "About Fortune", href: "/about/fortune" },
    ],
  },
  {
    name: "Product",
    hasDropdown: true,
    dropdownItems: [
      { label: "BAKERY", href: "#", hasArrow: true },
      { label: "CONFECTIONERY", href: "#", hasArrow: true },
      { label: "DAIRY", href: "#", hasArrow: true },
      { label: "MEATS", href: "#", hasArrow: true },
      { label: "POULTRY", href: "#", hasArrow: true },
    ],
  },
  {
    name: "Shop",
    hasDropdown: true,
    dropdownItems: [
      { label: "Dairy", href: "#" },
      { label: "Salumi Charcuterie", href: "#" },
      { label: "Poultry", href: "#" },
      { label: "Special Offers", href: "#" },
    ],
  },
  {
    name: "Community",
    hasDropdown: true,
    dropdownItems: [
      { label: "Clients", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    name: "Resources",
    hasDropdown: true,
    dropdownItems: [
      { label: "Testimonials", href: "#" },
      { label: "In The News", href: "#" },
      { label: "Recipes", href: "#" },
    ],
  },
  { name: "Career", hasDropdown: false },
  { name: "Contact", hasDropdown: false },
];

// ─── Header Component ─────────────────────────────────────────────────────────
// cheeseRef  — forwarded so page.tsx GSAP can animate the cheese wrapper div
// logoRef    — forwarded for future GSAP entrance animations

interface HeaderProps {
  cheeseRef: React.RefObject<HTMLDivElement | null>;
  logoRef: React.RefObject<HTMLDivElement | null>;
}

export default function Header({ cheeseRef, logoRef }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* The Cheese Element coming from the top, sticking to the header with melting animation */}
      <div
        ref={cheeseRef}
        className="absolute top-0 left-0 w-full pointer-events-none -z-10 origin-top will-change-transform"
      >
        <HeaderCheese />
      </div>

      {/* Header Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-lg text-yellow-400">FG</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-black transition-colors duration-300">
              Fortune
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="nav-item-animate relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Nav Link */}
                <a
                  href="#"
                  className="flex items-center gap-1 text-[15px] font-semibold text-black/90 hover:text-black transition-colors tracking-tight select-none cursor-pointer"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-4 h-4 text-black transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>

                {/* Hover underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                    activeDropdown === item.name ? "w-full" : "w-0"
                  }`}
                />

                {/* Dropdown Panel */}
                {item.hasDropdown && item.dropdownItems && (
                  <div
                    className={`absolute top-full left-0 mt-3 min-w-[200px] bg-white rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                      activeDropdown === item.name
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-95 pointer-events-none"
                    }`}
                    style={{ transformOrigin: "top center" }}
                  >
                    {item.dropdownItems.map((dItem, idx) => (
                      <a
                        key={dItem.label}
                        href={dItem.href ?? "#"}
                        className={`flex items-center justify-between px-5 py-3 text-[14px] font-medium text-[#fdb833] hover:bg-[#fff8e6] hover:text-[#d99a00] transition-colors duration-150 ${
                          idx !== 0 ? "border-t border-gray-100" : ""
                        }`}
                      >
                        <span>{dItem.label}</span>
                        {dItem.hasArrow && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-[#fdb833]"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search Icon */}
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
          <button className="lg:hidden text-black hover:opacity-75 transition-opacity" aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
