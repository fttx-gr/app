module.exports = {
  apps: [
    {
      name: "fttx",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start --hostname '0.0.0.0'",
      time: true,
      watch: true,
    }
  ]
};
