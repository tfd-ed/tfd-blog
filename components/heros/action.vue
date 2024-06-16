<template>
  <div class="mx-auto max-w-screen-xl px-4 py-4 lg:flex lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <YoutubeIcon class="w-48 md:w-52 mx-auto" />
      <h1 class="sub-text text-3xl font-extrabold sm:text-5xl">
        {{ $t("number_subscribers") }} -
        <span class="font-extrabold text-red-700">
          {{ subscriber.value }}
        </span>
      </h1>

      <p class="sub-text mt-4 sm:text-xl/relaxed">
        {{ $t("thanks_for_support") }}
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="https://youtube.com/@tfdevs"
          target="_blank"
        >
          {{ $t("watch_video") }}
        </a>

        <nuxt-link
          class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          to="/about-us"
        >
          {{ $t("about_us") }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import YoutubeIcon from "../icons/youtube-icon.vue";

export default {
  components: { YoutubeIcon },
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
      //Text
      this.$anime.set(".sub-text", {
        opacity: 0,
        translateY: 50,
      });

      this.$anime({
        targets: ".sub-text",
        opacity: 1,
        translateY: 0,
        delay: this.$anime.stagger(500),
        easing: "easeOutExpo",
      });

      const instance = this;
      var subscriber = {
        value: 0,
      };
      this.$anime({
        targets: subscriber,
        value: "32K",
        round: 1,
        easing: "linear",
        update: function () {
          instance.subscriber = subscriber;
        },
      });

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
