'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS_CATALOG } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { LemmyLouBookCover } from '@/components/lemmy-lou/covers';
import {
  Heart,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  BookOpen,
  Printer,
  Gift,
  CheckCircle,
  Mail,
  Check,
} from 'lucide-react';

export default function LemmyLouPage() {
  const { addItem } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'books' | 'printables'>('all');

  const myBigFeelings = PRODUCTS_CATALOG.find((p) => p.id === 'my-big-feelings')!;
  const calmWithMe = PRODUCTS_CATALOG.find((p) => p.id === 'calm-with-me')!;
  const iAmAmazing = PRODUCTS_CATALOG.find((p) => p.id === 'i-am-amazing')!;
  const worryCloud = PRODUCTS_CATALOG.find((p) => p.id === 'worry-cloud-storybook')!;
  const strongLittleNo = PRODUCTS_CATALOG.find((p) => p.id === 'strong-little-no')!;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-[#ffffff] text-[#163a75] font-sans antialiased overflow-x-hidden">
      {/* 39. LEMMY LOU — HERO SECTION */}
      <section className="bg-gradient-to-b from-[#eefaff] to-[#ffffff] py-12 md:py-18 border-b border-[#e3ebf5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#b8e2ff] text-xs font-bold text-[#0a8edb] shadow-xs">
                <span>Created by Nicola Benyahia MBE</span>
                <span>♥</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-[#1686d8]">
                Lemmy Lou <br />
                <span className="text-[#f43d86]">&amp; Friends</span>
              </h1>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#163a75] font-semibold italic">
                Big feelings. Brighter days.
              </h2>

              <p className="text-base text-[#163a75]/80 leading-relaxed max-w-lg">
                A collection of therapeutic stories, activity books and emotional wellbeing resources
                created to help children understand their feelings, build confidence and navigate life&apos;s
                more difficult moments.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#collection"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f43d86] hover:bg-[#d92c73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md transition-all hover:scale-102"
                >
                  <span>SHOP THE COLLECTION</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="text-left font-bold text-sm text-[#0a8edb] leading-tight">
                  <span className="text-[#f43d86]">♡</span> Kinder Minds <br />
                  Brighter Tomorrows
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-gradient-to-tr from-[#ffe9f0] to-[#e5f5ff]">
                <img
                  src="/images/lemmy_lou_hero_1790954333613.jpg"
                  alt="Lemmy Lou and her diverse friends laughing and learning about emotions"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md text-xs font-bold text-[#f43d86] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span>Positive words, brighter days!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 40. MEET LEMMY LOU & FRIENDS (CLOUDS) */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Blue Cloud */}
          <div className="bg-[#e5f5ff] rounded-[36px] p-8 md:p-10 border border-[#bce2ff] shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0c579d]">
                Meet Lemmy Lou &amp; Friends ♡
              </h2>
              <p className="text-base font-bold text-[#163a75] leading-relaxed">
                Lemmy Lou is curious, caring and sometimes has big feelings — just like all of us.
              </p>
              <p className="text-sm text-[#163a75]/80 leading-relaxed">
                Alongside her wonderfully diverse group of friends and animal companions, Lemmy Lou
                discovers that it is okay to feel worried, sad, angry, nervous, different or unsure.
                Together they explore big feelings, try helpful strategies, and learn that kindness and
                friendship can make every day brighter.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f43d86] hover:bg-[#d92c73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs transition-colors"
              >
                <span>MEET THE CHARACTERS &rarr;</span>
              </a>
            </div>
          </div>

          {/* Pink Cloud */}
          <div className="bg-[#fff0f5] rounded-[36px] p-8 md:p-10 border border-[#ffd2e2] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#d92c73]">
                Through their adventures, the friends learn how to:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-[#163a75]">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f43d86] font-bold">&bull;</span>
                    <span>recognise and name their emotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f43d86] font-bold">&bull;</span>
                    <span>talk about difficult feelings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f43d86] font-bold">&bull;</span>
                    <span>calm their bodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f43d86] font-bold">&bull;</span>
                    <span>build confidence and self-esteem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f43d86] font-bold">&bull;</span>
                    <span>develop healthy boundaries</span>
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0a8edb] font-bold">&bull;</span>
                    <span>understand worries and anxiety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0a8edb] font-bold">&bull;</span>
                    <span>ask trusted adults for help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0a8edb] font-bold">&bull;</span>
                    <span>develop kindness towards themselves and others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0a8edb] font-bold">&bull;</span>
                    <span>discover that being different can be something to celebrate</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f8c5d6] text-center">
              <p className="text-xs md:text-sm font-bold text-[#d92c73]">
                Most importantly, children discover that they do not have to work everything out alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 41. EXPLORE THE COLLECTION (WORKBOOKS) */}
      <section id="collection" className="bg-gradient-to-b from-[#fffdf4] to-[#ffffff] py-16 md:py-24 border-y border-[#fff3ba]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#124d92]">
              Explore the Collection
            </h2>
            <p className="text-sm font-semibold text-[#f43d86]">
              Engaging, therapeutic activity workbooks created for home, schools and clinic rooms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* My Big Feelings (Blush) */}
            <article className="bg-[#ffe9f0] border-2 border-[#ffd2e2] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-2xl text-[#0c579d]">{myBigFeelings.title}</h3>
                  <strong className="block text-xs font-bold text-[#f43d86] mt-0.5">
                    {myBigFeelings.subtitle}
                  </strong>
                  <p className="text-xs text-[#163a75]/80 mt-2 leading-relaxed">
                    A colourful activity workbook designed to help children recognise, name and
                    explore their emotions in a safe and engaging way.
                  </p>
                </div>

                <div className="py-2">
                  <LemmyLouBookCover
                    id={myBigFeelings.id}
                    title={myBigFeelings.title}
                    subtitle={myBigFeelings.subtitle}
                    themeColor="blush"
                    className="max-h-[260px] mx-auto"
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Emotional literacy
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Self-awareness
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Communication
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Home | Schools | Therapy
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#ffd2e2] mt-4 flex items-center justify-between gap-3">
                <span className="font-black text-xl text-[#163a75]">{myBigFeelings.price}</span>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/product/${myBigFeelings.id}`}
                    className="px-4 py-2 bg-white text-[#d92c73] font-bold text-xs rounded-full hover:bg-[#fff0f5] transition-colors"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => addItem(myBigFeelings)}
                    className="px-4 py-2 bg-[#f43d86] hover:bg-[#d92c73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Calm With Me (Sky) */}
            <article className="bg-[#e5f5ff] border-2 border-[#bce2ff] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-2xl text-[#0c579d]">{calmWithMe.title}</h3>
                  <strong className="block text-xs font-bold text-[#0a8edb] mt-0.5">
                    {calmWithMe.subtitle}
                  </strong>
                  <p className="text-xs text-[#163a75]/80 mt-2 leading-relaxed">
                    Helps children discover practical ways to calm their minds and bodies when feelings
                    become overwhelming.
                  </p>
                </div>

                <div className="py-2">
                  <LemmyLouBookCover
                    id={calmWithMe.id}
                    title={calmWithMe.title}
                    subtitle={calmWithMe.subtitle}
                    themeColor="sky"
                    className="max-h-[260px] mx-auto"
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Anxiety
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Worry
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Emotional regulation
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Relaxation &bull; Coping skills
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#bce2ff] mt-4 flex items-center justify-between gap-3">
                <span className="font-black text-xl text-[#163a75]">{calmWithMe.price}</span>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/product/${calmWithMe.id}`}
                    className="px-4 py-2 bg-white text-[#0a8edb] font-bold text-xs rounded-full hover:bg-[#eef8ff] transition-colors"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => addItem(calmWithMe)}
                    className="px-4 py-2 bg-[#0a8edb] hover:bg-[#0878ba] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </article>

            {/* I Am Amazing (Mint) */}
            <article className="bg-[#e7f7e5] border-2 border-[#bde8b8] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-2xl text-[#0c579d]">{iAmAmazing.title}</h3>
                  <strong className="block text-xs font-bold text-[#43ad59] mt-0.5">
                    {iAmAmazing.subtitle}
                  </strong>
                  <p className="text-xs text-[#163a75]/80 mt-2 leading-relaxed">
                    A confidence-building activity workbook filled with positive, playful exercises
                    designed to encourage children to recognise their strengths and celebrate their individuality.
                  </p>
                </div>

                <div className="py-2">
                  <LemmyLouBookCover
                    id={iAmAmazing.id}
                    title={iAmAmazing.title}
                    subtitle={iAmAmazing.subtitle}
                    themeColor="mint"
                    className="max-h-[260px] mx-auto"
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Confidence
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Self-esteem
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Positive identity
                  </span>
                  <span className="text-[10px] font-semibold bg-white rounded-full px-2.5 py-1 text-[#163a75]">
                    Resilience &bull; Self-kindness
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#bde8b8] mt-4 flex items-center justify-between gap-3">
                <span className="font-black text-xl text-[#163a75]">{iAmAmazing.price}</span>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/product/${iAmAmazing.id}`}
                    className="px-4 py-2 bg-white text-[#43ad59] font-bold text-xs rounded-full hover:bg-[#f0faf0] transition-colors"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => addItem(iAmAmazing)}
                    className="px-4 py-2 bg-[#43ad59] hover:bg-[#378f49] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 42. LEMMY LOU & FRIENDS STORYBOOKS */}
      <section className="bg-[#eef8ff] py-16 md:py-24 border-b border-[#d8ebfa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#124d92]">
              Lemmy Lou &amp; Friends Storybooks
            </h2>
            <p className="text-sm font-semibold text-[#0a8edb]">
              Sometimes difficult feelings are easier to understand through a story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Storybook 1: Worry Cloud */}
            <article className="bg-white rounded-3xl p-6 border border-[#cadff3] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <LemmyLouBookCover
                  id={worryCloud.id}
                  title="Worry Cloud"
                  subtitle="Big worries, little brave steps"
                  themeColor="sky"
                  className="max-h-[220px]"
                />
                <h3 className="font-serif text-xl font-bold text-[#163a75]">
                  Lemmy Lou and the Worry Cloud
                </h3>
                <p className="text-xs text-[#163a75]/80 leading-relaxed">
                  A gentle story helping children understand anxiety and worry and discover ways of
                  talking about what is happening inside.
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f4f9] flex items-center justify-between">
                <span className="font-bold text-[#163a75]">{worryCloud.price}</span>
                <Link
                  href={`/product/${worryCloud.id}`}
                  className="px-4 py-2 bg-[#f43d86] hover:bg-[#d92c73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full"
                >
                  DISCOVER THE STORY &rarr;
                </Link>
              </div>
            </article>

            {/* Storybook 2: Strong Little No */}
            <article className="bg-white rounded-3xl p-6 border border-[#cadff3] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <LemmyLouBookCover
                  id={strongLittleNo.id}
                  title="Strong Little No"
                  subtitle="Personal boundaries & bravery"
                  themeColor="blush"
                  className="max-h-[220px]"
                />
                <h3 className="font-serif text-xl font-bold text-[#163a75]">
                  Layth and the Strong Little No
                </h3>
                <p className="text-xs text-[#163a75]/80 leading-relaxed">
                  A story about personal boundaries, finding your voice and discovering that saying
                  “no” can sometimes be an important and courageous thing to do.
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f4f9] flex items-center justify-between">
                <span className="font-bold text-[#163a75]">{strongLittleNo.price}</span>
                <Link
                  href={`/product/${strongLittleNo.id}`}
                  className="px-4 py-2 bg-[#0a8edb] hover:bg-[#0878ba] text-white font-extrabold text-xs uppercase tracking-wider rounded-full"
                >
                  DISCOVER THE STORY &rarr;
                </Link>
              </div>
            </article>

            {/* Card 3: More Stories Are Coming */}
            <article className="bg-[#fff9d8] rounded-3xl p-6 border-2 border-[#fbe897] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-[#f0bd1a] text-xl">
                  <Heart className="w-5 h-5 fill-[#f0bd1a]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#17356d]">
                    Expanding Collection
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#17356d]">
                  More Stories Are Coming
                </h3>
                <p className="text-xs text-[#17356d]/90 leading-relaxed">
                  The Lemmy Lou &amp; Friends library will continue to grow with themes supporting life&apos;s
                  more delicate moments:
                </p>
                <div className="text-xs text-[#17356d] leading-relaxed font-medium bg-white/70 p-3 rounded-2xl border border-[#fae58c]">
                  Bereavement &bull; Bullying &bull; Divorce and separation &bull; Moving home &bull;
                  Loneliness &bull; Feeling different &bull; Family changes &bull; Friendship &bull;
                  Anxiety &bull; Young carers &bull; Emotional wellbeing
                </div>
              </div>

              <div className="pt-4 border-t border-[#fae58c]">
                <a
                  href="#club"
                  className="w-full inline-block text-center px-4 py-2 bg-[#f0bd1a] hover:bg-[#deb017] text-[#17356d] font-extrabold text-xs uppercase tracking-wider rounded-full"
                >
                  SEE WHAT’S COMING &rarr;
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 43 & 44. FOR PARENTS & CARERS / FOR PROFESSIONALS */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* For Parents & Carers (Blush) */}
          <article className="bg-[#fff0f5] rounded-[36px] p-8 md:p-10 border border-[#ffd2e2] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#e83d7f]">
                ♡ For Parents &amp; Carers
              </h2>
              <p className="text-xs md:text-sm text-[#163a75]/90 leading-relaxed">
                Children do not always have the words to explain what they are feeling. Sometimes they
                show us through their behaviour instead.
              </p>
              <p className="text-xs text-[#163a75]/80 font-medium">
                Many resources include Parent &amp; Carer Guidance, giving adults ideas for:
              </p>
              <ul className="space-y-1.5 text-xs text-[#163a75] pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#e83d7f] font-bold">&bull;</span>
                  <span>introducing the activity or story</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e83d7f] font-bold">&bull;</span>
                  <span>talking about difficult emotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e83d7f] font-bold">&bull;</span>
                  <span>asking gentle, age-appropriate questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e83d7f] font-bold">&bull;</span>
                  <span>noticing when a child may need additional support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e83d7f] font-bold">&bull;</span>
                  <span>continuing conversations beyond the book</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f43d86] hover:bg-[#d92c73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs"
              >
                <span>PARENT &amp; CARER RESOURCES &rarr;</span>
              </a>
            </div>
          </article>

          {/* For Professionals (Purple) */}
          <article className="bg-[#f2ebff] rounded-[36px] p-8 md:p-10 border border-[#d8c2ff] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#7a4ac5]">
                ☆ For Professionals
              </h2>
              <p className="text-xs md:text-sm text-[#163a75]/90 leading-relaxed">
                Lemmy Lou &amp; Friends resources are widely used by professionals supporting children in
                educational, therapeutic and community settings.
              </p>
              <p className="text-xs text-[#163a75]/80 font-medium">Helpful for:</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#163a75] pl-2">
                <div className="space-y-1.5">
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> counsellors &amp; therapists
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> teachers &amp; teaching assistants
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> SENCOs &amp; pastoral teams
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> family support workers
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> social care professionals
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> youth workers
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> emotional wellbeing staff
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#7a4ac5]">&bull;</span> nursery practitioners
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8c55cf] hover:bg-[#7840be] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs"
              >
                <span>RESOURCES FOR PROFESSIONALS &rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 45. SHOP LEMMY LOU & FRIENDS (3 CATEGORIES) */}
      <section className="bg-gradient-to-b from-[#ffffff] to-[#fffdf4] py-16 md:py-24 border-t border-[#e3ebf5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#124d92]">
              Shop Lemmy Lou &amp; Friends
            </h2>
            <p className="text-sm font-semibold text-[#f43d86]">
              Explore therapeutic books, instant printables and affirmative tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Books & Workbooks */}
            <div className="bg-[#ffe9f0] border-2 border-[#ffd2e2] rounded-3xl p-8 text-center space-y-4 shadow-xs">
              <div className="text-4xl select-none">📚</div>
              <h3 className="font-serif text-2xl font-bold text-[#0c579d]">Books &amp; Workbooks</h3>
              <p className="text-xs text-[#163a75]/80 leading-relaxed">
                Explore therapeutic stories and engaging activity books designed to support children&apos;s
                emotional wellbeing.
              </p>
              <div className="pt-2">
                <a
                  href="#collection"
                  className="inline-block px-5 py-2.5 bg-[#f43d86] hover:bg-[#d92c73] text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-colors"
                >
                  SHOP BOOKS &amp; WORKBOOKS &rarr;
                </a>
              </div>
            </div>

            {/* Printable Resources */}
            <div className="bg-[#e5f5ff] border-2 border-[#bce2ff] rounded-3xl p-8 text-center space-y-4 shadow-xs">
              <div className="text-4xl select-none">🖨️</div>
              <h3 className="font-serif text-2xl font-bold text-[#0c579d]">Printable Resources</h3>
              <p className="text-xs text-[#163a75]/80 leading-relaxed">
                Download activities, worksheets and emotional wellbeing resources to use instantly at
                home or within professional settings.
              </p>
              <div className="pt-2">
                <Link
                  href="/resources?filter=children"
                  className="inline-block px-5 py-2.5 bg-[#0a8edb] hover:bg-[#0878ba] text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-colors"
                >
                  SHOP PRINTABLES &rarr;
                </Link>
              </div>
            </div>

            {/* Gifts & Products */}
            <div className="bg-[#e7f7e5] border-2 border-[#bde8b8] rounded-3xl p-8 text-center space-y-4 shadow-xs">
              <div className="text-4xl select-none">🎁</div>
              <h3 className="font-serif text-2xl font-bold text-[#0c579d]">Gifts &amp; Products</h3>
              <p className="text-xs text-[#163a75]/80 leading-relaxed">
                Coming soon — Lemmy Lou &amp; Friends stationery, affirmations, apparel and gifts
                designed to carry positive messages beyond the books.
              </p>
              <div className="pt-2">
                <span className="inline-block px-5 py-2.5 bg-[#43ad59] text-white font-extrabold text-xs uppercase tracking-wider rounded-full opacity-80 cursor-default">
                  COMING SOON
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 46. A LITTLE NOTE FROM NICOLA */}
      <section className="bg-[#eaf8ff] py-16 md:py-24 border-y border-[#cce8fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center">
              <div className="w-40 h-40 md:w-44 md:h-44 mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/nicola_portrait_1790954278431.jpg"
                  alt="Nicola Benyahia MBE"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#124d92]">
                A Little Note From Nicola ♡
              </h2>

              <p className="text-xs sm:text-sm text-[#163a75]/90 leading-relaxed">
                I created Lemmy Lou &amp; Friends because children experience enormous emotions long
                before they always have the language to explain them. Throughout my work as a counsellor
                and trauma therapist, I have seen how powerful it can be when someone finally feels able
                to say: “This is how I feel.”
              </p>

              <p className="text-xs sm:text-sm text-[#163a75]/90 leading-relaxed">
                My hope is that children reading these stories will recognise something of themselves in
                the characters and begin to understand that every feeling is allowed, asking for help is
                brave, and being exactly who you are is something worth celebrating.
              </p>

              <div className="pt-2 border-t border-[#bce2ff]">
                <p className="font-serif text-lg font-bold text-[#124d92]">Nicola Benyahia MBE</p>
                <p className="text-[11px] font-semibold text-[#0a8edb] mt-0.5">
                  BACP Accredited Counsellor &nbsp;|&nbsp; EMDR Trauma Therapist &nbsp;|&nbsp; Mental Health Trainer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 47. JOIN LEMMY LOU CLUB & FOOTER STRIP */}
      <section id="club" className="bg-gradient-to-b from-[#ecfbff] to-[#fff3ba] pt-14 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-2">
              <div className="text-2xl font-black text-[#0a8edb]">
                Lemmy Lou <span className="text-[#f43d86]">&amp; Friends</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#163a75]">
                Growing Brave Hearts, One Little Step at a Time ♡
              </h3>
            </div>

            <div className="md:col-span-7 space-y-3">
              <h4 className="font-bold text-lg text-[#163a75]">Join Lemmy Lou &amp; Friends</h4>
              <p className="text-xs text-[#163a75]/80">
                Be the first to hear about new stories, activity books, downloadable resources and products.
              </p>

              {subscribed ? (
                <div className="p-3 bg-white/90 border border-[#43ad59] rounded-full text-xs font-bold text-[#43ad59] flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Welcome to the Lemmy Lou Club! We&apos;ll keep you updated.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-white border border-[#cad7e7] rounded-full px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#f43d86]"
                  />
                  <button
                    type="submit"
                    className="bg-[#f43d86] hover:bg-[#d92c73] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors whitespace-nowrap shadow-xs"
                  >
                    JOIN THE LEMMY LOU CLUB &rarr;
                  </button>
                </form>
              )}
              <p className="text-[10px] text-[#163a75]/60">
                Occasional emails. No clutter — just new resources, activities and Lemmy Lou news.
              </p>
            </div>
          </div>

          {/* Footer Ribbon Strip */}
          <div className="bg-[#dff3a5] rounded-2xl p-4 text-center font-bold text-xs sm:text-sm text-[#163a75] flex flex-col sm:flex-row items-center justify-center gap-3">
            <span>Stories to talk about. Activities to explore. Tools children can carry with them.</span>
            <a
              href="#collection"
              className="px-4 py-1.5 bg-[#168bd4] hover:bg-[#0e75b7] text-white rounded-full text-xs font-bold transition-colors uppercase tracking-wider"
            >
              SHOP LEMMY LOU &amp; FRIENDS &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
