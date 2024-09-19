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
            <div class="bg-white items-center">
              <img class="object-contain w-full h-40" :src="item.icon" />
            </div> </template
        ></AiCard>
      </div>

      <div class="mt-12 text-center">
        <div
          class="inline-block rounded bg-tfd px-12 py-3 text-lg font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-black cursor-pointer"
        >
          {{ $t("enroll") }} Data Science & AI
        </div>
        <!-- <nuxt-link
          to="/bootcamps/data-science-ai"
          class="inline-block rounded bg-tfd px-12 py-3 text-lg font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-black"
        >
          {{ $t("enroll") }} Data Science & AI
        </nuxt-link> -->
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
