<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <SocialCard />
  </section>
</template>

<script>
import HorizontalCard from "~/components/card/horizontal-card";
import SocialCard from "~/components/card/social-card";
export default {
  name: "IndexPage",
  components: { SocialCard, HorizontalCard },
};
</script>
