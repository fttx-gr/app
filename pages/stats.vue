<template>
  <div class="max-w-4xl md:mx-auto mt-4 mx-8">
    <h1 class="text-center text-4xl font-semibold my-4">
      Stats of the FTTx.gr Database
    </h1>
    <div class="max-w-md grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
      <div
        class="flex-col flex justify-center items-center bg-red-500/25 rounded-md border border-red-500 p-2"
      >
        <h1 class="text-center uppercase font-bold text-red-500 py-2">
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
        class="flex flex-col justify-center items-center bg-blue-500/25 rounded-md border border-blue-500 p-2"
      >
        <h1 class="text-center uppercase font-bold text-blue-500 py-2">
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
        class="flex flex-col justify-center items-center bg-blue-600/30 rounded-md border border-blue-600 p-2"
      >
        <h1 class="text-center uppercase font-bold text-blue-600 py-2">
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
        class="flex flex-col justify-center items-center bg-orange-500/25 rounded-md border border-orange-500 p-2"
      >
        <h1 class="text-center uppercase font-bold text-orange-500 py-2">
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
        class="flex flex-col justify-center items-center bg-gray-500/25 rounded-md border border-gray-500 p-2"
      >
        <h1 class="text-center uppercase font-bold text-gray-500 py-2">
          UNKNOWN
        </h1>
        <img class="w-6 my-2" src="@/static/img/g-marker.png" alt="Unknown" />
        <span class="font-semibold">{{ data.unknown }}</span>
      </div>
      <div
        class="flex flex-col justify-center items-center bg-sky-500/25 rounded-md border border-sky-500 p-2"
      >
        <h1 class="text-center uppercase font-bold text-sky-500 py-2">
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
  async asyncData({}) {
    const { data } = await supabase
      .from("cabinets")
      .select("*", { count: "exact" });
    const { count: centers } = await supabase
      .from("centers")
      .select("*", { count: "exact" });

    return {
      data: {
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
      }
    };
  }
};
</script>

<style></style>
