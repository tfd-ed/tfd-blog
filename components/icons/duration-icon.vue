<template>
  <svg
    stroke="currentColor"
    viewBox="0 0 24 24"
    fill="none"
    :width="width"
    :height="width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Saved",
    },
    width: {
      type: Number,
      default: 25,
    },
  },
};
</script>
