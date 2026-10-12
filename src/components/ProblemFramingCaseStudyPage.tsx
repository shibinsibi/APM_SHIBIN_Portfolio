import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Target,
  Users,
  Lightbulb,
  Scale,
  ExternalLink,
  Heart,
  TrendingUp,
  AlertTriangle,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  DollarSign,
  Utensils,
  TrafficCone,
  Flame,
} from 'lucide-react';

interface ProblemFramingCaseStudyPageProps {
  onBack: () => void;
}

export const ProblemFramingCaseStudyPage: React.FC<ProblemFramingCaseStudyPageProps> = ({
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
              Case Study
            </span>
            <span>·</span>
            <span>Zomato Problem Framing & Prioritization</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-4xl px-6 sm:px-8 py-12 sm:py-20">
        {/* Article Meta / Category */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#172033] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white font-mono">
            CASE STUDY 03
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
            Zomato · Problem Framing & Prioritization
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#172033] leading-[1.15]">
          Zomato: Driving User Engagement & Retention Through Problem Framing & Prioritization
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl font-editorial italic text-[#596273] mb-12">
          “Moving from understanding user problems to making product decisions: turning research into clear problem statements, exploring multiple solutions, and prioritizing opportunities based on user value and business impact.”
        </p>

        {/* SCENARIO OVERVIEW CARD */}
        <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs mb-14 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
                Scenario
              </span>
            </div>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#172033] leading-relaxed">
            <p>
              Imagine you’re a <strong>Product Manager at Zomato</strong>, focused on improving <strong>user engagement and retention</strong> on the platform by building new user-facing features.
            </p>
            <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 p-4 text-sm font-medium text-[#172033]">
              <span className="text-[#A07A4A] font-semibold uppercase tracking-wider text-xs block mb-1">
                Objective
              </span>
              Identify user pain points, define key problems, and prioritize features that can meaningfully drive engagement and retention on the platform.
            </div>
          </div>

          {/* 4 Pillars Nav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2">
            {[
              { num: 'Part 1', label: 'User Research', icon: Target, color: 'text-[#3B82F6]' },
              { num: 'Part 2', label: 'Persona & Problem Definition', icon: Users, color: 'text-[#A07A4A]' },
              { num: 'Part 3', label: 'Solution Generation', icon: Lightbulb, color: 'text-[#172033]' },
              { num: 'Part 4', label: 'Prioritization', icon: Scale, color: 'text-[#3B82F6]' },
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

        {/* PART 1: USER RESEARCH */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold font-mono">
              01
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 1: User Research
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-[#596273] leading-relaxed text-base sm:text-lg space-y-4">
            <p>
              Based on <strong>21 user responses</strong>, I identified recurring behavioral patterns and used them to develop directional personas. These personas are hypotheses that would require validation with a larger and more diverse sample.
            </p>

            {/* Research Link Card */}
            <div className="my-6 rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A07A4A] block">
                  Primary Research Survey Data
                </span>
                <p className="text-sm text-stone-700">
                  Access the complete qualitative and quantitative survey form responses.
                </p>
              </div>

              <a
                href="https://forms.gle/mbYkL8JTLKtDbady9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#172033] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#3B82F6] transition-colors shadow-2xs shrink-0 group cursor-pointer"
              >
                <span>View User Research Survey</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* PART 2: PERSONA & PROBLEM DEFINITION */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A07A4A] text-white text-xs font-bold font-mono">
              02
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 2: Persona & Problem Definition
            </h2>
          </div>

          {/* PERSONA 01 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">💰</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
                  Persona 01 — Value-Conscious Optimizer
                </h3>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-[#A07A4A]">
                Value + Convenience
              </span>
            </div>

            {/* Problem Statement Callout */}
            <div className="rounded-xl border-l-4 border-[#A07A4A] bg-[#FAF8F5] p-5 text-sm sm:text-base text-stone-800 leading-relaxed space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A07A4A] block">
                Problem Statement
              </span>
              <p>
                Users are experiencing frustration with high overall order costs, additional charges, and inconsistent offers while trying to find good food at a price that feels worthwhile, because they lack a consistently transparent and personalized way to identify the best value for their needs, which can lead them to compare alternatives, reduce their ordering frequency, or switch to competing platforms.
              </p>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-stone-50/70 p-4 rounded-xl border border-stone-200/60">
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[10px] font-mono">Age</span>
                <span className="font-semibold text-stone-800 text-sm">18–34</span>
              </div>
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[10px] font-mono">Location</span>
                <span className="font-semibold text-stone-800 text-sm">Urban cities in the research sample</span>
              </div>
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[10px] font-mono">Primary Need</span>
                <span className="font-semibold text-stone-800 text-sm">Value + Convenience</span>
              </div>
            </div>

            {/* Goals & Pain Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <span>🎯</span>
                  <span>Goals</span>
                </span>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Get good-quality food at a reasonable price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Find meaningful discounts and offers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Avoid unnecessary additional charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Get better value from repeat orders</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                  <span>😣</span>
                  <span>Pain Points</span>
                </span>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>High overall order cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>Delivery and additional charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>Discounts that don't always feel valuable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>Price differences across food-delivery platforms</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Behavior Flow & Reflection Question */}
            <div className="rounded-xl bg-[#FAF9F6] border border-stone-200/80 p-4 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#172033] flex items-center gap-1.5">
                <span>🧠</span>
                <span>Behavior Flow</span>
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-stone-700">
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Craving / Need</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Browse</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Compare</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Check offers</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Evaluate value</span>
                <span>→</span>
                <span className="bg-[#172033] text-white px-2.5 py-1 rounded font-semibold">Order</span>
              </div>
              <p className="text-xs italic text-stone-600 font-serif pt-1">
                Before ordering, they often ask: <strong className="text-stone-900 font-normal">“Is this really worth the price I'm paying?”</strong>
              </p>
            </div>
          </div>

          {/* PERSONA 02 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍔</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
                  Persona 02 — Experience-Driven Convenience Seeker
                </h3>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#3B82F6]">
                Convenience + Quality + Reliability
              </span>
            </div>

            {/* Problem Statement Callout */}
            <div className="rounded-xl border-l-4 border-[#3B82F6] bg-[#F0F7FF] p-5 text-sm sm:text-base text-stone-800 leading-relaxed space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] block">
                Problem Statement
              </span>
              <p>
                Users are experiencing frustration with unpredictable delivery times, poor communication, and inconsistent order quality while trying to get food conveniently and reliably, because they lack sufficient visibility and consistency throughout the ordering and delivery experience, which can reduce trust in the platform and discourage repeat usage.
              </p>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-stone-50/70 p-4 rounded-xl border border-stone-200/60">
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[10px] font-mono">Age</span>
                <span className="font-semibold text-stone-800 text-sm">18–34</span>
              </div>
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[10px] font-mono">Location</span>
                <span className="font-semibold text-stone-800 text-sm">Urban cities in the research sample</span>
              </div>
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[10px] font-mono">Primary Need</span>
                <span className="font-semibold text-stone-800 text-sm">Convenience + Quality + Reliability</span>
              </div>
            </div>

            {/* Goals & Pain Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <span>🎯</span>
                  <span>Goals</span>
                </span>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Quickly find something they want to eat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Receive good-quality food</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Know when their order will arrive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>Have a smooth experience when something goes wrong</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                  <span>😣</span>
                  <span>Pain Points</span>
                </span>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>Long or unpredictable delivery times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>Poor order tracking or communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>Food arriving cold or poorly packaged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>Inconsistent food quality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Behavior Flow & Reflection Question */}
            <div className="rounded-xl bg-[#FAF9F6] border border-stone-200/80 p-4 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#172033] flex items-center gap-1.5">
                <span>🧠</span>
                <span>Behavior Flow</span>
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-stone-700">
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Craving / Need</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Browse / Search</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Evaluate</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Order</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Track</span>
                <span>→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Experience</span>
                <span>→</span>
                <span className="bg-[#172033] text-white px-2.5 py-1 rounded font-semibold">Decide to repeat</span>
              </div>
              <p className="text-xs italic text-stone-600 font-serif pt-1">
                Before ordering, they often ask: <strong className="text-stone-900 font-normal">“Can I trust Zomato to give me a smooth experience?”</strong>
              </p>
            </div>
          </div>
        </section>

        {/* PART 3: SOLUTION GENERATION */}
        <section className="space-y-12 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#172033] text-white text-xs font-bold font-mono">
              03
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 3: Solution Generation
            </h2>
          </div>

          {/* Solutions for Persona 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="text-lg">💰</span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#172033] font-normal">
                Solutions for Persona 1 — Value-Conscious Optimizer
              </h3>
            </div>

            {/* Solution 1.1 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#A07A4A]">1.1</span>
                <h4 className="font-semibold text-lg text-[#172033] flex items-center gap-1.5">
                  <span>❤️</span>
                  <span>Favorites & Smart Deal Alerts</span>
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                Users can save their favorite restaurants and dishes. Instead of generic promotional notifications, Zomato sends alerts when something relevant changes.
              </p>

              <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 p-4 space-y-1.5 text-xs">
                <span className="font-semibold text-[#A07A4A] uppercase tracking-wider block">Example Notification</span>
                <p className="font-medium text-stone-900">
                  ❤️ Your favorite Butter Chicken is ₹80 cheaper today.
                </p>
                <p className="text-stone-600">
                  Order from your saved restaurant and save ₹80. Users can also receive alerts when their favorite restaurant launches a meaningful offer.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-800">User Value:</strong> Gives users a reason to return to Zomato when something they already like becomes a better-value option.
              </div>
            </div>

            {/* Solution 1.2 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#A07A4A]">1.2</span>
                <h4 className="font-semibold text-lg text-[#172033] flex items-center gap-1.5">
                  <span>⚖️</span>
                  <span>Value Comparison</span>
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                When users are deciding between restaurants, Zomato helps them compare the overall value, rather than just ratings or food prices.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#FAF9F6] border-b border-stone-200 font-semibold text-stone-800">
                    <tr>
                      <th className="p-3">Metric</th>
                      <th className="p-3">Restaurant A</th>
                      <th className="p-3">Restaurant B</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr>
                      <td className="p-3 font-medium">Food</td>
                      <td className="p-3">₹280</td>
                      <td className="p-3">₹230</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Additional charges</td>
                      <td className="p-3">₹40</td>
                      <td className="p-3">₹30</td>
                    </tr>
                    <tr className="bg-stone-50/50 font-semibold text-stone-900">
                      <td className="p-3">Total</td>
                      <td className="p-3">₹320</td>
                      <td className="p-3">₹260</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Rating</td>
                      <td className="p-3">4.5 ⭐</td>
                      <td className="p-3">4.3 ⭐</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">ETA</td>
                      <td className="p-3">30 min</td>
                      <td className="p-3">38 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-900">
                  <span className="font-bold block mb-0.5">Best Value: Restaurant B</span>
                  Save ₹60 with comparable overall satisfaction.
                </div>
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-900">
                  <span className="font-bold block mb-0.5">Best for Speed: Restaurant A</span>
                  Arrives 8 minutes quicker.
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-800">User Value:</strong> Reduces the effort of comparing alternatives and increases confidence in the final choice by making trade-offs between price, quality, and convenience transparent.
              </div>
            </div>

            {/* Solution 1.3 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#A07A4A]">1.3</span>
                <h4 className="font-semibold text-lg text-[#172033] flex items-center gap-1.5">
                  <span>💰</span>
                  <span>Budget Guard</span>
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                Users can set a preferred meal/order budget, for example <strong>₹300</strong>. As items and charges are added, Zomato shows the actual total against that budget.
              </p>

              <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                  <span className="font-semibold text-amber-800 flex items-center gap-1">
                    <span>⚠️</span>
                    <span>Your order is ₹335</span>
                  </span>
                  <span className="text-stone-600 font-mono">₹35 above your ₹300 budget</span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-semibold text-stone-900 block">Stay within ₹300:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="p-2.5 rounded bg-white border border-stone-200 text-stone-800">
                      <span className="block font-medium">🍛 Similar dish</span>
                      <span className="font-semibold text-emerald-700">₹245</span>
                    </div>
                    <div className="p-2.5 rounded bg-white border border-stone-200 text-stone-800">
                      <span className="block font-medium">🍱 Better-value combo</span>
                      <span className="font-semibold text-emerald-700">₹270</span>
                    </div>
                    <div className="p-2.5 rounded bg-white border border-stone-200 text-stone-800">
                      <span className="block font-medium">🍗 Alternative restaurant</span>
                      <span className="font-semibold text-emerald-700">₹285</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-800">User Value:</strong> Helps users control spending without forcing them to abandon their original craving.
              </div>
            </div>

            {/* Solution 1.4 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#A07A4A]">1.4</span>
                <h4 className="font-semibold text-lg text-[#172033] flex items-center gap-1.5">
                  <span>📈</span>
                  <span>Value Journey</span>
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                Zomato shows users the cumulative value they have received from making better decisions over time.
              </p>

              <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 p-4 space-y-2.5 text-xs">
                <span className="font-semibold text-[#A07A4A] uppercase tracking-wider block">
                  Your Zomato Value Journey
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-medium text-stone-800">
                  <div className="bg-white p-2.5 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px]">Monthly Orders</span>
                    <span className="font-bold text-sm">7 orders</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px]">Total Spent</span>
                    <span className="font-bold text-sm">₹2,340</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px]">Saved</span>
                    <span className="font-bold text-sm text-emerald-600">₹380</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-stone-200">
                    <span className="text-stone-500 block text-[10px]">On-Budget Orders</span>
                    <span className="font-bold text-sm">5 orders</span>
                  </div>
                </div>
                <div className="pt-1.5 flex items-center gap-2 text-stone-700">
                  <span>💡</span>
                  <span>
                    <strong>Your best-value order this month:</strong> You saved ₹65 compared with your usual spend.
                  </span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-800">User Value:</strong> Makes the user's accumulated value visible and reinforces the perception that Zomato helps them spend smarter.
              </div>
            </div>
          </div>

          {/* Solutions for Persona 2 */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <span className="text-lg">🍔</span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#172033] font-normal">
                Solutions for Persona 2 — Experience-Driven Convenience Seeker
              </h3>
            </div>

            {/* Solution 2.1 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#3B82F6]">2.1</span>
                <h4 className="font-semibold text-lg text-[#172033] flex items-center gap-1.5">
                  <span>🍱</span>
                  <span>Food Quality Rating</span>
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                Show a separate <strong>Food Quality Rating</strong> directly alongside the restaurant's existing overall rating.
              </p>

              <div className="rounded-xl bg-[#F0F7FF] border border-blue-100 p-4 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-stone-900 text-sm">Paradise Biryani</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-blue-200 font-semibold text-stone-800">
                    ⭐ 4.4 Overall
                  </span>
                  <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold text-emerald-800">
                    🍱 Food Quality 4.6
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  The existing restaurant rating represents the overall restaurant experience (delivery speed, packaging, rider), while the Food Quality Rating focuses specifically on the taste and condition of food received.
                </p>
                <div className="pt-1 text-stone-700 font-mono">
                  Comparison: Restaurant A (⭐ 4.4 | 🍱 4.7) vs Restaurant B (⭐ 4.6 | 🍱 4.1)
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-800">User Value:</strong> Helps users make a more informed decision about food quality without having to read through multiple reviews.
              </div>
            </div>

            {/* Solution 2.2 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#3B82F6]">2.2</span>
                <h4 className="font-semibold text-lg text-[#172033] flex items-center gap-1.5">
                  <span>🍽️</span>
                  <span>Restaurant Demand Status</span>
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                When a restaurant is experiencing unusually high demand, Zomato proactively communicates this to the customer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-900 flex items-center gap-1">
                    <span>🟠</span>
                    <span>Before Ordering</span>
                  </span>
                  <p className="font-semibold text-stone-900">High demand right now</p>
                  <p className="text-stone-600">
                    This restaurant is currently receiving more orders than usual. Preparation may take longer.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-900 flex items-center gap-1">
                    <span>🟠</span>
                    <span>After Ordering</span>
                  </span>
                  <p className="font-semibold text-stone-900">Restaurant is busy</p>
                  <p className="text-stone-600">
                    Your order is still being prepared. The restaurant is currently handling high order volume.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-800">User Value:</strong> Instead of wondering why an order is taking longer, users understand the operational reason behind the delay.
              </div>
            </div>

            {/* Solution 2.3 */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#3B82F6]">2.3</span>
                <h4 className="font-semibold text-lg text-[#172033] flex items-center gap-1.5">
                  <span>🚦</span>
                  <span>Live Delivery Context</span>
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                Enhance the existing live order map with traffic information along the delivery route.
              </p>

              <div className="rounded-xl bg-stone-50 border border-stone-200 p-4 space-y-3 text-xs">
                <div className="flex flex-wrap items-center gap-3 font-medium">
                  <span className="flex items-center gap-1 text-emerald-700 bg-white px-2.5 py-1 rounded border border-stone-200">
                    🟢 Light traffic
                  </span>
                  <span className="flex items-center gap-1 text-amber-700 bg-white px-2.5 py-1 rounded border border-stone-200">
                    🟠 Moderate traffic
                  </span>
                  <span className="flex items-center gap-1 text-rose-700 bg-white px-2.5 py-1 rounded border border-stone-200">
                    🔴 Heavy traffic
                  </span>
                </div>

                <div className="p-3 rounded bg-white border border-rose-200 text-stone-800 space-y-1">
                  <span className="font-semibold text-rose-700 flex items-center gap-1">
                    <span>🚦</span>
                    <span>Heavy traffic ahead</span>
                  </span>
                  <p className="text-stone-600">
                    Estimated delivery time may increase by 8–12 minutes due to local congestion.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
                <strong className="text-stone-800">User Value:</strong> Gives users context when the delivery partner is delayed instead of making them feel that their order has stopped moving without explanation.
              </div>
            </div>
          </div>
        </section>

        {/* PART 4: PRIORITIZATION */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold font-mono">
              04
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 4: Prioritization
            </h2>
          </div>

          <div className="prose prose-stone max-w-none text-[#596273] leading-relaxed text-base sm:text-lg space-y-4">
            {/* RICE Priority Table */}
            <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-2xs my-2">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-[#FAF9F6] border-b border-stone-200 font-semibold text-stone-800 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5 sm:p-4">Feature</th>
                    <th className="p-3.5 sm:p-4 text-center">Reach</th>
                    <th className="p-3.5 sm:p-4 text-center">Impact</th>
                    <th className="p-3.5 sm:p-4 text-center">Confidence</th>
                    <th className="p-3.5 sm:p-4 text-center">Effort</th>
                    <th className="p-3.5 sm:p-4 text-right font-bold text-[#172033]">RICE Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  {/* Rank 1 */}
                  <tr className="bg-emerald-50/40 hover:bg-emerald-50/60 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-stone-900 flex items-center gap-2">
                      <span>🍱</span>
                      <span>Food Quality Rating</span>
                      <span className="ml-1 text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded uppercase">Top Bet</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-center">5</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">2</td>
                    <td className="p-3.5 sm:p-4 text-right font-bold font-mono text-emerald-700 text-base">30</td>
                  </tr>

                  {/* Rank 2 */}
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-stone-900 flex items-center gap-2">
                      <span>💰</span>
                      <span>Budget Guard</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">2</td>
                    <td className="p-3.5 sm:p-4 text-right font-bold font-mono text-[#172033] text-base">24</td>
                  </tr>

                  {/* Rank 3 */}
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-stone-900 flex items-center gap-2">
                      <span>⚖️</span>
                      <span>Value Comparison</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">2</td>
                    <td className="p-3.5 sm:p-4 text-right font-bold font-mono text-[#172033] text-base">24</td>
                  </tr>

                  {/* Rank 4 */}
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-stone-800 flex items-center gap-2">
                      <span>🍽️</span>
                      <span>Restaurant Demand Status</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-right font-bold font-mono text-stone-600">12</td>
                  </tr>

                  {/* Rank 5 */}
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-stone-800 flex items-center gap-2">
                      <span>❤️</span>
                      <span>Favorite + Deal Alerts</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">2</td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">2</td>
                    <td className="p-3.5 sm:p-4 text-right font-bold font-mono text-stone-600">12</td>
                  </tr>

                  {/* Rank 6 */}
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-stone-800 flex items-center gap-2">
                      <span>🚦</span>
                      <span>Live Delivery Context</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-center">4</td>
                    <td className="p-3.5 sm:p-4 text-center">2</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-right font-bold font-mono text-stone-600">8</td>
                  </tr>

                  {/* Rank 7 */}
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-stone-800 flex items-center gap-2">
                      <span>📈</span>
                      <span>Value Journey</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">1</td>
                    <td className="p-3.5 sm:p-4 text-center">3</td>
                    <td className="p-3.5 sm:p-4 text-center">2</td>
                    <td className="p-3.5 sm:p-4 text-right font-bold font-mono text-stone-600">4.5</td>
                  </tr>
                </tbody>
              </table>
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
