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
        <!--        <div class="rounded-lg h-64 overflow-hidden">-->
        <!--          <img-->
        <!--            alt="content"-->
        <!--            class="object-cover object-center h-full w-full"-->
        <!--            :src="getCourse.thumbnail.url"-->
        <!--          />-->
        <!--        </div>-->
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
                  {{ $t("price") }}
                </p>
                <span
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
              <!--              <div class="flex flex-col space-y-2 text-left mt-4">-->
              <!--                <p class="text-gray-500 italic">-->
              <!--                  {{ $t("duration") }}-->
              <!--                </p>-->
              <!--                <span class="text-5xl font-black sm:text-6xl">{{ 314 }}</span>-->
              <!--              </div>-->
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
            <article
              class="prose lg:prose-lg leading-normal text-justify"
              v-html="getCourse.description"
            ></article>
            <div class="flex flex-wrap justify-center">
              <client-only>
                <vimeo-player
                  ref="player"
                  class="video-container"
                  :video-id="getCourse.promotionalVimeoLink"
                  @ready="onReady"
                />
              </client-only>
            </div>

            <!--            <a-->
            <!--              :href="getCourse.paymentLink"-->
            <!--              target="popup"-->
            <!--              @click.stop.prevent="openPayment(getCourse.paymentLink)"-->
            <!--              >Link to chart</a-->
            <!--            >-->
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
            <label v-if="!isAuth" for="login-modal" class="cursor-pointer">
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
                    ? $moment(purchase.createdDate).format("ll")
                    : ""
                }}
              </span>
            </button>
          </div>
        </div>
        <XyzTransitionGroup
          appear-visible
          class="mt-2 divide-y-2 divide-gray-100 xyz-none"
          xyz="fade small-1 stagger-4 ease-ease up-5 perspective-2"
        >
          <ChapterCard
            v-for="(chapter, index) in getCourse.chapters"
            :key="index"
            :chapter="chapter"
            :purchase="getPurchase"
          />
        </XyzTransitionGroup>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import GeneralContentLoading from "@/components/loadings/general-content-loading";
import LockedIcon from "@/components/icons/locked-icon";
import ProcessIcon from "@/components/icons/process-icon";
import ChapterCard from "@/components/cards/chapter-card";
import convertKhmerNumber from "@/utils/convert-khmer-number";
import ImageLoader from "@/components/loaders/image-loader";
import NotFound from "@/components/errors/not-found";

export default {
  components: {
    NotFound,
    ImageLoader,
    ChapterCard,
    ProcessIcon,
    LockedIcon,
    GeneralContentLoading,
  },
  data() {
    return {
      openPurchase: false,
      purchase: "",
    };
  },
  async fetch() {
    const param = this.$route.params.slug;
    await this.fetchCourse({ id: param });
    // if auth check user purchase
    if (this.isAuth) {
      await this.fetchPurchase({
        id: this.getCourse.id,
        userId: this.getUser.id,
      });
    }
  },
  head() {
    return {
      title: this.$config.SITE_TITLE + " | " + this.getCourse.title,
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
          content: this.$config.SITE_TITLE + " | " + this.getCourse.title,
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
      getCourse: "course/getCourse",
      isAuth: "isAuthenticated",
      getUser: "loggedInUser",
      getPurchase: "course/getPurchase",
    }),
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
    onReady(player) {
      this.playerReady = true;
      player.addCuePoint(10);
    },
    convertNumber(num) {
      return this.$i18n.locale === "km" ? convertKhmerNumber(num) : num;
    },
  },
};
</script>
