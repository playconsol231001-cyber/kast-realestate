
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-white pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="bg-indigo-600 text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-[0.2em]">
            Kast for Real Estate Agents
          </span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-7xl font-[1000] text-slate-900 leading-[1.1] mb-6 uppercase italic tracking-tighter">
          Capture <span className="text-indigo-600 underline">serious property leads</span> and turn them into deals on WhatsApp automatically.
        </h1>

        <p className="text-lg md:text-2xl text-indigo-600 font-black max-w-4xl mx-auto mb-12 uppercase tracking-tight italic leading-tight">
          India's #1 Real Estate Growth OS — Trusted by 2,400+ Verified Agents to Automate Listings, Leads, and Sales on WhatsApp.
        </p>
        
        <div className="relative max-w-4xl mx-auto mb-12 video-shadow rounded-[2rem] overflow-hidden bg-black aspect-video group cursor-pointer border-4 border-slate-900 shadow-2xl">
           <img 
             src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
             className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
             alt="Real Estate Success"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
           </div>
           <div className="absolute bottom-6 left-6 text-left">
              <p className="text-white font-black text-sm uppercase tracking-widest">Wait — Watch how Kast works</p>
           </div>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={onCtaClick}
            className="cta-button w-full max-w-md py-7 rounded-2xl font-black text-2xl uppercase tracking-tighter hover:scale-[1.02] transition-all shadow-[0_8px_0_#c4ab00]"
          >
            🚀 START YOUR 7-DAY FREE TRIAL
          </button>
          <div className="flex gap-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">
            <span>No credit card required</span>
            <span className="text-slate-300">•</span>
            <span>Instant Activation</span>
            <span className="text-slate-300">•</span>
            <span>Verified Agents Only</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
