<template>
  <div style="z-index: 999">
    <div
      style="
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
    >
      <div>
        <h1>Your coordinates:</h1>
        <p>
          {{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude
        </p>
      </div>
      <div>
        <h1>Map coordinates:</h1>
        <p>
          {{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myCoordinates", "mapCoordinates"]
};
</script>

<style></style>
