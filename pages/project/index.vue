<template>
  <section>
    <div class="px-4 py-6 mx-auto">
      <div class="max-w-4xl pt-24 mx-auto">
        <div class="mb-24 text-left md:text-center">
          <h1
            class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
          >
            {{ $t("projects") }}
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
            v-for="(project, $index) in projects"
            :key="`project-${$index}`"
            :post="project"
          ></HorizontalCard>
        </XyzTransitionGroup>
        <Confused v-if="projects.length === 0" />
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
  </section>
</template>
<script>
import HorizontalCard from "@/components/card/horizontal-card";
import Confused from "@/components/card/confused";
export default {
  components: { Confused, HorizontalCard },
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const tenProjects = await $content(`${defaultLocale}/project`, {
      text: true,
    })
      .sortBy("createdAt", "desc")
      .limit(10)
      .fetch();
    const nextPage = tenProjects.length === 10;
    const projects = nextPage ? tenProjects.slice(0, -1) : tenProjects;
    return {
      projects: projects.map((project) => ({
        ...project,
        path: project.path.replace(`/${defaultLocale}`, ""),
      })),
      nextPage,
    };
  },
};
</script>
