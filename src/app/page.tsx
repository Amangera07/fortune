"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
      <g filter="url(#filter0_f_206_30)">
        <path
          d="M89.3008 41.8213C68.1008 31.8213 27.1341 37.6547 9.30078 41.8213V53.3213C23.8008 50.488 55.7008 44.9213 67.3008 45.3213C81.8008 45.8213 156.801 76.8213 171.801 71.8213C158.301 68.8213 115.801 54.3213 89.3008 41.8213Z"
          fill="#FFC133"
        />
      </g>
      <g filter="url(#filter1_f_206_30)">
        <path
          d="M609.301 88.7998C609.488 88.8304 609.675 88.861 609.864 88.8916C653.915 95.6683 783.344 22.2998 793.301 22.2998C803.301 22.2998 809.301 41.7998 809.301 65.2998C769.052 103.556 659.956 97.0163 609.864 88.8916C609.674 88.8625 609.487 88.8319 609.301 88.7998Z"
          fill="#FDCB59"
        />
      </g>
      <g filter="url(#filter2_f_206_30)">
        <path
          d="M687.301 95.2998C714.301 94.1331 775.101 86.3998 802.301 64.7998C805.901 61.9998 812.134 53.2998 814.801 49.2998"
          stroke="#FFC133"
        />
      </g>
      <g filter="url(#filter3_f_206_30)">
        <path
          d="M638.301 145.8C647.467 148.3 665.801 155.3 665.801 163.3V164.564L680.801 174.8L811.801 89.7998L801.301 145.8C800.467 144.633 793.801 141.2 773.801 136.8C753.801 132.4 726.134 160.3 714.801 174.8L665.801 190.8V164.564L638.301 145.8Z"
          fill="#FDCB59"
        />
      </g>
      <g filter="url(#filter4_f_206_30)">
        <path
          d="M670.301 198.274C665.501 198.674 662.967 188.441 662.301 183.274C664.134 186.107 668.801 192.072 672.801 193.272C677.801 194.772 692.801 183.274 695.301 181.773C697.301 180.571 702.801 181.94 705.301 182.774C700.301 182.273 693.801 186.273 689.301 189.274C686.133 191.387 676.301 197.774 670.301 198.274Z"
          fill="#FFB91C"
        />
      </g>
      <g filter="url(#filter5_f_206_30)">
        <path
          d="M446.3 144.3C440.3 132.7 398.467 107.8 378.3 96.8C355.8 88.6333 313.1 72.8 322.3 74.8C333.8 77.3 395.8 96.8 412.3 96.8C428.8 96.8 466.8 129.8 464.3 132.8C461.8 135.8 453.8 158.8 446.3 144.3Z"
          fill="#FDCB5A"
        />
      </g>
      <g filter="url(#filter6_f_206_30)">
        <ellipse cx="724.801" cy="245.3" rx="5.5" ry="5" fill="#DE9E00" />
      </g>
      <g filter="url(#filter7_f_206_30)">
        <path
          d="M728.207 225.566C728.207 238.968 728.685 257.299 727.48 257.299C726.276 257.299 721.301 257.634 721.301 244.233C721.301 230.831 726.276 201.3 727.48 201.3C728.685 201.3 728.207 218.1 728.207 225.566Z"
          fill="#EFA43D"
        />
      </g>
      <g filter="url(#filter8_f_206_30)">
        <path
          d="M572.301 93.7998C572.301 95.7328 543.513 98.2998 504.301 98.2998C465.089 98.2998 430.301 95.7328 430.301 93.7998C430.301 91.8668 457.089 85.2998 496.301 85.2998C535.513 85.2998 572.301 91.8668 572.301 93.7998Z"
          fill="#FDD066"
        />
      </g>
      <g filter="url(#filter9_f_206_30)">
        <path
          d="M724.301 242.3C724.301 246.994 725.405 255.8 724.301 255.8C723.196 255.8 720.301 246.994 720.301 242.3C720.301 237.605 723.196 225.3 724.301 225.3C725.405 225.3 724.301 237.605 724.301 242.3Z"
          fill="white"
        />
      </g>
      <g opacity="0.68" filter="url(#filter10_f_206_30)">
        <path
          d="M814.301 64.7996C814.301 69.7702 796.301 92.2997 748.301 121.3C703.801 134.3 665.801 139.8 660.801 134.3C660.801 129.329 681.626 105.3 717.801 105.3C753.975 105.3 814.301 59.8291 814.301 64.7996Z"
          fill="white"
        />
      </g>
      <g opacity="0.79" filter="url(#filter11_f_206_30)">
        <ellipse
          cx="624.059"
          cy="129.264"
          rx="3.5"
          ry="31.8947"
          transform="rotate(-31.7467 624.059 129.264)"
          fill="white"
        />
      </g>
      <g filter="url(#filter12_f_206_30)">
        <circle cx="669.801" cy="197.8" r="3.5" fill="#D49200" />
      </g>
      <g filter="url(#filter13_f_206_30)">
        <path
          d="M666.836 195.433C669.158 199.252 673.355 201.151 672.852 201.425C672.348 201.698 667.157 201.251 664.835 197.432C662.512 193.612 660.332 187.206 660.836 186.933C661.34 186.659 664.514 191.613 666.836 195.433Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter14_f_206_30)">
        <ellipse cx="450.801" cy="143.3" rx="8.5" ry="9" fill="#FFB91C" />
      </g>
      <g filter="url(#filter15_f_206_30)">
        <ellipse cx="367.301" cy="153.3" rx="3" ry="4" fill="#FFBE2E" />
      </g>
      <g filter="url(#filter16_f_206_30)">
        <path
          d="M360.952 100.071C358.405 98.6409 343.66 93.0241 300.301 79.7284L327.771 78.2998L360.952 100.071C361.119 100.165 361.234 100.241 361.301 100.3L360.952 100.071Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter17_f_206_30)">
        <ellipse
          cx="463.543"
          cy="116.402"
          rx="2.23594"
          ry="15.5"
          transform="rotate(23.5469 463.543 116.402)"
          fill="#FFB91C"
        />
      </g>
      <g opacity="0.55" filter="url(#filter18_f_206_30)">
        <path
          d="M453.798 114.3C453.798 121.204 457.134 150.3 448.298 150.3C439.461 150.3 435.801 137.703 435.801 130.8C429.801 101.8 420.463 116.8 429.3 116.8C438.136 116.8 453.798 107.397 453.798 114.3Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_206_30"
          x="0.000781059"
          y="26.9998"
          width="181.1"
          height="54.6669"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.65" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter1_f_206_30"
          x="587.001"
          y="-0.00019455"
          width="244.6"
          height="117.415"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="11.15" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter2_f_206_30"
          x="682.877"
          y="44.6225"
          width="136.741"
          height="55.5769"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.2" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter3_f_206_30"
          x="618.701"
          y="70.1998"
          width="212.7"
          height="140.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="9.8" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter4_f_206_30"
          x="654.801"
          y="173.8"
          width="58"
          height="31.9854"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3.75" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter5_f_206_30"
          x="301.621"
          y="55.227"
          width="182.196"
          height="113.229"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="9.7" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter6_f_206_30"
          x="705.501"
          y="226.5"
          width="38.6"
          height="37.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="6.9" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter7_f_206_30"
          x="712.501"
          y="192.5"
          width="24.6"
          height="73.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.4" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter8_f_206_30"
          x="420.201"
          y="75.1998"
          width="162.2"
          height="33.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.05" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter9_f_206_30"
          x="716.301"
          y="221.3"
          width="12.4922"
          height="38.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter10_f_206_30"
          x="634.501"
          y="38.1199"
          width="206.1"
          height="124.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="13.15" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter11_f_206_30"
          x="598.712"
          y="93.7776"
          width="50.6938"
          height="70.9726"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.15" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter12_f_206_30"
          x="655.801"
          y="183.8"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.25" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter13_f_206_30"
          x="658.162"
          y="184.322"
          width="17.3328"
          height="19.7684"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.3" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter14_f_206_30"
          x="431.201"
          y="123.2"
          width="39.2"
          height="40.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.55" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter15_f_206_30"
          x="360.301"
          y="145.3"
          width="14"
          height="16"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter16_f_206_30"
          x="289.901"
          y="67.8998"
          width="81.8"
          height="42.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.2" result="effect1_foregroundBlur_206_30" />
        </filter>
        <filter
          id="filter17_f_206_30"
          x="446.32"
          y="91.4646"
          width="34.4488"
          height="49.8756"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.35" result="effect1_foregroundBlur_206_30"/>
        </filter>
        <filter
          id="filter18_f_206_30"
          x="408.172"
          y="94.2686"
          width="63.7441"
          height="73.5312"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8.75" result="effect1_foregroundBlur_206_30" />
        </filter>
      </defs>
    </svg>
  );
}

