<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
        >
          {{ $t("contact") }}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {{ $t("contact_us") }}
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <ContactForm />
          <div
            class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
          >
            <a class="text-gray-600">{{ $config.EMAIL }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactForm from "@/components/forms/contact-form";
export default {
  components: { ContactForm },
  head() {
    return {
      title: this.$config.SITE_TITLE + " | " + this.$t("contact"),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          property: "og:title",
          hid: "og:title",
          content: this.$config.SITE_TITLE + " | " + this.$t("contact"),
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
