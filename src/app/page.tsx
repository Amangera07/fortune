"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

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

function SectionBottomCheeseMelt() {
  return (
    <svg
      viewBox="0 0 1533 445"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
    >
      <defs>
        <linearGradient id="s2b_topFadeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="20%" stopColor="white" stopOpacity="0.1" />
          <stop offset="38%" stopColor="white" stopOpacity="0.75" />
          <stop offset="55%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="s2b_cheeseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbe8c3" stopOpacity="0" />
          <stop offset="18%" stopColor="#fbe8c3" stopOpacity="0.3" />
          <stop offset="36%" stopColor="#FBD068" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#FBD068" stopOpacity="1" />
          <stop offset="100%" stopColor="#FBD068" stopOpacity="1" />
        </linearGradient>
        <mask id="s2b_topFadeMask">
          <rect x="-100" y="0" width="1733" height="500" fill="url(#s2b_topFadeGrad)" />
        </mask>
      </defs>

      <g mask="url(#s2b_topFadeMask)">
        <path
          d="M62.7649 439.827C-13.189 445.33 105.155 317.915 45.2509 317.234C-14.653 316.553 3.52741 0 3.52741 0C3.52741 0 108.527 174 179.027 107C249.527 40 409.016 163 534.027 81.5C659.039 0 718.527 158.5 865.027 158.5C1011.53 158.5 1050.03 81.5 1240.53 81.5C1431.03 81.5 1496.25 127 1518.89 117C1541.53 107 1532.7 257.3 1518.89 281.138C1505.08 304.975 1450.71 263.43 1401.85 268.878C1352.99 274.327 1374.18 371.72 1338.26 376.487C1302.33 381.255 1322.57 274.327 1288.49 268.878C1254.41 263.43 1220.53 401.5 1190.8 292.035C1161.08 182.57 1182.03 268.878 1137.35 274.327C1092.67 279.776 1081.11 304.975 1029.52 308.38C977.928 311.786 925.398 263.43 899.576 251.852C873.755 240.274 876.519 274.327 845.202 268.878C813.884 263.43 814.772 228.695 792.671 233.463C770.569 238.23 785.281 265.473 757.65 260.025C730.019 254.576 741.078 243.679 709.727 247.765C678.376 251.852 703.259 313.829 659.039 313.148C614.819 312.467 645.198 228.695 620.332 224.609C595.465 220.523 570.549 256.619 553.055 240.955C535.561 225.29 532.149 42.7635 496.838 209.625C461.527 376.487 358.614 231.42 319.891 224.609C281.167 217.798 306.972 262.749 266.438 256.619C225.904 250.49 254.474 219.841 194.553 234.144C134.633 248.446 138.319 345.839 122.669 337.666C107.018 329.494 118.044 280.457 96.864 291.354C75.6837 302.251 109.766 436.421 62.7649 439.827Z"
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
          <feGaussianBlur stdDeviation="4.95" result="effect1_foregroundBlur_233_44" />
        </filter>
      </defs>
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

    return () => {
      ctx.revert();
      gsap.ticker.remove(rafTicker);
      lenis.destroy();
    };
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
          <BannerBottomCheese />
        </div>
      </section>
      
      {/* Gourmet Products Showcase Section */}
      <section ref={showcaseSectionRef} className="w-full bg-[#fbe8c3] text-neutral-900 relative z-20 pt-2 sm:pt-4 md:pt-6 pb-0 overflow-visible">
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 -mt-24 sm:-mt-32 md:-mt-44 lg:-mt-56 xl:-mt-64 pb-8 sm:pb-12 md:pb-16">
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

        {/* Bottom Section Melted Cheese Element with seamless top fade & extended width */}
        <div className="relative -mt-10 sm:-mt-14 md:-mt-20 lg:-mt-24 -left-[2%] sm:-left-[3%] w-[104%] sm:w-[106%] pointer-events-none z-10 translate-y-[1px] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_16%,black_38%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.35)_16%,black_38%)]">
          <SectionBottomCheeseMelt />
        </div>
      </section>
    </main>
  );
}
