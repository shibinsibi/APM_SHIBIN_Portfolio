import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Target,
  Users,
  Workflow,
  Sparkles,
  ExternalLink,
  Clock,
  Apple,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Heart,
  Flame,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Calculator,
  ArrowDown,
  RefreshCw,
  ShoppingCart,
  ChefHat,
  Database,
  Filter,
  Check,
  X,
  HelpCircle,
  Layers,
  RotateCcw,
} from 'lucide-react';

interface UxDesignCaseStudyPageProps {
  onBack: () => void;
}

export const UxDesignCaseStudyPage: React.FC<UxDesignCaseStudyPageProps> = ({
  onBack,
}) => {
  const [activeFlowPhase, setActiveFlowPhase] = useState<'all' | 'onboarding' | 'generation' | 'review' | 'shopping' | 'cooking'>('all');

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
            <span>UX Design</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-4xl px-6 sm:px-8 py-12 sm:py-20">
        {/* Article Meta / Category */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#172033] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white font-mono">
            CASE STUDY 04
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
            UX Design · Yummi Plan Smart
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#172033] leading-[1.15]">
          Designing a Smart Meal Planning Experience for Busy Lifestyles
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl font-editorial italic text-[#596273] mb-12">
          “Defining the user and problem, mapping key user flows, building a working prototype in Lovable, and refining the experience through real user feedback.”
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
              You're designing a meal planning tool for busy users who want to organize their week’s meals in a smarter, faster way. Your prototype should help people plan meals based on:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-stone-800 font-medium">
              <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF9F6] border border-stone-200">
                <Clock className="h-4 w-4 text-[#3B82F6] shrink-0" />
                <span>Time available to cook</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF9F6] border border-stone-200">
                <Apple className="h-4 w-4 text-[#A07A4A] shrink-0" />
                <span>Dietary preferences or restrictions</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF9F6] border border-stone-200">
                <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Ingredients already available in their kitchen</span>
              </li>
            </ul>
            <p className="text-sm text-[#596273]">
              Your job is to define the right problems to solve, map key flows, and create a working prototype using Lovable—refined with real feedback.
            </p>

            <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 p-4 text-sm font-medium text-[#172033]">
              <span className="text-[#A07A4A] font-semibold uppercase tracking-wider text-xs block mb-1">
                Objective
              </span>
              Design a solution that makes weekly meal planning:
              <ul className="list-disc pl-5 mt-1.5 space-y-1 text-stone-700 text-xs sm:text-sm font-normal">
                <li>Less stressful and time-consuming</li>
                <li>Personalized (based on diet, time, or pantry items)</li>
                <li>Easy to adjust, reuse, and track</li>
              </ul>
            </div>
          </div>

          {/* 4 Process Pillars Nav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2">
            {[
              { num: 'Part 1', label: 'Define User & Problem', icon: Users, color: 'text-[#3B82F6]' },
              { num: 'Part 2', label: 'Map Key User Flows', icon: Workflow, color: 'text-[#A07A4A]' },
              { num: 'Part 3', label: 'Build Prototype (Lovable)', icon: Smartphone, color: 'text-[#172033]' },
              { num: 'Part 4', label: 'Test & Refine', icon: CheckCircle2, color: 'text-[#3B82F6]' },
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

        {/* PART 1: DEFINE TARGET USER & PROBLEM */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold font-mono">
              01
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 1: Define Your Target User & Problem
            </h2>
          </div>

          {/* Problem Statement Card */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] block">
              Problem Statement
            </span>
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-normal">
              Busy individuals and families are experiencing stress, decision fatigue, and wasted time while trying to plan their weekly meals efficiently because they can’t easily match recipes with their dietary needs, cooking time, and the ingredients they already have.
            </p>
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-100 text-xs text-rose-800 leading-relaxed">
              <strong>Negative Impact:</strong> This results in unhealthy last-minute food choices, wasted groceries, higher expenses, and a frustrating weekly planning experience.
            </div>
          </div>

          {/* User Personas */}
          <div className="space-y-6">
            <h3 className="font-editorial text-xl sm:text-2xl text-[#172033] font-normal">
              User Personas
            </h3>

            {/* Persona 1: Sneha */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A07A4A] block">
                    Persona 1
                  </span>
                  <h4 className="font-editorial text-2xl text-[#172033] font-normal">
                    The Busy Professional — Sneha
                  </h4>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  Vegetarian · Bangalore
                </span>
              </div>

              {/* Profile Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs bg-stone-50/70 p-3.5 rounded-xl border border-stone-200/60 font-medium text-stone-700">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Name</span>
                  <span>Sneha</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Location</span>
                  <span>Bangalore</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Family</span>
                  <span>Lives alone</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Diet</span>
                  <span className="text-emerald-700 font-semibold">Vegetarian</span>
                </div>
              </div>

              {/* Lifestyle */}
              <div className="space-y-1 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-semibold text-stone-900 block">Lifestyle:</span>
                <p>
                  Sneha works long hours and often feels too tired to think about what to cook after work. She tries to eat healthy, but last-minute decisions usually push her toward ordering food online.
                </p>
              </div>

              {/* Goals & Pain Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <span>🎯</span>
                    <span>Goals</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Cook faster meals on weekdays (under 30 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Reduce frequent online food ordering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Avoid buying ingredients she won't use</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                    <span>😣</span>
                    <span>Pain Points</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>Struggles with daily meal decisions and recipe overload</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>Limited cooking time (25–30 minutes max on weekdays)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>Forgets to check what ingredients are already available in the pantry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Persona 2: Rahul */}
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3B82F6] block">
                    Persona 2
                  </span>
                  <h4 className="font-editorial text-2xl text-[#172033] font-normal">
                    The Fitness-Focused Meal Planner — Rahul
                  </h4>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                  High-Protein · Non-Veg · Mumbai
                </span>
              </div>

              {/* Profile Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs bg-stone-50/70 p-3.5 rounded-xl border border-stone-200/60 font-medium text-stone-700">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Name</span>
                  <span>Rahul</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Location</span>
                  <span>Mumbai</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Family</span>
                  <span>Lives alone</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-mono">Diet</span>
                  <span className="text-blue-700 font-semibold">High-protein, Non-Veg</span>
                </div>
              </div>

              {/* Lifestyle */}
              <div className="space-y-1 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-semibold text-stone-900 block">Lifestyle:</span>
                <p>
                  Rahul is a dedicated fitness enthusiast who prepares meals every Sunday to stay on track with his diet. While he values consistency in his nutrition, he craves variety in flavours to keep his meals interesting. He looks for quick, friendly recipes that fit his busy schedule and fitness goals.
                </p>
              </div>

              {/* Goals & Pain Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
                    <span>🎯</span>
                    <span>Goals</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>High-protein meals with simple, accessible ingredients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>Weekly batch planning that aligns with his meal routine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>Avoid eating outside to maintain fitness consistency</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                    <span>😣</span>
                    <span>Pain Points</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>Struggles to find recipes matching exact macro & protein goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>Gets bored with repeating the exact same meals every day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>Doesn't have time to search for new recipes daily</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 2: MAP KEY USER FLOWS */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A07A4A] text-white text-xs font-bold font-mono">
              02
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 2: Map Key User Flows
            </h2>
          </div>

          {/* VISUAL FLOW CHART CONTAINER */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#172033]">
                  End-to-End User & System Flowchart
                </h3>
              </div>

              {/* Legend Badges */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-stone-600">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200">
                  <span className="h-2 w-2 rounded-full bg-[#172033]" />
                  <span>User Action</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900">
                  <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                  <span>System Process</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900">
                  <span className="h-2 w-2 rounded-full bg-[#A07A4A]" />
                  <span>Decision Diamond</span>
                </span>
              </div>
            </div>

            {/* FLOWCHART NODES & CONNECTIONS */}
            <div className="flex flex-col items-center max-w-xl mx-auto py-2 space-y-3">
              {/* 1. START */}
              <div className="px-6 py-2 rounded-full bg-[#172033] text-white text-xs font-bold uppercase tracking-widest font-mono shadow-xs">
                START
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 2. User opens app */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User opens app
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 3. Welcome screen -> 'Get Started' */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                Welcome screen → 'Get Started'
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 4. User selects dietary preferences */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User selects dietary preferences
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 5. User sets cooking time availability */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User sets cooking time availability
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 6. User adds pantry items */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User adds pantry items
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 7. User selects # of meals per day + days to plan */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User selects # of meals per day + days to plan
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 8. DECISION 1: Confirm setup? */}
              <div className="w-full p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 shadow-xs relative">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HelpCircle className="h-4 w-4 text-[#A07A4A]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900">
                    Decision: Confirm setup?
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {/* Branch No */}
                  <div className="p-3 rounded-xl bg-white border border-amber-200 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 uppercase mb-1">
                      <X className="h-3.5 w-3.5" /> No
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      Return to inputs
                    </span>
                    <span className="text-[10px] text-stone-500 mt-1 flex items-center gap-1">
                      <RotateCcw className="h-3 w-3" /> Loops back to setup
                    </span>
                  </div>

                  {/* Branch Yes */}
                  <div className="p-3 rounded-xl bg-white border border-emerald-300 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 uppercase mb-1">
                      <Check className="h-3.5 w-3.5" /> Yes
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      Profile created
                    </span>
                    <span className="text-[10px] text-emerald-600 mt-1 font-medium">
                      Proceed to home
                    </span>
                  </div>
                </div>
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 9. Redirect to Home Dashboard */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                Redirect to Home Dashboard
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 10. User clicks 'Generate Weekly Plan' */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User clicks 'Generate Weekly Plan'
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 11. System gathers inputs */}
              <div className="w-full p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-stone-800 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 font-semibold text-blue-900 text-xs uppercase tracking-wider">
                  <Database className="h-3.5 w-3.5 text-[#3B82F6]" />
                  <span>System gathers inputs:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                  <span className="bg-white p-1.5 rounded border border-blue-100 text-center">• Diet</span>
                  <span className="bg-white p-1.5 rounded border border-blue-100 text-center">• Cooking time</span>
                  <span className="bg-white p-1.5 rounded border border-blue-100 text-center">• Pantry items</span>
                  <span className="bg-white p-1.5 rounded border border-blue-100 text-center">• Days & meals</span>
                </div>
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 12. System filters recipes by */}
              <div className="w-full p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs sm:text-sm text-stone-800 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 font-semibold text-blue-900 text-xs uppercase tracking-wider">
                  <Filter className="h-3.5 w-3.5 text-[#3B82F6]" />
                  <span>System filters recipes by:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
                  <span className="bg-white p-1.5 rounded border border-blue-100 text-center">• Dietary match</span>
                  <span className="bg-white p-1.5 rounded border border-blue-100 text-center">• Time match</span>
                  <span className="bg-white p-1.5 rounded border border-blue-100 text-center">• Pantry match</span>
                </div>
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 13. System creates 7-day plan */}
              <div className="w-full text-center p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold text-blue-900 shadow-2xs">
                System creates 7-day plan
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 14. Display plan to user */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                Display plan to user
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 15. DECISION 2: User happy with the plan? */}
              <div className="w-full p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 shadow-xs relative">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HelpCircle className="h-4 w-4 text-[#A07A4A]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900">
                    Decision: User happy with the plan?
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {/* Branch No: Edit Plan */}
                  <div className="p-3.5 rounded-xl bg-white border border-amber-200 space-y-2 text-left">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 uppercase">
                      <X className="h-3.5 w-3.5" /> No → User edits plan:
                    </span>
                    <ul className="text-[11px] text-stone-700 space-y-1 list-disc pl-4">
                      <li>Swap meal</li>
                      <li>Drag & drop</li>
                      <li>Replace with faster recipe</li>
                    </ul>
                    <div className="pt-1 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500 font-medium">
                      <span>Return to plan view</span>
                      <RotateCcw className="h-3 w-3 text-stone-400" />
                    </div>
                  </div>

                  {/* Branch Yes: Finalize */}
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-300 flex flex-col justify-between text-left">
                    <div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 uppercase mb-1">
                        <Check className="h-3.5 w-3.5" /> Yes
                      </span>
                      <p className="text-xs font-semibold text-stone-900 mt-1">
                        User saves & finalizes weekly plan
                      </p>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-medium pt-2">
                      Ready for shopping list
                    </span>
                  </div>
                </div>
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 16. User clicks 'Create Shopping List' */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User clicks 'Create Shopping List'
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 17. System subtracts pantry items */}
              <div className="w-full text-center p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold text-blue-900 shadow-2xs">
                System subtracts pantry items
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 18. System groups items by category */}
              <div className="w-full text-center p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold text-blue-900 shadow-2xs">
                System groups items by category
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 19. User reviews list */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs hover:border-stone-400 transition-colors">
                User reviews list
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 20. DECISION 3: Make changes? */}
              <div className="w-full p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 shadow-xs relative">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HelpCircle className="h-4 w-4 text-[#A07A4A]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900">
                    Decision: Make changes?
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {/* Branch Yes: User edits */}
                  <div className="p-3 rounded-xl bg-white border border-amber-200 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 uppercase mb-1">
                      <Check className="h-3.5 w-3.5" /> Yes
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      User edits quantities / items
                    </span>
                    <span className="text-[10px] text-stone-500 mt-1 flex items-center gap-1">
                      <RotateCcw className="h-3 w-3" /> Return to list
                    </span>
                  </div>

                  {/* Branch No: User shops */}
                  <div className="p-3 rounded-xl bg-white border border-emerald-300 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 uppercase mb-1">
                      <X className="h-3.5 w-3.5" /> No
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      User shops & marks items as bought
                    </span>
                    <span className="text-[10px] text-emerald-600 mt-1 font-medium">
                      Pantry ready
                    </span>
                  </div>
                </div>
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 21. During the week: User opens recipe -> enters Cook Mode */}
              <div className="w-full text-center p-3.5 rounded-xl bg-[#FAF9F6] border border-stone-300 text-xs sm:text-sm font-semibold text-stone-900 shadow-2xs">
                During the week: User opens recipe → enters Cook Mode
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 22. Show step-by-step instructions + timers */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                Show step-by-step instructions + timers
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 23. User marks ingredients as used */}
              <div className="w-full text-center p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                User marks ingredients as used
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 24. Pantry updates automatically */}
              <div className="w-full text-center p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs sm:text-sm font-semibold text-emerald-900 shadow-2xs">
                Pantry updates automatically
              </div>

              <ArrowDown className="h-5 w-5 text-stone-400 stroke-[2]" />

              {/* 25. END */}
              <div className="px-6 py-2 rounded-full bg-[#172033] text-white text-xs font-bold uppercase tracking-widest font-mono shadow-xs">
                END
              </div>
            </div>
          </div>
        </section>

        {/* PART 3: BUILD PROTOTYPE (IN LOVABLE) */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#172033] text-white text-xs font-bold font-mono">
              03
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 3: Build Your Prototype (in Lovable)
            </h2>
          </div>

          {/* Interactive Prototype Card */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A07A4A] block font-semibold">
                  Working Interactive Prototype
                </span>
                <h3 className="text-lg font-semibold text-[#172033] mt-0.5">
                  Yummi Plan Smart (Built with Lovable)
                </h3>
              </div>

              <a
                href="https://yummi-plan-smart.lovable.app/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#172033] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#3B82F6] transition-colors shadow-2xs group cursor-pointer shrink-0"
              >
                <Smartphone className="h-4 w-4 text-[#D9B88C]" />
                <span>Open Prototype (Lovable)</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
              <p>
                The live prototype was constructed and deployed in Lovable, bringing the mapped user flows to life with an intuitive interface, responsive meal calendar, and instant recipe generation.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs font-mono text-stone-700 flex flex-wrap items-center justify-between gap-2">
                <span>Prototype URL:</span>
                <a
                  href="https://yummi-plan-smart.lovable.app/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3B82F6] hover:underline flex items-center gap-1 font-semibold break-all"
                >
                  https://yummi-plan-smart.lovable.app/welcome
                  <ExternalLink className="h-3 w-3 inline" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PART 4: TEST & REFINE */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold font-mono">
              04
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 4: Test & Refine
            </h2>
          </div>

          {/* User Feedback Card */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] block">
              Feedback from Real Users
            </span>
            <ul className="space-y-2.5 text-sm text-stone-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Users felt the app already includes all the <strong>core features</strong> required for daily meal planning.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>There is strong user interest in experiencing this as a <strong>real mobile app</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#3B82F6] mt-0.5 shrink-0" />
                <span>A highly requested enhancement was a <strong>nutritional auto-calculator</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#3B82F6] mt-0.5 shrink-0" />
                <span>Users want to clearly see: <strong>calories provided by each food item</strong> and <strong>health & nutritional benefits</strong> of consuming the food (e.g., sustained energy, muscle repair, digestion, immunity).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A07A4A] mt-0.5 shrink-0" />
                <span>This feature significantly <strong>increased perceived value</strong>, with users indicating they would be <strong>willing to pay</strong> for the app if included.</span>
              </li>
            </ul>
          </div>

          {/* Refinements & Impact Achieved */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A07A4A] block">
              Prototype Refinements & Impact
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Problem */}
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1.5 text-xs sm:text-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                  Problem
                </span>
                <p className="text-stone-800 leading-relaxed">
                  Users lacked clear visibility into the <strong>nutritional value, calorie count, and health benefits</strong> of food items, making it harder to make informed eating choices.
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1.5 text-xs sm:text-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                  Solution
                </span>
                <p className="text-stone-800 leading-relaxed">
                  A <strong>nutritional auto-calculator</strong> was integrated into the prototype, displaying <strong>calorie information and key health benefits</strong> for each meal item.
                </p>
              </div>

              {/* Impact */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1.5 text-xs sm:text-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                  Impact Achieved
                </span>
                <p className="text-stone-800 leading-relaxed">
                  The experience became more <strong>informative and value-driven</strong>, helping users make better food decisions and increasing <strong>engagement and willingness to pay</strong>.
                </p>
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
