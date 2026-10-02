'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalCount } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1E1B]/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F5] border-l border-[#ECE7DE] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#ECE7DE] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#A8543E]" />
              <h2 className="font-serif text-xl font-semibold text-[#1C1E1B]">Your Cart</h2>
              <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-[#EBF0EA] text-[#4E6551] font-medium">
                {totalCount} {totalCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#787672] hover:text-[#1C1E1B] transition-colors rounded-full hover:bg-[#ECE7DE]"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#ECE7DE] flex items-center justify-center text-[#787672]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1C1E1B]">Your cart is empty</h3>
                  <p className="text-xs text-[#787672] mt-1 max-w-xs mx-auto">
                    Explore our trauma-informed adult workbooks or Lemmy Lou children&apos;s resources.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#A8543E] rounded-md hover:bg-[#8D4431] transition-colors"
                  >
                    Browse Resources
                  </button>
                </div>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-white border border-[#ECE7DE] rounded-xl relative group"
                >
                  <div className="w-16 h-20 rounded-lg bg-[#ECE7DE] overflow-hidden flex-shrink-0 relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-medium text-sm text-[#1C1E1B] leading-tight truncate">
                          {product.title}
                        </h4>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-[#9C9A95] hover:text-[#A8543E] transition-colors p-1"
                          aria-label={`Remove ${product.title}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#787672] truncate mt-0.5">{product.subtitle}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F2EFE9]">
                      <div className="flex items-center border border-[#ECE7DE] rounded-md">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#787672] hover:text-[#1C1E1B] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold tabular-nums text-[#1C1E1B]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#787672] hover:text-[#1C1E1B] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-serif font-semibold text-sm text-[#1C1E1B]">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 bg-[#F7F4EE] border-t border-[#ECE7DE] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#787672]">Estimated Subtotal</span>
                <span className="font-serif text-lg font-semibold text-[#1C1E1B]">
                  £{subtotal.toFixed(2)}
                </span>
              </div>

              <p className="text-[11px] text-[#787672] leading-relaxed">
                Taxes calculated at checkout. Instant digital download and tracked postal delivery available.
              </p>

              <div className="space-y-2">
                <Link
                  href="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/cart"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center py-2 text-xs font-medium text-[#787672] hover:text-[#1C1E1B] transition-colors"
                >
                  View Full Cart Details
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
