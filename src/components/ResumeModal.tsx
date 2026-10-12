import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  const handleDownloadDoc = () => {
    const htmlContent = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>Shibin Sibi - Resume</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: letter portrait;
      margin: 0.75in 0.75in 0.75in 0.75in;
    }
    body {
      font-family: Arial, Calibri, 'Segoe UI', sans-serif;
      font-size: 10pt;
      line-height: 1.35;
      color: #111827;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 19pt;
      font-weight: bold;
      color: #111827;
      margin: 0 0 2pt 0;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
    }
    .title {
      font-size: 10.5pt;
      font-weight: bold;
      color: #2563EB;
      text-transform: uppercase;
      margin: 0 0 4pt 0;
      letter-spacing: 0.5pt;
    }
    .contact {
      font-size: 9pt;
      color: #4B5563;
      margin-bottom: 12pt;
      border-bottom: 1pt solid #D1D5DB;
      padding-bottom: 6pt;
    }
    h2 {
      font-size: 10pt;
      font-weight: bold;
      color: #92400E;
      text-transform: uppercase;
      letter-spacing: 1pt;
      border-bottom: 1pt solid #E5E7EB;
      padding-bottom: 2pt;
      margin-top: 11pt;
      margin-bottom: 4pt;
    }
    p {
      margin: 0 0 4pt 0;
      color: #374151;
    }
    .skill-category {
      margin-bottom: 3.5pt;
      font-size: 9.5pt;
    }
    .skill-name {
      font-weight: bold;
      color: #111827;
    }
    .experience-header {
      margin-top: 6pt;
      margin-bottom: 1pt;
    }
    .company {
      font-size: 10.5pt;
      font-weight: bold;
      color: #111827;
    }
    .dates {
      float: right;
      font-size: 9pt;
      color: #2563EB;
      font-weight: 600;
    }
    .role {
      font-size: 9pt;
      font-style: italic;
      color: #4B5563;
      margin-bottom: 4pt;
    }
    ul {
      margin: 3pt 0 6pt 16pt;
      padding: 0;
    }
    li {
      margin-bottom: 3pt;
      color: #374151;
      font-size: 9.5pt;
      line-height: 1.35;
    }
    .case-card {
      margin-bottom: 7pt;
      padding: 2pt 0;
    }
    .case-title {
      font-size: 10pt;
      font-weight: bold;
      color: #111827;
    }
    .case-methods {
      font-size: 8.5pt;
      color: #4B5563;
      margin-top: 2pt;
    }
  </style>
