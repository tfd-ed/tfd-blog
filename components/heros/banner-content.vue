<template>
  <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
    <div class="tfd-image relative z-10 lg:py-16">
      <div class="relative h-64 sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>

    <div class="tfd-text relative flex items-center bg-gray-100">
      <span
        class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
      ></span>

      <div class="p-8 sm:p-16 lg:p-24">
        <h2 class="text-2xl font-bold sm:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>

        <ShadowButton text="get_in_touched" color="bg-red-600" />
      </div>
    </div>
  </div>
</template>

<script>
import ShadowButton from "../buttons/shadow-button.vue";
export default {
  components: {
    ShadowButton,
  },
  mounted() {
    this.setAnimation();
  },
  methods: {
    setAnimation() {
      this.$anime.set(".tfd-image", {
        opacity: 0,
        translateX: -100,
      });

      this.$anime({
        targets: ".tfd-image",
        opacity: 1,
        translateX: 20,
        duration: 3000,
        easing: "easeOutExpo",
      });

      this.$anime.set(".tfd-text", {
        opacity: 0,
        translateX: 400,
      });

      this.$anime({
        targets: ".tfd-text",
        opacity: 1,
        translateX: 20,
        duration: 2000,
        easing: "easeOutExpo",
      });
    },
  },
};
</script>
