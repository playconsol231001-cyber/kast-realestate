
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
      <div className="glass p-10 md:p-14 rounded-[3rem] text-center border-indigo-500/20 shadow-2xl">
        <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-[1000] text-white mb-4 italic uppercase tracking-tighter">Profile Initialized</h3>
        <p className="text-slate-400 mb-8 font-medium">We've sent your digital setup link to <span className="text-white">+{formData.mobile}</span>. Your free trial is active.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-indigo-400 font-black hover:text-indigo-300 transition-colors uppercase tracking-widest text-[10px] italic"
        >
          Request Another Link
        </button>
      </div>
    );
  }

  return (
    <div id={id} className="glass p-8 md:p-12 rounded-[2.5rem] border-white/10 shadow-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="mb-10 relative z-10">
        <h3 className="text-3xl font-[1000] text-white mb-2 italic uppercase tracking-tighter">Start Free Trial</h3>
        <p className="text-slate-500 font-medium text-sm italic uppercase tracking-widest">No credit card needed</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Full Name</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="NAME"
            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-bold uppercase italic"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Mobile (WhatsApp)</label>
            <input 
              type="tel" 
              name="mobile"
              required
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="98765 43210"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-bold italic"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Target Market</label>
            <select 
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#0a0f2b] border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-bold cursor-pointer italic uppercase"
            >
              <option value="Delhi">DELHI / NCR</option>
              <option value="Mumbai">MUMBAI</option>
              <option value="Bangalore">BANGALORE</option>
              <option value="Pune">PUNE</option>
              <option value="Hyderabad">HYDERABAD</option>
              <option value="Chennai">CHENNAI</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Role</label>
          <select 
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-bold cursor-pointer italic uppercase"
            >
              <option value="Agent">SOLO AGENT</option>
              <option value="Broker">REAL ESTATE BROKER</option>
              <option value="Developer">PROPERTY DEVELOPER</option>
              <option value="Partner">CHANNEL PARTNER</option>
            </select>
        </div>
        
        <div className="pt-6">
          <button 
            type="submit"
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-[1000] text-xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 uppercase italic tracking-tighter"
          >
            Deploy My App Now
          </button>
          <div className="flex items-center justify-center gap-2 mt-6 text-[10px] font-black text-slate-600 uppercase tracking-widest italic">
             <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
             Get Your First Lead Today
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
