<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <!--    <Code />-->
    <Founder />
    <SocialCard />
    <Quote quote="about_quote" owner="quote_owner">
      <template #image>
        <div class="flex flex-col space-y-2">
          <img
            src="https://picsum.photos/200?grayscale"
            class="object-cover w-full h-full bg-center rounded-md shadow-xl"
          />
          <p
            class="mb-3 text-xs font-normal text-gray-500 pt-2 text-center leading-loose"
          >
            {{ $t("random_image") }}
          </p>
        </div>
      </template>
    </Quote>
  </section>
</template>

<script>
import HorizontalCard from "~/components/card/horizontal-card";
import SocialCard from "~/components/card/social-card";
import Intro from "@/components/hero/intro";
import Welcome from "@/components/hero/welcome";
import Code from "@/components/card/code";
import Founder from "@/components/hero/founder";
import { onAnalyticsReady } from "vue-analytics";
import Quote from "@/components/card/quote";
export default {
  name: "IndexPage",
  components: {
    Quote,
    Founder,
    Code,
    Welcome,
    Intro,
    SocialCard,
    HorizontalCard,
  },
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
