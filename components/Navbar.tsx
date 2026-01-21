
import React from 'react';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-yellow-400 py-2 text-center text-black text-[10px] font-black uppercase tracking-[0.2em] fixed top-0 w-full z-[100] border-b border-yellow-500">
        Limited Time: Get ₹25,000 worth of bonuses for just ₹999! ⚡️
      </div>
      <nav className="fixed top-8 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-black">K</span>
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase font-heading">{BRAND_NAME}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-xs font-bold text-slate-600 hover:text-indigo-600 uppercase">The System</a>
            <a href="#who-it-is-for" className="text-xs font-bold text-slate-600 hover:text-indigo-600 uppercase">For Who?</a>
            <a href="#pricing" className="text-xs font-bold text-slate-600 hover:text-indigo-600 uppercase underline decoration-indigo-500 decoration-2">Get Started</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
