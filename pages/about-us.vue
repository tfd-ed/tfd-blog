<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <div class="mb-6 text-center md:text-center">
      <h1
        class="box mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
      >
        {{ $t("about_us") }}
      </h1>
    </div>
    <!--    <LazyGlobalsMaintenance />-->
    <LazyCardsQuote class="box" quote="founder_quote" owner="chau_dara">
      <template #image>
        <img src="/founder.jpg" alt="founder" />
      </template>
    </LazyCardsQuote>
    <nuxt-content
      class="box px-4 pb-20 max-w-2xl md:max-w-4xl mx-auto prose md:prose-lg text-justify"
      :document="about"
    ></nuxt-content>
  </section>
</template>
<script>
export default {
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const about = await $content(`${defaultLocale}/about-us`).fetch();
    return { about };
  },
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
