<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-4">
        <h2
          class="text-xs text-red-600 tracking-widest font-medium title-font mb-1"
        >
          {{ getCourse.title }}
        </h2>
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          {{ getChapter($route.params.id).chapterNumber }} -
          {{ getChapter($route.params.id).name }}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {{ getChapter($route.params.id).description }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center">
        <client-only>
          <vimeo-player
            ref="player"
            class="video-container"
            :video-id="getChapter($route.params.id).vimeoId"
            @ready="onReady"
          />
        </client-only>
      </div>
      <div class="flex flex-row justify-center space-x-4 pt-4">
        <ShadowButton
          v-if="parseInt(getChapter($route.params.id).chapterNumber) > 1"
          color="bg-gray-500"
          text="previous"
          @onClick="goToPrevious"
        ></ShadowButton>
        <ShadowButton
          color="bg-red-500"
          text="next"
          @onClick="goToNext"
        ></ShadowButton>
      </div>

      <!--      <button-->
      <!--        class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"-->
      <!--      >-->
      <!--        Next-->
      <!--      </button>-->
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import ShadowButton from "@/components/buttons/shadow-button";

export default {
  components: { ShadowButton },
  middleware: "auth",
  data() {
    return {
      vimeoId: "",
      height: 500,
      options: {},
      playerReady: false,
    };
  },
  computed: {
    ...mapGetters({
      getChapter: "course/getChapter",
      getChapterByNumber: "course/getChapterByNumber",
      getCourse: "course/getCourse",
    }),
  },
  // mounted() {
  //   this.$refs["vimeo-player"].play();
  //   // const param = this.$route.params.id;
  // },
  methods: {
    goToNext() {
      const next = this.getChapterByNumber(
        parseInt(this.getChapter(this.$route.params.id).chapterNumber) + 1
      );
      if (next) {
        this.$router.push(this.localePath("chapter/" + next.id));
      }
    },
    goToPrevious() {
      const previous = this.getChapterByNumber(
        parseInt(this.getChapter(this.$route.params.id).chapterNumber) - 1
      );
      if (previous) {
        this.$router.push(this.localePath("chapter/" + previous.id));
      }
    },
    onReady(player) {
      this.playerReady = true;

      player.addCuePoint(10);
    },
    // onCuepoint() {
    //   console.log("cuepoint reached");
    // },
    play() {
      this.$refs.player.play();
    },
    stop() {
      this.$refs.player.stop();
    },
  },
};
</script>
