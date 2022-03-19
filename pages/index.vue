<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <!--    <Code />-->
    <Founder />
    <SocialCard />
  </section>
</template>

<script>
import HorizontalCard from "~/components/card/horizontal-card";
import SocialCard from "~/components/card/social-card";
import Intro from "@/components/hero/intro";
import Welcome from "@/components/hero/welcome";
import Code from "@/components/card/code";
import Founder from "@/components/hero/founder";
export default {
  name: "IndexPage",
  components: { Founder, Code, Welcome, Intro, SocialCard, HorizontalCard },
  head() {
    return {
      title: "TFD Blogs",
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content:
            "TFDevs is a new initiative aiming at bringing uncovered facts that people might not be aware of to the public.",
        },
        {
          property: "og:title",
          hid: "og:title",
          content: "Welcome to TFD",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/front_cover.png",
        },
      ],
    };
  },
};
</script>
