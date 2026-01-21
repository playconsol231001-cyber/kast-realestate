
import { Benefit, Testimonial, EligibilityCriterion } from './types';

export const BRAND_NAME = "Kast";

// Fix: Added missing BENEFITS constant exported to Benefits.tsx
export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Instant Verification",
    description: "Move from lead to verified buyer in under 60 seconds with AI profiling.",
    icon: "⚡"
  },
  {
    id: 2,
    title: "24/7 AI Receptionist",
    description: "Never miss a late-night inquiry. Our AI schedules site visits while you sleep.",
    icon: "🤖"
  },
  {
    id: 3,
    title: "Official Green Tick",
    description: "Get the prestigious verified badge on your WhatsApp Business profile.",
    icon: "✅"
  }
];

// Fix: Added missing ELIGIBILITY constant exported to Eligibility.tsx
export const ELIGIBILITY: EligibilityCriterion[] = [
  { id: 1, label: "Experience", value: "Min. 1 Year" },
  { id: 2, label: "RERA Status", value: "Required / Applied" },
  { id: 3, label: "Monthly Leads", value: "50+ (Recommended)" },
  { id: 4, label: "Location", value: "Tier 1/2 Cities" }
];

// Fix: Added missing STATS constant exported to Stats.tsx
export const STATS = [
  { label: "Verified Agents", value: "2.4K+" },
  { label: "Avg. ROI Increase", value: "40%" },
  { label: "Leads Processed", value: "1M+" },
  { label: "Site Visits Booked", value: "85K" }
];

// Fix: Added missing PRICING_PLANS constant exported to Pricing.tsx
export const PRICING_PLANS = [
  {
    name: "Growth Starter",
    price: "₹999",
    period: "/month",
    features: [
      "Official WhatsApp API",
      "Kast Growth OS",
      "AI Response Bot (Basic)",
      "Managed Ad Templates",
      "Community Access"
    ],
    cta: "Start Scaling Now",
    popular: true
  },
  {
    name: "Elite Broker",
    price: "₹2,499",
    period: "/month",
    features: [
      "Everything in Starter",
      "Advanced AI Qualification",
      "Team Tracking Dashboard",
      "Priority Verification",
      "1-on-1 Strategy Call"
    ],
    cta: "Join the Elite",
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ankit Sharma",
    role: "Gurgaon Specialist",
    content: "Within 2 weeks of using Kast, my site visit conversion went up by 40%. The automated WhatsApp reply is a game changer.",
    avatar: "https://i.pravatar.cc/150?u=ankit"
  },
  {
    id: 2,
    name: "Fareed Khan",
    role: "West Delhi Broker",
    content: "I finally separated my personal WhatsApp from work. Kast gives me professional credibility that my clients love.",
    avatar: "https://i.pravatar.cc/150?u=fareed"
  }
];
