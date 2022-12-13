<template>
  <section>
    <div class="px-4 py-6 mx-auto">
      <div class="max-w-6xl pt-24 mx-auto">
        <div class="mb-6 text-left md:text-center">
          <h1
            class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
          >
            {{ $t("course") }}
          </h1>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-black"></div>
          </div>
          <div class="relative flex justify-start">
            <span class="pr-3 text-lg font-medium text-neutral-600 bg-white">
              {{ $t("all_course") }}
            </span>
          </div>
        </div>
        <div class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <!--            <client-only>-->
            <!--              <XyzTransitionGroup-->
            <!--                appear-visible-->
            <!--                class="flex flex-wrap -m-4 justify-center"-->
            <!--                xyz="fade front-1 stagger-2 ease-out delay-2"-->
            <!--              >-->
            <!--                <LazyCardsCourseCard-->
            <!--                  v-for="(course, index) in courses"-->
            <!--                  :key="index"-->
            <!--                  :course="course"-->
            <!--                ></LazyCardsCourseCard>-->
            <!--              </XyzTransitionGroup>-->
            <!--            </client-only>-->
            <div class="flex flex-wrap -m-4 justify-center">
              <LazyCardsCourseCard
                v-for="(course, index) in courses"
                :key="index"
                :course="course"
              ></LazyCardsCourseCard>
            </div>
          </div>
        </div>
        <client-only>
          <infinite-loading spinner="circles" @infinite="infiniteScroll">
            <div slot="no-more">{{ $t("no_more") }}</div>
            <div slot="no-results">{{ $t("no_results") }}</div>
          </infinite-loading>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
// import CourseCard from "../../components/cards/course-card";
import { createHelpers } from "vuex-map-fields";
const { mapMultiRowFields, mapFields } = createHelpers({
  getterType: "course/getField",
  mutationType: "course/updateField",
});
export default {
  data() {
    return {
      page: 1,
      limit: 9,
    };
  },
  auth: "guest",
  head() {
    return {
      title: this.$config.SITE_TITLE + " | " + this.$t("course"),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content:
            "TFDevs is a new initiative aiming at bringing uncovered facts that people might not be aware of to the public.",
        },
        {
          property: "og:title",
          hid: "og:title",
          content: this.$config.SITE_TITLE + " | " + this.$t("course"),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/front_cover.png",
        },
      ],
    };
  },
  computed: {
    ...mapMultiRowFields(["courses"]),
    ...mapFields(["coursesFetchSize"]),
  },
  mounted() {
    this.clear();
  },
  methods: {
    ...mapActions({
      fetchCourses: "course/fetchCourses",
    }),
    ...mapMutations({
      clear: "course/CLEAR",
    }),
    infiniteScroll($state) {
      setTimeout(async () => {
        await this.fetchCourses({ page: this.page, limit: this.limit });
        if (this.coursesFetchSize) {
          this.page++;
          $state.loaded();
        } else {
          $state.complete();
        }
      }, 500);
    },
  },
};
</script>
