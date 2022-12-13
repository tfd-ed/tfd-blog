<template>
  <div class="py-8 flex flex-wrap md:flex-nowrap">
    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span class="font-semibold title-font text-2xl text-gray-800">{{
        convertNumber(chapter.chapterNumber)
      }}</span>
      <span class="mt-1 text-amber-600 text-sm">{{
        $moment(chapter.createdDate).format("ll")
      }}</span>
      <span class="mt-1 text-gray-600 text-sm items-center"
        ><DurationIcon :width="18" class="inline mb-1" />
        {{ convertNumber(formatD(chapter.duration)) }}
      </span>
    </div>
    <div class="md:flex-grow">
      <nuxt-link
        v-if="isAuth && purchase.status === 'VERIFIED'"
        :to="
          localePath(
            `/course/${getCourse.titleURL}/chapter/` + chapter.chapterNumber
          )
        "
      >
        <h2
          class="text-2xl font-semibold text-gray-900 title-font mb-2 hover:underline"
        >
          {{ chapter.name }}
        </h2>
      </nuxt-link>
      <div v-else>
        <LockedIcon :width="25" />
        <h2
          class="text-2xl font-medium text-gray-500 hover:underline cursor-pointer"
        >
          {{ chapter.name }}
        </h2>
      </div>
      <p class="leading-relaxed mt-2">
        {{ chapter.description }}
      </p>
      <nuxt-link
        v-if="isAuth && purchase.status === 'VERIFIED'"
        :to="
          localePath(
            `/course/${getCourse.titleURL}/chapter/` + chapter.chapterNumber
          )
        "
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
import convertKhmerNumber from "../../utils/convert-khmer-number";
import DurationIcon from "../icons/duration-icon";
const format = require("format-duration");

export default {
  components: { DurationIcon, LockedIcon },
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
    purchase: {
      type: Object,
      default() {
        return {
          status: "SUBMITTED",
        };
      },
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "isAuthenticated",
      getCourse: "course/getCourse",
    }),
  },
  methods: {
    formatD(second) {
      return format(1000 * parseInt(second), {
        leading: true,
      });
    },
    convertNumber(num) {
      return this.$i18n.locale === "km" ? convertKhmerNumber(num) : num;
    },
  },
};
</script>
