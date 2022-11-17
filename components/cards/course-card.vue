<template>
  <div class="p-4 w-full md:w-1/2">
    <div
      v-if="$fetchState.pending"
      class="transition h-full rounded-lg p-8 flex flex-col mx-auto w-full"
    >
      <GeneralLoading text="loading" />
    </div>
    <div v-else class="h-full shadow-2xl rounded-lg overflow-hidden">
      <nuxt-link :to="localePath('/course/' + course.titleURL)">
        <!--        <img-->
        <!--          class="lg:h-48 md:h-36 w-full object-cover object-center transform hover:scale-105 transition duration-700 ease-out"-->
        <!--          :src="-->
        <!--            course.thumbnail-->
        <!--              ? course.thumbnail.path-->
        <!--              : 'https://dummyimage.com/720x400'-->
        <!--          "-->
        <!--          alt="blog"-->
        <!--        />-->
        <ImageLoader
          id="course-viewer"
          class="lg:h-48 md:h-36 w-full object-cover object-center transform hover:scale-105 transition duration-700 ease-out"
          :src="
            course.thumbnail
              ? course.thumbnail.path
              : 'https://dummyimage.com/720x400'
          "
          alt="blog"
        />
      </nuxt-link>

      <div class="p-6">
        <h2
          class="tracking-widest text-base title-font font-medium text-gray-400 mb-1"
        >
          {{ course.category.name }}
        </h2>
        <nuxt-link
          :to="localePath('/course/' + course.titleURL)"
          class="title-font font-semibold text-lg text-gray-900 mb-3 hover:underline"
        >
          {{ course.title }}
        </nuxt-link>
        <p class="leading-relaxed mb-3">
          {{ getShortContents(course.shortDescription, 90) }}
        </p>

        <div class="flex items-center flex-wrap">
          <nuxt-link :to="localePath('/course/' + course.titleURL)">
            <ShadowButton
              v-if="!purchase"
              class="inline-flex items-center md:mb-2 lg:mb-0"
              color="bg-red-700"
              text="enroll"
            ></ShadowButton>
            <ShadowButton
              v-else
              :text="
                purchase.status === 'VERIFIED'
                  ? 'learn'
                  : 'confirming_payment_short'
              "
              :color="
                purchase.status === 'VERIFIED'
                  ? 'bg-green-600'
                  : 'bg-yellow-600'
              "
            >
              <template #icon
                ><ProcessIcon class="inline" width="15"></ProcessIcon
              ></template>
            </ShadowButton>
          </nuxt-link>
          <!--          <span-->
          <!--            class="text-gray-800 text-xl mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1"-->
          <!--          >-->
          <!--            <svg-->
          <!--              xmlns="http://www.w3.org/2000/svg"-->
          <!--              width="24"-->
          <!--              height="24"-->
          <!--              viewBox="0 0 48 48"-->
          <!--            >-->
          <!--              <title>ic_attach_money_48px</title>-->
          <!--              <g fill="#34495e">-->
          <!--                <path-->
          <!--                  d="M23.6 21.8c-4.54-1.18-6-2.39-6-4.29 0-2.18 2.01-3.71 5.4-3.71 3.56 0 4.88 1.7 5 4.2h4.42c-.13-3.45-2.24-6.59-6.42-7.62V6h-6v4.32c-3.88.85-7 3.35-7 7.22 0 4.62 3.83 6.92 9.4 8.26 5.01 1.2 6 2.95 6 4.83 0 1.37-.97 3.57-5.4 3.57-4.12 0-5.75-1.85-5.96-4.2h-4.41c.25 4.38 3.52 6.83 7.37 7.66V42h6v-4.3c3.89-.75 7-3 7-7.11 0-5.66-4.86-7.6-9.4-8.79z"-->
          <!--                ></path>-->
          <!--              </g></svg-->
          <!--            >{{ course.price }}-->
          <!--          </span>-->
          <span
            class="text-green-600 text-2xl font-extrabold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1 border-r-2 border-gray-200"
          >
            ${{ course.price }}
          </span>
          <span
            class="text-gray-900 text-lg inline-flex items-center leading-none text-sm"
          >
            <DurationIcon width="20" class="mr-2" />
            {{ totalDuration }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShadowButton from "../buttons/shadow-button";
import { mapGetters, mapMutations } from "vuex";
import GeneralLoading from "../loadings/general-loading";
import ProcessIcon from "../icons/process-icon";
import DurationIcon from "../icons/duration-icon";
import ImageLoader from "@/components/loaders/image-loader";
import format from "format-duration";
export default {
  components: {
    ImageLoader,
    DurationIcon,
    ProcessIcon,
    GeneralLoading,
    ShadowButton,
  },
  props: {
    course: {
      type: Object,
      default() {
        return {
          id: "",
          title: "",
          description: "",
          instructor: "",
          price: "",
          thumbnail: {
            url: "",
          },
          chapters: [],
          category: {
            name: "",
          },
          paymentLink: "",
        };
      },
    },
  },
  data() {
    return {
      purchase: "",
      totalDuration: 0,
    };
  },
  async fetch() {
    if (this.isAuth) {
      this.purchase = await this.$axios.$get(
        `/v1/courses/${this.course.id}/user-purchase/${this.loggedUser.id}`
      );
    }
    for (let chapter of this.course.chapters) {
      this.totalDuration += parseInt(chapter.duration);
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "isAuthenticated",
      loggedUser: "loggedInUser",
    }),
  },
  methods: {
    ...mapMutations({
      setDuration: "course/SET_COURSE_DURATION",
    }),
    getShortContents(content, length) {
      let count = content.length;
      if (count < length) {
        this.trimmed = false;
        return content;
      } else {
        return content.substring(0, length) + " ...";
      }
    },
    formatD(second) {
      return format(1000 * parseInt(second));
    },
  },
};
</script>
