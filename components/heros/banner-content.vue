<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="max-w-3xl">
        <h2 class="tfd-text text-3xl font-bold sm:text-4xl">
          {{ $t("technology_for_all") }}
        </h2>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="tfd-image relative h-64 overflow-hidden sm:h-80 lg:h-full">
          <img
            alt=""
            src="/tfd-front.jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="lg:py-16 tfd-text">
          <article class="space-y-4 text-gray-600">
            <p class="italic font-semibold text-lg">
              {{ $t("success_quote") }}
            </p>

            <p class="text-justify">
              {{ $t("learn_to_update") }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
