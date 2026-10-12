import React, { useEffect } from 'react';
import { JournalArticle } from '../data/articlesData';
import { X, Clock, Sparkles } from 'lucide-react';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172033]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-stone-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4 bg-[#FAFAF7]">
          <div className="flex items-center gap-3 text-xs text-[#596273]">
            <span className="font-semibold uppercase tracking-wider text-[#3B82F6]">
              {article.category}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 font-mono">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </span>
            <span>·</span>
            <span className="font-mono">{article.date}</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-200/60 hover:text-[#172033] transition-colors cursor-pointer"
            aria-label="Close Article"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Editorial Article Content */}
        <div className="overflow-y-auto px-6 py-8 sm:px-12 space-y-8 bg-white text-[#172033]">
          {/* Article Header */}
          <div className="border-b border-stone-200 pb-6 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9B88C] font-mono">
              PM Working Note
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[2.5rem] font-normal leading-tight text-[#172033]">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-xs sm:text-sm font-mono text-[#A07A4A] font-medium">
                {article.subtitle}
              </p>
            )}
            <p className="text-base sm:text-lg text-[#596273] leading-relaxed font-normal pt-1">
              {article.description}
            </p>
          </div>

          {/* Key Note Takeaways / Highlights */}
          {article.highlights && article.highlights.length > 0 && (
            <div className="rounded-xl border border-stone-200 bg-[#FAF9F6] p-5 space-y-2.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A07A4A] block">
                Key Notes & Principles:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#172033]">
                {article.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] mt-2 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lead Paragraph */}
          {article.fullContent?.lead && (
            <div className="rounded-xl border border-stone-200/90 bg-[#FAFAF7] p-6 text-base sm:text-lg text-[#172033] font-editorial italic leading-relaxed">
              "{article.fullContent.lead}"
            </div>
          )}

          {/* Structured Sections */}
          {article.fullContent?.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-2 border-t border-stone-100 first:border-t-0 first:pt-0">
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#172033] tracking-tight">
                {section.heading}
              </h2>

              {/* Paragraphs */}
              {section.paragraphs && section.paragraphs.length > 0 && (
                <div className="space-y-3 text-sm sm:text-base text-[#596273] leading-relaxed font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Flow Diagram */}
              {section.flowDiagram && (
                <div className="rounded-xl border border-blue-200 bg-[#EAF3FF] px-4 py-3.5 my-3 text-xs sm:text-sm font-mono text-[#172033] flex items-center justify-center text-center overflow-x-auto shadow-2xs">
                  <span className="font-semibold text-[#2563EB] tracking-wide">
                    {section.flowDiagram}
                  </span>
                </div>
              )}

              {/* Bullets */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 pt-1">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] mt-2 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Table */}
              {section.table && (
                <div className="overflow-x-auto rounded-xl border border-stone-200 my-4 shadow-2xs">
                  <table className="min-w-full divide-y divide-stone-200 text-left text-xs sm:text-sm">
                    <thead className="bg-[#FAF9F6]">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th
                            key={hIdx}
                            className="px-4 py-3 font-semibold uppercase tracking-wider text-[#172033] font-mono text-[11px]"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 bg-white">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-stone-50/70 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-4 py-3 text-stone-700 leading-relaxed ${
                                cIdx === 0
                                  ? 'font-semibold text-[#172033] whitespace-nowrap align-top'
                                  : 'align-top'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Callout Box / Code Template */}
              {section.calloutBox && (
                <div className="rounded-xl border border-stone-200 bg-[#FAF9F6] p-4.5 my-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#A07A4A]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A07A4A]">
                      {section.calloutBox.title}
                    </span>
                  </div>
                  {section.calloutBox.text && (
                    <pre className="text-xs sm:text-[13px] font-mono text-[#172033] bg-white p-3.5 rounded-lg border border-stone-200/70 whitespace-pre-wrap leading-relaxed">
                      {section.calloutBox.text}
                    </pre>
                  )}
                </div>
              )}

              {/* Checklist */}
              {section.checklist && section.checklist.length > 0 && (
                <div className="rounded-xl border border-stone-200 bg-white p-4.5 space-y-2.5 my-3 shadow-2xs">
                  {section.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <div className="h-4 w-4 rounded border border-stone-300 bg-stone-50 mt-0.5 flex items-center justify-center shrink-0">
                        <span className="text-[10px] text-emerald-600 font-bold">✓</span>
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Key Takeaway Callout */}
          {article.fullContent?.keyTakeaway && (
            <div className="rounded-xl border border-[#D9B88C]/60 bg-[#F5EDE2]/60 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A07A4A] mb-2">
                <Sparkles className="h-4 w-4" />
                <span>Core Research Synthesis</span>
              </div>
              <p className="text-sm sm:text-base text-[#172033] font-medium leading-relaxed">
                {article.fullContent.keyTakeaway}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 bg-[#FAFAF7] px-6 py-4 flex items-center justify-between text-xs text-[#596273]">
          <span className="font-editorial text-sm text-[#172033]">
            Shibin Sibi · PM Working Notes
          </span>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#172033] px-4 py-2 text-xs font-medium text-white hover:bg-[#3B82F6] transition-colors cursor-pointer"
          >
            Finished Reading
          </button>
        </div>
      </div>
    </div>
  );
};
