'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  SITE_INFO,
  RECLAIM_STAGES,
  SERVICE_PATHWAYS,
  PRODUCTS_CATALOG,
} from '@/lib/data';
import {
  ArrowRight,
  Calendar,
  Sparkles,
  ShieldCheck,
  Compass,
  Heart,
  ChevronRight,
  BookOpen,
  Award,
} from 'lucide-react';

export default function HomePage() {
  const [activeStage, setActiveStage] = useState(0);
  const featuredWorkbook = PRODUCTS_CATALOG.find((p) => p.id === 'reclaim-workbook')!;

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 11. HOME — HERO SECTION */}
      <section className="relative pt-8 md:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8543E]" />
                TRAUMA THERAPY &bull; RECLAIM™ &bull; COACHING
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C1E1B] leading-[1.08] tracking-tight">
                Your past shaped you.{' '}
                <span className="italic font-normal text-[#A8543E] block mt-1">
                  It doesn’t have to define
                </span>{' '}
                what comes next.
              </h1>

              <p className="text-base sm:text-lg text-[#55534E] leading-relaxed max-w-2xl font-normal">
                {SITE_INFO.subtagline}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/reclaim"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow"
                >
                  <span>Explore RECLAIM™</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/discovery-call"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#A8543E]" />
                  <span>Work With Me</span>
                </Link>
              </div>

              {/* Verified Credentials Bar */}
              <div className="pt-6 border-t border-[#ECE7DE] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#787672]">
                <span className="font-semibold text-[#1C1E1B]">Nicola Benyahia MBE</span>
                <span>&bull;</span>
                <span>BACP Accredited Counsellor</span>
                <span>&bull;</span>
                <span>EMDR Trauma Specialist</span>
              </div>
            </div>

            {/* Right Column: Editorial Authentic Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Subtle decorative architectural frame */}
                <div className="absolute -inset-4 bg-[#EBF0EA] rounded-3xl -rotate-1 -z-10" />
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE] bg-[#ECE7DE]">
                  <img
                    src="/images/nicola_portrait_1790954278431.jpg"
                    alt="Nicola Benyahia MBE — Trauma Therapist and Coach"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-widest font-medium opacity-90">
                      Founder &amp; Clinical Lead
                    </p>
                    <p className="font-serif text-lg font-medium">Nicola Benyahia MBE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. HOME — RECLAIM INTRO SECTION */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF0EA] text-[#4E6551] text-xs font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>The Lived Reality of Survival Mode</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
            You survived. Now it’s time to reclaim your life.
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-[#55534E] leading-relaxed text-left sm:text-center">
            <p>
              When you grow up navigating childhood trauma, neglect, emotional unpredictability or
              instability, your nervous system learns to adapt to stay safe.
            </p>
            <p>
              You may have become the reliable one, the high-achiever, the perfectionist, or the chronic
              people-pleaser. Outwardly, you appear completely capable and successful. Inwardly, you
              might battle persistent self-doubt, fear of rejection, boundary guilt, exhaustion, and a
              quiet disconnection from who you truly are underneath the protection.
            </p>
            <p className="font-serif italic text-xl text-[#A8543E]">
              Those strategies kept you safe then. But they do not have to run your life now.
            </p>
          </div>
        </div>
      </section>

      {/* 13. HOME — RECLAIM JOURNEY TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            Signature Framework
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
            The RECLAIM™ Journey
          </h2>
          <p className="text-base text-[#787672]">
            A trauma-informed journey for adults who experienced childhood trauma, neglect or abuse and
            are ready to understand their past, reconnect with themselves and build a life beyond
            survival.
          </p>
        </div>

        {/* Interactive 6-Stage Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stage Selector Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {RECLAIM_STAGES.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                  activeStage === idx
                    ? 'bg-white border-[#A8543E] shadow-sm'
                    : 'bg-[#FAF8F5] border-[#ECE7DE] hover:bg-white text-[#787672]'
                }`}
              >
                <span
                  className={`font-serif text-xl font-bold transition-colors ${
                    activeStage === idx ? 'text-[#A8543E]' : 'text-[#9C9A95]'
                  }`}
                >
                  {stage.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-serif text-lg font-semibold ${
                        activeStage === idx ? 'text-[#1C1E1B]' : 'text-[#55534E]'
                      }`}
                    >
                      {stage.title}
                    </h3>
                    {activeStage === idx && <ChevronRight className="w-4 h-4 text-[#A8543E]" />}
                  </div>
                  <p className="text-xs text-[#787672] truncate mt-0.5">{stage.tagline}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#ECE7DE] p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl md:text-5xl font-bold text-[#A8543E]/20">
                  Stage {RECLAIM_STAGES[activeStage].number}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF0EC] text-[#A8543E]">
                  Phase {activeStage + 1} of 6
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-semibold text-[#1C1E1B]">
                  {RECLAIM_STAGES[activeStage].title}
                </h3>
                <p className="font-serif italic text-lg text-[#A8543E] mt-1">
                  {RECLAIM_STAGES[activeStage].tagline}
                </p>
              </div>

              <p className="text-sm md:text-base text-[#55534E] leading-relaxed">
                {RECLAIM_STAGES[activeStage].description}
              </p>

              <div className="pt-4 border-t border-[#ECE7DE] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-[#FAF8F5] rounded-lg">
                  <p className="font-semibold text-[#1C1E1B] uppercase tracking-wider text-[10px] text-[#A8543E]">
                    Core Focus
                  </p>
                  <p className="text-[#55534E] mt-1">{RECLAIM_STAGES[activeStage].focus}</p>
                </div>
                <div className="p-3.5 bg-[#FAF8F5] rounded-lg">
                  <p className="font-semibold text-[#1C1E1B] uppercase tracking-wider text-[10px] text-[#4E6551]">
                    Key Breakthrough
                  </p>
                  <p className="text-[#55534E] mt-1">{RECLAIM_STAGES[activeStage].breakthrough}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between">
              <Link
                href="/reclaim"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431]"
              >
                <span>Discover the Complete RECLAIM™ Method</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 14. HOME — THREE WAYS TO WORK WITH NICOLA */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Client Pathways
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              Three Ways to Work With Nicola
            </h2>
            <p className="text-base text-[#787672]">
              Each offer serves a distinct need, clearly demarcated between clinical trauma processing,
              signature recovery programmes, and forward-looking coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PATHWAYS.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#ECE7DE] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#EBF0EA] text-[#4E6551]">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                      {service.name}
                    </h3>
                    <p className="font-serif italic text-sm text-[#A8543E] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#F2EFE9]">
                    <p className="text-[11px] font-semibold text-[#1C1E1B] uppercase tracking-wider">
                      Key Focus Areas:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#787672]">
                      {service.focusAreas.slice(0, 4).map((area, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#A8543E]">&bull;</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#F2EFE9] mt-6">
                  <Link
                    href={service.href}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. HOME — MY APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#ECE7DE]">
              <img
                src="/images/therapy_space_1790954295028.jpg"
                alt="Therapeutic consulting room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Clinical Grounding &bull; Real Empathy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              My Approach
            </h2>
            <div className="space-y-4 text-base text-[#55534E] leading-relaxed">
              <p>
                This work is not surface-level motivation or toxic positivity. True healing requires
                respecting the intelligent roots of your survival patterns and understanding why your
                mind and body learned to protect you in the ways they did.
              </p>
              <p>
                Having navigated profound personal grief alongside clinical trauma practice, I bring
                the grounded meeting point of lived experience and accredited psychotherapeutic
                expertise. We work together not to erase what happened, but to build a present and a
                future that is no longer controlled by fear.
              </p>
              <p className="font-serif italic text-lg text-[#1C1E1B]">
                “Healing the past and building your future is a quiet, steady practice. We prioritise
                consistency, emotional safety and compassion over impossible perfection.”
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/discovery-call"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 16. HOME — FEATURED RESOURCE (RECLAIM WORKBOOK) */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#ECE7DE] p-8 md:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#ECE7DE] shadow-md">
                  <img
                    src={featuredWorkbook.image}
                    alt={featuredWorkbook.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
                  <span>Featured Adult Resource</span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
                    {featuredWorkbook.title}
                  </h3>
                  <p className="font-serif italic text-lg text-[#787672] mt-1">
                    {featuredWorkbook.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#55534E] leading-relaxed">
                  {featuredWorkbook.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {featuredWorkbook.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#ECE7DE] text-[#787672]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="font-serif text-3xl font-bold text-[#1C1E1B]">
                    {featuredWorkbook.price}
                  </span>
                  <Link
                    href={`/product/${featuredWorkbook.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                  >
                    <span>View Workbook Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. HOME — FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Taking the First Step
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B] leading-tight">
          You don’t have to stay where you are.
        </h2>

        <p className="text-base sm:text-lg text-[#55534E] max-w-2xl mx-auto leading-relaxed">
          Whether you need deep trauma therapy, the structured RECLAIM™ recovery method, forward-focused
          coaching, or supportive self-guided resources, there is a clear, compassionate path forward.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/discovery-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Discovery Call</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>General Enquiries</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
