<template>
  <div class="container px-4 py-12 mx-auto max-w-7xl">
    <BannerContent />
    <Action />
    <!-- <LazyHerosFounder class="box" /> -->
    <SocialCard class="box" />
    <LazyCardsQuote
      class="box"
      quote="about_quote"
      owner="quote_owner"
      image_quote="random_image"
    >
      <template #image>
        <div class="flex flex-col space-y-2">
          <img
            alt="random image"
            src="https://picsum.photos/800"
            class="object-cover w-36 h-full bg-center rounded-md shadow-xl"
          />
        </div>
      </template>
    </LazyCardsQuote>
  </div>
</template>

<script>
import SocialCard from "@/components/global/social-card";
import BannerContent from "@/components/heros/banner-content.vue";
import Action from "@/components/heros/action.vue";
export default {
  name: "IndexPage",
  components: { SocialCard, BannerContent, Action },
  head() {
    return {
      title: this.$config.SITE_TITLE + " | " + this.$t("home"),
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
          content: this.$config.SITE_TITLE + " | " + this.$t("home"),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/front_cover.png",
        },
      ],
    };
  },
  mounted() {
    this.setAnimation();
  },
  methods: {
    setAnimation() {
      this.$anime.set(".box", {
        opacity: 0,
        translateY: 50,
      });

      this.$anime({
        targets: ".box",
        opacity: 1,
        translateY: 0,
        delay: this.$anime.stagger(100),
        easing: "easeOutExpo",
      });
    },
  },
};
</script>
