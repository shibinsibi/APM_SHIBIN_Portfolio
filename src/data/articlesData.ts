export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleCallout {
  title: string;
  text?: string;
  items?: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  flowDiagram?: string;
  table?: ArticleTable;
  calloutBox?: ArticleCallout;
  checklist?: string[];
}

export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  theme: 'rag-featured' | 'ai-soft-blue' | 'product-blue' | 'teardown-beige';
  readTime: string;
  date: string;
  highlights?: string[];
  fullContent?: {
    lead: string;
    sections: ArticleSection[];
    keyTakeaway: string;
  };
}

export const ARTICLES_DATA: JournalArticle[] = [
  {
    id: 'ai-foundation-pm',
    category: 'NOTE 01 · FOUNDATIONS',
    title: 'AI Foundation for PM',
    subtitle: 'Layers, LLM Mechanics, PREP Framework & Prompt Engineering',
    description:
      'A comprehensive 13-part field note covering the AI product landscape, system components, LLM glossary, prompt quality ladder, PREP framework, and practical guardrails.',
    theme: 'ai-soft-blue',
    readTime: '7 min read',
    date: 'PM Working Note',
    highlights: [
      'AI Product Landscape: Infrastructure → Models → Applications → UX',
      'The PREP Framework: Purpose, Requirements, Examples & Parameters',
      'Prompt Quality Ladder, Temperature Controls, and Pitfall Mitigations',
    ],
    fullContent: {
      lead:
        'An AI product combines several layers. Thinking in layers helps a product manager understand where a feature\'s value comes from and where risks, dependencies, and strategic advantages appear.',
      sections: [
        {
          heading: '1. AI Product Landscape',
          paragraphs: [
            'An AI product combines several layers. Thinking in layers helps a product manager understand where a feature\'s value comes from and where risks or dependencies may appear.',
          ],
          table: {
            headers: ['Layer / component', 'What it means'],
            rows: [
              [
                'Infrastructure',
                'Compute and cloud resources—such as GPUs and cloud platforms—that run AI workloads.',
              ],
              [
                'Models',
                'Trained models that generate, classify, summarize, or reason over information. Examples in the notes include OpenAI and Anthropic.',
              ],
              [
                'Applications',
                'The user-facing product or workflow that makes a model useful, such as a learning assistant or a team productivity app.',
              ],
              [
                'User experience',
                'How users discover, interact with, understand, and trust the AI capability.',
              ],
            ],
          },
        },
        {
          heading: '2. AI Product System Components',
          paragraphs: ['A useful simplified loop is:'],
          flowDiagram:
            'Data → Model → Content / response → Tools or actions → Feedback → Data',
          bullets: [
            'Data provides the context or examples used by the system.',
            'The model interprets the input and generates a prediction or response.',
            'Content is the output shown to the user, such as an answer, summary, or recommendation.',
            'Tools allow the AI application to retrieve information or perform permitted actions.',
            'Feedback helps teams evaluate usefulness and improve the product over time.',
          ],
          calloutBox: {
            title: 'Conceptual Product Loop',
            text:
              'This is a conceptual product loop, not a universal technical architecture; the exact components vary by product.',
          },
        },
        {
          heading: '3. What Is an LLM?',
          paragraphs: [
            'A large language model (LLM) is a model trained on large amounts of data to process and generate language. In a typical text-generation flow, the input is tokenized, the model predicts likely next tokens, and those tokens are decoded into an output.',
          ],
          flowDiagram:
            'Text input → Tokenization → Model prediction → Output text',
        },
        {
          heading: '4. Essential AI & LLM Glossary',
          table: {
            headers: ['Term', 'Definition'],
            rows: [
              [
                'Token',
                'A unit of text processed by a model. It may be a whole word, part of a word, punctuation, or another text unit. For example, a phrase such as “ChatGPT is helpful” may be split into multiple tokens; tokenization depends on the model.',
              ],
              [
                'Parameters',
                'Learned numerical values inside a model that shape its behavior. A model with more parameters is not automatically better for every task.',
              ],
              [
                'Model',
                'The trained system that uses learned patterns to produce predictions or outputs from an input.',
              ],
              [
                'Temperature',
                'A generation setting that affects how much randomness is used when selecting output tokens. Lower values generally make outputs more predictable; higher values can make them more varied. It does not add knowledge or guarantee accuracy.',
              ],
              [
                'Context window',
                'The amount of input and conversation context a model can process at one time, usually measured in tokens. Exact limits depend on the model.',
              ],
              [
                'NLP',
                'Natural Language Processing: methods that help computers work with human language, including understanding, classifying, translating, and generating text.',
              ],
              [
                'Tokenization',
                'The step that splits input text into tokens and maps them to token IDs for model processing.',
              ],
              [
                'Embedding',
                'A numerical vector representation of text or other data. Embeddings can encode semantic relationships and are often used for search, similarity matching, clustering, and retrieval.',
              ],
            ],
          },
        },
        {
          heading: '5. Prompt Engineering Basics',
          paragraphs: [
            'A prompt is a set of instructions and context given to an AI system to guide it toward a desired result. Treat a prompt like a creative brief for a designer or developer: it should explain the outcome, the context, and the constraints—not merely ask a vague question.',
          ],
          bullets: [
            'A prompt is more than a question; it can include context, instructions, examples, and output requirements.',
            'Effective prompts provide direction and context rather than relying on a broad query.',
            'Quality generally improves when the request is clear, specific, relevant, and testable.',
            'More detail is useful when it reduces ambiguity. Unnecessary detail can make a prompt harder to follow.',
          ],
        },
        {
          heading: '6. Prompt Quality Ladder',
          paragraphs: [
            'Each step adds clarity and strategic direction. A more specific prompt usually makes the output more relevant to the intended audience and use case.',
          ],
          table: {
            headers: ['Level', 'Example prompt', 'Why it is stronger'],
            rows: [
              [
                'Vague',
                '“Write about my product.”',
                'The task, audience, and outcome are unclear.',
              ],
              [
                'Clear',
                '“Describe my SaaS tool for remote teams.”',
                'Names the product category and audience.',
              ],
              [
                'Contextual',
                '“Describe my SaaS tool for remote teams struggling with handoffs.”',
                'Adds the user\'s situation or problem.',
              ],
              [
                'Strategic',
                '“Create a benefit-driven tagline for a remote-team productivity tool focused on smoother handoffs.”',
                'Connects the deliverable to a value proposition and positioning goal.',
              ],
            ],
          },
        },
        {
          heading: '7. The PREP Prompt Framework',
          paragraphs: ['Use PREP to brief the AI systematically:'],
          flowDiagram:
            'Purpose → Requirements → Examples → Parameters',
          bullets: [
            'P — Purpose: What do you want the AI to create or achieve? State the deliverable and why it is needed.',
            'R — Requirements: What must the output include? Define the audience, key themes, context, constraints, and success criteria.',
            'E — Examples: Show what good output looks like using one or two example phrases, examples, or formats.',
            'P — Parameters: Set boundaries such as length, format, tone, style, language, structure, and other specifications.',
          ],
        },
        {
          heading: '8. PREP Example: Team App Feature',
          table: {
            headers: ['PREP element', 'Example'],
            rows: [
              ['Purpose', 'Describe a new feature for a team collaboration app.'],
              [
                'Requirements',
                'Focus on speed, teamwork, and helping users see assignments and progress in one place.',
              ],
              [
                'Examples',
                '“Assign, track, and celebrate milestones—all in one overview.”',
              ],
              ['Parameters', 'Tone: upbeat. Length: maximum three sentences.'],
            ],
          },
          calloutBox: {
            title: 'Reusable PREP Prompt Template',
            text:
              'Purpose: Create [deliverable] to help [audience] achieve [goal].\nRequirements: Include [key information], address [problem/context], and avoid [constraints].\nExamples: Use the following as a reference for quality or format: [example(s)].\nParameters: Tone = [tone]; format = [format]; length = [length]; other constraints = [details].',
          },
        },
        {
          heading: '9. Tone, Specificity, and Output Quality',
          bullets: [
            'Tone is important because it shapes how the response feels to the intended audience. Examples include professional, friendly, concise, empathetic, or upbeat.',
            'Be explicit about the deliverable: for example, ask for a product tagline, a PRD section, a user-research summary, or a prioritization table.',
            'Specify the audience and context so the AI can choose appropriate language and level of detail.',
            'Use examples when a desired structure or style is difficult to describe.',
            'Set output boundaries such as a word count, number of bullets, headings, table columns, or required sections.',
            'Review the result against the original goal; a well-written answer can still be wrong or irrelevant.',
          ],
        },
        {
          heading: '10. Temperature: Common Misconceptions',
          paragraphs: [
            'Temperature is a generation control, not a measure of intelligence, knowledge, or factual correctness.',
          ],
          bullets: [
            'Higher temperature generally increases variation and can be useful for brainstorming or creative writing.',
            'Lower temperature generally makes token selection more predictable, which can help with consistent formatting or constrained responses.',
            'A low temperature does not guarantee that a response is factual or correct.',
            'Changing temperature does not change the model\'s underlying training knowledge.',
            'Prompt quality, context, retrieval, model capability, and evaluation also influence the response.',
          ],
        },
        {
          heading: '11. Common AI Pitfalls',
          table: {
            headers: ['Pitfall', 'Meaning and mitigation'],
            rows: [
              [
                'Hallucination',
                'The model produces information that sounds plausible but is false, unsupported, or fabricated. Mitigation: verify important claims, ground responses in reliable sources, and ask the model to flag uncertainty.',
              ],
              [
                'Bias',
                'Systematic skew in outputs, often reflecting biases or gaps in training data, data collection, or product design. Mitigation: test across user groups and scenarios, review data and outcomes, and provide appropriate safeguards.',
              ],
              [
                'Overfitting',
                'In machine learning, a model fits its training data too closely and performs poorly on new examples. Mitigation: evaluate on held-out data and representative real-world cases. This is not simply the same as an LLM giving an overly detailed answer.',
              ],
            ],
          },
        },
        {
          heading: '12. Practical Prompting Checklist',
          checklist: [
            'Have I stated the exact deliverable and its purpose?',
            'Have I provided the relevant background and user/audience context?',
            'Have I listed the required content and constraints?',
            'Have I supplied an example if style or format matters?',
            'Have I specified tone, format, and length?',
            'Have I identified what the AI should not assume or invent?',
            'Have I defined how I will judge whether the output is good?',
            'Have I checked facts and reviewed the output before using it?',
          ],
        },
        {
          heading: '13. Quick Revision Summary',
          bullets: [
            'AI product landscape: infrastructure → models → applications → user experience.',
            'LLM flow: input text → tokenization → model prediction → output text.',
            'PREP: Purpose, Requirements, Examples, Parameters.',
            'Prompt quality ladder: Vague → Clear → Contextual → Strategic.',
            'Temperature changes output variability; it does not guarantee accuracy or change model knowledge.',
            'Tokens are text units; embeddings are vectors; context windows limit how much information can be considered at once.',
            'Watch for hallucinations, bias, and overfitting; evaluate outputs instead of trusting them blindly.',
          ],
        },
      ],
      keyTakeaway:
        'Mastering AI product foundations means understanding system layers, speaking the language of tokens and embeddings, briefing models with structured frameworks like PREP, and proactively mitigating hallucinations and bias through continuous evaluation.',
    },
  },
  {
    id: 'vibe-coding',
    category: 'NOTE 02 · BUILD & PROTOTYPE',
    title: 'Vibe Coding',
    subtitle: 'Natural-Language Development, Rapid Prototyping & Incremental Debugging',
    description:
      'A 14-part PM guide on natural-language software creation: traditional vs. vibe workflows, risk management, debugging mindset, API connectors, and PREP prompts.',
    theme: 'product-blue',
    readTime: '8 min read',
    date: 'PM Working Note',
    highlights: [
      'Workflow: Prompt → Run → Observe → Refine → Share or Ship',
      'Comparison: Traditional engineering vs. rapid exploratory vibe coding',
      'PREP Vibe Prompt Template, Debugging Mindset & 14-point glossary',
    ],
    fullContent: {
      lead:
        'Vibe coding is an approach to building software by describing what you want in natural language to an AI coding assistant, then running, reviewing, and refining the generated app through conversation.',
      sections: [
        {
          heading: '1. Why Traditional Product Building Can Slow PMs Down',
          paragraphs: [
            'Product managers may depend on design and engineering availability before turning an idea into something users can try. This can lengthen discovery and delay validation.',
          ],
          bullets: [
            'Waiting for design or engineering bandwidth can delay experiments.',
            'Hypotheses may take longer to validate without a testable prototype.',
            'Product discovery can become slower and more expensive.',
            'Visualizing an idea early can be difficult.',
          ],
          flowDiagram:
            'Idea → Wait → Sprint → Release → Feedback → Rework',
          calloutBox: {
            title: 'Illustrative Sequence',
            text:
              'This is an illustrative sequence, not a rule for every team. Sketches, clickable prototypes, interviews, and experiments can validate ideas before production release.',
          },
        },
        {
          heading: '2. What Is Vibe Coding?',
          paragraphs: [
            'Vibe coding is an approach to building software by describing what you want in natural language to an AI coding assistant, then running, reviewing, and refining the generated app through conversation.',
          ],
          flowDiagram:
            'Idea → Prompt → App → Review → Iterate',
          bullets: [
            'Describe the goal, target users, expected behaviour, and constraints.',
            'Ask AI to generate an initial prototype or implementation.',
            'Run the result and inspect the experience.',
            'Give focused feedback and request specific changes.',
            'Repeat until it is useful for the intended purpose.',
          ],
          calloutBox: {
            title: 'Human Review Required',
            text:
              'AI-generated code still needs human review. Vibe coding can accelerate exploration, but it does not remove the need for testing, security review, or engineering expertise.',
          },
        },
        {
          heading: '3. Why Product Managers May Use Vibe Coding',
          bullets: [
            'Build rough prototypes quickly without waiting for a full engineering cycle.',
            'Make ideas tangible so users, designers, and engineers can discuss the same thing.',
            'Test product logic and assumptions before sprint planning.',
            'Explore multiple design or workflow options at relatively low cost.',
            'Automate selected recurring PM tasks, such as report preparation or simple status summaries.',
          ],
          calloutBox: {
            title: 'Faster Learning Over Pure Code Volume',
            text:
              'The main benefit is faster learning—not simply producing more code. A prototype should help answer a product question, such as whether users understand a workflow or value a feature.',
          },
        },
        {
          heading: '4. Vibe Coding vs. Traditional Coding',
          table: {
            headers: ['Factor', 'Traditional coding', 'Vibe coding'],
            rows: [
              [
                'Language',
                'Programming languages and precise technical specifications',
                'Natural-language instructions combined with code and configuration',
              ],
              [
                'Workflow',
                'Write → Run/compile → Debug → Test',
                'Describe → Generate → Run → Review → Refine',
              ],
              [
                'Common users',
                'Software engineers and technical teams',
                'Engineers, PMs, designers, and other builders',
              ],
              [
                'Typical strength',
                'Control and precision when implemented well',
                'Speed of exploration and quick iteration',
              ],
              [
                'Best fit',
                'Complex, tightly controlled, or production systems',
                'Early prototypes, internal tools, and low-risk experiments',
              ],
            ],
          },
          paragraphs: [
            'These are tendencies, not absolute rules. AI tools can support production engineering, and experienced developers can prototype quickly. Choose based on risk, task complexity, and team capability.',
          ],
        },
        {
          heading: '5. The Vibe Coding Workflow',
          table: {
            headers: ['Step', 'What to do', 'Question to ask'],
            rows: [
              [
                'Prompt',
                'State the problem, user, outcome, and constraints.',
                'What am I trying to learn or enable?',
              ],
              [
                'Run',
                'Launch the generated app or prototype.',
                'Does the main flow work?',
              ],
              [
                'Observe',
                'Try realistic scenarios and inspect the UX.',
                'What is confusing, broken, or missing?',
              ],
              [
                'Refine',
                'Request one specific improvement at a time.',
                'What is the highest-impact issue to fix next?',
              ],
              [
                'Share or ship',
                'Share a prototype or deploy only when appropriate.',
                'Is this a demo, internal tool, or production system?',
              ],
            ],
          },
          calloutBox: {
            title: 'Key Mindset',
            text:
              'Fail fast, learn fast. Aim for measurable progress rather than perfection on the first attempt.',
          },
        },
        {
          heading: '6. Limits and Risks of Building with AI',
          bullets: [
            'Complex backend logic may be difficult to understand or control.',
            'Debugging can be challenging when errors span files, services, or dependencies.',
            'Generated projects may lack adequate tests, documentation, or version-control practices.',
            'A prototype that works in a demo may not be secure, reliable, accessible, or scalable.',
            'AI can misunderstand requirements, generate incorrect code, or introduce regressions.',
          ],
          calloutBox: {
            title: 'Pre-Flight Checklist: Before Using with Real Users',
            text:
              '• Review authentication, authorization, data handling, and secret management.\n• Test edge cases and failure states, not just the happy path.\n• Check accessibility, mobile behaviour, and usability.\n• Use version control and preserve a known-good version before major changes.\n• Ask an experienced engineer to review higher-risk systems.',
          },
        },
        {
          heading: '7. Product Manager Use Cases',
          table: {
            headers: ['Use case', 'Example build', 'Value'],
            rows: [
              [
                'Internal tool',
                'Meeting-note organizer',
                'Structure decisions, owners, and action items',
              ],
              [
                'Dashboard',
                'Metrics dashboard connected to a spreadsheet',
                'Explore and communicate trends',
              ],
              [
                'Prototype',
                'Onboarding flow',
                'Test comprehension before full implementation',
              ],
              [
                'Automation',
                'Email reports or Slack alerts',
                'Reduce repetitive work, with reliable integrations and permissions',
              ],
            ],
          },
        },
        {
          heading: '8. Debugging Mindset',
          paragraphs: [
            'Many AI coding mistakes begin with gaps in instructions, context, or verification. However, some are genuine technical defects.',
          ],
          flowDiagram:
            'Prompt → Error → Explain → Fix → Repeat',
          bullets: [
            'Do not rewrite the whole app when one specific part is broken.',
            'Share the exact error, expected behaviour, and actual behaviour.',
            'Ask AI to explain the relevant code or likely root cause.',
            'Make one focused change, then rerun the same test.',
            'Check that the fix did not break a previously working feature.',
          ],
        },
        {
          heading: '9. Common Issues and Fixes',
          table: {
            headers: ['Problem', 'Possible cause', 'Recommended response'],
            rows: [
              [
                'Code error',
                'Missing context, invalid assumptions, or a code defect',
                'Provide the error and relevant code; diagnose step by step',
              ],
              [
                'Wrong format',
                'Ambiguous output requirements',
                'Specify exact structure, fields, dimensions, or an example',
              ],
              [
                'Unexpected output',
                'Too many goals or undefined behaviour',
                'Split the request into smaller tasks and define acceptance criteria',
              ],
              [
                'Performance lag',
                'Inefficient logic, large data, latency, or dependencies',
                'Measure the bottleneck before optimizing',
              ],
            ],
          },
        },
        {
          heading: '10. Best Practices for Reliable AI Apps',
          bullets: [
            'Save prompt versions and document what changed.',
            'Keep each prompt focused on one clear outcome.',
            'Define acceptance criteria, such as “show the total count correctly for all filtered rows.”',
            'Use representative test inputs after each meaningful change.',
            'Ask AI to explain important implementation choices and assumptions.',
            'Use version control or another reliable way to roll back changes.',
            'Validate data, permissions, error handling, and security before real-world use.',
          ],
          calloutBox: {
            title: 'Example Incremental Prompt Sequence',
            text:
              'Prompt 1 asks for a basic metric; Prompt 2 clarifies the data hierarchy; Prompt 3 specifies the correct count, labels, and layout. Change one thing at a time where possible so you can identify what improved the result.',
          },
        },
        {
          heading: '11. API Connectors in Vibe Coding',
          paragraphs: [
            'An API (Application Programming Interface) lets one application request data or actions from another system through an agreed interface. An API connector is the integration layer that helps the app communicate with that service.',
          ],
          table: {
            headers: ['Goal', 'Example from the slides', 'What happens'],
            rows: [
              [
                'Fetch weather',
                'OpenWeather API',
                'The app requests and displays weather data',
              ],
              [
                'Save tasks',
                'Supabase',
                'The app stores or retrieves task records',
              ],
              [
                'Update a spreadsheet',
                'Google Sheets API',
                'The app reads or writes sheet data with required permissions',
              ],
            ],
          },
          checklist: [
            'Confirm the API supports the needed action and review its documentation.',
            'Configure authentication and permissions correctly.',
            'Keep secrets out of public frontend code; use secure server-side handling where appropriate.',
            'Handle failed requests, rate limits, timeouts, and missing data.',
            'Test with sample data before connecting important or sensitive records.',
          ],
        },
        {
          heading: '12. A Practical PREP Prompt for Vibe Coding',
          paragraphs: [
            'Use PREP—Purpose, Requirements, Examples, Parameters—to make the AI\'s task more precise.',
          ],
          calloutBox: {
            title: 'Reusable PREP Template for Vibe Coding',
            text:
              'Purpose: Build a low-fidelity prototype of [product/feature] for [target users] to help them [user goal].\nRequirements: Include [core screens/actions]. Focus on [problem]. Use realistic sample data and handle [edge cases].\nExamples: Follow this reference for the desired interaction or layout: [reference].\nParameters: Keep scope to [MVP scope]. Explain assumptions and give steps to run the prototype.\nAcceptance criteria: The user can [action 1], [action 2], and [action 3]. Show clear success or error states.',
          },
        },
        {
          heading: '13. Quick Revision Summary',
          bullets: [
            'Vibe coding means building or modifying software through natural-language collaboration with AI.',
            'For PMs, its main value is faster prototyping and learning—not replacing engineers.',
            'Workflow: Prompt → Run → Observe → Refine → Share or ship when appropriate.',
            'Use it for low-risk internal tools, dashboards, prototypes, and simple automations.',
            'Debug incrementally: explain the error, isolate the issue, fix one thing, and retest.',
            'Use focused prompts, acceptance criteria, and representative test cases.',
            'API connectors let an app exchange data or trigger actions in external services.',
            'Never assume an AI-generated prototype is production-ready; review security, reliability, tests, and data handling.',
          ],
        },
        {
          heading: '14. Glossary',
          table: {
            headers: ['Term', 'Meaning'],
            rows: [
              [
                'Prototype',
                'A simplified version of a product used to explore or validate an idea',
              ],
              [
                'Acceptance criteria',
                'Specific, testable conditions defining whether a feature meets its requirements',
              ],
              [
                'Backend',
                'Server-side logic, data access, and processing behind an app',
              ],
              [
                'API',
                'A defined interface through which software systems communicate',
              ],
              [
                'Iteration',
                'A cycle of making a change, testing it, and learning from the result',
              ],
              [
                'Version control',
                'A system for tracking code changes and reviewing or rolling back work',
              ],
            ],
          },
        },
      ],
      keyTakeaway:
        'Vibe coding empowers product managers to turn hypotheses into tangible, testable software through conversational iteration. The primary goal is accelerated discovery and learning—not bypassing software engineering or production discipline.',
    },
  },
];
