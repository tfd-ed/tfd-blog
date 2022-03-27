<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <div class="mb-24 text-left md:text-center">
      <h1
        class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
      >
        {{ $t("about_us") }}
      </h1>
    </div>
    <Quote quote="founder_quote" owner="chau_dara">
      <template #image>
        <nuxt-img src="/founder.jpeg"></nuxt-img>
      </template>
    </Quote>
    <nuxt-content
      class="px-4 pb-20 max-w-2xl md:max-w-4xl mx-auto prose md:prose-xl text-justify"
      :document="about"
    ></nuxt-content>
    <!--    <div class="px-5 py-24 mx-auto">-->
    <!--      <div class="flex flex-col text-center w-full mb-20">-->
    <!--        <h1-->
    <!--          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"-->
    <!--        >-->
    <!--          Our Team-->
    <!--        </h1>-->
    <!--        <a-->
    <!--          class="lg:w-2/3 mx-auto leading-relaxed text-base text-blue-700"-->
    <!--          href="mailto:name@email.com"-->
    <!--          >info@tfdevs.com</a-->
    <!--        >-->
    <!--        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">-->
    <!--          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical-->
    <!--          gentrify, subway tile poke farm-to-table. Franzen you probably haven't-->
    <!--          heard of them.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--      <div class="flex flex-wrap -m-2">-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/80x80"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">-->
    <!--                Holden Caulfield-->
    <!--              </h2>-->
    <!--              <p class="text-gray-500">UI Designer</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/84x84"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>-->
    <!--              <p class="text-gray-500">CTO</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/88x88"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>-->
    <!--              <p class="text-gray-500">Founder</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/90x90"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">John Doe</h2>-->
    <!--              <p class="text-gray-500">DevOps</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/94x94"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>-->
    <!--              <p class="text-gray-500">Software Engineer</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/98x98"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>-->
    <!--              <p class="text-gray-500">UX Researcher</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/100x90"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">-->
    <!--                Atticus Finch-->
    <!--              </h2>-->
    <!--              <p class="text-gray-500">QA Engineer</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/104x94"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>-->
    <!--              <p class="text-gray-500">System</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">-->
    <!--          <div-->
    <!--            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"-->
    <!--          >-->
    <!--            <img-->
    <!--              alt="team"-->
    <!--              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"-->
    <!--              src="https://dummyimage.com/108x98"-->
    <!--            />-->
    <!--            <div class="flex-grow">-->
    <!--              <h2 class="text-gray-900 title-font font-medium">-->
    <!--                Rodrigo Monchi-->
    <!--              </h2>-->
    <!--              <p class="text-gray-500">Product Manager</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <AbaDonation />
  </section>
</template>
<script>
import Quote from "@/components/card/quote";
import AbaDonation from "@/components/card/aba-donation";
export default {
  components: { AbaDonation, Quote },
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const about = await $content(`${defaultLocale}/about-us`).fetch();
    return { about };
  },
  head() {
    return {
      title: this.about.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: this.about.description,
        },
        {
          property: "og:title",
          hid: "og:title",
          content: this.about.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.about.media,
        },
      ],
    };
  },
};
</script>
