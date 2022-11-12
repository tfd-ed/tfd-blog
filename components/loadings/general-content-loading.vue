<template>
  <div class="flex flex-col justify-center">
    <ContentsLoader />
    <GeneralLoading text="loading" class="-mt-2" />
    <ContentsLoader />
  </div>
</template>
<script>
import GeneralLoading from "~/components/loadings/general-loading";
import ContentsLoader from "~/components/loadings/contents-loader";
export default {
  components: { ContentsLoader, GeneralLoading },
};
</script>
