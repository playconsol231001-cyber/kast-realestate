
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
      <div className="bg-white p-12 rounded-2xl text-center shadow-2xl border-2 border-emerald-500">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-black mb-4 uppercase">Application Received!</h3>
        <p className="text-slate-600 font-medium mb-8">Check your WhatsApp. We've sent you the next steps to complete your onboarding.</p>
        <button className="text-indigo-600 font-black uppercase text-xs tracking-widest">Resend WhatsApp Invite</button>
      </div>
    );
  }

  return (
    <div id={id} className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 relative">
      <div className="mb-8">
        <h3 className="text-2xl font-black uppercase mb-1">Apply for Early Access</h3>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest italic">Limited to 5,000 Agents Only</p>
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
            I'M READY TO SCALE! 🚀
          </button>
          <p className="mt-4 text-[10px] text-center text-slate-400 font-bold uppercase">🔐 Your data is safe with us. No Spam ever.</p>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
