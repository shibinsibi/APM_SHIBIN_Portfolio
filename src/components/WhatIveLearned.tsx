import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

interface PrincipleItem {
  number: string;
  title: string;
  description?: string;
  reflection?: string;
  caseStudyType?:
    | 'product-thinking'
    | 'campedge'
    | 'problem-framing'
    | 'ux-design'
    | 'effective-communication'
    | 'analytics-metrics'
    | 'twitter-growth-loops'
    | 'gtm-strategy';
}

interface WhatIveLearnedProps {
  onOpenEssay?: (principle: any) => void;
  onOpenProductThinkingCaseStudy?: () => void;
  onOpenCampEdgeCaseStudy?: () => void;
  onOpenProblemFramingCaseStudy?: () => void;
  onOpenUxDesignCaseStudy?: () => void;
  onOpenEffectiveCommunicationCaseStudy?: () => void;
  onOpenAnalyticsMetricsCaseStudy?: () => void;
  onOpenTwitterGrowthLoopsCaseStudy?: () => void;
  onOpenGtmStrategyCaseStudy?: () => void;
  onOpenFinalProjectCaseStudy?: () => void;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'APPLY PRODUCT THINKING',
    reflection:
      'In this case study, I learned how to apply product thinking by exploring four approaches: JTBD Framework, First-Principles Thinking, User Review Analysis, and Product Opportunity Identification.',
    caseStudyType: 'product-thinking',
  },
  {
    number: '02',
    title: 'Product Discovery, Market & User Research',
    reflection:
      'For this case study, I explored why users hesitate to participate in campaigns and what could make CampEdge more valuable for both participants and organizers.',
    caseStudyType: 'campedge',
  },
  {
    number: '03',
    title: 'Problem Framing & Prioritization',
    reflection:
      'This case study helped me move from understanding user problems to making product decisions. I learned how to turn research into clear problem statements, explore multiple solutions, and prioritize opportunities based on user value and business impact.',
    caseStudyType: 'problem-framing',
  },
  {
    number: '04',
    title: 'UX Design',
    reflection:
      'This case study taught me how to turn a user problem into a practical product experience. I learned to define the user and problem, map the key journey, build an prototype , and refine the experience through real user feedback.',
    caseStudyType: 'ux-design',
  },
  {
    number: '05',
    title: 'Effective Communication as a PM',
    reflection:
      'This case study taught me how to translate a product problem into a structured Product Requirements Document (PRD) and visualize the core user flows. I learned how to define feature requirements, clarify user interactions, and connect product decisions to engagement and retention goals.',
    caseStudyType: 'effective-communication',
  },
  {
    number: '06',
    title: 'Analytics and Metrics',
    reflection:
      'This case study taught me how to measure product performance using OKRs, supporting KPIs, funnel analysis, and cohort analysis. I learned how to connect business objectives with measurable outcomes, identify drop-offs across the food delivery journey, and understand user engagement and retention over time.',
    caseStudyType: 'analytics-metrics',
  },
  {
    number: '07',
    title: 'Product Launch & Adoption',
    reflection:
      'This case study taught me how to explore how growth happens within Twitter/X, choose and improve one key growth loop, define strategic epics, and prioritize initiatives using the RICE framework.',
    caseStudyType: 'twitter-growth-loops',
  },
  {
    number: '08',
    title: 'Tech 101 & System Design',
    reflection:
      'This case study taught me how to approach personalised product experiences by designing a learning recommendation system for different user personas. I learned how to connect user needs and business objectives, define relevant recommendations for learners, instructors, and platform admins, and align product decisions with measurable outcomes such as engagement, course completion, and user satisfaction.',
    caseStudyType: 'gtm-strategy',
  },
];

