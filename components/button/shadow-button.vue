<template>
  <div
    class="relative inline-block group focus:outline-none focus:ring cursor-pointer"
  >
    <span
      class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5"
      :class="color"
    ></span>

    <span
      class="relative inline-block px-4 py-1 text-sm font-bold tracking-widest uppercase border-2 border-black text-white"
      @click="handleClick"
    >
      <slot name="icon"></slot>
      {{ $t(text) }}
    </span>
  </div>
</template>
<script>
export default {
  name: "ShadowButton",
  props: ["text", "color"],
  emits: ["onClick"],
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
};
</script>
