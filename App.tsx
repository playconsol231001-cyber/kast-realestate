
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { WHO_IS_IT_FOR, OFFER_INCLUDES } from './constants';

const App: React.FC = () => {
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

        {/* As Seen On / Trust Section */}
        <section className="bg-slate-50 py-12 border-y border-slate-200">
           <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
              <span className="text-xl font-black italic font-heading">RERA COMPLIANT</span>
              <span className="text-xl font-black italic font-heading">WHATSAPP API</span>
              <span className="text-xl font-black italic font-heading">FORBES RE</span>
              <span className="text-xl font-black italic font-heading">METRICS AI</span>
           </div>
        </section>

        {/* Who is this for? */}
        <section id="who-it-is-for" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
             <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase font-heading">Is This For You?</h2>
             <div className="grid md:grid-cols-3 gap-8">
                {WHO_IS_IT_FOR.map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 text-center hover:shadow-xl transition-shadow">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4 uppercase">{item.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* The Problem & Solution Section */}
        <section id="how-it-works" className="py-24 bg-navy text-white relative overflow-hidden">
           <div className="max-w-5xl mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-heading uppercase">Why Traditional Portals Are <span className="text-red-500">Failing You</span></h2>
                    <p className="text-slate-400 text-lg mb-6 font-medium">Buying expensive leads from portals just to have them not answer your calls is a nightmare of the past.</p>
                    <ul className="space-y-4">
                       {[
                         "Portals sell the same lead to 10 other agents",
                         "Buyers don't pick up unknown calls anymore",
                         "Manual follow-ups take 5-6 hours of your day",
                         "No way to track real intent vs. window shoppers"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 font-bold text-slate-200">
                            <span className="text-red-500 text-xl">✕</span> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-lg">
                    <h3 className="text-2xl font-black mb-6 uppercase text-indigo-400">The Kast Solution</h3>
                    <p className="text-slate-300 mb-8 italic">"We move the conversation to WhatsApp instantly where buyers are actually active."</p>
                    <div className="space-y-6">
                       <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">1</div>
                          <div>
                             <p className="font-black uppercase text-sm">Instant WhatsApp Intro</p>
                             <p className="text-xs text-slate-400">Model qualified intro sent within 30 seconds.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">2</div>
                          <div>
                             <p className="font-black uppercase text-sm">Buyer Profiling AI</p>
                             <p className="text-xs text-slate-400">AI finds out their budget and locality intent.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">3</div>
                          <div>
                             <p className="font-black uppercase text-sm">Site Visit Scheduling</p>
                             <p className="text-xs text-slate-400">Automatic calendar booking for your visits.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* The VALUE STACK - Core of OneVideoAway style */}
        <section id="pricing" className="py-24 bg-slate-50">
           <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase font-heading">What You're Getting Today</h2>
                 <p className="text-indigo-600 font-bold uppercase tracking-widest text-sm">The "Early Access" Growth Bundle</p>
              </div>
              
              <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 bg-indigo-600 text-white rounded-full font-black text-xl flex items-center justify-center rotate-12">BEST VALUE</div>
                 
                 <div className="space-y-6 mb-12">
                    {OFFER_INCLUDES.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0">
                         <div className="flex items-center gap-4">
                            <span className="text-indigo-600 text-xl font-black">✔️</span>
                            <div>
                               <p className="font-black text-lg uppercase leading-tight">{item.title}</p>
                               <p className="text-slate-500 text-sm italic">{item.description}</p>
                            </div>
                         </div>
                         <div className="text-indigo-600 font-black text-lg line-through opacity-50">{item.value}</div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-indigo-200 text-center">
                    <p className="text-slate-500 font-bold uppercase text-sm mb-2">Total Value: <span className="line-through">₹28,500+</span></p>
                    <p className="text-5xl md:text-7xl font-black text-slate-900 mb-6 font-heading">Only ₹999/-</p>
                    <p className="text-sm font-bold text-red-600 uppercase mb-8">*Introductory Price for the India Launch Phase</p>
                    <button 
                      onClick={scrollToForm}
                      className="cta-button w-full max-w-md py-6 rounded-lg font-black text-2xl uppercase tracking-tighter"
                    >
                      SECURE MY SPOT NOW!
                    </button>
                 </div>
              </div>
           </div>
        </section>

        <Testimonials />

        {/* Lead Form / Application */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-5xl font-black mb-8 leading-tight font-heading uppercase">Join the <span className="text-indigo-600">Next Gen</span> of Agents.</h2>
                 <p className="text-lg text-slate-600 mb-12 font-medium">Once we hit our 5,000 agent limit, early access pricing will disappear forever. Don't be the agent who missed the WhatsApp wave.</p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <span className="font-black text-slate-700 uppercase">Instant WhatsApp Onboarding</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <span className="font-black text-slate-700 uppercase">30-Day Results Guarantee</span>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 bg-indigo-50 rounded-3xl -z-10 rotate-3"></div>
                 <LeadForm id="apply-form" />
              </div>
           </div>
        </section>

        {/* FAQ Section Style like OVA */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-black text-center mb-12 uppercase font-heading">Frequently Asked Questions</h2>
              <div className="space-y-6">
                 {[
                   { q: "Is this a portal like 99acres or MagicBricks?", a: "No. Kast is an operating system that works WITH your existing leads and helps you convert them on WhatsApp." },
                   { q: "Do I need tech skills?", a: "Not at all. If you can use WhatsApp, you can use Kast. We set everything up for you." },
                   { q: "What is the Green Tick WhatsApp?", a: "It's an official API verified business profile that builds trust with luxury clients." }
                 ].map((item, i) => (
                   <div key={i} className="p-6 bg-white rounded-xl border border-slate-200">
                      <p className="font-black text-slate-900 mb-2 uppercase text-sm">Q: {item.q}</p>
                      <p className="text-slate-600 text-sm font-medium">{item.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
