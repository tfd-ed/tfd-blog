<template>
  <!--  <section class="px-4 py-24 mx-auto max-w-7xl">-->
  <!--    <h2-->
  <!--      class="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl"-->
  <!--    >-->
  <!--      All Articles-->
  <!--    </h2>-->
  <!--    <div class="w-full xl:w-4/6">-->
  <!--      <XyzTransitionGroup-->
  <!--        appear-visible-->
  <!--        class="flex flex-col space-y-16"-->
  <!--        xyz="fade small-1 stagger-4 ease-ease up-5"-->
  <!--      >-->
  <!--        <HorizontalCard :key="1"></HorizontalCard>-->
  <!--        <HorizontalCard :key="2"></HorizontalCard>-->
  <!--        <HorizontalCard :key="3"></HorizontalCard>-->
  <!--      </XyzTransitionGroup>-->
  <!--    </div>-->
  <!--  </section>-->

  <section>
    <div class="px-4 py-12 mx-auto">
      <div class="max-w-4xl pt-24 mx-auto">
        <div class="mb-24 text-left md:text-center">
          <h1
            class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl capitalize"
          >
            {{ $t("articles") }}
          </h1>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-black"></div>
          </div>
          <div class="relative flex justify-start">
            <span class="pr-3 text-lg font-medium text-neutral-600 bg-white">
              All Issues
            </span>
          </div>
        </div>
        <!--        <div class="space-y-8 lg:divide-y lg:divide-gray-100">-->
        <!--          <div class="pt-8 sm:flex lg:items-end group">-->
        <!--            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">-->
        <!--              <img-->
        <!--                class="object-cover rounded-md w-full h-32 col-span-1 bg-center"-->
        <!--                src="https://images.unsplash.com/photo-1616651181620-9906d6e43fc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0dGVybnxlbnwwfDJ8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"-->
        <!--                alt="text"-->
        <!--              />-->
        <!--            </div>-->
        <!--            <div>-->
        <!--              <span class="text-sm text-gray-500">August 20.20.21</span>-->
        <!--              <p class="mt-3 text-lg font-medium leading-6">-->
        <!--                <a-->
        <!--                  href="./blog-post.html"-->
        <!--                  class="text-xl text-neutral-600 group-hover:text-gray-500 lg:text-2xl"-->
        <!--                  >12 Graphic Design Skills You Need To Get Hired (&amp; How to-->
        <!--                  Develop Them)-->
        <!--                </a>-->
        <!--              </p>-->
        <!--              <p class="mt-2 text-lg text-gray-500">-->
        <!--                A wonderful serenity has taken possession of my entire soul,-->
        <!--                like these sweet mornings of spring which I enjoy with my whole-->
        <!--                heart.-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="pt-8 sm:flex lg:items-end group">-->
        <!--            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">-->
        <!--              <img-->
        <!--                class="w-full rounded-md lg:h-32 lg:w-32"-->
        <!--                src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80"-->
        <!--                alt="text"-->
        <!--              />-->
        <!--            </div>-->
        <!--            <div>-->
        <!--              <span class="text-sm text-gray-500">August 20.20.21</span>-->
        <!--              <p class="mt-3 text-lg font-medium leading-6">-->
        <!--                <a-->
        <!--                  href="./blog-post.html"-->
        <!--                  class="text-xl text-neutral-600 group-hover:text-gray-500 lg:text-2xl"-->
        <!--                  >Meet Now What? The essential new podcast for evolving-->
        <!--                  designers-->
        <!--                </a>-->
        <!--              </p>-->
        <!--              <p class="mt-2 text-lg text-gray-500">-->
        <!--                A wonderful serenity has taken possession of my entire soul,-->
        <!--                like these sweet mornings of spring which I enjoy with my whole-->
        <!--                heart.-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="pt-8 sm:flex lg:items-end group">-->
        <!--            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">-->
        <!--              <img-->
        <!--                class="w-full rounded-md lg:h-32 lg:w-32"-->
        <!--                src="https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1101&amp;q=80"-->
        <!--                alt="text"-->
        <!--              />-->
        <!--            </div>-->
        <!--            <div>-->
        <!--              <span class="text-sm text-gray-500">August 20.20.21</span>-->
        <!--              <p class="mt-3 text-lg font-medium leading-6">-->
        <!--                <a-->
        <!--                  href="./blog-post.html"-->
        <!--                  class="text-xl text-neutral-600 group-hover:text-gray-500 lg:text-2xl"-->
        <!--                  >B2B Branding: 5 tips to go from boring to extraordinary-->
        <!--                </a>-->
        <!--              </p>-->
        <!--              <p class="mt-2 text-lg text-gray-500">-->
        <!--                A wonderful serenity has taken possession of my entire soul,-->
        <!--                like these sweet mornings of spring which I enjoy with my whole-->
        <!--                heart.-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="pt-8 sm:flex lg:items-end group">-->
        <!--            <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">-->
        <!--              <img-->
        <!--                class="w-full rounded-md lg:h-32 lg:w-32"-->
        <!--                src="https://images.unsplash.com/photo-1623122245120-7eef6faa39c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG9mZmljZXxlbnwwfDJ8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"-->
        <!--                alt="text"-->
        <!--              />-->
        <!--            </div>-->
        <!--            <div>-->
        <!--              <span class="text-sm text-gray-500">August 20.20.21</span>-->
        <!--              <p class="mt-3 text-lg font-medium leading-6">-->
        <!--                <a-->
        <!--                  href="./blog-post.html"-->
        <!--                  class="text-xl text-neutral-600 group-hover:text-gray-500 lg:text-2xl"-->
        <!--                  >Building a Career in Character Design: A chat with Sarah Beth-->
        <!--                  Morgan-->
        <!--                </a>-->
        <!--              </p>-->
        <!--              <p class="mt-2 text-lg text-gray-500">-->
        <!--                A wonderful serenity has taken possession of my entire soul,-->
        <!--                like these sweet mornings of spring which I enjoy with my whole-->
        <!--                heart.-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <XyzTransitionGroup
          appear-visible
          class="flex flex-col space-y-16 lg:divide-y lg:divide-gray-100"
          xyz="fade small-1 stagger-1 ease-ease up-5"
        >
          <HorizontalCard :key="1"></HorizontalCard>
          <HorizontalCard :key="2"></HorizontalCard>
          <HorizontalCard :key="3"></HorizontalCard>
          <HorizontalCard :key="4"></HorizontalCard>
          <HorizontalCard :key="5"></HorizontalCard>
          <HorizontalCard :key="6"></HorizontalCard>
        </XyzTransitionGroup>
      </div>
    </div>
  </section>
</template>
<script>
import HorizontalCard from "@/components/card/horizontal-card";
export default {
  name: "Blog",
  components: { HorizontalCard },
  async asyncData(context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.locale;
    const posts = await $content(`${defaultLocale}/blog`).fetch();
    return {
      posts,
    };
  },
};
</script>
