'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
} from 'lucide-react';

const PATHWAYS = [
  {
    id: 'therapy',
    title: 'Trauma Therapy & EMDR',
    description: 'Clinical processing for childhood trauma, neglect, PTSD, anxiety, or acute distress.',
    recommended: 'Best if you need deeper psychological processing and somatic healing.',
  },
  {
    id: 'reclaim',
    title: 'The RECLAIM™ Method',
    description: 'Structured 6-stage recovery programme to step out of survival mode and reclaim self-trust.',
    recommended: 'Best if you are high-functioning but struggle with shame, people-pleasing, or boundary guilt.',
  },
  {
    id: 'coaching',
    title: 'Transformational Coaching',
    description: 'Forward-focused partnership for confidence, career transitions, and aligned action.',
    recommended: 'Best if you have emotional baseline stability and want focused future momentum.',
  },
  {
    id: 'unsure',
    title: 'I am Unsure (Help Me Decide)',
    description: 'We will use our 20-minute call to explore your situation and identify the safest match.',
    recommended: 'A gentle, confidential consultation with no obligation.',
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

export default function DiscoveryCallPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedPathway, setSelectedPathway] = useState('reclaim');
  const [selectedDate, setSelectedDate] = useState(AVAILABLE_DAYS[0].dateStr);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isBooked, setIsBooked] = useState(false);

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  if (isBooked) {
    const chosenPathway = PATHWAYS.find((p) => p.id === selectedPathway);

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
              <span className="font-semibold text-[#1C1E1B]">{chosenPathway?.title}</span>
            </div>
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

          <div className="max-w-lg mx-auto p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-left text-xs text-[#55534E] space-y-1">
            <p className="font-semibold text-[#A8543E]">What to expect next:</p>
            <p>
              In production, a calendar invite (.ics) and video consultation link are automatically emailed.
              Please ensure you are in a quiet, private space where you feel comfortable and uninterrupted.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => alert('Calendar invite (.ics) ready for live integration with Google Calendar / Outlook.')}
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8543E]">
          Complimentary Consultation
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
          Book Your 20-Minute Discovery Call
        </h1>
        <p className="text-sm text-[#55534E] max-w-xl mx-auto leading-relaxed">
          A confidential, gentle conversation with Nicola Benyahia MBE to discuss what you are facing,
          answer questions, and determine whether Therapy, RECLAIM™, or Coaching is the most supportive
          match for you.
        </p>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs">
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
            step >= 1 ? 'bg-[#A8543E] text-white font-semibold' : 'bg-[#FAF8F5] text-[#787672]'
          }`}
        >
          <span>1. Pathway</span>
        </div>
        <div className="h-px w-6 bg-[#ECE7DE]" />
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
            step >= 2 ? 'bg-[#A8543E] text-white font-semibold' : 'bg-[#FAF8F5] text-[#787672]'
          }`}
        >
          <span>2. Date &amp; Time</span>
        </div>
        <div className="h-px w-6 bg-[#ECE7DE]" />
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
            step >= 3 ? 'bg-[#A8543E] text-white font-semibold' : 'bg-[#FAF8F5] text-[#787672]'
          }`}
        >
          <span>3. Your Details</span>
        </div>
      </div>

      {/* Step 1: Pathway Selection */}
      {step === 1 && (
        <div className="bg-white rounded-3xl border border-[#ECE7DE] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-[#ECE7DE] pb-4">
            <h2 className="font-serif text-2xl font-semibold text-[#1C1E1B]">
              Select Your Area of Interest
            </h2>
            <p className="text-xs text-[#787672] mt-1">
              Choose the pathway that best describes the support you are looking for.
            </p>
          </div>

          <div className="space-y-4">
            {PATHWAYS.map((p) => (
              <label
                key={p.id}
                onClick={() => setSelectedPathway(p.id)}
                className={`block p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedPathway === p.id
                    ? 'border-[#A8543E] bg-[#FAF0EC]/40 shadow-xs'
                    : 'border-[#ECE7DE] hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="radio"
                    name="pathway"
                    checked={selectedPathway === p.id}
                    onChange={() => setSelectedPathway(p.id)}
                    className="mt-1 text-[#A8543E] focus:ring-[#A8543E]"
                  />
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-[#1C1E1B]">{p.title}</h3>
                    <p className="text-xs text-[#55534E] leading-relaxed">{p.description}</p>
                    <p className="text-[11px] font-medium text-[#A8543E] pt-1">{p.recommended}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
            >
              <span>Continue to Date &amp; Time</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Date & Time Selection */}
      {step === 2 && (
        <div className="bg-white rounded-3xl border border-[#ECE7DE] p-6 sm:p-10 shadow-xs space-y-8">
          <div className="border-b border-[#ECE7DE] pb-4 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#1C1E1B]">Select Date &amp; Time</h2>
              <p className="text-xs text-[#787672] mt-1">Times shown in United Kingdom (GMT / BST).</p>
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#787672] hover:text-[#1C1E1B] flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Change Pathway</span>
            </button>
          </div>

          {/* Date Picker row */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-[#1C1E1B] uppercase tracking-wider">
              1. Choose a Date
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {AVAILABLE_DAYS.map((item) => (
                <button
                  key={item.dateStr}
                  type="button"
                  onClick={() => setSelectedDate(item.dateStr)}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    selectedDate === item.dateStr
                      ? 'border-[#A8543E] bg-[#FAF0EC] shadow-xs'
                      : 'border-[#ECE7DE] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <p className="text-xs text-[#787672] uppercase font-medium">{item.day}</p>
                  <p className="font-serif text-2xl font-bold text-[#1C1E1B] my-0.5">{item.date}</p>
                  <p className="text-[10px] text-[#A8543E] font-medium">Available</p>
                </button>
              ))}
            </div>
          </div>

          {/* Time Picker row */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-[#1C1E1B] uppercase tracking-wider">
              2. Choose a Time Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                    selectedTime === slot
                      ? 'border-[#A8543E] bg-[#A8543E] text-white shadow-xs'
                      : 'border-[#ECE7DE] bg-white text-[#1C1E1B] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{slot}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#ECE7DE] flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="text-xs font-semibold uppercase tracking-wider text-[#787672] hover:text-[#1C1E1B]"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
            >
              <span>Continue to Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Contact Details & Confirmation */}
      {step === 3 && (
        <form
          onSubmit={handleCompleteBooking}
          className="bg-white rounded-3xl border border-[#ECE7DE] p-6 sm:p-10 shadow-xs space-y-6"
        >
          <div className="border-b border-[#ECE7DE] pb-4 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#1C1E1B]">Your Details</h2>
              <p className="text-xs text-[#787672] mt-1">
                Please provide your contact information so Nicola can send your secure consultation link.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs text-[#787672] hover:text-[#1C1E1B] flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          </div>

          {/* Booking summary chip */}
          <div className="p-4 bg-[#FAF8F5] border border-[#ECE7DE] rounded-xl flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-[#1C1E1B]">
                {PATHWAYS.find((p) => p.id === selectedPathway)?.title}
              </p>
              <p className="text-[#787672] mt-0.5">
                {selectedDate} at {selectedTime} (20 mins)
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs text-[#A8543E] hover:underline"
            >
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                placeholder="Sarah Jenkins"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                placeholder="sarah.jenkins@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
              placeholder="+44 7987 654321"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
              Briefly describe what brings you to this work (Optional)
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
              placeholder="e.g. Navigating chronic people-pleasing, interested in RECLAIM workbook or therapy..."
            />
          </div>

          <div className="pt-2">
            <p className="text-[11px] text-[#787672] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#4E6551] flex-shrink-0" />
              <span>
                Your privacy and details are strictly confidential, governed by the BACP Ethical Framework.
              </span>
            </p>
          </div>

          <div className="pt-4 border-t border-[#ECE7DE] flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs font-semibold uppercase tracking-wider text-[#787672] hover:text-[#1C1E1B]"
            >
              Back
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Confirm &amp; Schedule Call</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
