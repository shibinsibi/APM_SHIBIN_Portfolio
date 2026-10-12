import React, { useEffect } from 'react';
import { Principle } from '../types';
import { X, BookOpen, Clock } from 'lucide-react';

interface EssayModalProps {
  principle: Principle | null;
  onClose: () => void;
}

export const EssayModal: React.FC<EssayModalProps> = ({ principle, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (principle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [principle, onClose]);

  if (!principle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172033]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-stone-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4 bg-[#FAFAF7]">
          <div className="flex items-center gap-3 text-xs text-[#596273]">
            <span className="font-semibold uppercase tracking-wider text-[#3B82F6]">
              Principle {principle.number}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{principle.readTime}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-200/60 hover:text-[#172033] transition-colors cursor-pointer"
            aria-label="Close Essay"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Essay Content */}
        <div className="overflow-y-auto px-6 py-8 sm:px-12 space-y-6">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D9B88C]">
              Product Journal Entry
            </span>
            <h2 className="mt-2 font-editorial text-3xl sm:text-4xl text-[#172033] leading-tight">
              {principle.title}
            </h2>

            <div className="mt-5 border-l-2 border-[#D9B88C] pl-4 py-1 bg-[#F5EDE2]/40 rounded-r-lg">
              <p className="font-editorial text-lg italic text-[#172033]">
                “{principle.quote}”
              </p>
            </div>
          </div>

          {/* Full Prose */}
          <div className="space-y-4 text-base text-[#172033]/90 leading-relaxed font-normal">
            {principle.fullEssay.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Key Takeaways & PM Heuristics */}
          <div className="mt-8 rounded-xl border border-stone-200 bg-[#FAFAF7] p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#172033] mb-3">
              <BookOpen className="h-4 w-4 text-[#3B82F6]" />
              <span>Actionable PM Heuristics:</span>
            </div>
            <ul className="space-y-2 text-sm text-[#596273]">
              {principle.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold mt-0.5">·</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="border-t border-stone-200 bg-[#FAFAF7] px-6 py-4 flex items-center justify-between text-xs text-[#596273]">
          <span>By Shibin Sibi · Product Management × AI</span>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#172033] px-4 py-2 text-xs font-medium text-white hover:bg-[#3B82F6] transition-colors"
          >
            Finished Reading
          </button>
        </div>
      </div>
    </div>
  );
};
