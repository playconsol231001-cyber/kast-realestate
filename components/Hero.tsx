
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-[0.2em] mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          Trusted by Top Indian Realtors
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] text-white leading-[0.85] tracking-tighter mb-8 max-w-6xl mx-auto italic uppercase">
          The Smart App for <br/> <span className="gradient-text">Indian Property Pros.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium italic">
          Grow Your Brand, Capture More Leads & Close Deals Faster — All from One Powerful App. 
          Designed for <span className="text-white">Delhi, Mumbai, Bangalore, Pune, Hyderabad & Chennai</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onCtaClick}
            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center gap-3 overflow-hidden italic uppercase tracking-tighter"
          >
            <span className="relative z-10">Start Your Free Trial</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
          
          <div className="flex flex-col items-start">
             <div className="flex -space-x-3 mb-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i+50}`} className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover" alt="realtor" />
              ))}
            </div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              No Credit Card Needed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
