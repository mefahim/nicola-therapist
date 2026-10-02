'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    pathway: 'therapy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 md:space-y-36 pb-24 pt-8 md:pt-16">
      {/* 48. CONTACT — HERO */}
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
            to reach out.
          </p>

          <div className="pt-2">
            <Link
              href="/discovery-call"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Discovery Call</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOUR SUPPORT PATHWAYS */}
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
                  Clinical
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">Therapy</h3>
                <p className="text-xs text-[#55534E] leading-relaxed">
                  Trauma-informed counselling and EMDR for childhood trauma, grief, PTSD and emotional overwhelm.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F2EFE9] mt-4">
                <Link
                  href="/therapy"
                  className="text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431] flex items-center gap-1"
                >
                  <span>Enquire About Therapy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF0EA] text-[#4E6551]">
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
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] text-[#787672]">
                  Empowerment
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">Coaching</h3>
                <p className="text-xs text-[#55534E] leading-relaxed">
                  Forward-focused guidance around confidence, boundaries, visibility, and purposeful career transitions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F2EFE9] mt-4">
                <Link
                  href="/coaching"
                  className="text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431] flex items-center gap-1"
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

      {/* DIRECT ENQUIRY FORM & PRACTICE INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Practice Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-[#1C1E1B]">Direct Enquiries</h2>
            <p className="text-sm text-[#55534E] leading-relaxed">
              Have a general inquiry, media request, or question about upcoming cohorts or resources?
              Send a note below and our practice will respond within two business days.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#ECE7DE] text-xs text-[#55534E]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#A8543E] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1E1B]">Email Practice</p>
                  <p className="text-[#787672]">enquiries@nicolabenyahia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#4E6551] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1E1B]">Confidentiality Assured</p>
                  <p className="text-[#787672]">
                    All correspondence is kept strictly confidential under BACP ethical standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#ECE7DE] text-xs text-[#787672]">
              <p className="font-semibold text-[#1C1E1B] mb-1">Crisis Support Notice:</p>
              <p>
                If you are experiencing acute psychiatric crisis or emergency, please contact 999 (UK)
                or 111 (NHS) immediately, as we are unable to provide crisis coverage through this web
                form.
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
                <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">Message Sent</h3>
                <p className="text-xs text-[#787672] max-w-sm mx-auto">
                  Thank you for reaching out. Nicola’s team will review your message and reply promptly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#A8543E] underline hover:opacity-80"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#1C1E1B]">Send a Message</h3>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
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
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
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
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
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
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                    placeholder="Tell us a little about your question or context..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