</head>
<body>
  <h1>SHIBIN SIBI</h1>
  <div class="title">Aspiring ASSOCIATE PRODUCT MANAGER</div>
  <div class="contact">
    Pune, India &nbsp;|&nbsp; +91 7485931935 &nbsp;|&nbsp; shibinsibi3021@gmail.com &nbsp;|&nbsp; linkedin.com/in/shibin-sibi
  </div>

  <h2>PROFESSIONAL SUMMARY</h2>
  <p>Product-focused technology professional with 3+ years of experience supporting and improving customer-facing e-commerce systems for global brands including Michael Kors and Versace. Brings hands-on experience in production problem-solving, root cause analysis, integrations, workflow improvement, and cross-functional delivery, alongside product-management case studies covering user research, problem framing, prioritization, PRDs, growth loops, product metrics, and prototype design. Combines technical fluency and an MBA in Information Technology with a user- and outcome-oriented approach to product decisions.</p>

  <h2>PRODUCT MANAGEMENT SKILLS</h2>
  <div class="skill-category"><span class="skill-name">Product:</span> Product discovery, problem framing, user personas, Jobs to Be Done (JTBD), opportunity identification, product strategy, MVP thinking, PRDs, user flows, feature definition</div>
  <div class="skill-category"><span class="skill-name">Prioritization & Metrics:</span> RICE, impact-effort prioritization, OKRs, KPIs, funnel analysis, cohort analysis, growth loops, engagement and retention metrics</div>
  <div class="skill-category"><span class="skill-name">Research & Design:</span> Market and competitor research, qualitative insight synthesis, review analysis, prototype iteration, Figma, Lovable</div>
  <div class="skill-category"><span class="skill-name">Tools & Technical:</span> Jira, Google Sheets, Salesforce B2C Commerce Cloud (SFCC/SFRA), Akeneo PIM, Arvato OMS, Splunk, SQL, JavaScript, HTML/CSS, REST/SOAP APIs, Git</div>

  <h2>PROFESSIONAL EXPERIENCE</h2>
  <div class="experience-header">
    <span class="company">Zensar Technologies — Pune, India</span>
    <span class="dates">Sep 2022 – Jun 2026</span>
  </div>
  <div class="role">Software Engineer, Salesforce Commerce Cloud (Development & Production Support)</div>
  <ul>
    <li>Supported and enhanced customer-facing Salesforce B2C Commerce Cloud storefronts for global luxury brands Michael Kors and Versace, building practical understanding of e-commerce journeys and operational reliability.</li>
    <li>Coordinated with development, QA, and business stakeholders to investigate incidents, prioritize defects, document work in Jira, and deliver resolutions within SLA expectations.</li>
    <li>Performed root cause analysis on recurring production issues and partnered with development teams on permanent fixes, translating incident patterns into actionable improvements.</li>
    <li>Worked across Salesforce Commerce Cloud, Akeneo PIM, Arvato Order Management, payment providers, and third-party services to maintain reliable product and order data flows through REST/SOAP integrations.</li>
    <li>Resolved a critical Arvato integration failure that restored global order processing and helped prevent revenue loss; received the Client Focus Award.</li>
    <li>Used Splunk to monitor errors, identify patterns, and investigate performance bottlenecks, supporting platform reliability of 99%+ uptime.</li>
    <li>Automated repetitive support and operational workflows to improve team efficiency and reduce response and resolution time.</li>
  </ul>

  <h2>SELECTED PRODUCT CASE STUDIES</h2>
  <div class="case-card">
    <div class="case-title">CampEdge - User Research & Product Strategy</div>
    <p>Explored why users may hesitate to convert for camping experiences. Synthesized market and competitor research with qualitative feedback and directional survey signals, then translated themes around trust, planning effort, and community into opportunity areas and product concepts.</p>
    <div class="case-methods"><strong>Methods:</strong> Market research, competitor analysis, user interviews, insight synthesis, opportunity areas, MVP concepts</div>
  </div>

  <div class="case-card">
    <div class="case-title">VitaFit - PRD & Core User Flows</div>
    <p>Developed a product requirements document for two proposed engagement features: group challenges and instructor connection. Defined the problem context, feature requirements, user interactions, and core flows aligned to repeat usage and retention goals.</p>
    <div class="case-methods"><strong>Methods:</strong> Problem framing, PRD writing, requirements, user flows, engagement and retention outcomes</div>
  </div>

  <div class="case-card">
    <div class="case-title">Amazon Product Bundling - Product Thinking & AOV Opportunities</div>
    <p>Applied Jobs to Be Done, first-principles thinking, and review analysis to explore friction in complementary-product discovery. Proposed two opportunity concepts: a smart cart reminder for useful add-ons and an AI-assisted kit builder.</p>
    <div class="case-methods"><strong>Methods:</strong> JTBD, first-principles thinking, review analysis, opportunity identification, AOV</div>
  </div>

  <div class="case-card">
    <div class="case-title">Zomato / Twitter-X / Learning Platform - Product Strategy & Analytics Assignments</div>
    <p>Completed case-study work spanning persona and problem definition, solution generation, RICE prioritization, growth-loop mapping, OKRs and supporting KPIs, funnel analysis, cohort-analysis setup, and personalised course recommendations for learners, instructors, and platform admins.</p>
    <div class="case-methods"><strong>Methods:</strong> User personas, RICE, growth loops, OKRs/KPIs, funnel and cohort analysis, recommendation systems</div>
  </div>

  <h2>EDUCATION</h2>
  <p><strong>PGDM / MBA, Information Technology</strong> — MIT University &nbsp;|&nbsp; Apr 2024 – Feb 2026</p>
  <p><strong>B.E., Electronics & Telecommunication</strong> — Savitribai Phule Pune University &nbsp;|&nbsp; Aug 2018 – Aug 2022</p>

  <h2>CERTIFICATIONS</h2>
  <ul>
    <li>Salesforce Certified AI Associate</li>
    <li>Salesforce Certified B2C Commerce Developer (SFRA)</li>
    <li>Akeneo Foundation Certification</li>
    <li>AI Product Management — In Progress</li>
  </ul>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shibin_Sibi_Resume_Associate_Product_Manager.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172033]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-stone-200">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4 bg-[#FAFAF7]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#596273] font-mono">
              Shibin Sibi
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownloadDoc}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#3B82F6] px-3.5 py-1.5 text-xs font-medium text-white hover:bg-[#2563EB] transition-colors cursor-pointer shadow-xs"
              title="Download resume in DOC format"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download the DOC</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-200/60 hover:text-[#172033] transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 lg:px-12 space-y-7 bg-white text-[#172033] font-sans">
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 text-center sm:text-left">
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#172033] uppercase">
              SHIBIN SIBI
            </h1>
            <p className="mt-1 text-sm font-semibold text-[#3B82F6] tracking-wide uppercase">
              Aspiring ASSOCIATE PRODUCT MANAGER
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-y-1.5 gap-x-3 text-xs text-[#596273]">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-stone-400" />
                Pune, India
              </span>
              <span className="text-stone-300 hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5 text-stone-400" />
                +91 7485931935
              </span>
              <span className="text-stone-300 hidden sm:inline">|</span>
              <a
                href="mailto:shibinsibi3021@gmail.com"
                className="flex items-center gap-1 hover:text-[#3B82F6] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-stone-400" />
                shibinsibi3021@gmail.com
              </a>
              <span className="text-stone-300 hidden sm:inline">|</span>
              <a
                href="https://linkedin.com/in/shibin-sibi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#3B82F6] transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-stone-400" />
                linkedin.com/in/shibin-sibi
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* 1. PROFESSIONAL SUMMARY */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A07A4A] border-b border-stone-100 pb-1 mb-2.5 font-mono">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
              Product-focused technology professional with 3+ years of experience supporting and improving customer-facing e-commerce systems for global brands including Michael Kors and Versace. Brings hands-on experience in production problem-solving, root cause analysis, integrations, workflow improvement, and cross-functional delivery, alongside product-management case studies covering user research, problem framing, prioritization, PRDs, growth loops, product metrics, and prototype design. Combines technical fluency and an MBA in Information Technology with a user- and outcome-oriented approach to product decisions.
            </p>
          </div>

          {/* 2. PRODUCT MANAGEMENT SKILLS */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A07A4A] border-b border-stone-100 pb-1 mb-3 font-mono">
              PRODUCT MANAGEMENT SKILLS
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-[#475467]">
              <div>
                <strong className="text-[#172033] font-semibold">Product: </strong>
                <span>Product discovery, problem framing, user personas, Jobs to Be Done (JTBD), opportunity identification, product strategy, MVP thinking, PRDs, user flows, feature definition</span>
              </div>
              <div>
                <strong className="text-[#172033] font-semibold">Prioritization & Metrics: </strong>
                <span>RICE, impact-effort prioritization, OKRs, KPIs, funnel analysis, cohort analysis, growth loops, engagement and retention metrics</span>
              </div>
              <div>
                <strong className="text-[#172033] font-semibold">Research & Design: </strong>
                <span>Market and competitor research, qualitative insight synthesis, review analysis, prototype iteration, Figma, Lovable</span>
              </div>
              <div>
                <strong className="text-[#172033] font-semibold">Tools & Technical: </strong>
                <span>Jira, Google Sheets, Salesforce B2C Commerce Cloud (SFCC/SFRA), Akeneo PIM, Arvato OMS, Splunk, SQL, JavaScript, HTML/CSS, REST/SOAP APIs, Git</span>
              </div>
            </div>
          </div>

          {/* 3. PROFESSIONAL EXPERIENCE */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A07A4A] border-b border-stone-100 pb-1 mb-3 font-mono">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-editorial text-base sm:text-lg font-bold text-[#172033]">
                    Zensar Technologies — Pune, India
                  </h3>
                  <span className="text-xs font-mono text-[#3B82F6] font-medium shrink-0">
                    Sep 2022 – Jun 2026
                  </span>
                </div>
                <p className="text-xs font-medium text-[#596273] italic mt-0.5">
                  Software Engineer, Salesforce Commerce Cloud (Development & Production Support)
                </p>

                <ul className="mt-2.5 space-y-2 text-xs sm:text-sm text-[#475467]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                    <span>Supported and enhanced customer-facing Salesforce B2C Commerce Cloud storefronts for global luxury brands Michael Kors and Versace, building practical understanding of e-commerce journeys and operational reliability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                    <span>Coordinated with development, QA, and business stakeholders to investigate incidents, prioritize defects, document work in Jira, and deliver resolutions within SLA expectations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                    <span>Performed root cause analysis on recurring production issues and partnered with development teams on permanent fixes, translating incident patterns into actionable improvements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                    <span>Worked across Salesforce Commerce Cloud, Akeneo PIM, Arvato Order Management, payment providers, and third-party services to maintain reliable product and order data flows through REST/SOAP integrations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                    <span>Resolved a critical Arvato integration failure that restored global order processing and helped prevent revenue loss; received the Client Focus Award.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                    <span>Used Splunk to monitor errors, identify patterns, and investigate performance bottlenecks, supporting platform reliability of 99%+ uptime.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1 shrink-0">•</span>
                    <span>Automated repetitive support and operational workflows to improve team efficiency and reduce response and resolution time.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. SELECTED PRODUCT CASE STUDIES */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A07A4A] border-b border-stone-100 pb-1 mb-3 font-mono">
              SELECTED PRODUCT CASE STUDIES
            </h2>
            <div className="space-y-4">
              {/* Case Study 1 */}
              <div className="rounded-xl border border-stone-200/80 bg-[#FAF9F6] p-4">
                <h3 className="font-editorial text-sm sm:text-base font-bold text-[#172033]">
                  CampEdge - User Research & Product Strategy
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Explored why users may hesitate to convert for camping experiences. Synthesized market and competitor research with qualitative feedback and directional survey signals, then translated themes around trust, planning effort, and community into opportunity areas and product concepts.
                </p>
                <p className="mt-2 text-xs text-[#596273]">
                  <strong className="text-[#172033] font-semibold">Methods: </strong>
                  Market research, competitor analysis, user interviews, insight synthesis, opportunity areas, MVP concepts
                </p>
              </div>

              {/* Case Study 2 */}
              <div className="rounded-xl border border-stone-200/80 bg-[#FAF9F6] p-4">
                <h3 className="font-editorial text-sm sm:text-base font-bold text-[#172033]">
                  VitaFit - PRD & Core User Flows
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Developed a product requirements document for two proposed engagement features: group challenges and instructor connection. Defined the problem context, feature requirements, user interactions, and core flows aligned to repeat usage and retention goals.
                </p>
                <p className="mt-2 text-xs text-[#596273]">
                  <strong className="text-[#172033] font-semibold">Methods: </strong>
                  Problem framing, PRD writing, requirements, user flows, engagement and retention outcomes
                </p>
              </div>

              {/* Case Study 3 */}
              <div className="rounded-xl border border-stone-200/80 bg-[#FAF9F6] p-4">
                <h3 className="font-editorial text-sm sm:text-base font-bold text-[#172033]">
                  Amazon Product Bundling - Product Thinking & AOV Opportunities
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Applied Jobs to Be Done, first-principles thinking, and review analysis to explore friction in complementary-product discovery. Proposed two opportunity concepts: a smart cart reminder for useful add-ons and an AI-assisted kit builder.
                </p>
                <p className="mt-2 text-xs text-[#596273]">
                  <strong className="text-[#172033] font-semibold">Methods: </strong>
                  JTBD, first-principles thinking, review analysis, opportunity identification, AOV
                </p>
              </div>

              {/* Case Study 4 */}
              <div className="rounded-xl border border-stone-200/80 bg-[#FAF9F6] p-4">
                <h3 className="font-editorial text-sm sm:text-base font-bold text-[#172033]">
                  Zomato / Twitter-X / Learning Platform - Product Strategy & Analytics Assignments
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Completed case-study work spanning persona and problem definition, solution generation, RICE prioritization, growth-loop mapping, OKRs and supporting KPIs, funnel analysis, cohort-analysis setup, and personalised course recommendations for learners, instructors, and platform admins.
                </p>
                <p className="mt-2 text-xs text-[#596273]">
                  <strong className="text-[#172033] font-semibold">Methods: </strong>
                  User personas, RICE, growth loops, OKRs/KPIs, funnel and cohort analysis, recommendation systems
                </p>
              </div>
            </div>
          </div>

          {/* 5. EDUCATION */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A07A4A] border-b border-stone-100 pb-1 mb-3 font-mono">
              EDUCATION
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <strong className="text-[#172033] font-semibold">PGDM / MBA, Information Technology</strong>
                  <span className="text-[#596273]"> — MIT University</span>
                </div>
                <span className="text-xs font-mono text-[#3B82F6] font-medium shrink-0">
                  Apr 2024 – Feb 2026
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <strong className="text-[#172033] font-semibold">B.E., Electronics & Telecommunication</strong>
                  <span className="text-[#596273]"> — Savitribai Phule Pune University</span>
                </div>
                <span className="text-xs font-mono text-[#3B82F6] font-medium shrink-0">
                  Aug 2018 – Aug 2022
                </span>
              </div>
            </div>
          </div>

          {/* 6. CERTIFICATIONS */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A07A4A] border-b border-stone-100 pb-1 mb-3 font-mono">
              CERTIFICATIONS
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#475467]">
              <li className="flex items-center gap-2">
                <span className="text-[#3B82F6]">•</span>
                <span>Salesforce Certified AI Associate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3B82F6]">•</span>
                <span>Salesforce Certified B2C Commerce Developer (SFRA)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3B82F6]">•</span>
                <span>Akeneo Foundation Certification</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3B82F6]">•</span>
                <span>AI Product Management — In Progress</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 bg-[#FAFAF7] px-6 py-4 flex items-center justify-between text-xs text-[#596273]">
          <span>Shibin Sibi · Updated {new Date().getFullYear()}</span>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#172033] px-4 py-2 text-xs font-medium text-white hover:bg-[#3B82F6] transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
