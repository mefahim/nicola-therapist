'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

const THERAPY_AREAS = [
  'Childhood trauma, neglect and emotional abuse',
  'Trauma and Post-Traumatic Stress (PTSD and Complex PTSD)',
  'Anxiety, acute panic, and nervous system overwhelm',
  'Emotional triggers, hypervigilance, and emotional flashbacks',
  'Low self-worth, chronic shame, and destructive self-criticism',
  'Relationship and attachment difficulties (fear of abandonment or engulfment)',
  'Bereavement, traumatic loss, and major shock events',
  'Workplace stress, executive burnout, and chronic overfunctioning',
  'Loss of identity, confidence crises, and major life transitions',
];

export default function TherapyPage() {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 29. THERAPY — HERO SECTION */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8543E]" />
              Clinical Psychotherapy &bull; EMDR &bull; Trauma Care
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C1E1B] leading-tight">
              A safe space to understand,{' '}
              <span className="italic font-normal text-[#A8543E] block mt-1">
                process and heal.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#55534E] leading-relaxed max-w-2xl">
              Trauma-informed counselling and Eye Movement Desensitisation and Reprocessing (EMDR) for
              adults needing compassionate therapeutic support, somatic safety, and deep trauma processing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact?intent=therapy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
              >
                <span>Enquire About Therapy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/discovery-call?intent=therapy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#A8543E]" />
                <span>Book a Discovery Call</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE]">
              <img
                src="/images/therapy_space_1790954295028.jpg"
                alt="Safe therapeutic consulting sanctuary"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider font-medium text-[#DFBF75]">
                  Confidential &bull; Ethical &bull; Accredited
                </p>
                <p className="font-serif italic text-sm mt-0.5">
                  “Healing cannot be rushed; it unfolds at the speed of safety.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THERAPY — AREAS OF SUPPORT */}
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
              Therapy provides a grounded clinical container for understanding how your past continues to
              show up in your emotional responses, relationships, and bodily sensations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THERAPY_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#ECE7DE] p-6 shadow-xs flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF0EC] text-[#A8543E] flex items-center justify-center flex-shrink-0 font-serif font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-sm font-medium text-[#1C1E1B] leading-relaxed pt-1">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30. THERAPY — CLINICAL APPROACH & EMDR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Integrative Methodology
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              Trauma-Informed &amp; Person-Centred Approach
            </h2>

            <div className="space-y-4 text-base text-[#55534E] leading-relaxed">
              <p>
                My therapeutic practice is strictly trauma-informed and person-centred. This means we
                do not treat you as broken or defective; we recognize that your symptoms are normal,
                intelligent responses to abnormal, overwhelming events.
              </p>
              <p>
                We do not rush into trauma memories before you have adequate emotional grounding and
                self-regulation tools. The pace and focus of therapy are always shaped around your
                safety, emotional readiness, and individual capacity.
              </p>
              <p>
                Where appropriate and clinically indicated, I integrate <strong>EMDR (Eye Movement
                Desensitisation and Reprocessing)</strong>—an evidence-informed therapeutic approach
                recommended by the World Health Organization and NICE guidelines for releasing stuck trauma
                from the nervous system.
              </p>
            </div>

            <div className="pt-2 border-t border-[#ECE7DE] flex items-center gap-4 text-xs text-[#787672]">
              <ShieldCheck className="w-5 h-5 text-[#A8543E]" />
              <span>Full compliance with BACP Ethical Framework for Good Practice</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-3xl p-8 md:p-10 border border-[#ECE7DE] space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
              What to Expect in Our Sessions
            </h3>

            <div className="space-y-4 text-sm text-[#55534E]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4E6551] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#1C1E1B]">1. Stabilization &amp; Safety First</h4>
                  <p className="text-xs text-[#787672] mt-0.5">
                    We establish reliable somatic grounding and resource anchors before exploring any distressing memories.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4E6551] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#1C1E1B]">2. Paced Trauma Processing (EMDR)</h4>
                  <p className="text-xs text-[#787672] mt-0.5">
                    Gentle, contained bilateral stimulation that allows the nervous system to reprocess stuck memories without re-traumatization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4E6551] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#1C1E1B]">3. Integration &amp; Real-Life Boundary Practice</h4>
                  <p className="text-xs text-[#787672] mt-0.5">
                    Connecting emotional shifts to everyday interactions, healthy boundaries, and self-trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#ECE7DE]">
              <p className="text-xs text-[#787672] leading-relaxed">
                Sessions are 50 minutes, held weekly or bi-weekly via encrypted online video or in clinic settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 31. THERAPY — FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Take the First Step Toward Therapeutic Support
        </h2>
        <p className="text-base text-[#55534E] max-w-xl mx-auto">
          You are welcome to schedule a confidential 20-minute Discovery Call to discuss your current
          challenges, ask questions, and see whether we feel like the right clinical match.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?intent=therapy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Enquire About Therapy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/discovery-call?intent=therapy"
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
