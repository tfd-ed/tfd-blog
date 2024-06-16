<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="max-w-3xl">
        <h2 class="text-3xl font-bold sm:text-4xl">
          Let's Speard Technology For All
        </h2>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
          <img
            alt=""
            src="/tfd-front.jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="lg:py-16">
          <article class="space-y-4 text-gray-600">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
              vel mollitia? Vel provident culpa dignissimos possimus,
              perferendis consectetur odit accusantium dolorem amet voluptates
              aliquid, ducimus tempore incidunt quas. Veritatis molestias
              tempora distinctio voluptates sint! Itaque quasi corrupti, sequi
              quo odit illum impedit!
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
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
