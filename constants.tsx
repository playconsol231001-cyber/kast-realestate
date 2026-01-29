
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
    name: "Rajesh Mehta",
    role: "Real Estate Broker, Mumbai",
    content: "KAST has completely improved the way I manage my property listings and clients. The app is smooth and professional and saves me a lot of time every day. Highly recommended for real estate professionals.",
    avatar: "https://lh3.googleusercontent.com/d/1pPD8CpePRIYciAd1RschMhu-taOG3dbw"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Real Estate Consultant, Delhi NCR",
    content: "I love how simple and powerful the KAST platform is. It helps me connect with buyers faster and keeps everything organized in one place. A must-have app for agents and brokers.",
    avatar: "https://lh3.googleusercontent.com/d/1Z9r-73ofPgHvOD6sags_KpPYhDCcRSbz"
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Property Dealer, Bangalore",
    content: "KAST is a game-changer for the real estate industry. The interface is user-friendly, and the features are exactly what we need to grow business faster. I’m very happy with the results.",
    avatar: "https://lh3.googleusercontent.com/d/14UV31_-Ik32GH2yjR68Kn7R7Pp9BPJaL"
  }
];

export const ELIGIBILITY: EligibilityCriterion[] = [
  { id: 1, label: "PROFESSIONAL STATUS", value: "ACTIVE AGENT" },
  { id: 2, label: "RERA STATUS", value: "REQUIRED" },
  { id: 3, label: "IDENTITY", value: "VERIFIED" },
  { id: 4, label: "COMMITMENT", value: "DEDICATED" }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Growth OS Trial",
    price: "FREE",
    period: "FOR 7 DAYS",
    features: [
      "Full Kast Growth OS Access",
      "WhatsApp Business API Setup",
      "AI Response Bot (Active)",
      "Managed Ad Templates",
      "Community Access"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Business",
    price: "Custom",
    period: "/ AGENT",
    features: [
      "Everything in Free Trial",
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
    value: "INCLUDED",
    description: "The complete operating system to manage property leads."
  },
  {
    title: "Official WhatsApp Business API",
    value: "INCLUDED",
    description: "Verified business profile with green tick eligibility."
  },
  {
    title: "AI Response Bot (24/7)",
    value: "INCLUDED",
    description: "Automated site visit scheduling and lead qualification."
  },
  {
    title: "Managed Ad Templates",
    value: "INCLUDED",
    description: "Winning Facebook/Insta ad creative library for real estate."
  },
  {
    title: "Growth Community Access",
    value: "INCLUDED",
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
