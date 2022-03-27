<template>
  <div class="text-gray-600 body-font">
    <div class="container px-5 py-6 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <XyzTransition
          appear-visible
          class="rounded-lg h-64 overflow-hidden"
          xyz="fade back-1 small-50% ease-out stagger-2 perspective-2"
        >
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            src="/front_cover.png"
          />
        </XyzTransition>
        <!--        <div class="rounded-lg h-64 overflow-hidden">-->
        <!--          <img-->
        <!--            alt="content"-->
        <!--            class="object-cover object-center h-full w-full"-->
        <!--            src="/front_cover.png"-->
        <!--          />-->
        <!--        </div>-->
        <XyzTransitionGroup
          appear-visible
          class="flex flex-col sm:flex-row mt-10"
          xyz="fade back-1 small-50% ease-out stagger-2 perspective-2"
        >
          <div :key="1" class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div
              class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
            >
              <nuxt-img
                src="/founder.jpeg"
                class="object-cover rounded-full"
              ></nuxt-img>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2
                class="font-medium title-font mt-4 text-gray-900 text-lg capitalize"
              >
                {{ $t("chau_dara") }}, {{ $t("founder") }}
              </h2>
              <div class="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
              <p
                class="text-base text-justify capitalize"
                v-html="$t('chau_dara_quote')"
              ></p>
            </div>
          </div>
          <div
            :key="2"
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
          >
            <p
              class="leading-relaxed text-lg mb-4 text-justify"
              v-html="$t('tfd_mission')"
            ></p>
            <div class="flex flex-col space-y-4 mt-4">
              <!--              <youtube-subscribe-button-->
              <!--                identifier="my-subscribe-button"-->
              <!--                :channelid="$config.YOUTUBE_CHANNEL_ID"-->
              <!--                layout="default"-->
              <!--                theme="dark"-->
              <!--                :count="true"-->
              <!--              ></youtube-subscribe-button>-->
              <nuxt-link
                :to="localePath('blog')"
                class="text-red-500 inline-flex items-center capitalize"
                >{{ $t("read_articles") }}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
              <nuxt-link
                :to="localePath('project')"
                class="text-red-500 inline-flex items-center"
                >{{ $t("our_project") }}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </XyzTransitionGroup>
      </div>
    </div>
  </div>
</template>
