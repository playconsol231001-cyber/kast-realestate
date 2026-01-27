
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  // Duplicate testimonials for infinite loop effect
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase font-heading mb-2">Verified results</h2>
        <p className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Real stories from the field</p>
      </div>
      
      <div className="relative flex">
        <div className="flex animate-scroll-left whitespace-nowrap gap-8">
          {duplicatedTestimonials.map((t, idx) => (
            <div 
              key={`${t.id}-${idx}`} 
              className="w-[350px] md:w-[450px] shrink-0 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow whitespace-normal"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 font-medium text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-slate-100 object-cover" />
                <div>
                  <div className="font-bold text-slate-900 uppercase text-sm">{t.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.role}</div>
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
