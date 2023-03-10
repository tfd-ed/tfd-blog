<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div
        v-if="$fetchState.pending"
        class="transition lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full"
      >
        <GeneralContentLoading />
      </div>
      <div v-else-if="$fetchState.error || error"><NotFound /></div>
      <div v-else class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-4">
          <h2
            class="text-base text-red-600 tracking-widest font-medium title-font mb-1"
          >
            {{ getCourse.title }}
          </h2>
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
          >
            {{ getChapter($route.params.number).chapterNumber }} -
            {{ getChapter($route.params.number).name }}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            {{ getChapter($route.params.number).description }}
          </p>
        </div>
        <div class="flex flex-wrap justify-center">
          <client-only>
            <vimeo-player
              ref="player"
              :autoplay="true"
              class="video-container"
              :video-id="getChapter($route.params.number).vimeoId"
              @ready="onReady"
              @ended="goToNext"
            />
          </client-only>
        </div>
        <div class="flex flex-row justify-center space-x-4 pt-4">
          <ShadowButton
            v-if="parseInt($route.params.number) > 1"
            color="bg-gray-500"
            text="previous"
            @onClick="goToPrevious"
          ></ShadowButton>
          <ShadowButton
            v-if="parseInt($route.params.number) !== getCourse.chapters.length"
            color="bg-red-500"
            text="next"
            @onClick="goToNext"
          ></ShadowButton>
        </div>
        <Comments class="max-w-2xl md:max-w-4xl mx-auto" />
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ShadowButton from "@/components/buttons/shadow-button";
import GeneralContentLoading from "@/components/loadings/general-content-loading";
import NotFound from "@/components/errors/not-found";
import Comments from "@/components/global/comments";

export default {
  components: { Comments, NotFound, GeneralContentLoading, ShadowButton },
  middleware: "auth",
  data() {
    return {
      vimeoId: "",
      height: 500,
      options: {},
      playerReady: false,
      error: false,
    };
  },
  async fetch() {
    // this.$refs["vimeo-player"].play();
    const courseId = this.$route.params.slug;
    if (!this.getCourse) {
      await this.fetchCourse({ id: courseId });
    }
    /**
     * Verify Purchase ID
     * @type {string}
     */
    await this.fetchPurchase({
      id: this.getCourse.id,
      userId: this.getUser.id,
    });

    if (!this.getPurchase) {
      this.error = true;
    }
    /**
     * If not found execution return from server, display error in $fetchState.error
     */
  },
  head() {
    return {
      title:
        this.$config.SITE_TITLE +
        " | " +
        this.getCourse.title +
        " | " +
        this.$t("chapter") +
        " " +
        this.$route.params.number,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: this.getCourse.shortDescription,
        },
        {
          property: "og:title",
          hid: "og:title",
          content:
            this.$config.SITE_TITLE +
            " | " +
            this.getCourse.title +
            " | " +
            this.$t("chapter") +
            " " +
            this.$route.params.number,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.getCourse.thumbnail
            ? this.getCourse.thumbnail.path
            : "https://dummyimage.com/720x400",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getChapter: "course/getChapter",
      getChapterByNumber: "course/getChapterByNumber",
      getCourse: "course/getCourse",
      getUser: "loggedInUser",
      getPurchase: "course/getPurchase",
    }),
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 15000) {
      this.$fetch();
    }
  },
  beforeDestroy() {
    this.error = false;
  },
  methods: {
    ...mapActions({
      fetchCourse: "course/fetchCourse",
      fetchPurchase: "course/fetchCoursePurchase",
    }),
    goToNext() {
      const next = parseInt(this.$route.params.number) + 1;
      if (next) {
        this.$router.push(
          this.localePath(`/course/${this.$route.params.slug}/chapter/` + next)
        );
      }
    },
    goToPrevious() {
      const previous = parseInt(this.$route.params.number) - 1;
      if (previous) {
        this.$router.push(
          this.localePath(
            `/course/${this.$route.params.slug}/chapter/` + previous
          )
        );
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
