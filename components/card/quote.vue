<template>
  <XyzTransitionGroup
    appear-visible
    class="grid items-center w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-8 lg:gap-4 xl:w-3/4"
    xyz="fade back-1 small-1 ease-out stagger-1 perspective-2"
  >
    <div key="1" class="w-40 h-40 col-span-1 lg:col-span-2">
      <slot name="image"> </slot>
    </div>
    <div key="2" class="col-span-1 lg:col-span-6 mt-6">
      <h1
        class="mb-3 text-xl font-bold text-gray-800 leading-loose md:text-2xl md:leading-relaxed"
      >
        “{{ $t(`${quote}`) }}“
      </h1>
      <p class="mb-5 text-lg font-semibold text-red-800 md:text-xl">
        - {{ $t(`${owner}`) }}
      </p>
    </div>
  </XyzTransitionGroup>
</template>
<script>
export default {
  props: ["quote", "owner"],
};
</script>
