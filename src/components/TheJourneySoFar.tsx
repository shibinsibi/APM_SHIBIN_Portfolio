import React, { useState } from 'react';
import { JourneyPath3D, MilestoneId } from './3d/JourneyPath3D';
import {
  GraduationCap,
  Award,
  Briefcase,
  X,
  Compass,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  Sparkles,
} from 'lucide-react';

interface JourneyProps {
  onOpenCaseStudy?: (caseStudy: any) => void;
}

export interface MilestoneData {
  id: MilestoneId;
  step: string;
  category: string;
  title: string;
  shortDescription: string;
  dates: string;
  icon: React.ComponentType<{ className?: string }>;
  structuredItems: {
    heading: string;
    organization?: string;
    timeline?: string;
    points?: string[];
  }[];
  keyDetails: string[];
}

export const MILESTONES_DATA: MilestoneData[] = [
  {
    id: 'education',
    step: '01',
    category: 'Foundations',
    title: 'Education',
    shortDescription: '',
    dates: '',
    icon: GraduationCap,
    structuredItems: [
      {
        heading: 'B.E. in Electronics & Telecommunication',
        organization: 'Savitribai Phule Pune University',
        timeline: '2018 — 2022',
        points: [],
      },
      {
        heading: 'PGDM / MBA in Information Technology',
        organization: 'MIT University',
        timeline: '2024 — 2026',
        points: [],
      },
    ],
    keyDetails: [],
  },
  {
    id: 'certifications',
    step: '02',
    category: 'Specialization',
    title: 'Certifications',
    shortDescription:
      'Industry-recognized credentials in enterprise digital commerce, product data systems, and product management.',
    dates: 'Credentialed & Continuous',
    icon: Award,
    structuredItems: [
      {
        heading: 'Salesforce Certified AI Associate',
        organization: 'Salesforce',
        timeline: 'Certified',
        points: [
          'Certified in foundational AI concepts, predictive and generative AI tools, and CRM intelligence.',
          'Responsible AI principles, prompt strategy, and trusted enterprise AI deployment.',
        ],
      },
      {
        heading: 'Salesforce Certified B2C Commerce Developer',
        organization: 'Salesforce',
        timeline: 'Certified',
        points: [
          'Certified in Salesforce B2C Commerce Cloud platform architecture.',
          'Storefront Reference Architecture (SFRA), controllers, pipelines, and cart mechanics.',
        ],
      },
      {
        heading: 'Akeneo Foundation Certification',
        organization: 'Akeneo',
        timeline: 'Certified',
        points: [
          'Product Information Management (PIM) foundation and catalog data structures.',
          'Multi-channel product taxonomy and enterprise data synchronization.',
        ],
      },
      {
        heading: 'AI Product Management',
        organization: 'Specialized Product Program',
        timeline: 'In progress',
        points: [
          'Translating machine intelligence, generative AI, and RAG into real user value.',
          'AI product discovery, ethical guardrails, and customer problem framing.',
        ],
      },
    ],
    keyDetails: [],
  },
  {
    id: 'experience',
    step: '03',
    category: 'Production Experience',
    title: 'Experience',
    shortDescription:
      'Almost 4 years working hands-on with enterprise e-commerce platforms and customer-facing digital experiences.',
    dates: 'Almost 4 Years Professional Experience',
    icon: Briefcase,
    structuredItems: [
      {
        heading: 'Salesforce Commerce Cloud Developer / Support',
        organization: 'Zensar Technologies',
        timeline: 'Almost 4 Years',
        points: [
          'Develop and customize scalable Salesforce B2C Commerce Cloud (SFRA) solutions for global luxury brands (Michael Kors, Versace).',
          'Build and maintain integrations between Salesforce and third-party systems Akeneo PIM, Arvato Order Management, and payment providers using REST and SOAP APIs to ensure reliable, end-to-end product and order data flow.',
          'Resolved a critical Arvato integration failure that restored global order processing and prevented revenue loss, earning the company’s Client Focus Award.',
          'Perform strategic Root Cause Analysis on critical defects in partnership with development teams, converting recurring production issues into permanent, scalable code fixes.',
          'Automate repetitive support and operational workflows, improving team efficiency and reducing average response and resolution times.',
          'Monitor platform health using Splunk, identifying error patterns and performance bottlenecks to proactively improve reliability and sustain 99%+ uptime.',
          'Track, prioritize, and document work in JIRA, collaborating across development, QA, and business stakeholders to deliver within SLA.',
        ],
      },
    ],
    keyDetails: [],
  },
];

