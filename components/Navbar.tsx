
import React from 'react';
import { BRAND_NAME } from '../../constants';

const Navbar: React.FC = () => {
  const whatsappUrl = "https://wa.me/918920526586?text=Hi%20Kast,%20I'm%20interested%20in%20starting%20my%207-day%20free%20trial.";

  return (
    <>
      <div className="bg-yellow-400 py-2 fixed top-0 w-full z-[100] border-b border-yellow-500 overflow-hidden select-none pointer-events-none">
        <div className="banner-marquee text-black text-[10px] font-black uppercase tracking-[0.2em]">
          Limited Time: Start your 7-Day FREE Trial Today! ⚡️ No Credit Card Required — Limited Time: Start your 7-Day FREE Trial Today! ⚡️ No Credit Card Required — Limited Time: Start your 7-Day FREE Trial Today! ⚡️ No Credit Card Required
        </div>
      </div>
      <nav className="fixed top-8 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-black">K</span>
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase font-heading">{BRAND_NAME}</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#how-it-works" className="text-xs font-bold text-slate-600 hover:text-indigo-600 uppercase">The System</a>
              <a href="#pricing" className="text-xs font-bold text-slate-600 hover:text-indigo-600 uppercase">Risk-Free Trial</a>
            </div>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90 transition-all active:scale-90 transform duration-200 animate-whatsapp"
              aria-label="Contact us on WhatsApp"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="h-10 md:h-12 w-auto drop-shadow-lg" 
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;