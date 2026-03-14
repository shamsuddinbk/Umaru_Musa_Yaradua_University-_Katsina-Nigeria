import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { NEWS_ITEMS as DEFAULT_NEWS, EVENTS as DEFAULT_EVENTS } from '../constants';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { supabaseService } from '../services/supabaseService';
import { NewsItem, EventItem } from '../types';

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(DEFAULT_NEWS);
  const [events, setEvents] = useState<EventItem[]>(DEFAULT_EVENTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [fetchedNews, fetchedEvents] = await Promise.all([
        supabaseService.getNews(),
        supabaseService.getEvents()
      ]);
      setNewsItems(fetchedNews);
      setEvents(fetchedEvents);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-umyu-green text-sm font-bold uppercase tracking-widest mb-4">Latest Updates</h2>
                <h3 className="text-4xl font-bold text-slate-900">University News</h3>
              </div>
              <button className="text-umyu-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All News <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {newsItems.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-umyu-green text-white text-xs font-bold px-3 py-1 rounded-full">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-umyu-green transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-slate-600 mb-6 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <button className="font-bold text-slate-900 flex items-center gap-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.id} className="flex gap-6 group cursor-pointer">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl border border-slate-100 flex flex-col items-center justify-center shadow-sm group-hover:bg-umyu-green group-hover:text-white transition-all">
                    <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                    <span className="text-xl font-black">{event.date.split(' ')[1]?.replace(',', '') || ''}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 group-hover:text-umyu-green transition-colors mb-1">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 09:00 AM</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-umyu-green rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Ready to Join Us?</h4>
                <p className="text-white/80 mb-6">
                  Start your journey today at one of Nigeria's fastest growing universities.
                </p>
                <button className="bg-umyu-gold text-umyu-dark w-full py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                  Apply for Admission
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
