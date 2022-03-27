<template>
  <div class="px-4 py-12 mx-auto">
    <div class="max-w-4xl pt-12 mx-auto">
      <div class="mb-6 text-left md:text-center">
        <h1
          class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
        >
          {{ $t("articles") }}
        </h1>
      </div>
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-black"></div>
        </div>
        <div class="relative flex justify-start">
          <span class="pr-3 text-lg font-medium text-neutral-600 bg-white">
            {{ $t("all_issues") }}
          </span>
        </div>
      </div>
      <XyzTransitionGroup
        appear-visible
        class="flex flex-col space-y-16 lg:divide-y lg:divide-gray-100"
        xyz="fade back-1 small-1 ease-out stagger-2 perspective-2"
      >
        <HorizontalCard
          v-for="(post, $index) in posts"
          :key="`post-${$index}`"
          :post="post"
        ></HorizontalCard>
      </XyzTransitionGroup>
      <Confused v-if="posts.length === 0" />
      <div v-if="nextPage" class="flex flex-row justify-center mx-auto mt-12">
        <div class="btn-group">
          <button class="btn">«</button>
          <button class="btn">{{ $t("page") }} 1</button>
          <nuxt-link class="btn" :to="localePath('/project/page/2')"
            >»</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HorizontalCard from "@/components/card/horizontal-card";
import Confused from "@/components/card/confused";
export default {
  components: { Confused, HorizontalCard },
  async asyncData(context) {
    const { $content, app, params } = context;
    const pageNo = parseInt(params.number);
    const defaultLocale = app.i18n.locale;
    const tenPosts = await $content(`${defaultLocale}/blog`, {
      text: true,
    })
      .sortBy("createdAt", "desc")
      .limit(10)
      .fetch();
    const nextPage = tenPosts.length === 10;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ""),
      })),
      nextPage,
      pageNo,
    };
  },
};
</script>
