<template>
  <VLazyImage :src="src" alt="Periscope"></VLazyImage>
</template>
<script>
import VLazyImage from "v-lazy-image/v2";
export default {
  components: {
    VLazyImage,
  },
  props: {
    src: String,
  },
};
</script>

<style scoped>
.v-lazy-image {
  filter: blur(5px);
  transition: filter 1.6s;
  will-change: filter;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
