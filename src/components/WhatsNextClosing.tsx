import React from 'react';
import { ArrowUpRight, Mail, Linkedin } from 'lucide-react';
import { WhatsNextSculpture3D } from './3d/WhatsNextSculpture3D';
import { PERSONAL_INFO } from '../data/portfolioData';

interface WhatsNextClosingProps {
  onOpenContact: () => void;
}

export const WhatsNextClosing: React.FC<WhatsNextClosingProps> = ({ onOpenContact }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] py-20 sm:py-28 border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Text Block: "Let's build something meaningful." */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white px-3 py-1 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#596273]">
                WHAT'S NEXT · CONVERGENCE
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#172033]">
              Let’s build something <span className="italic text-[#3B82F6]">meaningful</span>.
            </h2>

            <p className="max-w-xl text-base sm:text-lg font-normal leading-relaxed text-[#596273]">
              Whether you are architecting a new 0-to-1 product, scaling e-commerce systems,
              or exploring applied AI and intelligent workflows — I would love to connect.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#172033] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white hover:bg-[#25324d] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
              >
                <span>Start a Dialogue</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <a
                href="https://www.linkedin.com/in/shibin-sibi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#172033] hover:border-[#172033] hover:bg-stone-50 active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#172033] hover:border-[#172033] hover:bg-stone-50 active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
              >
                <Mail className="h-4 w-4 text-[#3B82F6]" />
                <span>Mail</span>
              </button>
            </div>
          </div>

          {/* Right 3D Sculpture: Interlocking Rings */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              {/* Subtle architectural background disc */}
              <div className="absolute inset-4 rounded-full border border-stone-200/60 bg-stone-100/40 -z-10 pointer-events-none" />

              <WhatsNextSculpture3D className="w-full h-full" />
            </div>
            <p className="mt-2 text-center text-xs tracking-wider uppercase text-[#596273]">
              PRODUCT × AI × TECHNOLOGY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
