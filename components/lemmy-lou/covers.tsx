'use client';

import React from 'react';

interface BookCoverProps {
  id: string;
  title: string;
  subtitle?: string;
  themeColor?: 'blush' | 'sky' | 'mint' | 'lavender' | 'peach' | 'stone' | 'terracotta' | 'sage';
  className?: string;
}

export function LemmyLouBookCover({
  id,
  title,
  subtitle,
  themeColor = 'blush',
  className = '',
}: BookCoverProps) {
  // Color presets matching the approved mockup
  const bgColors = {
    blush: 'from-[#ffe9f0] via-[#fff5f8] to-[#ffdce7] border-[#f8c5d6]',
    sky: 'from-[#e5f5ff] via-[#f0f9ff] to-[#d6efff] border-[#b8e2ff]',
    mint: 'from-[#e7f7e5] via-[#f2faf1] to-[#d7f2d4] border-[#bce8b7]',
    lavender: 'from-[#eeefff] via-[#f5f6ff] to-[#e0e4ff] border-[#c8ceff]',
    peach: 'from-[#fff0e8] via-[#fff5ef] to-[#fee2d4] border-[#fed1bb]',
    stone: 'from-[#F7F4EE] via-[#FAF8F5] to-[#ECE7DE] border-[#DDD7CD]',
    terracotta: 'from-[#FAF0EC] via-[#FDF7F5] to-[#F3E2DC] border-[#E8C4B8]',
    sage: 'from-[#EFF4EE] via-[#F7FAF6] to-[#E2EBE1] border-[#C8D9C6]',
  };

  const badgeColors = {
    blush: 'bg-[#f43d86] text-white',
    sky: 'bg-[#0a8edb] text-white',
    mint: 'bg-[#43ad59] text-white',
    lavender: 'bg-[#5b67de] text-white',
    peach: 'bg-[#e86e45] text-white',
    stone: 'bg-[#787672] text-white',
    terracotta: 'bg-[#A8543E] text-white',
    sage: 'bg-[#4E6551] text-white',
  };

  return (
    <div
      className={`relative aspect-[3/4] w-full rounded-2xl p-5 flex flex-col justify-between overflow-hidden shadow-lg border bg-gradient-to-b ${bgColors[themeColor]} ${className}`}
    >
      {/* Decorative background sun & stars */}
      <div className="absolute top-2 right-2 w-14 h-14 rounded-full bg-yellow-300/40 blur-xs -z-0 pointer-events-none" />
      <div className="absolute top-1 left-2 text-xs opacity-75 select-none">✨</div>
      <div className="absolute bottom-6 right-3 text-xs opacity-75 select-none">🌈</div>

      {/* Top Brand Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#f43d86]" />
          <span className="text-[10px] font-bold text-[#0a8edb] tracking-tight">
            Lemmy Lou <span className="text-[#f43d86]">&amp; Friends</span>
          </span>
        </div>
        <span className="text-sm select-none">💛</span>
      </div>

      {/* Center Artwork & Main Title */}
      <div className="relative z-10 text-center my-auto py-2">
        <div className="inline-block bg-white/95 backdrop-blur-xs px-4 py-3 rounded-2xl shadow-sm border border-white/60 mx-auto max-w-[90%]">
          <h3 className="font-extrabold text-xl md:text-2xl text-[#163a75] tracking-tight leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[11px] font-medium text-[#f43d86] mt-1 leading-snug">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-10">
        <div className="bg-white/80 backdrop-blur-xs rounded-xl p-2.5 text-center border border-white/60">
          <p className="text-[10px] font-bold tracking-wide uppercase text-[#163a75]">
            Kinder Minds ♥ Brighter Tomorrows
          </p>
        </div>
      </div>
    </div>
  );
}
