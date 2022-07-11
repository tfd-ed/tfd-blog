<template>
  <div class="py-8 flex flex-wrap md:flex-nowrap">
    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span class="font-semibold title-font text-2xl text-gray-700">{{
        chapter.chapterNumber
      }}</span>
      <span class="mt-1 text-gray-500 text-sm">{{
        $moment(chapter.createdDate).format("YYYY-MM-DD")
      }}</span>
    </div>
    <div class="md:flex-grow">
      <div v-if="!isAuth">
        <LockedIcon :width="25" />
        <h2
          class="text-2xl font-medium text-gray-500 title-font mb-2 hover:underline cursor-pointer"
        >
          {{ chapter.name }}
        </h2>
      </div>
      <nuxt-link v-else :to="localePath('/chapter/' + chapter.id)">
        <h2
          class="text-2xl font-medium text-gray-900 title-font mb-2 hover:underline"
        >
          {{ chapter.name }}
        </h2>
      </nuxt-link>

      <p class="leading-relaxed">
        {{ chapter.description }}
      </p>
      <nuxt-link
        v-if="isAuth"
        :to="localePath('/chapter/' + chapter.id)"
        class="text-red-600 inline-flex items-center mt-4 hover:underline"
      >
        {{ $t("learn") }}
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LockedIcon from "../icons/locked-icon";

export default {
  components: { LockedIcon },
  props: {
    chapter: {
      type: Object,
      default() {
        return {
          id: "",
          createdDate: "",
          updatedDate: "",
          deletedDate: null,
          name: "",
          chapterNumber: 0,
          description: "",
          url: null,
          vimeoId: "",
        };
      },
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "isAuthenticated",
    }),
  },
};
</script>
