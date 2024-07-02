<template>
  <article
    class="flex bg-white transition hover:shadow-blue-800/50 hover:shadow-xl"
  >
    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <time
        datetime="2022-10-10"
        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
      >
        <span>{{ $t("class_start") }}</span>
        <span class="w-px flex-1 bg-gray-900/10"></span>
        <span>Oct 10</span>
      </time>
    </div>

    <div class="hidden sm:block sm:basis-56">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        class="aspect-square h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-1 flex-col justify-between">
      <div
        class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
      >
        <a href="#">
          <h3 class="font-bold uppercase text-gray-900">
            {{ $t(title) }}
          </h3>
        </a>

        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
          {{ $t(description) }}
        </p>
      </div>

      <div class="sm:flex sm:items-end sm:justify-end">
        <a
          href="#"
          class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
        >
          {{ $t("enroll") }}
        </a>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: ["path", "title", "description"],
};
</script>
