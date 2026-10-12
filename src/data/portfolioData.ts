import portraitImg from '../assets/images/shibin_sibi_photo_1790405808234.jpg';
import aiCommerceImg from '../assets/images/project_ai_commerce_1790403028356.jpg';
import growthPlatformImg from '../assets/images/project_growth_platform_1790403045841.jpg';
import journalEssayImg from '../assets/images/journal_ai_essay_1790403057164.jpg';
import { CaseStudy, Principle, ExplorationItem, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Shibin Sibi',
  role: 'Aspiring Associate Product Manager',
  location: 'Pune, India',
  phone: '+91 7485931935',
  email: 'shibinsibi3021@gmail.com',
  linkedin: 'https://linkedin.com/in/shibin-sibi',
  portrait: portraitImg,
  tagline: 'Bridging human intent, artificial intelligence, and transactional velocity.',
  heroHeadline: 'Building at the intersection of human intent, artificial intelligence, and commercial velocity.',
  heroSubdeck: 'A product manager and systems builder translating probabilistic machine intelligence into intuitive, high-converting e-commerce experiences. Focused on 0-to-1 craft, mathematical discovery, and frictionless scale.',
  credo: 'Technology without human taste is merely computational noise. My work bridges the statistical power of AI with the emotional psychology of how people discover, trust, and purchase.',
};

