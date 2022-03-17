<template>
  <div>H1</div>
</template>
<script>
export default {
  name: "Post",
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const defaultLocale = app.i18n.locale;
    const post = await $content(`${defaultLocale}/blog`, slug).fetch();

    return {
      post,
    };
  },
};
</script>
