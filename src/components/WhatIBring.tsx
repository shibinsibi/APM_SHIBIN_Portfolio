import React from 'react';

interface WhatIBringProps {
  onOpenCaseStudyByPillar?: (pillar: 'Product' | 'AI' | 'E-commerce') => void;
}

export const WhatIBring: React.FC<WhatIBringProps> = () => {
  const capabilities = {
    product: [
      'Product Discovery',
      'User Research',
      'Problem Framing',
      'Product Strategy',
      'Prioritization',
      'MVP Thinking',
      'Metrics & Outcomes',
    ],
    ai: [
      'RAG',
      'AI Product Thinking',
      'Prompt Engineering',
      'Automation',
    ],
    ecommerce: [
      'Salesforce Commerce Cloud',
      'SFRA',
      'B2C Commerce',
      'Akeneo PIM',
      'Catalog Management',
      'API',
      'Order Management',
      'Production Support',
    ],
    tools: [
      { name: 'Figma', category: 'Design' },
      { name: 'Jira', category: 'Backlog' },
      { name: 'Salesforce', category: 'Commerce' },
      { name: 'N8N', category: 'Automation' },
      { name: 'Lovable', category: 'Prototyping' },
      { name: 'Gamma', category: 'PPT' },
      { name: 'Google Analytics', category: 'Analytics' },
      { name: 'Splunk', category: 'Monitoring' },
      { name: 'Akeneo PIM', category: 'PIM' },
      { name: 'Tulip', category: 'Retail' },
      { name: 'BrowserStack', category: 'Testing' },
      { name: 'VS Code', category: 'Code' },
      { name: 'Mixpanel', category: 'Analytics' },
    ],
  };

  return (
    <section
      id="what-i-bring"
      className="relative border-b border-stone-200/80 bg-[#FAFAF7] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Label: 03 / WHAT I BRING */}
        <div className="mb-8 pb-4 border-b border-stone-200/80 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#596273]">
            03 / WHAT I BRING
          </span>
          <span className="text-xs font-mono text-stone-400">
            Core Capabilities & Tooling
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* 01 — PRODUCT */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-7 sm:p-9 shadow-2xs hover:border-[#3B82F6] hover:shadow-md transition-all duration-300">
            {/* Header */}
            <div className="border-b border-stone-100 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
                01 — PRODUCT
              </span>
            </div>

            {/* Scannable Capability List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5">
              {capabilities.product.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-sm text-[#172033] font-medium group/item"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                  <span className="tracking-tight hover:text-[#3B82F6] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 02 — AI */}
          <div className="rounded-2xl border border-blue-200/80 bg-[#EAF3FF] p-7 sm:p-9 shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-300">
            {/* Header */}
            <div className="border-b border-blue-200/70 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                02 — AI
              </span>
            </div>

            {/* Scannable Capability List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.ai.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 border border-blue-100/90 text-sm text-[#172033] font-medium transition-colors hover:bg-white"
                >
                  <span className="tracking-tight">{item}</span>
                  <span className="text-[11px] font-mono text-[#3B82F6]">0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 03 — E-COMMERCE */}
          <div className="rounded-2xl border border-[#D9B88C]/60 bg-[#F5EDE2] p-7 sm:p-9 shadow-2xs hover:border-[#D9B88C] hover:shadow-md transition-all duration-300">
            {/* Header */}
            <div className="border-b border-[#D9B88C]/40 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A07A4A]">
                03 — E-COMMERCE
              </span>
            </div>

            {/* Scannable Capability List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.ecommerce.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 border border-[#D9B88C]/30 text-sm text-[#172033] font-medium transition-colors hover:bg-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9B88C] shrink-0" />
                  <span className="tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 04 — TOOLS */}
          <div className="rounded-2xl border border-stone-200/90 bg-white p-7 sm:p-9 shadow-2xs hover:border-[#172033] hover:shadow-md transition-all duration-300">
            {/* Header */}
            <div className="border-b border-stone-100 pb-4 mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#172033]">
                04 — TOOLS
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                {capabilities.tools.length} Tools
              </span>
            </div>

            {/* Scannable Capability List - Clean Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {capabilities.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center rounded-xl border border-stone-200/80 bg-[#FAFAF7] p-2.5 text-center transition-colors hover:bg-stone-50 hover:border-stone-300"
                >
                  <span className="font-editorial text-sm sm:text-base font-bold text-[#172033] truncate">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-[#596273] uppercase tracking-wider mt-0.5 font-mono">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
