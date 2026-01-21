
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-white pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <span className="bg-red-600 text-white px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-widest animate-pulse">
            Attention: Real Estate Professionals in India 🇮🇳
          </span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 uppercase">
          STOP WASTING TIME ON <span className="text-indigo-600 underline">COLD LEADS</span>. <br/>
          START CLOSING DEALS ON <span className="bg-indigo-600 text-white px-2">WHATSAPP</span>.
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          The only <strong>AI-Powered Operating System</strong> built to help Indian agents automate follow-ups, verify buyer intent, and scale site visits on autopilot.
        </p>
        
        {/* Video Placeholder like onevideoaway */}
        <div className="relative max-w-4xl mx-auto mb-12 video-shadow rounded-2xl overflow-hidden bg-black aspect-video group cursor-pointer border-4 border-slate-900">
           <img 
             src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
             className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
             alt="Real Estate Professional"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
           </div>
           <div className="absolute bottom-6 left-6 text-left">
              <p className="text-white font-bold text-lg uppercase tracking-tight">Watch: How Kast works in 90 seconds</p>
           </div>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={onCtaClick}
            className="cta-button w-full max-w-md py-6 rounded-lg font-black text-2xl uppercase tracking-tighter hover:scale-[1.02] transition-all"
          >
            YES! I Want Early Access Now!
          </button>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=agent${i}`} alt="Agent" />
              ))}
            </div>
            <p className="text-xs font-bold uppercase">Joined by 2,400+ Agents this week</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
