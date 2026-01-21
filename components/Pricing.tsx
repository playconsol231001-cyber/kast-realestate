
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing-details" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase font-heading mb-2">Transparent Plans</h2>
          <p className="text-slate-500 font-bold">Choose the level of growth you need.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <div key={i} className={`p-10 flex flex-col rounded-3xl border-2 transition-all ${plan.popular ? 'border-indigo-600 bg-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-slate-50 opacity-80 hover:opacity-100'}`}>
              {plan.popular && (
                <div className="mb-4"><span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Recommended</span></div>
              )}
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <span className="text-emerald-500 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-tight transition-all ${plan.popular ? 'cta-button' : 'bg-slate-900 text-white'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
