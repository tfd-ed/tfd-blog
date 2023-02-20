<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div
        v-if="$fetchState.pending"
        class="transition lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full"
      >
        <GeneralContentLoading />
      </div>
      <div v-else-if="$fetchState.error"><NotFound /></div>
      <div v-else class="lg:w-4/6 mx-auto">
        <div class="flex flex-col sm:flex-row mt-10 mb-20">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <ImageLoader
              class="inline-flex h-20"
              :src="
                getCourse.thumbnail
                  ? getCourse.thumbnail.path
                  : 'https://dummyimage.com/720x400'
              "
            >
            </ImageLoader>

            <div class="flex flex-col">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                {{ getCourse.category.name }}
              </h2>
              <div class="w-12 h-1 bg-gray-500 rounded mt-2 mb-4 mx-auto"></div>
              <p class="text-base">
                {{ getCourse.category.description }}
              </p>
              <div class="flex flex-col space-y-2 text-left mt-4">
                <p class="text-gray-500 italic">
                  {{ getCourse.type === "PAID" ? $t("price") : $t("free") }}
                </p>
                <span
                  v-if="getCourse.type === 'PAID'"
                  class="text-5xl font-mono font-black text-green-700 sm:text-6xl"
                  >${{ getCourse.price }}</span
                >
              </div>
              <div
                v-if="getCourse.purchase > 0"
                class="flex flex-col space-y-2 text-left mt-4"
              >
                <p class="text-gray-500 italic">
                  {{ $t("students_enrolled") }}
                </p>
                <span class="text-5xl font-black sm:text-6xl">{{
                  convertNumber(getCourse.purchase)
                }}</span>
              </div>
              <div class="flex flex-col space-y-2 text-left mt-4">
                <p class="text-gray-500 italic">
                  {{ $t("number_of_chapters") }}
                </p>
                <span class="text-5xl font-black sm:text-6xl">{{
                  convertNumber(getCourse.chapters.length)
                }}</span>
              </div>
              <div class="flex flex-col space-y-2 text-left mt-4">
                <p class="text-gray-500 italic">
                  {{ $t("duration") }}
                </p>
                <span class="text-5xl font-black sm:text-6xl">{{
                  convertNumber(formatD(totalDuration))
                }}</span>
              </div>
            </div>
          </div>
          <div
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
          >
            <h2
              class="sm:text-3xl text-2xl text-gray-900 font-medium font-mono mb-2"
            >
              {{ getCourse.title }}
            </h2>
            <div class="flex items-center mb-6 space-x-2">
              <p class="text-gray-600">{{ $t("share_this_course") }}</p>

              <ShareNetwork
                network="facebook"
                :url="getSharePath"
                :title="getCourse.title"
                :description="getCourse.shortDescription"
                :media="
                  getCourse.thumbnail
                    ? getCourse.thumbnail.path
                    : 'https://dummyimage.com/720x400'
                "
                class="text-gray-600 hover:text-gray-900 widget"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="flex-none w-5 h-5"
                  fill="#fffff"
                >
                  <path
                    d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
                  />
                </svg>
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="getSharePath"
                :title="getCourse.title"
                :description="getCourse.shortDescription"
                :media="
                  getCourse.thumbnail
                    ? getCourse.thumbnail.path
                    : 'https://dummyimage.com/720x400'
                "
                class="text-gray-600 hover:text-gray-900 widget"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="flex-none w-5 h-5"
                  fill="#fffff"
                >
                  <path
                    d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
                  />
                </svg>
              </ShareNetwork>
              <ShareNetwork
                network="telegram"
                :url="getSharePath"
                :title="getCourse.title"
                :description="getCourse.shortDescription"
                :media="
                  getCourse.thumbnail
                    ? getCourse.thumbnail.path
                    : 'https://dummyimage.com/720x400'
                "
                class="text-gray-600 hover:text-gray-900 widget"
              >
                <img src="/telegram_black.png" class="w-6" />
              </ShareNetwork>
            </div>
            <article
              class="prose lg:prose-lg leading-normal text-justify"
              v-html="getCourse.description"
            ></article>
            <div class="flex flex-wrap justify-center">
              <!--              <client-only>-->
              <!--                <vimeo-player-->
              <!--                  ref="player"-->
              <!--                  class="video-container"-->
              <!--                  :video-id="getCourse.promotionalVimeoLink"-->
              <!--                  @ready="onReady"-->
              <!--                />-->
              <!--              </client-only>-->
              <vimeo-player
                ref="player"
                class="video-container mt-4 mb-4"
                :video-id="getCourse.promotionalVimeoLink"
                @ready="onReady"
              />
            </div>

            <!--            <a-->
            <!--              :href="getCourse.paymentLink"-->
            <!--              target="popup"-->
            <!--              @click.stop.prevent="openPayment(getCourse.paymentLink)"-->
            <!--              >Link to chart</a-->
            <!--            >-->
            <label
              v-if="!isAuth"
              for="user-registration-modal"
              class="cursor-pointer"
            >
              <div
                class="flex items-center justify-center w-full px-8 py-4 mt-4 text-white bg-blue-700 rounded-sm transition bg-blue-700 rounded hover:scale-110 hover:rotate-2 active:bg-blue-500 focus:outline-none focus:ring"
              >
                <LockedIcon class="text-white mr-2" :width="20" />
                <span class="text-sm font-medium">
                  {{ $t("login_to_purchase") }}
                </span>
              </div>
            </label>
            <button
              v-if="isAuth && getPurchase"
              disabled
              class="flex items-center justify-center w-full px-8 py-4 mt-4 text-white rounded-sm"
              :class="{
                'bg-green-700 hover:bg-green-500':
                  getPurchase.status === 'VERIFIED',
                'bg-yellow-600 hover:bg-yellow-500':
                  getPurchase.status === 'SUBMITTED',
              }"
            >
              <span class="text-lg font-semibold mr-2"
                >${{ getPurchase.price }}</span
              >
              <ProcessIcon class="text-white mr-2" :width="20" />
              <span class="text-sm font-medium">
                {{
                  getPurchase.status === "SUBMITTED"
                    ? $t("confirming_payment")
                    : $t("payment_confirmed")
                }}
                {{ getPurchase.status === "VERIFIED" ? $t("at") : "" }}
                {{
                  getPurchase.status === "VERIFIED"
                    ? $moment(getPurchase.createdDate).format("ll")
                    : ""
                }}
              </span>
            </button>
            <label
              v-if="isAuth && !getPurchase"
              for="purchase-modal"
              class="cursor-pointer"
            >
              <div
                class="flex flex-row items-center justify-between w-full px-8 py-4 mt-4 text-white bg-red-700 rounded-sm transition bg-red-600 rounded hover:scale-110 hover:rotate-2 active:bg-red-500 focus:outline-none focus:ring"
              >
                <svg
                  class="w-5 h-5 mr-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span class="text-sm font-medium"> {{ $t("buy") }}</span>
                <span class="ml-3 font-bold text-2xl">
                  ${{ getCourse.price }}</span
                >
              </div>
            </label>
          </div>
        </div>
        <!--        <XyzTransitionGroup-->
        <!--          appear-visible-->
        <!--          class="mt-2 divide-y-2 divide-gray-100 xyz-none"-->
        <!--          xyz="fade small-1 stagger-4 ease-ease up-5 perspective-2"-->
        <!--        >-->
        <!--          <ChapterCard-->
        <!--            v-for="(chapter, index) in orderBy(-->
        <!--              getCourse.chapters,-->
        <!--              'chapterNumber',-->
        <!--              true-->
        <!--            )"-->
        <!--            :key="index"-->
        <!--            :chapter="chapter"-->
        <!--            :purchase="getPurchase"-->
        <!--          />-->
        <!--        </XyzTransitionGroup>-->
        <div class="mt-2 divide-y-2 divide-gray-100 xyz-none">
          <ChapterCard
            v-for="(chapter, index) in orderBy(
              getCourse.chapters,
              'chapterNumber',
              true
            )"
            :key="index"
            :chapter="chapter"
            :purchase="getPurchase"
          />
        </div>
        <Comments class="max-w-2xl md:max-w-4xl mx-auto" />
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import GeneralContentLoading from "@/components/loadings/general-content-loading";
import LockedIcon from "@/components/icons/locked-icon";
import ProcessIcon from "@/components/icons/process-icon";
import ChapterCard from "@/components/cards/chapter-card";
import convertKhmerNumber from "@/utils/convert-khmer-number";
import ImageLoader from "@/components/loaders/image-loader";
import NotFound from "@/components/errors/not-found";
import Vue2Filters from "vue2-filters";
import format from "format-duration";
import Comments from "@/components/global/comments";

