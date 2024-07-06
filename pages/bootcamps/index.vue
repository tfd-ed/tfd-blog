<template>
  <section class="bg-cove text-white">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">
          {{ $t("welcome_to") }}
          <span class="text-blue-500">{{ $t("bootcamp") }}</span>
        </h2>

        <p class="mt-4 text-gray-300 text-justify">
          {{ $t("bootcamps_description") }}
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <!-- <AiCard
          v-for="(item, index) in routes"
          :key="index"
          :title="item.title"
          :description="item.description"
          :path="item.path"
        >
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg> </template
        ></AiCard> -->
        <BootcampsCard
          v-for="(item, index) in routes"
          :key="index"
          :title="item.title"
          :description="item.description"
          :path="item.path"
          :launched="item.launched"
        >
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </template>
        </BootcampsCard>
      </div>
    </div>
  </section>
</template>
<script>
import { bootcamps } from "../../static/js/bootcamps.js";
import AiCard from "../../components/cards/ai-card.vue";
import BootcampsCard from "../../components/cards/bootcamp-card.vue";
export default {
  components: { AiCard, BootcampsCard },
  data() {
    return {
      routes: bootcamps,
    };
  },
};
</script>
