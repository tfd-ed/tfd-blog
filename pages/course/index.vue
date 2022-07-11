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
            <div class="flex flex-wrap -m-4">
              <XyzTransitionGroup
                appear-visible
                class="flex flex-wrap -m-4"
                xyz="fade small-1 stagger-4 ease-ease up-5"
                tag="CourseCard"
              >
                <CourseCard
                  v-for="(course, index) in courses"
                  :key="index"
                  :course="course"
                ></CourseCard>
              </XyzTransitionGroup>
            </div>
          </div>
        </div>
        <infinite-loading
          spinner="circles"
          @infinite="infiniteScroll"
        ></infinite-loading>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
import CourseCard from "../../components/card/course-card";
import { createHelpers } from "vuex-map-fields";
const { mapMultiRowFields, mapFields } = createHelpers({
  getterType: "course/getField",
  mutationType: "course/updateField",
});
export default {
  components: { CourseCard },
  data() {
    return {
      page: 1,
      limit: 9,
    };
  },
  computed: {
    ...mapMultiRowFields(["courses"]),
    ...mapFields(["coursesFetchSize"]),
  },
  methods: {
    ...mapActions({
      fetchCourses: "course/fetchCourses",
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
