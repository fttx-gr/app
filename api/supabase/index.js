const { createClient } = require("@supabase/supabase-js");

// supabase service_role
exports.supabase = createClient(
  "https://bnfrwurjqijejizltevo.supabase.co",
  process.env.SERVICE_ROLE
);
