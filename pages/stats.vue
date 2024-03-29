<template>

  <div v-if="data.vf" class="mx-8 mt-4 max-w-4xl md:mx-auto">

    <h1 class="my-4 text-center text-4xl font-semibold">
       Stats of the FTTx.gr Database
    </h1>

    <div class="mx-auto grid max-w-md grid-cols-1 gap-4 md:grid-cols-2">

      <div
        class="flex flex-col items-center justify-center rounded-md border border-red-500 bg-red-500/25 p-2"
      >

        <h1 class="py-2 text-center font-bold uppercase text-red-500">
           Vodafone
        </h1>

        <img
          class="my-2 w-6"
          src="@/static/img/vf-marker-minified.png"
          alt="Vodafone Cabinets"
        />

        <span class="font-semibold">{{ data.vf }}</span>

      </div>

      <div
        class="flex flex-col items-center justify-center rounded-md border border-blue-500 bg-blue-500/25 p-2"
      >

        <h1 class="py-2 text-center font-bold uppercase text-blue-500">
           COSMOTE
        </h1>

        <img
          class="my-2 w-6"
          src="@/static/img/ote-marker-minified.png"
          alt="COSMOTE Cabinets"
        />

        <span class="font-semibold">{{ data.ote }}</span>

      </div>

      <div
        class="flex flex-col items-center justify-center rounded-md border border-blue-600 bg-blue-600/30 p-2"
      >

        <h1 class="py-2 text-center font-bold uppercase text-blue-600">
           WIND
        </h1>

        <img
          class="my-2 w-6"
          src="@/static/img/wind-marker-minified.png"
          alt="WIND Cabinets"
        />

        <span class="font-semibold">{{ data.wind }}</span>

      </div>

      <div
        class="flex flex-col items-center justify-center rounded-md border border-orange-500 bg-orange-500/25 p-2"
      >

        <h1 class="py-2 text-center font-bold uppercase text-orange-500">
           RURAL CONNECT
        </h1>

        <img
          class="my-2 w-6"
          src="@/static/img/rurcon-marker-minified.png"
          alt="Rural Connect Cabinets"
        />

        <span class="font-semibold">{{ data.rurcon }}</span>

      </div>

      <div
        class="flex flex-col items-center justify-center rounded-md border border-gray-500 bg-gray-500/25 p-2"
      >

        <h1 class="py-2 text-center font-bold uppercase text-gray-500">
           UNKNOWN
        </h1>

        <img class="my-2 w-6" src="@/static/img/g-marker.png" alt="Unknown" />

        <span class="font-semibold">{{ data.unknown }}</span>

      </div>

      <div
        class="flex flex-col items-center justify-center rounded-md border border-sky-500 bg-sky-500/25 p-2"
      >

        <h1 class="py-2 text-center font-bold uppercase text-sky-500">
           CENTERS
        </h1>

        <img
          class="my-2 w-6"
          src="@/static/img/ote-marker-center-minified.png"
          alt="A.K Centers"
        />

        <span class="font-semibold">{{ data.centers }}</span>

      </div>

      <div class="col-span-full flex justify-between">

        <div>
           ADSL:
          <span class="font-semibold">{{ data.adsl }}</span>

        </div>

        <div>
           VDSL:
          <span class="font-semibold">{{ data.vdsl }}</span>

        </div>

        <div>
           FTTH:
          <span class="font-semibold">{{ data.ftth }}</span>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { supabase } from "@/utils/supabase-client";
import LRU from "lru-cache";

const options = {
  max: 500,
  ttl: 1000 * 60 * 60 * 2
};

const cache = new LRU(options);
export default {
  data() {
    return {
      data: null
    };
  },
  async fetch() {
    const check = cache.get("stats");
    if (check) return (this.data = check);

    const { data } = await supabase
      .from("cabinets")
      .select("*", { count: "exact" });
    const { count: centers } = await supabase
      .from("centers")
      .select("*", { count: "exact" });

    const payload = {
      vf: data.filter(c => c.isp === "Vodafone").length.toLocaleString(),
      ote: data.filter(c => c.isp === "OTE").length.toLocaleString(),
      rurcon: data
        .filter(c => c.isp === "RURALCONNECT")
        .length.toLocaleString(),
      wind: data.filter(c => c.isp === "WIND").length.toLocaleString(),
      unknown: data.filter(c => c.isp === "Unknown").length.toLocaleString(),
      centers: centers.toLocaleString(),
      vdsl: data.filter(c => c.type === "VDSL").length.toLocaleString(),
      adsl: data.filter(c => c.type === "ADSL").length.toLocaleString(),
      ftth: data.filter(c => c.type === "FTTH").length.toLocaleString()
    };
    cache.set("stats", payload);
    this.data = payload;
  }
};
</script>

<style></style>

