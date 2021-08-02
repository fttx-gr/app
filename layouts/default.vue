<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import { supabase } from "@/utils/supabase-client";
export default {
  async fetch() {
    const user = await fetch("/api/auth/me").then(r => r.json());
    if (user.id) {
      this.$store.commit("setUser", user);
      this.$store.commit("setAuthState", true);
    } else this.$store.commit("setAuthState", false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          this.$store.commit("setUser", session.user);
          this.$store.commit("setAuthState", true);
        } else {
          this.$store.commit("setUser", null);
          this.$store.commit("setAuthState", false);
        }

        await fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session })
        });
      }
    );
  },
  fetchOnServer: false
};
</script>
