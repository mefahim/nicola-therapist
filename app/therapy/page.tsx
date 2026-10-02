'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  Lock,
  Compass,
  Check,
} from 'lucide-react';

const THERAPY_AREAS = [
  {
    title: 'Childhood Trauma & Neglect',
    desc: 'Healing early emotional unavailability, unpredictable households, parentification, and emotional abuse.',
    icon: '01',
  },
  {
    title: 'PTSD & Complex Trauma (C-PTSD)',
    desc: 'De-escalating emotional flashbacks, persistent hypervigilance, somatic distress, and stuck traumatic memories.',
    icon: '02',
  },
  {
    title: 'Anxiety & Nervous System Overwhelm',
    desc: 'Regulating persistent dread, acute panic attacks, physical tension, and automated fight/flight/freeze reactions.',
    icon: '03',
  },
  {
    title: 'Shame & Chronic Self-Criticism',
    desc: 'Dismantling the corrosive belief that you are inherently flawed, unlovable, or burdensome to others.',
    icon: '04',
  },
  {
    title: 'Relationship & Attachment Wounds',
    desc: 'Resolving fears of abandonment or engulfment, difficulty trusting partners, and relational boundary difficulties.',
    icon: '05',
  },
  {
    title: 'Traumatic Grief, Shock & Bereavement',
    desc: 'Navigating devastating personal loss, life-altering shocks, and processing unresolved bereavement with care.',
    icon: '06',
  },
];

const THERAPY_FAQS = [
  {
    q: 'How does EMDR actually work in session?',
    a: 'EMDR (Eye Movement Desensitisation and Reprocessing) uses bilateral stimulation (such as side-to-side eye movements, auditory tones, or gentle tactile tapping) to stimulate the brain’s natural information processing system. It helps unstick distressing trauma memories so they can be integrated into your autobiography without triggering overwhelming somatic or emotional panic.',
  },
  {
    q: 'Will I have to recount everything that happened in detail?',
    a: 'No. Trauma therapy with Nicola never forces you to recount horrific details before you are ready. In fact, EMDR allows the brain to process traumatic memory networks without requiring you to verbalize every single detail aloud.',
  },
  {
    q: 'How do I know if I need Therapy rather than Coaching or RECLAIM™?',
    a: 'If you are experiencing active trauma flashbacks, panic, severe emotional triggers, or deep unresolved childhood pain, Therapy is the appropriate, safe clinical container. In your 20-minute Discovery Call, Nicola will gently help you determine the safest fit.',
  },
  {
    q: 'How are sessions scheduled and what is the cadence?',
    a: 'Clinical sessions are 50 minutes, usually held weekly or fortnightly via encrypted video call or in private consulting rooms. We evaluate progress collaboratively so you always know where you are in your therapeutic journey.',
  },
];

