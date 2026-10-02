'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { useCart } from '@/lib/cart-context';
import { ShoppingBag, Menu, X, ArrowRight, Calendar } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'RECLAIM™', href: '/reclaim' },
  { name: 'Therapy', href: '/therapy' },
  { name: 'Coaching', href: '/coaching' },
  { name: 'Resources', href: '/resources' },
  { name: 'Lemmy Lou & Friends', href: '/lemmy-lou-and-friends' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const { totalCount, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu during render when pathname changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const isLemmyLouRoute = pathname.startsWith('/lemmy-lou-and-friends');

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 py-3 ${
        isLemmyLouRoute
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e3ebf5]'
          : 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#ECE7DE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Anchor */}
          <div className="flex-shrink-0">
            {isLemmyLouRoute ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/lemmy-lou-and-friends"
                  className="font-black text-xl sm:text-2xl text-[#0a8edb] tracking-tight hover:opacity-90 transition-opacity"
                >
                  Lemmy Lou <span className="text-[#f43d86]">&amp; Friends ♥</span>
                </Link>
                <span className="hidden sm:inline-block text-[11px] text-[#787672] border-l border-[#cad7e7] pl-3">
                  By Nicola Benyahia MBE
                </span>
              </div>
            ) : (
              <Logo />
            )}
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isSpecial = link.href === '/lemmy-lou-and-friends';

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap relative py-1 ${
                    isActive
                      ? isSpecial
                        ? 'text-[#f43d86] font-semibold'
                        : 'text-[#1C1E1B] font-semibold'
                      : isSpecial
                      ? 'text-[#0a8edb] hover:text-[#f43d86]'
                      : 'text-[#787672] hover:text-[#1C1E1B]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isSpecial ? 'bg-[#f43d86]' : 'bg-[#A8543E]'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Cart & Primary Discovery Call CTA) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-[#1C1E1B] hover:text-[#A8543E] transition-colors rounded-full hover:bg-[#ECE7DE]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8543E]"
              aria-label={`Shopping Cart with ${totalCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A8543E] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Desktop CTA Button */}
            <Link
              href="/discovery-call"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-xs ${
                isLemmyLouRoute
                  ? 'bg-[#f43d86] hover:bg-[#d92c73] text-white rounded-full'
                  : 'bg-[#A8543E] hover:bg-[#8D4431] text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Discovery Call</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C1E1B] hover:text-[#A8543E] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8543E]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-[#FBF9F5] border-t border-[#ECE7DE] overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-[11px] font-medium tracking-widest uppercase text-[#787672]">
              Menu Navigation
            </p>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const isSpecial = link.href === '/lemmy-lou-and-friends';

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? isSpecial
                          ? 'bg-[#ffe9f0] text-[#f43d86] font-semibold'
                          : 'bg-[#ECE7DE] text-[#1C1E1B] font-semibold'
                        : isSpecial
                        ? 'text-[#0a8edb] hover:bg-[#ffe9f0]/50'
                        : 'text-[#1C1E1B] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#ECE7DE] space-y-4">
            <Link
              href="/discovery-call"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book a Discovery Call
            </Link>

            <div className="text-center text-xs text-[#787672] space-y-1">
              <p>Nicola Benyahia MBE</p>
              <p className="text-[11px]">BACP Accredited Counsellor • EMDR Trauma Therapist</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
