'use client';

import React from 'react';
import Link from 'next/link';

export default function BookingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
      <div className="space-y-2 border-b border-[#ECE7DE] pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
          Practice Governance &bull; Consultations
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Booking &amp; Cancellation Policy
        </h1>
        <p className="text-xs text-[#787672]">Last Updated: October 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#55534E] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">1. Discovery Consultations</h2>
          <p>
            Initial 20-minute Discovery Calls are complimentary and held via private video conference.
            Should you need to reschedule, we kindly request at least 24 hours notice so the slot may be
            offered to another client on the waiting list.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">2. Clinical Therapy &amp; Coaching Appointments</h2>
          <p>
            Ongoing therapy and coaching sessions require a minimum of <strong>48 hours notice</strong> for cancellation or rescheduling. Appointments cancelled with less than 48 hours notice remain payable in full, as that clinical time has been exclusively reserved for you.
          </p>
        </section>

        <section className="p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-xs text-[#55534E]">
          <strong>Notice: </strong> [FINAL CLIENT / LEGAL COPY REQUIRED — Client practice terms regarding emergency medical cancellations and clinician illness policies.]
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
