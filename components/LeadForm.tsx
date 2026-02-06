
import React, { useState } from 'react';

const LeadForm: React.FC<{ id?: string }> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    profession: 'Agent',
    city: 'Delhi'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 md:p-20 rounded-[3rem] text-center shadow-[0_30px_100px_rgba(0,0,0,0.1)] border-t-8 border-emerald-500 animate-success-pop">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg shadow-emerald-200">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter text-slate-900 leading-tight">Interest recorded!</h3>
        <p className="text-slate-600 font-bold text-lg mb-12 leading-relaxed max-w-sm mx-auto">
          We have recorded your interest. Our verification team will connect with you on WhatsApp shortly to activate your 7-Day free trial.
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 rounded-full border border-emerald-100 mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Awaiting verification</span>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100">
          <a 
            href="https://chat.whatsapp.com/LC10w1SkKoVHE8TQ8pIVG2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 w-full py-6 bg-[#25D366] text-white rounded-2xl font-black uppercase text-sm md:text-base tracking-widest hover:bg-[#1da851] transition-all shadow-2xl shadow-green-200 active:scale-95 transform group"
          >
            <div className="animate-whatsapp">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-8 h-8 drop-shadow-md" 
              />
            </div>
            <span>Join Growth Community</span>
          </a>
          <p className="mt-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Join 2,400+ Top Real Estate Agents</p>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 relative">
      <div className="mb-8">
        <h3 className="text-2xl font-black uppercase mb-1">Apply for 7-Day trial</h3>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">No credit card • Verified agents only</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-5 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none transition-all font-bold"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">WhatsApp Number</label>
          <input 
            type="tel" 
            name="mobile"
            required
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="10-Digit Mobile"
            className="w-full px-5 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none transition-all font-bold"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Location</label>
            <select 
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 font-bold cursor-pointer"
            >
              <option value="Delhi">DELHI / NCR</option>
              <option value="Mumbai">MUMBAI</option>
              <option value="Bangalore">BANGALORE</option>
              <option value="Pune">PUNE</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Current Role</label>
            <select 
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 font-bold cursor-pointer"
            >
              <option value="Agent">SOLO AGENT</option>
              <option value="Broker">BROKER</option>
              <option value="Partner">CHANNEL PARTNER</option>
            </select>
          </div>
        </div>
        
        <div className="pt-4">
          <button 
            type="submit"
            className="cta-button w-full py-5 rounded-lg font-black text-xl uppercase tracking-tighter"
          >
            START MY FREE TRIAL!
          </button>
          <p className="mt-4 text-[10px] text-center text-slate-400 font-bold uppercase">No credit card required. Instant Setup.</p>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
