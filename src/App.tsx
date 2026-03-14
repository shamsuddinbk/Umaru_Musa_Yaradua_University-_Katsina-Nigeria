import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Faculties from './components/Faculties';
import News from './components/News';
import ContactForm from './components/ContactForm';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Shield, BookOpen, Users, Globe } from 'lucide-react';
import { supabaseService } from './services/supabaseService';
import { Stat } from './types';
import * as Icons from 'lucide-react';

export default function App() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const fetchedStats = await supabaseService.getStats();
      setStats(fetchedStats);
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen selection:bg-umyu-green selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/campus/1000/800" 
                    alt="UMYU Campus" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-umyu-green/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-umyu-gold/10 rounded-full blur-3xl -z-10" />
              </motion.div>

              <div>
                <h2 className="text-umyu-green text-sm font-bold uppercase tracking-widest mb-4">About UMYU</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  A Nucleus for <span className="text-umyu-green">Socio-Economic</span> Development
                </h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Umaru Musa Yar’adua University (UMYU) was established in 2006 as the Katsina State University. 
                  It was conceived to serve as a nucleus for socio-economic and political development of the state 
                  through the provision of highly skilled human resources and research output.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="bg-umyu-green/10 p-3 rounded-xl h-fit">
                      <Shield className="w-6 h-6 text-umyu-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                      <p className="text-sm text-slate-600">To produce well grounded, God-fearing, and entrepreneurially minded graduates.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-umyu-gold/10 p-3 rounded-xl h-fit">
                      <BookOpen className="w-6 h-6 text-umyu-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                      <p className="text-sm text-slate-600">Aspire to be one of the best Universities in Nigeria and beyond.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Stats */}
        <section className="py-24 bg-umyu-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {stats.map((stat) => {
                const IconComponent = (Icons as any)[stat.icon] || Icons.Activity;
                return (
                  <div key={stat.id} className="text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-umyu-gold" />
                    </div>
                    <h4 className="text-4xl font-bold mb-2">{stat.value}</h4>
                    <p className="text-white/60 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Faculties />
        <News />
        
        {/* CTA Section */}
        <section id="admissions" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-umyu-gold font-bold uppercase tracking-widest mb-6">Join Our Community</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Your Future Starts <br /> <span className="text-umyu-green italic">Right Here</span>
                </h3>
                <p className="text-slate-400 text-lg mb-12">
                  Whether you are a prospective undergraduate or postgraduate student, 
                  UMYU offers the environment and resources you need to succeed.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-umyu-green hover:bg-umyu-dark text-white px-10 py-5 rounded-full font-bold transition-all transform hover:scale-105">
                    Undergraduate Admission
                  </button>
                  <button className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full font-bold transition-all transform hover:scale-105">
                    Postgraduate Admission
                  </button>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-umyu-green/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-umyu-gold/10 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}
