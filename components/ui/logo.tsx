'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'compact' | 'light';
  subtext?: boolean;
}

export function Logo({ className = '', variant = 'full', subtext = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8543E] rounded-md transition-opacity ${className}`}
      aria-label="Nicola Benyahia — Home"
    >
      {/* Exquisite Metallic Interlocking NB Monogram nestled in warm peach/cream aura */}
      <div className="relative flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl p-1 bg-gradient-to-br from-[#FFF9F5] via-[#FDF3EC] to-[#FBECE2] border border-[#F4DDD0] shadow-xs flex items-center justify-center transition-all duration-300 group-hover:border-[#E5B59C] group-hover:shadow-sm">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold linear gradient for 'N' */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBF75" />
              <stop offset="35%" stopColor="#C5A059" />
              <stop offset="70%" stopColor="#EAD196" />
              <stop offset="100%" stopColor="#A8823B" />
            </linearGradient>

            {/* Warm peach & rose gold gradient for 'B' to blend with branding */}
            <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2947A" />
              <stop offset="35%" stopColor="#C6765B" />
              <stop offset="75%" stopColor="#F0BCAB" />
              <stop offset="100%" stopColor="#A05A42" />
            </linearGradient>

            {/* Laurel leaf gradient */}
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2C98D" />
              <stop offset="100%" stopColor="#9C7733" />
            </linearGradient>
          </defs>

          {/* Elegant Monogram 'N' (Polished Gold) */}
          <path
            d="M 24 95 L 34 95 M 29 95 L 29 28 L 24 28 M 29 28 L 56 88 L 56 28 L 51 28 M 56 28 L 61 28 M 56 95 L 61 95"
            stroke="url(#goldGrad)"
            strokeWidth="5.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* Laurel Olive Branch entwined on the left vertical stem */}
          <g stroke="url(#leafGrad)" strokeWidth="1.2" fill="url(#leafGrad)" fillOpacity="0.85">
            {/* stem */}
            <path d="M 23 88 Q 28 65 32 45" fill="none" strokeWidth="1.8" />
            {/* leaves */}
            <path d="M 28 62 C 24 57 20 62 25 66 C 29 65 30 63 28 62 Z" />
            <path d="M 31 52 C 37 49 38 56 33 58 C 30 57 30 54 31 52 Z" />
            <path d="M 26 73 C 21 70 19 76 24 79 C 27 77 28 75 26 73 Z" />
            <path d="M 33 42 C 38 38 41 44 35 46 C 32 45 32 43 33 42 Z" />
            <path d="M 27 82 C 22 81 23 87 28 87 C 29 85 29 83 27 82 Z" />
          </g>

          {/* Interlocking Monogram 'B' (Warm Rose Gold) with double vertical inner spine */}
          {/* Inner vertical spine */}
          <line x1="59" y1="28" x2="59" y2="95" stroke="url(#roseGoldGrad)" strokeWidth="3.2" />
          <line x1="63" y1="28" x2="63" y2="95" stroke="url(#roseGoldGrad)" strokeWidth="3.2" />

          {/* Outer B rounded curves */}
          <path
            d="M 63 28 L 78 28 C 91 28 97 38 97 49 C 97 59 89 62 77 62 L 63 62 M 63 62 L 80 62 C 94 62 101 71 101 81 C 101 93 91 95 78 95 L 63 95"
            stroke="url(#roseGoldGrad)"
            strokeWidth="5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography: Nicola Benyahia */}
      {variant !== 'mark' && (
        <div className="flex flex-col justify-center">
          <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-[#1C1E1B] leading-tight">
            Nicola Benyahia
          </span>
          {subtext && (
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.16em] uppercase text-[#787672] font-medium leading-none mt-0.5">
              Counselling & Life Coaching
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

export function LemmyLouLogo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/lemmy-lou-and-friends"
      className={`inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f43d86] rounded-md ${className}`}
      aria-label="Lemmy Lou & Friends — Children's Wellbeing Hub"
    >
      <div className="flex items-center gap-1">
        <span className="font-bold text-xl md:text-2xl text-[#0a8edb] tracking-tight">
          Lemmy Lou
        </span>
        <span className="font-bold text-xl md:text-2xl text-[#f43d86] tracking-tight flex items-center gap-1">
          &amp; Friends
          <span className="text-[#f43d86] text-lg inline-block animate-pulse">♥</span>
        </span>
      </div>
    </Link>
  );
}