export const TheJourneySoFar: React.FC<JourneyProps> = () => {
  const [activeMilestoneId, setActiveMilestoneId] = useState<MilestoneId>('education');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const activeMilestone =
    MILESTONES_DATA.find((m) => m.id === activeMilestoneId) || MILESTONES_DATA[0];

  const handleSelectMilestone = (id: MilestoneId) => {
    setActiveMilestoneId(id);
    setIsModalOpen(true); // Pops up the details modal immediately!
  };

  const getNextMilestoneId = (current: MilestoneId): MilestoneId => {
    if (current === 'education') return 'certifications';
    if (current === 'certifications') return 'experience';
    return 'education';
  };

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section
      id="the-journey"
      className="relative border-b border-stone-200/80 bg-[#FAFAF7] py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ========================================================
            SECTION HEADER & SUBTLE INSTRUCTION
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-stone-200/80">
          <div>
            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
                06 / EXPERIENCE & TIMELINE
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#172033]">
              The Journey So Far
            </h2>
          </div>

          {/* Recruiter-friendly Explore instruction pill */}
          <div className="flex items-center gap-2 rounded-full border border-stone-200/90 bg-white/80 px-4 py-2 text-xs text-[#596273] shadow-2xs backdrop-blur-xs">
            <Compass className="h-3.5 w-3.5 text-[#3B82F6] animate-spin-slow" />
            <span className="font-medium text-[#172033]">Explore my journey</span>
            <span className="text-stone-300">·</span>
            <span>Click any 3D node or card below</span>
          </div>
        </div>

        {/* ========================================================
            3D ORBITAL VISUALIZATION
           ======================================================== */}
        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-xs relative overflow-hidden group">
          {/* The 3D Canvas */}
          <JourneyPath3D
            activeMilestoneId={activeMilestoneId}
            onSelectMilestone={handleSelectMilestone}
            className="w-full"
          />

          {/* Quick node triggers right on the 3D card */}
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A4A]">
              Click node to pop up details:
            </span>
            <div className="flex items-center gap-2">
              {MILESTONES_DATA.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleSelectMilestone(m.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeMilestoneId === m.id
                      ? 'bg-[#3B82F6] text-white shadow-2xs'
                      : 'bg-[#FAFAF7] text-[#596273] hover:text-[#172033] hover:bg-stone-200/70 border border-stone-200/60'
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE / TABLET INTERACTIVE ACCORDION CARDS
            Guarantees 100% accessible, effortless touch interaction on phones
           ======================================================== */}
        <div className="mt-10 lg:hidden space-y-4">
          <div className="border-b border-stone-200/80 pb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#596273]">
              Mobile Milestone Breakdown
            </span>
          </div>

          {MILESTONES_DATA.map((milestone) => {
            const isSelected = activeMilestoneId === milestone.id;
            const IconComponent = milestone.icon;

            return (
              <div
                key={milestone.id}
                className={`rounded-2xl border transition-all duration-300 bg-white p-5 shadow-2xs ${
                  isSelected ? 'border-[#3B82F6] ring-1 ring-[#3B82F6]/30' : 'border-stone-200'
                }`}
              >
                <div
                  onClick={() => handleSelectMilestone(milestone.id)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        isSelected ? 'bg-[#3B82F6] text-white' : 'bg-[#FAFAF7] text-[#596273]'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A07A4A] block">
                        Milestone {milestone.step}
                      </span>
                      <h4 className="font-editorial text-xl font-bold text-[#172033]">
                        {milestone.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#3B82F6]">
                    {isSelected ? '● SELECTED' : 'TAP TO VIEW'}
                  </span>
                </div>

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-3 text-xs text-[#596273]">
                    {milestone.shortDescription ? (
                      <p className="text-stone-700 leading-relaxed">
                        {milestone.shortDescription}
                      </p>
                    ) : null}
                    <div className="space-y-2">
                      {milestone.structuredItems.map((item, i) => (
                        <div key={i} className="p-3 bg-[#FAF9F6] rounded-lg">
                          <p className="font-bold text-[#172033]">{item.heading}</p>
                          {item.organization && <p className="text-stone-500">{item.organization}</p>}
                          {item.timeline && (
                            <p className="text-[#3B82F6] font-mono mt-0.5">{item.timeline}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          POP-UP MODAL DIALOG
          Opens when user clicks Experience node (or any milestone)
         ======================================================== */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-milestone-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-200 bg-white p-6 sm:p-9 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close button */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center rounded-md bg-[#172033] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white uppercase font-mono">
                  Milestone {activeMilestone.step} of 03
                </span>
                <span className="text-xs text-[#596273] font-medium">
                  {activeMilestone.category}
                </span>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-[#172033] transition-colors cursor-pointer"
                aria-label="Close pop-up"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Switcher inside modal */}
            <div className="mb-6 flex items-center gap-2 border-b border-stone-100 pb-3">
              {MILESTONES_DATA.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMilestoneId(m.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                    activeMilestoneId === m.id
                      ? 'bg-[#3B82F6] text-white shadow-xs'
                      : 'bg-stone-100 text-[#596273] hover:bg-stone-200 hover:text-[#172033]'
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </div>

            {/* Milestone Title in Times New Roman */}
            <h3
              id="modal-milestone-title"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#172033]"
            >
              {activeMilestone.title}
            </h3>

            {/* Dates & Timeline Badge */}
            {activeMilestone.dates ? (
              <div className="mt-2.5 flex items-center gap-2 text-xs font-medium text-[#3B82F6]">
                <Calendar className="h-4 w-4" />
                <span>{activeMilestone.dates}</span>
              </div>
            ) : null}

            {/* Short Description */}
            {activeMilestone.shortDescription ? (
              <p className="mt-4 text-base text-[#596273] leading-relaxed">
                {activeMilestone.shortDescription}
              </p>
            ) : null}

            {/* Structured Credentials / Experiences */}
            <div className="mt-6 space-y-4">
              {activeMilestone.structuredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200/80 bg-[#FAF9F6] p-5 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#172033]">
                      {item.heading}
                    </h4>
                    {item.timeline && (
                      <span className="text-xs font-mono text-[#3B82F6] shrink-0 font-medium">
                        {item.timeline}
                      </span>
                    )}
                  </div>

                  {item.organization && (
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-[#596273]">
                      <Building2 className="h-3.5 w-3.5 text-stone-400" />
                      <span className="font-medium text-[#172033]">{item.organization}</span>
                    </div>
                  )}

                  {item.points && item.points.length > 0 && (
                    <ul className="mt-3 space-y-2 border-t border-stone-200/60 pt-3 text-xs sm:text-sm text-[#596273]">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Key Bullet Highlights */}
            {activeMilestone.keyDetails && activeMilestone.keyDetails.length > 0 && (
              <div className="mt-6 pt-5 border-t border-stone-100">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A07A4A] block mb-3">
                  Key Takeaways
                </span>
                <div className="space-y-2.5">
                  {activeMilestone.keyDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172033]">
                      <CheckCircle2 className="h-4 w-4 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-normal">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#172033] hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => setActiveMilestoneId(getNextMilestoneId(activeMilestone.id))}
                className="inline-flex items-center gap-2 rounded-xl bg-[#172033] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#3B82F6] transition-colors cursor-pointer shadow-xs group"
              >
                <span>
                  Next:{' '}
                  {getNextMilestoneId(activeMilestone.id) === 'certifications'
                    ? 'Certifications'
                    : getNextMilestoneId(activeMilestone.id) === 'experience'
                    ? 'Experience'
                    : 'Education'}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
