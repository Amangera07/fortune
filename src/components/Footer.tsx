"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="relative w-full bg-[#FCEBCB] text-[#121815] overflow-visible z-10">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-12 relative z-30">
        {/* Top Section: Newsletter Subscription Banner */}
        <div className="pb-10 sm:pb-12 border-b border-[#E3C695]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left: Newsletter Headline */}
            <div className="lg:col-span-7 space-y-1 sm:space-y-1.5">
              <span className="font-royal-sans text-xs sm:text-sm font-semibold tracking-wider text-[#7A5B1D] block">
                Subscribe Now
              </span>
              <h3 className="font-royal-serif text-lg sm:text-xl md:text-2xl font-bold text-[#1F1C16] leading-snug">
                Keep yourself updated with our latest products, discounts and offers
              </h3>
            </div>

            {/* Right: Newsletter Input Box */}
            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-md lg:ml-auto">
                <div className="relative flex-1 flex items-center bg-[#F3DEB8] border border-[#D9B97F] rounded-l-lg overflow-hidden focus-within:border-[#009E73] focus-within:ring-1 focus-within:ring-[#009E73] transition-all">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="subscribe our newsletter"
                    className="w-full bg-transparent px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1F1C16] placeholder-[#8A795D] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#142B23] hover:bg-[#008A64] text-white font-royal-sans font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-r-lg shadow-sm hover:shadow transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {subscribed ? "Subscribed!" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: 3-Column Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start pt-10 sm:pt-12">
          {/* Left Column: Company Info & Contact */}
          <div className="md:col-span-4 lg:col-span-5 space-y-4">
            <h3 className="font-royal-serif text-xl sm:text-2xl font-bold text-[#00875A] tracking-wide leading-snug">
              Fortune Gourmet Specialities Pvt Ltd
            </h3>

            <div className="space-y-2.5 font-royal-sans text-xs sm:text-sm text-[#4A453A] leading-relaxed max-w-sm">
              <p>
                107, Adhyaru Industrial Estate Sun Mill Compound, Lower Parel, Mumbai – 400 013
              </p>

              <p>
                <span className="font-medium text-[#1F1C16]">Email:</span>{" "}
                <a
                  href="mailto:customercare@fortunegourmet.com"
                  className="text-[#4A453A] hover:text-[#00875A] transition-colors"
                >
                  customercare@fortunegourmet.com
                </a>
              </p>

              <p>
                <span className="font-medium text-[#1F1C16]">Contact No :</span>{" "}
                <a
                  href="tel:02243664444"
                  className="text-[#4A453A] hover:text-[#00875A] transition-colors"
                >
                  022-43664444
                </a>
              </p>
            </div>

            {/* WhatsApp Floating Contact Widget */}
            <div className="pt-2">
              <a
                href="https://wa.me/9102243664444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.35)] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <span className="bg-white text-[#1F1C16] font-royal-sans font-semibold text-xs sm:text-[13px] px-3.5 py-1.5 rounded-full shadow-sm border border-[#E3C695] group-hover:bg-[#F9F9F9] transition-colors">
                  Contact us
                </span>
              </a>
            </div>
          </div>

          {/* Center Column: Official Certifications & Social Media */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center justify-center space-y-6">
            {/* White Certifications Card */}
            <div className="bg-white rounded-xl px-4 sm:px-6 py-3.5 shadow-[0_8px_25px_rgba(180,120,30,0.12)] flex items-center justify-center gap-4 sm:gap-6 border border-[#ECCFA0]">
              {/* 1. IRQS (ISO 22000:2005) */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="28" cy="28" r="22" stroke="#007799" strokeWidth="5" fill="none" />
                    <circle cx="28" cy="18" r="3" fill="#007799" />
                    <path d="M28 24v12M24 30h8" stroke="#007799" strokeWidth="3" strokeLinecap="round" />
                    <path d="M38 38l12 12" stroke="#007799" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[8px] font-bold text-[#111111] leading-tight mt-0.5">
                  ISO 22000 2005
                </span>
                <span className="text-[7px] text-[#444444] leading-tight">
                  Certified by IRQS
                </span>
              </div>

              {/* 2. RvA Management Systems */}
              <div className="flex flex-col items-center text-center pl-2 border-l border-gray-200">
                <div className="w-14 h-12 relative flex items-center justify-center">
                  <svg viewBox="0 0 70 50" className="w-full h-full">
                    <path d="M10 35 Q 25 5, 45 35" fill="none" stroke="#F5A623" strokeWidth="3.5" />
                    <path d="M15 35 Q 30 15, 50 35" fill="none" stroke="#F5A623" strokeWidth="3" />
                    <text x="12" y="32" fill="#004C87" fontSize="20" fontWeight="900" fontFamily="sans-serif">
                      RvA
                    </text>
                  </svg>
                </div>
                <span className="text-[8px] font-bold text-[#111111] leading-tight">
                  MGMT. SYS
                </span>
                <span className="text-[7.5px] font-bold text-[#004C87] leading-tight">
                  RvA C 071
                </span>
              </div>

              {/* 3. HACCP CERTIFIED Gold Seal Medallion */}
              <div className="flex flex-col items-center text-center pl-2 border-l border-gray-200">
                <div className="w-14 h-14 relative flex items-center justify-center">
                  {/* Gold Rosette Star & Seal */}
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                    {/* Red Ribbon Tails */}
                    <path d="M35 75 L28 95 L42 88 L50 95 L48 78 Z" fill="#D32F2F" />
                    <path d="M65 75 L72 95 L58 88 L50 95 L52 78 Z" fill="#C2185B" />
                    {/* Golden Scalloped Medallion */}
                    <circle cx="50" cy="46" r="34" fill="url(#goldGrad)" stroke="#B8860B" strokeWidth="2" />
                    <circle cx="50" cy="46" r="28" fill="none" stroke="#8B6914" strokeWidth="1" strokeDasharray="3 2" />
                    <text x="50" y="44" fill="#5A3A00" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                      HACCP
                    </text>
                    <text x="50" y="55" fill="#5A3A00" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.5">
                      CERTIFIED
                    </text>
                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF1B0" />
                        <stop offset="50%" stopColor="#E5B54F" />
                        <stop offset="100%" stopColor="#C99426" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Media Circular Icons */}
            <div className="flex items-center gap-3.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1F1C16] text-white flex items-center justify-center hover:bg-[#00875A] hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1F1C16] text-white flex items-center justify-center hover:bg-[#00875A] hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#1F1C16] text-white flex items-center justify-center hover:bg-[#00875A] hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4 md:text-right">
            <h3 className="font-royal-serif text-xl sm:text-2xl font-bold text-[#1F1C16] tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-2.5 font-royal-sans text-xs sm:text-sm text-[#4A453A]">
              <li>
                <Link
                  href="/recipes"
                  className="hover:text-[#00875A] transition-colors inline-block"
                >
                  Recipes and Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#00875A] transition-colors inline-block"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#00875A] transition-colors inline-block"
                >
                  Job & Career
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer Copyright */}
        <div className="mt-12 pt-6 border-t border-[#ECCFA0] text-center">
          <p className="font-royal-sans text-xs sm:text-[13px] text-[#5A5040] leading-relaxed font-medium">
            Copyright © 2022 Fortune Gourmet Specialties Pvt Ltd | Developed &amp; Maintained By Blue Brain® Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
