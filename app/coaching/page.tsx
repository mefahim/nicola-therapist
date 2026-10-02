'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

const COACHING_PILLARS = [
  {
    title: 'Confidence & Self-Trust',
    description:
      'Dismantling chronic imposter syndrome, self-doubt, and the habit of second-guessing your instincts in work and leadership.',
  },
  {
    title: 'Fear of Judgement & Visibility',
    description:
      'Stepping into public spaces, asking for promotions, publishing work, or sharing your voice without feeling exposed or overwhelmed.',
  },
  {
    title: 'Career & Life Transitions',
    description:
      'Navigating career pivots, stepping into new roles, entrepreneurship, or restructuring your priorities after major life changes.',
  },
  {
    title: 'Boundaries & People-Pleasing',
    description:
      'Establishing clean, calm, and assertive boundaries with colleagues, partners, and family without lingering guilt or panic.',
  },
  {
    title: 'Identity & Aligned Purpose',
    description:
      'Reconnecting with what genuinely excites and fulfills you, separate from expectations imposed by others or old survival habits.',
  },
  {
    title: 'Action Without Perfection',
    description:
      'Replacing chronic analysis paralysis and overthinking with steady, measurable, compassionate momentum.',
  },
];

export default function CoachingPage() {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 32. COACHING — HERO SECTION */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4E6551]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4E6551]" />
              Transformational Personal &amp; Executive Coaching
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C1E1B] leading-tight">
              You understand where you have been.{' '}
              <span className="italic font-normal text-[#A8543E] block mt-1">
                Now, where do you want to go?
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#55534E] leading-relaxed max-w-2xl">
              Forward-focused coaching for capable individuals ready to dismantle imposter syndrome,
              build courageous self-trust, establish clean boundaries, and take aligned action without the
              paralysis of perfectionism.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/discovery-call?intent=coaching"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </Link>

              <Link
                href="/contact?intent=coaching"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Enquire About Packages</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE]">
              <img
                src="/images/coaching_reflection_1790954347039.jpg"
                alt="Coaching reflection sanctuary space"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#DFBF75]">
                  Vision &bull; Alignment &bull; Action
                </p>
                <p className="font-serif italic text-sm mt-0.5">
                  “Clarity doesn’t arrive by waiting; it is forged through courageous action.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COACHING FOCUS PILLARS */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Core Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              Areas of Coaching Focus
            </h2>
            <p className="text-base text-[#787672]">
              Grounded, practical and psychologically intelligent partnership to help you step into your
              authority with confidence and ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COACHING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ECE7DE] p-8 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF0EA] text-[#4E6551] flex items-center justify-center font-serif font-bold text-base">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#55534E] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F2EFE9] flex items-center gap-1.5 text-xs font-medium text-[#4E6551]">
                  <span>Action-oriented practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 33. COACHING — THERAPY DISTINCTION SAFETY PANEL */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF0EC] border-2 border-[#E8C4B8] rounded-2xl p-6 sm:p-8 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#A8543E] flex-shrink-0 mt-0.5" />
          <div className="space-y-2 text-xs sm:text-sm text-[#1C1E1B] leading-relaxed">
            <h4 className="font-serif font-bold text-base text-[#A8543E]">
              Clear Boundary: The Distinction Between Coaching and Therapy
            </h4>
            <p>
              It is vital to understand that <strong>Coaching is not a replacement for clinical psychotherapy</strong>.
            </p>
            <p className="text-[#55534E]">
              Coaching is forward-looking, goal-oriented, and focused on current strategies, personal authority, and future vision. If your needs are primarily therapeutic—such as active trauma symptoms, unresolved childhood abuse, acute depression, or emotional stabilization—this will be discussed openly during our Discovery Call so that Therapy can be offered as the more appropriate, ethical clinical support.
            </p>
          </div>
        </div>
      </section>

      {/* COACHING ENGAGEMENT PACKAGES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            How We Work Together
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
            Coaching Engagement Structures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-[#ECE7DE] p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#EBF0EA] text-[#4E6551]">
                3-Month Pathway
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                The Clarity &amp; Boundary Accelerator
              </h3>
              <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                Six bi-weekly 60-minute coaching calls focused on resolving immediate professional transitions, boundary enforcement, and dismantling imposter paralysis.
              </p>
              <ul className="space-y-2 text-xs text-[#787672] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E6551]" />
                  <span>6 x 60-minute 1:1 Zoom Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E6551]" />
                  <span>Between-session direct voice/email accountability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E6551]" />
                  <span>Custom boundary &amp; self-advocacy scripts</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-[#ECE7DE]">
              <Link
                href="/discovery-call?package=coaching-3m"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#ECE7DE] p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FAF0EC] text-[#A8543E]">
                6-Month Pathway
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                The Deep Leadership &amp; Identity Immersion
              </h3>
              <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                Twelve bi-weekly 60-minute calls for comprehensive transformation, long-term leadership authority, career re-architecture, and sustained self-leadership.
              </p>
              <ul className="space-y-2 text-xs text-[#787672] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E6551]" />
                  <span>12 x 60-minute 1:1 Zoom Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E6551]" />
                  <span>Priority messaging support between sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E6551]" />
                  <span>Comprehensive personal values &amp; career vision audit</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-[#ECE7DE]">
              <Link
                href="/discovery-call?package=coaching-6m"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Step Into Aligned Action
        </h2>
        <p className="text-base text-[#55534E] max-w-xl mx-auto">
          Schedule your complimentary Discovery Call to explore coaching availability and tailor a
          structure to your specific goals.
        </p>
        <div className="pt-2">
          <Link
            href="/discovery-call?intent=coaching"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Discovery Call</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
