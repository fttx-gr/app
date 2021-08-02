<template>
  <Map :cabinets="cabinets" :dslam="dslam" />
</template>

<script>
import { supabase } from "../utils/supabase-client";
export default {
  async asyncData() {
    // DSLAM LOADING
    const { data: dslam } = await supabase.from("centers").select("*");

    // Cabinets
    const { data: cabinets } = await supabase
      .from("cabinets")
      .select("*")
      .neq("type", "DSLAM");

    return {
      dslam,
      cabinets
    };
  }
};
</script>
