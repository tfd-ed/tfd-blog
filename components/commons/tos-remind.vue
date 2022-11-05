<template>
  <div class="mt-12 mx-auto text-center w-11/12">
    <p class="text-xs text-gray-500 leading-relaxed">
      {{ $t("by_creating_account") }}
      <nuxt-link :to="localePath('/tos')" class="text-green-500">{{
        $t("tos_privacy")
      }}</nuxt-link>
      {{ $t("receive_news") }}
    </p>
  </div>
</template>
