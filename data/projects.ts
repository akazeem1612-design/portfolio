export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  tools: string[];
  tags: string[];
  stats: string[];
  image: string;
  status: 'Prototype built' | 'Pilot completed' | 'Completed' | string;
  date?: string;
  workflowImage?: string;
  workflowTitle?: string;
  workflowDescription?: string;
  sop?: {
    title: string;
    purpose: string;
    steps: string[];
  };
  
  // Case Study Sections
  problem?: string;
  goal?: string;
  process?: string[];
  findings?: string[];
  limitations?: string;
  improvements?: string[];
  resumeBullets?: string[];
}

export const projects: Project[] = [
  {
    title: "Creator Campaign Ops Command Center",
    slug: "creator-campaign-ops-command-center",
    shortDescription: "A simulated operations backend for managing creator-led UGC campaigns, deliverables, campaign health, and creator payouts.",
    tools: ["Airtable", "Make.com", "Gmail", "Formulas", "Workflow Automation"],
    tags: ["Operations", "Creator Economy", "Automation", "Campaign Management", "SOPs"],
    stats: ["3 brands tracked", "3 campaigns managed", "6 creators assigned", "1 alert automation built"],
    image: "/projects/creator-ops/dashboard_creator_ops.png",
    status: "Prototype Built",
    date: "Fall 2025",
    workflowImage: "/projects/creator-ops/workflow_at_risk_alert.png",
    workflowTitle: "At-Risk Deliverable Alert Automation",
    workflowDescription: "Make.com workflow that polls the Airtable base daily, identifies deliverables that are at-risk (due soon or overdue), and automatically generates formatted Gmail draft notifications for coordinator outreach.",
    sop: {
      title: "SOP: At-Risk Deliverable Monitoring",
      purpose: "Prevent creator campaign delays by identifying deliverables that are close to their due date or overdue.",
      steps: [
        "Open the Creator Campaign Ops Command Center interface dashboard in Airtable.",
        "Review the At Risk Deliverables view panel.",
        "Check each flagged deliverable's assigned creator, campaign, due date, status, and brand approval status.",
        "Trigger coordinator follow-up outreach if a deliverable is due within 48 hours and is not marked as completed."
      ]
    },
    problem: "Creator-led UGC campaigns involve many moving parts: brand requests, creator onboarding, content drafts, approvals, posting timelines, performance reporting, and payout accuracy. Without a structured backend, delays and missed handoffs can quickly create operational chaos.",
    goal: "Build a campaign operations backend that helps an operations associate track creator deliverables, flag bottlenecks, monitor campaign health, and automate follow-up alerts.",
    process: [
      "Database Architecture: Built an Airtable base with structured tables for Brands, Campaigns, Creators, Deliverables, and Payouts.",
      "Timeline Control: Created Airtable formulas and views to flag at-risk deliverables, overdue content, pending approvals, and payout review items.",
      "Executive Dashboard: Designed a dashboard interface for campaign health, creator operations, deliverable tracking, and payout monitoring.",
      "Financial Automation: Developed payout logic that calculates bonus and total payout based on conversions and campaign health.",
      "Trigger Workflows: Built a Make.com automation that daily searches at-risk deliverables and generates Gmail draft alerts for follow-up."
    ],
    findings: [
      "Tracked 3 brands and 3 active campaigns in a single source of truth.",
      "Monitored 6 creators and flagged 6 content deliverables based on status rules.",
      "Generated 6 accurate payout records with automated bonus calculations.",
      "Successfully ran 1 Make.com email alert automation to reduce coordinator manual audit times."
    ],
    limitations: "The dataset is simulated and the system is a prototype. It does not yet integrate with a real creator submission form, ad platform metrics, or payment processor.",
    improvements: [
      "Add a creator intake form to automate creator profile creation.",
      "Implement campaign brief auto-generation templates.",
      "Integrate Slack notifications for immediate delivery alerts.",
      "Build automated campaign completion reports for brand reviews."
    ],
    resumeBullets: [
      "Built a simulated creator campaign operations backend using Airtable and Make.com to manage brands, campaigns, creators, deliverables, and payouts.",
      "Created Airtable formulas and views to flag at-risk deliverables, overdue content, pending approvals, and payout review items.",
      "Designed a dashboard interface for campaign health, creator operations, deliverable tracking, and payout monitoring.",
      "Built a Make.com automation that searches at-risk deliverables and generates Gmail draft alerts for follow-up."
    ]
  },
  {
    title: "Canadian Entry-Level Career Path Analyzer",
    slug: "canadian-career-path-analyzer",
    shortDescription: "An automated labour-market analysis comparing Analytics, Finance, and Digital/Tech entry-level roles in Canada using 100 job postings.",
    tools: ["Adzuna API", "Make.com", "Google Sheets", "Regex", "Dashboarding"],
    tags: ["Business Analytics", "Automation", "Labour Market Analysis", "Career Strategy"],
    stats: ["100 job postings", "3 career paths", "7 skill categories", "1 API workflow"],
    image: "/projects/career-analyzer/dashboard_career_analyzer.png",
    status: "Pilot completed",
    date: "Fall 2025",
    workflowImage: "/projects/career-analyzer/workflow_career_analyzer.png",
    workflowTitle: "Automated Data Collection & Parsing Pipeline",
    workflowDescription: "Make.com scenario connecting the Adzuna job search API, mapping JSON responses, and synchronizing entries directly to Google Sheets for downstream regex-based parsing and aggregation.",
    problem: "Choosing between Business Analytics, Finance, and Digital/Tech pathways is difficult because program descriptions can sound attractive but may not reflect entry-level hiring realities.",
    goal: "Use real job posting data to compare entry-level opportunity volume and skill requirements across Analytics, Finance, and Digital/Tech roles in Canada.",
    process: [
      "API Polls: Configured Make.com to request entry-level job listings in Canada from the Adzuna API.",
      "Data Synchronization: Built a pipeline to write JSON records into Google Sheets.",
      "Text Parsing: Used Google Sheets regex formulas (REGEXMATCH) to parse unstructured descriptions into 7 skill domains.",
      "Statistical Tables: Aggregated findings into pivot charts dividing records by target career path.",
      "Dashboard Design: Constructed Google Sheets charts to map relative demand across role categories."
    ],
    findings: [
      "Pilot dataset: analyzed 100 Canadian job postings.",
      "Analytics had the highest job volume in the pilot sample.",
      "Finance showed strong skill fit when combined with technical skills.",
      "Digital/Tech had fewer direct entry-level postings, suggesting analyst, implementation, or operations roles may be better entry points."
    ],
    limitations: "This was a pilot dataset from one job source, so the results are directional rather than conclusive.",
    improvements: [
      "Scale the Make.com scenario to capture 1,000+ job listings weekly.",
      "Upgrade text classification by migrating from regex searches to Python-based NLP libraries.",
      "Integrate multiple Canadian job board sources for richer coverage."
    ],
    resumeBullets: [
      "Built an automated job-market analysis tool using the Adzuna API and Make.com to collect 100 Canadian job postings across Analytics, Finance, and Digital/Tech roles.",
      "Designed a Google Sheets dashboard to compare entry-level job demand, average fit score, and skill requirements across career paths."
    ]
  },
  {
    title: "Zeem AI Home Services Lead Ops System",
    slug: "zeem-ai-home-services-lead-ops-system",
    shortDescription: "A simulated lead operations workflow for HVAC and plumbing businesses that captures missed inquiries, qualifies leads, and supports booking automation.",
    tools: ["Make.com", "CRM Logic", "Google Sheets", "AI Qualification Design", "Dashboarding"],
    tags: ["AI Automation", "CRM", "Lead Generation", "Home Services", "Revenue Operations"],
    stats: ["5 sample leads", "4 pipeline stages", "3 follow-up actions", "1 booking workflow concept"],
    image: "/projects/zeem-lead-ops/dashboard_zeem_lead_ops.png",
    status: "Prototype built",
    date: "Winter 2026",
    workflowImage: "/projects/zeem-lead-ops/workflow_zeem_lead_ops.png",
    workflowTitle: "Lead Qualification & Notification Routing Flow",
    workflowDescription: "Make.com scenario triggering from form submissions, routing lead urgency dynamically, updating Google Sheets CRM pipelines, and logging automated follow-up communication events.",
    problem: "Home service businesses lose revenue when calls are missed, website inquiries are not followed up quickly, or leads are not routed into a clear booking workflow.",
    goal: "Design a lead operations system that captures leads, qualifies urgency, updates CRM stages, triggers follow-ups, and supports appointment booking for HVAC and plumbing businesses.",
    process: [
      "CRM Modeling: Created a lead database structure in Google Sheets acting as a CRM pipeline.",
      "Inquiry Scenarios: Configured Make.com to parse forms and route details based on Urgency parameters.",
      "AI Qualification: Mapped logic rules to qualify leads based on service urgency (emergency vs routine).",
      "Notifications: Configured email/SMS notification guidelines to automatically remind unbooked leads.",
      "Pipeline Views: Built a pipeline dashboard to track lead sources, priority queues, and follow-up schedules."
    ],
    findings: [
      "Simulated 5 sample home services leads through the automated queue.",
      "Structured 4 active pipeline stages from intake to appointment booked.",
      "Triggered 3 automated follow-up logs based on customer delay thresholds.",
      "Mapped a working concept from initial inquiry to final booking schedules."
    ],
    limitations: "The prototype is simulated and not connected to live Twilio, GoHighLevel, or appointment-booking APIs.",
    improvements: [
      "Connect Make.com workflows to live Twilio SMS and email automation blocks.",
      "Integrate GoHighLevel CRM endpoints for automatic data sync.",
      "Add calendar triggers via Calendly or Cal.com APIs to automate scheduling."
    ],
    resumeBullets: [
      "Designed a simulated lead operations workflow for HVAC and plumbing businesses to capture missed inquiries, qualify leads, and support booking automation.",
      "Built a sample CRM pipeline and dashboard to track lead source, pipeline stage, priority, follow-up count, and next action."
    ]
  }
];
