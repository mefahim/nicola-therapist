'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Calendar, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C1E1B] text-[#ECE7DE] border-t border-[#2B2D29] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#2D302A]">
          {/* Brand Anchor (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 p-3 rounded-xl inline-block">
              <Logo subtext={true} />
            </div>
            <p className="text-sm font-serif italic text-[#D8D4CC] max-w-sm pt-2">
              “Your past shaped you. It doesn’t have to define what comes next.”
            </p>
            <p className="text-xs text-[#9C9A95] leading-relaxed max-w-md">
              Trauma-informed counselling, signature RECLAIM™ programmes, and transformational coaching
              to help you understand what protected you, reconnect with who you are, and build a life
              beyond survival mode.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#2A2C28] border border-[#3A3D37] text-xs text-[#DFBF75]">
                <ShieldCheck className="w-4 h-4 text-[#DFBF75]" />
                <span>Nicola Benyahia MBE • BACP Accredited Counsellor</span>
              </div>
            </div>
          </div>

          {/* Pathways / Work With Nicola */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
              Client Pathways
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D4CC]">
              <li>
                <Link href="/therapy" className="hover:text-white transition-colors">
                  Trauma Therapy &amp; EMDR
                </Link>
              </li>
              <li>
                <Link href="/reclaim" className="hover:text-white transition-colors">
                  The RECLAIM™ Method
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="hover:text-white transition-colors">
                  Transformational Coaching
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Adult Workbooks &amp; Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/lemmy-lou-and-friends"
                  className="text-[#DFBF75] hover:text-white transition-colors flex items-center gap-1 font-medium"
                >
                  Lemmy Lou &amp; Friends
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Exploration & Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
              Explore Practice
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D4CC]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Nicola’s Journey
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Enquiries &amp; Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Shopping Bag &amp; Orders
                </Link>
              </li>
              <li>
                <Link href="/discovery-call" className="hover:text-white transition-colors">
                  Schedule Discovery Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Action & Booking */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
              Discovery Session
            </h4>
            <p className="text-xs text-[#9C9A95] leading-relaxed">
              Begin with a confidential 20-minute consultation to identify the most supportive pathway
              for your current needs.
            </p>
            <div className="pt-1">
              <Link
                href="/discovery-call"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Discovery Call
              </Link>
            </div>
          </div>
        </div>

        {/* Safety & Clinical Disclaimer Panel */}
        <div className="py-6 border-b border-[#2D302A] text-[11px] text-[#787672] leading-relaxed">
          <p>
            <strong>Professional &amp; Ethical Notice:</strong> RECLAIM™ and self-guided resources are
            psychoeducational tools and do not substitute for individual psychotherapy, psychiatric care,
            or emergency crisis intervention. If you or someone you know is in acute distress, please
            reach out immediately to emergency services (UK 999 or 111, Samaritans 116 123) or your
            local crisis team.
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#787672]">
          <p>
            &copy; {new Date().getFullYear()} Nicola Benyahia MBE. All rights reserved. RECLAIM™ is a
            registered trademark.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-[#D8D4CC] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-[#D8D4CC] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/cookies" className="hover:text-[#D8D4CC] transition-colors">
              Cookie Policy
            </Link>
            <span>&bull;</span>
            <Link href="/booking-policy" className="hover:text-[#D8D4CC] transition-colors">
              Booking Policy
            </Link>
            <span>&bull;</span>
            <Link href="/refund-policy" className="hover:text-[#D8D4CC] transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
