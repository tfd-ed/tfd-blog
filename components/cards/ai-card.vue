<template>
  <div
    class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10 cursor-pointer"
  >
    <slot name="icon"></slot>

    <h2 class="mt-4 text-xl font-bold text-white">
      {{ $t(title) }} - Coming Soon
    </h2>

    <p class="mt-1 text-sm text-gray-300">
      {{ $t(description) }}
    </p>
  </div>
  <!-- <nuxt-link
    class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
    :to="path"
  >
    <slot name="icon"></slot>

    <h2 class="mt-4 text-xl font-bold text-white">{{ $t(title) }}</h2>

    <p class="mt-1 text-sm text-gray-300">
      {{ $t(description) }}
    </p>
  </nuxt-link> -->
</template>
<script>
export default {
  props: ["path", "title", "description"],
};
</script>
