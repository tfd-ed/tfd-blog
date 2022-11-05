<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 48 48"
  >
    <title>comment</title>
    <g fill="#00a8ff">
      <path
        d="M40 4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z"
      ></path>
    </g>
  </svg>
</template>
<script>
export default {
  name: "CommentIcon",
  props: ["width"],
};
</script>
