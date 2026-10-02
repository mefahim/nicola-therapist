'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  CreditCard,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    termsAccepted: false,
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '•••',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please review and accept the terms and refund policy to proceed.');
      return;
    }

    setIsProcessing(true);
    // Simulate prototype transaction safely
    setTimeout(() => {
      // Store temporary order summary for confirmation page
      const orderSummary = {
        orderNumber: 'NB-' + Math.floor(100000 + Math.random() * 900000),
        items: [...items],
        total: subtotal,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        date: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      };
      sessionStorage.setItem('nb_last_order', JSON.stringify(orderSummary));
      clearCart();
      setIsProcessing(false);
      router.push('/order-confirmation');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
            Checkout &amp; Order Finalisation
          </h1>
          <p className="text-xs text-[#787672] mt-1">
            Complete your details below to finalize your resource order.
          </p>
        </div>

        {/* Prototype notice badge */}
        <div className="p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#A8543E] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#55534E] leading-relaxed">
            <strong className="text-[#A8543E]">Design &amp; Client Prototype Notice: </strong>
            This is an interactive design demonstration. No real financial charges will be incurred.
            Live payment gateway integration (Stripe / PayPal) will be configured upon final client sign-off.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Customer Details & Payment */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Contact Information */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 space-y-4">
              <h2 className="font-serif text-lg font-semibold text-[#1C1E1B]">
                1. Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                  Email Address (for Digital Delivery &amp; Receipts) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                  placeholder="jane.smith@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                  placeholder="+44 7123 456789"
                />
              </div>
            </div>

            {/* 2. Shipping Address for Physical Books */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 space-y-4">
              <h2 className="font-serif text-lg font-semibold text-[#1C1E1B]">
                2. Shipping Address
              </h2>
              <div>
                <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                  placeholder="14 Meadow Way"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                    placeholder="London"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1C1E1B] mb-1">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D8D4CC] rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#A8543E]"
                    placeholder="SW1A 1AA"
                  />
                </div>
              </div>
            </div>

            {/* 3. Payment Method (Prototype) */}
            <div className="bg-white rounded-2xl border border-[#ECE7DE] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-semibold text-[#1C1E1B]">
                  3. Payment Details
                </h2>
                <div className="flex items-center gap-1.5 text-[11px] text-[#4E6551]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Encrypted Prototype SSL</span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#ECE7DE] rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1C1E1B] flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#A8543E]" />
                    Credit / Debit Card
                  </span>
                  <span className="text-[10px] text-[#787672]">Demo Card Pre-Filled</span>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    readOnly
                    value={formData.cardNumber}
                    className="w-full bg-white border border-[#D8D4CC] rounded-md px-3 py-2 text-xs text-[#787672] font-mono"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      readOnly
                      value={formData.cardExp}
                      className="w-full bg-white border border-[#D8D4CC] rounded-md px-3 py-2 text-xs text-[#787672] font-mono"
                    />
                    <input
                      type="text"
                      readOnly
                      value={formData.cardCvc}
                      className="w-full bg-white border border-[#D8D4CC] rounded-md px-3 py-2 text-xs text-[#787672] font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.termsAccepted}
                    onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                    className="mt-0.5 rounded border-[#D8D4CC] text-[#A8543E] focus:ring-[#A8543E]"
                  />
                  <span className="text-xs text-[#55534E] leading-relaxed">
                    I acknowledge that I have reviewed and agree to the{' '}
                    <Link href="/terms" className="underline text-[#A8543E]">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/refund-policy" className="underline text-[#A8543E]">
                      Refund Policy
                    </Link>
                    . I understand digital downloads are provided immediately.
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Complete Button */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#ECE7DE] p-6 space-y-6 shadow-xs sticky top-24">
            <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">Order Summary</h2>

            <div className="divide-y divide-[#F2EFE9] max-h-72 overflow-y-auto pr-1 space-y-3">
              {items.length === 0 ? (
                <p className="text-xs text-[#787672] py-4">No items currently in your bag.</p>
              ) : (
                items.map(({ product, quantity }) => (
                  <div key={product.id} className="pt-3 flex items-center justify-between text-xs">
                    <div className="flex-1 min-w-0 pr-3">
                      <p className="font-medium text-[#1C1E1B] truncate">{product.title}</p>
                      <p className="text-[11px] text-[#787672]">Qty: {quantity}</p>
                    </div>
                    <span className="font-serif font-semibold text-[#1C1E1B]">{product.price}</span>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t border-[#ECE7DE] space-y-2 text-xs text-[#55534E]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-[#4E6551]">Free Standard Delivery</span>
              </div>
              <div className="flex justify-between font-serif font-bold text-base text-[#1C1E1B] pt-2 border-t border-[#F2EFE9]">
                <span>Total Due</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing || items.length === 0}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#A8543E] hover:bg-[#8D4431] disabled:opacity-50 text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              {isProcessing ? (
                <span>Generating Order Confirmation...</span>
              ) : (
                <>
                  <span>Complete Demo Purchase</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="p-3 bg-[#FAF8F5] rounded-xl text-[11px] text-[#787672] space-y-1">
              <p className="font-medium text-[#1C1E1B]">What happens next?</p>
              <p>
                You will be redirected immediately to the confirmed order receipt page with direct digital access instructions and next steps.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
