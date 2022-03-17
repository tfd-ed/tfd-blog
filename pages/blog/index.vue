<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <h2
      class="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl"
    >
      All Articles
    </h2>
    <div class="w-full xl:w-4/6">
      <XyzTransitionGroup
        appear-visible
        class="flex flex-col space-y-16"
        xyz="fade small-1 stagger-4 ease-ease up-5"
      >
        <HorizontalCard :key="1"></HorizontalCard>
        <HorizontalCard :key="2"></HorizontalCard>
        <HorizontalCard :key="3"></HorizontalCard>
      </XyzTransitionGroup>
    </div>
  </section>
</template>
<script>
import HorizontalCard from "@/components/card/horizontal-card";
export default {
  name: "Blog",
  components: { HorizontalCard },
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const posts = await $content(`${defaultLocale}/blog`).fetch();
    return {
      posts,
    };
  },
};
</script>
