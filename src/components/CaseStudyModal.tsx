import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172033]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-stone-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4 bg-[#FAFAF7]">
          <div className="flex items-center gap-3 text-xs text-[#596273]">
            <span className="font-semibold uppercase tracking-wider text-[#3B82F6]">
              {caseStudy.pillar} Case Study
            </span>
            <span>·</span>
            <span>{caseStudy.period}</span>
            <span>·</span>
            <span className="text-[#172033] font-medium">{caseStudy.role}</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-200/60 hover:text-[#172033] transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#172033] leading-tight">
              {caseStudy.title}
            </h2>
            <p className="mt-3 text-lg text-[#596273] font-normal leading-relaxed">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Hero Media Preview */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-stone-100 border border-stone-200">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Quantified Metrics Showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="rounded-xl border border-stone-200 bg-[#FAFAF7] p-4 text-center">
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-[#172033] tabular-nums">
                  {metric.value}
                </p>
                <p className="text-xs text-[#596273] mt-1">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Section: The Problem */}
          <div className="border-t border-stone-100 pt-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#172033] mb-2">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <span>The Problem & Friction Point</span>
            </div>
            <p className="text-sm text-[#596273] leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* Section: Approach & Strategic Framework */}
          <div className="border-t border-stone-100 pt-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#172033] mb-3">
              <TrendingUp className="h-4 w-4 text-[#3B82F6]" />
              <span>Product Approach & Execution Steps</span>
            </div>
            <ul className="space-y-2.5 text-sm text-[#596273]">
              {caseStudy.approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#3B82F6] font-bold mt-0.5">0{idx + 1}.</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: System Highlights */}
          <div className="border-t border-stone-100 pt-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#172033] mb-3">
              <Sparkles className="h-4 w-4 text-[#D9B88C]" />
              <span>System & Architectural Highlights</span>
            </div>
            <div className="rounded-xl bg-[#FAFAF7] p-5 border border-stone-200 space-y-2 text-xs text-[#596273]">
              {caseStudy.systemHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#172033]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Verified Outcomes */}
          <div className="border-t border-stone-100 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#172033] mb-3">
              Measurable Business Outcomes:
            </h3>
            <ul className="space-y-2 text-sm text-[#596273]">
              {caseStudy.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Critical PM Learning */}
          <div className="rounded-xl border border-[#D9B88C]/60 bg-[#F5EDE2]/70 p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A] block mb-1">
              Retrospective Learning
            </span>
            <p className="font-editorial text-base italic text-[#172033] leading-relaxed">
              “{caseStudy.learnings}”
            </p>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="border-t border-stone-200 bg-[#FAFAF7] px-6 py-4 flex items-center justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#172033] px-4 py-2 text-xs font-medium text-white hover:bg-[#3B82F6] transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
