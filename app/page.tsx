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
  ShieldCheck,
  Compass,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Target,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  HelpCircle,
  Clock,
  Lock,
} from 'lucide-react';

export default function HomePage() {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedSelfCheck, setSelectedSelfCheck] = useState<'therapy' | 'reclaim' | 'coaching'>('reclaim');

  const featuredWorkbook = PRODUCTS_CATALOG.find((p) => p.id === 'reclaim-workbook')!;
  const lemmyLouFeatured = PRODUCTS_CATALOG.find((p) => p.id === 'my-big-feelings')!;

  return (
    <div className="space-y-24 md:space-y-36 pb-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Positioning & Emotional Message */}
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

              {/* Clear CTA Hierarchy */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/discovery-call"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </Link>

                <a
                  href="#pathways"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  <span>Explore Ways I Can Help</span>
                  <ArrowRight className="w-4 h-4 text-[#A8543E]" />
                </a>
              </div>

              {/* Trust Anchor / Credentials Strip */}
              <div className="pt-6 border-t border-[#ECE7DE] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#787672]">
                <div className="flex items-center gap-1.5 text-[#1C1E1B] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#A8543E]" />
                  <span>Nicola Benyahia MBE</span>
                </div>
                <span>&bull;</span>
                <span>BACP Accredited Counsellor</span>
                <span>&bull;</span>
                <span>EMDR Trauma Specialist</span>
                <span>&bull;</span>
                <span className="text-[#4E6551] font-medium">100% Confidential</span>
              </div>
            </div>

            {/* Right Column: Editorial Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-[#EBF0EA] rounded-3xl -rotate-1 -z-10" />
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE] bg-[#ECE7DE]">
                  <img
                    src="/images/nicola_portrait_1790954278431.jpg"
                    alt="Nicola Benyahia MBE — Trauma Therapist, Coach and Creator of RECLAIM"
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

      {/* 2. THE PROBLEM / SELF-RECOGNITION */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Self-Recognition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
              Do you recognize yourself here?
            </h2>
            <p className="text-base text-[#787672]">
              Many of the capable, compassionate adults who seek support carry these quiet, invisible burdens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-7 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8543E]">01</span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">
                  High-Functioning Survival
                </h3>
                <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                  Outwardly, you have everything handled. You achieve, provide, and show up reliably for everyone. Inwardly, you live with exhaustion, chronic vigilance, and fear that dropping a single ball will unravel your safety.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F2EFE9]">
                <Link
                  href="/therapy"
                  className="text-xs font-semibold text-[#A8543E] hover:underline flex items-center gap-1"
                >
                  <span>Therapy addresses this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-7 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8543E]">02</span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">
                  The Weight of People-Pleasing
                </h3>
                <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                  Saying &ldquo;no&rdquo; triggers acute panic, guilt, or fear of abandonment. You adapt to keep the peace, managing other people&apos;s emotions while quietly abandoning your own needs and boundaries.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F2EFE9]">
                <Link
                  href="/reclaim"
                  className="text-xs font-semibold text-[#A8543E] hover:underline flex items-center gap-1"
                >
                  <span>RECLAIM™ dismantles this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-7 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8543E]">03</span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">
                  Imposter Doubts &amp; Hesitation
                </h3>
                <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                  Despite proven achievements, you constantly second-guess yourself, fear being exposed as inadequate, and freeze when stepping into greater leadership or visibility.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F2EFE9]">
                <Link
                  href="/coaching"
                  className="text-xs font-semibold text-[#4E6551] hover:underline flex items-center gap-1"
                >
                  <span>Coaching transforms this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Narrative Bridge */}
          <div className="text-center pt-4 max-w-xl mx-auto">
            <p className="font-serif italic text-lg sm:text-xl text-[#1C1E1B]">
              &ldquo;Those adaptations protected you when you had no other choice. But you survived. Now it is time to reclaim your life.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 3. PATHWAYS & SERVICE DIFFERENTIATION */}
      <section id="pathways" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            Client Pathways
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
            Three Distinct Ways to Work Together
          </h2>
          <p className="text-base text-[#787672]">
            Each service serves a distinct, clearly defined purpose. We never blur clinical trauma processing with personal coaching.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Pathway 1: Therapy */}
          <div className="bg-white rounded-2xl border border-[#ECE7DE] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#FAF0EC] text-[#A8543E]">
                  Clinical 1:1
                </span>
                <HeartHandshake className="w-5 h-5 text-[#A8543E]" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                  Trauma Therapy &amp; EMDR
                </h3>
                <p className="font-serif italic text-xs text-[#A8543E] mt-1">
                  A safe space to understand, process and heal
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                For adults needing deeper trauma-focused psychotherapy to safely process childhood adversity, PTSD, grief, anxiety, and somatic overwhelm with an accredited clinical specialist.
              </p>

              <div className="space-y-1.5 pt-3 border-t border-[#F2EFE9] text-xs text-[#787672]">
                <p className="font-semibold text-[#1C1E1B] text-[11px] uppercase tracking-wider">
                  Primary Focus:
                </p>
                <p>&bull; Childhood trauma &amp; emotional neglect</p>
                <p>&bull; EMDR memory reprocessing</p>
                <p>&bull; Panic, PTSD &amp; nervous system triggers</p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#F2EFE9] mt-6">
              <Link
                href="/therapy"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#D8D4CC] hover:bg-[#FAF8F5] text-[#1C1E1B] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Learn About Therapy</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A8543E]" />
              </Link>
            </div>
          </div>

          {/* Pathway 2: RECLAIM */}
          <div className="bg-[#FAF8F5] rounded-2xl border-2 border-[#A8543E]/30 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#A8543E] text-white">
                  Signature Method
                </span>
                <Compass className="w-5 h-5 text-[#A8543E]" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                  The RECLAIM™ Method
                </h3>
                <p className="font-serif italic text-xs text-[#A8543E] mt-1">
                  From surviving your past to creating your future
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                A structured 6-stage recovery journey for capable adults ready to unpack survival patterns, dismantle people-pleasing, establish boundaries, and reconnect with their authentic voice.
              </p>

              <div className="space-y-1.5 pt-3 border-t border-[#ECE7DE] text-xs text-[#787672]">
                <p className="font-semibold text-[#1C1E1B] text-[11px] uppercase tracking-wider">
                  Available Formats:
                </p>
                <p>&bull; Self-Guided Comprehensive Workbook</p>
                <p>&bull; 8-Week Guided Cohort Experience</p>
                <p>&bull; Bespoke 1:1 Private Mentorship</p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#ECE7DE] mt-6">
              <Link
                href="/reclaim"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
              >
                <span>Explore RECLAIM™</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pathway 3: Coaching */}
          <div className="bg-white rounded-2xl border border-[#ECE7DE] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#EBF0EA] text-[#4E6551]">
                  Forward-Focused
                </span>
                <Target className="w-5 h-5 text-[#4E6551]" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                  Transformational Coaching
                </h3>
                <p className="font-serif italic text-xs text-[#4E6551] mt-1">
                  Where do you want to go next?
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                For individuals with baseline emotional stability who seek accountable guidance around leadership confidence, boundary mastery, career transitions, and bold aligned action.
              </p>

              <div className="space-y-1.5 pt-3 border-t border-[#F2EFE9] text-xs text-[#787672]">
                <p className="font-semibold text-[#1C1E1B] text-[11px] uppercase tracking-wider">
                  Primary Focus:
                </p>
                <p>&bull; Overcoming imposter syndrome &amp; fear of visibility</p>
                <p>&bull; Setting clean, unapologetic boundaries</p>
                <p>&bull; Action without perfectionist paralysis</p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#F2EFE9] mt-6">
              <Link
                href="/coaching"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#D8D4CC] hover:bg-[#FAF8F5] text-[#1C1E1B] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Learn About Coaching</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#4E6551]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Self-Assessment Helper: Which Pathway Fits? */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#ECE7DE] p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8543E]">
                Guidance Helper
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
                Which pathway is right for you right now?
              </h3>
            </div>
            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#D8D4CC] rounded-lg">
              <button
                onClick={() => setSelectedSelfCheck('therapy')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedSelfCheck === 'therapy'
                    ? 'bg-[#A8543E] text-white font-semibold'
                    : 'text-[#787672] hover:text-[#1C1E1B]'
                }`}
              >
                Therapy
              </button>
              <button
                onClick={() => setSelectedSelfCheck('reclaim')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedSelfCheck === 'reclaim'
                    ? 'bg-[#A8543E] text-white font-semibold'
                    : 'text-[#787672] hover:text-[#1C1E1B]'
                }`}
              >
                RECLAIM™
              </button>
              <button
                onClick={() => setSelectedSelfCheck('coaching')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedSelfCheck === 'coaching'
                    ? 'bg-[#A8543E] text-white font-semibold'
                    : 'text-[#787672] hover:text-[#1C1E1B]'
                }`}
              >
                Coaching
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#ECE7DE] space-y-3">
            {selectedSelfCheck === 'therapy' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#55534E] leading-relaxed">
                <p className="font-semibold text-[#1C1E1B]">
                  Choose Trauma Therapy if you are experiencing:
                </p>
                <p>
                  Acute emotional triggers, nightmares, traumatic flashbacks, unresolved childhood grief or abuse, deep-seated shame, or relationship crises that require clinical safety and EMDR processing.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/therapy"
                    className="text-xs font-semibold text-[#A8543E] hover:underline flex items-center gap-1"
                  >
                    <span>Read full Therapy details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/discovery-call?intent=therapy"
                    className="text-xs font-semibold text-[#787672] hover:text-[#1C1E1B]"
                  >
                    Book a free consultation &rarr;
                  </Link>
                </div>
              </div>
            )}

            {selectedSelfCheck === 'reclaim' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#55534E] leading-relaxed">
                <p className="font-semibold text-[#1C1E1B]">
                  Choose RECLAIM™ if you are ready to:
                </p>
                <p>
                  Work systematically through the 6 stages of adult recovery. You are functional and stable enough to reflect on your childhood survival habits, stop people-pleasing, set boundaries, and rediscover your authentic life beyond survival.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/reclaim"
                    className="text-xs font-semibold text-[#A8543E] hover:underline flex items-center gap-1"
                  >
                    <span>Read full RECLAIM™ framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/product/reclaim-workbook"
                    className="text-xs font-semibold text-[#787672] hover:text-[#1C1E1B]"
                  >
                    Explore the self-guided workbook &rarr;
                  </Link>
                </div>
              </div>
            )}

            {selectedSelfCheck === 'coaching' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#55534E] leading-relaxed">
                <p className="font-semibold text-[#1C1E1B]">
                  Choose Transformational Coaching if you:
                </p>
                <p>
                  Already have baseline emotional stability, have processed past trauma, and want focused, accountable guidance to conquer imposter syndrome, step into leadership, navigate career pivots, and take decisive action.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/coaching"
                    className="text-xs font-semibold text-[#4E6551] hover:underline flex items-center gap-1"
                  >
                    <span>Read full Coaching details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/discovery-call?intent=coaching"
                    className="text-xs font-semibold text-[#787672] hover:text-[#1C1E1B]"
                  >
                    Book a coaching discovery call &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. MY APPROACH (CLINICAL RIGOUR + LIVED EXPERIENCE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#ECE7DE]">
              <img
                src="/images/therapy_space_1790954295028.jpg"
                alt="Therapeutic consulting sanctuary with calm textures"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Clinical Rigour &bull; Real Empathy
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
                Having navigated profound personal grief alongside accredited trauma practice, I bring
                the grounded meeting point of lived experience and clinical rigor. We work together not to
                erase what happened, but to build a present and a future that is no longer controlled by fear.
              </p>
              <p className="font-serif italic text-lg text-[#1C1E1B]">
                &ldquo;Healing the past and building your future is a quiet, steady practice. We prioritise
                consistency, emotional safety and compassion over impossible perfection.&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1E1B] hover:text-[#A8543E] transition-colors"
              >
                <span>Read Nicola&apos;s Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE RECLAIM™ JOURNEY (PROGRESSIVE VISUAL STORYLINE) */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              The Transformation Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              The RECLAIM™ Journey
            </h2>
            <p className="text-base text-[#787672]">
              A continuous progression from survival adaptations into grounded, deliberate thriving.
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
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer ${
                    activeStage === idx
                      ? 'bg-white border-[#A8543E] shadow-sm'
                      : 'bg-white/60 border-[#ECE7DE] hover:bg-white text-[#787672]'
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
        </div>
      </section>

      {/* 6. SUPPORTING RESOURCES & LEMMY LOU BRIDGING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#ECE7DE] pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Books &amp; Tools
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B] mt-1">
              Resources for Adults &amp; Children
            </h2>
            <p className="text-sm text-[#787672] mt-1">
              Practical workbooks and children&apos;s emotional literacy tools to support healing at home.
            </p>
          </div>
          <Link
            href="/resources"
            className="text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431] flex items-center gap-1.5 self-start md:self-end"
          >
            <span>Browse All Resources</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Adult Resource: RECLAIM Workbook */}
          <div className="bg-white rounded-3xl border border-[#ECE7DE] p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FAF0EC] text-[#A8543E]">
                Adult Self-Guided Resource
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1E1B]">
                {featuredWorkbook.title}
              </h3>
              <p className="font-serif italic text-xs text-[#A8543E]">{featuredWorkbook.subtitle}</p>
              <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">
                {featuredWorkbook.description}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="font-serif text-2xl font-bold text-[#1C1E1B]">
                  {featuredWorkbook.price}
                </span>
                <span className="text-xs text-[#787672]">({featuredWorkbook.priceNote})</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
              <Link
                href={`/product/${featuredWorkbook.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>View Workbook Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Children's Collection: Lemmy Lou & Friends */}
          <div className="bg-[#eefaff] rounded-3xl border border-[#b8e2ff] p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f43d86] text-white">
                Children&apos;s Wellbeing &bull; Ages 4–10
              </span>
              <h3 className="font-black text-2xl sm:text-3xl text-[#0a8edb] tracking-tight">
                Lemmy Lou <span className="text-[#f43d86]">&amp; Friends ♥</span>
              </h3>
              <p className="text-xs font-bold text-[#f43d86]">
                Big feelings. Brighter days. Kinder minds.
              </p>
              <p className="text-xs sm:text-sm text-[#163a75]/80 leading-relaxed">
                Therapeutic stories and activity workbooks created by Nicola Benyahia MBE to help children understand feelings, build self-esteem, and learn they do not have to work things out alone.
              </p>
            </div>

            <div className="pt-4 border-t border-[#cadff3] flex items-center justify-between">
              <Link
                href="/lemmy-lou-and-friends"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a8edb] hover:bg-[#0878ba] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors"
              >
                <span>Explore Lemmy Lou Hub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONVERSION CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Taking the First Step
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B] leading-tight">
          You don’t have to stay where you are.
        </h2>

        <p className="text-base sm:text-lg text-[#55534E] max-w-2xl mx-auto leading-relaxed">
          Whether you need clinical trauma therapy, the structured RECLAIM™ recovery method, forward-focused
          coaching, or supportive self-guided resources, there is a clear, compassionate path forward.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/discovery-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg"
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
