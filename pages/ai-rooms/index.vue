<template>
  <section class="bg-gray-900 text-white">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">
          {{ $t("welcome_to") }}
          <span class="text-blue-500">{{ $t("ai_portal") }}</span>
        </h2>

        <p class="mt-4 text-gray-300 text-justify">
          {{ $t("ai_room_description") }}
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AiCard
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
        ></AiCard>
      </div>

      <div class="mt-12 text-center">
        <nuxt-link
          to="/bootcamps/data-science-ai"
          class="inline-block rounded bg-tfd px-12 py-3 text-lg font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-black"
        >
          {{ $t("enroll") }} Data Science & AI
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import { rooms } from "../../static/js/ai-room.js";
import AiCard from "../../components/cards/ai-card.vue";
export default {
  components: { AiCard },
  data() {
    return {
      routes: rooms,
    };
  },
};
</script>
