import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zxeckrmzphdqrunwgiqy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZWNrcm16cGhkcXJ1bndnaXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNjE0NjUsImV4cCI6MjA2ODkzNzQ2NX0.-4ogpO_Gebn6feKMiSzQdk3S8UMxC-El54PJmmzHNDM';
console.log(supabaseUrl)

export const supabase = createClient(supabaseUrl, supabaseKey)