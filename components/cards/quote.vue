<template>
  <div class="px-4 py-12 mx-auto max-w-7xl">
    <!--    <XyzTransitionGroup-->
    <!--      appear-visible-->
    <!--      class="w-full mx-auto text-center md:w-4/5 lg:w-3/5"-->
    <!--      xyz="fade back-1 small-80% ease-out stagger-1 perspective-2"-->
    <!--    >-->
    <!--      <h1-->
    <!--        key="1"-->
    <!--        class="mb-3 text-xl font-bold text-gray-800 leading-loose md:text-2xl md:leading-relaxed"-->
    <!--      >-->
    <!--        “{{ $t(`${quote}`) }}”-->
    <!--      </h1>-->
    <!--      <p key="2" class="mb-5 text-lg font-semibold text-red-600 md:text-xl">-->
    <!--        {{ $t(`${owner}`) }}-->
    <!--      </p>-->
    <!--      <div key="3" class="mb-3 shadow-lg avatar">-->
    <!--        <div class="w-56 md:w-72 lg:w-96 rounded">-->
    <!--          <slot name="image"> </slot>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <p-->
    <!--        key="4"-->
    <!--        class="mb-3 text-xs font-normal text-gray-500 pt-2 text-center leading-loose"-->
    <!--      >-->
    <!--        {{ $t(`${image_quote}`) }}-->
    <!--      </p>-->
    <!--    </XyzTransitionGroup>-->
    <div class="w-full mx-auto text-center md:w-4/5 lg:w-3/5">
      <h1
        key="1"
        class="mb-3 text-xl font-bold text-gray-800 leading-loose md:text-2xl md:leading-relaxed"
      >
        “{{ $t(`${quote}`) }}”
      </h1>
      <p key="2" class="mb-5 text-lg font-semibold text-red-600 md:text-xl">
        {{ $t(`${owner}`) }}
      </p>
      <div key="3" class="mb-3 shadow-lg avatar">
        <div class="w-56 md:w-72 lg:w-96 rounded">
          <slot name="image"> </slot>
        </div>
      </div>
      <p
        key="4"
        class="mb-3 text-xs font-normal text-gray-500 pt-2 text-center leading-loose"
      >
        {{ $t(`${image_quote}`) }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  // props: ["quote", "owner", "image_quote"],
  props: {
    quote: "",
    owner: "",
    image_quote: {
      default: "",
    },
  },
};
</script>
