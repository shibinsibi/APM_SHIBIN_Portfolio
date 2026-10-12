import React from 'react';
import { ArrowDown, Download, Linkedin, Mail, Camera } from 'lucide-react';
import portraitImg from '../assets/images/shibin_sibi_photo_1790405808234.jpg';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroSculpture3D } from './3d/HeroSculpture3D';

interface HomeHeroProps {
  onOpenResume: () => void;
  onOpenContact?: () => void;
  customPhoto?: string | null;
  onOpenPhotoUploader?: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onOpenResume,
  onOpenContact,
  customPhoto,
  onOpenPhotoUploader,
}) => {
  const activePortrait = customPhoto || portraitImg;
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex-col justify-center overflow-x-hidden bg-[#FAFAF7] py-6 sm:py-10 lg:py-14 border-b border-stone-200/80"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center px-5 sm:px-8 lg:px-12">
        {/* Full-screen Editorial Split Layout */}
        <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side: Typography, Intro, CTAs, Contact Tab (7 cols desktop, full width mobile) */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-slide">
            {/* 1. Small Label */}
            <div className="mb-3 sm:mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#596273]">
                HELLO, I'M SHIBIN
              </span>
            </div>

            {/* 2. Main Headline in Times New Roman - Responsively Scaled */}
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#172033]">
              <span className="block">ASPIRING</span>
              <span className="block mt-1 sm:mt-2 text-[#172033]">ASSOCIATE PRODUCT</span>
              <span className="block mt-1 sm:mt-2 text-[#172033]">MANAGER</span>
            </h1>

            {/* 3. Narrative Intro */}
            <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg font-normal leading-relaxed text-[#596273]">
              I turn user problems into simple, practical digital experiences combining product thinking, e-commerce experience, technology, and AI.
            </p>

            {/* 4. Touch-Friendly CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#what-ive-learned"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('what-ive-learned');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#what-ive-learned');
                  }
                }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3 text-xs sm:text-sm font-medium tracking-wide uppercase text-white hover:bg-[#2563EB] active:scale-[0.98] transition-all shadow-xs cursor-pointer text-center"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#172033] hover:border-[#172033] hover:bg-stone-50 active:scale-[0.98] transition-all shadow-2xs cursor-pointer text-center"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="h-4 w-4 text-[#596273]" />
              </button>
            </div>

            {/* 5. Contact Tab with LinkedIn Symbol & Email Symbol */}
            <div className="mt-7 sm:mt-9 pt-6 border-t border-stone-200/80">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-xl sm:rounded-full border border-stone-200/90 bg-white p-1.5 shadow-2xs">
                {/* Contact Tab Label */}
                <span className="rounded-lg sm:rounded-full bg-[#172033] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Contact
                </span>

                {/* LinkedIn Symbol & Link */}
                <a
                  href="https://www.linkedin.com/in/shibin-sibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg sm:rounded-full px-3 py-1.5 text-xs font-medium text-[#172033] hover:bg-stone-100 hover:text-[#0A66C2] transition-colors group cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4 text-[#0A66C2] transition-transform group-hover:scale-110" />
                  <span className="group-hover:text-[#0A66C2]">LinkedIn</span>
                </a>

                <span className="text-stone-300 hidden sm:inline" aria-hidden="true">
                  ·
                </span>

                {/* Email Symbol & Link - Opens Email Modal for copy */}
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 rounded-lg sm:rounded-full px-3 py-1.5 text-xs font-medium text-[#172033] hover:bg-stone-100 hover:text-[#3B82F6] transition-colors group cursor-pointer"
                  aria-label="Show Email Address"
                >
                  <Mail className="h-4 w-4 text-[#3B82F6] transition-transform group-hover:scale-110" />
                  <span className="group-hover:text-[#3B82F6]">Mail</span>
                </button>
              </div>
            </div>
          </div>

          {/* 6. Right Side / Mobile Bottom: Portrait with Refined Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-slide-delay pt-2 sm:pt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">
              {/* Editorial Annotation: PRODUCT (Top Left) */}
              <div className="absolute -top-5 sm:-top-6 left-0 flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] font-medium text-[#596273]">
                <span className="h-[1px] w-5 sm:w-6 bg-stone-300" />
                <span>PRODUCT</span>
              </div>

              {/* Editorial Annotation: AI (Right Flank) */}
              <div className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] font-medium text-[#3B82F6] rotate-90 origin-center">
                <span>AI</span>
                <span className="h-[1px] w-5 sm:w-6 bg-[#3B82F6]/40" />
              </div>

              {/* Editorial Annotation: ECOMMERCE (Bottom Left) */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-2 flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] font-medium text-[#A07A4A]">
                <span className="h-[1px] w-5 sm:w-6 bg-[#D9B88C]" />
                <span>ECOMMERCE</span>
              </div>

              {/* Refined Beige Offset Frame */}
              <div
                className="absolute -inset-2.5 sm:-inset-4 translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 rounded-xl border border-[#D9B88C] -z-10 pointer-events-none transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Signature Hero 3D Sculpture: Intersecting Product x AI x E-commerce forms */}
              <div className="absolute -top-10 -left-10 sm:-left-20 sm:-top-14 w-32 h-32 sm:w-44 sm:h-44 -z-5 pointer-events-none opacity-85">
                <HeroSculpture3D className="w-full h-full" />
              </div>

              {/* Image Container - Rectangular & Editorial */}
              <div className="group relative aspect-square sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-stone-100 shadow-sm border border-stone-200/90 transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src={activePortrait}
                  alt="Shibin Sibi - Product Management, AI & E-commerce"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />

                {/* Change Photo Button */}
                {onOpenPhotoUploader && (
                  <button
                    onClick={onOpenPhotoUploader}
                    type="button"
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-[#172033]/85 backdrop-blur-xs px-3 py-1.5 text-[11px] font-medium text-white shadow-md hover:bg-[#172033] hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
                    title="Upload or change photo"
                  >
                    <Camera className="h-3.5 w-3.5 text-[#3B82F6]" />
                    <span>Change Photo</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
