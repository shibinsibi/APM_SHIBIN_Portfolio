import React from 'react';
import { ARTICLES_DATA, JournalArticle } from '../data/articlesData';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Clock,
  StickyNote,
} from 'lucide-react';

interface WhatImExploringProps {
  onOpenArticle: (article: JournalArticle) => void;
}

export const WhatImExploring: React.FC<WhatImExploringProps> = ({ onOpenArticle }) => {
  return (
    <section
      id="what-im-exploring"
      className="relative border-b border-stone-200/80 bg-[#FAFAF7] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Label: 04 / PM NOTES */}
        <div className="mb-4 flex items-center gap-2.5">
          <span className="flex h-2 w-2 rounded-full bg-[#3B82F6]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] font-mono">
            04 / NOTES & EXPLORATIONS
          </span>
        </div>

        {/* Main Heading & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-stone-200/80">
          <div className="max-w-3xl">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#172033] text-balance">
              PM Working Notes
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#596273] leading-relaxed">
              Working notes, mental models, and practical frameworks on Product Management in the age of foundation models and rapid vibe coding.
            </p>
          </div>

          <div className="text-xs font-medium uppercase tracking-widest text-[#596273] hidden lg:block text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-stone-700 font-mono text-[11px] border border-stone-200">
              <StickyNote className="h-3 w-3 text-[#A07A4A]" />
              {ARTICLES_DATA.length} Field Notes
            </span>
          </div>
        </div>

        {/* 2 NOTES GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl">
          {ARTICLES_DATA.map((article, idx) => {
            const isNote1 = idx === 0;

            const iconMap = [Sparkles, Code2];
            const NoteIcon = iconMap[idx] || Sparkles;

            const accentColor = isNote1
              ? 'text-[#2563EB]'
              : 'text-emerald-700';

            const badgeBg = isNote1
              ? 'bg-blue-50 text-[#2563EB] border-blue-200'
              : 'bg-emerald-50 text-emerald-700 border-emerald-200';

            const hoverBorder = isNote1
              ? 'hover:border-[#2563EB]'
              : 'hover:border-emerald-600';

            return (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className={`relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 shadow-2xs ${hoverBorder} hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
              >
                {/* Note Top Bar */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider border ${badgeBg}`}>
                        <NoteIcon className="h-3 w-3" />
                        <span>{`0${idx + 1}. Note`}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#596273] font-mono">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Note Title */}
                  <div className="mt-5 space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A07A4A] font-semibold block">
                      {article.category}
                    </span>
                    <h3 className={`font-editorial text-2xl sm:text-3xl text-[#172033] font-normal leading-snug group-hover:${accentColor} transition-colors`}>
                      {`${idx + 1}. ${article.title}`}
                    </h3>
                    {article.subtitle && (
                      <p className="text-xs font-mono text-stone-500">
                        {article.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Note Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#596273] leading-relaxed font-normal">
                    {article.description}
                  </p>

                  {/* Tactile Lined Note Inset: Key Highlights */}
                  {article.highlights && (
                    <div className="mt-6 rounded-xl border border-stone-200/80 bg-[#FAF9F6] p-4 space-y-2.5">
                      <div className="flex items-center justify-between border-b border-stone-200/60 pb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600">
                          Key Notes & Principles:
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A07A4A]" />
                      </div>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {article.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0 group-hover:bg-[#3B82F6] transition-colors" />
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-7 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400">
                    {article.date}
                  </span>

                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#172033] group-hover:${accentColor} transition-colors`}>
                    <span>Read Full Note</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
