import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Copy, Check, Mail, Linkedin, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = PERSONAL_INFO.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172033]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4 bg-[#FAFAF7]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#172033]">
                Email Address
              </h3>
              <p className="text-xs text-[#596273]">
                Direct contact for Shibin Sibi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100 hover:text-[#172033] transition-colors cursor-pointer"
            aria-label="Close Email Modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <p className="text-xs text-[#596273] leading-relaxed">
            Click the button below to copy my personal email address to your clipboard:
          </p>

          {/* Email Showcase Box with 1-Click Copy */}
          <div
            onClick={handleCopy}
            className="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#D9B88C]/60 bg-[#FAF9F5] p-5 text-center hover:border-[#3B82F6] hover:bg-blue-50/20 transition-all cursor-pointer select-all"
            title="Click to copy email address"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A07A4A] mb-1">
              Primary Mail ID
            </span>
            <span className="font-mono text-base sm:text-lg font-semibold text-[#172033] group-hover:text-[#3B82F6] transition-colors">
              {PERSONAL_INFO.email}
            </span>
            <span className="mt-1 text-[11px] text-[#596273] group-hover:text-[#172033]">
              {copied ? '✓ Copied to clipboard!' : 'Click to copy'}
            </span>
          </div>

          {/* Large Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all cursor-pointer shadow-xs ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-[#172033] text-white hover:bg-[#3B82F6] active:scale-[0.99]'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>

          {/* LinkedIn Profile Direct Link */}
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-[#596273]">Professional Profile:</span>
            <a
              href="https://www.linkedin.com/in/shibin-sibi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#0A66C2] hover:underline"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>www.linkedin.com/in/shibin-sibi</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
