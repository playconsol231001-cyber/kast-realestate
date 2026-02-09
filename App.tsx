
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { OFFER_INCLUDES } from './constants';

const App: React.FC = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [fomoNotice, setFomoNotice] = useState<{name: string, action: string} | null>(null);

  const names = ["Ankit from Gurgaon", "Fareed from West Delhi", "Rina from Saket", "Amit from Pune", "Sneha from Mumbai"];
  const actions = ["just started their free trial", "activated their AI assistant", "joined the WhatsApp group", "onboarded their team"];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setFomoNotice({ name: randomName, action: randomAction });
      setTimeout(() => setFomoNotice(null), 4000);
    }, 12000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Official Colorful Icons
  const callIcon = "https://img.icons8.com/color/144/phone.png";
  const whatsappBusinessIcon = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
  const portalIcon = "https://img.icons8.com/color/144/web.png";
  
  // Premium Red Cross Icon
  const redCrossIcon = "https://img.icons8.com/ios-filled/100/dc2626/x.png";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden font-sans">
      <Navbar />
      
      <main>
        <Hero onCtaClick={scrollToForm} />

        {/* FOMO NOTICE - Visible only on Desktop (md and up) */}
        {fomoNotice && (
          <div className="fixed bottom-6 left-6 z-[100] animate-bounce hidden md:block">
            <div className="bg-white border-2 border-slate-900 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs transition-all">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shrink-0">⚡</div>
              <div>
                <p className="text-[10px] font-black uppercase text-indigo-600 tracking-widest">Agent Update</p>
                <p className="text-xs font-bold text-slate-800"><span className="text-indigo-600">{fomoNotice.name}</span> {fomoNotice.action}</p>
              </div>
            </div>
          </div>
        )}

        {/* STICKY CTA MOBILE */}
        <div className={`fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 z-[90] transition-transform duration-300 md:hidden ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
           <button onClick={scrollToForm} className="cta-button w-full py-4 rounded-lg font-black text-lg uppercase shadow-xl">
             Start 7-Day Free Trial
           </button>
        </div>

        {/* THE REAL PROBLEM SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-12 font-heading text-center leading-tight text-slate-900">
              The real problem isn't leads. <br/>
              <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">It's identifying the true closers.</span>
            </h2>
            
            <div className="mb-16 text-center">
              <p className="font-black text-slate-400 uppercase tracking-widest text-xs mb-10">Your day already looks like this:</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-10 bg-rose-50/50 rounded-[2.5rem] border border-rose-100/50 text-center group hover:bg-rose-50 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-rose-200/50 flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform overflow-hidden p-4">
                    <img src={callIcon} alt="Call" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="font-bold text-slate-800 text-base leading-tight">Making calls nonstop</p>
                </div>

                <div className="p-10 bg-rose-50/50 rounded-[2.5rem] border border-rose-100/50 text-center group hover:bg-rose-50 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-rose-200/50 flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform overflow-hidden p-4">
                    <img src={whatsappBusinessIcon} alt="WhatsApp" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="font-bold text-slate-800 text-base leading-tight">WhatsApp messages piling up</p>
                </div>

                <div className="p-10 bg-rose-50/50 rounded-[2.5rem] border border-rose-100/50 text-center group hover:bg-rose-50 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-rose-200/50 flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform overflow-hidden p-4">
                    <img src={portalIcon} alt="Portals" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="font-bold text-slate-800 text-base leading-tight">Enquiries from portals and ads</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-xl font-medium text-slate-600 border-l-8 border-indigo-600 pl-10 py-10 bg-indigo-50/50 rounded-r-3xl">
              <p>Initially, every digital inquiry looks identical. Some are <span className="text-indigo-600 font-bold">qualified, transaction-ready investors</span>, while others are merely <span className="text-slate-900 font-bold">low-intent information seekers</span>.</p>
              <p>In high-stakes real estate, <span className="text-slate-900 font-bold underline decoration-indigo-300">responsiveness is the ultimate competitive advantage.</span></p>
              <p className="text-indigo-600 font-black text-2xl uppercase leading-tight pt-4">Kast ensures your personal brand stays responsive 24/7, capturing the gold while filtering the noise.</p>
            </div>
          </div>
        </section>

        {/* ULTRA PREMIUM DEALS SECTION */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-5xl mx-auto px-4">
            <div className="p-12 md:p-24 bg-[#05070a] text-white rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/5 ring-1 ring-white/10">
              {/* Subtle Premium Background Elements */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                  System Audit: Critical Efficiency Gaps
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-6 leading-[1.05] font-heading tracking-tight text-white">
                  But personal WhatsApp <br/>isn't built for business.
                </h3>
                <p className="text-slate-400 font-bold mb-16 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Personal systems aren't designed for high-volume professional follow-ups.
                </p>
                
                {/* Refined Problem List - Red Text Left, Red Image Icon Right */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 max-w-4xl mx-auto">
                  {[
                    "Chats get buried",
                    "Depends on memory",
                    "Context gets lost",
                    "Work-life mess"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center justify-between py-6 border-b border-white/10 group transition-all duration-500">
                      <span className="text-lg md:text-xl font-[1000] uppercase tracking-tighter text-red-600 group-hover:text-red-500 transition-colors">
                        {text}
                      </span>
                      <div className="flex items-center">
                        <img 
                          src={redCrossIcon} 
                          alt="No" 
                          className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-pulse object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-20 pt-10 border-t border-white/5 opacity-50">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Kast Intelligence Unit — Internal Assessment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI SECTION */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-heading">
                  When you're busy, <br/><span className="text-indigo-600 underline">AI handles</span> the conversation
                </h2>
                <div className="space-y-6 text-lg text-slate-600 font-medium">
                  <p>When a buyer messages and you're on a site visit, Kast's AI assistant steps in immediately.</p>
                  <p>It replies on WhatsApp, answers questions, and shares listings just like you would.</p>
                  <p className="text-indigo-600 font-black text-2xl uppercase">Picking up where you left off.</p>
                </div>
              </div>
              <div className="p-10 bg-white border-2 border-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="scanline"></div>
                <div className="space-y-10 relative">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">01</div>
                    <p className="font-bold text-slate-800 leading-snug text-lg">By the time you're back, you already know who the buyer is.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">02</div>
                    <p className="font-bold text-slate-800 leading-snug text-lg">You know what they want and what's been discussed.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">03</div>
                    <p className="font-bold text-slate-800 leading-snug text-lg">You pick up the conversation at the right point.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* HOW KAST WORKS */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-16 font-heading">How Kast Works</h2>
            <div className="grid md:grid-cols-3 gap-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 hidden md:block"></div>
              <div className="bg-white px-4">
                <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 border-4 border-white shadow-2xl">1</div>
                <p className="font-bold text-lg text-slate-800 leading-tight">Buyer enquires on WhatsApp or form</p>
              </div>
              <div className="bg-white px-4">
                <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 border-4 border-white shadow-2xl">2</div>
                <p className="font-bold text-lg text-slate-800 leading-tight">Kast replies instantly and keeps it moving</p>
              </div>
              <div className="bg-white px-4">
                <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 border-4 border-white shadow-2xl">3</div>
                <p className="font-bold text-lg text-slate-800 leading-tight">You step in with context and close the deals</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 bg-slate-900 text-white relative">
           <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-12 font-heading tracking-tight text-white text-center">Experience the full OS</h2>
              <div className="bg-white text-slate-900 border-4 border-indigo-600 rounded-[4rem] p-10 md:p-16 shadow-2xl">
                 <div className="space-y-8 mb-16">
                    {OFFER_INCLUDES.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-5 border-b border-slate-100 last:border-0">
                         <div className="flex items-center gap-6 text-left">
                            <span className="text-indigo-600 text-2xl font-black">✔️</span>
                            <div>
                               <p className="font-black text-xl uppercase leading-tight tracking-tighter">{item.title}</p>
                               <p className="text-slate-500 text-sm font-medium">{item.description}</p>
                            </div>
                         </div>
                         <div className="text-indigo-600 font-black text-sm uppercase tracking-widest">{item.value}</div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="bg-slate-50 p-12 rounded-[2.5rem] border-4 border-dashed border-indigo-200">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                      <p className="text-7xl md:text-9xl font-black text-slate-900 font-heading tracking-tighter">FREE</p>
                      <div className="bg-emerald-500 text-white text-[16px] md:text-[18px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest">
                        / 7 Days Trial
                      </div>
                    </div>
                    <button onClick={scrollToForm} className="cta-button w-full max-w-md py-8 rounded-2xl font-black text-2xl uppercase tracking-tighter">
                      Claim my free trial
                    </button>
                    <p className="mt-8 text-red-600 font-black uppercase text-xs tracking-widest">No credit card required • Verified Agents Only</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
              <div className="text-left">
                 <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1] font-heading tracking-tight">
                   Limited availability <br/><span className="text-indigo-600 underline decoration-indigo-200">for verified agents.</span>
                 </h2>
                 <p className="text-xl text-slate-500 mb-12 font-medium">Apply for your 7-day free trial. Our team will verify your RERA status and activate your Growth OS within 12 hours.</p>
                 <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-8 border-indigo-600 font-black uppercase text-slate-900">Risk-free trial (Full Features)</div>
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-8 border-indigo-600 font-black uppercase text-slate-900">No automatic charges after 7 days</div>
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-8 border-indigo-600 font-black uppercase text-slate-900">Expert support during onboarding</div>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-8 bg-indigo-50 rounded-[3rem] -z-10 rotate-3"></div>
                 <LeadForm id="apply-form" />
              </div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
