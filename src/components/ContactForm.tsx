import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabaseService } from '../services/supabaseService';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const result = await supabaseService.submitContact(formData);
    
    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-umyu-green text-sm font-bold uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Have Questions? We're Here to Help</h3>
            <p className="text-slate-600 text-lg mb-8">
              Whether you're a prospective student, current student, or alumni, our team is ready to assist you with any inquiries.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-umyu-green/10 rounded-xl flex items-center justify-center text-umyu-green">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Admissions Support</h4>
                  <p className="text-sm text-slate-500">Get help with your application process.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-umyu-green/10 rounded-xl flex items-center justify-center text-umyu-green">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Technical Support</h4>
                  <p className="text-sm text-slate-500">Issues with the student or staff portal?</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-umyu-green focus:ring-4 focus:ring-umyu-green/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-umyu-green focus:ring-4 focus:ring-umyu-green/10 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-umyu-green focus:ring-4 focus:ring-umyu-green/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-umyu-green focus:ring-4 focus:ring-umyu-green/10 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                  status === 'success' ? 'bg-green-500 text-white' : 
                  status === 'error' ? 'bg-red-500 text-white' :
                  'bg-umyu-green text-white hover:bg-umyu-dark shadow-lg shadow-umyu-green/20'
                }`}
              >
                {status === 'submitting' ? 'Sending...' : 
                 status === 'success' ? <><CheckCircle className="w-5 h-5" /> Sent Successfully</> :
                 status === 'error' ? <><AlertCircle className="w-5 h-5" /> Error Sending</> :
                 <>Send Message <Send className="w-5 h-5" /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
