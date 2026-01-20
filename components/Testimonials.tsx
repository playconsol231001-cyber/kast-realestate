
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tight mb-6">Broker Success Stories</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">Real agents. Real growth. Powered by Kast's intelligent lead engine.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 rounded-[3rem] glass border-white/5 flex flex-col h-full hover:bg-white/5 transition-all group">
              <div className="flex items-center gap-1 text-indigo-500 mb-8">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 font-medium text-lg leading-relaxed mb-10 flex-grow italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white/5" />
                <div>
                  <div className="font-black text-white uppercase tracking-tighter italic">{t.name}</div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
