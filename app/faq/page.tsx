'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQS } from '@/lib/data';
import { ChevronDown, ChevronUp, Calendar, ArrowRight, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Overview' },
    { id: 'therapy', label: 'Therapy & EMDR' },
    { id: 'reclaim', label: 'The RECLAIM™ Method' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'booking', label: 'Discovery Calls & Booking' },
    { id: 'resources', label: 'Resources & Delivery' },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS
      : FAQS.filter((item) => item.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24 pt-8 md:pt-16">
      {/* 55. FAQ — HERO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8543E]" />
          Knowledge Base &bull; Practical Clarity
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B]">
          Frequently Asked Questions
        </h1>

        <p className="text-base text-[#55534E] leading-relaxed max-w-xl mx-auto">
          Find clear answers regarding therapy, RECLAIM™ programmes, coaching distinctions, and
          discovery consultation logistics.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#A8543E] text-white font-semibold shadow-xs'
                  : 'bg-white border border-[#D8D4CC] text-[#787672] hover:text-[#1C1E1B] hover:bg-[#FAF8F5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordions List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#ECE7DE] overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5]/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg md:text-xl font-medium text-[#1C1E1B]">
                  {faq.question}
                </span>
                <span className="text-[#A8543E] p-1 flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-[#55534E] leading-relaxed border-t border-[#F2EFE9]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Bottom Still Have Questions CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#ECE7DE] p-8 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#A8543E] mx-auto" />
          <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
            Still have a question not listed here?
          </h3>
          <p className="text-xs text-[#55534E] max-w-md mx-auto">
            Book a complimentary 20-minute Discovery Call to discuss your specific questions directly with Nicola.
          </p>
          <div className="pt-2">
            <Link
              href="/discovery-call"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
