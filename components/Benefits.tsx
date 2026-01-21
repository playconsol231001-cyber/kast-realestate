
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase font-heading mb-4">Why Agents are Switching to Kast</h2>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto">Traditional methods are slow. Kast is built for the speed of WhatsApp.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-500 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">{benefit.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
