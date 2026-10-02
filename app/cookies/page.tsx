'use client';

import React from 'react';
import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
      <div className="space-y-2 border-b border-[#ECE7DE] pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
          Legal &bull; Cookie Policy
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Cookie Policy
        </h1>
        <p className="text-xs text-[#787672]">Last Updated: October 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#55534E] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">1. Use of Cookies</h2>
          <p>
            Our website uses strictly necessary cookies to ensure basic functionality, such as keeping
            items in your shopping cart and maintaining secure sessions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">2. Managing Your Preferences</h2>
          <p>
            You can configure your browser to reject all or certain cookies. However, disabling strictly
            necessary cookies may affect the checkout and cart features.
          </p>
        </section>

        <section className="p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-xs text-[#55534E]">
          <strong>Notice: </strong> [FINAL CLIENT / LEGAL COPY REQUIRED — Specific tracking scripts and analytics disclosures to be confirmed by client.]
        </section>

        <div className="pt-4 border-t border-[#ECE7DE]">
          <Link href="/" className="text-xs font-semibold text-[#A8543E] hover:underline">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
