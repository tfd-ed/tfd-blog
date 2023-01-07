<template>
  <div class="p-4 w-full md:w-1/2">
    <div
      v-if="$fetchState.pending"
      class="transition h-full rounded-lg p-8 flex flex-col mx-auto w-full"
    >
      <GeneralLoading text="loading" />
    </div>
    <div
      v-else
      class="h-full w-full md:w-[23rem] lg:w-[32rem] shadow-2xl rounded-lg overflow-hidden"
    >
      <nuxt-link :to="localePath('/course/' + course.titleURL)">
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

      <div class="p-4">
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
          {{ getShortContents(course.shortDescription, 150) }}
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
                ><ProcessIcon class="inline" :width="15"></ProcessIcon
              ></template>
            </ShadowButton>
          </nuxt-link>
          <span
            v-if="course.type === 'PAID'"
            class="text-green-600 text-2xl font-mono font-extrabold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1 border-r-2 border-gray-200"
          >
            ${{ course.price }}
          </span>
          <span
            v-else
            class="text-red-600 text-2xl font-extrabold mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1 border-r-2 border-gray-200"
          >
            {{ $t("free") }}
          </span>
          <span
            class="text-gray-900 text-xs inline-flex items-center leading-none"
          >
            <DurationIcon :width="20" class="mr-2" />
            {{ convertNumber(formatD(totalDuration)) }}
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
import convertKhmerNumber from "@/utils/convert-khmer-number";
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
      const purchase = await this.$axios.$get(
        `/v1/courses/${this.course.id}/user-purchase/${this.loggedUser.id}`
      );
      if (
        Object.keys(purchase).length === 0 &&
        purchase.constructor === Object
      ) {
        this.purchase = 0;
      } else {
        this.purchase = purchase;
      }
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "isAuthenticated",
      loggedUser: "loggedInUser",
    }),
  },
  mounted() {
    for (let chapter of this.course.chapters) {
      this.totalDuration += parseInt(chapter.duration);
    }
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
    convertNumber(num) {
      return this.$i18n.locale === "km" ? convertKhmerNumber(num) : num;
    },
  },
};
</script>
