<template>
  <section>
    <div class="px-4 py-12 mx-auto">
      <div class="max-w-4xl pt-24 mx-auto">
        <div class="mb-24 text-left md:text-center">
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
        <!--        <XyzTransitionGroup-->
        <!--          appear-visible-->
        <!--          class="flex flex-col space-y-16 lg:divide-y lg:divide-gray-100"-->
        <!--          xyz="fade back-1 small-1 ease-out stagger-2 perspective-2"-->
        <!--        >-->
        <!--          <LazyCardsHorizontalCard-->
        <!--            v-for="(post, $index) in posts"-->
        <!--            :key="`post-${$index}`"-->
        <!--            :post="post"-->
        <!--          ></LazyCardsHorizontalCard>-->
        <!--        </XyzTransitionGroup>-->
        <div class="flex flex-col space-y-16 lg:divide-y lg:divide-gray-100">
          <LazyCardsHorizontalCard
            v-for="(post, $index) in posts"
            :key="`post-${$index}`"
            :post="post"
          ></LazyCardsHorizontalCard>
        </div>
        <div class="flex flex-row justify-center mx-auto mt-12">
          <div class="btn-group">
            <nuxt-link :to="prevLink" class="btn">«</nuxt-link>
            <button class="btn">{{ $t("page") + pageNo }}</button>
            <nuxt-link
              v-if="nextPage"
              class="btn"
              :to="`project/page/${pageNo + 1}`"
              >»</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData(context) {
    const { $content, app, params } = context;
    const pageNo = parseInt(params.number);
    const defaultLocale = app.i18n.locale;
    const tenBlogs = await $content(`${defaultLocale}/blog`, {
      text: true,
    })
      .sortBy("createdAt", "desc")
      .limit(10)
      .skip(9 * (pageNo - 1))
      .fetch();
    const nextPage = tenBlogs.length === 10;
    const posts = nextPage ? tenBlogs.slice(0, -1) : tenBlogs;
    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ""),
      })),
      nextPage,
      pageNo,
    };
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? "/blog" : `blog/page/${this.pageNo - 1}`;
    },
  },
};
</script>
