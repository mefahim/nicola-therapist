'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { useCart } from '@/lib/cart-context';
import {
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Calendar,
  ChevronDown,
  Sparkles,
  HeartHandshake,
  Compass,
  Target,
} from 'lucide-react';

const PATHWAYS = [
  {
    name: 'Trauma Therapy & EMDR',
    href: '/therapy',
    description: 'Childhood trauma, grief & nervous system regulation',
    icon: HeartHandshake,
  },
  {
    name: 'The RECLAIM™ Method',
    href: '/reclaim',
    description: '6-stage framework to step out of survival mode',
    icon: Compass,
  },
  {
    name: 'Transformational Coaching',
    href: '/coaching',
    description: 'Confidence, clean boundaries & aligned action',
    icon: Target,
  },
];

export function Header() {
  const pathname = usePathname();
  const { totalCount, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menus during render when pathname changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isLemmyLouRoute = pathname.startsWith('/lemmy-lou-and-friends');
  const isPathwayActive = ['/therapy', '/reclaim', '/coaching'].includes(pathname);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 py-3 ${
        isLemmyLouRoute
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e3ebf5]'
          : 'bg-[#FDFBF8]/95 backdrop-blur-md border-b border-[#F2E5DC] shadow-[0_1px_3px_rgba(226,148,122,0.05)]'
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
                <Link
                  href="/"
                  className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-[#787672] hover:text-[#A8543E] ml-2 border border-[#cad7e7] px-2 py-0.5 rounded-full transition-colors"
                >
                  <span>&larr; Nicola Benyahia Practice</span>
                </Link>
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
            <Link
              href="/"
              className={`transition-colors py-1 ${
                pathname === '/' ? 'text-[#1C1E1B] font-semibold' : 'text-[#787672] hover:text-[#1C1E1B]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`transition-colors py-1 ${
                pathname === '/about' ? 'text-[#1C1E1B] font-semibold' : 'text-[#787672] hover:text-[#1C1E1B]'
              }`}
            >
              About
            </Link>

            {/* Ways I Can Help Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  isPathwayActive ? 'text-[#A8543E] font-semibold' : 'text-[#787672] hover:text-[#1C1E1B]'
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Ways I Can Help</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-[#A8543E]' : 'text-[#9C9A95]'
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-76 sm:w-84 z-50">
                  <div className="bg-[#FFFFFF] rounded-2xl border border-[#F2DDD0] p-2.5 shadow-xl space-y-1">
                    {PATHWAYS.map((path) => {
                      const Icon = path.icon;
                      const isActive = pathname === path.href;
                      return (
                        <Link
                          key={path.href}
                          href={path.href}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                            isActive ? 'bg-[#FDF1E8] text-[#1C1E1B]' : 'hover:bg-[#FDF6F0] text-[#55534E]'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#FDF6F0] border border-[#F4DDD0] text-[#A8543E] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-serif text-sm font-semibold text-[#1C1E1B] block leading-snug">
                              {path.name}
                            </span>
                            <p className="text-[11px] text-[#787672] mt-0.5 leading-snug">
                              {path.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="pt-2 border-t border-[#F7EBE1] px-2.5 py-1.5 flex items-center justify-between text-xs">
                      <span className="text-[#787672] text-[11px]">Not sure?</span>
                      <Link
                        href="/discovery-call"
                        className="font-semibold text-[#A8543E] hover:underline flex items-center gap-1 text-[11px]"
                      >
                        <span>Book a Discovery Call</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/resources"
              className={`transition-colors py-1 ${
                pathname === '/resources' ? 'text-[#1C1E1B] font-semibold' : 'text-[#787672] hover:text-[#1C1E1B]'
              }`}
            >
              Resources
            </Link>

            <Link
              href="/lemmy-lou-and-friends"
              className={`transition-colors py-1 flex items-center gap-1 ${
                pathname.startsWith('/lemmy-lou-and-friends')
                  ? 'text-[#f43d86] font-semibold'
                  : 'text-[#0a8edb] hover:text-[#f43d86]'
              }`}
            >
              <span>Lemmy Lou &amp; Friends</span>
              <span className="text-[#f43d86] text-xs">♥</span>
            </Link>

            <Link
              href="/contact"
              className={`transition-colors py-1 ${
                pathname === '/contact' ? 'text-[#1C1E1B] font-semibold' : 'text-[#787672] hover:text-[#1C1E1B]'
              }`}
            >
              Contact
            </Link>
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
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-[#FBF9F5] border-t border-[#ECE7DE] overflow-y-auto px-6 py-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Ways to Work With Nicola Section */}
            <div className="space-y-2">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#A8543E]">
                Ways I Can Help
              </p>
              <div className="grid grid-cols-1 gap-2">
                {PATHWAYS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 bg-white border border-[#ECE7DE] rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#A8543E] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-serif text-sm font-semibold text-[#1C1E1B]">{p.name}</p>
                          <p className="text-[10px] text-[#787672]">{p.badge}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9C9A95]" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Core Practice Links */}
            <div className="space-y-2 pt-2 border-t border-[#ECE7DE]">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#787672]">
                Explore Practice
              </p>
              <nav className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-[#1C1E1B] hover:bg-[#ECE7DE]"
                >
                  <span>Home</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-[#1C1E1B] hover:bg-[#ECE7DE]"
                >
                  <span>About Nicola</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
                <Link
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-[#1C1E1B] hover:bg-[#ECE7DE]"
                >
                  <span>Resources &amp; Workbooks</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
                <Link
                  href="/lemmy-lou-and-friends"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-bold text-[#0a8edb] bg-[#e5f5ff]/60"
                >
                  <span>Lemmy Lou &amp; Friends Children&apos;s Hub</span>
                  <span className="text-[#f43d86]">♥</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-[#1C1E1B] hover:bg-[#ECE7DE]"
                >
                  <span>Contact &amp; Enquiries</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#ECE7DE] space-y-3">
            <Link
              href="/discovery-call"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#A8543E] hover:bg-[#8D4431] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book a Discovery Call
            </Link>

            <div className="text-center text-xs text-[#787672]">
              <p className="font-semibold text-[#1C1E1B]">Nicola Benyahia MBE</p>
              <p className="text-[11px]">BACP Accredited Counsellor &bull; EMDR Trauma Specialist</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
