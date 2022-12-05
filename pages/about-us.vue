<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <div class="mb-6 text-center md:text-center">
      <h1
        class="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
      >
        {{ $t("about_us") }}
      </h1>
    </div>
    <!--    <LazyGlobalsMaintenance />-->
    <LazyCardsQuote quote="founder_quote" owner="chau_dara">
      <template #image>
        <img src="/founder.jpg" alt="founder" />
      </template>
    </LazyCardsQuote>
    <nuxt-content
      class="px-4 pb-20 max-w-2xl md:max-w-4xl mx-auto prose md:prose-xl text-justify"
      :document="about"
    ></nuxt-content>
  </section>
</template>
<script>
export default {
  data() {
    return {
      about: "",
    };
  },
  async fetch() {
    // const { $content, app } = context;
    const defaultLocale = this.$i18n.locale;
    this.about = await this.$content(`${defaultLocale}/about-us`).fetch();
  },
  fetchOnServer: true,
  head() {
    return {
      title: this.$config.SITE_TITLE + " | " + this.about.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: this.about.description,
        },
        {
          property: "og:title",
          hid: "og:title",
          content: this.$config.SITE_TITLE + " | " + this.about.title,
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
