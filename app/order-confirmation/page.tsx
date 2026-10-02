'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Calendar } from 'lucide-react';

interface StoredOrder {
  orderNumber: string;
  items: Array<{ product: { title: string; price: string }; quantity: number }>;
  total: number;
  customerName: string;
  customerEmail: string;
  date: string;
}

export default function OrderConfirmationPage() {
  const [order] = useState<StoredOrder | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('nb_last_order');
        if (stored) return JSON.parse(stored);
      } catch {
        // ignore
      }
    }
    return null;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="bg-white rounded-3xl border border-[#ECE7DE] p-8 md:p-12 shadow-sm space-y-8 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF0EA] text-[#4E6551] flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A8543E]">
            Order Confirmed (Prototype Demonstration)
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B]">
            Thank you for your order.
          </h1>
          <p className="text-sm text-[#55534E] max-w-lg mx-auto">
            Your prototype order has been registered in the system. Below is your demonstration order
            summary and resource onboarding overview.
          </p>
        </div>

        {/* Order Details Receipt Box */}
        {order && (
          <div className="text-left bg-[#FAF8F5] rounded-2xl border border-[#ECE7DE] p-6 space-y-4 max-w-xl mx-auto text-xs">
            <div className="flex justify-between border-b border-[#ECE7DE] pb-3">
              <span className="text-[#787672]">Order Reference:</span>
              <span className="font-mono font-bold text-[#1C1E1B]">{order.orderNumber}</span>
            </div>

            <div className="flex justify-between border-b border-[#ECE7DE] pb-3">
              <span className="text-[#787672]">Date:</span>
              <span className="text-[#1C1E1B]">{order.date}</span>
            </div>

            <div className="flex justify-between border-b border-[#ECE7DE] pb-3">
              <span className="text-[#787672]">Customer:</span>
              <span className="text-[#1C1E1B]">{order.customerName}</span>
            </div>

            <div className="flex justify-between border-b border-[#ECE7DE] pb-3">
              <span className="text-[#787672]">Email:</span>
              <span className="text-[#1C1E1B]">{order.customerEmail}</span>
            </div>

            <div className="space-y-2 pt-1">
              <span className="font-semibold text-[#1C1E1B]">Purchased Items:</span>
              <div className="divide-y divide-[#F2EFE9]">
                {order.items.map((item, i) => (
                  <div key={i} className="py-2 flex justify-between">
                    <span>
                      {item.product.title} (x{item.quantity})
                    </span>
                    <span className="font-serif font-semibold">{item.product.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#ECE7DE] flex justify-between font-serif font-bold text-sm text-[#1C1E1B]">
              <span>Total Demonstration Amount:</span>
              <span>£{order.total.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Digital Access Notice adhering to spec */}
        <div className="max-w-xl mx-auto p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl text-left text-xs text-[#55534E] space-y-1">
          <p className="font-semibold text-[#A8543E]">Integration Readiness Notice:</p>
          <p>
            In production, download links for digital editions are automatically dispatched via
            SendGrid/Postmark email and accessible via customer portal. For physical books, dispatch
            notifications will include Royal Mail tracking.
          </p>
        </div>

        {/* Navigation Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/resources"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Return to Resources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/discovery-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#D8D4CC] text-[#1C1E1B] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#A8543E]" />
            <span>Book a Discovery Call</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
