
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import LeadForm from './components/LeadForm';
import Testimonials from './components/Testimonials';
import Eligibility from './components/Eligibility';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { TARGET_AUDIENCE } from './constants';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] selection:bg-indigo-500/30 text-slate-200 antialiased scroll-smooth">
      <Navbar />
      
      <main className="relative">
        <div className="absolute top-[10vh] left-[-10vw] w-[50vw] h-[50vh] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse"></div>
        <div className="absolute top-[80vh] right-[-10vw] w-[40vw] h-[60vh] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <Hero onCtaClick={scrollToForm} />
        
        <div id="stats" className="max-w-6xl mx-auto px-4 mb-32 relative pt-32 scroll-mt-20">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/[0.02] uppercase select-none pointer-events-none tracking-tighter italic">Ecosystem</div>
          <div className="glass rounded-[3rem] p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 border-white/5 shadow-3xl relative overflow-hidden group/stats">
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur opacity-50 -z-10"></div>
             
             <div className="px-6 py-8 border-r border-white/5 flex flex-col items-center text-center group hover:bg-white/5 transition-all cursor-default">
                <span className="text-4xl font-[1000] text-white italic tracking-tighter group-hover:scale-110 transition-transform">25K+</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2 italic">Active Realtors</span>
             </div>
             <div className="px-6 py-8 lg:border-r border-white/5 flex flex-col items-center text-center group hover:bg-white/5 transition-all cursor-default">
                <span className="text-4xl font-[1000] text-white italic tracking-tighter group-hover:scale-110 transition-transform">2.5M+</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2 italic">Leads Captured</span>
             </div>
             <div className="px-6 py-8 border-r border-white/5 flex flex-col items-center text-center group hover:bg-white/5 transition-all cursor-default">
                <span className="text-4xl font-[1000] text-white italic tracking-tighter group-hover:scale-110 transition-transform">500+</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2 italic">India Cities</span>
             </div>
             <div className="px-6 py-8 flex flex-col items-center text-center group hover:bg-white/5 transition-all cursor-default">
                <span className="text-4xl font-[1000] text-white italic tracking-tighter group-hover:scale-110 transition-transform">10X</span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2 italic">Response Speed</span>
             </div>
          </div>
        </div>
        
        <div id="benefits" className="pt-24 scroll-mt-20">
          <Benefits />
        </div>

        <Pricing />
        
        <div id="eligibility" className="scroll-mt-20">
          <Eligibility />
        </div>
        
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-5xl md:text-8xl font-[1000] text-white mb-10 tracking-tighter uppercase italic leading-[0.85]">
                  Evolving <br/> <span className="gradient-text">Platforms.</span>
                </h2>
                <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed max-w-lg italic">
                  Digital transformation is no longer optional for Indian Realtors. Kast provides the professional infrastructure to scale without friction.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-16">
                  {TARGET_AUDIENCE.map((audience, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl glass border-white/5 hover:border-indigo-500/20 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-sm border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">✓</div>
                      <span className="font-black text-[10px] text-white uppercase tracking-tighter italic">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] -z-10 rounded-full animate-pulse"></div>
                <LeadForm id="apply-form" />
              </div>
            </div>
          </div>
        </section>
        
        <div id="testimonials" className="pt-24 scroll-mt-20">
          <Testimonials />
        </div>
        
        <section className="py-48 relative overflow-hidden bg-[#010411]">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-20"></div>
           <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-6xl md:text-9xl font-[1000] text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">
                Join the <br/> <span className="gradient-text">Elite 1%.</span>
              </h2>
              <button 
                onClick={scrollToForm}
                className="group relative px-20 py-10 bg-white text-black rounded-[3rem] font-[1000] text-4xl hover:scale-105 transition-all shadow-[0_0_100px_rgba(99,102,241,0.6)] active:scale-95 uppercase italic"
              >
                Launch Kast
              </button>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
