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
  // mounted() {
  //   const scriptTag = document.createElement("SCRIPT");
  //   scriptTag.setAttribute("src", "https://utteranc.es/client.js");
  //   scriptTag.setAttribute("repo", "tfd-ed/tfd-blog");
  //   scriptTag.setAttribute("issue-term", "title");
  //   scriptTag.setAttribute("label", "Comment");
  //   scriptTag.setAttribute("theme", "github-light");
  //   scriptTag.setAttribute("crossorigin", "anonymous");
  //   scriptTag.setAttribute("async", "async");
  //   this.$el.append(scriptTag);
  // },
  mounted() {
    const scriptTag = document.createElement("SCRIPT");
    scriptTag.setAttribute("src", "https://giscus.app/client.js");
    scriptTag.setAttribute("data-repo", "tfd-ed/tfd-blog");
    scriptTag.setAttribute("data-repo-id", "R_kgDOHCysnQ");
    scriptTag.setAttribute("data-category", "Announcements");
    scriptTag.setAttribute("data-category-id", "DIC_kwDOHCysnc4COO75");
    scriptTag.setAttribute("data-mapping", "title");
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
