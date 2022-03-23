<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <Founder />
    <SocialCard />
    <Quote quote="about_quote" owner="quote_owner" image_quote="random_image">
      <template #image>
        <div class="flex flex-col space-y-2">
          <img
            src="https://picsum.photos/200?grayscale"
            class="object-cover w-36 h-full bg-center rounded-md shadow-xl"
          />
        </div>
      </template>
    </Quote>
  </section>
</template>

<script>
import HorizontalCard from "~/components/card/horizontal-card";
import SocialCard from "~/components/card/social-card";
import Founder from "@/components/hero/founder";
import Quote from "@/components/card/quote";
export default {
  name: "IndexPage",
  components: {
    Quote,
    Founder,
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
