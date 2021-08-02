const { createClient } = require("@supabase/supabase-js");

// supabase service_role
exports.supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SERVICE_ROLE
);
