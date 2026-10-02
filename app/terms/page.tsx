'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
      <div className="space-y-2 border-b border-[#ECE7DE] pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
          Legal &bull; Terms of Service
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-[#787672]">Last Updated: October 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#55534E] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">1. Introduction &amp; Scope</h2>
          <p>
            Welcome to the official practice website of Nicola Benyahia MBE. By browsing our website,
            purchasing workbooks, scheduling consultations, or enrolling in RECLAIM™ programmes, you agree
            to be bound by these Terms and Conditions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">2. Clinical vs. Coaching &amp; Self-Help Distinction</h2>
          <p>
            You explicitly acknowledge and understand that self-guided workbooks (including the RECLAIM™
            Workbook and Lemmy Lou &amp; Friends workbooks) and coaching programmes are educational and
            developmental resources. They do not constitute a clinical contract for psychotherapy or crisis
            intervention unless a formal 1:1 Therapeutic Agreement has been signed directly with Nicola
            Benyahia.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">3. Intellectual Property Rights</h2>
          <p>
            All content, artwork, frameworks (including RECLAIM™), Lemmy Lou &amp; Friends characters,
            illustrations, and written workbooks are the exclusive intellectual property of Nicola Benyahia
            MBE. Unauthorised reproduction, distribution, or commercial exploitation is strictly prohibited.
          </p>
        </section>

        <section className="p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-xs text-[#55534E]">
          <strong>Notice: </strong> [FINAL CLIENT / LEGAL COPY REQUIRED — Specific jurisdiction clauses, dispute arbitration clauses, and corporate terms to be verified by legal counsel.]
        </section>

        <div className="pt-4 border-t border-[#ECE7DE]">
          <Link href="/" className="text-xs font-semibold text-[#A8543E] hover:underline">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
