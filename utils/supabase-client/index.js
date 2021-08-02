const config = require("../config");

const { createClient } = require("@supabase/supabase-js");

// Supabase client with anon key
export const supabase = createClient(
  config.default.sbUrl,
  config.default.anon_key
);
