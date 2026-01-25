
import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-12 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-black text-xl">K</span>
            </div>
            <span className="font-black text-2xl tracking-tighter text-white uppercase font-heading">{BRAND_NAME}</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
             <a href="#how-it-works" className="hover:text-white">THE SYSTEM</a>
             <a href="#pricing" className="hover:text-white">PRICING</a>
             <a href="#who-it-is-for" className="hover:text-white">FOR WHO?</a>
             <a href="#" className="hover:text-white">TERMS</a>
          </div>
          
          <p className="max-w-xl text-slate-500 text-sm font-medium">
            Kast is on a mission to empower 1,00,000+ real estate agents across India with official AI technology and business-grade automation.
          </p>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-600 uppercase tracking-widest">
           <div>© {new Date().getFullYear()} {BRAND_NAME} TECHNOLOGIES PVT LTD</div>
           <div className="flex gap-6">
              <span>MADE WITH ❤️ FOR INDIAN AGENTS</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
