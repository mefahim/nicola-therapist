'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RECLAIM_STAGES, PRODUCTS_CATALOG } from '@/lib/data';
import {
  ArrowRight,
  ArrowDown,
  Calendar,
  ShieldAlert,
  CheckCircle2,
  BookOpen,
  Users,
  UserCheck,
  Compass,
  Sparkles,
  ChevronRight,
  Check,
  HeartHandshake,
} from 'lucide-react';

export default function ReclaimPage() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const reclaimProducts = PRODUCTS_CATALOG.filter(
    (p) => p.id.startsWith('reclaim-')
  );

  const currentStage = RECLAIM_STAGES[activeStageIdx];

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 1. HERO SECTION */}
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

            <p className="text-base sm:text-lg text-[#55534E] leading-relaxed max-w-2xl font-normal">
              RECLAIM™ is a trauma-informed personal recovery journey created by Nicola Benyahia MBE for
              adults who experienced childhood trauma, neglect, instability or emotional unpredictability,
              and are ready to understand what shaped them, reconnect with who they are, and build a life
              beyond survival mode.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#framework"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm"
              >
                <span>Explore the 6 Stages</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <Link
                href="/discovery-call?intent=reclaim"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#A8543E]" />
                <span>Discuss in a Discovery Call</span>
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
                <p className="font-serif italic text-base">
                  &ldquo;Survival was the first chapter. Thriving is the next.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO RECLAIM IS FOR (THE PROBLEM & RESONANCE) */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Resonance &amp; Alignment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
              Who RECLAIM™ is Created For
            </h2>
            <p className="text-base text-[#787672] max-w-2xl mx-auto">
              This programme is specifically designed for capable adults who survived early adversity and
              now seek compassionate, grounded ways to flourish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Adults who experienced childhood trauma, neglect, family instability, or emotional abuse.',
              'People who appear capable, accomplished and high-functioning outwardly, but quietly carry persistent self-doubt, inner harshness, or chronic shame.',
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

          {/* Transition */}
          <div className="text-center pt-2">
            <a
              href="#framework"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431]"
            >
              <span>See the 6-Stage Visual Narrative Below</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. THE 6-STAGE GUIDED JOURNEY (CONNECTED VISUAL NARRATIVE) */}
      <section id="framework" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            Guided Progressive Narrative
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
            The 6 Stages of RECLAIM™
          </h2>
          <p className="text-base text-[#787672]">
            A progressive transformation framework. Each phase honours what kept you safe before helping
            you build what comes next.
          </p>
        </div>

        {/* Visual Roadmap / Stepper Bar */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 md:p-8 border border-[#ECE7DE]">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 sm:pb-0 scrollbar-none">
            {RECLAIM_STAGES.map((s, idx) => {
              const isActive = activeStageIdx === idx;
              const isPast = activeStageIdx > idx;
              return (
                <button
                  key={s.number}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`flex-1 min-w-[110px] p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#A8543E] shadow-sm'
                      : isPast
                      ? 'bg-white/80 border-[#ECE7DE] text-[#4E6551]'
                      : 'bg-white/40 border-[#ECE7DE] text-[#787672] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span
                      className={`text-xs font-bold ${
                        isActive ? 'text-[#A8543E]' : isPast ? 'text-[#4E6551]' : 'text-[#9C9A95]'
                      }`}
                    >
                      {s.number}
                    </span>
                    {isPast && <Check className="w-3 h-3 text-[#4E6551]" />}
                  </div>
                  <p
                    className={`font-serif text-sm font-semibold tracking-wide ${
                      isActive ? 'text-[#1C1E1B]' : 'text-[#55534E]'
                    }`}
                  >
                    {s.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Guided Stage Focus Card */}
        <div className="bg-white rounded-3xl border-2 border-[#A8543E]/20 p-8 sm:p-12 shadow-sm space-y-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F2EFE9] pb-6">
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-2xl bg-[#FAF0EC] border border-[#E8C4B8] text-[#A8543E] font-serif text-3xl font-bold flex items-center justify-center flex-shrink-0">
                {currentStage.number}
              </span>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF0EC] text-[#A8543E]">
                  Stage {activeStageIdx + 1} of 6
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B] mt-1">
                  {currentStage.title}
                </h3>
              </div>
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[#A8543E] self-start sm:self-center">
              &ldquo;{currentStage.tagline}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-serif text-xl font-semibold text-[#1C1E1B]">
                What Happens in this Stage:
              </h4>
              <p className="text-base text-[#55534E] leading-relaxed">
                {currentStage.description}
              </p>

              <div className="pt-4 space-y-3">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#ECE7DE]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#A8543E]">
                    Core Therapeutic Focus:
                  </p>
                  <p className="text-xs sm:text-sm text-[#55534E] mt-1 leading-relaxed">
                    {currentStage.focus}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 border border-[#ECE7DE] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4E6551]">
                <Sparkles className="w-4 h-4 text-[#4E6551]" />
                <span>The Transformational Shift:</span>
              </div>
              <p className="font-serif italic text-base text-[#1C1E1B] leading-relaxed">
                &ldquo;{currentStage.breakthrough}&rdquo;
              </p>

              <div className="pt-4 border-t border-[#ECE7DE]">
                <p className="text-xs text-[#787672]">
                  {activeStageIdx < 5 ? (
                    <span>
                      Next step in the journey &rarr;{' '}
                      <strong className="text-[#1C1E1B]">Stage {RECLAIM_STAGES[activeStageIdx + 1].number}: {RECLAIM_STAGES[activeStageIdx + 1].title}</strong>
                    </span>
                  ) : (
                    <span className="text-[#4E6551] font-semibold">
                      Full circle integration &bull; Deliberate life creation
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="pt-6 border-t border-[#F2EFE9] flex items-center justify-between">
            <button
              onClick={() => setActiveStageIdx(Math.max(0, activeStageIdx - 1))}
              disabled={activeStageIdx === 0}
              className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-md transition-colors ${
                activeStageIdx === 0
                  ? 'text-[#B5B3AE] cursor-not-allowed'
                  : 'text-[#787672] hover:text-[#1C1E1B] cursor-pointer'
              }`}
            >
              &larr; Previous Stage
            </button>

            <span className="text-xs text-[#787672]">
              {activeStageIdx + 1} / 6
            </span>

            {activeStageIdx < 5 ? (
              <button
                onClick={() => setActiveStageIdx(activeStageIdx + 1)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                <span>Next: {RECLAIM_STAGES[activeStageIdx + 1].title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href="#programmes"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                <span>Explore Engagement Options</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS & PROGRAMMES (CHOOSE YOUR PATHWAY) */}
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
              Choose the level of guidance, immersion and support that best aligns with your season of life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
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

                <div className="pt-8 border-t border-[#F2EFE9] mt-6 flex flex-col gap-2.5">
                  <Link
                    href={`/product/${prod.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
                  >
                    <span>View Programme Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {prod.id === 'reclaim-1on1' && (
                    <Link
                      href="/discovery-call?intent=reclaim"
                      className="w-full text-center py-2.5 text-xs font-semibold text-[#A8543E] hover:underline"
                    >
                      Discuss on a Discovery Call
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLINICAL BOUNDARY & SAFETY NOTICE */}
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

      {/* 6. CONTEXTUAL NEXT STEP CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Taking Action
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Begin Your RECLAIM™ Journey
        </h2>
        <p className="text-base text-[#55534E] max-w-xl mx-auto">
          Start with the self-guided workbook or schedule a confidential Discovery Call to determine
          which RECLAIM™ pathway is best suited for your current life season.
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
            href="/discovery-call?intent=reclaim"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#A8543E]" />
            <span>Book a Discovery Call</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
