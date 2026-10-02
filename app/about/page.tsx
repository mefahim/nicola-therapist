'use client';

import React from 'react';
import Link from 'next/link';
import { ABOUT_STORY_CHAPTERS, SITE_INFO } from '@/lib/data';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass,
  Target,
  Sparkles,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 1. ABOUT HERO */}
      <section className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Meet Nicola Benyahia MBE
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B] leading-tight">
              My Story
            </h1>

            <p className="font-serif italic text-xl md:text-2xl text-[#A8543E] leading-snug">
              &ldquo;I do this work because I know what it feels like to live in survival mode—and what it takes
              to finally step out of it.&rdquo;
            </p>

            <p className="text-base text-[#55534E] leading-relaxed">
              My journey as a trauma therapist and coach did not begin in an academic lecture hall. It was
              forged through childhood adversity, years of high-functioning survival, devastating personal loss,
              and the life-altering realization that intellectualizing your pain is not the same as healing it.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/discovery-call"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </Link>
              <a
                href="#chapters"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Read the Chapters</span>
                <ArrowRight className="w-4 h-4 text-[#A8543E]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-[#ECE7DE] bg-[#ECE7DE]">
              <img
                src="/images/nicola_portrait_1790954278431.jpg"
                alt="Nicola Benyahia MBE"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#DFBF75]">
                  Lived Adversity &bull; Accredited Excellence
                </p>
                <h3 className="font-serif text-xl font-medium">Nicola Benyahia MBE</h3>
                <p className="text-xs text-white/80">
                  BACP Accredited Counsellor &bull; EMDR Trauma Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY CHAPTERS (NARRATIVE FLOW) */}
      <section id="chapters" className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              The Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              From Survival to Calling
            </h2>
            <p className="text-sm text-[#787672]">
              The experiences that shaped my practice, my clinical values, and the creation of RECLAIM™.
            </p>
          </div>

          {/* Chapters Timeline List */}
          <div className="space-y-10">
            {ABOUT_STORY_CHAPTERS.map((item) => (
              <div
                key={item.chapter}
                className="bg-white rounded-2xl border border-[#ECE7DE] p-8 md:p-10 shadow-xs space-y-4 relative"
              >
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl font-bold text-[#A8543E]">
                    {item.chapter}
                  </span>
                  <div className="h-4 w-px bg-[#ECE7DE]" />
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#1C1E1B]">
                    {item.title}
                  </h3>
                </div>

                <p className="font-serif italic text-base text-[#A8543E] pl-6 border-l-2 border-[#A8543E]/40">
                  &ldquo;{item.summary}&rdquo;
                </p>

                <p className="text-sm md:text-base text-[#55534E] leading-relaxed pt-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROFESSIONAL GOVERNANCE & INTEGRITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1E1B] text-[#ECE7DE] rounded-3xl p-8 md:p-14 border border-[#2B2D29]">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2C28] text-[#DFBF75] text-xs font-medium border border-[#3A3D37]">
              <Award className="w-3.5 h-3.5 text-[#DFBF75]" />
              <span>Accredited Clinical Governance</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
              Professional Credentials &amp; Standards
            </h2>

            <p className="text-sm sm:text-base text-[#D8D4CC] leading-relaxed">
              Every therapeutic and coaching engagement is bound by strict ethical standards, continuous
              professional supervision, and accredited clinical frameworks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left pt-4">
              <div className="p-4 rounded-xl bg-[#252724] border border-[#323530]">
                <p className="text-xs text-[#DFBF75] font-semibold uppercase tracking-wider">
                  Honour
                </p>
                <h4 className="font-serif text-lg text-white font-medium mt-1">
                  Nicola Benyahia MBE
                </h4>
                <p className="text-[11px] text-[#9C9A95] mt-1">
                  Member of the Order of the British Empire for services to mental health &amp; families.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#252724] border border-[#323530]">
                <p className="text-xs text-[#DFBF75] font-semibold uppercase tracking-wider">
                  Clinical Body
                </p>
                <h4 className="font-serif text-lg text-white font-medium mt-1">
                  BACP Accredited
                </h4>
                <p className="text-[11px] text-[#9C9A95] mt-1">
                  Accredited Member of the British Association for Counselling and Psychotherapy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#252724] border border-[#323530]">
                <p className="text-xs text-[#DFBF75] font-semibold uppercase tracking-wider">
                  Trauma Specialism
                </p>
                <h4 className="font-serif text-lg text-white font-medium mt-1">
                  EMDR Practitioner
                </h4>
                <p className="text-[11px] text-[#9C9A95] mt-1">
                  Specialised in Eye Movement Desensitisation and Reprocessing trauma protocols.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#252724] border border-[#323530]">
                <p className="text-xs text-[#DFBF75] font-semibold uppercase tracking-wider">
                  Education &amp; Advocacy
                </p>
                <h4 className="font-serif text-lg text-white font-medium mt-1">
                  Mental Health Trainer
                </h4>
                <p className="text-[11px] text-[#9C9A95] mt-1">
                  Trainer &amp; public advocate on emotional literacy and trauma-informed systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WAYS TO WORK TOGETHER / CONTEXTUAL NEXT STEPS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            Next Steps
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
            Explore Ways to Work With Nicola
          </h2>
          <p className="text-base text-[#55534E] max-w-xl mx-auto">
            Whether you are looking for clinical trauma therapy, the RECLAIM™ programme, or forward-focused
            transformational coaching, our journey begins with an open conversation.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/discovery-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Discovery Call</span>
          </Link>
          <Link
            href="/therapy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Explore Therapy</span>
          </Link>
          <Link
            href="/reclaim"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Explore RECLAIM™</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
