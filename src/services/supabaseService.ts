import { supabase } from '../lib/supabase';
import { NewsItem, EventItem, Faculty, ContactSubmission, Stat } from '../types';
import { NEWS_ITEMS, EVENTS, FACULTIES } from '../constants';

const DEFAULT_STATS: Stat[] = [
  { id: '1', label: 'Active Students', value: '15,000+', icon: 'Users' },
  { id: '2', label: 'Faculties', value: '9', icon: 'BookOpen' },
  { id: '3', label: 'Programmes', value: '50+', icon: 'Globe' }
];

export const supabaseService = {
  async getStats(): Promise<Stat[]> {
    if (!supabase) return DEFAULT_STATS;
    try {
      const { data, error } = await supabase
        .from('stats')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;
      return data && data.length > 0 ? data : DEFAULT_STATS;
    } catch (error) {
      console.error('Error fetching stats from Supabase:', error);
      return DEFAULT_STATS;
    }
  },

  async getNews(): Promise<NewsItem[]> {
    if (!supabase) {
      console.log('Supabase not configured, using default news items.');
      return NEWS_ITEMS;
    }
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      return data && data.length > 0 ? data : NEWS_ITEMS;
    } catch (error) {
      console.error('Error fetching news from Supabase:', error);
      return NEWS_ITEMS;
    }
  },

  async getEvents(): Promise<EventItem[]> {
    if (!supabase) {
      console.log('Supabase not configured, using default events.');
      return EVENTS;
    }
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      return data && data.length > 0 ? data : EVENTS;
    } catch (error) {
      console.error('Error fetching events from Supabase:', error);
      return EVENTS;
    }
  },

  async getFaculties(): Promise<Faculty[]> {
    if (!supabase) {
      return FACULTIES;
    }
    try {
      const { data, error } = await supabase
        .from('faculties')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      return data && data.length > 0 ? data : FACULTIES;
    } catch (error) {
      console.error('Error fetching faculties from Supabase:', error);
      return FACULTIES;
    }
  },

  async submitContact(submission: ContactSubmission): Promise<{ success: boolean; error?: any }> {
    if (!supabase) {
      console.warn('Supabase not configured, cannot submit contact form.');
      return { success: false, error: 'Supabase not configured' };
    }
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form to Supabase:', error);
      return { success: false, error };
    }
  }
};
