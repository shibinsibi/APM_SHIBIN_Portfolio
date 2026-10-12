import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      // Transition from transparent to subtle solid background and compact height
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll position tracking for active section
      // Map: Home -> #home, About Me -> #who-i-am, Work -> #what-ive-learned, Experience -> #the-journey
      const scrollPos = window.scrollY + 160;

      const journeyEl = document.getElementById('the-journey');
      const learnedEl = document.getElementById('what-ive-learned');
      const aboutEl = document.getElementById('who-i-am');
      const homeEl = document.getElementById('home');

      if (journeyEl && journeyEl.offsetTop <= scrollPos) {
        setCurrentActive('experience');
      } else if (learnedEl && learnedEl.offsetTop <= scrollPos) {
        setCurrentActive('work');
      } else if (aboutEl && aboutEl.offsetTop <= scrollPos) {
        setCurrentActive('about');
      } else if (homeEl && homeEl.offsetTop <= scrollPos) {
        setCurrentActive('home');
      } else {
        setCurrentActive('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', targetId: 'home' },
    { id: 'about', label: 'About Me', targetId: 'who-i-am' },
    { id: 'work', label: 'Work', targetId: 'what-ive-learned' },
    { id: 'experience', label: 'Experience', targetId: 'the-journey' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = isScrolled ? 56 : 68;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'h-14 sm:h-16 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs'
          : 'h-20 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* LEFT: SS Monogram Logo */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className="font-editorial text-2xl sm:text-3xl font-medium tracking-wider text-[#172033] hover:text-[#3B82F6] transition-colors"
          aria-label="Shibin Sibi - Home"
        >
          SS
        </a>

        {/* RIGHT: Desktop Navigation (Home, About Me, Work, Experience, Resume) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs sm:text-sm font-medium text-[#596273]">
          {navItems.map((item) => {
            const isActive = currentActive === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.targetId}`}
                onClick={(e) => handleSmoothScroll(e, item.targetId)}
                className={`relative py-1 transition-colors flex flex-col items-center group ${
                  isActive ? 'text-[#172033] font-semibold' : 'hover:text-[#172033]'
                }`}
              >
                <span>{item.label}</span>
                {/* Beige Active Indicator */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-[#D9B88C] transition-all animate-in fade-in zoom-in duration-200"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}

          {/* Resume Action */}
          <button
            onClick={onOpenResume}
            className="relative py-1 text-[#596273] hover:text-[#172033] transition-colors cursor-pointer font-medium"
          >
            <span>Resume</span>
          </button>
        </nav>

        {/* MOBILE: Clean Minimal Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#172033] hover:text-[#3B82F6] focus:outline-none rounded-md cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER: Clean, Compact & Minimal */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200/80 bg-[#FAFAF7]/98 backdrop-blur-lg px-6 py-5 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[#172033]">
            {navItems.map((item) => {
              const isActive = currentActive === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleSmoothScroll(e, item.targetId)}
                  className={`py-2 px-1 flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#172033] font-semibold' : 'text-[#596273] hover:text-[#172033]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9B88C]" />
                  )}
                </a>
              );
            })}

            <div className="pt-3 mt-1 border-t border-stone-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#172033] px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-white hover:bg-[#3B82F6] transition-colors cursor-pointer"
              >
                <span>View / Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
