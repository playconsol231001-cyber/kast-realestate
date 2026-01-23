
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero onCtaClick={scrollToForm} />

        {/* FOMO NOTICE */}
        {fomoNotice && (
          <div className="fixed bottom-6 left-6 z-[100] animate-bounce">
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
             Start 7-Day Free Trial 🚀
           </button>
        </div>

        {/* THE REAL PROBLEM SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-12 font-heading uppercase italic text-center leading-none">
              The real problem isn’t leads.<br/>
              <span className="text-indigo-600 underline">It’s identifying the true closers.</span>
            </h2>
            
            <div className="mb-16">
              <p className="font-black text-slate-400 uppercase tracking-widest text-sm mb-10 text-center">Your day already looks like this:</p>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Modernized Card 1 */}
                <div className="p-10 bg-rose-50/50 rounded-[2.5rem] border border-rose-100/50 text-center group hover:bg-rose-50 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-rose-200/50 flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform">
                    <svg className="w-10 h-10 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7l2 2m0 0l2-2m-2 2v-6" className="text-rose-500 opacity-40" />
                    </svg>
                  </div>
                  <p className="font-black text-slate-800 uppercase text-sm tracking-tight leading-tight">Making calls nonstop</p>
                </div>

                {/* Modernized Card 2 */}
                <div className="p-10 bg-rose-50/50 rounded-[2.5rem] border border-rose-100/50 text-center group hover:bg-rose-50 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-rose-200/50 flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform">
                    <svg className="w-10 h-10 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v4m0 4v.01" className="text-emerald-500 opacity-40" />
                    </svg>
                  </div>
                  <p className="font-black text-slate-800 uppercase text-sm tracking-tight leading-tight">WhatsApp messages piling up</p>
                </div>

                {/* Modernized Card 3 */}
                <div className="p-10 bg-rose-50/50 rounded-[2.5rem] border border-rose-100/50 text-center group hover:bg-rose-50 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-lg shadow-rose-200/50 flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform">
                    <svg className="w-10 h-10 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v4m0 0l-2-2m2 2l2-2" className="text-indigo-600" />
                    </svg>
                  </div>
                  <p className="font-black text-slate-800 uppercase text-sm tracking-tight leading-tight">Enquiries from portals, ads, referrals, listings</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-xl font-medium text-slate-600 border-l-8 border-indigo-600 pl-10 py-10 bg-indigo-50/50 rounded-r-3xl">
              <p>Initially, every digital inquiry looks identical. Some are <span className="text-indigo-600 font-black italic">qualified, transaction-ready investors</span>, while others are merely <span className="text-slate-900 font-black italic">low-intent information seekers</span>.</p>
              
              <p>In high-stakes real estate, <span className="text-slate-900 font-black italic underline decoration-indigo-300">Responsiveness is the ultimate competitive advantage.</span> Modern buyers demand instantaneous, professional engagement. If your response isn't immediate, your prospect has already moved to your competitor's listing.</p>
              
              <p className="text-indigo-600 font-black text-2xl uppercase italic leading-tight pt-4">Kast ensures your personal brand stays responsive 24/7, capturing the gold while filtering the noise.</p>
            </div>
          </div>
        </section>

        {/* MOMENT THE LEAD COMES IN */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic leading-none font-heading">
              Kast fixes this at the moment <br/><span className="text-indigo-400 underline">the lead comes in.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-medium max-w-3xl">
              When a buyer shows interest, fills a form, views a listing, or starts a chat (all done in a Kast powered smart portal), they are captured instantly.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem]">
                <p className="font-black text-indigo-400 text-xs mb-6 uppercase tracking-widest">Detail 01</p>
                <p className="font-bold text-xl leading-tight">Which property the buyer is asking about.</p>
              </div>
              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem]">
                <p className="font-black text-indigo-400 text-xs mb-6 uppercase tracking-widest">Detail 02</p>
                <p className="font-bold text-xl leading-tight">What they did before enquiring.</p>
              </div>
              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem]">
                <p className="font-black text-indigo-400 text-xs mb-6 uppercase tracking-widest">Detail 03</p>
                <p className="font-bold text-xl leading-tight">Where the enquiry came from.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DEALS MOVE ON WHATSAPP */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-black mb-8 uppercase italic font-heading text-center">Deals move on WhatsApp</h2>
            <div className="p-12 bg-red-600 text-white rounded-[4rem] text-center mb-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.8L2 22l5.2-.82c1.43.78 3.06 1.23 4.8 1.23 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 italic">But personal WhatsApp isn’t built for this job</h3>
              <p className="text-red-100 font-bold mb-10 text-lg">Not because agents don’t care. Because the system isn’t designed for professional follow-ups.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-xs font-black uppercase tracking-tighter">Chats get buried</div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-xs font-black uppercase tracking-tighter">Depends on memory</div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-xs font-black uppercase tracking-tighter">Context gets lost</div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-xs font-black uppercase tracking-tighter">Work-life mess</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI SECTION */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase italic leading-[1.1] font-heading">
                  When you’re busy, <br/><span className="text-indigo-600 underline">AI handles</span> the conversation
                </h2>
                <div className="space-y-6 text-lg text-slate-600 font-medium italic">
                  <p>When a buyer messages and you’re on a call, in a site visit, or just not free, Kast’s AI assistant steps in immediately.</p>
                  <p>It replies on WhatsApp, answers basic questions, and shares relevant listings, just like you would.</p>
                  <p className="text-indigo-600 font-black text-2xl uppercase not-italic">“Okay… this actually changes things.”</p>
                </div>
              </div>
              <div className="p-10 bg-white border-2 border-slate-900 rounded-[3rem] shadow-2xl">
                <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-8">AI Continuity Workflow:</p>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">01</div>
                    <p className="font-bold text-slate-800">By the time you come back, you already know who the buyer is.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">02</div>
                    <p className="font-bold text-slate-800">You know what they’re looking for and what’s been discussed.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">03</div>
                    <p className="font-bold text-slate-800">You’re picking up the conversation at the right point.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* HOW KAST WORKS STEPS */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-16 uppercase italic font-heading">How Kast Works</h2>
            <div className="grid md:grid-cols-3 gap-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 hidden md:block"></div>
              <div className="bg-white px-4">
                <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 border-4 border-white shadow-2xl">1</div>
                <p className="font-black text-lg text-slate-800 leading-tight uppercase">Buyer enquires on WhatsApp, form, or listing</p>
              </div>
              <div className="bg-white px-4">
                <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 border-4 border-white shadow-2xl">2</div>
                <p className="font-black text-lg text-slate-800 leading-tight uppercase">Kast replies instantly and keeps it moving</p>
              </div>
              <div className="bg-white px-4">
                <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 border-4 border-white shadow-2xl">3</div>
                <p className="font-black text-lg text-slate-800 leading-tight uppercase">You step in with context and close the deals</p>
              </div>
            </div>
            <p className="mt-20 text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] italic">No new workflow. No extra tools.</p>
          </div>
        </section>

        {/* LEAD GENERATION EXTRA */}
        <section className="py-24 bg-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic font-heading leading-tight">Also available: <br/>Lead generation for Kast users</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto font-medium italic">For agents who want more inbound enquiries, Kast also offers managed lead generation.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
              <div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">
                <p className="font-black text-indigo-300 mb-4 uppercase text-xs tracking-widest">Step 01</p>
                <p className="font-bold text-lg">We run ads on your behalf</p>
              </div>
              <div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">
                <p className="font-black text-indigo-300 mb-4 uppercase text-xs tracking-widest">Step 02</p>
                <p className="font-bold text-lg">Enquiries come directly into Kast</p>
              </div>
              <div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">
                <p className="font-black text-indigo-300 mb-4 uppercase text-xs tracking-widest">Step 03</p>
                <p className="font-bold text-lg">Leads are handled the same way — on WhatsApp</p>
              </div>
            </div>
            <p className="text-indigo-200 font-black uppercase tracking-widest text-[10px] italic">Available only for active Kast users.</p>
          </div>
        </section>

        {/* BUSINESS GRADE VS MESS */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8 uppercase italic leading-tight font-heading">One system instead of <span className="text-red-600">five tools</span></h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Most agents juggle portals for leads, personal WhatsApp for chats, and notes for follow-ups. <span className="text-slate-900 font-black italic">"It works — but it’s messy."</span>
                </p>
                <div className="p-8 bg-emerald-50 border-2 border-emerald-500 rounded-[2.5rem]">
                   <p className="font-black text-emerald-600 uppercase text-xs tracking-widest mb-4">The Kast OS:</p>
                   <p className="font-bold text-slate-800 text-xl leading-tight italic">
                    Kast brings everything together into one system built around WhatsApp. Less juggling. More control.
                   </p>
                </div>
              </div>
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
                <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-8">Kast Business-Grade WhatsApp</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">✓</span>
                    <span className="font-bold text-slate-700">Dedicated business number</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">✓</span>
                    <span className="font-bold text-slate-700">All enquiries in one workspace</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">✓</span>
                    <span className="font-bold text-slate-700">Full buyer context before replying</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">✓</span>
                    <span className="font-bold text-slate-700">Personal chats stay personal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING/TRIAL SECTION */}
        <section id="pricing" className="py-24 bg-slate-900 text-white relative">
           <div className="max-w-4xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic font-heading tracking-tighter">Experience the Full OS</h2>
                 <p className="text-indigo-400 font-black uppercase tracking-[0.3em] text-xs">Start your 7-Day Free Trial Today</p>
              </div>
              
              <div className="bg-white text-slate-900 border-4 border-indigo-600 rounded-[4rem] p-10 md:p-16 shadow-[0_0_100px_rgba(79,70,229,0.3)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 bg-indigo-600 text-white rounded-full font-black text-xl flex items-center justify-center rotate-12 z-20 uppercase tracking-tighter">ZERO COST</div>
                 
                 <div className="space-y-8 mb-16">
                    {OFFER_INCLUDES.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-5 border-b border-slate-100 last:border-0">
                         <div className="flex items-center gap-6 text-left">
                            <span className="text-indigo-600 text-2xl font-black">✔️</span>
                            <div>
                               <p className="font-black text-xl uppercase leading-tight tracking-tighter">{item.title}</p>
                               <p className="text-slate-500 text-sm font-medium italic">{item.description}</p>
                            </div>
                         </div>
                         <div className="text-indigo-600 font-black text-sm uppercase italic tracking-widest">{item.value}</div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="bg-slate-50 p-12 rounded-[2.5rem] border-4 border-dashed border-indigo-200 text-center relative">
                    <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4">LIMITED TIME TRIAL OFFER:</p>
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <p className="text-6xl md:text-9xl font-black text-slate-900 font-heading tracking-tighter italic animate-pulse-subtle">FREE</p>
                      <div className="flex flex-col items-start text-left">
                        <div className="bg-emerald-500 text-white text-[12px] md:text-[14px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest animate-float-badge shadow-xl shadow-emerald-500/20">
                          / 7 Days Trial
                        </div>
                        <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest mt-2 ml-1">UNLIMITED ACCESS</span>
                      </div>
                    </div>
                    <button onClick={scrollToForm} className="cta-button w-full max-w-md py-7 rounded-2xl font-black text-2xl uppercase tracking-tighter shadow-[0_10px_0_#c4ab00]">
                      CLAIM MY FREE TRIAL 🚀
                    </button>
                    <p className="mt-8 text-[11px] text-slate-400 font-black uppercase tracking-[0.2em]">No credit card required • Verified Agents Only • Instant Setup</p>
                 </div>
              </div>
           </div>
        </section>

        {/* APPLICATION FORM SECTION */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
              <div className="text-left">
                 <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1] font-heading uppercase italic tracking-tighter">
                   Kast is currently onboarding <br/><span className="text-indigo-600 underline">limited agents.</span>
                 </h2>
                 <p className="text-xl text-slate-500 mb-12 font-medium italic">Apply for your 7-day free trial. Our team will verify your RERA status and activate your Growth OS within 12 hours.</p>
                 <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-8 border-indigo-600">
                      <p className="font-black text-slate-900 uppercase">Risk-free trial (Full Features)</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-8 border-indigo-600">
                      <p className="font-black text-slate-900 uppercase">No automatic charges after 7 days</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-8 border-indigo-600">
                      <p className="font-black text-slate-900 uppercase">Expert support during onboarding</p>
                    </div>
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
