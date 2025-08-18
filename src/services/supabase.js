import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://qanyynsigwbwibhkcpic.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhbnl5bnNpZ3did2liaGtjcGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1Nzg3MzYsImV4cCI6MjA1OTE1NDczNn0.EEtVgfe4RxYn11l9Qm0pDJQLcHEmvz7G27Hzy6Aph5A'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;