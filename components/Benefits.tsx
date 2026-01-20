
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase italic">Feature Ecosystem</h2>
            <p className="text-slate-500 font-medium italic">Everything you need to dominate your local property market, built into one mobile interface.</p>
          </div>
          <div className="hidden md:block">
            <div className="text-6xl font-black text-indigo-500/10 select-none tracking-tighter uppercase italic">Architecture</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group overflow-hidden glass p-10 rounded-[2.5rem] border-white/5 hover:border-indigo-500/30 transition-all flex flex-col justify-between min-h-[480px]">
            <div className="max-w-xl">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-3xl font-black text-white mb-4 italic uppercase">Branded Digital Page Builder</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">
                Traditional property portals charge you to compete with others. Kast gives you your <span className="text-white font-bold">own territory</span>. Create a beautiful, SEO-optimized profile that hosts your listings, credentials, and direct contact buttons.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                 {["Instant Deployment", "SEO Optimized", "Custom Domain Support", "Mobile Responsive"].map((tag, i) => (
                   <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 glass p-8 rounded-[2.5rem] border-white/5 flex flex-col items-start justify-center text-left relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 bg-indigo-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
             <div className="text-5xl mb-4 italic">🤖</div>
             <h3 className="text-2xl font-black text-white mb-4 italic uppercase">AI Lead Nurturing</h3>
             <p className="text-slate-500 text-sm font-medium mb-8">
               Our smart bot handles initial inquiries across WhatsApp & Web, qualifying prospects 24/7.
             </p>
             <div className="w-full space-y-3">
                <div className="flex gap-3 items-center p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 max-w-[90%]">
                   <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shrink-0"></div>
                   <div className="text-[10px] text-white font-medium italic">"Is this flat available for visit today?"</div>
                </div>
                <div className="flex gap-3 items-center p-3 rounded-xl bg-white/5 border border-white/10 max-w-[90%] self-end ml-auto">
                   <div className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Kast:</div>
                   <div className="text-[10px] text-white font-medium italic">"Sending the site location and virtual tour link!"</div>
                </div>
             </div>
          </div>

          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="md:col-span-4 p-8 glass rounded-[2.5rem] border-white/5 hover:bg-white/5 transition-all group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all border border-white/5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight italic">{benefit.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{benefit.description}</p>
              <div className="mt-auto pt-4 border-t border-white/5 text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                Module Active_
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