// HeaderCheese is now in src/components/Header.tsx


function SectionBottomCheeseMelt() {
  return (
    <svg
      viewBox="0 0 1532 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
    >
      <defs>
        <filter id="s2b_topEdgeBlur" x="-50" y="-50" width="1632" height="547" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="s2b_topFadeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="10%" stopColor="white" stopOpacity="0.1" />
          <stop offset="24%" stopColor="white" stopOpacity="0.45" />
          <stop offset="40%" stopColor="white" stopOpacity="0.85" />
          <stop offset="55%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="s2b_cheeseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbe8c3" stopOpacity="0" />
          <stop offset="14%" stopColor="#fbe8c3" stopOpacity="0.4" />
          <stop offset="28%" stopColor="#fae0a2" stopOpacity="0.85" />
          <stop offset="44%" stopColor="#FBD068" stopOpacity="1" />
          <stop offset="100%" stopColor="#FBD068" stopOpacity="1" />
        </linearGradient>
        <mask id="s2b_topFadeMask">
          <rect x="-100" y="0" width="1732" height="500" fill="url(#s2b_topFadeGrad)" />
        </mask>
        <mask id="s2b_drawMeltMask" maskUnits="userSpaceOnUse" x="-100" y="-50" width="1732" height="550">
          {/* Base continuous molten sheet */}
          <path d="M -100 -50 L 1650 -50 L 1650 90 L -100 90 Z" fill="white" />
          {/* Wide overlapping fluid stream paths for every single melting drop */}
          <path className="s2b-melt-stream" d="M 60 10 L 60 220 Q 55 350 62 460" stroke="white" strokeWidth="260" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 135 10 L 135 200 Q 125 280 122 360" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 319 10 L 319 160 Q 320 200 319 250" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 496 10 L 496 150 Q 496 185 496 235" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 658 10 L 658 200 Q 658 270 658 340" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 844 10 L 844 180 Q 844 235 844 295" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 1028 10 L 1028 200 Q 1028 265 1028 335" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 1190 10 L 1190 200 Q 1190 260 1190 320" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 1338 10 L 1338 230 Q 1338 320 1338 400" stroke="white" strokeWidth="260" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="s2b-melt-stream" d="M 1518 10 L 1518 190 Q 1518 245 1518 305" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </mask>
      </defs>

      <g mask="url(#s2b_topFadeMask)" filter="url(#s2b_topEdgeBlur)">
        <g mask="url(#s2b_drawMeltMask)">
          <path
            d="M61.8313 446.073C-14.1226 451.576 104.221 324.161 44.3173 323.48C-15.5866 322.799 2.59382 6.24593 2.59382 6.24593C2.59382 6.24593 107.594 180.246 178.094 113.246C248.594 46.2459 326.582 143.246 451.594 61.7462C576.605 -19.7538 678.094 -29.7541 898.643 87.7459C1119.19 205.246 1049.09 87.7459 1239.59 87.7459C1430.09 87.7459 1495.32 133.246 1517.96 123.246C1540.59 113.246 1531.76 263.546 1517.96 287.384C1504.15 311.221 1449.77 269.676 1400.91 275.124C1352.05 280.573 1373.25 377.966 1337.32 382.733C1301.4 387.501 1321.64 280.573 1287.56 275.124C1253.47 269.676 1219.59 407.746 1189.87 298.281C1160.14 188.815 1181.09 275.124 1136.42 280.573C1091.74 286.021 1080.18 311.221 1028.59 314.626C976.995 318.032 924.464 269.676 898.643 258.098C872.821 246.519 875.586 280.573 844.268 275.124C812.951 269.676 813.839 234.941 791.737 239.709C769.635 244.476 784.348 271.719 756.716 266.27C729.085 260.822 740.144 249.925 708.793 254.011C677.442 258.098 702.325 320.075 658.105 319.394C613.885 318.713 644.265 234.941 619.398 230.855C594.532 226.768 569.615 262.865 552.121 247.201C534.628 231.536 531.215 49.0095 495.904 215.871C460.593 382.733 357.681 237.666 318.957 230.855C280.234 224.044 306.038 268.995 265.504 262.865C224.971 256.736 253.54 226.087 193.62 240.39C133.699 254.692 137.386 352.085 121.735 343.912C106.084 335.74 117.111 286.703 95.9304 297.6C74.7501 308.497 108.833 442.667 61.8313 446.073Z"
            fill="url(#s2b_cheeseGrad)"
          />
      <g opacity="0.51" filter="url(#s2b_filter0_f_233_44)">
        <path
          d="M58.2078 309.062L17.5996 283.386L22.1968 267.264L153.073 236.134L164.708 221.885H212.979L153.073 236.134L111.075 287.566L92.6864 267.264L58.2078 309.062Z"
          fill="#FFA500"
        />
      </g>
      <g opacity="0.52" filter="url(#s2b_filter1_f_233_44)">
        <ellipse
          cx="10.8737"
          cy="22.4163"
          rx="10.8737"
          ry="22.4163"
          transform="matrix(0.979084 0.203455 -0.355622 0.93463 58.207 385.645)"
          fill="white"
        />
      </g>
      <g opacity="0.52" filter="url(#s2b_filter2_f_233_44)">
        <ellipse
          cx="9.69709"
          cy="25.9639"
          rx="9.69709"
          ry="25.9639"
          transform="matrix(0.798886 0.601482 -0.809467 0.587165 173.91 212.35)"
          fill="white"
        />
      </g>
      <g filter="url(#s2b_filter3_f_233_44)">
        <path
          d="M72.4177 427.287C72.4177 428.869 61.7465 433.016 56.9036 433.016C52.0607 433.016 46.1111 427.437 46.1111 425.855C46.1111 424.272 40.7158 402.938 56.9045 425.855C77.1406 420.126 72.4177 425.705 72.4177 427.287Z"
          fill="#D07B24"
        />
      </g>
      <g filter="url(#s2b_filter4_f_233_44)">
        <path
          d="M285.922 222.227C285.922 225.508 277.118 239.592 268.992 239.592C263.755 239.592 247.998 228.707 247.998 225.426C247.998 222.145 257.66 213.543 262.897 213.543C268.133 213.543 338.067 207.602 285.922 222.227Z"
          fill="white"
        />
      </g>
      <g filter="url(#s2b_filter5_f_233_44)">
        <path
          d="M356.937 207.528L426.544 203.541L498.419 198.709L454.788 207.274L373.016 214.771L357.219 211.28L356.937 207.528Z"
          fill="#FFAA00"
        />
      </g>
      <g filter="url(#s2b_filter6_f_233_44)">
        <ellipse
          cx="12.9703"
          cy="30.179"
          rx="12.9703"
          ry="30.179"
          transform="matrix(0.999938 0.0111084 -0.0203371 0.999793 651.043 240.954)"
          fill="#FF9400"
        />
      </g>
      <g filter="url(#s2b_filter7_f_233_44)">
        <path
          d="M650.737 281.819C650.737 299.122 664.75 308.381 662.714 308.381C660.678 308.381 636.909 308.381 642.44 264.111C638.751 241.636 637.835 231.42 635.066 224.609C637.102 224.609 650.737 264.517 650.737 281.819Z"
          fill="white"
        />
      </g>
      <g opacity="0.68" filter="url(#s2b_filter8_f_233_44)">
        <path
          d="M1085.73 267.78C1085.73 271.542 1048.87 292.033 1025.39 289.575C1006.55 289.575 963.64 271.542 963.64 267.78C841.072 223.509 1006.56 219.16 1025.39 219.16C1056.73 215.755 1300.46 243.262 1085.73 267.78Z"
          fill="#FF9F1A"
        />
      </g>
      <g opacity="0.65" filter="url(#s2b_filter9_f_233_44)">
        <path
          d="M1103.24 267.311C1103.24 277.091 1078.36 289.105 1017.53 293.874C991.575 293.874 907.863 245.081 907.863 235.301C907.863 225.521 981.438 280.934 1007.4 280.934C1067.3 285.084 1103.24 257.531 1103.24 267.311Z"
          fill="white"
        />
      </g>
      <g filter="url(#s2b_filter10_f_233_44)">
        <path
          d="M1217.52 278.413C1218.27 278.062 1219.05 277.704 1219.84 277.341L1305.99 237.549L1341.01 347.882C1342.86 345.158 1347.83 327.45 1352.99 278.413C1358.16 229.376 1391.39 230.738 1407.37 237.549C1439.93 247.992 1503.77 270.785 1498.61 278.413C1492.16 287.948 1455.29 249.127 1388.94 255.938C1325.35 275.008 1368.66 384.66 1329.95 366.271C1321.66 362.866 1323.5 282.499 1305.99 258.662C1303.12 243.282 1248.8 264.079 1219.84 277.341L1217.52 278.413Z"
          fill="#FEB33A"
        />
      </g>
      <g opacity="0.63" filter="url(#s2b_filter11_f_233_44)">
        <path
          d="M1337.33 353.331L1310.6 245.722L1265.53 264L1227.03 307.018L1251.53 249.127L1315.21 230.738L1337.33 307.018L1356.68 235.506L1478.33 249.127L1370.51 245.722L1337.33 353.331Z"
          fill="white"
        />
      </g>
      <g opacity="0.85" filter="url(#s2b_filter12_f_233_44)">
        <path
          d="M843.307 242.203C851.279 251.059 880.918 242.451 878.327 243.725C875.736 244.999 854.982 281.758 833.095 248.092C825.122 239.236 805.869 222.793 818.677 229.519C821.268 228.245 835.335 233.346 843.307 242.203Z"
          fill="white"
        />
      </g>
        </g>
      </g>
      <defs>
        <filter
          id="s2b_filter0_f_233_44"
          x="-0.000391006"
          y="204.285"
          width="230.579"
          height="122.377"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8.8" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter1_f_233_44"
          x="36.4801"
          y="376.638"
          width="48.8016"
          height="64.3387"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.55" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter2_f_233_44"
          x="127.134"
          y="206.001"
          width="67.0105"
          height="54.8543"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.55" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter3_f_233_44"
          x="34.048"
          y="404.109"
          width="50.0484"
          height="40.108"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5.6" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter4_f_233_44"
          x="225.998"
          y="190.35"
          width="101.139"
          height="71.2432"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter5_f_233_44"
          x="341.637"
          y="183.409"
          width="172.08"
          height="46.6615"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.65" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter6_f_233_44"
          x="631.214"
          y="221.898"
          width="64.3688"
          height="98.7467"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="9.6" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter7_f_233_44"
          x="627.166"
          y="216.709"
          width="43.6516"
          height="99.5715"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3.95" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter8_f_233_44"
          x="884.993"
          y="185.073"
          width="322.123"
          height="138.505"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="16.9" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter9_f_233_44"
          x="892.963"
          y="219.244"
          width="225.179"
          height="89.5305"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.45" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter10_f_233_44"
          x="1207.52"
          y="224.094"
          width="301.383"
          height="154.247"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter11_f_233_44"
          x="1210.43"
          y="214.138"
          width="284.505"
          height="155.793"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8.3" result="effect1_foregroundBlur_233_44" />
        </filter>
        <filter
          id="s2b_filter12_f_233_44"
          x="804.495"
          y="218.043"
          width="83.8937"
          height="54.1105"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="4.95" result="effect1_foregroundBlur_233_44" />
        </filter>
      </defs>
    </svg>
  );
}

