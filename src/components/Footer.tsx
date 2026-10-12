import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t border-stone-200/80 bg-[#FAFAF7] py-12 text-sm text-[#596273]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-editorial text-lg text-[#172033]">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-xs text-[#596273] mt-0.5">
            Aspiring Associate Product Manager
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <a href="#who-i-am" className="hover:text-[#172033] transition-colors">
            Who I Am
          </a>
          <a href="#what-i-bring" className="hover:text-[#172033] transition-colors">
            What I Bring
          </a>
          <a href="#what-ive-learned" className="hover:text-[#172033] transition-colors">
            What I’ve Learned
          </a>
          <a href="#what-im-exploring" className="hover:text-[#172033] transition-colors">
            What I’m Exploring
          </a>
          <a href="#the-journey" className="hover:text-[#172033] transition-colors">
            The Journey
          </a>
        </div>

        <div className="text-xs text-stone-400">
          © {new Date().getFullYear()} Shibin Sibi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
