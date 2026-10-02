'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS_CATALOG, ProductItem } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { ArrowRight, ShoppingBag, Sparkles, BookOpen, Layers, Heart, ArrowUpRight } from 'lucide-react';
import { LemmyLouBookCover } from '@/components/lemmy-lou/covers';

export default function ResourcesPage() {
  const { addItem } = useCart();
  const [filter, setFilter] = useState<'all' | 'adult' | 'children'>('all');

  const adultProducts = PRODUCTS_CATALOG.filter((p) => p.category === 'adult' || p.category === 'programme');
  const childrenProducts = PRODUCTS_CATALOG.filter((p) => p.category === 'children');

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 34. RESOURCES — HERO SECTION */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8543E]" />
            Educational &amp; Therapeutic Tools
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B] leading-tight">
            Psychological resources for{' '}
            <span className="italic font-normal text-[#A8543E]">understanding, healing</span> and growth.
          </h1>

          <p className="text-base sm:text-lg text-[#55534E] leading-relaxed">
            Thoughtfully crafted workbooks, guided programmes, and emotional literacy tools. Designed by
            Nicola Benyahia MBE to support adults navigating recovery and children discovering their feelings.
          </p>

          {/* Quick Segmented Filter */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#FAF8F5] border border-[#ECE7DE] rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white text-[#1C1E1B] shadow-xs font-semibold'
                  : 'text-[#787672] hover:text-[#1C1E1B]'
              }`}
            >
              All Resources
            </button>
            <button
              onClick={() => setFilter('adult')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                filter === 'adult'
                  ? 'bg-white text-[#1C1E1B] shadow-xs font-semibold'
                  : 'text-[#787672] hover:text-[#1C1E1B]'
              }`}
            >
              Adults &bull; RECLAIM™
            </button>
            <button
              onClick={() => setFilter('children')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                filter === 'children'
                  ? 'bg-white text-[#1C1E1B] shadow-xs font-semibold'
                  : 'text-[#787672] hover:text-[#1C1E1B]'
              }`}
            >
              Children &bull; Lemmy Lou &amp; Friends
            </button>
          </div>
        </div>
      </section>

      {/* 35. RESOURCES — ADULT AREA (RECLAIM™) */}
      {(filter === 'all' || filter === 'adult') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[#ECE7DE] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                Adult Recovery &bull; Grounded Practice
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B] mt-1">
                The RECLAIM™ Collection
              </h2>
              <p className="text-sm text-[#787672] mt-1 max-w-xl">
                Self-guided workbooks, guided cohorts, and intensive personal mentorship created to help
                you understand what protected you and build a life beyond survival mode.
              </p>
            </div>
            <Link
              href="/reclaim"
              className="text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431] flex items-center gap-1.5"
            >
              <span>Explore The RECLAIM™ Method</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adultProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-[#ECE7DE] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#FAF8F5] relative overflow-hidden border-b border-[#ECE7DE]">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-white/95 backdrop-blur-xs text-[#1C1E1B] shadow-xs">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                        {prod.title}
                      </h3>
                      <span className="font-serif text-xl font-bold text-[#1C1E1B]">
                        {prod.price}
                      </span>
                    </div>

                    <p className="font-serif italic text-xs text-[#A8543E]">{prod.subtitle}</p>
                    <p className="text-xs text-[#55534E] leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {prod.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#FAF8F5] text-[#787672] border border-[#ECE7DE]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F2EFE9] mt-4 flex items-center gap-3">
                  <Link
                    href={`/product/${prod.id}`}
                    className="flex-1 text-center py-2.5 px-3 bg-[#FAF8F5] hover:bg-[#ECE7DE] border border-[#ECE7DE] text-[#1C1E1B] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => addItem(prod)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 36. RESOURCES — LEMMY LOU & FRIENDS CHILDREN'S AREA */}
      {(filter === 'all' || filter === 'children') && (
        <section className="bg-gradient-to-b from-[#eef8ff] via-[#fffdf4] to-[#FAF8F5] border-y border-[#cbe4fb] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#f43d86] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  <span>Children’s Wellbeing Collection</span>
                  <span>♥</span>
                </div>
                <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0a8edb] tracking-tight">
                  Lemmy Lou &amp; Friends
                </h2>
                <p className="text-sm font-semibold text-[#f43d86] mt-1">
                  Created by Nicola Benyahia MBE &bull; Kinder Minds, Brighter Tomorrows
                </p>
                <p className="text-sm text-[#163a75] mt-2 max-w-xl leading-relaxed">
                  Therapeutic stories, activity workbooks, and feelings tools created to help children
                  understand big emotions, build confidence, and discover that they do not have to work
                  everything out alone.
                </p>
              </div>

              <Link
                href="/lemmy-lou-and-friends"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f43d86] hover:bg-[#d92c73] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start md:self-end"
              >
                <span>Visit Lemmy Lou &amp; Friends Hub</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {childrenProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border-2 border-white/80 p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    <LemmyLouBookCover
                      id={prod.id}
                      title={prod.title}
                      subtitle={prod.subtitle}
                      themeColor={prod.themeColor}
                      className="max-h-[280px]"
                    />

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-xl text-[#0c579d]">{prod.title}</h3>
                        <span className="font-extrabold text-lg text-[#163a75]">{prod.price}</span>
                      </div>
                      <p className="text-xs font-semibold text-[#f43d86] mt-0.5">{prod.subtitle}</p>
                      <p className="text-xs text-[#163a75]/80 mt-2 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {prod.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#eef8ff] text-[#0a8edb]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#f0f4f9] mt-4 flex items-center gap-3">
                    <Link
                      href={`/product/${prod.id}`}
                      className="flex-1 text-center py-2 px-3 bg-[#e5f5ff] text-[#0a8edb] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#d4edff] transition-colors"
                    >
                      Explore
                    </Link>

                    <button
                      onClick={() => addItem(prod)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#f43d86] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#d92c73] transition-colors shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
