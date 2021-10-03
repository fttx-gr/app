<template>
  <div v-if="data.vf" class="max-w-4xl mx-8 mt-4 md:mx-auto">
    <h1 class="my-4 text-4xl font-semibold text-center">
      Stats of the FTTx.gr Database
    </h1>
    <div class="grid max-w-md grid-cols-1 gap-4 mx-auto md:grid-cols-2">
      <div
        class="flex flex-col items-center justify-center p-2 border border-red-500 rounded-md bg-red-500/25"
      >
        <h1 class="py-2 font-bold text-center text-red-500 uppercase">
          Vodafone
        </h1>
        <img
          class="w-6 my-2"
          src="@/static/img/vf-marker-minified.png"
          alt="Vodafone Cabinets"
        />
        <span class="font-semibold">{{ data.vf }}</span>
      </div>
      <div
        class="flex flex-col items-center justify-center p-2 border border-blue-500 rounded-md bg-blue-500/25"
      >
        <h1 class="py-2 font-bold text-center text-blue-500 uppercase">
          COSMOTE
        </h1>
        <img
          class="w-6 my-2"
          src="@/static/img/ote-marker-minified.png"
          alt="COSMOTE Cabinets"
        />
        <span class="font-semibold">{{ data.ote }}</span>
      </div>
      <div
        class="flex flex-col items-center justify-center p-2 border border-blue-600 rounded-md bg-blue-600/30"
      >
        <h1 class="py-2 font-bold text-center text-blue-600 uppercase">
          WIND
        </h1>
        <img
          class="w-6 my-2"
          src="@/static/img/wind-marker-minified.png"
          alt="WIND Cabinets"
        />
        <span class="font-semibold">{{ data.wind }}</span>
      </div>
      <div
        class="flex flex-col items-center justify-center p-2 border border-orange-500 rounded-md bg-orange-500/25"
      >
        <h1 class="py-2 font-bold text-center text-orange-500 uppercase">
          RURAL CONNECT
        </h1>
        <img
          class="w-6 my-2"
          src="@/static/img/rurcon-marker-minified.png"
          alt="Rural Connect Cabinets"
        />
        <span class="font-semibold">{{ data.rurcon }}</span>
      </div>
      <div
        class="flex flex-col items-center justify-center p-2 border border-gray-500 rounded-md bg-gray-500/25"
      >
        <h1 class="py-2 font-bold text-center text-gray-500 uppercase">
          UNKNOWN
        </h1>
        <img class="w-6 my-2" src="@/static/img/g-marker.png" alt="Unknown" />
        <span class="font-semibold">{{ data.unknown }}</span>
      </div>
      <div
        class="flex flex-col items-center justify-center p-2 border rounded-md bg-sky-500/25 border-sky-500"
      >
        <h1 class="py-2 font-bold text-center uppercase text-sky-500">
          CENTERS
        </h1>
        <img
          class="w-6 my-2"
          src="@/static/img/ote-marker-center-minified.png"
          alt="A.K Centers"
        />
        <span class="font-semibold">{{ data.centers }}</span>
      </div>
      <div class="flex justify-between col-span-full">
        <div>
          ADSL: <span class="font-semibold">{{ data.adsl }}</span>
        </div>
        <div>
          VDSL: <span class="font-semibold">{{ data.vdsl }}</span>
        </div>
        <div>
          FTTH: <span class="font-semibold">{{ data.ftth }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "@/utils/supabase-client";
export default {
  data() {
    return {
      data: null
    };
  },
  async fetch() {
    const { data } = await supabase
      .from("cabinets")
      .select("*", { count: "exact" });
    const { count: centers } = await supabase
      .from("centers")
      .select("*", { count: "exact" });

    this.data = {
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
  }
};
</script>

<style></style>
