<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <!--    <LazyGlobalsMaintenance />-->
    <div class="mb-12 text-center md:text-center">
      <h1
        class="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-5xl"
      >
        {{ privacy.title }}
      </h1>
      <p class="text-base text-gray-500 md:text-lg">
        {{ $t("last_update") }}: {{ $moment(privacy.createdAt).format("LLLL") }}
      </p>
    </div>

    <nuxt-content
      class="px-4 pb-20 max-w-2xl md:max-w-4xl mx-auto prose text-justify"
      :document="privacy"
    />
  </section>
</template>
<script>
export default {
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const privacy = await $content(`${defaultLocale}/privacy`).fetch();
    return { privacy };
  },
  head() {
    return {
      title: this.$config.SITE_TITLE + " | " + this.privacy.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: this.privacy.description,
        },
        {
          property: "og:title",
          hid: "og:title",
          content: this.$config.SITE_TITLE + " | " + this.privacy.title,
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
