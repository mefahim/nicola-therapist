'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1C1E1B] font-sans antialiased overflow-x-hidden selection:bg-[#FBE8DE] selection:text-[#A8543E]">
      {/* 1. HERO: "MEET NICOLA" — INTIMATE & EDITORIAL */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24">
        {/* Soft Peach Warmth Aura */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-b from-[#FDECE0]/50 via-[#FDF3EB]/30 to-transparent blur-3xl pointer-events-none -z-0 rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Intimate Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2947A]" />
                <span>Meet Nicola Benyahia MBE</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B] leading-[1.08] tracking-tight">
                My Story
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#A8543E] leading-snug">
                &ldquo;I do this work because I know what it feels like to live in survival mode—and what it takes to finally step out of it.&rdquo;
              </p>

              <div className="space-y-4 text-base sm:text-lg text-[#55534E] leading-relaxed font-normal">
                <p>
                  My journey as a trauma therapist, coach, and author did not begin in an academic lecture hall. It was forged in the fire of real lived adversity: childhood unpredictability, decades of high-functioning overachieving, profound personal tragedy, and the humbling discovery that you cannot think your way out of trauma.
                </p>
                <p>
                  Today, I offer a grounded, deeply compassionate sanctuary for capable adults who are ready to lay down the armor of survival, heal old wounds, and reclaim their authentic lives.
                </p>
              </div>

              {/* Fast Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/discovery-call"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </Link>

                <a
                  href="#story-beginnings"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-[#E8D4C8] text-[#1C1E1B] hover:bg-[#FDF6F0] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  <span>Walk Through My Journey</span>
                  <ArrowRight className="w-4 h-4 text-[#A8543E]" />
                </a>
              </div>
            </div>

            {/* Right: Large Personal Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#FDF1E8] to-[#FBE8DB] border border-[#F2D7C8] rounded-3xl -rotate-1 -z-10 shadow-xs" />
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#F2DDD0] bg-[#FAF5EE]">
                  <img
                    src="/images/nicola_portrait_1790954278431.jpg"
                    alt="Nicola Benyahia MBE"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DFBF75]">
                      Lived Experience &bull; Clinical Excellence
                    </p>
                    <p className="font-serif text-xl font-medium">Nicola Benyahia MBE</p>
                    <p className="text-xs text-white/80">
                      BACP Accredited Counsellor &bull; EMDR Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CONTINUOUS VISUAL MEMOIR */}
      <main id="story-beginnings" className="relative border-t border-[#F0DDD0] py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-36">

          {/* ========================================================
              CHAPTER 01: Early Life (TEXT + IMAGE)
             ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                01 &bull; Early Life &amp; Learning to Adapt
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
                Growing Up on High Alert
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#55534E] leading-relaxed max-w-3xl">
              <p>
                Growing up in environments where emotional safety was not guaranteed taught me early on how to read the room, anticipate tension, and become who I needed to be to keep the peace.
              </p>
              <p>
                Like many who experience childhood unpredictability or neglect, my earliest survival mechanism was adaptability. I learned how to minimise my own presence, anticipate unpredictable adult moods, and carry burdens that no child was ever meant to bear.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-[#A8543E] pt-1">
                &ldquo;Those adaptations protected me at the time, but they planted seeds of deep disconnection from who I actually was.&rdquo;
              </p>
            </div>

            {/* Large Story Image */}
            <div className="pt-4">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden shadow-lg border border-[#F2DDD0] bg-[#FFF9F5]">
                <img
                  src="/images/coaching_reflection_1790954347039.jpg"
                  alt="Thoughtful quiet reflection by natural window light"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white text-xs sm:text-sm font-medium">
                  The quiet vigilance of survival &bull; Learning to read the room
                </div>
              </div>
            </div>
          </section>

          {/* PULL QUOTE 01 */}
          <div className="py-4 text-center max-w-2xl mx-auto">
            <div className="h-px w-16 bg-[#E2947A] mx-auto mb-6" />
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#1C1E1B] leading-snug">
              &ldquo;When safety is unpredictable, adaptability becomes your quiet armor.&rdquo;
            </blockquote>
            <div className="h-px w-16 bg-[#E2947A] mx-auto mt-6" />
          </div>

          {/* ========================================================
              CHAPTER 02: Becoming a Prover (IMAGE + TEXT)
             ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                02 &bull; Becoming a Prover
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
                The Mask of Achievement
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Highlight Moment Left */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FFF9F5] to-[#FDF1E8] border border-[#F2DDD0] shadow-xs space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A8543E]">
                    The Survival Strategy
                  </span>
                  <p className="font-serif italic text-xl text-[#A8543E] leading-snug">
                    &ldquo;When you do not feel innately worthy simply for existing, you learn to prove your value through endless overfunctioning.&rdquo;
                  </p>
                  <p className="text-xs text-[#787672]">
                    The reliable one &bull; The hyper-capable provider
                  </p>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#55534E] leading-relaxed">
                <p>
                  In my young adulthood and early career, I became the reliable one. The person who had everything handled. Outwardly, I was achieving, stepping up, and providing answers for everyone around me.
                </p>
                <p>
                  Inwardly, I lived with the gnawing terror that if I ever paused, dropped a ball, or showed vulnerability, everything would collapse.
                </p>
                <p>
                  It was a life lived in chronic survival mode disguised as success. So many of the capable professionals, leaders, and caregivers I work with today know this exact private exhaustion.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================
              CHAPTER 03: Grief / Rupture (TEXT + IMAGE)
             ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                03 &bull; Grief &amp; Rupture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
                When the Fortress Shattered
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#55534E] leading-relaxed max-w-3xl">
              <p>
                A catastrophic life event shattered my illusions of control and forced an undeniable confrontation with grief, mortality, and the raw truth of human suffering.
              </p>
              <p>
                When profound tragedy struck my family, the carefully built fortress of competence was blown wide open. In the raw wreckage of grief, I could no longer manage, perform, or pretend. I had to sit in the ashes.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-[#A8543E] pt-1">
                &ldquo;It was during that dark, unvarnished period that I experienced what true trauma is—and discovered that you cannot simply think your way through heartbreak.&rdquo;
              </p>
            </div>

            {/* Large Atmospheric Image */}
            <div className="pt-4">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden shadow-lg border border-[#F2DDD0] bg-[#FFF9F5]">
                <img
                  src="/images/reclaim_horizon_1790954314695.jpg"
                  alt="Expansive dawn horizon over calm waters representing grief into light"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white text-xs sm:text-sm font-medium">
                  Sitting in the ashes &bull; The beginning of true recovery
                </div>
              </div>
            </div>
          </section>

          {/* PULL QUOTE 02 — MAJOR TURNING POINT */}
          <div className="py-6 text-center max-w-3xl mx-auto">
            <div className="h-px w-20 bg-[#E2947A] mx-auto mb-8" />
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#1C1E1B] leading-snug">
              &ldquo;Intellectualising your pain does not heal it. True recovery happens when the body finally feels safe enough to let down the armor.&rdquo;
            </blockquote>
            <div className="h-px w-20 bg-[#E2947A] mx-auto mt-8" />
          </div>

          {/* ========================================================
              CHAPTER 04: Accepting Support (IMAGE + TEXT)
             ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                04 &bull; Accepting Support
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
                Letting Myself Be Held
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image Left */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#F2DDD0] bg-[#FFF9F5]">
                  <img
                    src="/images/therapy_space_1790954295028.jpg"
                    alt="Serene, warm therapeutic holding space"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                    A safe, held container &bull; Without fixing or judgment
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#55534E] leading-relaxed">
                <p>
                  For someone who had spent decades rescuing others, letting myself be held, seen, and supported was the most terrifying and liberating act of my life.
                </p>
                <p>
                  Stepping into therapy as a client was humbling. I had to learn to allow another person into my pain without trying to fix them or reassure them that I was okay.
                </p>
                <p>
                  Through trauma-focused therapy and EMDR, I experienced the profound physiological shifts that occur when old memories are finally processed and released from the body. Survival was only half the journey; the true task was reclaiming myself.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================
              CHAPTER 05: Becoming a Therapist (TEXT + IMAGE)
             ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                05 &bull; Becoming a Therapist
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
                Lived Experience Meets Clinical Excellence
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#55534E] leading-relaxed max-w-3xl">
              <p>
                My qualification was not born in an ivory tower; it was forged through the alchemy of real suffering, rigorous clinical training, and professional accreditation.
              </p>
              <p>
                I dedicated years to clinical training, qualifying as an accredited counsellor with the British Association for Counselling and Psychotherapy (BACP), specializing in trauma and EMDR.
              </p>
              <p>
                In 2020, I was honoured to be awarded an MBE for services to families, community, and mental health. This recognition solidified my life&apos;s commitment: to bring trauma-informed safety, dignity, and real empowerment to every person who crosses my path.
              </p>
            </div>

            {/* Quiet Honour Note */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FFFDFB] to-[#FDF4EE] border border-[#F2DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8543E]">
                  Accredited Governance
                </span>
                <p className="font-serif text-lg font-semibold text-[#1C1E1B]">
                  BACP Accredited &bull; EMDR Practitioner &bull; MBE Recipient
                </p>
              </div>
              <span className="text-xs text-[#787672] sm:text-right">
                Adhering to strict professional ethics, continuous clinical supervision &amp; confidentiality
              </span>
            </div>
          </section>

          {/* ========================================================
              CHAPTER 06: Why RECLAIM & Lemmy Lou Exist (IMAGE + TEXT)
             ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
                06 &bull; Why This Work Exists
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
                Healing Adults, Protecting Children
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image Left */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#F2DDD0] bg-[#FFF9F5]">
                  <img
                    src="/images/lemmy_lou_hero_1790954333613.jpg"
                    alt="Children laughing together, representing emotional safety"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                    Kinder minds &bull; Brighter tomorrows
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#55534E] leading-relaxed">
                <p>
                  The RECLAIM™ framework was born out of seeing the identical pattern repeat across hundreds of adult clients: capable, deeply caring people still trapped in survival instincts. It offers a structured roadmap out of people-pleasing and self-abandonment into grounded self-trust.
                </p>
                <p>
                  And Lemmy Lou &amp; Friends was born out of the desire to give the next generation the emotional language, tools, and permission to feel, so they never grow up believing they have to face life alone.
                </p>
                <p className="font-serif italic text-lg text-[#A8543E]">
                  Helping adults reclaim what was lost, while protecting the emotional wellbeing of children.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* 3. HOW THIS SHAPES MY WORK & CLINICAL STANDARDS */}
      <section className="py-16 md:py-24 bg-[#1C1E1B] text-[#ECE7DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2C28] text-[#DFBF75] text-xs font-medium border border-[#3A3D37]">
              <Award className="w-3.5 h-3.5 text-[#DFBF75]" />
              <span>Professional Governance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
              Professional Credentials &amp; Standards
            </h2>
            <p className="text-sm text-[#A8A6A0]">
              Compassion without clinical rigor is unsafe. My practice is grounded in strict professional ethical frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#242622] rounded-2xl p-6 border border-[#343730] space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#DFBF75]" />
              <h3 className="font-serif text-lg font-semibold text-white">
                BACP Accreditation
              </h3>
              <p className="text-xs text-[#A8A6A0] leading-relaxed">
                Registered and accredited member of the British Association for Counselling and Psychotherapy, adhering strictly to the BACP Ethical Framework.
              </p>
            </div>

            <div className="bg-[#242622] rounded-2xl p-6 border border-[#343730] space-y-3">
              <Compass className="w-6 h-6 text-[#DFBF75]" />
              <h3 className="font-serif text-lg font-semibold text-white">
                EMDR Trauma Qualification
              </h3>
              <p className="text-xs text-[#A8A6A0] leading-relaxed">
                Fully trained in Eye Movement Desensitisation and Reprocessing (EMDR), providing evidence-informed treatment for PTSD, C-PTSD, and traumatic memories.
              </p>
            </div>

            <div className="bg-[#242622] rounded-2xl p-6 border border-[#343730] space-y-3">
              <HeartHandshake className="w-6 h-6 text-[#DFBF75]" />
              <h3 className="font-serif text-lg font-semibold text-white">
                Supervision &amp; Ethics
              </h3>
              <p className="text-xs text-[#A8A6A0] leading-relaxed">
                Regular professional clinical supervision, comprehensive indemnity insurance, and strict GDPR data privacy protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WAYS TO WORK WITH NICOLA & NEXT STEPS */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Next Steps
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          How We Can Work Together
        </h2>
        <p className="text-base text-[#55534E] max-w-xl mx-auto leading-relaxed">
          Whether you need clinical trauma therapy, structured self-guided recovery, forward-focused leadership coaching, or therapeutic books for children.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
          <Link
            href="/therapy"
            className="group p-6 rounded-2xl bg-white border border-[#E8D4C8] hover:border-[#A8543E] shadow-2xs hover:shadow-sm transition-all"
          >
            <span className="text-xs font-bold text-[#A8543E] uppercase tracking-wider">
              Clinical Support
            </span>
            <h3 className="font-serif text-xl font-semibold text-[#1C1E1B] mt-1 group-hover:text-[#A8543E] transition-colors">
              Trauma Therapy &amp; EMDR &rarr;
            </h3>
            <p className="text-xs text-[#55534E] mt-2 leading-relaxed">
              For childhood trauma, grief, anxiety, and deep nervous system regulation.
            </p>
          </Link>

          <Link
            href="/reclaim"
            className="group p-6 rounded-2xl bg-[#FFFDFB] border-2 border-[#E5B59C] shadow-2xs hover:shadow-sm transition-all"
          >
            <span className="text-xs font-bold text-[#A8543E] uppercase tracking-wider">
              Signature Method
            </span>
            <h3 className="font-serif text-xl font-semibold text-[#1C1E1B] mt-1 group-hover:text-[#A8543E] transition-colors">
              The RECLAIM™ Method &rarr;
            </h3>
            <p className="text-xs text-[#55534E] mt-2 leading-relaxed">
              6-stage journey to unpack people-pleasing and reclaim your authentic voice.
            </p>
          </Link>

          <Link
            href="/coaching"
            className="group p-6 rounded-2xl bg-white border border-[#E8D4C8] hover:border-[#4E6551] shadow-2xs hover:shadow-sm transition-all"
          >
            <span className="text-xs font-bold text-[#4E6551] uppercase tracking-wider">
              Forward-Focused
            </span>
            <h3 className="font-serif text-xl font-semibold text-[#1C1E1B] mt-1 group-hover:text-[#4E6551] transition-colors">
              Transformational Coaching &rarr;
            </h3>
            <p className="text-xs text-[#55534E] mt-2 leading-relaxed">
              Confidence, boundary mastery, and bold aligned life transitions.
            </p>
          </Link>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/discovery-call"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Confidential Discovery Call</span>
          </Link>

          <Link
            href="/lemmy-lou-and-friends"
            className="inline-flex items-center gap-2 px-6 py-4 bg-white border border-[#E8D4C8] text-[#1C1E1B] hover:bg-[#FDF6F0] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Explore Lemmy Lou &amp; Friends &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
