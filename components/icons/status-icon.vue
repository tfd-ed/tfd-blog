<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 48 48"
    class="fill-current"
  >
    <title>bookmark-2</title>
    <g
      stroke-linecap="square"
      stroke-linejoin="miter"
      stroke-width="4"
      fill="none"
      stroke="#34495e"
      stroke-miterlimit="10"
    >
      <polygon
        points="40,44 24,34 8,44 8,2 40,2 "
        transform="translate(0, 0)"
      ></polygon>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "ic monetization on 48px",
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
};
</script>
