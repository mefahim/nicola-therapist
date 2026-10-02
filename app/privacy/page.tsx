'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
      <div className="space-y-2 border-b border-[#ECE7DE] pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
          Legal &bull; Data Governance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#787672]">Last Updated: October 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#55534E] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">1. Overview &amp; Commitment</h2>
          <p>
            Nicola Benyahia MBE is dedicated to upholding the strictest privacy and confidentiality
            standards for all clients, visitors, and programme participants in accordance with the UK
            General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the British
            Association for Counselling and Psychotherapy (BACP) Ethical Framework.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">2. Information We Collect</h2>
          <p>We may collect and process the following categories of information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details provided via our discovery booking or contact forms (name, email, phone).</li>
            <li>Therapeutic intake questionnaires and session notes, held under special category data protection rules.</li>
            <li>Transactional details regarding purchases of workbooks or educational programmes.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">3. Therapeutic Confidentiality &amp; Limits</h2>
          <p>
            All information shared within clinical therapy sessions is confidential. There are rare legal and ethical exceptions where disclosure may be required by law or professional safeguarding guidelines (such as risk of imminent harm to self or others, or statutory legal obligations). These limits are discussed in full during initial consultation.
          </p>
        </section>

        <section className="p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-xs text-[#55534E]">
          <strong>Notice: </strong> [FINAL CLIENT / LEGAL COPY REQUIRED — Full statutory registration details, ICO registration numbers, and third-party data processor agreements to be finalized prior to public launch.]
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
