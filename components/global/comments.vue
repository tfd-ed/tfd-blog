<template>
  <div class="flex flex-col space-y-4">
    <p class="font-semibold text-xl lg:text-3xl text-left">
      {{ $t("comments") }}
    </p>
    <div class="divider"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const scriptTag = document.createElement("SCRIPT");
    scriptTag.setAttribute("src", "https://giscus.app/client.js");
    scriptTag.setAttribute("data-repo", this.$config.REPO);
    scriptTag.setAttribute("data-repo-id", this.$config.REPO_ID);
    scriptTag.setAttribute("data-category", "Announcements");
    scriptTag.setAttribute("data-category-id", this.$config.REPO_CAT_ID);
    scriptTag.setAttribute("data-mapping", "pathname");
    scriptTag.setAttribute("data-reactions-enabled", "1");
    scriptTag.setAttribute("data-emit-metadata", "0");
    scriptTag.setAttribute("data-input-position", "top");
    scriptTag.setAttribute("data-theme", "light");
    scriptTag.setAttribute("data-lang", "en");
    scriptTag.setAttribute("data-loading", "lazy");
    scriptTag.setAttribute("crossorigin", "anonymous");
    this.$el.append(scriptTag);
  },
};
</script>

<!--<style>-->
<!--.utterances {-->
<!--  width: 100%;-->
<!--  margin: 0 !important;-->
<!--  max-width: 100%;-->
<!--}-->
<!--</style>-->
