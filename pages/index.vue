<template>
  <section class="px-4 py-12 mx-auto max-w-7xl">
    <client-only>
      <LazyHerosFounder />
      <LazyCardsSocialCard />
      <LazyCardsQuote
        quote="about_quote"
        owner="quote_owner"
        image_quote="random_image"
      >
        <template #image>
          <div class="flex flex-col space-y-2">
            <img
              src="https://picsum.photos/800"
              class="object-cover w-36 h-full bg-center rounded-md shadow-xl"
            />
          </div>
        </template>
      </LazyCardsQuote>
    </client-only>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
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
  // mounted() {
  //   // this.$auth.refreshTokens();
  //   // this.$auth.strategy.token.reset();
  //   // this.$auth.strategy.refreshToken.reset();
  // },
};
</script>
