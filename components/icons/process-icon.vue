<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 64 64"
    class="fill-current"
  >
    <title>{{ title }}</title>
    <g>
      <path
        d="M55,25H35.181l3.806-22.835c0.075-0.449-0.162-0.891-0.577-1.077c-0.414-0.186-0.902-0.068-1.188,0.285 l-29,36c-0.242,0.3-0.29,0.712-0.123,1.059C8.264,38.779,8.615,39,9,39h19.819l-3.806,22.835c-0.075,0.449,0.162,0.891,0.577,1.077 C25.723,62.972,25.862,63,26,63c0.296,0,0.585-0.131,0.779-0.373l29-36c0.242-0.3,0.29-0.712,0.123-1.059 C55.736,25.221,55.385,25,55,25z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Processing",
    },
    width: {
      type: Number,
      default: 25,
    },
  },
};
</script>
