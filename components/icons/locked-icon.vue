<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 48 48"
    class="fill-current"
  >
    <title>{{ title }}</title>
    <g>
      <path
        d="M15,19v-7c0-4.962,4.038-9,9-9s9,4.038,9,9h2c0-6.065-4.935-11-11-11S13,5.935,13,12v7H15z"
      ></path>
      <path
        d="M39,21H9c-1.105,0-2,0.895-2,2v22c0,1.105,0.895,2,2,2h30c1.105,0,2-0.895,2-2V23C41,21.895,40.105,21,39,21 z M25,36.899V41h-2v-4.101c-2.282-0.463-4-2.48-4-4.899c0-2.761,2.239-5,5-5s5,2.239,5,5C29,34.419,27.282,36.436,25,36.899z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "lock open",
    },
    width: {
      type: Number,
      default: 25,
    },
  },
};
</script>
