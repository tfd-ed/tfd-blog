<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <div class="mockup-code w-5/6 mx-auto">
      <pre data-prefix="1"><code>yarn add tfdevs</code></pre>
      <pre data-prefix="2"><code>installing...</code></pre>
      <pre
        data-prefix="3"
        class="bg-red-600 text-white"
      ><code>Welcome to TFD!</code></pre>
    </div>
    <Welcome />
    <SocialCard />
  </section>
</template>

<script>
import HorizontalCard from "~/components/card/horizontal-card";
import SocialCard from "~/components/card/social-card";
import Intro from "@/components/hero/intro";
import Welcome from "@/components/hero/welcome";
export default {
  name: "IndexPage",
  components: { Welcome, Intro, SocialCard, HorizontalCard },
};
</script>
