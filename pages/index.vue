<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <SocialAction />
    <SocialCard />
  </section>
</template>

<script>
import HorizontalCard from "~/components/card/horizontal-card";
import SocialAction from "~/components/card/social-action";
import SocialCard from "~/components/card/social-card";
export default {
  name: "IndexPage",
  components: { SocialCard, SocialAction, HorizontalCard },
};
</script>
