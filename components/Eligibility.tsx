
import React from 'react';
import { ELIGIBILITY } from '../constants';

const Eligibility: React.FC = () => {
  return (
    <section id="eligibility" className="py-32 relative bg-[#010411]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-[1000] text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              Simplified <br/> <span className="text-indigo-400">Onboarding.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
              Kast is built for professionals who mean business. We verify every profile to maintain high marketplace trust and quality leads.
            </p>
            <div className="space-y-4">
              {ELIGIBILITY.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-5 border-b border-white/5 group hover:bg-white/5 transition-colors px-4 rounded-xl">
                  <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{item.label}</span>
                  <span className="text-white font-black uppercase tracking-tighter">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-20 -mr-20 -mt-20 bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform"></div>
               <h3 className="text-2xl font-[1000] text-white mb-8 uppercase tracking-tighter">Verified Credentials</h3>
               <ul className="space-y-6">
                  {[
                    "RERA Registration Copy",
                    "Aadhar / Business Identity",
                    "Professional References",
                    "Active Listing Proof"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-black">✓</div>
                      <span className="text-slate-300 font-bold uppercase text-xs tracking-tight">{doc}</span>
                    </li>
                  ))}
               </ul>
               <div className="mt-12 pt-8 border-t border-white/10">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Digital verification takes less than 12 hours.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
