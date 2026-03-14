import React from 'react';
import { motion } from 'motion/react';
import { FACULTIES } from '../constants';
import * as Icons from 'lucide-react';

export default function Faculties() {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-umyu-green text-sm font-bold uppercase tracking-widest mb-4">Academic Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Explore Our Faculties</h3>
          <p className="text-slate-600 text-lg">
            UMYU offers a wide range of undergraduate and postgraduate programmes across 
            diverse fields of study, designed to equip students with practical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTIES.map((faculty, index) => {
            const IconComponent = (Icons as any)[faculty.icon] || Icons.BookOpen;
            return (
              <motion.a
                key={faculty.name}
                href={faculty.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-umyu-green transition-all duration-500 hover:shadow-2xl hover:shadow-umyu-green/20"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-7 h-7 text-umyu-green" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                  {faculty.name}
                </h4>
                <p className="text-slate-600 group-hover:text-white/80 transition-colors leading-relaxed">
                  {faculty.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-umyu-green font-bold group-hover:text-umyu-gold transition-colors">
                  Learn More <Icons.ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
