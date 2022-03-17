<template>
  <div>H1</div>
</template>
<script>
export default {
  name: "Blog",
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