export default function TherapyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 1. THERAPY HERO SECTION */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8543E]" />
              Clinical Trauma Psychotherapy &bull; EMDR
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C1E1B] leading-tight">
              A safe space to understand,{' '}
              <span className="italic font-normal text-[#A8543E] block mt-1">
                process and heal.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#55534E] leading-relaxed max-w-2xl font-normal">
              Trauma-informed counselling and Eye Movement Desensitisation and Reprocessing (EMDR) for
              adults needing compassionate therapeutic support, somatic safety, and deep trauma processing
              with an accredited specialist.
            </p>

            {/* Clear Primary & Secondary Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/discovery-call?intent=therapy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>How Therapy Works</span>
                <ArrowDown className="w-4 h-4 text-[#A8543E]" />
              </a>
            </div>

            {/* Credentials Banner */}
            <div className="pt-4 border-t border-[#ECE7DE] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#787672]">
              <div className="flex items-center gap-1.5 text-[#1C1E1B] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#A8543E]" />
                <span>Nicola Benyahia MBE</span>
              </div>
              <span>&bull;</span>
              <span>BACP Accredited Counsellor</span>
              <span>&bull;</span>
              <span>EMDR UK Practitioner</span>
              <span>&bull;</span>
              <span className="text-[#4E6551] font-medium">100% Confidential</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE]">
              <img
                src="/images/therapy_space_1790954295028.jpg"
                alt="Safe therapeutic consulting sanctuary with warm natural light"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider font-medium text-[#DFBF75]">
                  Confidential &bull; Ethical &bull; Grounded
                </p>
                <p className="font-serif italic text-sm mt-0.5">
                  &ldquo;Healing cannot be rushed; it unfolds at the speed of safety.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT THERAPY CAN HELP WITH (PRESENTATIONS) */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Clinical Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              What Therapy Can Support
            </h2>
            <p className="text-base text-[#787672]">
              Therapy provides a confidential container for understanding how your past continues to
              show up in your emotional reactions, relationships, and bodily tension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THERAPY_AREAS.map((area) => (
              <div
                key={area.icon}
                className="bg-white rounded-2xl border border-[#ECE7DE] p-7 shadow-xs space-y-3 flex flex-col justify-between hover:border-[#D8D4CC] transition-colors"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF0EC] text-[#A8543E] flex items-center justify-center font-serif font-bold text-sm">
                    {area.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Intentional Next Step Bridge */}
          <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 max-w-2xl mx-auto text-center space-y-3">
            <p className="text-xs sm:text-sm text-[#55534E]">
              Recognise these patterns in your life? Understand how our clinical framework brings safety to them.
            </p>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431]"
            >
              <span>Explore How the Therapeutic Process Works</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. HOW THERAPY WORKS (THE 3-PHASE CLINICAL CONTAINER) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Person-Centred &bull; Evidence-Informed
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              A Trauma-Informed Approach Shaped Around You
            </h2>

            <div className="space-y-4 text-base text-[#55534E] leading-relaxed">
              <p>
                My therapeutic practice is strictly trauma-informed and person-centred. We do not treat you
                as broken or defective; we recognize that your symptoms are normal, intelligent responses
                to abnormal, overwhelming events.
              </p>
              <p>
                We do not rush into trauma memories before you have adequate emotional grounding and
                self-regulation tools. The pace and focus of therapy are always shaped around your
                safety, emotional readiness, and individual capacity.
              </p>
              <p>
                Where appropriate and clinically indicated, I integrate <strong>EMDR (Eye Movement
                Desensitisation and Reprocessing)</strong>—an evidence-informed therapeutic approach
                recommended by NICE and the WHO for releasing stuck trauma from the nervous system.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-3xl p-8 md:p-10 border border-[#ECE7DE] space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
              The Therapeutic Journey: Three Clear Phases
            </h3>

            <div className="space-y-5 text-sm text-[#55534E]">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#FAF0EC] text-[#A8543E] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1E1B]">Stabilization &amp; Safety First</h4>
                  <p className="text-xs text-[#787672] mt-0.5 leading-relaxed">
                    We establish reliable somatic grounding, nervous system mapping, and internal safe resources before exploring any distressing memories.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#FAF0EC] text-[#A8543E] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1E1B]">Paced Trauma Processing (EMDR)</h4>
                  <p className="text-xs text-[#787672] mt-0.5 leading-relaxed">
                    Gentle, contained bilateral stimulation that allows the nervous system to reprocess stuck memories without re-traumatization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#FAF0EC] text-[#A8543E] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1E1B]">Integration &amp; Everyday Boundary Practice</h4>
                  <p className="text-xs text-[#787672] mt-0.5 leading-relaxed">
                    Connecting emotional shifts to everyday interactions, healthy boundaries, and self-trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#ECE7DE] flex items-center justify-between text-xs text-[#787672]">
              <span>50-min confidential sessions</span>
              <span className="font-semibold text-[#4E6551]">Online UK &amp; International</span>
            </div>
          </div>
        </div>

        {/* Intentional Next Step Bridge */}
        <div className="text-center pt-2">
          <a
            href="#is-it-right"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431]"
          >
            <span>Is Clinical Therapy Right For You? Check Suitability</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 4. IS THERAPY RIGHT FOR ME? (DECISION CLARITY) */}
      <section id="is-it-right" className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Suitability &amp; Alignment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
              Is Clinical Therapy Right for You?
            </h2>
            <p className="text-base text-[#787672] max-w-2xl mx-auto">
              We uphold strict ethical standards. Here is how to know if Therapy is the safest container for you right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Yes: Therapy */}
            <div className="bg-white rounded-2xl border-2 border-[#A8543E]/30 p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8543E]">
                <CheckCircle2 className="w-4 h-4 text-[#A8543E]" />
                <span>Therapy is recommended if:</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#55534E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>You experience persistent anxiety, nightmares, panic, or emotional numbness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>Memories of childhood neglect or trauma intrude into your daily life.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>You need a qualified clinician to guide EMDR processing safely.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8543E] font-bold">&bull;</span>
                  <span>You want a safe, private space to process grief or deep shame.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#F2EFE9]">
                <Link
                  href="/discovery-call?intent=therapy"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  <span>Book Therapy Discovery Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* When RECLAIM or Coaching fits better */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#787672]">
                <Compass className="w-4 h-4 text-[#4E6551]" />
                <span>You might prefer RECLAIM™ or Coaching if:</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#55534E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#4E6551] font-bold">&bull;</span>
                  <span>You already have emotional stability and want structured adult recovery exercises (Choose RECLAIM™).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4E6551] font-bold">&bull;</span>
                  <span>You want forward-focused accountability for career pivots, leadership, or boundary enforcement (Choose Coaching).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4E6551] font-bold">&bull;</span>
                  <span>You prefer self-paced workbooks over clinical psychotherapy.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
                <Link
                  href="/reclaim"
                  className="text-xs font-semibold text-[#A8543E] hover:underline"
                >
                  Explore RECLAIM™ &rarr;
                </Link>
                <Link
                  href="/coaching"
                  className="text-xs font-semibold text-[#4E6551] hover:underline"
                >
                  Explore Coaching &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMON THERAPY QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            Therapy Clarity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
            Frequently Asked Questions About Therapy
          </h2>
        </div>

        <div className="space-y-4">
          {THERAPY_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ECE7DE] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5]/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-medium text-[#1C1E1B]">{faq.q}</span>
                  <span className="text-[#A8543E] p-1 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#55534E] leading-relaxed border-t border-[#F2EFE9]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FINAL CONTEXTUAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Taking the First Step
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Begin With a Confidential Discovery Call
        </h2>
        <p className="text-base text-[#55534E] max-w-xl mx-auto">
          You are welcome to schedule a confidential 20-minute Discovery Call to discuss your current
          challenges, ask questions, and see whether we feel like the right clinical match.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/discovery-call?intent=therapy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Discovery Call</span>
          </Link>
          <Link
            href="/contact?intent=therapy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Enquire in Writing</span>
            <ArrowRight className="w-4 h-4 text-[#A8543E]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
