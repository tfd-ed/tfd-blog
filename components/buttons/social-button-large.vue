<template>
  <button
    class="flex items-center justify-center px-6 py-3 mt-4 bg-white text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
    @click="handleClick"
  >
    <img
      v-if="type === 'google'"
      class="w-6 h-6 mx-2"
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt=""
    />

    <img
      v-if="type === 'facebook'"
      class="w-6 h-6 mx-2"
      src="https://www.svgrepo.com/show/448224/facebook.svg"
      alt=""
    />

    <img
      v-if="type === 'github'"
      class="w-6 h-6 mx-2"
      src="https://www.svgrepo.com/show/512317/github-142.svg"
      alt=""
    />

    <span class="mx-2 capitalize">{{ $t("continue_with") }} {{ type }}</span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "google",
    },
  },
  methods: {
    handleClick() {
      if (this.type === "google") {
        this.$auth.loginWith("google", {
          params: { prompt: "select_account" },
        });
      } else {
        this.$auth.loginWith(this.type);
      }
    },
  },
};
</script>
