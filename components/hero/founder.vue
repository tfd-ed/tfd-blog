<template>
  <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            src="/front_cover.png"
          />
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div
              class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
            >
              <nuxt-img
                src="/founder.jpeg"
                class="object-cover rounded-full"
              ></nuxt-img>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                Chau Dara, Founder
              </h2>
              <div class="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
              <p class="text-base">
                Raclette knausgaard hella meggs normcore williamsburg enamel pin
                sartorial venmo tbh hot chicken gentrify portland.
              </p>
            </div>
          </div>
          <div
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
          >
            <p class="leading-relaxed text-lg mb-4">
              Meggings portland fingerstache lyft, post-ironic fixie man bun
              banh mi umami everyday carry hexagon locavore direct trade art
              party. Locavore small batch listicle gastropub farm-to-table
              lumbersexual salvia messenger bag. Coloring book flannel truffaut
              craft beer drinking vinegar sartorial, disrupt fashion axe
              normcore meh butcher. Portland 90's scenester vexillologist forage
              post-ironic asymmetrical, chartreuse disrupt butcher paleo
              intelligentsia pabst before they sold out four loko. 3 wolf moon
              brooklyn.
            </p>
            <a class="text-red-500 inline-flex items-center"
              >Read Articles
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
            </a>
            <a class="text-red-500 inline-flex items-center"
              >Our Projects
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
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