function CardSectionCheese() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1720 684"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
    >
      <defs>
        <mask id="csc_drawMeltMask" maskUnits="userSpaceOnUse" x="-100" y="-50" width="1920" height="800">
          {/* Base continuous molten sheet */}
          <path d="M -100 -50 L 1820 -50 L 1820 120 L -100 120 Z" fill="white" />
          {/* Wide overlapping fluid stream paths for every single melting drip */}
          <path className="csc-melt-stream" d="M 51 20 L 51 290 Q 51 350 51 390" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 155 20 L 155 330 Q 155 400 155 450" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 233 20 L 233 280 Q 233 340 233 380" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 332 20 L 332 320 Q 332 390 332 440" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 436 20 L 436 340 Q 436 420 436 470" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 520 20 L 520 280 Q 520 340 520 380" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 597 20 L 597 330 Q 597 400 597 450" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 660 20 L 660 360 Q 660 440 660 490" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 736 20 L 736 380 Q 736 470 736 520" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 781 20 L 781 370 Q 781 450 781 500" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 924 20 L 924 380 Q 924 470 924 520" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 1114 20 L 1114 430 Q 1114 530 1114 590" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 1235 20 L 1235 460 Q 1235 570 1235 630" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 1323 20 L 1323 520 Q 1323 640 1323 710" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 1388 20 L 1388 520 Q 1388 640 1388 710" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 1445 20 L 1445 510 Q 1445 630 1445 700" stroke="white" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 1551 20 L 1551 380 Q 1551 470 1551 510" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="csc-melt-stream" d="M 1680 20 L 1680 280 Q 1680 360 1680 400" stroke="white" strokeWidth="240" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </mask>
      </defs>

      <g mask="url(#csc_drawMeltMask)">
        <path
          d="M233.5 335.713C155 384.213 117.5 560.214 51.5 280.213L0 62.2136C532 32.2136 1612.9 -11.2864 1680.5 54.7136C1765 137.214 1588 477.714 1551.5 473.214C1515 468.714 1530.5 317.213 1473.5 424.714C1416.5 532.214 1488.5 680.714 1445.5 673.214C1402.5 665.714 1445.5 543.214 1404 541.714C1362.5 540.213 1420 673.214 1388.5 680.714C1357 688.214 1359.5 630.713 1345.5 617.714C1331.5 604.714 1337 668.213 1323.5 680.714C1310 693.214 1229 663.213 1235 588.214C1241 513.214 1298.5 311.213 1184 280.213C1069.5 249.213 1191.5 561.213 1114 553.713C1036.5 546.213 1030.5 268.714 937.5 311.213C844.5 353.713 984.5 466.713 924 484.213C863.5 501.713 833.5 302.214 797.5 317.213C761.5 332.213 830 471.214 781 460.213C732 449.213 812 349.213 755 352.213C698 355.213 797.5 476.214 736.5 484.213C675.5 492.213 720.5 375.714 694.5 380.213C668.5 384.713 684 463.214 660.5 466.713C637 470.213 639 433.714 635 389.213C631 344.713 629 407.213 597 409.213C565 411.214 557.5 232.714 520.5 311.213C483.5 389.713 482 440.214 436.5 421.213C391 402.213 419.5 380.213 332.5 395.713C245.5 411.213 312 287.214 233.5 335.713Z"
          fill="#FBD068"
        />
      <g filter="url(#csc_filter0_f_251_22)">
        <path
          d="M40 120.656L107.5 382.656L283.5 265.656C289.667 287.323 304.6 335.856 315 356.656C328 382.656 363.5 320.656 401.5 363.156C431.9 397.156 450.833 406.99 456.5 407.656L525 272.156L568.5 278.656L595.5 369.656"
          stroke="#FF9400"
          strokeWidth="5"
        />
      </g>
      <g filter="url(#csc_filter1_f_251_22)">
        <path
          d="M646.5 432.656L656.5 455.656C660.667 418.489 672.8 346.956 688 358.156C703.2 369.356 710.667 378.489 712.5 381.656L721 468.656L742 472.156L721 324.656L773.5 335.656L782.5 365.656V448.656"
          stroke="#FF9400"
          strokeWidth="5"
        />
      </g>
      <g filter="url(#csc_filter2_f_251_22)">
        <path
          d="M879.5 332.156L985.5 246.656L1031 348.156L1097.5 523.156C1092.17 397.823 1084.7 139.156 1097.5 107.156C1110.3 75.1562 1202.17 93.8228 1246.5 107.156L1131 260.156H1258C1278.17 308.99 1316.2 429.956 1307 523.156C1295.5 639.656 1268 650.156 1315.5 602.156C1353.5 563.756 1362 581.156 1361.5 594.656L1413.5 472.156L1444 642.156L1434 131.656L1459.5 392.656L1526 359.656L1558 454.656C1606.5 375.99 1698.9 202.756 1680.5 139.156C1662.1 75.5563 1614.17 54.9896 1592.5 52.6562H1361.5"
          stroke="#FF9400"
          strokeWidth="5"
        />
      </g>
      <g opacity="0.44" filter="url(#csc_filter3_f_251_22)">
        <ellipse
          cx="898.272"
          cy="429.58"
          rx="15.6332"
          ry="49.3186"
          transform="rotate(-23.8967 898.272 429.58)"
          fill="#FF9400"
        />
      </g>
      <g opacity="0.19" filter="url(#csc_filter4_f_251_22)">
        <path
          d="M1014 114.158C1014 126.308 494 4.15761 478 274.158C224.777 274.158 97 126.308 97 114.158C97 102.007 553.777 71.1576 807 71.1576C1060.22 71.1576 1511 -0.844017 1014 114.158Z"
          fill="#FF9400"
        />
      </g>
      <g filter="url(#csc_filter5_f_251_22)">
        <path
          d="M1270 472.156C1264.83 503.823 1254.3 574.656 1253.5 604.656C1252.7 634.656 1283.5 652.49 1299 657.656"
          stroke="#FF9400"
          strokeWidth="5"
        />
      </g>
      <g opacity="0.36" filter="url(#csc_filter6_f_251_22)">
        <ellipse
          cx="112.325"
          cy="312.291"
          rx="20.0744"
          ry="93"
          transform="rotate(-12.8967 112.325 312.291)"
          fill="white"
        />
      </g>
      <g opacity="0.42" filter="url(#csc_filter7_f_251_22)">
        <circle cx="447.5" cy="388.656" r="19.5" fill="white" />
      </g>
      <g filter="url(#csc_filter8_f_251_22)">
        <path
          d="M487.5 333.656L534.5 235.156L587.5 311.156C581.333 338.823 576.2 390.056 605 373.656"
          stroke="white"
          strokeWidth="5"
        />
      </g>
      <g filter="url(#csc_filter9_f_251_22)">
        <path
          d="M487 111.156L1003 40.1562L919.5 124.656L1225 40.1562"
          stroke="white"
          strokeWidth="5"
        />
      </g>
      <g filter="url(#csc_filter10_f_251_22)">
        <path d="M1060 409.656L1106 542.156" stroke="white" strokeWidth="5" />
      </g>
      <g filter="url(#csc_filter11_f_251_22)">
        <path
          d="M1427 465.156L1525.5 327.156L1548 437.656L1670 225.656L1660.5 81.1562"
          stroke="white"
          strokeWidth="5"
        />
      </g>
      <g filter="url(#csc_filter12_f_251_22)">
        <ellipse cx="721.5" cy="461.156" rx="6.5" ry="11" fill="white" />
      </g>
      <g opacity="0.54" filter="url(#csc_filter13_f_251_22)">
        <path
          d="M1226.25 231.156C1276.5 295.156 1395.75 407.156 1174.25 262.156C1084.08 278.156 1081.75 415.489 1081.75 359.156C1081.75 302.823 1092.5 246.157 1129.5 246.157C1166.5 246.157 1219.5 262.156 1226.25 231.156Z"
          fill="white"
        />
      </g>
      <g opacity="0.52" filter="url(#csc_filter14_f_251_22)">
        <path
          d="M1281 542.156H1309V654.156H1281L1249.5 594.156L1281 542.156Z"
          fill="white"
        />
      </g>
      <g opacity="0.77" filter="url(#csc_filter15_f_251_22)">
        <path
          d="M443.086 144.368C351.573 139.93 221.769 101.76 154 77.6562L443.086 144.368C472.431 145.791 497.838 143.746 516 136.656C609.5 100.156 474 31.1562 738.5 48.1562C950.1 61.7562 728 69.8229 590.5 72.1562L511.5 160.156L443.086 144.368Z"
          fill="white"
        />
      </g>
      </g>
      <defs>
        <filter
          id="csc_filter0_f_251_22"
          x="13.9781"
          y="96.4322"
          width="607.52"
          height="337.512"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="11.8" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter1_f_251_22"
          x="627.107"
          y="304.379"
          width="174.993"
          height="187.905"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="8.55" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter2_f_251_22"
          x="844.03"
          y="16.2562"
          width="875.257"
          height="660.241"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="16.95" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter3_f_251_22"
          x="856.903"
          y="367.241"
          width="82.7367"
          height="124.678"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="8.4" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter4_f_251_22"
          x="48.1"
          y="0.000389099"
          width="1238.37"
          height="323.057"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="24.45" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter5_f_251_22"
          x="1232.88"
          y="453.654"
          width="85.0047"
          height="224.474"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="9.05" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter6_f_251_22"
          x="52.2988"
          y="190.024"
          width="120.053"
          height="244.533"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="15.75" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter7_f_251_22"
          x="396.5"
          y="337.656"
          width="102"
          height="102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="15.75" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter8_f_251_22"
          x="453.744"
          y="198.703"
          width="183.994"
          height="212.124"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="15.75" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter9_f_251_22"
          x="455.16"
          y="5.17578"
          width="802.008"
          height="155.888"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="15.75" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter10_f_251_22"
          x="1026.14"
          y="377.336"
          width="113.727"
          height="197.141"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="15.75" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter11_f_251_22"
          x="1393.46"
          y="49.4922"
          width="310.578"
          height="448.616"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="15.75" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter12_f_251_22"
          x="699.6"
          y="434.756"
          width="43.8"
          height="52.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="7.7" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter13_f_251_22"
          x="1043.95"
          y="193.356"
          width="297.483"
          height="217.087"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="18.9" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter14_f_251_22"
          x="1223.9"
          y="516.556"
          width="110.7"
          height="163.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="12.8" result="effect1_foregroundBlur_251_22" />
        </filter>
        <filter
          id="csc_filter15_f_251_22"
          x="120"
          y="11.5078"
          width="739.844"
          height="182.648"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="shape" stdDeviation="17" result="effect1_foregroundBlur_251_22" />
        </filter>
      </defs>
    </svg>
  );
}

