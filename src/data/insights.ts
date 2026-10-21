export type InsightCategory =
  | "MiCA & Licensing"
  | "AML/CFT"
  | "Regulatory Compliance"
  | "Financial Services & DORA"
  | "Data Protection"
  | "Market Entry"
  | "Corporate & Legal Advisory";

export type InsightArticle = {
  slug: string;
  title: string;
  category: InsightCategory;
  date: string;
  dateTime: string;
  href: string;
  image: string;
  imageAlt: string;
  author?: string;
  summary?: string;
  brief: string;
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
  sources: {
    label: string;
    href: string;
  }[];
};

export const insightCategories = [
  "MiCA & Licensing",
  "AML/CFT",
  "Regulatory Compliance",
  "Financial Services & DORA",
  "Data Protection",
  "Market Entry",
  "Corporate & Legal Advisory",
] as const satisfies readonly InsightCategory[];

export const insightArticles: readonly InsightArticle[] = [
  {
    slug: "eu-amlr-2027-obliged-entities",
    title:
      "EU AMLR 2027: What Obliged Entities Need to Review Before the New Rules Apply",
    category: "AML/CFT",
    date: "18 October 2026",
    dateTime: "2026-10-18",
    href: "/insights/eu-amlr-2027-obliged-entities/",
    image:
      "/images/aml-gap-analysis-hero.png",
    imageAlt: "",
    summary:
      "A practical transition framework for obliged entities before the principal AMLR provisions apply on 10 July 2027.",
    brief:
      "Regulation (EU) 2024/1624 establishes directly applicable EU anti-money laundering requirements, with its principal provisions applying from 10 July 2027. Firms should identify which requirements affect their entity and operating model, then organise a proportionate transition.",
    sections: [
      {
        heading: "Start with applicability and the operating model",
        paragraphs: [
          "The AML Regulation is part of the EU's 2024 AML/CFT package. Whether a particular entity is in scope depends on its legal status, activities, jurisdiction and any applicable national rules. A transition review should begin with those facts rather than assume that the current policy set maps directly to the new framework.",
          "Direct application of the Regulation does not mean national supervisory arrangements disappear. Read the AMLR alongside the related EU directive, sector-specific rules and relevant national requirements.",
        ],
      },
      {
        heading: "Connect legal changes to working controls",
        paragraphs: [
          "Review how governance, risk assessment and customer controls work together. The useful output distinguishes requirements that remain adequately addressed from changes that need a policy update, a process decision, stronger evidence or operational implementation.",
        ],
        points: [
          "Entity and activity scope, including group relationships",
          "Governance, accountability and escalation",
          "Business-wide risk assessment and customer due diligence",
          "Monitoring, records, training and third-party oversight",
        ],
      },
      {
        heading: "Make the transition manageable",
        paragraphs: [
          "A focused assessment can map relevant provisions to current controls, identify gaps and dependencies, and assign owners and realistic sequencing. Track draft technical measures separately from adopted requirements, and refresh the plan as binding standards and supervisory guidance develop.",
          "The review is a planning tool, not a substitute for implementation, independent assurance or a conclusion about a particular firm's legal position.",
        ],
      },
    ],
    sources: [
      {
        label: "Regulation (EU) 2024/1624",
        href: "https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng",
      },
      {
        label: "Directive (EU) 2024/1640",
        href: "https://eur-lex.europa.eu/eli/dir/2024/1640/oj/eng",
      },
    ],
  },
  {
    slug: "mica-in-the-czech-republic-from-casp-licensing-to-active-supervision",
    title:
      "MiCA in the Czech Republic: From CASP Licensing to Active Supervision",
    category: "MiCA & Licensing",
    date: "20 October 2026",
    dateTime: "2026-10-21",
    href: "/insights/mica-in-the-czech-republic-from-casp-licensing-to-active-supervision/",
    image:
      "/images/licensing-strategy-hero-1.webp",
    imageAlt:
      "Illustration for MiCA in the Czech Republic: From CASP Licensing to Active Supervision",
    author: "LEX ARTA",
    brief:
      "After the Czech MiCA transitional period ended on 1 July 2026, the focus shifted from transition arrangements to ongoing supervision. CASPs need to keep their authorised services, controls and operating practices aligned as the business evolves.",
    sections: [
      {
        heading: "The market has moved beyond transition",
        paragraphs: [
          "The end of the national transitional period changed the basis on which previously operating crypto-asset businesses can provide regulated services in the Czech Republic. Firms must identify whether they have an applicable MiCA authorisation or another valid route; prior operating status alone should not be assumed to remain sufficient.",
          "The Czech National Bank's October 2026 communication described a move into ordinary supervision, including attention to unauthorised activity. Authorised firms from other EU Member States may also serve Czech customers through applicable cross-border arrangements.",
        ],
      },
      {
        heading: "Authorisation is the beginning of ongoing compliance",
        paragraphs: [
          "A permission covers specified services; it does not replace continuing obligations. Changes to products, customer journeys, custody, outsourcing, management or distribution can affect how the approved model works in practice and may require regulatory assessment.",
          "A practical change-control process should identify who assesses a proposed change, what evidence supports that decision and whether notification, an extension or another regulatory step may be required.",
        ],
      },
      {
        heading: "Prepare for a supervisory relationship",
        paragraphs: [
          "CASPs should be able to explain how governance, safeguarding, financial resources, operational resilience and internal controls function day to day. Maintain records that connect written arrangements to actual responsibilities, contracts and customer activity.",
        ],
        points: [
          "Keep the service perimeter and customer-facing activity aligned",
          "Monitor changes to governance, outsourcing and technology dependencies",
          "Maintain evidence for safeguarding and prudential arrangements",
          "Assign ownership for supervisory requests and regulatory reporting",
        ],
      },
    ],
    sources: [
      {
        label: "Regulation (EU) 2023/1114 (MiCA)",
        href: "https://eur-lex.europa.eu/eli/reg/2023/1114/oj/eng",
      },
      {
        label: "Czech National Bank — MiCA competence",
        href: "https://www.cnb.cz/en/supervision-financial-market/the-cnbs-area-of-competence-under-the-regulation-on-markets-in-crypto-assets-mica/index.html",
      },
    ],
  },
  {
    slug: "mica-casp-readiness-what-to-check-before-applying",
    title: "MiCA CASP Readiness: What to Check Before Applying",
    category: "MiCA & Licensing",
    date: "16 October 2026",
    dateTime: "2026-10-17",
    href: "/insights/mica-casp-readiness-what-to-check-before-applying/",
    image:
      "/images/licensing-strategy-hero-1.webp",
    imageAlt:
      "Illustration for MiCA CASP Readiness: What to Check Before Applying",
    author: "LEX ARTA editorial team",
    brief:
      "MiCA readiness starts with the services the business will actually provide. Map that activity to the appropriate authorisation or notification route, then test whether the applicant's governance, controls and evidence support the proposed model.",
    sections: [
      {
        heading: "Map services before selecting a route",
        paragraphs: [
          "Describe each customer-facing activity, who contracts with the customer, who controls assets or keys, and what providers perform. The service classification drives the regulatory perimeter; product labels alone do not establish whether an activity is regulated.",
          "MiCA contains an authorisation framework for CASPs and a separate notification route for certain already-authorised financial entities, subject to eligibility conditions. Existing permissions should not be presumed to cover every planned service.",
        ],
      },
      {
        heading: "Test whether the application reflects operations",
        paragraphs: [
          "The application should tell a consistent story across the programme of operations, governance, prudential safeguards, risk management, AML/CFT and service-specific controls. Compare the narrative with customer journeys, contracts, staff responsibilities, policies and outsourced arrangements.",
        ],
      },
      {
        heading: "Turn gaps into a readiness decision",
        paragraphs: [
          "A useful readiness review records gaps, evidence, accountable owners and dependencies. Some findings may require changes to the operating model; others may require documentation, implementation or a jurisdiction-specific legal analysis. The competent authority, not the adviser, decides whether to grant authorisation.",
        ],
        points: [
          "Confirm the applicant, ownership and requested service perimeter",
          "Evidence governance, management responsibilities and substance",
          "Review AML/CFT, ICT, outsourcing and operational arrangements",
          "Set remediation priorities before selecting a filing timetable",
        ],
      },
    ],
    sources: [
      {
        label: "Regulation (EU) 2023/1114 (MiCA), Articles 59, 60 and 62",
        href: "https://eur-lex.europa.eu/eli/reg/2023/1114/oj/eng",
      },
      {
        label: "ESMA — Markets in Crypto-Assets Regulation",
        href: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
      },
    ],
  },
  {
    slug: "aml-risk-assessment-controls",
    title: "From AML Risk Assessment to Working Controls",
    category: "AML/CFT",
    date: "16 October 2026",
    dateTime: "2026-10-17",
    href: "/insights/aml-risk-assessment-controls/",
    image:
      "/images/aml-gap-analysis-hero.png",
    imageAlt: "Illustration for From AML Risk Assessment to Working Controls",
    author: "LEX ARTA editorial team",
    brief:
      "A business-wide AML/CFT risk assessment is useful when its findings shape customer controls, monitoring and oversight. A practical assessment explains how the firm's products, customers, channels and geographic exposure affect its actual risk.",
    sections: [
      {
        heading: "Assess the business the firm actually runs",
        paragraphs: [
          "Document the services and products, customer types, delivery channels, geographic exposure and operating model. Explain why each factor matters to the firm's exposure instead of relying on a generic score or an unexamined template.",
        ],
      },
      {
        heading: "Translate findings into customer controls",
        paragraphs: [
          "The risk assessment should inform the firm's AML/CFT policies and procedures. Customer-risk methodology, due diligence, escalation and monitoring should be proportionate to the risks identified and to the applicable legal and supervisory framework.",
        ],
      },
      {
        heading: "Check whether controls work in practice",
        paragraphs: [
          "Compare the documented approach with onboarding records, alerts, case handling, training and management information. Record exceptions and accountable owners. A review can identify design or operating gaps, but conclusions depend on the agreed scope, available evidence and applicable law.",
        ],
        points: [
          "Trace material risks to specific controls and control owners",
          "Check that escalation and monitoring reflect the risk methodology",
          "Review evidence of implementation, exceptions and remediation",
        ],
      },
    ],
    sources: [
      {
        label: "EBA Guidelines on ML/TF risk factors",
        href: "https://www.eba.europa.eu/regulation-and-policy/anti-money-laundering-and-countering-financing-terrorism/guidelines-on-customer-due-diligence-and-the-factors-credit-and-financial-institutions-should-consider-when-assessing-money-laundering-and-terrorist-financing-risk",
      },
    ],
  },
  {
    slug: "dora-ict-third-party-register",
    title: "DORA: Build an ICT Third-Party Register You Can Use",
    category: "Financial Services & DORA",
    date: "16 October 2026",
    dateTime: "2026-10-17",
    href: "/insights/dora-ict-third-party-register/",
    image:
      "/images/regulatory-perimeter-hero-1.webp",
    imageAlt:
      "Illustration for DORA: Build an ICT Third-Party Register You Can Use",
    author: "LEX ARTA editorial team",
    brief:
      "The DORA Register of Information is most useful when contractual ICT services can be traced to the business functions and operational owners they support. Build it from actual arrangements, then establish a process to keep it current.",
    sections: [
      {
        heading: "Identify the contractual perimeter",
        paragraphs: [
          "DORA requires in-scope financial entities to maintain and update information about contractual arrangements for ICT services provided by third-party providers. Start by identifying relevant legal entities, agreements, providers and services in use.",
        ],
      },
      {
        heading: "Connect services to business functions",
        paragraphs: [
          "For each arrangement, capture the supported function, internal owner and relevant provider dependencies. Reconcile procurement records with technology, legal and risk inventories so the register reflects operational reality rather than a single department's contract list.",
        ],
      },
      {
        heading: "Make maintenance part of normal operations",
        paragraphs: [
          "Assign an accountable owner and define update triggers for new agreements, renewals, service changes, subcontracting changes and exits. Periodically review consistency with ICT risk management and third-party oversight.",
          "Use the applicable current supervisory templates and reporting instructions for the entity and jurisdiction. A register is a control artefact, not a substitute for broader ICT risk management.",
        ],
        points: [
          "Set clear data owners across procurement, legal, ICT and risk",
          "Track criticality, supported functions and provider dependencies",
          "Define change triggers, review cadence and evidence of updates",
        ],
      },
    ],
    sources: [
      {
        label: "Regulation (EU) 2022/2554 (DORA), Article 28",
        href: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng",
      },
      {
        label: "European Supervisory Authorities — DORA",
        href: "https://www.eba.europa.eu/regulation-and-policy/digital-operational-resilience",
      },
    ],
  },
];

export function getInsightArticle(slug: string): InsightArticle {
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) throw new Error(`Insight article not found: ${slug}`);
  return article;
}
