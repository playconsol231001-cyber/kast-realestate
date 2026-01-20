
import React from 'react';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 pointer-events-none">
      <div className="max-w-5xl mx-auto h-16 glass rounded-2xl flex items-center justify-between px-6 pointer-events-auto border-white/5 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center rotate-6 shadow-lg shadow-indigo-600/20">
            <span className="text-white font-black text-lg">K</span>
          </div>
          <span className="font-extrabold text-2xl tracking-tighter text-white uppercase italic">{BRAND_NAME}</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-[0.2em] transition-colors cursor-pointer">Features</a>
          <a href="#stats" className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-[0.2em] transition-colors cursor-pointer">Impact</a>
          <a href="#pricing" className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-[0.2em] transition-colors cursor-pointer">Pricing</a>
          <a href="#testimonials" className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-[0.2em] transition-colors cursor-pointer">Reviews</a>
        </div>

        <div className="flex items-center">
          <a href="#apply-form" className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-95 uppercase italic tracking-tighter">
            Get App Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