function CardBottomCheese() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 824 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
    >
      <path
        d="M200 73.4999C120.8 82.6999 56 69.6666 33.5 61.9999H0V0H822.5C824.833 21.1666 823.4 71.1999 801 61.9999C773 50.4999 682.5 87.4999 657 102.5C631.5 117.5 575 78.9999 555 78.9999C535 78.9999 537.5 93.9999 512 87.4999C486.5 80.9999 451.5 91.9999 392.5 93.9999C333.5 95.9999 299 61.9999 200 73.4999Z"
        fill="#FCEBCB"
      />
    </svg>
  );
}

export default function Home() {
  const cheeseRef = useRef<HTMLDivElement>(null);
  const cheeseImgRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const showcaseSectionRef = useRef<HTMLElement>(null);
  const cheeseMeltRef = useRef<HTMLDivElement>(null);
  const section2BottomMeltRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLElement>(null);
  const thirdSectionImgRef = useRef<HTMLDivElement>(null);
  const thirdSectionContentRef = useRef<HTMLDivElement>(null);
  const fourthSectionRef = useRef<HTMLElement>(null);
  const fourthSectionMeltRef = useRef<HTMLDivElement>(null);
  const fifthSectionRef = useRef<HTMLElement>(null);
  const fifthSectionContentRef = useRef<HTMLDivElement>(null);
  const fifthSectionImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
      infinite: false,
    });

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const rafTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // 1. Initial Master Timeline for Header & Hero Entrance (Runs immediately on load without delays)
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      const headerStreams = gsap.utils.toArray<SVGPathElement>(".header-melt-stream");
      headerStreams.forEach((stream) => {
        const len = stream.getTotalLength ? stream.getTotalLength() : 400;
        gsap.set(stream, {
          strokeDasharray: len + 10,
          strokeDashoffset: len + 10,
        });
      });

      if (cheeseRef.current) {
        gsap.set(cheeseRef.current, {
          opacity: 0,
        });
      }

      // Buttery smooth DrawSVG progressive liquid pour for Header Cheese
      tl.to(cheeseRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: "power1.out",
      })
      .to(
        ".header-melt-stream",
        {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.out",
          stagger: {
            amount: 0.35,
            from: "start",
          },
        },
        "-=0.1"
      );

      // Hero content smooth immediate reveal
      gsap.fromTo(
        heroContentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1,
        }
      );

      // Idle continuous header wobble (starts after initial entrance)
      gsap.to(cheeseRef.current, {
        scaleY: 1.015,
        scaleX: 0.995,
        y: "+=2",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.2,
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

      // Section 3: Bottom Cheese Melt DrawSVG & 3rd Section Image Entrance Animation
      const s2bStreams = gsap.utils.toArray<SVGPathElement>(".s2b-melt-stream");
      s2bStreams.forEach((stream) => {
        const len = stream.getTotalLength ? stream.getTotalLength() : 500;
        gsap.set(stream, {
          strokeDasharray: len + 10,
          strokeDashoffset: len + 10,
        });
      });

      if (section2BottomMeltRef.current) {
        gsap.set(section2BottomMeltRef.current, {
          opacity: 0,
        });
      }

      if (thirdSectionImgRef.current) {
        gsap.set(thirdSectionImgRef.current, {
          y: -35,
          opacity: 0,
        });
      }

      if (thirdSectionContentRef.current) {
        gsap.set(thirdSectionContentRef.current, {
          y: 30,
          opacity: 0,
        });
      }

      const s3Tl = gsap.timeline({
        scrollTrigger: {
          trigger: thirdSectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      s3Tl
        // 1. Gentle initial fade-in of molten top
        .to(section2BottomMeltRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
        })
        // 2. Buttery smooth DrawSVG liquid melting & dripping down across the whole wave (no abrupt ending)
        .to(
          ".s2b-melt-stream",
          {
            strokeDashoffset: 0,
            duration: 2.0,
            ease: "power2.out",
            stagger: {
              amount: 0.35,
              from: "start",
            },
          },
          "-=0.15"
        )
        // 3. 3rd Section Image smoothly reveals from top to bottom in seamless harmony
        .to(
          thirdSectionImgRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
          },
          "-=1.4"
        )
        // 4. Section 3 content text & button smooth reveal
        .to(
          thirdSectionContentRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=1.0"
        );

      // Section 4: Top Cheese Melt DrawSVG & Section 4 Entrance Animation
      const cscStreams = gsap.utils.toArray<SVGPathElement>(".csc-melt-stream");
      cscStreams.forEach((stream) => {
        const len = stream.getTotalLength ? stream.getTotalLength() : 700;
        gsap.set(stream, {
          strokeDasharray: len + 15,
          strokeDashoffset: len + 15,
        });
      });

      if (fourthSectionMeltRef.current) {
        gsap.set(fourthSectionMeltRef.current, {
          opacity: 0,
        });
      }

      const s4Tl = gsap.timeline({
        scrollTrigger: {
          trigger: fourthSectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      s4Tl
        // 1. Gentle initial fade-in of molten top
        .to(fourthSectionMeltRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
        })
        // 2. Buttery smooth DrawSVG liquid melting & dripping down across the whole wave
        .to(
          ".csc-melt-stream",
          {
            strokeDashoffset: 0,
            duration: 2.2,
            ease: "power2.out",
            stagger: {
              amount: 0.35,
              from: "start",
            },
          },
          "-=0.15"
        )
        // 3. Section 4 Header smoothly reveals as cheese pours down
        .fromTo(
          ".in-house-header-reveal",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=1.4"
        )
        // 4. Section 4 Brand Cards glide in with spring bounce
        .fromTo(
          ".in-house-brand-card",
          { opacity: 0, y: 45, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: "back.out(1.15)",
          },
          "-=0.8"
        );

      // Section 5: Platter & Recipe Section ScrollTrigger Entrance
      if (fifthSectionContentRef.current) {
        gsap.set(fifthSectionContentRef.current, {
          opacity: 0,
          y: 40,
        });
      }

      if (fifthSectionImgRef.current) {
        gsap.set(fifthSectionImgRef.current, {
          opacity: 0,
          x: 50,
          scale: 0.92,
        });
      }

      const s5Tl = gsap.timeline({
        scrollTrigger: {
          trigger: fifthSectionRef.current,
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
      });

      s5Tl
        .to(fifthSectionContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
        })
        .to(
          fifthSectionImgRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.15)",
          },
          "-=0.85"
        );
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(rafTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans overflow-x-hidden">
      {/* Header — extracted into src/components/Header.tsx */}
      <Header cheeseRef={cheeseRef} logoRef={logoRef} />


      {/* Banner Section */}
      <section className="relative w-full h-[128vh] min-h-[980px] lg:min-h-[1150px] flex items-center justify-center">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/banner-white-theme.png" 
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
        <div ref={heroContentRef} className="relative z-20 text-center max-w-6xl px-4 flex flex-col items-center justify-center -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 xl:-mt-48 select-none">

          {/* Unified Gourmet Brand Lockup: INDIA'S LEADING + GOURMET SVG + Food Purveyors */}
          <div className="relative w-[360px] sm:w-[540px] md:w-[700px] lg:w-[840px] xl:w-[960px] max-w-[94vw] flex flex-col items-center">
            
            {/* INDIA'S LEADING - Flowing Luxury Cursive Calligraphy (Great Vibes) */}
            <div className="absolute top-[16%] sm:top-[17%] md:top-[18%] lg:top-[19%] left-[33%] sm:left-[34%] md:left-[35%] z-10 flex items-center justify-start pointer-events-none">
              <h1 className="font-royal-great-vibes text-2xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[66px] 2xl:text-[74px] font-normal tracking-wide text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] whitespace-nowrap leading-none">
                India&apos;s Leading
              </h1>
            </div>

            {/* 3D Molten Cheese GOURMET SVG */}
            <div className="w-full h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.8)]">
              <img
                src="/assets/GOURMET.svg"
                alt="Gourmet"
                className="w-full h-auto block select-none pointer-events-none"
              />
            </div>

            {/* Food Purveyors - Positioned slightly lower under the molten 'ourmet' word */}
            <h2 className="font-royal-alex text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-normal text-[#F8C854] tracking-wide leading-none -mt-3 sm:-mt-5 md:-mt-8 lg:-mt-11 xl:-mt-14 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] ml-6 sm:ml-12 md:ml-16">
              Food Purveyors
            </h2>
          </div>

          {/* Subtitle Line with Flourish: For the Gourmand in all of us */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-4 sm:mt-5 md:mt-6">
            <span className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-r from-transparent to-[#E0A838]/80"></span>
            <p className="font-royal-subheading text-base sm:text-xl md:text-2xl lg:text-[26px] italic font-medium tracking-wide text-[#FAF0D7] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] whitespace-nowrap">
              For the Gourmand in all of us
            </p>
            <span className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-l from-transparent to-[#E0A838]/80"></span>
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
          <BannerBottomCheese />
        </div>
      </section>
      
      {/* Gourmet Products Showcase Section */}
      <section ref={showcaseSectionRef} className="w-full bg-[#fbe8c3] text-neutral-900 relative z-30 pt-2 sm:pt-4 md:pt-6 pb-0 overflow-visible">
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 -mt-24 sm:-mt-32 md:-mt-44 lg:-mt-56 xl:-mt-64 pb-0">
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

      {/* 3rd Section */}
      <section ref={thirdSectionRef} className="relative w-full bg-[#fbe8c3] overflow-visible z-20">
        {/* Melted Cheese Wave placed higher on top of Section 3 image */}
        <div
          ref={section2BottomMeltRef}
          className="absolute -top-12 sm:-top-16 md:-top-24 lg:-top-28 -left-[2%] sm:-left-[3%] w-[104%] sm:w-[106%] pointer-events-none z-30 translate-y-[-2px] origin-top will-change-transform [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.15)_8%,rgba(0,0,0,0.65)_22%,black_36%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.15)_8%,rgba(0,0,0,0.65)_22%,black_36%)]"
        >
          <SectionBottomCheeseMelt />
        </div>

        {/* Left-Aligned Text Content & Call-To-Action Button with White & Gold Typography */}
        <div
          ref={thirdSectionContentRef}
          className="absolute top-[22%] sm:top-[25%] md:top-[28%] lg:top-[30%] left-10 sm:left-16 md:left-24 lg:left-32 xl:left-36 max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-xl z-30 space-y-2 sm:space-y-3 md:space-y-4 pointer-events-auto select-none"
        >
          {/* Eyebrow */}
          <p className="font-royal-sans font-semibold text-xs sm:text-sm md:text-[15px] text-[#FDB833] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            It&apos;s time to upgrade your Menu
          </p>

          {/* Heading */}
          <h2 className="flex flex-col gap-0.5 sm:gap-1">
            <span className="font-royal-cinzel font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[50px] text-[#FFFFFF] leading-[1.12] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              The Finest Ingredients
            </span>
            <span className="font-royal-alex font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[66px] text-[#FDB833] leading-tight my-0.5 sm:my-1 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
              for your kitchen
            </span>
          </h2>

          {/* Subtitle */}
          <p className="font-royal-sans font-medium text-xs sm:text-base md:text-[17px] text-[#FAF0D7] leading-relaxed max-w-xs sm:max-w-sm md:max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Elevate your recipes with our superior selection.
          </p>

          {/* Button */}
          <div className="pt-2 sm:pt-3">
            <button className="inline-flex items-center justify-center bg-[#FDB833] hover:bg-[#ffc54d] text-neutral-950 font-bold font-royal-sans text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-[0_10px_24px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              View Catalog
            </button>
          </div>
        </div>

        <div
          ref={thirdSectionImgRef}
          className="w-full relative pt-6 sm:pt-10 md:pt-14 lg:pt-16 will-change-transform [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,rgba(0,0,0,0.25)_22%,rgba(0,0,0,0.75)_34%,black_45%,black_85%,rgba(0,0,0,0.4)_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,rgba(0,0,0,0.25)_22%,rgba(0,0,0,0.75)_34%,black_45%,black_85%,rgba(0,0,0,0.4)_95%,transparent_100%)]"
        >
          <img
            src="/assets/3rd-section-img.png"
            alt="Artisanal Culinary Excellence"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover block"
          />

          {/* Left-Side Dark Vignette Gradient Overlay for High Contrast Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 via-40% to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-black/80 via-black/35 to-transparent pointer-events-none z-10"></div>

          {/* Top Soft Beige Blend Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-28 sm:h-36 md:h-48 bg-gradient-to-b from-[#fbe8c3] via-[#fbe8c3]/80 via-40% to-transparent pointer-events-none z-10"></div>

          {/* Bottom Soft Shadow Blend Gradient blending into Section 4 #FCEBCB */}
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-t from-[#FCEBCB] via-[#FCEBCB]/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* 4th Section: Our In-House Brands */}
      <section ref={fourthSectionRef} className="relative w-full bg-[#FCEBCB] pt-14 sm:pt-20 md:pt-28 lg:pt-36 pb-4 sm:pb-6 md:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8 z-20 overflow-x-clip overflow-y-visible">
        {/* Top Cheese Melt Hanging SVG with soft faded/blurred top edge so no hard line cuts the previous section */}
        <div
          ref={fourthSectionMeltRef}
          className="absolute -top-26 sm:-top-38 md:-top-52 lg:-top-64 xl:-top-76 -left-[4%] sm:-left-[6%] lg:-left-[8%] w-[108%] sm:w-[112%] lg:w-[116%] pointer-events-none z-30 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_12%,rgba(0,0,0,0.3)_22%,rgba(0,0,0,0.8)_34%,black_45%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_12%,rgba(0,0,0,0.3)_22%,rgba(0,0,0,0.8)_34%,black_45%)]"
        >
          <CardSectionCheese />
        </div>

        <div className="max-w-7xl mx-auto relative z-30">
          {/* Header */}
          <div className="in-house-header-reveal max-w-4xl space-y-1.5 sm:space-y-2.5 mb-10 sm:mb-14">
            {/* Eyebrow */}
            <p className="font-royal-great-vibes text-2xl sm:text-3xl md:text-[32px] text-[#8C6230] tracking-wide font-normal">
              Fortune Gourmet Private Labels
            </p>

            {/* Section Title with Luxury Cursive Flow */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#1F2922] tracking-tight leading-tight flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="font-royal-cinzel font-bold">Our</span>
              <span className="font-royal-great-vibes text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#B45309]">
                In-house Brands
              </span>
            </h2>

            {/* Narrative Description */}
            <p className="font-royal-subheading text-base sm:text-lg md:text-[19px] italic font-medium leading-[1.7] text-[#3D4841] pt-1.5">
              In our relentless pursuit of unparalleled ingredients and products, we have uncovered a niche collection that has been perfected and curated specifically for the discerning Indian market. Say hello to our exclusive private line of gourmet products, meticulously crafted to elevate your culinary experience and cater to the unique tastes of the Indian palate.
            </p>
          </div>

          {/* 3 Brand Cards Grid with Authentic Cheese Slice Card Shape */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto items-stretch">
            {/* Card 1: Fiorella */}
            <div className="in-house-brand-card group relative aspect-[300/362] w-full max-w-[440px] sm:max-w-[470px] lg:max-w-[500px] mx-auto flex flex-col items-center justify-between p-6 sm:p-8 md:p-9 hover:-translate-y-2.5 transition-all duration-500 ease-out cursor-pointer">
              {/* Cheese Slice Card Background SVG */}
              <div className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_12px_28px_rgba(215,130,20,0.2)] group-hover:drop-shadow-[0_24px_48px_rgba(215,130,20,0.34)] transition-all duration-500">
                <Image
                  src="/assets/card-design.svg"
                  alt="Fiorella Cheese Card Frame"
                  fill
                  unoptimized
                  className="object-fill w-full h-full"
                  priority
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-4 sm:py-5 lg:py-6 px-3 sm:px-4 text-center">
                {/* Brand Heading */}
                <div className="pt-1 sm:pt-2">
                  <h3 className="font-royal-serif text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111111] tracking-tight group-hover:text-[#B45309] transition-colors duration-300">
                    Fiorella
                  </h3>
                </div>

                {/* Center Product Image (Fixed boundary with internal zoom) */}
                <div className="relative w-[67%] sm:w-[69%] aspect-square max-w-[235px] sm:max-w-[255px] lg:max-w-[270px] my-auto flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_6px_16px_rgba(180,110,20,0.18)] group-hover:shadow-[0_12px_24px_rgba(180,110,20,0.28)] transition-shadow duration-500">
                    <Image
                      src="/assets/fiorella-cheese-splash.jpg"
                      alt="Fiorella Artisanal Cheese"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="font-royal-sans text-xs sm:text-[13px] md:text-[14px] font-medium text-[#3D4841] text-center leading-snug pb-1 sm:pb-2 max-w-[260px] sm:max-w-[280px]">
                  Our Private Label of Locally Sourced and Imported Artisanal Cheese
                </p>
              </div>
            </div>

            {/* Card 2: Favola FARMS */}
            <div className="in-house-brand-card group relative aspect-[300/362] w-full max-w-[440px] sm:max-w-[470px] lg:max-w-[500px] mx-auto flex flex-col items-center justify-between p-6 sm:p-8 md:p-9 hover:-translate-y-2.5 transition-all duration-500 ease-out cursor-pointer">
              {/* Cheese Slice Card Background SVG */}
              <div className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_12px_28px_rgba(215,130,20,0.2)] group-hover:drop-shadow-[0_24px_48px_rgba(215,130,20,0.34)] transition-all duration-500">
                <Image
                  src="/assets/card-design.svg"
                  alt="Favola Farms Cheese Card Frame"
                  fill
                  unoptimized
                  className="object-fill w-full h-full"
                  priority
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-4 sm:py-5 lg:py-6 px-3 sm:px-4 text-center">
                {/* Brand Heading */}
                <div className="pt-1 sm:pt-2 flex flex-col items-center leading-none">
                  <h3 className="font-royal-serif text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight">
                    <span className="text-[#111111]">Fav</span>
                    <span className="text-[#0E7490]">ola</span>
                  </h3>
                  <span className="font-royal-sans text-[10px] sm:text-[11px] md:text-xs font-extrabold tracking-[0.2em] text-[#0E7490] uppercase mt-1 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD]">
                    FARMS
                  </span>
                </div>

                {/* Center Product Image (Fixed boundary with internal zoom) */}
                <div className="relative w-[67%] sm:w-[69%] aspect-square max-w-[235px] sm:max-w-[255px] lg:max-w-[270px] my-auto flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_6px_16px_rgba(180,110,20,0.18)] group-hover:shadow-[0_12px_24px_rgba(180,110,20,0.28)] transition-shadow duration-500">
                    <Image
                      src="/assets/favola-farms-splash.jpg"
                      alt="Favola Farms"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="font-royal-sans text-xs sm:text-[13px] md:text-[14px] font-medium text-[#3D4841] text-center leading-snug pb-1 sm:pb-2 max-w-[260px] sm:max-w-[280px]">
                  Our Quality In-house Brand, Supplying Fresh and Processed Meats
                </p>
              </div>
            </div>

            {/* Card 3: Favola AQUA */}
            <div className="in-house-brand-card group relative aspect-[300/362] w-full max-w-[440px] sm:max-w-[470px] lg:max-w-[500px] mx-auto flex flex-col items-center justify-between p-6 sm:p-8 md:p-9 hover:-translate-y-2.5 transition-all duration-500 ease-out cursor-pointer">
              {/* Cheese Slice Card Background SVG */}
              <div className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_12px_28px_rgba(215,130,20,0.2)] group-hover:drop-shadow-[0_24px_48px_rgba(215,130,20,0.34)] transition-all duration-500">
                <Image
                  src="/assets/card-design.svg"
                  alt="Favola Aqua Cheese Card Frame"
                  fill
                  unoptimized
                  className="object-fill w-full h-full"
                  priority
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-4 sm:py-5 lg:py-6 px-3 sm:px-4 text-center">
                {/* Brand Heading */}
                <div className="pt-1 sm:pt-2 flex flex-col items-center leading-none">
                  <h3 className="font-royal-serif text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-[#0284C7]">
                    Favola
                  </h3>
                  <span className="font-royal-sans text-[10px] sm:text-[11px] md:text-xs font-extrabold tracking-[0.2em] text-[#0284C7] uppercase mt-1 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD]">
                    AQUA
                  </span>
                </div>

                {/* Center Product Image (Fixed boundary with internal zoom) */}
                <div className="relative w-[67%] sm:w-[69%] aspect-square max-w-[235px] sm:max-w-[255px] lg:max-w-[270px] my-auto flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_6px_16px_rgba(180,110,20,0.18)] group-hover:shadow-[0_12px_24px_rgba(180,110,20,0.28)] transition-shadow duration-500">
                    <Image
                      src="/assets/favola-aqua-splash.jpg"
                      alt="Favola Aqua Seafood"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="font-royal-sans text-xs sm:text-[13px] md:text-[14px] font-medium text-[#3D4841] text-center leading-snug pb-1 sm:pb-2 max-w-[260px] sm:max-w-[280px]">
                  Our Brand of Diverse Seafood, Sourced from Across the Globe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Platter & Recipe Section (Pure #FDD06A with Soft Blurry Bottom Blend into #FCEBCB Footer) */}
      <section
        ref={fifthSectionRef}
        className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-center bg-[#FCEBCB] text-[#121815] pt-24 sm:pt-28 md:pt-36 lg:pt-44 pb-36 sm:pb-48 md:pb-56 lg:pb-64 px-6 sm:px-10 lg:px-16 overflow-visible z-20"
      >
        {/* Pure #FDD06A Background Layer with Progressive Blurry Mask towards the Bottom */}
        <div className="absolute inset-0 bg-[#FDD06A] [mask-image:linear-gradient(to_bottom,black_0%,black_65%,rgba(0,0,0,0.9)_75%,rgba(0,0,0,0.6)_85%,rgba(0,0,0,0.2)_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_65%,rgba(0,0,0,0.9)_75%,rgba(0,0,0,0.6)_85%,rgba(0,0,0,0.2)_94%,transparent_100%)] pointer-events-none z-0" />

        {/* Ambient Warm Blur Glow bridging Section 5 background seamlessly into Footer Cheese Wave */}
        <div className="absolute -bottom-16 left-0 right-0 h-52 bg-gradient-to-b from-[#FDD06A]/70 via-[#FDD06A]/30 to-transparent blur-2xl pointer-events-none z-10" />

        {/* Top Cheese Melt Hanging from Section 4 at z-10 so Section 5 Platter Image (z-40) layers over it */}
        <div className="absolute -top-1 sm:-top-1.5 -left-[1%] w-[102%] pointer-events-none z-10">
          <CardBottomCheese />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-40 my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
            {/* Left-Aligned Text Content & Call-To-Action Button */}
            <div
              ref={fifthSectionContentRef}
              className="lg:col-span-5 space-y-6 sm:space-y-7 will-change-transform z-40 relative pr-2 sm:pr-4 lg:pr-6 max-w-[520px]"
            >
              {/* Attractive Heading with Balanced Hierarchy */}
              <div className="space-y-2">
                {/* Clean Uppercase Serif Intro */}
                <h2 className="font-royal-cinzel font-bold text-xl sm:text-2xl md:text-3xl text-[#121815] tracking-[0.08em] uppercase leading-snug">
                  Want to learn how to
                </h2>

                {/* Grand Flowing Cursive Highlight */}
                <div className="flex flex-col">
                  <span className="font-royal-great-vibes text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] text-white leading-[1.02] font-normal drop-shadow-[0_2px_10px_rgba(180,120,20,0.4)]">
                    Assemble the best
                  </span>
                  <span className="font-royal-great-vibes text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[66px] text-[#241703] leading-[1.06] font-normal -mt-1 sm:-mt-2">
                    cheese & meat platters?
                  </span>
                </div>
              </div>

              {/* Description (Editorial paragraph with warm readability on golden background) */}
              <p className="font-royal-sans text-sm sm:text-base md:text-[16.5px] text-[#222823] leading-[1.8] font-medium max-w-md pt-1 relative z-40">
                The elusive hunt for a variety of cheese and charcuterie for your artisanal platters is over. Allow us to help you curate the best that our portfolio has to offer. <span className="text-[#693B00] font-bold underline cursor-pointer">Check our recipes here.</span>
              </p>

              {/* View Recipes Button (Luxurious Dark Contrast Pill) */}
              <div className="pt-2 sm:pt-3 relative z-40">
                <button className="group inline-flex items-center gap-3 bg-[#121815] text-[#F5AF19] font-royal-sans font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)] hover:bg-black hover:text-[#FFD874] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                  <span>View Recipes</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side Platter Image (Rendered in front of the full-width footer cheese wave) */}
            <div
              ref={fifthSectionImgRef}
              className="lg:col-span-7 relative flex items-center justify-center lg:justify-end will-change-transform z-40 lg:translate-x-4 xl:translate-x-8"
            >
              {/* Main Fruit Platter PNG in front with clean edges without dark black drop shadow */}
              <div className="relative w-full max-w-[720px] sm:max-w-[850px] lg:max-w-[980px] xl:max-w-[1150px] aspect-[16/11] flex items-center justify-center lg:-mr-4 xl:-mr-8 z-40">
                <Image
                  src="/assets/fruits-cheese.png"
                  alt="Artisanal Cheese and Fruit Platter"
                  fill
                  priority
                  className="object-contain scale-120 sm:scale-130 lg:scale-145 xl:scale-155 hover:scale-160 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Enlarged Golden Cheese Wave (z-20) positioned smoothly along Section 5 bottom transition */}
        <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 lg:-bottom-28 xl:-bottom-32 -left-[2%] w-[104%] pointer-events-none z-20 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_12%,rgba(0,0,0,0.06)_22%,rgba(0,0,0,0.22)_34%,rgba(0,0,0,0.5)_46%,rgba(0,0,0,0.82)_58%,black_70%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_12%,rgba(0,0,0,0.06)_22%,rgba(0,0,0,0.22)_34%,rgba(0,0,0,0.5)_46%,rgba(0,0,0,0.82)_58%,black_70%)]">
          <div className="w-full relative aspect-[1801/467] scale-105 sm:scale-110 lg:scale-115">
            <Image
              src="/assets/footer-cheese.svg"
              alt="Footer Cheese Wave"
              fill
              unoptimized
              className="object-contain object-bottom sm:object-fill w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

