/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { HeroWhoIAm } from './components/HeroWhoIAm';
import { WhatIBring } from './components/WhatIBring';
import { WhatIveLearned } from './components/WhatIveLearned';
import { WhatImExploring } from './components/WhatImExploring';
import { TheJourneySoFar } from './components/TheJourneySoFar';
import { Footer } from './components/Footer';
import { ProductThinkingCaseStudyPage } from './components/ProductThinkingCaseStudyPage';
import { CampEdgeCaseStudyPage } from './components/CampEdgeCaseStudyPage';
import { ProblemFramingCaseStudyPage } from './components/ProblemFramingCaseStudyPage';
import { UxDesignCaseStudyPage } from './components/UxDesignCaseStudyPage';
import { EffectiveCommunicationCaseStudyPage } from './components/EffectiveCommunicationCaseStudyPage';
import { AnalyticsMetricsCaseStudyPage } from './components/AnalyticsMetricsCaseStudyPage';
import { TwitterGrowthLoopsCaseStudyPage } from './components/TwitterGrowthLoopsCaseStudyPage';
import { GtmStrategyCaseStudyPage } from './components/GtmStrategyCaseStudyPage';
import { FinalProjectCaseStudyPage } from './components/FinalProjectCaseStudyPage';
import { CaseStudyModal } from './components/CaseStudyModal';
import { EssayModal } from './components/EssayModal';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { ArticleModal } from './components/ArticleModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { CASE_STUDIES, PERSONAL_INFO } from './data/portfolioData';
import { JournalArticle } from './data/articlesData';
import { CaseStudy, Principle } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<
    | 'home'
    | 'case-study-product-thinking'
    | 'case-study-campedge'
    | 'case-study-problem-framing'
    | 'case-study-ux-design'
    | 'case-study-effective-communication'
    | 'case-study-analytics-metrics'
    | 'case-study-twitter-growth-loops'
    | 'case-study-gtm-strategy'
    | 'case-study-final-project'
  >(() => {
    if (typeof window !== 'undefined') {
      if (
        window.location.hash.includes('case-study/final-project') ||
        window.location.hash.includes('case-study/from-problem-to-product')
      ) {
        return 'case-study-final-project';
      }
      if (window.location.hash.includes('case-study/gtm-strategy')) {
        return 'case-study-gtm-strategy';
      }
      if (
        window.location.hash.includes('case-study/twitter-growth-loops') ||
        window.location.hash.includes('case-study/growth-loops')
      ) {
        return 'case-study-twitter-growth-loops';
      }
      if (window.location.hash.includes('case-study/analytics-metrics')) {
        return 'case-study-analytics-metrics';
      }
      if (window.location.hash.includes('case-study/effective-communication')) {
        return 'case-study-effective-communication';
      }
      if (window.location.hash.includes('case-study/ux-design')) {
        return 'case-study-ux-design';
      }
      if (window.location.hash.includes('case-study/problem-framing')) {
        return 'case-study-problem-framing';
      }
      if (window.location.hash.includes('case-study/campedge')) {
        return 'case-study-campedge';
      }
      if (window.location.hash.includes('case-study/apply-product-thinking')) {
        return 'case-study-product-thinking';
      }
    }
    return 'home';
  });
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeEssay, setActiveEssay] = useState<Principle | null>(null);
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPhotoUploaderOpen, setIsPhotoUploaderOpen] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('shibin_portfolio_custom_photo');
    }
    return null;
  });

  // Hash & Popstate listener for seamless browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.hash.includes('case-study/final-project') ||
        window.location.hash.includes('case-study/from-problem-to-product')
      ) {
        setCurrentView('case-study-final-project');
      } else if (window.location.hash.includes('case-study/gtm-strategy')) {
        setCurrentView('case-study-gtm-strategy');
      } else if (
        window.location.hash.includes('case-study/twitter-growth-loops') ||
        window.location.hash.includes('case-study/growth-loops')
      ) {
        setCurrentView('case-study-twitter-growth-loops');
      } else if (window.location.hash.includes('case-study/analytics-metrics')) {
        setCurrentView('case-study-analytics-metrics');
      } else if (window.location.hash.includes('case-study/effective-communication')) {
        setCurrentView('case-study-effective-communication');
      } else if (window.location.hash.includes('case-study/ux-design')) {
        setCurrentView('case-study-ux-design');
      } else if (window.location.hash.includes('case-study/problem-framing')) {
        setCurrentView('case-study-problem-framing');
      } else if (window.location.hash.includes('case-study/campedge')) {
        setCurrentView('case-study-campedge');
      } else if (window.location.hash.includes('case-study/apply-product-thinking')) {
        setCurrentView('case-study-product-thinking');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleOpenProductThinkingCaseStudy = () => {
    setCurrentView('case-study-product-thinking');
    window.location.hash = 'case-study/apply-product-thinking';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCampEdgeCaseStudy = () => {
    setCurrentView('case-study-campedge');
    window.location.hash = 'case-study/campedge';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProblemFramingCaseStudy = () => {
    setCurrentView('case-study-problem-framing');
    window.location.hash = 'case-study/problem-framing';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenUxDesignCaseStudy = () => {
    setCurrentView('case-study-ux-design');
    window.location.hash = 'case-study/ux-design';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEffectiveCommunicationCaseStudy = () => {
    setCurrentView('case-study-effective-communication');
    window.location.hash = 'case-study/effective-communication';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAnalyticsMetricsCaseStudy = () => {
    setCurrentView('case-study-analytics-metrics');
    window.location.hash = 'case-study/analytics-metrics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTwitterGrowthLoopsCaseStudy = () => {
    setCurrentView('case-study-twitter-growth-loops');
    window.location.hash = 'case-study/twitter-growth-loops';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGtmStrategyCaseStudy = () => {
    setCurrentView('case-study-gtm-strategy');
    window.location.hash = 'case-study/gtm-strategy';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFinalProjectCaseStudy = () => {
    setCurrentView('case-study-final-project');
    window.location.hash = 'case-study/final-project';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = 'what-ive-learned';
    setTimeout(() => {
      const el = document.getElementById('what-ive-learned');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSavePhoto = (photoDataUrl: string) => {
    setCustomPhoto(photoDataUrl);
    try {
      localStorage.setItem('shibin_portfolio_custom_photo', photoDataUrl);
    } catch (e) {
      console.error('Failed to save custom photo', e);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    try {
      localStorage.removeItem('shibin_portfolio_custom_photo');
    } catch (e) {
      console.error('Failed to remove custom photo', e);
    }
  };

  const handleOpenCaseStudyByPillar = (pillar: 'Product' | 'AI' | 'E-commerce') => {
    const study = CASE_STUDIES.find((cs) => cs.pillar === pillar) || CASE_STUDIES[0];
    setActiveCaseStudy(study);
  };

  if (currentView === 'case-study-product-thinking') {
    return <ProductThinkingCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-campedge') {
    return <CampEdgeCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-problem-framing') {
    return <ProblemFramingCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-ux-design') {
    return <UxDesignCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-effective-communication') {
    return <EffectiveCommunicationCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-analytics-metrics') {
    return <AnalyticsMetricsCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-twitter-growth-loops') {
    return <TwitterGrowthLoopsCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-gtm-strategy') {
    return <GtmStrategyCaseStudyPage onBack={handleBackToHome} />;
  }

  if (currentView === 'case-study-final-project') {
    return <FinalProjectCaseStudyPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#172033] flex flex-col font-sans selection:bg-[#EAF3FF] selection:text-[#172033]">
      {/* Sticky Navigation Header with Transparent-to-Solid Scroll Transition */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Editorial Story Flow */}
      <main className="flex-1">
        {/* Full-Screen Editorial Split Home / Hero Section */}
        <HomeHero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
          customPhoto={customPhoto}
          onOpenPhotoUploader={() => setIsPhotoUploaderOpen(true)}
        />

        {/* Chapter 01: About Me · Who I Am & Philosophy */}
        <HeroWhoIAm onOpenContact={() => setIsContactOpen(true)} />

        {/* Chapter 02: Work · What I Bring */}
        <WhatIBring onOpenCaseStudyByPillar={handleOpenCaseStudyByPillar} />

        {/* Chapter 03: Learnings · What I’ve Learned */}
        <WhatIveLearned
          onOpenEssay={(principle) => setActiveEssay(principle)}
          onOpenProductThinkingCaseStudy={handleOpenProductThinkingCaseStudy}
          onOpenCampEdgeCaseStudy={handleOpenCampEdgeCaseStudy}
          onOpenProblemFramingCaseStudy={handleOpenProblemFramingCaseStudy}
          onOpenUxDesignCaseStudy={handleOpenUxDesignCaseStudy}
          onOpenEffectiveCommunicationCaseStudy={handleOpenEffectiveCommunicationCaseStudy}
          onOpenAnalyticsMetricsCaseStudy={handleOpenAnalyticsMetricsCaseStudy}
          onOpenTwitterGrowthLoopsCaseStudy={handleOpenTwitterGrowthLoopsCaseStudy}
          onOpenGtmStrategyCaseStudy={handleOpenGtmStrategyCaseStudy}
          onOpenFinalProjectCaseStudy={handleOpenFinalProjectCaseStudy}
        />

        {/* Chapter 04: Explorations · What I’m Exploring */}
        <WhatImExploring onOpenArticle={(article) => setActiveArticle(article)} />

        {/* Chapter 05: Experience & Case Studies · The Journey So Far */}
        <TheJourneySoFar onOpenCaseStudy={(cs) => setActiveCaseStudy(cs)} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals & Dialogs */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

      <EssayModal
        principle={activeEssay}
        onClose={() => setActiveEssay(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <PhotoUploadModal
        isOpen={isPhotoUploaderOpen}
        onClose={() => setIsPhotoUploaderOpen(false)}
        currentPhoto={customPhoto || PERSONAL_INFO.portrait}
        defaultPhoto={PERSONAL_INFO.portrait}
        onSavePhoto={handleSavePhoto}
        onResetPhoto={handleResetPhoto}
      />
    </div>
  );
}
