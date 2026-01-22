
import { Benefit, Testimonial, EligibilityCriterion, PricingPlan } from './types';

export const BRAND_NAME = "Kast";

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Instant Context",
    description: "Know exactly which property they are asking about and where they came from before you reply.",
    icon: "🎯"
  },
  {
    id: 2,
    title: "24/7 AI Backup",
    description: "When you're in a site visit, AI replies instantly so buyers don't move on to competitors.",
    icon: "🤖"
  },
  {
    id: 3,
    title: "Business Grade WhatsApp",
    description: "Separate work from personal. Use official API for verified professional credibility.",
    icon: "✅"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ankit S.",
    role: "Gurgaon Specialist",
    content: "Earlier I had to remember which buyer asked about which property. Now Kast shows me everything before I reply.",
    avatar: "https://i.pravatar.cc/150?u=ankit"
  },
  {
    id: 2,
    name: "Fareed",
    role: "West Delhi Broker",
    content: "I don’t miss enquiries anymore when I’m in site visits. That alone makes this useful.",
    avatar: "https://i.pravatar.cc/150?u=fareed"
  },
  {
    id: 3,
    name: "Rina",
    role: "Saket Agent",
    content: "I shared a resale listing on WhatsApp and got site visits without chasing.",
    avatar: "https://i.pravatar.cc/150?u=rina"
  }
];

// Added ELIGIBILITY constant to fix error in components/Eligibility.tsx
export const ELIGIBILITY: EligibilityCriterion[] = [
  { id: 1, label: "PROFESSIONAL STATUS", value: "ACTIVE AGENT" },
  { id: 2, label: "RERA STATUS", value: "REQUIRED" },
  { id: 3, label: "IDENTITY", value: "VERIFIED" },
  { id: 4, label: "COMMITMENT", value: "DEDICATED" }
];

// Added PRICING_PLANS constant to fix error in components/Pricing.tsx
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Early Access",
    price: "₹999",
    period: "One-Time",
    features: [
      "Kast Growth OS",
      "WhatsApp Business API",
      "AI Response Bot",
      "Managed Ad Templates",
      "Community Access"
    ],
    cta: "Join Now",
    popular: true
  },
  {
    name: "Standard",
    price: "₹4,999",
    period: "/ MONTH",
    features: [
      "Everything in Early Access",
      "Priority Verification",
      "Multi-Agent Support",
      "Custom AI Training",
      "Advanced Analytics"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const OFFER_INCLUDES = [
  {
    title: "Kast Growth OS",
    value: "₹10,000",
    description: "The complete operating system to manage property leads."
  },
  {
    title: "Official WhatsApp Business API",
    value: "₹5,000",
    description: "Verified business profile with green tick eligibility."
  },
  {
    title: "AI Response Bot (24/7)",
    value: "₹7,500",
    description: "Automated site visit scheduling and lead qualification."
  },
  {
    title: "Managed Ad Templates",
    value: "₹3,500",
    description: "Winning Facebook/Insta ad creative library for real estate."
  },
  {
    title: "Growth Community Access",
    value: "₹2,500",
    description: "Weekly calls with top 1% agents in India."
  }
];

export const WHO_IS_IT_FOR = [
  {
    title: "Solo Agents",
    desc: "Tired of manual follow-ups and losing leads to competitors.",
    icon: "👤"
  },
  {
    title: "Brokerage Owners",
    desc: "Who want to track their team's performance and conversion.",
    icon: "🏢"
  },
  {
    title: "Channel Partners",
    desc: "Scaling luxury projects and needing verified high-intent leads.",
    icon: "🤝"
  }
];

export const STATS = [
  { label: "Verified Agents", value: "2.4K+" },
  { label: "Avg. ROI Increase", value: "40%" },
  { label: "Leads Processed", value: "1M+" },
  { label: "Site Visits Booked", value: "85K" }
];
