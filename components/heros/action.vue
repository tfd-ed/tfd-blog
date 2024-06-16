<template>
  <div
    ref="counter"
    class="mx-auto max-w-screen-xl px-4 py-4 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Number of Subscribers
        <strong ref="subscriber" class="font-extrabold text-red-700 sm:block">
          {{ subscriber.value }}
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
        Thanks for your continued support, together we bring empowered
        technology education in Cambodia!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Watch video
        </a>

        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subscriber: {
        value: 0,
      },
    };
  },
  mounted() {
    this.setAnimation();
  },
  methods: {
    setAnimation() {
      const instance = this;
      var subscriber = {
        value: 0,
      };
      console.log(instance.$refs.subscriber);
      this.$anime({
        targets: subscriber,
        value: "32K",
        round: 1,
        easing: "linear",
        update: function () {
          instance.subscriber = subscriber;
        },
      });
    },
  },
};
</script>
