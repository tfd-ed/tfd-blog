<template></template>
<script>
export default {
  mounted() {
    const scriptTag = document.createElement("SCRIPT");
    scriptTag.setAttribute("src", "https://utteranc.es/client.js");
    scriptTag.setAttribute("repo", "tfd-ed/tfd-blog");
    scriptTag.setAttribute("issue-term", "pathname");
    scriptTag.setAttribute("label", "Comment");
    scriptTag.setAttribute("theme", "github-light");
    scriptTag.setAttribute("crossorigin", "anonymous");
    scriptTag.setAttribute("async", "async");
    this.$el.append(scriptTag);
  },
};
</script>

<style>
.utterances {
  @apply w-full max-w-full;
}
</style>