export default {
  components: {
    Comments,
    NotFound,
    ImageLoader,
    ChapterCard,
    ProcessIcon,
    LockedIcon,
    GeneralContentLoading,
  },
  mixins: [Vue2Filters.mixin],
  // auth: "guest",
  data() {
    return {
      openPurchase: false,
      totalDuration: 0,
      purchase: "",
    };
  },
  async fetch() {
    const param = this.$route.params.slug;
    await this.fetchCourse({ id: param });
    for (let chapter of this.getCourse.chapters) {
      this.totalDuration += parseInt(chapter.duration);
    }
    // if auth check user purchase
    if (this.isAuth) {
      await this.fetchPurchase({
        id: this.getCourse.id,
        userId: this.getUser.id,
      });
    }
  },
  head() {
    const title = this.$config.SITE_TITLE + " | " + this.getTitle;
    const description = this.getShortDescription;
    const image = this.getTB;
    const url = `https://www.tfdevs.com/course/${this.$route.params.slug}`;

    return {
      title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          property: "og:title",
          hid: "og:title",
          content: title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        { hid: "og:type", property: "og:type", content: "article" },
      ],
    };
  },
  fetchOnServer: false,
  computed: {
    ...mapGetters({
      getCourse: "course/getCourse",
      isAuth: "isAuthenticated",
      getUser: "loggedInUser",
      getPurchase: "course/getPurchase",
    }),
    getSharePath() {
      return this.$config.WEB_URL + this.$route.path;
    },
    getTitle() {
      return this.getCourse.title;
    },
    getShortDescription() {
      return this.getCourse.shortDescription;
    },
    getTB() {
      return this.getCourse.thumbnail
        ? this.getCourse.thumbnail.path
        : "https://dummyimage.com/720x400";
    },
  },
  // mounted() {
  //   if (this.isAuth) {
  //     this.initializeNotification();
  //   }
  // },
  beforeDestroy() {
    this.clearPurchase();
  },
  activated() {
    // Call fetch again if last fetch more than 15 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 15000) {
      this.$fetch();
    }
  },
  methods: {
    ...mapActions({
      fetchCourse: "course/fetchCourse",
      fetchPurchase: "course/fetchCoursePurchase",
    }),
    ...mapMutations({
      clearPurchase: "course/CLEAR_PURCHASE",
    }),
    onReady(player) {
      this.playerReady = true;
      player.addCuePoint(10);
    },
    convertNumber(num) {
      return this.$i18n.locale === "km" ? convertKhmerNumber(num) : num;
    },
    formatD(second) {
      return format(1000 * parseInt(second), {
        leading: true,
      });
    },
  },
};
</script>
