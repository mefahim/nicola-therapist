'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTS_CATALOG, ProductItem } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { LemmyLouBookCover } from '@/components/lemmy-lou/covers';
import {
  ShoppingBag,
  ArrowLeft,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  BookOpen,
  ArrowRight,
  PackageCheck,
  Check,
  ShieldCheck,
  Clock,
  HelpCircle,
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem, setIsOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const productId = params?.id as string;
  const product = PRODUCTS_CATALOG.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl font-semibold text-[#1C1E1B]">Resource Not Found</h1>
        <p className="text-sm text-[#787672]">The resource you are looking for does not exist.</p>
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A8543E] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Resources</span>
        </Link>
      </div>
    );
  }

  const isChildren = product.category === 'children';
  const relatedProducts = PRODUCTS_CATALOG.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={isChildren ? '/lemmy-lou-and-friends' : '/resources'}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#787672] hover:text-[#1C1E1B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {isChildren ? 'Lemmy Lou & Friends Collection' : 'Resources Hub'}</span>
          </Link>

          <span className="text-xs text-[#9C9A95]">
            Resource ID: <span className="font-mono text-[#1C1E1B]">{product.id}</span>
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual Container */}
          <div className="lg:col-span-6 space-y-4">
            {isChildren ? (
              <div className="max-w-md mx-auto">
                <LemmyLouBookCover
                  id={product.id}
                  title={product.title}
                  subtitle={product.subtitle}
                  themeColor={product.themeColor}
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#ECE7DE] bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#1C1E1B] shadow-xs">
                    {product.badge}
                  </div>
                )}
              </div>
            )}

            <div className="bg-[#FAF8F5] border border-[#ECE7DE] rounded-xl p-4 flex items-center justify-between text-xs text-[#787672]">
              <div className="flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-[#4E6551]" />
                <span>Format: {product.format}</span>
              </div>
              <span className="font-medium text-[#4E6551]">Instant Digital Access Included</span>
            </div>
          </div>

          {/* Details & Purchase Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  isChildren ? 'text-[#0a8edb]' : 'text-[#A8543E]'
                }`}
              >
                {isChildren ? 'Lemmy Lou & Friends Collection' : 'RECLAIM™ Signature Pathway'}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1E1B] leading-tight">
                {product.title}
              </h1>

              <p className="font-serif italic text-base text-[#787672]">{product.subtitle}</p>

              <div className="pt-2 flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-[#1C1E1B]">{product.price}</span>
                {product.priceNote && (
                  <span className="text-xs text-[#787672]">({product.priceNote})</span>
                )}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#55534E] leading-relaxed">
              {product.longDescription}
            </p>

            {/* Target Audience Box */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#ECE7DE] space-y-1">
              <p className="text-xs font-semibold text-[#1C1E1B] uppercase tracking-wider">
                Intended Audience:
              </p>
              <p className="text-xs text-[#55534E] leading-relaxed">{product.audience}</p>
            </div>

            {/* Purchase Controls & Micro-Feedback */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex items-center border border-[#D8D4CC] rounded-md bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm text-[#787672] hover:text-[#1C1E1B] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-semibold tabular-nums text-[#1C1E1B]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm text-[#787672] hover:text-[#1C1E1B] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm cursor-pointer ${
                    isChildren
                      ? 'bg-[#f43d86] hover:bg-[#d92c73] text-white rounded-full'
                      : 'bg-[#A8543E] hover:bg-[#8D4431] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>

                <Link
                  href="/checkout"
                  onClick={() => addItem(product, quantity)}
                  className="inline-flex items-center justify-center py-3 px-6 bg-[#1C1E1B] hover:bg-[#333] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  Buy Now
                </Link>
              </div>

              {added && (
                <div className="p-3 bg-[#EBF0EA] border border-[#4E6551]/30 rounded-xl flex items-center justify-between text-xs text-[#4E6551]">
                  <span>Item added to your shopping bag.</span>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="font-bold underline hover:opacity-80 cursor-pointer"
                  >
                    Open Bag &rarr;
                  </button>
                </div>
              )}
            </div>

            {/* Clinical / Ethical Safety Notice if provided */}
            {product.safetyNote && (
              <div className="p-4 bg-[#FAF0EC] border border-[#E8C4B8] rounded-xl flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#A8543E] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#55534E] leading-relaxed">
                  <strong>Important Notice: </strong>
                  {product.safetyNote}
                </p>
              </div>
            )}

            {/* Key Outcomes & What’s Inside */}
            <div className="pt-6 border-t border-[#ECE7DE] space-y-4">
              <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">
                Key Learning &amp; Breakthroughs
              </h3>
              <ul className="space-y-2">
                {product.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#55534E]">
                    <CheckCircle2 className="w-4 h-4 text-[#4E6551] flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contents Breakdown */}
            <div className="pt-4 border-t border-[#ECE7DE] space-y-3">
              <h3 className="font-serif text-xl font-semibold text-[#1C1E1B]">What is Included</h3>
              <ul className="space-y-1.5 text-xs text-[#787672]">
                {product.contents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#A8543E]">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 md:pt-24 border-t border-[#ECE7DE] space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1E1B]">
                Related Resources
              </h2>
              <Link
                href="/resources"
                className="text-xs font-semibold text-[#A8543E] hover:underline flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl border border-[#ECE7DE] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-xl font-semibold text-[#1C1E1B]">{rel.title}</h4>
                      <span className="font-serif font-bold text-[#1C1E1B]">{rel.price}</span>
                    </div>
                    <p className="text-xs text-[#787672] line-clamp-2">{rel.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#F2EFE9] flex items-center justify-between">
                    <Link
                      href={`/product/${rel.id}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#A8543E] hover:text-[#8D4431] flex items-center gap-1"
                    >
                      <span>View Resource</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
