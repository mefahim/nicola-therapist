'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Calendar,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Lock,
} from 'lucide-react';

const CONTACT_FAQS = [
  {
    q: 'How quickly will I receive a response to my enquiry?',
    a: 'We respond to all confidential therapeutic and coaching enquiries within 24 to 48 business hours (Monday to Friday). If you prefer a direct spoken conversation, booking a 20-minute Discovery Call is the fastest way to speak with Nicola.',
  },
  {
    q: 'Is my message strictly confidential?',
    a: 'Yes. All communications are governed by BACP (British Association for Counselling and Psychotherapy) professional ethics and strict UK data protection regulations. Your information is never disclosed to third parties.',
  },
  {
    q: 'Are therapy and coaching sessions held online or in-person?',
    a: 'Most sessions are conducted via secure, encrypted video link (Zoom or Microsoft Teams), allowing clients from across the UK and internationally to access support. Selected in-person clinics are available in central consult rooms by advance arrangement.',
  },
  {
    q: 'Can I contact Nicola for keynote speaking or organisational workshops?',
    a: 'Yes. Nicola Benyahia MBE speaks internationally on trauma awareness, resilience, post-traumatic growth, and emotional literacy. Select "General Inquiry or Media" in the form above with details of your event.',
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const intentParam = searchParams.get('intent');

  const initialPathway = (intentParam && ['therapy', 'reclaim', 'coaching', 'lemmy-lou', 'general'].includes(intentParam))
    ? intentParam
    : 'therapy';

  const [form, setForm] = useState({
    name: '',
    email: '',
    pathway: initialPathway,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 md:space-y-36 pb-24 pt-8 md:pt-16">
      {/* 1. CONTACT — HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8543E]" />
            Connect &bull; Begin the Conversation
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1C1E1B] leading-tight">
            You don’t have to stay{' '}
            <span className="italic font-normal text-[#A8543E]">where you are.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#55534E] leading-relaxed">
            Whether you are exploring trauma therapy, ready for the RECLAIM™ programme, seeking
            forward-focused coaching, or inquiring about Lemmy Lou &amp; Friends resources, I invite you
            to reach out in whichever way feels safest for you.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/discovery-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Discovery Call</span>
            </Link>

            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
            >
              <span>Send a Written Message</span>
              <ArrowRight className="w-4 h-4 text-[#A8543E]" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. FOUR SUPPORT PATHWAYS */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Direct Pathways
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
              Four Ways to Connect
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pathway 1 */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF0EC] text-[#A8543E]">
                  Clinical 1:1
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">Trauma Therapy</h3>
                <p className="text-xs text-[#55534E] leading-relaxed">
                  Trauma-informed counselling and EMDR for childhood trauma, grief, PTSD and emotional overwhelm.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F2EFE9] mt-4">
                <Link
                  href="/therapy"
                  className="text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431] flex items-center gap-1"
                >
                  <span>Learn About Therapy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF0EC] text-[#A8543E]">
                  Signature Method
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">RECLAIM™</h3>
                <p className="text-xs text-[#55534E] leading-relaxed">
                  Our structured 6-stage recovery framework for capable adults ready to step out of survival mode.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F2EFE9] mt-4">
                <Link
                  href="/reclaim"
                  className="text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431] flex items-center gap-1"
                >
                  <span>Explore RECLAIM™</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF0EA] text-[#4E6551]">
                  Forward-Focused
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">Coaching</h3>
                <p className="text-xs text-[#55534E] leading-relaxed">
                  Forward-focused guidance around confidence, boundaries, visibility, and purposeful career transitions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F2EFE9] mt-4">
                <Link
                  href="/coaching"
                  className="text-xs font-semibold uppercase tracking-wider text-[#4E6551] hover:text-[#3d503f] flex items-center gap-1"
                >
                  <span>Explore Coaching</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pathway 4 */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#e5f5ff] text-[#0a8edb]">
                  Workbooks &amp; Tools
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">Resources</h3>
                <p className="text-xs text-[#55534E] leading-relaxed">
                  Psychological workbooks, journals, and Lemmy Lou &amp; Friends emotional wellbeing collections.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F2EFE9] mt-4">
                <Link
                  href="/resources"
                  className="text-xs font-semibold uppercase tracking-wider text-[#0a8edb] hover:text-[#0878ba] flex items-center gap-1"
                >
                  <span>Explore Resources</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT ENQUIRY FORM & PRACTICE INFO */}
      <section id="enquiry-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Practice Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Direct Practice Contact
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#1C1E1B]">Send a Discreet Enquiry</h2>
            <p className="text-sm text-[#55534E] leading-relaxed">
              Have a clinical question, media enquiry, or question about upcoming cohorts or resources?
              Send a note below and our practice will respond within two business days.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#ECE7DE] text-xs text-[#55534E]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#A8543E] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1E1B]">Direct Email</p>
                  <p className="text-[#787672]">enquiries@nicolabenyahia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#A8543E] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1E1B]">Practice Hours</p>
                  <p className="text-[#787672]">Monday to Thursday: 09:00 – 17:30 (UK Time)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#4E6551] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1E1B]">Confidentiality Assured</p>
                  <p className="text-[#787672]">
                    All correspondence is held in strict clinical confidentiality under BACP ethical codes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF0EC] rounded-2xl border border-[#E8C4B8] text-xs text-[#787672]">
              <p className="font-semibold text-[#A8543E] mb-1">Crisis Support Notice:</p>
              <p>
                If you are experiencing acute psychiatric crisis or emergency, please contact 999 (UK)
                or 111 (NHS) immediately, as we are unable to provide crisis coverage through this web form.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#ECE7DE] p-8 md:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#EBF0EA] text-[#4E6551] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">Message Received</h3>
                <p className="text-xs text-[#787672] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Nicola&apos;s practice will review your message and reply
                  promptly within 24 to 48 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#A8543E] underline hover:opacity-80 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#F2EFE9]">
                  <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">Your Details</h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#787672]">
                    <Lock className="w-3 h-3 text-[#4E6551]" />
                    <span>Strictly Confidential</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                    placeholder="yourname@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={form.pathway}
                    onChange={(e) => setForm({ ...form, pathway: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                  >
                    <option value="therapy">Trauma Therapy &amp; EMDR</option>
                    <option value="reclaim">The RECLAIM™ Method &amp; Workbooks</option>
                    <option value="coaching">Transformational Coaching</option>
                    <option value="lemmy-lou">Lemmy Lou &amp; Friends (Schools / Parents)</option>
                    <option value="general">General Inquiry or Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                    How can we help? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E] leading-relaxed"
                    placeholder="Tell us a little about what you are seeking or any specific questions you have..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Confidential Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#FAF8F5] border-y border-[#ECE7DE] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
              Helpful Clarity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
              Before Reaching Out
            </h2>
            <p className="text-sm text-[#787672]">
              Answers to common questions regarding consultation scheduling, session formats, and practice details.
            </p>
          </div>

          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, idx) => {
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
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-[#ECE7DE] rounded w-1/4 mx-auto" />
            <div className="h-10 bg-[#ECE7DE] rounded w-1/2 mx-auto" />
            <div className="h-4 bg-[#ECE7DE] rounded w-1/3 mx-auto" />
          </div>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
