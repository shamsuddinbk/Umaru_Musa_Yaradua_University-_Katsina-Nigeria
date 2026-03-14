import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-umyu-green p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl">UMYU</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Umaru Musa Yar’adua University Katsina is committed to producing 
              entrepreneurially minded graduates for societal development.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-umyu-green transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {['Student Portal', 'Staff Portal', 'Library', 'Research', 'Alumni', 'Careers'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-umyu-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-umyu-green" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-8">Academics</h4>
            <ul className="space-y-4 text-slate-400">
              {['Faculties', 'Departments', 'Postgraduate', 'Part-time Studies', 'Remedial Studies', 'Academic Calendar'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-umyu-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-umyu-green" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-umyu-green flex-shrink-0" />
                <span>Katsina-Dutsinma Road, Katsina State, Nigeria.</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-umyu-green flex-shrink-0" />
                <span>+234 (0) 123 456 7890</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-umyu-green flex-shrink-0" />
                <span>info@umyu.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 Umaru Musa Yar’adua University Katsina. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
