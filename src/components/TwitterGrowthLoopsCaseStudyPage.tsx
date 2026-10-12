import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Repeat,
  Zap,
  Layers,
  BarChart3,
  FileText,
  ExternalLink,
  Edit3,
} from 'lucide-react';

interface TwitterGrowthLoopsCaseStudyPageProps {
  onBack: () => void;
}

export const TwitterGrowthLoopsCaseStudyPage: React.FC<TwitterGrowthLoopsCaseStudyPageProps> = ({
  onBack,
}) => {
  const [pdfUrl, setPdfUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('twitter_growth_loops_pdf_url') ||
        'https://drive.google.com/file/d/placeholder-twitter-growth-loops/view?usp=sharing'
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
      localStorage.setItem('twitter_growth_loops_pdf_url', tempPdfUrl);
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
            <span>Product Launch & Adoption</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-4xl px-6 sm:px-8 py-12 sm:py-20">
        {/* Article Meta / Category */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#172033] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white font-mono">
            CASE STUDY 07
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
            Twitter/X · Product Launch & Adoption Framework
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#172033] leading-[1.15]">
          Product Launch & Adoption
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl font-editorial italic text-[#596273] mb-12">
          “Exploring in-app growth mechanics, diagnosing high-leverage loops, defining strategic epics, and prioritizing roadmap initiatives using RICE.”
        </p>

        {/* SCENARIO & OBJECTIVE CARD */}
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
              You’re a Product Manager at Twitter/X. Your goal is to explore how growth happens within the app and identify strategic opportunities to improve one loop to drive future growth.
            </p>
          </div>

          {/* 4 Parts Nav Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {[
              {
                num: 'Part 1',
                label: 'Map the Growth Loops',
                desc: 'Acquisition, content, notification & habituation flywheels',
                icon: Repeat,
                color: 'text-[#3B82F6]',
              },
              {
                num: 'Part 2',
                label: 'Choose and Improve One Growth Loop',
                desc: 'Friction audit, bottleneck diagnosis & loop mechanics',
                icon: Zap,
                color: 'text-[#A07A4A]',
              },
              {
                num: 'Part 3',
                label: 'Define Epics',
                desc: 'Strategic feature initiatives & tactical execution specs',
                icon: Layers,
                color: 'text-[#172033]',
              },
              {
                num: 'Part 4',
                label: 'Prioritize Using RICE',
                desc: 'Reach, Impact, Confidence & Effort scoring matrix',
                icon: BarChart3,
                color: 'text-emerald-700',
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col p-4 rounded-xl bg-[#FAF9F6] border border-stone-200/70 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${step.color} shrink-0`} />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#596273]">
                      {step.num}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#172033]">
                    {step.label}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-snug">
                    {step.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CASE STUDY DELIVERABLE (PDF) */}
        <section id="pdf-deliverable" className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white text-xs font-bold font-mono">
              <FileText className="h-4 w-4" />
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#172033] font-normal">
              Case Study Deliverable (PDF)
            </h2>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A07A4A] block font-semibold">
                  Complete Presentation & Analysis Deck
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#172033]">
                  Twitter/X: Product Launch & Adoption Framework
                </h3>
                <p className="text-xs text-stone-500">
                  Authored by Shibin Sibi · Growth loop mapping, feature epic definitions, and RICE prioritization model
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#172033] px-5 py-2.5 text-xs font-semibold text-white hover:bg-rose-600 transition-colors shadow-2xs group cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-[#D9B88C]" />
                  <span>View PDF Document</span>
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

            {/* Editable PDF Link Form */}
            {isEditingLink && (
              <form
                onSubmit={handleSavePdfUrl}
                className="space-y-3 bg-[#FAF9F6] p-4 rounded-xl border border-stone-200"
              >
                <label className="text-xs font-semibold text-[#172033] block">
                  Update Case Study PDF URL / Google Drive Link:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={tempPdfUrl}
                    onChange={(e) => setTempPdfUrl(e.target.value)}
                    placeholder="https://drive.google.com/... or /twitter-growth-loops.pdf"
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

            {/* Document Preview Card */}
            <div className="rounded-xl border border-stone-200/80 bg-[#FAF9F6] p-8 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-stone-200 shadow-2xs">
                <FileText className="h-7 w-7 text-rose-600" />
              </div>
              <div className="max-w-md mx-auto space-y-1.5">
                <h4 className="text-sm font-semibold text-[#172033]">
                  Twitter/X: Product Launch & Adoption Framework (PDF)
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Access the full slide deck and structured documentation including growth loop diagrams, epic specifications, and RICE scoring models.
                </p>
              </div>
              <div className="pt-2 flex justify-center items-center gap-3">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white border border-stone-300 px-4 py-2.5 text-xs font-semibold text-[#172033] hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-2xs cursor-pointer group"
                >
                  <FileText className="h-4 w-4 text-rose-600" />
                  <span>Open PDF in New Window</span>
                  <ExternalLink className="h-3 w-3 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button Footer */}
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
