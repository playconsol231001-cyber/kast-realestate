
import React from 'react';
import { Benefit, Testimonial, EligibilityCriterion } from './types';

export const BRAND_NAME = "Kast";

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Omni-Channel Lead Capture",
    description: "Instantly aggregate leads from Instagram Ads, Facebook Marketplace, and QR codes on your physical site boards into one clean view.",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Professional Brand Page",
    description: "Launch a high-converting digital storefront in 3 minutes. Showcase your active listings, sold properties, and verified client reviews.",
    icon: "🏠"
  },
  {
    id: 3,
    title: "AI Response Engine",
    description: "Kast's intelligent concierge answers basic property queries on WhatsApp 24/7, qualifying buyers before you even pick up the phone.",
    icon: "🤖"
  },
  {
    id: 4,
    title: "Real-Time ROI Analytics",
    description: "See exactly which property listings are getting 'hot' and which marketing channels are delivering high-intent buyers in real-time.",
    icon: "📊"
  },
  {
    id: 5,
    title: "Digital Brochures",
    description: "Generate stunning PDF brochures with your branding. Track 'Open Rates' and see exactly which sections your clients are reading.",
    icon: "📄"
  },
  {
    id: 6,
    title: "Smart Follow-ups",
    description: "Never let a lead go cold. Kast automatically schedules reminders and follow-up pings based on the buyer's level of interest.",
    icon: "⏰"
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "₹0",
    period: "Forever",
    features: ["1 Digital Profile", "50 Lead Captures/mo", "Basic Analytics", "WhatsApp Integration"],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "₹1,499",
    period: "per month",
    features: ["Unlimited Listings", "AI Response Bot", "Advanced ROI Tracking", "Priority Support"],
    cta: "Get Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "For Teams",
    features: ["White-label Domain", "API Access", "Multi-Agent Dashboard", "Dedicated Manager"],
    cta: "Contact Sales",
    popular: false
  }
];

export const TARGET_AUDIENCE = [
  "Independent Agents",
  "RERA Registered Brokers",
  "Luxury Property Consultants",
  "Developer Sales Teams"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Premium Broker, South Delhi",
    content: "In the high-stakes Delhi market, response time is everything. Kast's AI bot handles my 2 AM enquiries while I sleep. Absolute game changer.",
    avatar: "https://i.pravatar.cc/150?u=arjun"
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Agency Lead, Bangalore",
    content: "The digital brand page gives my team instant credibility. It looks more professional than portals that charge us lakhs per month.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Project Developer, Mumbai",
    content: "We deployed Kast for our Worli project. The QR-to-Lead conversion was 3x higher than our traditional physical site visits alone.",
    avatar: "https://i.pravatar.cc/150?u=vikram"
  }
];

export const STATS = [
  { label: "Onboarded Pros", value: "25k+" },
  { label: "Leads Captured", value: "2.5M+" },
  { label: "Active Nodes", value: "500+" },
  { label: "Success Rate", value: "98%" }
];

export const ELIGIBILITY: EligibilityCriterion[] = [
  { id: 1, label: "Business Type", value: "Real Estate Service" },
  { id: 2, label: "Market Presence", value: "Active in India" },
  { id: 3, label: "Verification", value: "RERA/Professional KYC" },
  { id: 4, label: "Digital Status", value: "Mobile Ready" }
];
