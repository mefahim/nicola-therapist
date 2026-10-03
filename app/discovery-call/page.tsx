'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  HeartHandshake,
  Compass,
  Target,
  HelpCircle,
  Lock,
  MessageSquare,
} from 'lucide-react';

const PATHWAYS = [
  {
    id: 'therapy',
    title: 'Trauma Therapy & EMDR',
    description: 'Clinical processing for childhood trauma, neglect, PTSD, anxiety, or acute distress.',
    recommended: 'Best if you need deeper psychological processing and somatic safety.',
    icon: HeartHandshake,
    badge: 'Clinical 1:1',
    accentColor: '#A8543E',
  },
  {
    id: 'reclaim',
    title: 'The RECLAIM™ Method',
    description: 'Structured 6-stage recovery programme to step out of survival mode and reclaim self-trust.',
    recommended: 'Best if you are high-functioning but struggle with shame, people-pleasing, or boundary guilt.',
    icon: Compass,
    badge: 'Signature Method',
    accentColor: '#A8543E',
  },
  {
    id: 'coaching',
    title: 'Transformational Coaching',
    description: 'Forward-focused partnership for confidence, career transitions, and aligned action.',
    recommended: 'Best if you have emotional baseline stability and want focused future momentum.',
    icon: Target,
    badge: 'Forward-Focused',
    accentColor: '#4E6551',
  },
  {
    id: 'unsure',
    title: 'I am Unsure (Help Me Decide)',
    description: 'We will use our 20-minute call to explore your situation and identify the safest match.',
    recommended: 'A gentle, confidential consultation with no obligation.',
    icon: HelpCircle,
    badge: 'Open Guidance',
    accentColor: '#DFBF75',
  },
];

const AVAILABLE_DAYS = [
  { dateStr: 'Tuesday, 14 Oct', day: 'Tue', date: '14' },
  { dateStr: 'Wednesday, 15 Oct', day: 'Wed', date: '15' },
  { dateStr: 'Thursday, 16 Oct', day: 'Thu', date: '16' },
  { dateStr: 'Monday, 20 Oct', day: 'Mon', date: '20' },
  { dateStr: 'Tuesday, 21 Oct', day: 'Tue', date: '21' },
];

const TIME_SLOTS = [
  '09:30 AM',
  '11:00 AM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
];

