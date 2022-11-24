<template>
  <div class="pt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
    <ImageLoader
      :src="post.media"
      class="object-cover w-full h-40 col-span-1 bg-center"
    />
    <div class="col-span-1 md:col-span-3">
      <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">
        {{ post.publishedDate }}
      </p>
      <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
        <nuxt-link
          :to="localePath(post.path)"
          class="text-gray-900 hover:text-red-700 leading-relaxed"
          >{{ post.title }}</nuxt-link
        >
        <p
          v-if="$i18n.locale === 'en'"
          class="mb-3 text-sm font-normal text-gray-500"
        >
          {{ getReadingTime(post.text) }} min read
        </p>
        <p
          v-if="$i18n.locale === 'kh'"
          class="mb-3 text-xs font-normal text-gray-500 pt-2"
        >
          ចំណាយពេលអានអស់ប្រហែល {{ getReadingTime(post.text) }} នាទី
        </p>
      </h2>
      <p class="mb-3 text-sm font-normal text-gray-500">
        {{ post.description }}
      </p>
      <nuxt-link :to="post.path" class="btn btn-light btn-sm capitalize">{{
        $t("read_more")
      }}</nuxt-link>
    </div>
  </div>
</template>
<script>
import { readingTime } from "reading-time-estimator";
import ImageLoader from "@/components/loaders/image-loader";
export default {
  components: { ImageLoader },
  props: {
    post: Object,
  },
  data() {
    return {
      trimLength: 200,
      trimmed: true,
    };
  },
  methods: {
    getReadingTime(content) {
      const stats = readingTime(content);
      return stats.minutes;
    },
  },
};
</script>
