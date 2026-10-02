'use client';

import React from 'react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
      <div className="space-y-2 border-b border-[#ECE7DE] pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
          Purchases &bull; Consumer Protection
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Refund Policy
        </h1>
        <p className="text-xs text-[#787672]">Last Updated: October 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#55534E] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">1. Digital Downloads &amp; Workbooks</h2>
          <p>
            In accordance with UK Consumer Contracts Regulations, digital products (such as instant PDF
            workbooks, printable packs, and digital programme access) that are accessed or downloaded
            immediately upon purchase are exempt from standard statutory cancellation rights once the
            download link has been supplied.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">2. Physical Books &amp; Workbooks</h2>
          <p>
            Physical items may be returned within 14 days of receipt if they remain in unread, unused, and
            pristine condition in their original packaging. Return shipping costs are the responsibility of
            the customer unless the item arrived damaged or defective.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">3. Guided Cohorts &amp; Mentorship</h2>
          <p>
            Cohort enrollments for the RECLAIM™ Guided Programme may be cancelled up to 7 calendar days
            prior to the first scheduled live session for a full refund minus an administrative processing
            fee. Once the cohort has commenced, fees are non-refundable due to strictly limited cohort
            capacity.
          </p>
        </section>

        <section className="p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-xs text-[#55534E]">
          <strong>Notice: </strong> [FINAL CLIENT / LEGAL COPY REQUIRED — Client merchant account refund process and returns address details.]
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
