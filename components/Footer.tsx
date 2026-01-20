
import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-[#010411] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-indigo-600/20">
                <span className="text-white font-black text-lg italic">K</span>
              </div>
              <span className="font-black text-3xl tracking-tighter text-white italic uppercase">{BRAND_NAME}</span>
            </div>
            <p className="text-slate-500 text-sm italic leading-relaxed">
              India's first professional growth stack built exclusively for the next generation of real estate champions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 italic">Platform</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest italic">
              <li><a href="#benefits" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#eligibility" className="hover:text-indigo-400 transition-colors">Verification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 italic">Support</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest italic">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Partner Portal</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 italic">Social</h4>
            <div className="flex gap-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/40 transition-all cursor-pointer">
                    <div className="w-4 h-4 bg-slate-700 rounded-sm"></div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] italic">
            © {new Date().getFullYear()} {BRAND_NAME} TECHNOLOGIES PVT LTD.
          </div>
          <div className="flex gap-8 text-[9px] font-black text-slate-700 uppercase tracking-widest italic">
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Cookie Node</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
