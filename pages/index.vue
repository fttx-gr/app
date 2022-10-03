<template>

  <Map :cabinets="cabinets" :dslam="dslam" />

</template>

<script>
import { supabase } from "../utils/supabase-client";
import LRU from "lru-cache";

const options = {
  max: 500,
  ttl: 1000 * 60 * 60 * 2
};

const cache = new LRU(options);

export default {
  async asyncData() {
    const check = cache.get("index");
    if (check) return check;
    const { data: dslam } = await supabase.from("centers").select("*");

    const { data: cabinets } = await supabase
      .from("cabinets")
      .select("*")
      .neq("type", "DSLAM");

    cache.set("index", { dslam, cabinets });

    return {
      dslam,
      cabinets
    };
  }
};
</script>

