<template><div>Hello</div></template>
<script>
export default {
  head() {
    return {
      title: this.post.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.description,
        },
        {
          property: "og:title",
          hid: "og:title",
          content: this.post.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.post.media,
        },
      ],
    };
  },
};
</script>
