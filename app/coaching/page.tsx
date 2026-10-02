'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  ArrowRight,
  ArrowDown,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Target,
  Compass,
  HeartHandshake,
  Check,
  Zap,
} from 'lucide-react';

const COACHING_PILLARS = [
  {
    title: 'Confidence & Internal Authority',
    description:
      'Dismantling persistent imposter syndrome, self-doubt, and the exhausting habit of second-guessing your instincts in leadership and career.',
  },
  {
    title: 'Fear of Judgement & Visibility',
    description:
      'Stepping into public spaces, pitching opportunities, publishing your work, or taking leadership roles without freezing or feeling exposed.',
  },
  {
    title: 'Career & Executive Transitions',
    description:
      'Navigating career pivots, stepping into executive responsibility, launching independent practices, or redefining your professional purpose.',
  },
  {
    title: 'Clean Boundaries Without Guilt',
    description:
      'Establishing calm, firm, and assertive boundaries with colleagues, partners, and family without lingering dread, panic or self-abandonment.',
  },
  {
    title: 'Identity & Aligned Purpose',
    description:
      'Reconnecting with what genuinely excites and fulfills you, separate from expectations imposed by other people or old survival habits.',
  },
  {
    title: 'Action Without Perfectionism',
    description:
      'Replacing chronic analysis paralysis and endless overthinking with steady, compassionate, and measurable real-world momentum.',
  },
];

export default function CoachingPage() {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 1. COACHING HERO SECTION */}
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

            <p className="text-base sm:text-lg text-[#55534E] leading-relaxed max-w-2xl font-normal">
              Forward-focused coaching for capable individuals ready to dismantle imposter syndrome,
              build courageous self-trust, establish clean boundaries, and take aligned action without the
              paralysis of perfectionism.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/discovery-call?intent=coaching"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </Link>

              <a
                href="#distinction"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Coaching vs. Therapy</span>
                <ArrowDown className="w-4 h-4 text-[#4E6551]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE]">
              <img
                src="/images/coaching_reflection_1790954347039.jpg"
                alt="Coaching reflection sanctuary space with warm natural light"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#DFBF75]">
                  Vision &bull; Alignment &bull; Action
                </p>
                <p className="font-serif italic text-sm mt-0.5">
                  &ldquo;Clarity doesn’t arrive by waiting; it is forged through courageous action.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CRITICAL DISTINCTION: COACHING VS. THERAPY */}
      <section id="distinction" className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Ethical Clarity &bull; No Overlap
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
              The Distinction Between Coaching and Therapy
            </h2>
            <p className="text-base text-[#787672] max-w-2xl mx-auto">
              We never blur clinical trauma processing with personal coaching. Here is how they differ so you can make the safest choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Therapy Column */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8543E]">
                <HeartHandshake className="w-4 h-4 text-[#A8543E]" />
                <span>Trauma Therapy &bull; Past to Present</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                When You Need Therapy:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#55534E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>Processing unresolved childhood trauma, emotional neglect or abuse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>Experiencing panic, PTSD flashbacks, nightmares, or severe somatic triggers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>Navigating acute bereavement or psychiatric distress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>Primary focus: Clinical healing, safety and nervous system stabilization.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#F2EFE9]">
                <Link
                  href="/therapy"
                  className="text-xs font-semibold text-[#A8543E] hover:underline flex items-center gap-1"
                >
                  <span>Explore Clinical Therapy instead</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Coaching Column */}
            <div className="bg-white rounded-2xl border-2 border-[#4E6551]/30 p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4E6551]">
                <Target className="w-4 h-4 text-[#4E6551]" />
                <span>Coaching &bull; Present to Future</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                When Coaching is the Right Fit:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#55534E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#4E6551] font-bold">&bull;</span>
                  <span>You have baseline emotional stability and have processed core trauma.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4E6551] font-bold">&bull;</span>
                  <span>You want to conquer imposter syndrome, step into leadership, or pivot careers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4E6551] font-bold">&bull;</span>
                  <span>You are ready to practice courageous boundaries and overcome people-pleasing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4E6551] font-bold">&bull;</span>
                  <span>Primary focus: Actionable strategies, accountability, and bold momentum.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#F2EFE9]">
                <Link
                  href="/discovery-call?intent=coaching"
                  className="text-xs font-semibold text-[#4E6551] hover:underline flex items-center gap-1"
                >
                  <span>Discuss Coaching on a Discovery Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COACHING FOCUS PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
                <Check className="w-3.5 h-3.5" />
                <span>Action-oriented practice</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COACHING PACKAGES & ROADMAPS */}
      <section id="packages" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            How We Work Together
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
            Coaching Engagement Structures
          </h2>
          <p className="text-sm text-[#787672]">
            Bespoke 1:1 containers designed for meaningful, sustained personal transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-[#ECE7DE] p-8 shadow-xs flex flex-col justify-between space-y-6">
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
                href="/discovery-call?intent=coaching&package=coaching-3m"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Book Discovery Call for 3-Month Pathway</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#ECE7DE] p-8 shadow-xs flex flex-col justify-between space-y-6">
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
                href="/discovery-call?intent=coaching&package=coaching-6m"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Book Discovery Call for 6-Month Pathway</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CONTEXTUAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Next Step
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Step Into Aligned Action
        </h2>
        <p className="text-base text-[#55534E] max-w-xl mx-auto">
          Schedule your complimentary Discovery Call to explore coaching availability and tailor a
          structure to your specific goals.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/discovery-call?intent=coaching"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Discovery Call</span>
          </Link>
          <Link
            href="/contact?intent=coaching"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-4 h-4 text-[#4E6551]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