function DiscoveryCallContent() {
  const searchParams = useSearchParams();
  const intentParam = searchParams?.get('intent');
  const packageParam = searchParams?.get('package');

  const initialPathway = (intentParam && ['therapy', 'reclaim', 'coaching', 'unsure'].includes(intentParam))
    ? intentParam
    : (packageParam && packageParam.includes('coaching'))
    ? 'coaching'
    : 'reclaim';

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedPathway, setSelectedPathway] = useState<string>(initialPathway);
  const [selectedDate, setSelectedDate] = useState(AVAILABLE_DAYS[0].dateStr);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isBooked, setIsBooked] = useState(false);
  const [calendarAdded, setCalendarAdded] = useState(false);

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const chosenPathway = PATHWAYS.find((p) => p.id === selectedPathway) || PATHWAYS[1];

  if (isBooked) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-white rounded-3xl border border-[#ECE7DE] p-8 md:p-12 shadow-sm space-y-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF0EA] text-[#4E6551] flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
              Booking Scheduled (Prototype Demonstration)
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
              Your Discovery Call is booked.
            </h1>
            <p className="text-sm text-[#55534E] max-w-lg mx-auto">
              We look forward to meeting with you. Below are the confirmed details of your 20-minute
              consultation with Nicola Benyahia MBE.
            </p>
          </div>

          {/* Appointment Details Box */}
          <div className="text-left bg-[#FAF8F5] rounded-2xl border border-[#ECE7DE] p-6 space-y-3 max-w-lg mx-auto text-xs">
            <div className="flex justify-between border-b border-[#ECE7DE] pb-2.5">
              <span className="text-[#787672]">Consultation Date:</span>
              <span className="font-semibold text-[#1C1E1B]">{selectedDate}</span>
            </div>
            <div className="flex justify-between border-b border-[#ECE7DE] pb-2.5">
              <span className="text-[#787672]">Time:</span>
              <span className="font-semibold text-[#1C1E1B]">{selectedTime} (UK Time)</span>
            </div>
            <div className="flex justify-between border-b border-[#ECE7DE] pb-2.5">
              <span className="text-[#787672]">Pathway of Interest:</span>
              <span className="font-semibold text-[#1C1E1B]">{chosenPathway.title}</span>
            </div>
            {packageParam && (
              <div className="flex justify-between border-b border-[#ECE7DE] pb-2.5">
                <span className="text-[#787672]">Requested Package:</span>
                <span className="font-semibold text-[#1C1E1B]">
                  {packageParam === 'coaching-3m' ? '3-Month Boundary Accelerator' : '6-Month Leadership Immersion'}
                </span>
              </div>
            )}
            <div className="flex justify-between border-b border-[#ECE7DE] pb-2.5">
              <span className="text-[#787672]">Client Name:</span>
              <span className="font-semibold text-[#1C1E1B]">{form.fullName || 'Valued Client'}</span>
            </div>
            <div className="flex justify-between border-b border-[#ECE7DE] pb-2.5">
              <span className="text-[#787672]">Email Confirmation Sent To:</span>
              <span className="font-semibold text-[#1C1E1B]">{form.email || 'client@example.com'}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-[#787672]">Platform:</span>
              <span className="text-[#4E6551] font-semibold">Confidential Video Link (Zoom / Teams)</span>
            </div>
          </div>

          {calendarAdded && (
            <div className="p-3 bg-[#EBF0EA] border border-[#4E6551]/30 rounded-xl text-xs text-[#4E6551] font-medium max-w-lg mx-auto">
              Calendar invitation (.ics) simulated and ready for integration.
            </div>
          )}

          <div className="max-w-lg mx-auto p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-left text-xs text-[#55534E] space-y-1">
            <p className="font-semibold text-[#A8543E]">What to expect next:</p>
            <p>
              In production, a calendar invite (.ics) and video consultation link are automatically emailed.
              Please ensure you are in a quiet, private space where you feel comfortable and uninterrupted.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCalendarAdded(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Add to Calendar</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
            >
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* 1. ONBOARDING & EXPECTATION SETTING */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Complimentary Consultation
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Book Your 20-Minute Discovery Call
        </h1>
        <p className="text-base text-[#55534E] leading-relaxed">
          A calm, confidential conversation with Nicola Benyahia MBE to discuss what you are facing,
          answer your questions, and determine whether Therapy, RECLAIM™, or Coaching is the most supportive
          match for you.
        </p>

        {intentParam && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF0EC] border border-[#E8C4B8] text-xs text-[#A8543E] font-medium">
            <span>Pre-selected based on your journey:</span>
            <strong className="font-semibold underline capitalize">{intentParam}</strong>
          </div>
        )}
      </div>

      {/* What to Expect 3-Point Guidance Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#ECE7DE]">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8543E]">
            <span className="w-2 h-2 rounded-full bg-[#A8543E]" />
            <span>1. Safe Exploration</span>
          </div>
          <p className="text-xs text-[#55534E] leading-relaxed">
            We explore what challenges or patterns you are currently navigating, without pressure or rush.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8543E]">
            <span className="w-2 h-2 rounded-full bg-[#A8543E]" />
            <span>2. Ethical Match</span>
          </div>
          <p className="text-xs text-[#55534E] leading-relaxed">
            We clarify whether clinical therapy, the RECLAIM™ programme, or coaching is the safest, most effective fit.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A8543E]">
            <span className="w-2 h-2 rounded-full bg-[#A8543E]" />
            <span>3. Zero Sales Pressure</span>
          </div>
          <p className="text-xs text-[#55534E] leading-relaxed">
            No forced selling. Just human clarity and a clear, compassionate recommendation for your next step.
          </p>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs">
        <button
          onClick={() => setStep(1)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
            step === 1 ? 'bg-[#A8543E] text-white font-semibold' : 'bg-[#FAF8F5] text-[#787672] hover:text-[#1C1E1B]'
          }`}
        >
          <span>1. Pathway</span>
        </button>
        <div className="h-px w-6 bg-[#ECE7DE]" />
        <button
          onClick={() => {
            if (selectedPathway) setStep(2);
          }}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
            step === 2 ? 'bg-[#A8543E] text-white font-semibold' : 'bg-[#FAF8F5] text-[#787672] hover:text-[#1C1E1B]'
          }`}
        >
          <span>2. Date &amp; Time</span>
        </button>
        <div className="h-px w-6 bg-[#ECE7DE]" />
        <button
          onClick={() => {
            if (selectedPathway && selectedDate && selectedTime) setStep(3);
          }}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
            step === 3 ? 'bg-[#A8543E] text-white font-semibold' : 'bg-[#FAF8F5] text-[#787672] hover:text-[#1C1E1B]'
          }`}
        >
          <span>3. Your Details</span>
        </button>
      </div>

      {/* STEP 1: PATHWAY SELECTION */}
      {step === 1 && (
        <div className="bg-white rounded-3xl border border-[#ECE7DE] p-6 sm:p-10 space-y-8 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1E1B]">
              Step 1: What pathway would you like to discuss?
            </h2>
            <p className="text-xs sm:text-sm text-[#787672]">
              Select the area that best describes what you are looking for. If you are uncertain, choose &ldquo;I am Unsure&rdquo;.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PATHWAYS.map((p) => {
              const Icon = p.icon;
              const isSelected = selectedPathway === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPathway(p.id)}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'border-[#A8543E] bg-[#FAF0EC]/30 shadow-xs'
                      : 'border-[#ECE7DE] hover:border-[#D8D4CC] bg-white'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#ECE7DE] flex items-center justify-center text-[#A8543E]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] text-[#787672]">
                        {p.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">{p.title}</h3>
                      <p className="text-xs text-[#55534E] leading-relaxed mt-1">{p.description}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#F2EFE9] flex items-center justify-between text-xs">
                    <span className="text-[#787672] text-[11px] italic">{p.recommended}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-[#A8543E] bg-[#A8543E] text-white' : 'border-[#D8D4CC]'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
            >
              <span>Continue to Date &amp; Time</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: DATE & TIME SELECTION */}
      {step === 2 && (
        <div className="bg-white rounded-3xl border border-[#ECE7DE] p-6 sm:p-10 space-y-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F2EFE9] pb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1E1B]">
                Step 2: Choose a Consultation Time
              </h2>
              <p className="text-xs sm:text-sm text-[#787672] mt-0.5">
                All consultations are 20 minutes held via secure video call. Times are shown in UK Time (GMT/BST).
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded bg-[#FAF0EC] text-[#A8543E] self-start sm:self-center">
              {chosenPathway.title}
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1E1B] mb-3">
                1. Select a Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {AVAILABLE_DAYS.map((d) => (
                  <button
                    key={d.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(d.dateStr)}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedDate === d.dateStr
                        ? 'border-[#A8543E] bg-[#FAF0EC] text-[#1C1E1B] font-bold shadow-xs'
                        : 'border-[#ECE7DE] hover:border-[#D8D4CC] text-[#787672]'
                    }`}
                  >
                    <p className="text-[10px] uppercase font-bold text-[#A8543E]">{d.day}</p>
                    <p className="text-lg font-serif font-bold text-[#1C1E1B] my-0.5">{d.date}</p>
                    <p className="text-[10px] text-[#787672]">Oct 2026</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1E1B] mb-3">
                2. Select a 20-Minute Time Slot (UK Time)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                      selectedTime === time
                        ? 'border-[#A8543E] bg-[#A8543E] text-white shadow-xs'
                        : 'border-[#ECE7DE] hover:border-[#D8D4CC] text-[#55534E]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#F2EFE9]">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#787672] hover:text-[#1C1E1B]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Pathways</span>
            </button>

            <button
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-xs"
            >
              <span>Continue to Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CONTACT DETAILS & CONFIRMATION */}
      {step === 3 && (
        <form
          onSubmit={handleCompleteBooking}
          className="bg-white rounded-3xl border border-[#ECE7DE] p-6 sm:p-10 space-y-8 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F2EFE9] pb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1E1B]">
                Step 3: Your Confidential Information
              </h2>
              <p className="text-xs sm:text-sm text-[#787672] mt-0.5">
                We respect your privacy. Your information is strictly confidential and never shared.
              </p>
            </div>
            <div className="text-right text-xs">
              <span className="font-semibold text-[#1C1E1B]">{selectedDate}</span>
              <span className="text-[#787672] block">at {selectedTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1E1B]">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full px-4 py-3 pl-10 rounded-xl border border-[#D8D4CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8543E] focus:border-transparent bg-white"
                />
                <User className="w-4 h-4 text-[#9C9A95] absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1E1B]">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 pl-10 rounded-xl border border-[#D8D4CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8543E] focus:border-transparent bg-white"
                />
                <Mail className="w-4 h-4 text-[#9C9A95] absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1E1B]">
                Phone Number (Optional - for SMS reminder)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="+44 7123 456789"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 pl-10 rounded-xl border border-[#D8D4CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8543E] focus:border-transparent bg-white"
                />
                <Phone className="w-4 h-4 text-[#9C9A95] absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1E1B]">
                What would you most like Nicola to understand before our call? (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="A brief note about what you are seeking or any specific questions you have..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#D8D4CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8543E] focus:border-transparent bg-white leading-relaxed"
              />
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#ECE7DE] flex items-center gap-3 text-xs text-[#787672]">
            <Lock className="w-4 h-4 text-[#4E6551] flex-shrink-0" />
            <span>
              Your confidentiality is strictly protected. This booking is a prototype demonstration and does not commit you to any clinical or coaching contract.
            </span>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#F2EFE9]">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#787672] hover:text-[#1C1E1B]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Time Slots</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm 20-Minute Discovery Call</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function DiscoveryCallPage() {
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
      <DiscoveryCallContent />
    </Suspense>
  );
}
