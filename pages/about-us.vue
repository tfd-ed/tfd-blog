<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <div class="mb-6 text-center md:text-center">
      <h1
        class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
      >
        {{ $t("about_us") }}
      </h1>
    </div>
    <Quote quote="founder_quote" owner="chau_dara">
      <template #image>
        <nuxt-img src="/founder.jpeg"></nuxt-img>
      </template>
    </Quote>
    <nuxt-content
      class="px-4 pb-20 max-w-2xl md:max-w-4xl mx-auto prose md:prose-xl text-justify"
      :document="about"
    ></nuxt-content>
    <AbaDonation />
  </section>
</template>
<script>
import Quote from "@/components/card/quote";
import AbaDonation from "@/components/card/aba-donation";
export default {
  components: { AbaDonation, Quote },
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const about = await $content(`${defaultLocale}/about-us`).fetch();
    return { about };
  },
  head() {
    return {
      title: this.about.title,
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
          content: this.about.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.about.media,
        },
      ],
    };
  },
};
</script>