export const WhatIveLearned: React.FC<WhatIveLearnedProps> = ({
  onOpenProductThinkingCaseStudy,
  onOpenCampEdgeCaseStudy,
  onOpenProblemFramingCaseStudy,
  onOpenUxDesignCaseStudy,
  onOpenEffectiveCommunicationCaseStudy,
  onOpenAnalyticsMetricsCaseStudy,
  onOpenTwitterGrowthLoopsCaseStudy,
  onOpenGtmStrategyCaseStudy,
  onOpenFinalProjectCaseStudy,
}) => {
  const [isLearningPhaseOpen, setIsLearningPhaseOpen] = useState(true);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.45;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          setActiveIdx(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="what-ive-learned"
      className="relative bg-[#172033] text-[#FAFAF7] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle background ambient warmth */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#D9B88C]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#3B82F6]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#D9B88C]">
              04 / What I’ve Learned
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAFAF7] text-balance">
            A few things experience has taught me.
          </h2>
        </div>

        {/* Thin divider line */}
        <div className="mt-12 mb-16 sm:mb-20 h-[1px] w-full bg-[#FAFAF7]/15" />

        {/* SECTION 1: LEARNING PHASE (DROPDOWN FOR 01-08) */}
        <div className="rounded-3xl border border-[#FAFAF7]/15 bg-[#172033]/90 backdrop-blur-md overflow-hidden mb-20 shadow-2xl transition-all duration-300">
          {/* Dropdown Header / Trigger */}
          <button
            type="button"
            onClick={() => setIsLearningPhaseOpen(!isLearningPhaseOpen)}
            className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-left hover:bg-[#FAFAF7]/5 transition-colors cursor-pointer group"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#D9B88C]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D9B88C]">
                  Core Curriculum · 01–08
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#FAFAF7] font-normal group-hover:text-[#D9B88C] transition-colors">
                Learning Phase
              </h3>
              <p className="text-xs sm:text-sm text-[#FAFAF7]/70 font-normal max-w-2xl leading-relaxed">
                Foundational product management principles and case studies covering product thinking, user research, problem framing, UX design, communication, analytics, growth loops, and system architecture.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
              <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#FAFAF7]/10 text-[#FAFAF7]/90 font-medium border border-[#FAFAF7]/10">
                {isLearningPhaseOpen ? 'Collapse (01–08)' : 'Expand (01–08)'}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAFAF7]/10 border border-[#FAFAF7]/15 group-hover:border-[#D9B88C]/40 group-hover:bg-[#FAFAF7]/15 transition-all">
                <ChevronDown
                  className={`h-5 w-5 text-[#D9B88C] transition-transform duration-300 ${
                    isLearningPhaseOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          </button>

          {/* Collapsible Content */}
          {isLearningPhaseOpen && (
            <div className="px-6 sm:px-10 pb-10 pt-6 border-t border-[#FAFAF7]/10">
              {/* Vertical Scrolling Timeline Container */}
              <div className="relative pt-6">
                {/* Vertical Connecting Line (runs behind the numbers) */}
                <div
                  className="absolute left-4 sm:left-12 lg:left-16 top-6 bottom-12 w-[1px] bg-[#FAFAF7]/15"
                  aria-hidden="true"
                >
                  {/* Active beige progress highlight line */}
                  <div
                    className="w-full bg-[#D9B88C] transition-all duration-500 ease-out"
                    style={{
                      height: `${((activeIdx + 1) / PRINCIPLES.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Timeline Items */}
                <div className="space-y-16 sm:space-y-24 lg:space-y-28">
                  {PRINCIPLES.map((principle, idx) => {
                    const isActive = activeIdx === idx;

                    return (
                      <div
                        key={principle.number}
                        ref={(el) => {
                          itemRefs.current[idx] = el;
                        }}
                        onMouseEnter={() => setActiveIdx(idx)}
                        className={`relative grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start transition-all duration-500 cursor-pointer ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-40 hover:opacity-85'
                        }`}
                      >
                        {/* Number & Node */}
                        <div className="sm:col-span-4 flex items-center gap-4 sm:gap-6">
                          <div className="relative z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#172033] border border-[#FAFAF7]/20 transition-all duration-300">
                            <div
                              className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
                                isActive
                                  ? 'bg-[#D9B88C] scale-125 shadow-[0_0_12px_rgba(217,184,140,0.6)]'
                                  : 'bg-[#FAFAF7]/30'
                              }`}
                            />
                          </div>

                          <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tabular-nums text-[#D9B88C] tracking-tight select-none">
                            {principle.number}
                          </span>
                        </div>

                        {/* Title, Description & Reflection */}
                        <div className="sm:col-span-8 pl-10 sm:pl-0 space-y-3">
                          <h3
                            className={`font-editorial text-2xl sm:text-3xl font-normal tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-[#FAFAF7]' : 'text-[#FAFAF7]/80'
                            }`}
                          >
                            {principle.title}
                          </h3>

                          {principle.description && (
                            <p className="text-sm sm:text-base text-[#FAFAF7]/90 font-normal leading-relaxed">
                              {principle.description}
                            </p>
                          )}

                          <div
                            className={`pt-3 border-t transition-all duration-500 space-y-3 ${
                              isActive
                                ? 'border-[#D9B88C]/30 opacity-100'
                                : 'border-transparent opacity-0 sm:opacity-50'
                            }`}
                          >
                            <p className="text-xs sm:text-sm text-[#FAFAF7]/70 leading-relaxed font-normal">
                              <span className="text-[#D9B88C] font-semibold mr-2">Note —</span>
                              {principle.reflection}
                            </p>

                            {/* View Case Study Button for Principle 01 */}
                            {principle.caseStudyType === 'product-thinking' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenProductThinkingCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}

                            {/* View Case Study Button for Principle 02 (CampEdge) */}
                            {principle.caseStudyType === 'campedge' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenCampEdgeCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}

                            {/* View Case Study Button for Principle 03 (Problem Framing & Prioritization) */}
                            {principle.caseStudyType === 'problem-framing' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenProblemFramingCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}

                            {/* View Case Study Button for Principle 04 (UX Design) */}
                            {principle.caseStudyType === 'ux-design' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenUxDesignCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}

                            {/* View Case Study Button for Principle 05 (Effective Communication as a PM) */}
                            {principle.caseStudyType === 'effective-communication' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenEffectiveCommunicationCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}

                            {/* View Case Study Button for Principle 06 (Analytics and Metrics) */}
                            {principle.caseStudyType === 'analytics-metrics' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenAnalyticsMetricsCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}

                            {/* View Case Study Button for Principle 07 (Product Launch & Adoption) */}
                            {principle.caseStudyType === 'twitter-growth-loops' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenTwitterGrowthLoopsCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}

                            {/* View Case Study Button for Principle 08 (Tech 101 & System Design) */}
                            {principle.caseStudyType === 'gtm-strategy' && (
                              <div className="pt-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenGtmStrategyCaseStudy?.();
                                  }}
                                  className="inline-flex items-center gap-2 rounded-xl bg-[#D9B88C] text-[#172033] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-xs group"
                                >
                                  <span>View Case Study</span>
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Closing Thought Marker */}
              <div className="mt-20 sm:mt-24 pt-8 border-t border-[#FAFAF7]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs tracking-wider uppercase text-[#FAFAF7]/60">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9B88C]" />
                  <span>Foundational product management methodology</span>
                </div>
                <span className="text-[#D9B88C] font-mono">
                  08 of 08 Modules · Learning Phase
                </span>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 2: FINAL PROJECT - FROM PROBLEM TO PRODUCT */}
        <div className="relative rounded-3xl border border-[#D9B88C]/30 bg-gradient-to-b from-[#1C263D] to-[#172033] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle glow effect */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D9B88C]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#3B82F6]/10 blur-3xl" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#FAFAF7]/15 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-[#D9B88C]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D9B88C]">
                    Capstone Deliverable
                  </span>
                </div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FAFAF7]">
                  FINAL PROJECT - FROM PROBLEM TO PRODUCT
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={onOpenFinalProjectCaseStudy}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#D9B88C] text-[#172033] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#ebd3b5] active:scale-[0.98] transition-all cursor-pointer shadow-lg group"
                >
                  <span className="flex h-2 w-2 rounded-full bg-[#172033]/70 animate-pulse" />
                  <span>In Progress</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-[#FAFAF7]/90 font-editorial italic max-w-3xl leading-relaxed">
              “Emphasizes the complete PM process — from discovery and user research to problem framing, UX prototyping, PRD documentation, metrics instrumentation, and go-to-market launch.”
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#FAFAF7]/10 text-xs text-[#FAFAF7]/60">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Comprehensive End-to-End Capstone Deliverable · In Progress
              </span>
              <button
                type="button"
                onClick={onOpenFinalProjectCaseStudy}
                className="text-xs font-semibold text-[#D9B88C] hover:underline cursor-pointer inline-flex items-center gap-1 self-start sm:self-auto"
              >
                <span>In Progress</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
