'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, subtotal, totalCount } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-[#ECE7DE] pb-6 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1E1B]">
              Your Shopping Bag
            </h1>
            <p className="text-xs text-[#787672] mt-1">
              {totalCount} {totalCount === 1 ? 'item' : 'items'} in your order
            </p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-[#9C9A95] hover:text-[#A8543E] transition-colors"
            >
              Clear Bag
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#ECE7DE] p-12 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#787672]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1C1E1B]">Your bag is empty</h2>
            <p className="text-xs text-[#787672] max-w-sm mx-auto">
              Explore our psychological adult recovery workbooks or Lemmy Lou &amp; Friends children&apos;s resources.
            </p>
            <div className="pt-2">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Browse All Resources</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items List */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#ECE7DE] divide-y divide-[#F2EFE9] overflow-hidden">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                  <div className="flex gap-4 items-center flex-1 min-w-0">
                    <div className="w-20 h-24 rounded-lg bg-[#FAF8F5] border border-[#ECE7DE] overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A8543E]">
                        {product.category === 'children' ? 'Lemmy Lou & Friends' : 'RECLAIM™'}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-[#1C1E1B] truncate">
                        {product.title}
                      </h3>
                      <p className="text-xs text-[#787672] truncate mt-0.5">{product.subtitle}</p>
                      <p className="text-xs font-serif font-bold text-[#1C1E1B] mt-1">{product.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#D8D4CC] rounded-md bg-[#FAF8F5]">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="px-2.5 py-1 text-xs text-[#787672] hover:text-[#1C1E1B] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-semibold tabular-nums text-[#1C1E1B]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-2.5 py-1 text-xs text-[#787672] hover:text-[#1C1E1B] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(product.id)}
                      className="p-2 text-[#9C9A95] hover:text-[#A8543E] transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#ECE7DE] p-6 space-y-6 shadow-xs">
              <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">Order Summary</h2>

              <div className="space-y-3 text-xs text-[#55534E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1C1E1B]">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Digital Access Delivery</span>
                  <span className="text-[#4E6551] font-semibold">Included (Instant)</span>
                </div>
                <div className="flex justify-between">
                  <span>Physical Shipping</span>
                  <span className="text-[#787672]">Calculated at checkout</span>
                </div>

                <div className="pt-3 border-t border-[#ECE7DE] flex justify-between text-sm font-serif font-bold text-[#1C1E1B]">
                  <span>Total</span>
                  <span className="text-lg">£{subtotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <Link
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="p-3 bg-[#FAF8F5] rounded-lg text-[11px] text-[#787672] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4E6551] flex-shrink-0" />
                  <span>Secure 256-bit encrypted checkout experience</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
