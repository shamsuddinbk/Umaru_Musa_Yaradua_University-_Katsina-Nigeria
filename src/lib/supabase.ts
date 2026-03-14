import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidUrl = (url: string | undefined): url is string => {
  if (!url) return false;
  try {
    new URL(url);
    return url.startsWith('http');
  } catch {
    return false;
  }
};

const isConfigured = isValidUrl(supabaseUrl) && !!supabaseAnonKey;

if (!isConfigured) {
  console.warn('Supabase is not properly configured. Please add valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.');
}

// Create client only if configured, otherwise use a safe placeholder that won't throw on init
// but will fail gracefully on calls (which we handle in the service)
export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
