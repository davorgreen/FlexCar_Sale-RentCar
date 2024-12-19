import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pnqmclatoglkknubsuec.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBucW1jbGF0b2dsa2tudWJzdWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1OTk3OTksImV4cCI6MjA1MDE3NTc5OX0.dogu9gILEUfIxUUtv5zhTVpehbwH9rGIz2pWZKy34eg'
);

export default supabase;
