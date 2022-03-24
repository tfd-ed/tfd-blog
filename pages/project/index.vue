<template>
  <section>
    <div class="px-4 py-12 mx-auto">
      <div class="max-w-4xl pt-24 mx-auto">
        <div class="mb-24 text-left md:text-center">
          <h1
            class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
          >
            {{ $t("project") }}
          </h1>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-black"></div>
          </div>
          <div class="relative flex justify-start">
            <span class="pr-3 text-lg font-medium text-neutral-600 bg-white">
              All Issues
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
      </div>
    </div>
  </section>
</template>
<script>
import HorizontalCard from "@/components/card/horizontal-card";
export default {
  components: { HorizontalCard },
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const projects = await $content(`${defaultLocale}/project`, {
      text: true,
    }).fetch();
    console.log(projects);
    return {
      projects: projects.map((project) => ({
        ...project,
        path: project.path.replace(`/${defaultLocale}`, ""),
      })),
    };
  },
};
</script>
