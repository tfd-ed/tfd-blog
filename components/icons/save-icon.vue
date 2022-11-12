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
        d="M50,1H14c-2.209,0-4,1.791-4,4v55c0,0.356,0.189,0.686,0.498,0.865c0.308,0.179,0.688,0.181,0.998,0.003 L32,49.152l20.504,11.716C52.657,60.956,52.829,61,53,61c0.174,0,0.347-0.045,0.502-0.135C53.811,60.686,54,60.356,54,60V5 C54,2.791,52.209,1,50,1z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: "SaveIcon",
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
