'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RECLAIM_STAGES, PRODUCTS_CATALOG } from '@/lib/data';
import {
  ArrowRight,
  Calendar,
  ShieldAlert,
  CheckCircle2,
  BookOpen,
  Users,
  UserCheck,
  Sparkles,
} from 'lucide-react';

export default function ReclaimPage() {
  const [selectedStage, setSelectedStage] = useState(0);

  const reclaimProducts = PRODUCTS_CATALOG.filter(
    (p) => p.id.startsWith('reclaim-')
  );

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 23. RECLAIM — HERO SECTION */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8543E]" />
              Signature Adult Recovery Framework
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C1E1B] leading-[1.08]">
              From surviving your past{' '}
              <span className="italic font-normal text-[#A8543E] block mt-1">
                to creating your future.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#55534E] leading-relaxed max-w-2xl">
              RECLAIM™ is a trauma-informed personal recovery journey created by Nicola Benyahia MBE for
              adults who experienced childhood trauma, neglect, instability or emotional unpredictability,
              and are ready to understand what shaped them, reconnect with who they are, and build a life
              beyond survival.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
              >
                <span>Begin Your RECLAIM™ Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/discovery-call"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#A8543E]" />
                <span>Book a Discovery Call</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE]">
              <img
                src="/images/reclaim_horizon_1790954314695.jpg"
                alt="Serene morning horizon symbolizing renewal and reclaiming one's life"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="font-serif italic text-base">“Survival was the first chapter. Thriving is the next.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 25. RECLAIM — WHO IT IS FOR */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Audience Alignment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
              Who RECLAIM™ is Created For
            </h2>
            <p className="text-base text-[#787672] max-w-2xl mx-auto">
              This programme is specifically designed for capable adults who survived early adversity and
              now seek compassionate, dignified ways to flourish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Adults who experienced childhood trauma, neglect, family instability or emotional abuse.',
              'People who appear capable, accomplished and high-functioning on the outside, but quietly carry persistent self-doubt, inner harshness, or chronic shame.',
              'Those struggling with chronic people-pleasing, perfectionism, overachievement, boundary guilt, or an underlying terror of rejection and conflict.',
              'Individuals who want to understand how their past shaped them, without remaining defined by or trapped in their trauma history.',
              'Adults ready to move out of the exhaustion of survival mode and into grounded self-trust, authentic identity, confidence, and deliberate choice.',
            ].map((point, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-[#ECE7DE] flex items-start gap-4 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A8543E] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#55534E] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24. RECLAIM — THE SIX STAGE EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            The Architecture of Recovery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
            The 6 Stages of RECLAIM™
          </h2>
          <p className="text-base text-[#787672]">
            Each stage represents an intentional phase of growth—honouring your protection before asking
            you to build your future.
          </p>
        </div>

        {/* Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECLAIM_STAGES.map((stage, i) => (
            <div
              key={stage.number}
              className="bg-white rounded-2xl border border-[#ECE7DE] p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#A8543E]">
                    {stage.number}
                  </span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#ECE7DE] text-[#787672]">
                    Stage {i + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                    {stage.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#A8543E] mt-0.5">
                    {stage.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EFE9] space-y-2">
                <div className="text-xs">
                  <span className="font-semibold text-[#1C1E1B]">Focus: </span>
                  <span className="text-[#787672]">{stage.focus}</span>
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-[#4E6551]">Breakthrough: </span>
                  <span className="text-[#55534E]">{stage.breakthrough}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 26. RECLAIM — PRODUCTS & PROGRAMMES */}
      <section id="programmes" className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Engagement Pathways
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              Experience the RECLAIM™ Method
            </h2>
            <p className="text-base text-[#787672]">
              Choose the level of guidance, immersion and support that best aligns with your life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reclaimProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-[#ECE7DE] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#EBF0EA] text-[#4E6551]">
                      {prod.badge}
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#1C1E1B]">
                      {prod.price}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                      {prod.title}
                    </h3>
                    <p className="font-serif italic text-xs text-[#A8543E] mt-1">
                      {prod.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#F2EFE9]">
                    <p className="text-[11px] font-semibold text-[#1C1E1B] uppercase tracking-wider">
                      Includes:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#787672]">
                      {prod.keyOutcomes.slice(0, 4).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#A8543E]">&bull;</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#F2EFE9] mt-6">
                  <Link
                    href={`/product/${prod.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                  >
                    <span>View Programme Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 27. RECLAIM — IMPORTANT SAFETY NOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0EC] border-2 border-[#E8C4B8] rounded-2xl p-6 sm:p-8 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#A8543E] flex-shrink-0 mt-0.5" />
          <div className="space-y-2 text-xs sm:text-sm text-[#1C1E1B] leading-relaxed">
            <h4 className="font-serif font-bold text-base text-[#A8543E]">
              Important Clinical &amp; Ethical Boundary Note
            </h4>
            <p>
              RECLAIM™ is a trauma-informed personal development and recovery framework. It is{' '}
              <strong>not intended to replace individual psychotherapy, psychiatric care, or acute crisis intervention</strong>.
            </p>
            <p className="text-[#55534E]">
              Self-guided materials and group coaching should never encourage intensive trauma processing or detailed exposure to traumatic memories without appropriate clinical oversight. If you are experiencing acute psychological distress, active trauma flashbacks, or severe symptoms, we recommend engaging in 1:1 clinical therapy as your primary step.
            </p>
          </div>
        </div>
      </section>

      {/* 28. RECLAIM — FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Begin Your RECLAIM™ Journey
        </h2>
        <p className="text-base text-[#55534E] max-w-xl mx-auto">
          Take your time to explore the workbooks or schedule a discovery call to discuss which RECLAIM™
          pathway matches your current life season.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/product/reclaim-workbook"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Order the RECLAIM™ Workbook</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/discovery-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Discovery Call</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
