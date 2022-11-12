<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 48 48"
  >
    <title>{{ title }}</title>
    <g fill="#000000">
      <path
        d="M32 12l4.59 4.59-9.76 9.75-8-8L4 33.17 6.83 36l12-12 8 8 12.58-12.59L44 24V12z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: "TrendingIcon",
  props: {
    title: {
      type: String,
      default: "ic trending up 48px",
    },
    width: {
      type: Number,
      default: 25,
    },
  },
};
</script>
