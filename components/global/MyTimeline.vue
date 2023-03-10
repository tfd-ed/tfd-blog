<template>
  <section class="text-gray-600">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-11/12 md:w-1/2">
        <div v-for="(item, index) in biography" :key="index">
          <div v-if="index === biography.length - 1" class="flex relative">
            <div
              class="flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center text-white relative z-10 translate-x-1/2"
              :class="color"
            ></div>
            <div class="flex-grow pl-4 -mt-6">
              <p
                class="font-bold title-font text-lg text-gray-900 tracking-wider"
              >
                {{ item.note }}
              </p>
              <p class="leading-tight">
                {{ item.note2 }}
              </p>
              <p class="leading-tight">
                {{ item.note3 }}
              </p>
              <p v-if="item.to" class="leading-relaxed">
                {{ $moment(item.date).format("MMMM YYYY") }} -
                {{
                  item.to === "Present" || item.to === "បច្ចុប្បន្ន"
                    ? item.to
                    : $moment(item.to).format("MMMM YYYY")
                }}
              </p>
              <p v-else class="leading-relaxed">
                {{ $moment(item.date).format("MMMM YYYY") }}
              </p>
            </div>
          </div>
          <div v-else class="flex relative pb-2">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center text-white relative z-10 translate-x-1/2"
              :class="color"
            ></div>
            <div class="flex-grow pl-4 -mt-6">
              <p
                class="font-bold title-font text-lg text-gray-900 tracking-wider"
              >
                {{ item.note }}
              </p>
              <p class="leading-tight">
                {{ item.note2 }}
              </p>
              <p class="leading-tight">
                {{ item.note3 }}
              </p>
              <p v-if="item.to" class="leading-relaxed">
                {{ $moment(item.date).format("MMMM YYYY") }} -
                {{
                  item.to === "Present" || item.to === "បច្ចុប្បន្ន"
                    ? item.to
                    : $moment(item.to).format("MMMM YYYY")
                }}
              </p>
              <p v-else class="leading-relaxed">
                {{ $moment(item.date).format("MMMM YYYY") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    biography: {
      type: Array,
    },
    color: {
      type: String,
      default: "bg-green-500",
    },
  },
};
</script>
