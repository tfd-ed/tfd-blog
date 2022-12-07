<template>
  <div class="px-4 py-24 mx-auto max-w-7xl">
    <h1
      class="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase"
    >
      {{ $t("join_our_social_networks") }}
    </h1>

    <!--    <XyzTransitionGroup-->
    <!--      appear-visible-->
    <!--      class="flex flex-row justify-center gap-10"-->
    <!--      xyz="fade back-1 small-80% ease-out stagger-1 perspective-2"-->
    <!--    >-->
    <!--      <div-->
    <!--        v-for="(item, index) in social"-->
    <!--        :key="index"-->
    <!--        class="flex items-center justify-center"-->
    <!--      >-->
    <!--        <a :href="item.link" target="_blank">-->
    <!--          <img-->
    <!--            :src="item.src"-->
    <!--            :alt="item.alt"-->
    <!--            class="block object-contain h-12"-->
    <!--          />-->
    <!--        </a>-->
    <!--      </div>-->
    <!--    </XyzTransitionGroup>-->
    <div class="flex flex-row justify-center gap-10">
      <div
        v-for="(item, index) in social"
        :key="index"
        class="flex items-center justify-center"
      >
        <a :href="item.link" target="_blank">
          <img
            :src="item.src"
            :alt="item.alt"
            class="block object-contain h-12"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { socialLink } from "static/js/social";

export default {
  name: "SocialCard",
  data() {
    return {
      social: socialLink,
    };
  },
};
</script>
