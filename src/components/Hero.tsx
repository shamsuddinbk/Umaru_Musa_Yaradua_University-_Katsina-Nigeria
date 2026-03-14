import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, GraduationCap, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/university/1920/1080"
          alt="UMYU Campus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-umyu-dark/90 via-umyu-dark/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-umyu-gold animate-pulse" />
            Admissions for 2025/2026 Now Open
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            To Learn and <br />
            <span className="text-umyu-gold italic">to Serve</span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            Welcome to Umaru Musa Yar’adua University Katsina. We produce well-grounded, 
            God-fearing, and entrepreneurially minded graduates for societal development.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-umyu-gold hover:bg-yellow-600 text-umyu-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl">
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
              <Play className="w-5 h-5 fill-current" /> Virtual Tour
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">15k+</div>
              <div className="text-sm text-white/60">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">9</div>
              <div className="text-sm text-white/60">Faculties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Programmes</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/students/800/1000" 
              alt="Students" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
          >
            <div className="bg-umyu-green/10 p-3 rounded-xl">
              <Award className="w-6 h-6 text-umyu-green" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Top Ranked</div>
              <div className="text-xs text-slate-500">Academic Excellence</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
          >
            <div className="bg-umyu-gold/10 p-3 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-umyu-gold" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Accredited</div>
              <div className="text-xs text-slate-500">NUC Certified</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
