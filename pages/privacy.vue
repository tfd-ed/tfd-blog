<template>
  <section>
    <div class="px-4 py-24 mb-20 text-left bg-gray-50 md:text-center">
      <h1
        class="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-5xl"
      >
        {{ tos.title }}
      </h1>
      <p class="text-base text-gray-500 md:text-lg">
        {{ $t("last_update") }}: {{ $moment(tos.createdAt).format("LLLL") }}
      </p>
    </div>
    <nuxt-content
      class="px-4 pb-20 max-w-2xl md:max-w-4xl mx-auto prose text-justify"
      :document="tos"
    />
  </section>
</template>
<script>
export default {
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const tos = await $content(`${defaultLocale}/privacy`).fetch();
    return { tos };
  },
};
</script>
