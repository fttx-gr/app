const { createClient } = require("@supabase/supabase-js");

// Supabase client with anon key
export const supabase = createClient(
  "https://bnfrwurjqijejizltevo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzcyNDU1NSwiZXhwIjoxOTQzMzAwNTU1fQ.3fk4y0ZJfOtit7ViEGDcXCWorXNj_2AFcs9W9P3svDk"
);
