import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Compass,
  FileText,
  ExternalLink,
  Users,
  Sparkles,
  Target,
  Edit3,
} from 'lucide-react';

interface CampEdgeCaseStudyPageProps {
  onBack: () => void;
}

export const CampEdgeCaseStudyPage: React.FC<CampEdgeCaseStudyPageProps> = ({
  onBack,
}) => {
  // State for presentation & prototype links with localStorage persistence
  const [pdfUrl, setPdfUrl] = useState<string>(
'https://drive.google.com/file/d/16DOUCSfbVF62Pym9II0jXNWd3KsXONIM/view?usp=sharing'
);

  const [prototypeUrl, setPrototypeUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('campedge_prototype_url') ||
        'https://campedge-trust-ux.lovable.app'
      );
    }
    return '';
  });

  const [isEditingLinks, setIsEditingLinks] = useState(false);
  const [tempPdfUrl, setTempPdfUrl] = useState(pdfUrl);
  const [tempProtoUrl, setTempProtoUrl] = useState(prototypeUrl);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSaveLinks = (e: React.FormEvent) => {
    e.preventDefault();
    setPdfUrl(tempPdfUrl);
    setPrototypeUrl(tempProtoUrl);
    try {
      localStorage.setItem('campedge_pdf_url', tempPdfUrl);
      localStorage.setItem('campedge_prototype_url', tempProtoUrl);
    } catch (err) {
      console.error(err);
    }
    setIsEditingLinks(false);
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
            <span>CampEdge Campaigning Ecosystem</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-4xl px-6 sm:px-8 py-12 sm:py-20">
        {/* Article Meta / Category */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#172033] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white font-mono">
            CASE STUDY 02
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
            CampEdge
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#172033] leading-[1.15]">
          CampEdge: Building India’s Thriving Campaigning Ecosystem
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl sm:text-2xl font-editorial italic text-[#596273] mb-12">
          “Uncovering why users hesitate to discover and join campaigns, and designing high-impact features for participants and organizers.”
        </p>

        {/* SCENARIO OVERVIEW CARD */}
        <div className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xs mb-8 space-y-6">
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
              Imagine you are a product manager at <strong>CampEdge</strong>, a new-age startup aiming to build a thriving campaigning ecosystem in India. CampEdge offers a mobile app and website where users can discover, book, and participate in campaigns—social causes, political movements, environmental clean-ups, and more.
            </p>
            <p className="text-[#596273] text-sm sm:text-base">
              Although the core platform is live, <strong>user adoption and first-time conversions are slow</strong>. Your goal is to identify high-impact features that can improve adoption and organizer engagement.
            </p>
          </div>

          {/* 3 Parts Nav Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              {
                num: 'Part 1',
                label: 'Conduct Market Research & User Interviews',
                icon: Compass,
                color: 'text-[#3B82F6]',
              },
              {
                num: 'Part 2',
                label: 'User Research',
                icon: Users,
                color: 'text-[#A07A4A]',
              },
              {
                num: 'Part 3',
                label: 'Summarize Insights & Strategy',
                icon: Target,
                color: 'text-[#172033]',
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-stone-200/70"
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

        {/* DELIVERABLES & ARTIFACTS CARD (COMES AFTER THE SCENARIO) */}
        <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-2xs mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
            <h2 className="text-sm font-semibold text-[#172033]">
              Presentation Deck & Interactive Prototype
            </h2>

            <button
              type="button"
              onClick={() => {
                setTempPdfUrl(pdfUrl);
                setTempProtoUrl(prototypeUrl);
                setIsEditingLinks(!isEditingLinks);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#172033] py-1 px-2.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 transition-colors cursor-pointer"
            >
              <Edit3 className="h-3.5 w-3.5 text-stone-400" />
              <span>{isEditingLinks ? 'Close' : 'Edit Links'}</span>
            </button>
          </div>

          {/* Action Buttons for PDF & Prototype */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#172033] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#3B82F6] transition-colors shadow-2xs group"
            >
              <FileText className="h-4 w-4 text-[#D9B88C] group-hover:scale-110 transition-transform" />
              <span>View Presentation (PDF)</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>

            <a
              href={prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-stone-300 px-4 py-2.5 text-xs font-semibold text-[#172033] hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-2xs group"
            >
              <Sparkles className="h-4 w-4 text-[#3B82F6] group-hover:rotate-12 transition-transform" />
              <span>Open Prototype (Lovable)</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>

          {/* Quick Editing Form */}
          {isEditingLinks && (
            <form
              onSubmit={handleSaveLinks}
              className="mt-5 pt-4 border-t border-stone-100 space-y-3 bg-[#FAF9F6] p-4 rounded-xl"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#A07A4A] block">
                Update Deliverable URLs
              </span>
              <div className="space-y-1">
                <label className="text-xs font-medium text-stone-700 block">
                  Presentation (PDF or Google Slides URL)
                </label>
                <input
                  type="url"
                  value={tempPdfUrl}
                  onChange={(e) => setTempPdfUrl(e.target.value)}
                  placeholder="https://drive.google.com/... or /presentation.pdf"
                  className="w-full text-xs rounded-lg border border-stone-300 bg-white px-3 py-2 text-[#172033] focus:border-[#3B82F6] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-stone-700 block">
                  Interactive Prototype URL (Lovable / Figma)
                </label>
                <input
                  type="url"
                  value={tempProtoUrl}
                  onChange={(e) => setTempProtoUrl(e.target.value)}
                  placeholder="https://...lovable.app"
                  className="w-full text-xs rounded-lg border border-stone-300 bg-white px-3 py-2 text-[#172033] focus:border-[#3B82F6] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingLinks(false)}
                  className="px-3 py-1.5 text-xs text-stone-500 hover:text-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold bg-[#172033] text-white rounded-lg hover:bg-[#3B82F6] transition-colors"
                >
                  Save Links
                </button>
              </div>
            </form>
          )}
        </div>

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
