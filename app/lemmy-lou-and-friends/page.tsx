'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS_CATALOG } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { LemmyLouBookCover } from '@/components/lemmy-lou/covers';
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Mail,
  Heart,
  Smile,
  Shield,
  Sun,
  Palette,
  Users,
  Compass,
} from 'lucide-react';

export default function LemmyLouPage() {
  const { addItem } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);

  const myBigFeelings = PRODUCTS_CATALOG.find((p) => p.id === 'my-big-feelings')!;
  const calmWithMe = PRODUCTS_CATALOG.find((p) => p.id === 'calm-with-me')!;
  const iAmAmazing = PRODUCTS_CATALOG.find((p) => p.id === 'i-am-amazing')!;
  const worryCloud = PRODUCTS_CATALOG.find((p) => p.id === 'worry-cloud-storybook')!;
  const strongLittleNo = PRODUCTS_CATALOG.find((p) => p.id === 'strong-little-no')!;
  const bundle = PRODUCTS_CATALOG.find((p) => p.id === 'lemmy-lou-complete-bundle');

  const handleAddToCart = (item: typeof myBigFeelings) => {
    addItem(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  // The 5 Core Featured Books with distinct, harmonious colour themes
  const featuredBooks = [
    {
      data: myBigFeelings,
      coverTheme: 'blush' as const,
      colorName: 'blush / pink',
      bgCard: 'bg-[#FFF2F6]',
      borderCard: 'border-[#FFD2E2]',
      accentColor: 'text-[#F43D86]',
      badgeBg: 'bg-[#F43D86] text-white',
      buttonBg: 'bg-[#F43D86] hover:bg-[#D92C73] text-white',
      lightChip: 'bg-white/80 text-[#B3205E] border border-[#FFD2E2]',
      helpsWith: [
        'Recognising and naming primary emotions (joy, anger, sadness, fear)',
        'Connecting body sensations (tummy flutters, tense shoulders) to feelings',
        'Gentle, creative drawing prompts to express what words cannot',
        'Fosters warm emotional dialogue between children and caregivers',
      ],
      age: 'Ages 4–10 · Home, Classrooms & Clinic Rooms',
    },
    {
      data: calmWithMe,
      coverTheme: 'sky' as const,
      colorName: 'soft sky blue',
      bgCard: 'bg-[#F0F8FF]',
      borderCard: 'border-[#BDE2FE]',
      accentColor: 'text-[#0A8EDB]',
      badgeBg: 'bg-[#0A8EDB] text-white',
      buttonBg: 'bg-[#0A8EDB] hover:bg-[#0877B8] text-white',
      lightChip: 'bg-white/80 text-[#076296] border border-[#BDE2FE]',
      helpsWith: [
        'Fun, memorable breathwork adventures (hot chocolate breathing, feather floating)',
        'Sensory grounding strategies to soothe nervous system overwhelm',
        'Physical relaxation scripts designed for bedtime or classroom transitions',
        'Helps little bodies return from fight-or-flight to safety and rest',
      ],
      age: 'Ages 3–9 · Mindful calming, sensory needs & bedtime',
    },
    {
      data: iAmAmazing,
      coverTheme: 'mint' as const,
      colorName: 'mint / green',
      bgCard: 'bg-[#F2FAF2]',
      borderCard: 'border-[#C1EBC0]',
      accentColor: 'text-[#3DAE55]',
      badgeBg: 'bg-[#3DAE55] text-white',
      buttonBg: 'bg-[#3DAE55] hover:bg-[#329246] text-white',
      lightChip: 'bg-white/80 text-[#287037] border border-[#C1EBC0]',
      helpsWith: [
        'Discovering unique individual strengths and core personal values',
        'Celebrating neurodiversity, varied abilities, and diverse cultures',
        'Reframing mistakes as natural, courageous learning moments',
        'Building a resilient, warm, and self-compassionate inner voice',
      ],
      age: 'Ages 5–11 · Self-esteem, confidence & resilience',
    },
    {
      data: worryCloud,
      coverTheme: 'lavender' as const,
      colorName: 'soft blue / lavender',
      bgCard: 'bg-[#F5F6FF]',
      borderCard: 'border-[#CFD6FF]',
      accentColor: 'text-[#5B67DE]',
      badgeBg: 'bg-[#5B67DE] text-white',
      buttonBg: 'bg-[#5B67DE] hover:bg-[#4853BF] text-white',
      lightChip: 'bg-white/80 text-[#434DA8] border border-[#CFD6FF]',
      helpsWith: [
        'Normalises that everyone experiences worry, doubt, or anxious flutters',
        'Illustrates how talking to a trusted friend or adult shrinks the worry cloud',
        'Provides step-by-step calming questions when thoughts feel overwhelming',
        'Includes an interactive Worry Cloud breathing bookmark and discussion guide',
      ],
      age: 'Ages 3–8 · Hardcover picture storybook for anxiety',
    },
    {
      data: strongLittleNo,
      coverTheme: 'peach' as const,
      colorName: 'warm pink / peach',
      bgCard: 'bg-[#FFF5EE]',
      borderCard: 'border-[#FED4C0]',
      accentColor: 'text-[#E86E45]',
      badgeBg: 'bg-[#E86E45] text-white',
      buttonBg: 'bg-[#E86E45] hover:bg-[#CA5A33] text-white',
      lightChip: 'bg-white/80 text-[#A64522] border border-[#FED4C0]',
      helpsWith: [
        'Teaches body autonomy and personal consent in a gentle, positive story',
        'Shows that saying "no" to unwanted tickles, games, or hugs is courageous',
        'Proves that having boundaries does not mean being unkind or selfish',
        'Empowers peers and adults to listen to and respect children\'s voices',
      ],
      age: 'Ages 4–9 · Boundaries, body safety & assertiveness',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#163A75] font-sans antialiased overflow-x-hidden selection:bg-[#FFD2E2] selection:text-[#B3205E]">
      {/* 1. HERO SECTION — VIBRANT & JOYFUL */}
      <section className="relative bg-gradient-to-b from-[#EEFAFF] via-[#FFF8FA] to-[#FFFFFF] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E3EBF5]">
        {/* Playful Floating Glow Elements */}
        <div className="absolute top-6 left-12 w-48 h-48 bg-[#FFE9F0]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute top-20 right-12 w-64 h-64 bg-[#E5F5FF]/70 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#B8E2FF] text-xs font-bold text-[#0A8EDB] shadow-xs">
                <span>Created by Nicola Benyahia MBE</span>
                <span className="text-[#F43D86]">♥</span>
                <span>Therapeutic Publishing</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-[#0A8EDB]">
                Lemmy Lou <br />
                <span className="text-[#F43D86]">&amp; Friends</span>
              </h1>

              <p className="font-serif text-2xl sm:text-3xl text-[#163A75] font-semibold italic">
                Big feelings. Brighter days.
              </p>

              <p className="text-base sm:text-lg text-[#163A75]/80 leading-relaxed max-w-lg font-normal">
                A vibrant collection of therapeutic picture storybooks and interactive emotional wellbeing workbooks. Helping children celebrate feelings, build courageous self-esteem, and navigate life&apos;s hurdles with joy.
              </p>

              {/* Fast Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#book-collection"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F43D86] hover:bg-[#D92C73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md transition-all hover:scale-102"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>See the Books</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-3 px-4 py-2 bg-white/90 border border-[#BDE2FE] rounded-full text-xs font-bold text-[#0A8EDB] shadow-2xs">
                  <span className="text-base">🌈</span>
                  <span>Kinder Minds &bull; Brighter Tomorrows</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Feature */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-gradient-to-tr from-[#FFE9F0] via-[#FFFFFF] to-[#E5F5FF]">
                <img
                  src="/images/lemmy_lou_hero_1790954333613.jpg"
                  alt="Lemmy Lou and her diverse friends laughing together"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md text-xs font-bold text-[#F43D86] flex items-center gap-1.5 border border-[#FFD2E2]">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span>5 Therapeutic Titles Available</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 rounded-2xl border border-white/80 shadow-md flex items-center justify-between text-xs text-[#163A75]">
                  <div className="flex items-center gap-2 font-bold">
                    <span className="text-[#F43D86]">♥</span>
                    <span>For Ages 3–11</span>
                    <span>&bull;</span>
                    <span>Home, School &amp; Therapy</span>
                  </div>
                  <a href="#book-collection" className="font-extrabold text-[#0A8EDB] hover:underline">
                    Explore Books &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEET LEMMY LOU VISUALLY & THE CHARACTERS */}
      <section className="py-14 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F5FF] text-[#0A8EDB] text-xs font-bold">
            <Smile className="w-3.5 h-3.5" />
            <span>Meet Lemmy Lou &amp; Friends</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0C579D]">
            A World Where Every Feeling Belongs
          </h2>
          <p className="text-sm sm:text-base text-[#163A75]/80 leading-relaxed">
            Lemmy Lou is curious, caring, and full of heart. Along with Layth and her wonderfully diverse circle of friends, she discovers that feelings are not good or bad—they are simply messages to understand.
          </p>
        </div>

        {/* 3 Playful Value Bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFF0F5] border border-[#FFD2E2] rounded-3xl p-6 text-center space-y-3 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#F43D86] text-white flex items-center justify-center text-xl shadow-xs">
              💛
            </div>
            <h3 className="font-serif text-xl font-bold text-[#D92C73]">
              Safe Emotional Expression
            </h3>
            <p className="text-xs text-[#163A75]/80 leading-relaxed">
              Giving children permission to feel worried, sad, angry, or excited without shame, fear, or self-judgment.
            </p>
          </div>

          <div className="bg-[#EAF6FF] border border-[#BCE2FF] rounded-3xl p-6 text-center space-y-3 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#0A8EDB] text-white flex items-center justify-center text-xl shadow-xs">
              🌱
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0C579D]">
              Practical Calming Tools
            </h3>
            <p className="text-xs text-[#163A75]/80 leading-relaxed">
              Simple sensory grounding exercises and mindful breathwork that children can use at school, bedtime, or anytime.
            </p>
          </div>

          <div className="bg-[#F2FAF2] border border-[#C1EBC0] rounded-3xl p-6 text-center space-y-3 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#3DAE55] text-white flex items-center justify-center text-xl shadow-xs">
              🛡️
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2A7B3E]">
              Courageous Boundaries
            </h3>
            <p className="text-xs text-[#163A75]/80 leading-relaxed">
              Empowering body autonomy and teaching children that a respectful &ldquo;no&rdquo; is a healthy, brave choice.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED BOOK COLLECTION — EARLY IN THE PAGE (THE SHELF) */}
      <section id="book-collection" className="bg-gradient-to-b from-[#FFFDF8] via-[#FDF8F3] to-[#FFFFFF] py-16 md:py-24 border-y border-[#FFE8D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE8D6] text-[#A8543E] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Front Cover Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#163A75]">
              The Lemmy Lou Book Collection
            </h2>
            <p className="text-base text-[#163A75]/80 max-w-xl mx-auto">
              Five beautifully written, full-colour publications created by trauma specialist Nicola Benyahia MBE. Each book features a distinct visual theme and purposeful emotional focus.
            </p>
          </div>

          {/* Quick Shelf of All 5 Books */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {featuredBooks.map((item, idx) => (
              <a
                key={item.data.id}
                href={`#book-${item.data.id}`}
                className="group flex flex-col justify-between bg-white rounded-2xl p-4 border border-[#E8ECF2] hover:border-[#F43D86] shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="space-y-3">
                  <div className="w-full aspect-[3/4] mx-auto overflow-hidden rounded-xl">
                    <LemmyLouBookCover
                      id={item.data.id}
                      title={item.data.title}
                      subtitle={item.data.subtitle}
                      themeColor={item.coverTheme}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#787672]">
                      Book 0{idx + 1}
                    </span>
                    <h3 className="font-bold text-sm text-[#163A75] leading-tight group-hover:text-[#F43D86] transition-colors mt-0.5 line-clamp-2">
                      {item.data.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F2F4F7] flex items-center justify-between text-xs">
                  <span className="font-black text-[#163A75]">{item.data.price}</span>
                  <span className="text-[11px] font-bold text-[#0A8EDB] flex items-center gap-0.5">
                    <span>Showcase</span>
                    <span>&darr;</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Fast Library Bundle Banner */}
          {bundle && (
            <div className="bg-gradient-to-r from-[#FFF0F5] via-[#FFF9FB] to-[#F0F8FF] rounded-3xl border-2 border-[#FFD2E2] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F43D86] text-white text-[11px] font-extrabold uppercase tracking-wider">
                  Save 20% &bull; Complete Practice &amp; Family Pack
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#163A75]">
                  The Complete Lemmy Lou &amp; Friends Library
                </h3>
                <p className="text-xs sm:text-sm text-[#163A75]/80 max-w-xl">
                  Receive all 5 books, the mindfulness colouring collection, and instant printable classroom kits in one keepsake boxed delivery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <div className="text-center md:text-right">
                  <span className="block text-2xl font-black text-[#163A75]">{bundle.price}</span>
                  <span className="text-[11px] text-[#F43D86] font-bold">Free Tracked UK Delivery</span>
                </div>
                <button
                  onClick={() => handleAddToCart(bundle)}
                  className="px-6 py-3.5 bg-[#F43D86] hover:bg-[#D92C73] text-white text-xs font-extrabold uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{addedId === bundle.id ? 'Added to Bag! ✓' : 'Add Bundle to Bag'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. INDIVIDUAL BOOK SHOWCASES — COLOURFUL EDITORIAL PRESENTATION */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F43D86]">
            In-Depth Book Showcases
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#163A75]">
            Explore Each Title
          </h2>
          <p className="text-sm sm:text-base text-[#163A75]/80">
            Read short descriptions, age guidance, and specific emotional capabilities developed in each resource.
          </p>
        </div>

        {/* 5 Distinct Editorial Product Layouts */}
        <div className="space-y-16 md:space-y-24">
          {featuredBooks.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            const book = item.data;

            return (
              <article
                key={book.id}
                id={`book-${book.id}`}
                className={`rounded-[36px] border-2 ${item.borderCard} ${item.bgCard} p-6 sm:p-10 md:p-12 shadow-sm transition-all relative overflow-hidden`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Visual Side: Large Book Cover */}
                  <div
                    className={`lg:col-span-5 flex justify-center ${
                      isReversed ? 'lg:col-start-8' : ''
                    }`}
                  >
                    <div className="w-full max-w-xs sm:max-w-sm">
                      <div className="relative transform hover:scale-103 transition-transform duration-300 drop-shadow-xl">
                        <LemmyLouBookCover
                          id={book.id}
                          title={book.title}
                          subtitle={book.subtitle}
                          themeColor={item.coverTheme}
                          className="w-full shadow-2xl"
                        />
                        {/* Decorative Badge */}
                        <div
                          className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${item.badgeBg}`}
                        >
                          Book 0{idx + 1} &bull; {item.colorName}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Content Side */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isReversed ? 'lg:col-start-1' : ''
                    }`}
                  >
                    {/* Header info */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${item.lightChip}`}
                        >
                          {item.age}
                        </span>
                        <span className="text-xs font-bold text-[#787672]">
                          {book.format}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#163A75] tracking-tight leading-tight">
                        {book.title}
                      </h3>

                      <p className={`font-serif italic text-base sm:text-lg font-semibold ${item.accentColor}`}>
                        &ldquo;{book.subtitle}&rdquo;
                      </p>
                    </div>

                    {/* Short Emotional Description */}
                    <p className="text-sm sm:text-base text-[#163A75]/90 leading-relaxed font-normal">
                      {book.description} {book.longDescription}
                    </p>

                    {/* What Children Learn / What It Helps With */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#163A75]">
                        What this book helps with:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#163A75]">
                        {item.helpsWith.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-white/80">
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.accentColor}`} />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Dual CTA */}
                    <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-2xl sm:text-3xl font-black text-[#163A75]">
                          {book.price}
                        </span>
                        <span className="block text-[11px] text-[#787672]">
                          Full-colour printed edition
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/product/${book.id}`}
                          className="px-5 py-3 bg-white hover:bg-white/80 text-[#163A75] font-bold text-xs uppercase tracking-wider rounded-full border border-black/10 transition-colors shadow-2xs"
                        >
                          View Details
                        </Link>

                        <button
                          onClick={() => handleAddToCart(book)}
                          className={`px-6 py-3 font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-2 ${item.buttonBg}`}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>{addedId === book.id ? 'Added! ✓' : `Add to Bag &bull; ${book.price}`}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. WHAT CHILDREN LEARN — PLAYFUL VISUAL CURRICULUM */}
      <section className="bg-gradient-to-b from-[#F5F8FC] to-[#FFFFFF] py-16 md:py-24 border-y border-[#E3EBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A8EDB]">
              The Therapeutic Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#163A75]">
              Skills for Life, Taught with Gentleness
            </h2>
            <p className="text-sm sm:text-base text-[#163A75]/80">
              Rooted in accredited trauma psychotherapy and child development science, translated into playful stories children love.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#BDE2FE] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E5F5FF] text-[#0A8EDB] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-[#163A75]">Emotional Naming</h3>
              <p className="text-xs text-[#163A75]/80 leading-relaxed">
                When children can name what they feel, their brain shifts from reactive alarm to calm cognitive processing.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#FFD2E2] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F5] text-[#F43D86] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-[#163A75]">Somatic Regulation</h3>
              <p className="text-xs text-[#163A75]/80 leading-relaxed">
                Learning where anger, fear, and joy sit in the body so feelings can be released without temper spirals.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#C1EBC0] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F2FAF2] text-[#3DAE55] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-[#163A75]">Body Autonomy</h3>
              <p className="text-xs text-[#163A75]/80 leading-relaxed">
                Clear, healthy understanding of personal boundaries, consent, and the bravery of saying and respecting &ldquo;no&rdquo;.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#CFD6FF] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F5F6FF] text-[#5B67DE] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-[#163A75]">Asking for Help</h3>
              <p className="text-xs text-[#163A75]/80 leading-relaxed">
                Knowing that trusted adults exist to listen without judgment, so children never feel they must face worries alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOR PARENTS, CARERS & PROFESSIONALS */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* For Parents & Carers */}
          <div className="bg-gradient-to-br from-[#FFF9FB] to-[#FFF0F5] rounded-3xl p-8 md:p-10 border border-[#FFD2E2] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F43D86] uppercase tracking-wider">
                <Heart className="w-4 h-4" />
                <span>For Parents &amp; Carers</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#163A75]">
                Meaningful Conversations at Home
              </h3>
              <p className="text-xs sm:text-sm text-[#163A75]/80 leading-relaxed">
                You do not need to be a psychologist to support your child&apos;s emotional wellbeing. Lemmy Lou stories provide natural conversational bridges around the dinner table, during car journeys, or tucked in at bedtime.
              </p>
              <ul className="space-y-2 text-xs text-[#163A75]">
                <li className="flex items-center gap-2">
                  <span className="text-[#F43D86] font-bold">&bull;</span>
                  <span>Includes discussion prompts at the back of each book</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F43D86] font-bold">&bull;</span>
                  <span>Gentle, non-intimidating activities designed for all reading abilities</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#FFD2E2]">
              <a
                href="#book-collection"
                className="text-xs font-extrabold text-[#F43D86] hover:underline flex items-center gap-1.5"
              >
                <span>Browse Home Books</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* For Schools, Teachers & Therapists */}
          <div className="bg-gradient-to-br from-[#F5FAFF] to-[#EAF4FF] rounded-3xl p-8 md:p-10 border border-[#BDE2FE] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A8EDB] uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>For Schools &amp; Clinicians</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#163A75]">
                Classroom &amp; Therapy Room Resources
              </h3>
              <p className="text-xs sm:text-sm text-[#163A75]/80 leading-relaxed">
                Created to meet national PSHE emotional literacy standards and early clinical intervention goals. Widely used across UK primary schools, SEN provisions, play therapy rooms, and CAMHS waiting areas.
              </p>
              <ul className="space-y-2 text-xs text-[#163A75]">
                <li className="flex items-center gap-2">
                  <span className="text-[#0A8EDB] font-bold">&bull;</span>
                  <span>Bulk school licensing &amp; printable worksheets available</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0A8EDB] font-bold">&bull;</span>
                  <span>Written by an MBE accredited trauma therapist and trainer</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#BDE2FE]">
              <Link
                href="/contact?intent=lemmy-lou"
                className="text-xs font-extrabold text-[#0A8EDB] hover:underline flex items-center gap-1.5"
              >
                <span>Enquire About School or Clinic Orders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREE ACTIVITIES & NEWSLETTER / FINAL CTA */}
      <section className="bg-gradient-to-r from-[#FFF0F5] via-[#FFF8FA] to-[#EEFAFF] py-16 md:py-24 border-t border-[#E3EBF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-2xl">✨</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#163A75]">
            Receive Free Lemmy Lou Printable Activity Sheets
          </h2>
          <p className="text-sm sm:text-base text-[#163A75]/80 max-w-xl mx-auto">
            Join Nicola&apos;s family community for seasonal colouring pages, mindful breathing bookmarks, and gentle parenting guidance sent straight to your inbox.
          </p>

          {subscribed ? (
            <div className="bg-white p-4 rounded-2xl border border-[#C1EBC0] text-[#287037] font-bold text-sm inline-flex items-center gap-2 shadow-xs">
              <CheckCircle className="w-5 h-5 text-[#3DAE55]" />
              <span>Thank you! Your free printable pack is on its way to your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 rounded-full border border-[#FFD2E2] bg-white text-sm text-[#163A75] placeholder:text-[#163A75]/40 focus:outline-none focus:ring-2 focus:ring-[#F43D86]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F43D86] hover:bg-[#D92C73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md transition-all whitespace-nowrap"
              >
                Send Me Sheets
              </button>
            </form>
          )}

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#787672]">
            <Link href="/" className="hover:text-[#163A75] font-semibold underline underline-offset-4">
              &larr; Return to Nicola Benyahia Practice
            </Link>
            <span>&bull;</span>
            <Link href="/resources" className="hover:text-[#163A75] font-semibold underline underline-offset-4">
              Explore Adult Workbooks &amp; RECLAIM™
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
