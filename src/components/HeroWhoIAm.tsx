import React from 'react';

interface HeroWhoIAmProps {
  onOpenContact?: () => void;
}

export const HeroWhoIAm: React.FC<HeroWhoIAmProps> = () => {
  return (
    <section
      id="who-i-am"
      className="relative border-b border-stone-200/80 bg-[#FAFAF7] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Label: 02 / WHO AM I */}
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#596273]">
            02 / WHO AM I
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#172033] max-w-4xl uppercase">
          A little about the person behind the portfolio
        </h2>

        {/* Thin Beige Divider Line */}
        <div className="mt-8 mb-12 sm:mb-16 h-[1px] w-full bg-[#D9B88C]/50" />

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Large Editorial Pull-Quote (5 cols) - Preserved completely */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <blockquote className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] text-[#172033] tracking-tight">
                “I became curious about the{' '}
                <span className="italic text-[#172033] underline decoration-[#D9B88C] decoration-2 underline-offset-8">
                  ‘why’
                </span>{' '}
                behind the products I was supporting.”
              </blockquote>

              {/* Quiet editorial rule */}
              <div className="flex items-center gap-3 pt-1 text-xs uppercase tracking-widest text-[#596273]">
                <span className="h-[1px] w-8 bg-[#D9B88C]" />
                <span>The shift from code to intent</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Authentic Personal Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#596273] leading-relaxed font-normal">
            <p>
              I started my career on the technical side, working with Salesforce Commerce Cloud and supporting customer-facing e-commerce experiences.
            </p>

            <p>
              Working close to real users and production systems made me curious about more than just fixing problems. I wanted to understand why those problems existed, how product decisions were made, and what could be improved for the user and the business.
            </p>

            <p className="font-medium text-[#172033]">
              That curiosity led me toward Product Management.
            </p>

            <p>
              Today, I’m combining my technical foundation, e-commerce experience, and growing product skills to build toward my journey as an{' '}
              <strong className="font-semibold text-[#172033]">Associate Product Manager</strong>.
            </p>

            <div className="pt-2 text-base font-semibold text-[#172033]">
              <span className="text-[#3B82F6] mr-2">→</span>
              <span>From solving what’s broken to understanding what should be built.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
