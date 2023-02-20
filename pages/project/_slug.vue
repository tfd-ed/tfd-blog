<template>
  <div class="antialiased text-gray-900">
    <div
      class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-7xl"
    >
      <article>
        <h1 class="sr-only">{{ post.title }}</h1>
        <div class="mx-auto mb-10 text-left max-w-2xl md:max-w-4xl">
          <div class="pb-6 mb-6 border-b border-gray-200">
            <h1
              class="mb-3 text-2xl font-bold leading-relaxed text-left text-gray-900 md:leading-tight md:text-4xl capitalize"
              itemprop="headline"
            >
              {{ post.title }}
            </h1>
            <p class="text-base text-gray-500">
              {{ $moment(getDate).format("ll") }} — {{ post.by }}
            </p>
          </div>
          <div class="flex items-center mb-6 space-x-2">
            <p class="text-gray-600">{{ $t("share_this_article") }}</p>
            <ShareNetwork
              network="facebook"
              :url="getSharePath"
              :title="post.title"
              :description="post.description"
              :media="post.media"
              class="text-gray-600 hover:text-gray-900 widget"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="flex-none w-5 h-5"
                fill="#fffff"
              >
                <path
                  d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
                />
              </svg>
            </ShareNetwork>
            <ShareNetwork
              network="twitter"
              :url="getSharePath"
              :title="post.title"
              :description="post.description"
              :media="post.media"
              class="text-gray-600 hover:text-gray-900 widget"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="flex-none w-5 h-5"
                fill="#fffff"
              >
                <path
                  d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
                />
              </svg>
            </ShareNetwork>
            <ShareNetwork
              network="telegram"
              :url="getSharePath"
              :title="post.title"
              :description="post.description"
              :media="post.media"
              class="text-gray-600 hover:text-gray-900 widget"
            >
              <img src="/telegram_black.png" class="w-6" />
            </ShareNetwork>
          </div>
          <div class="flex items-center mb-6 space-x-2">
            <a :href="post.git" target="_blank">
              <div>
                <a
                  :href="post.git"
                  target="_blank"
                  class="inline-flex items-center py-2 px-3 space-x-2 rounded-md bg-gray-800 text-gray-300 text-sm leading-5 font-medium shadow-lg hover:bg-gray-700 transition ease-in-out duration-100"
                >
                  <LazyLogosGitHubLogo />
                  <span>{{ $t("get_source_code") }}</span>
                </a>
              </div>
            </a>
          </div>
          <img
            :src="post.media"
            class="object-cover w-full h-64 bg-center rounded"
          />
          <!--          <adsbygoogle-->
          <!--            class="py-4"-->
          <!--            ad-layout="in-article"-->
          <!--            ad-format="fluid"-->
          <!--            :ad-slot="$config.GOOGLE_ADSENSE_SLOT.toString()"-->
          <!--          />-->
        </div>
        <div class="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
          <nuxt-content
            :document="post"
            class="px-4 pb-20 max-w-2xl md:max-w-4xl mx-auto prose prose-sm sm:prose lg:prose-lg text-justify"
          />
          <!--          <adsbygoogle-->
          <!--            class="py-4"-->
          <!--            ad-layout="in-article"-->
          <!--            ad-format="fluid"-->
          <!--            :ad-slot="$config.GOOGLE_ADSENSE_SLOT.toString()"-->
          <!--          />-->
          <Comments class="max-w-2xl md:max-w-4xl mx-auto" />
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import { format } from "date-fns";
import Comments from "@/components/global/comments";
export default {
  components: { Comments },
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const defaultLocale = app.i18n.locale;
    const post = await $content(`${defaultLocale}/project/${slug}`, {
      text: true,
    }).fetch();
    return {
      post,
    };
  },
  head() {
    return {
      title: this.post.token,
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
  computed: {
    getDate() {
      return format(new Date(this.post.createdAt), "dd/MM/yyyy");
    },
    getSharePath() {
      return this.$config.WEB_URL + this.$route.path;
    },
  },
};
</script>
