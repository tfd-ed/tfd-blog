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
        d="M31.46 6H16.54L6 16.54v14.91L16.54 42h14.91L42 31.46V16.54L31.46 6zM24 34.6c-1.43 0-2.6-1.16-2.6-2.6 0-1.43 1.17-2.6 2.6-2.6 1.43 0 2.6 1.16 2.6 2.6 0 1.44-1.17 2.6-2.6 2.6zm2-8.6h-4V14h4v12z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: "ReportIcon",
  props: {
    title: {
      type: String,
      default: "ic report 48px",
    },
    width: {
      type: Number,
      default: 25,
    },
  },
};
</script>