export const PILLARS_DATA = [
  {
    id: 'product',
    title: 'Product Management & Systems Craft',
    themeColor: '#3B82F6',
    softBg: '#EFF6FF',
    accentText: 'text-[#3B82F6]',
    borderHover: 'hover:border-[#3B82F6]',
    symbol: 'PM',
    lead: 'Translating ambiguity into high-conviction product roadmaps that compound velocity.',
    description: 'Great product management is neither pure consensus nor raw dictation; it is the discipline of framing the highest-leverage problem, aligning cross-functional craft, and measuring what actually moves human behavior and unit economics.',
    capabilities: [
      '0-to-1 Product Discovery & Market Validation',
      'Funnel Telemetry & High-Impact Experimentation',
      'Cross-Functional Engineering & Design Alignment',
      'Unit Economics, LTV/CAC & Margin Architecture',
      'PRDs with Rigorous System Invariants'
    ],
    metric: {
      value: '+34%',
      label: 'Funnel Conversion Velocity',
      context: 'Across 1.2M monthly transactions through telemetry-driven checkout redesign'
    }
  },
  {
    id: 'ai',
    title: 'Applied AI & Probabilistic UX',
    themeColor: '#2563EB',
    softBg: '#EAF3FF',
    accentText: 'text-[#2563EB]',
    borderHover: 'hover:border-[#2563EB]',
    symbol: 'AI',
    lead: 'Harnessing generative reasoning and semantic retrieval to unlock intent.',
    description: 'Moving beyond parlor tricks and superficial chat wrappers. I architect production AI workflows where LLM reasoning, vector embeddings, and agentic planning solve concrete user friction with sub-second latency and deterministic safeguards.',
    capabilities: [
      'Intent Parsing & Conversational Discovery Engines',
      'Retrieval-Augmented Generation (RAG) for Product Catalogs',
      'Probabilistic UX Heuristics & Error Grace',
      'Multimodal Search & Aesthetic Embeddings',
      'Evaluation Harnesses & Hallucination Mitigation'
    ],
    metric: {
      value: '4.8 / 5.0',
      label: 'Customer Trust Score',
      context: 'On agentic discovery engine handling 80,000+ unstructured product queries'
    }
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Architecture & Scale',
    themeColor: '#D9B88C',
    softBg: '#F5EDE2',
    accentText: 'text-[#A07A4A]',
    borderHover: 'hover:border-[#D9B88C]',
    symbol: 'EC',
    lead: 'Designing frictionless discovery, checkout, and inventory intelligence.',
    description: 'E-commerce is a game of millisecond perception and psychological reassurance. From catalog taxonomy and multi-vendor carts to dynamic pricing algorithms, I optimize the systemic flywheel that turns curiosity into lifelong customer affinity.',
    capabilities: [
      'Catalog Taxonomy & Automated Attribute Enrichment',
      'Multi-Vendor Basket & Distributed Checkout Orchestration',
      'Dynamic Merchandising & Basket Value Optimization',
      'Post-Purchase Engagement & Retention Loops',
      'High-Concurrency Inventory & Order Management'
    ],
    metric: {
      value: '$18M+',
      label: 'Incremental GMV Unlocked',
      context: 'Through semantic catalog enrichment and intelligent cross-sell algorithms'
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aura-agentic-commerce',
    title: 'Aura: Next-Gen Conversational Commerce Engine',
    tagline: 'Transforming static keyword search into an intelligent, contextual personal buyer agent.',
    pillar: 'AI',
    period: '2024 · 2025',
    role: 'Lead Product Manager & System Architect',
    image: aiCommerceImg,
    summary: 'Traditional e-commerce search breaks when queries are descriptive, subjective, or lifestyle-driven. Aura introduces a hybrid semantic-retrieval pipeline that understands intent such as "a breathable lightweight dinner shirt for humid Tokyo summers" and suggests matched outfits with zero hallucinated inventory.',
    metrics: [
      { label: 'Search-to-Cart Conversion', value: '+42%' },
      { label: 'Zero-Result Query Reduction', value: '-78%' },
      { label: 'End-to-End Latency', value: '<210ms' },
      { label: 'Catalog Size Handled', value: '350K+ SKUs' }
    ],
    problem: 'Shoppers were spending an average of 4.6 minutes filtering 18 distinct drop-downs, resulting in a 61% search abandonment rate whenever their mental model did not match the rigid database taxonomy.',
    approach: [
      'Conducted 40+ user interviews to map how shoppers naturally articulate style, fit, and seasonal intent.',
      'Designed a multi-stage retrieval architecture pairing dense vector embeddings with real-time stock filters.',
      'Implemented fallback graceful degradation so when intent is ambiguous, the agent asks at most one clarifying question.'
    ],
    systemHighlights: [
      'Fine-tuned lightweight embedding model with domain-specific fashion & lifestyle tokenizers.',
      'Strict guardrails preventing hallucinated products or out-of-stock items from entering generated suggestions.',
      'Micro-segmented user session history cached at edge for low-latency contextual continuity.'
    ],
    outcomes: [
      'Direct revenue attribution of $4.2M within first 90 days of general deployment.',
      'Organic basket size increased from 1.6 items to 2.4 items per transaction.',
      'Search abandonment plummeted from 61% to under 14%.'
    ],
    learnings: 'Users do not want a chat interface when a clean grid will do; they want a conversational guide that seamlessly yields visual, actionable product cards with clear pricing and size availability.'
  },
  {
    id: 'omniscale-checkout-velocity',
    title: 'OmniScale: High-Velocity Checkout & Dynamic Basket Engine',
    tagline: 'Re-engineering checkout psychology and transaction latency across 1.2M monthly shoppers.',
    pillar: 'E-commerce',
    period: '2023 · 2024',
    role: 'Senior Product Manager',
    image: growthPlatformImg,
    summary: 'A complete ground-up re-architecture of the consumer checkout journey. Replaced a fragmented 4-step wizard with an adaptive single-surface checkout that dynamically adapts payment methods, detects saved shipping profiles in under 80ms, and orchestrates cross-vendor shipping consolidation.',
    metrics: [
      { label: 'Checkout Completion Rate', value: '+34%' },
      { label: 'Payment Step Dropoff', value: '-28%' },
      { label: 'Average Order Value (AOV)', value: '+19%' },
      { label: 'P95 Transaction Latency', value: '185ms' }
    ],
    problem: 'Checkout dropoff was concentrated on mobile screens where complex form fields, unexpected tax calculations, and slow payment gateway redirects created psychological friction.',
    approach: [
      'Mapped micro-friction points using session telemetry and heatmaps across 500k recorded transactions.',
      'Created an adaptive state machine that estimates shipping and taxes transparently in real time.',
      'Introduced dynamic "Smart Additions" that calculate real-time inventory threshold for free shipping.'
    ],
    systemHighlights: [
      'Optimistic UI state updates with rollback guarantees on payment failure.',
      'Edge-based geo-location detection reducing required address input strokes by 65%.',
      'Automated retry logic for transient banking timeouts saving 4,200 orders per week.'
    ],
    outcomes: [
      'Increased annual transaction volume by $13.8M with zero increase in customer acquisition cost.',
      'Mobile checkout time dropped from 142 seconds to 38 seconds.',
      'CSAT score for checkout rose from 3.2 to 4.7 out of 5.'
    ],
    learnings: 'Trust is built through predictability. When prices or shipping costs update transparently before the user asks, anxiety vanishes.'
  },
  {
    id: 'synthetix-catalog-intelligence',
    title: 'Synthetix: Semantic Catalog Taxonomy & Enrichment',
    tagline: 'Harnessing vision-language models to enrich 450,000 unstandardized merchant SKUs.',
    pillar: 'Product',
    period: '2023',
    role: 'Product Manager — Machine Learning Platform',
    image: journalEssayImg,
    summary: 'Multi-vendor marketplaces suffer from chaotic, poorly labeled product data supplied by thousands of independent sellers. Synthetix built an automated ingestion engine that extracts 48 standardized attributes per SKU from unstructured supplier imagery and titles.',
    metrics: [
      { label: 'Attribute Precision', value: '99.4%' },
      { label: 'SKU Onboarding Speed', value: '12× Faster' },
      { label: 'Manual Review Reduction', value: '-85%' },
      { label: 'Faceted Filter Coverage', value: '98.2%' }
    ],
    problem: 'Sellers provided incomplete titles (e.g. "Cool shoe 2023 black") lacking material, occasion, sole type, or fit attributes, rendering faceted search virtually useless.',
    approach: [
      'Formulated an automated pipeline chaining computer vision feature extraction with LLM structural normalization.',
      'Built a confidence-scored human-in-the-loop review workbench for ambiguous edge cases.',
      'Created seller feedback loops that reward complete metadata with organic search visibility boosts.'
    ],
    systemHighlights: [
      'Ensemble model combining image classification with bidirectional text parsing.',
      'Sub-50ms inference serverless batch worker queues handling peak seasonal ingestion surges.',
      'Automated regression suite testing against 10,000 golden benchmark catalog entries.'
    ],
    outcomes: [
      'Enabled precise faceted filtering across 24 new shopping categories within 6 weeks.',
      'Supplier onboarding turnaround cut from 9 days to 18 hours.',
      'Organic product discovery click-through rates improved by 31%.'
    ],
    learnings: 'The biggest leverage in AI is not algorithmic complexity, but the hygiene, ground truth, and feedback loops of the input data.'
  }
];

export const PRINCIPLES_DATA: Principle[] = [
  {
    id: 'p1',
    number: '01',
    title: 'AI is only as intelligent as the problem definition.',
    quote: 'Before training a model or tuning an inference pipeline, interrogate the underlying human friction.',
    excerpt: 'Too many teams rush to drop an LLM into an existing screen simply to claim they have an AI feature. The highest-leverage AI products solve problems users could never formulate into traditional database filters.',
    readTime: '3 min read',
    keyTakeaways: [
      'Avoid conversational wrappers for tasks better solved by spatial layouts.',
      'Measure task completion velocity rather than session duration or chat token count.',
      'Define clear fallback behaviors for low-confidence model responses.'
    ],
    fullEssay: [
      'In the current wave of generative machine intelligence, the greatest failure mode in product management is novelty-driven feature development. When a technology is magical, our instinct is to showcase the magic rather than solve the customer’s latent anxiety.',
      'In e-commerce, a buyer rarely wants an open-ended dialogue with an artificial persona while standing in line at a grocery store. They want instantaneous clarity: Does this coat fit over a blazer? Will these boots arrive before Thursday? Is this coffee roast low in acidity?',
      'When we define the problem through the lens of human cognition—relieving cognitive load rather than simulating human chatter—AI transforms from an expensive gimmick into an indispensable utility.'
    ]
  },
  {
    id: 'p2',
    number: '02',
    title: 'In commerce, intentional friction creates emotional security.',
    quote: 'Blind speed is not always trust. The best products know when to accelerate and when to pause.',
    excerpt: 'The conventional dogma of growth engineering demands stripping every possible millisecond and confirmation step from a funnel. But for high-consideration purchases, intentional reassurance builds lasting customer affinity.',
    readTime: '4 min read',
    keyTakeaways: [
      'Differentiate between mechanical friction (bad) and cognitive reassurance (good).',
      'Transparency regarding shipping guarantees, return policies, and final totals reduces post-purchase remorse.',
      'Deliberate micro-pauses during complex AI generation enhance perceived value and accuracy.'
    ],
    fullEssay: [
      'Over a decade of UX dogma has taught us that fewer clicks always equal higher conversion. Yet when examining return rates, customer support inquiries, and long-term brand equity, an entirely different truth emerges.',
      'When a customer purchases a high-value item—such as tailored apparel, enterprise equipment, or custom home furnishings—a frictionless one-click transaction can trigger immediate post-purchase panic. Did I pick the right size? Did my discount apply?',
      'By designing intentional "reassurance waypoints"—transparent itemized breakdowns, explicit size confirmation overlays, and clear order editing windows—we cultivate a psychological sense of agency. The result is higher net retention and authentic brand loyalty.'
    ]
  },
  {
    id: 'p3',
    number: '03',
    title: 'Probabilistic UX requires new design heuristics.',
    quote: 'Traditional interfaces execute commands; generative interfaces negotiate intent.',
    excerpt: 'Deterministic software guarantees identical output for identical input. AI products operate on probabilities. Designing for this reality requires graceful degradation, ambient corrections, and preserved user control.',
    readTime: '3 min read',
    keyTakeaways: [
      'Never lock the user inside a model’s hallucinated assumption; always provide an escape hatch.',
      'Offer structured controls alongside open-ended semantic inputs.',
      'Display confidence indicators discreetly through visual hierarchy rather than raw numbers.'
    ],
    fullEssay: [
      'For forty years, digital product design was built on the covenant of determinism: clicking "Save" always saves; clicking "Sort by Price" always orders ascending numbers. A user who masters the buttons masters the machine.',
      'With large language and vision models, the interface is inherently probabilistic. The machine offers a speculative interpretation of what the user desires. If a product manager treats this like a deterministic button, the user will feel betrayed the moment the model misinterprets context.',
      'Our responsibility as modern PMs is to architect hybrid interfaces: fluid generative suggestions anchored by crisp, immutable controls. Give users a paintbrush, not just a black box.'
    ]
  },
  {
    id: 'p4',
    number: '04',
    title: 'Cross-functional cadence beats isolated product genius.',
    quote: 'The strongest product leaders are translators who align engineering constraints with human delight.',
    excerpt: 'A product manager who cannot read an API response schema or evaluate an evaluation loss curve will always be at the mercy of secondhand interpretations. Depth of domain literacy creates compounding team velocity.',
    readTime: '3 min read',
    keyTakeaways: [
      'Write PRDs that define system invariants and edge cases, not just happy-path mockups.',
      'Collaborate closely with data scientists to design realistic evaluation benchmarks.',
      'Protect the team from context switching by clarifying the single non-negotiable metric of the cycle.'
    ],
    fullEssay: [
      'The romantic archetype of the visionary product manager who simply points in a direction and expects execution is dead. In the complex world of modern transactional architectures and machine learning systems, credibility is earned in the details.',
      'When you can sit with an engineer and debate database indexing strategies, discuss latency trade-offs on vector retrieval with a data scientist, and test typography legibility with a designer, alignment happens in minutes rather than weeks.',
      'True velocity is not about typing faster code or writing longer specification documents; it is the total elimination of ambiguity between team members.'
    ]
  }
];

export const EXPLORATION_ITEMS: ExplorationItem[] = [
  {
    id: 'agentic-negotiator',
    title: 'Autonomous Buyer-to-Seller Intent Negotiation',
    focusArea: 'Agentic Systems & Protocol Design',
    stage: 'Active Prototype',
    hypothesis: 'Personal consumer agents will soon negotiate terms, delivery slots, and bundled pricing directly with retail inventory APIs on behalf of consumers.',
    methodology: 'Prototyping a lightweight JSON-RPC agent handshake using local tool calling to match multi-retailer baskets under a single budget constraint.',
    interactiveAvailable: true
  },
  {
    id: 'multimodal-aesthetic-graph',
    title: 'Multimodal Aesthetic Graph for Visual Commerce',
    focusArea: 'Computer Vision & Embedding Geometry',
    stage: 'Research Paper',
    hypothesis: 'Mapping aesthetic taste vectors (e.g. "brutalist interior", "Scandinavian minimal") onto product catalogs yields 3× higher engagement than textual category browsing.',
    methodology: 'Training contrastive vision embeddings on 50,000 curated interior design photographs mapped directly to furniture inventory catalogs.',
    interactiveAvailable: false
  },
  {
    id: 'privacy-first-edge-personalization',
    title: 'Zero-Telemetry Edge Vector Personalization',
    focusArea: 'On-Device AI & Privacy Preservation',
    stage: 'Early Inquiry',
    hypothesis: 'Local WebAssembly vector search running directly inside the consumer browser can deliver hyper-personalized ranking without tracking private user data in centralized databases.',
    methodology: 'Evaluating browser-side quantized embedding models that calculate similarity scores in sub-20ms without transmitting raw user history over the network.',
    interactiveAvailable: false
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: 'Almost 4 Years Experience',
    title: 'Salesforce Commerce Cloud',
    organization: 'Zensar Technologies',
    role: 'E-commerce Platform & Support',
    description: 'Almost 4 years working with enterprise e-commerce platforms and customer-facing digital experiences. Experience includes Salesforce B2C Commerce Cloud, SFRA, production support, system integrations, root-cause analysis, incident management, and workflow automation.',
    theme: 'product',
    keyImpact: 'Maintained high reliability, storefront stability, and incident resolution for enterprise digital retail operations.'
  },
  {
    year: 'Credentialed & Ongoing',
    title: 'Certifications & Continuous Learning',
    organization: 'Salesforce, Akeneo & AI Specialization',
    role: 'Certified Commerce Developer',
    description: 'Salesforce Certified AI Associate; Salesforce Certified B2C Commerce Developer; Akeneo Foundation Certification; AI Product Management (Inprogress).',
    theme: 'ai',
    keyImpact: 'Deepened enterprise competence across catalog architectures, transactional flows, and applied AI product thinking.'
  },
  {
    year: 'SPPU & MIT University',
    title: 'Engineering & Technology Management',
    organization: 'SPPU & MIT University',
    role: 'B.E. & PGDM / MBA Candidate',
    description: 'B.E. in Electronics & Telecommunication from Savitribai Phule Pune University (2018 — 2022); PGDM / MBA in Information Technology from MIT University (2024 — 2026).',
    theme: 'human',
    keyImpact: 'Established rigorous first-principles engineering problem-solving combined with business technology strategy.'
  }
];

export const READING_LIST = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    takeaway: 'Affordances, signifiers, and feedback loops as the eternal baseline of all human-computer interaction.'
  },
  {
    title: 'High Output Management',
    author: 'Andy Grove',
    takeaway: 'Treating the product development process as a high-leverage production line with deliberate choke-point control.'
  },
  {
    title: 'Thinking in Systems',
    author: 'Donella Meadows',
    takeaway: 'Understanding feedback delays, stock-and-flow dynamics, and why interventions at the wrong leverage point backfire.'
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    takeaway: 'Building proprietary, compounding technology advantages rather than competing in commoditized incrementalism.'
  }
];
