import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  FileText,
  Workflow,
  ExternalLink,
  Edit3,
  ArrowDown,
  RotateCcw,
  Check,
  X,
  HelpCircle,
} from 'lucide-react';

interface EffectiveCommunicationCaseStudyPageProps {
  onBack: () => void;
}

export const EffectiveCommunicationCaseStudyPage: React.FC<EffectiveCommunicationCaseStudyPageProps> = ({
  onBack,
}) => {
  const [activeFlowTab, setActiveFlowTab] = useState<'buddy' | 'trainer'>('buddy');
  const [pdfUrl, setPdfUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('vitafit_prd_pdf_url') ||
        'https://drive.google.com/file/d/1OWRCkNAYp2rDp1P9fYCaZWEsy2FL8KJt/view?usp=sharing'
      );
    }
    return '';
  });
  const [isEditingLink, setIsEditingLink] = useState(false);
  const [tempPdfUrl, setTempPdfUrl] = useState(pdfUrl);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSavePdfUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setPdfUrl(tempPdfUrl);
    try {
      localStorage.setItem('vitafit_prd_pdf_url', tempPdfUrl);
    } catch (err) {
      console.error(err);
    }
    setIsEditingLink(false);
  };

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
            <span>Effective Communication as a PM</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-4xl px-6 sm:px-8 py-12 sm:py-20">
        {/* Article Meta / Category */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#172033] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white font-mono">
            CASE STUDY 05
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
            Product Requirements Document (PRD) · VitaFit
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#172033] leading-[1.15]">
          VitaFit: Building Motivation, Community & Habit-Forming Fitness
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl font-editorial italic text-[#596273] mb-12">
          “Translating user motivation and retention drop-offs into a structured Product Requirements Document (PRD) and visualizing end-to-end user flows for Buddy Streaks & Trainer Circles.”
        </p>

        {/* SCENARIO & OBJECTIVE OVERVIEW CARD */}
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
              Imagine you’re a <strong>Product Manager at VitaFit</strong>, a leading health and fitness platform specializing in online and on-demand exercise sessions (yoga, zumba, etc.).
            </p>
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100 space-y-1.5 text-xs sm:text-sm text-stone-800">
              <span className="text-rose-700 font-bold uppercase tracking-wider text-[11px] block">
                The Business Challenge:
              </span>
              <p>The business is facing repeat usage and retention challenges due to:</p>
              <ul className="list-disc pl-5 space-y-1 text-stone-700">
                <li><strong>A drop in user motivation</strong> after initial onboarding</li>
                <li><strong>Lack of personal connection with instructors</strong> in impersonal on-demand formats</li>
              </ul>
            </div>

            <div className="rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 p-4 text-sm font-medium text-[#172033]">
              <span className="text-[#A07A4A] font-semibold uppercase tracking-wider text-xs block mb-1">
                Your Objective
              </span>
              Design two product features that help:
              <ul className="list-disc pl-5 mt-1 space-y-1 text-stone-700 text-xs sm:text-sm font-normal">
                <li>Improve user engagement</li>
                <li>Increase repeat usage</li>
                <li>Build community-driven and gamified experiences</li>
              </ul>
            </div>
          </div>

          {/* 2 Parts Nav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              {
                num: 'Part 1',
                label: 'Product Requirements Document (PRD)',
                desc: 'View attached PRD document for full specifications',
                icon: FileText,
                color: 'text-[#3B82F6]',
              },
              {
                num: 'Part 2',
                label: 'Visualize Core Flows',
                desc: 'End-to-end interactive flowcharts for both core features',
                icon: Workflow,
                color: 'text-[#A07A4A]',
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-stone-200/70"
                >
                  <Icon className={`h-5 w-5 ${step.color} shrink-0 mt-0.5`} />
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#596273] block">
                      {step.num}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#172033] block">
                      {step.label}
                    </span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">
                      {step.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 1: PRODUCT REQUIREMENTS DOCUMENT (PRD) TAB */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold font-mono">
              01
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 1: Product Requirements Document (PRD)
            </h2>
          </div>

          {/* TAB TO VIEW THIS PDF FOR PRD */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A07A4A] block font-semibold">
                  PRD Deliverable
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#172033] mt-0.5">
                  VitaFit – Building Motivation, Community & Habit-Forming Fitness
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Authored by Shibin Sibi · Comprehensive Product Requirements Document
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#172033] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#3B82F6] transition-colors shadow-2xs group cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-[#D9B88C]" />
                  <span>View this PDF for PRD</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setTempPdfUrl(pdfUrl);
                    setIsEditingLink(!isEditingLink);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#172033] py-2 px-3 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <Edit3 className="h-3.5 w-3.5 text-stone-400" />
                  <span>{isEditingLink ? 'Close' : 'Edit Link'}</span>
                </button>
              </div>
            </div>

            {/* Editable PDF Link Input */}
            {isEditingLink && (
              <form
                onSubmit={handleSavePdfUrl}
                className="space-y-3 bg-[#FAF9F6] p-4 rounded-xl border border-stone-200"
              >
                <label className="text-xs font-semibold text-[#172033] block">
                  Update PRD PDF URL / Drive Link:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={tempPdfUrl}
                    onChange={(e) => setTempPdfUrl(e.target.value)}
                    placeholder="https://drive.google.com/... or /vitafit-prd.pdf"
                    className="flex-1 text-xs rounded-lg border border-stone-300 bg-white px-3 py-2 text-[#172033] focus:border-[#3B82F6] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold bg-[#172033] text-white rounded-lg hover:bg-[#3B82F6] transition-colors cursor-pointer"
                  >
                    Save Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* PART 2: VISUALIZE CORE FLOWS (FROM PDF PAGES 8 & 10) */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A07A4A] text-white text-xs font-bold font-mono">
              02
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Part 2: Visualize Core Flows
            </h2>
          </div>

          {/* Flow Switcher Tabs */}
          <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl max-w-md">
            <button
              onClick={() => setActiveFlowTab('buddy')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFlowTab === 'buddy'
                  ? 'bg-white text-[#172033] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              🔥 Feature 1: Buddy Streaks Flow
            </button>
            <button
              onClick={() => setActiveFlowTab('trainer')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFlowTab === 'trainer'
                  ? 'bg-white text-[#172033] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ⭐ Feature 2: Trainer Circles Flow
            </button>
          </div>

          {/* FLOWCHART 1: BUDDY STREAKS (PAGE 8 OF PDF) */}
          {activeFlowTab === 'buddy' && (
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3B82F6] block">
                  Flow Diagram 01 · PDF Page 8
                </span>
                <h3 className="text-lg font-semibold text-[#172033]">
                  Buddy Streaks with Lightweight Chat Flowchart
                </h3>
              </div>

              {/* Sequential Flow Nodes */}
              <div className="flex flex-col items-center max-w-xl mx-auto py-2 space-y-3">
                <div className="px-5 py-1.5 rounded-full bg-[#172033] text-white text-xs font-bold uppercase tracking-widest font-mono shadow-xs">
                  START
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  User opens Home Screen
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  Tap "Start Buddy Streak"
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  Select 1–3 friends
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  Send invites
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Decision 1: All friends accept? */}
                <div className="w-full p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 shadow-xs">
                  <div className="text-center font-bold text-xs uppercase tracking-wider text-amber-900 mb-2">
                    Decision: All friends accept?
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-lg bg-white border border-amber-200 text-center text-xs">
                      <span className="font-bold text-rose-600 block mb-0.5">No</span>
                      <span className="text-stone-700">Wait for pending invites</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-300 text-center text-xs">
                      <span className="font-bold text-emerald-600 block mb-0.5">Yes</span>
                      <span className="text-stone-700 font-medium">All buddies complete ≥1 workout same day</span>
                    </div>
                  </div>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs sm:text-sm font-bold text-emerald-900 shadow-2xs">
                  🔥 Buddy Streak starts (Day 1)
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  User opens app → View Buddy Streak status (🔥 Day X)
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Decision 2: User completes workout? */}
                <div className="w-full p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 shadow-xs">
                  <div className="text-center font-bold text-xs uppercase tracking-wider text-amber-900 mb-2">
                    Decision: User completes workout?
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-300 text-center text-xs">
                      <span className="font-bold text-emerald-600 block mb-0.5">Yes</span>
                      <span className="text-stone-700">Update streak progress & show positive reinforcement</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-amber-200 text-center text-xs">
                      <span className="font-bold text-rose-600 block mb-0.5">No</span>
                      <span className="text-stone-700">Check time window</span>
                    </div>
                  </div>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Decision 3: Any buddy incomplete? */}
                <div className="w-full p-4 rounded-2xl bg-rose-50/70 border-2 border-rose-300 shadow-xs text-center space-y-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-rose-900 block">
                    Any buddy incomplete?
                  </span>
                  <div className="p-3 rounded-lg bg-white border border-rose-200 text-xs text-stone-800 space-y-1">
                    <p className="font-bold text-rose-700">Yes → System marks "🔥 Streak at Risk"</p>
                    <p className="text-stone-600">Notify other buddies → Buddy sends nudge / message</p>
                  </div>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Decision 4: Pending buddy completes workout? */}
                <div className="w-full p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 shadow-xs">
                  <div className="text-center font-bold text-xs uppercase tracking-wider text-amber-900 mb-2">
                    Decision: Pending buddy completes workout?
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-300 text-center text-xs">
                      <span className="font-bold text-emerald-600 block mb-0.5">Yes</span>
                      <span className="text-stone-800 font-semibold">Streak saved 🎉</span>
                      <span className="text-[10px] text-emerald-600 block mt-0.5">Streak maintained</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-rose-200 text-center text-xs">
                      <span className="font-bold text-rose-600 block mb-0.5">No</span>
                      <span className="text-stone-700">Streak saver available?</span>
                      <span className="text-[10px] text-stone-500 block mt-0.5">If none: Streak breaks, disable chat</span>
                    </div>
                  </div>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold text-blue-900 text-center">
                  Lightweight chat active → Send short messages / emojis → System posts streak updates
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="px-5 py-1.5 rounded-full bg-[#172033] text-white text-xs font-bold uppercase tracking-widest font-mono shadow-xs">
                  END / LOOP
                </div>
              </div>
            </div>
          )}

          {/* FLOWCHART 2: TRAINER CIRCLES (PAGE 10 OF PDF) */}
          {activeFlowTab === 'trainer' && (
            <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#A07A4A] block">
                  Flow Diagram 02 · PDF Page 10
                </span>
                <h3 className="text-lg font-semibold text-[#172033]">
                  Trainer Circles Flowchart
                </h3>
              </div>

              {/* Sequential Flow Nodes */}
              <div className="flex flex-col items-center max-w-xl mx-auto py-2 space-y-3">
                <div className="px-5 py-1.5 rounded-full bg-[#172033] text-white text-xs font-bold uppercase tracking-widest font-mono shadow-xs">
                  START
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  User attends trainer's class
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  View trainer profile
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  Tap "Join Trainer Circle"
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Decision: Circle has available slots? */}
                <div className="w-full p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 shadow-xs">
                  <div className="text-center font-bold text-xs uppercase tracking-wider text-amber-900 mb-2">
                    Decision: Circle has available slots? (Max 30–50)
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-lg bg-white border border-amber-200 text-center text-xs">
                      <span className="font-bold text-rose-600 block mb-0.5">No</span>
                      <span className="text-stone-700">User added to waitlist; notified when slot opens</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-300 text-center text-xs">
                      <span className="font-bold text-emerald-600 block mb-0.5">Yes</span>
                      <span className="text-stone-800 font-semibold">User joins Trainer Circle</span>
                      <span className="text-[10px] text-stone-500 block mt-0.5">Circle member count updated</span>
                    </div>
                  </div>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  User opens app → Navigate to Trainer Circle
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="w-full text-center p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 shadow-2xs">
                  View trainer posts (tips, motivation, challenges)
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Interaction Recorded */}
                <div className="w-full p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-center text-xs text-stone-800">
                  User reacts or comments? → <strong className="text-blue-900">Interaction recorded</strong>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Trainer Challenge Branch */}
                <div className="w-full p-4 rounded-xl bg-[#FAF8F5] border border-[#D9B88C]/40 text-xs space-y-1.5 text-stone-800 text-center">
                  <span className="font-bold text-[#A07A4A] uppercase tracking-wider block text-[11px]">
                    Trainer posts challenge?
                  </span>
                  <p>User views challenge → Joins challenge → Completes workouts → Progress tracked → Challenge completion acknowledged</p>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                {/* Live Class Shoutout */}
                <div className="w-full p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-xs space-y-1.5 text-purple-950 text-center">
                  <span className="font-bold text-purple-800 uppercase tracking-wider block text-[11px]">
                    Live class scheduled?
                  </span>
                  <p>User joins live class → Trainer sees member context (e.g. "5-day streak") → <strong>Trainer gives name-based shoutout!</strong></p>
                </div>

                <ArrowDown className="h-4 w-4 text-stone-400 stroke-[2]" />

                <div className="px-5 py-1.5 rounded-full bg-[#172033] text-white text-xs font-bold uppercase tracking-widest font-mono shadow-xs">
                  END / RETENTION LOOP
                </div>
              </div>
            </div>
          )}
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
