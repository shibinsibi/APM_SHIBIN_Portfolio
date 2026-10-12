import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Compass,
  MessageSquare,
  Sparkles,
  Lightbulb,
  Target,
  ShoppingCart,
  ShieldAlert,
  Zap,
  HelpCircle,
} from 'lucide-react';

interface ProductThinkingCaseStudyPageProps {
  onBack: () => void;
}

export const ProductThinkingCaseStudyPage: React.FC<ProductThinkingCaseStudyPageProps> = ({
  onBack,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#172033] selection:bg-[#EAF3FF] selection:text-[#172033]">
      {/* Sticky Top Header with Back Button */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#172033] hover:bg-stone-50 hover:border-stone-300 transition-colors shadow-2xs cursor-pointer group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#596273]">
            <span className="font-semibold uppercase tracking-wider text-[#3B82F6]">
              Amazon Case Study
            </span>
            <span>·</span>
            <span>Recommendation Product Bundle (RPB)</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-4xl px-6 sm:px-8 py-12 sm:py-20">
        {/* Article Meta / Category */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#172033] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white font-mono">
            CASE STUDY
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
            Amazon RPB
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#172033] leading-[1.15]">
          Applying Product Thinking: Amazon RPB
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl font-editorial italic text-[#596273] mb-12">
          “Don't jump to a solution before understanding the problem.”
        </p>

        {/* SCENARIO OVERVIEW CARD */}
        <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs mb-14 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
                Case Study Scenario
              </span>
            </div>
          </div>

          <div className="space-y-3 text-base sm:text-lg text-[#172033] leading-relaxed">
            <p>
              You’re a <strong>Product Manager at Amazon</strong>, focusing on the{' '}
              <strong>Recommendation Product Bundle (RPB)</strong> vertical.
            </p>
            <p className="text-[#596273] text-sm sm:text-base">
              Despite successful onboarding, users in <strong>Tier 1 cities</strong> are not actively engaging with RPB during their shopping journey. This lack of engagement is contributing directly to a drop in <strong>Average Order Value (AOV)</strong> and <strong>ARPU</strong>.
            </p>
            <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 p-4 text-sm font-medium text-[#172033]">
              <span className="text-[#A07A4A] font-semibold uppercase tracking-wider text-xs block mb-1">
                Your Mission
              </span>
              Identify strategic product opportunities to increase RPB adoption and improve AOV through structured product thinking.
            </div>
          </div>

          {/* 4 Pillars Nav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2">
            {[
              { num: 'Part 1', label: 'JTBD Framework', icon: Compass, color: 'text-[#3B82F6]' },
              { num: 'Part 2', label: 'First-Principles', icon: Lightbulb, color: 'text-[#A07A4A]' },
              { num: 'Part 3', label: 'Review Analysis', icon: MessageSquare, color: 'text-[#172033]' },
              { num: 'Part 4', label: 'Product Opportunity', icon: Target, color: 'text-[#3B82F6]' },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F6] border border-stone-200/70"
                >
                  <Icon className={`h-4 w-4 ${step.color} shrink-0`} />
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#596273] block">
                      {step.num}
                    </span>
                    <span className="text-xs font-semibold text-[#172033]">
                      {step.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 1: APPLY JTBD FRAMEWORK */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold font-mono">
              01
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 1: Apply JTBD Framework
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-[#596273] leading-relaxed text-base sm:text-lg space-y-4">
            {/* Core JTBD Statement Callout */}
            <div className="rounded-2xl border-l-4 border-[#3B82F6] bg-[#F0F7FF] p-6 text-[#172033] shadow-2xs">
              <p className="font-editorial text-xl sm:text-2xl text-[#172033] font-normal leading-snug">
                “When I buy a laptop, I want the right accessories to be suggested to me, so I can get everything I need in one purchase without having to search separately.”
              </p>
            </div>
          </div>
        </section>

        {/* PART 2: FIRST-PRINCIPLES THINKING */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A07A4A] text-white text-xs font-bold font-mono">
              02
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 2: First-Principles Thinking
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-[#596273] leading-relaxed text-base sm:text-lg space-y-4">
            <div className="space-y-3.5 my-4">
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#D9B88C] text-[#A07A4A] font-bold text-xs shrink-0 mt-0.5 font-mono">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-[#172033] text-base mb-1">
                    The user's primary intent is to buy the main product.
                  </h4>
                  <p className="text-sm text-[#596273]">
                    They arrived on the page for the laptop, not necessarily for accessories. Any bundle that distracts from the main purchase or adds friction risks being ignored.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#D9B88C] text-[#A07A4A] font-bold text-xs shrink-0 mt-0.5 font-mono">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-[#172033] text-base mb-1">
                    The user wants the bundle to offer good value compared with buying separately.
                  </h4>
                  <p className="text-sm text-[#596273]">
                    If a bundle merely sums up individual prices without clear bundled savings or demonstrable curation value, the user perceives no reason to commit upfront.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-2xs">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#D9B88C] text-[#A07A4A] font-bold text-xs shrink-0 mt-0.5 font-mono">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-[#172033] text-base mb-1">
                    The user decides whether to add or skip the bundle.
                  </h4>
                  <p className="text-sm text-[#596273]">
                    If evaluating the bundle requires too much effort such as checking compatibility, comparing prices, or assessing unfamiliar products the user may simply skip it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 3: SUMMARY OF USER REVIEW ANALYSIS */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#172033] text-white text-xs font-bold font-mono">
              03
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 3: Summary of User Review Analysis
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-[#596273] leading-relaxed text-base sm:text-lg space-y-4">
            <p>
              Tier 1 shoppers in India have been onboarded to RPB, but they don't use it. They aren't rejecting bundles as an idea. They ignore them because the bundles don't do a job they need at the moment they see them.
            </p>

            {/* Evidence & Market Signals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#3B82F6] font-semibold text-xs uppercase tracking-wider">
                  <Zap className="h-4 w-4" />
                  <span>Speed Over Savings</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Tier 1 users care more about speed than savings. Per PwC, 50% prioritise fast delivery, while smaller cities prioritise deals.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#A07A4A] font-semibold text-xs uppercase tracking-wider">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Quick Commerce Dominance</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Quick commerce has taken over "complete my basket." Blinkit, Zepto and Instamart now make up about 17% of online retail and about 70% of online grocery, mostly in metros.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs uppercase tracking-wider">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Low Trust & Dark Patterns</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Trust is low. Indian shoppers are sensitive to dark patterns: 75% report drip pricing and 21% report items sneaked into their basket (LocalCircles), and they extend that suspicion to unrequested add-ons.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#172033] font-semibold text-xs uppercase tracking-wider">
                  <HelpCircle className="h-4 w-4" />
                  <span>Ignored Rather Than Disliked</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Public complaints about bundles are almost nonexistent. Complaints target ads, delivery and hidden costs instead, so RPB is being ignored rather than disliked.
                </p>
              </div>
            </div>

            {/* Customer Facing Problems */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#A07A4A]">
                Customer Facing Problem
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 01 */}
                <div className="rounded-xl border border-stone-200/90 bg-white p-5 space-y-2 shadow-2xs">
                  <span className="font-mono text-xs font-bold text-[#3B82F6]">01</span>
                  <h4 className="font-semibold text-[#172033] text-sm uppercase tracking-wide">
                    TRUST & RELEVANCE
                  </h4>
                  <p className="text-xs italic text-[#596273] font-serif">
                    Are these recommendations actually right for me?
                  </p>
                  <div className="pt-2 text-xs text-stone-600 border-t border-stone-100 flex flex-wrap gap-1">
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Irrelevant products</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Sponsored-looking recommendations</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Untrusted brands</span>
                  </div>
                </div>

                {/* 02 */}
                <div className="rounded-xl border border-stone-200/90 bg-white p-5 space-y-2 shadow-2xs">
                  <span className="font-mono text-xs font-bold text-[#A07A4A]">02</span>
                  <h4 className="font-semibold text-[#172033] text-sm uppercase tracking-wide">
                    VALUE & CONVENIENCE
                  </h4>
                  <p className="text-xs italic text-[#596273] font-serif">
                    Is buying this bundle actually worth it?
                  </p>
                  <div className="pt-2 text-xs text-stone-600 border-t border-stone-100 flex flex-wrap gap-1">
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Unclear savings</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Delivery friction</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Return uncertainty</span>
                  </div>
                </div>

                {/* 03 */}
                <div className="rounded-xl border border-stone-200/90 bg-white p-5 space-y-2 shadow-2xs">
                  <span className="font-mono text-xs font-bold text-[#172033]">03</span>
                  <h4 className="font-semibold text-[#172033] text-sm uppercase tracking-wide">
                    DISCOVERABILITY & EFFORT
                  </h4>
                  <p className="text-xs italic text-[#596273] font-serif">
                    Can I find what I need without extra effort?
                  </p>
                  <div className="pt-2 text-xs text-stone-600 border-t border-stone-100 flex flex-wrap gap-1">
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Page clutter</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Low visibility</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">Faster alternatives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 4: PRODUCT OPPORTUNITY */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold font-mono">
              04
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 4: Product Opportunity
            </h2>
          </div>

          <div className="space-y-8">
            {/* Opportunity 01 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
                  Opportunity 01
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                  Cart Enhancement
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
                01 — “Did You Forget?” Smart Cart
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                <div className="md:col-span-5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
                    Problem
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Customers may realize they forgot complementary items, but going back to search for them creates extra effort.
                  </p>
                </div>

                <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-l border-stone-100 pt-4 md:pt-0 md:pl-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] block">
                    Concept
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    When customer add the product, suggest useful complementary items such as batteries, cables, refills, or compatible accessories.
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed pt-1">
                    The customer can add an item without restarting the shopping journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Opportunity 02 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A07A4A]">
                  Opportunity 02
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
                  Goal-Oriented AI
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
                02 — AI Kit Builder
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                <div className="md:col-span-5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
                    Problem
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Customers may have a specific goal but don't know which products they actually need. Generic “frequently bought together” recommendations may not match that goal.
                  </p>
                </div>

                <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-l border-stone-100 pt-4 md:pt-0 md:pl-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A07A4A] block">
                    Concept
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Let customers describe what they want to accomplish, and AI creates a relevant product kit.
                  </p>

                  {/* Concrete Example Box */}
                  <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/50 p-4 mt-3 space-y-2.5 text-xs text-[#172033]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#A07A4A]" />
                      <span className="font-semibold text-stone-800">
                        For example: “Set up a home office under ₹25,000.”
                      </span>
                    </div>
                    <p className="text-xs text-stone-600">AI could return:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 font-medium text-stone-700">
                      <span className="bg-white p-2 rounded border border-stone-200 text-center">Monitor</span>
                      <span className="bg-white p-2 rounded border border-stone-200 text-center">Keyboard</span>
                      <span className="bg-white p-2 rounded border border-stone-200 text-center">Mouse</span>
                      <span className="bg-white p-2 rounded border border-stone-200 text-center">Webcam</span>
                      <span className="bg-white p-2 rounded border border-stone-200 text-center col-span-2 sm:col-span-1">Desk accessories</span>
                    </div>
                    <p className="text-[11px] text-stone-500 pt-1">
                      Along with why each item is recommended, compatibility, and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#172033] px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#3B82F6] transition-colors shadow-xs cursor-pointer group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          <span className="text-xs text-[#596273]">
            Returning to What I’ve Learned
          </span>
        </div>
      </main>
    </div>
  );
};
