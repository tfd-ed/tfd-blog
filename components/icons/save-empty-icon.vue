<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 64 64"
  >
    <title>save-empty</title>
    <g
      stroke-linecap="square"
      stroke-linejoin="miter"
      stroke-width="2"
      fill="none"
      stroke="#212121"
      stroke-miterlimit="10"
    >
      <path
        d="M53,60L32,48L11,60V6 c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V60z"
        transform="translate(0, 0)"
      ></path>
    </g>
  </svg>
</template>
<script>
export default {
  name: "SaveEmptyIcon",
  props: ["width"],
};
</script>
