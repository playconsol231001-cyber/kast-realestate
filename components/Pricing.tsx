
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative bg-[#010411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-[1000] text-white italic uppercase tracking-tighter mb-4">Transparent <span className="gradient-text">Pricing.</span></h2>
          <p className="text-slate-500 font-medium italic">Scale your real estate brand without breaking the bank.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div key={i} className={`p-10 rounded-[3rem] glass border-white/5 flex flex-col relative overflow-hidden group hover:scale-105 transition-all ${plan.popular ? 'ring-2 ring-indigo-500/50' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-widest italic">Most Popular</div>
              )}
              <h3 className="text-2xl font-black text-white mb-2 italic uppercase tracking-tighter">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-[1000] text-white italic tracking-tighter">{plan.price}</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm font-medium italic">
                    <span className="text-indigo-500">⚡</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-tighter italic transition-all ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/20' : 'bg-white/5 text-white hover:bg-white/10'}`}>
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
