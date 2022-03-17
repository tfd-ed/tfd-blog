<template>
  <section class="px-4 py-24 mx-auto max-w-7xl">
    <div class="mb-24 text-left md:text-center">
      <h1
        class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
      >
        About Us
      </h1>
    </div>
    <div
      class="grid items-center w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-8 lg:gap-4 xl:w-3/4"
    >
      <div class="w-40 h-40 col-span-1 lg:col-span-2">
        <nuxt-img
          src="/founder.jpeg"
          class="object-cover w-full h-full bg-center rounded-md shadow-xl"
          alt="Kutty"
        />
      </div>
      <div class="col-span-1 lg:col-span-6">
        <h1
          class="mb-3 text-2xl font-extrabold text-purple-900 md:leading-tight md:text-4xl"
        >
          “If a user sees <span class="text-red-600">an error</span>, we’re
          notified immediately. It’s silly not to use an error monitoring tool
          like this when running anything at scale.“
        </h1>
        <p class="mb-5 text-lg font-semibold text-purple-900 md:text-xl">
          - Praveen Juge, Important Guy
        </p>
        <img
          src="/logos/google.svg"
          alt="Google Logo"
          class="block object-contain h-8"
        />
      </div>
    </div>
    <div class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div class="grid grid-cols-1 gap-24 md:grid-cols-2">
        <div>
          <h1 class="mb-6 text-2xl font-light text-gray-900 md:text-3xl">
            Basic Questions
          </h1>
          <p class="mt-10 mb-3 font-semibold text-gray-900">
            What is accessibility?
          </p>
          <p class="text-gray-600">
            This article starts off the module with a good look at what
            accessibility is — this includes what groups of people we need to
            consider and why, what tools different people use to interact with
            the web, and how we can make accessibility part of our web
            development workflow.
          </p>
          <p class="mt-10 mb-3 font-semibold text-gray-900">
            HTML: A good basis for accessibility?
          </p>
          <p class="text-gray-600">
            A great deal of web content can be made accessible just by making
            sure the correct HTML elements are always used for the correct
            purpose.
          </p>
          <p class="mt-10 mb-3 font-semibold text-gray-900">
            CSS and JavaScript accessibility best practices?
          </p>
          <p class="text-gray-600">
            CSS and JavaScript, when used properly, also have the potential to
            allow for accessible web experiences, but if misused they can
            significantly harm accessibility. This article outlines some CSS and
            JavaScript best practices that should be considered to ensure that
            even complex content is as accessible as possible.
          </p>
        </div>
        <div>
          <h1 class="mb-6 text-2xl font-light md:text-3xl">
            Advanced Questions
          </h1>
          <p class="mt-10 mb-3 font-semibold text-gray-900">
            WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?
          </p>
          <p class="text-gray-600">
            Following on from the previous article, sometimes making complex UI
            controls that involve unsemantic HTML and dynamic JavaScript-updated
            content can be difficult. WAI-ARIA is a technology that can help
            with such problems by adding in further semantics that browsers and
            assistive technologies can recognize and use to let users know what
            is going on. Here we'll show how to use it at a basic level to
            improve accessibility.
          </p>
          <p class="mt-10 mb-3 font-semibold text-gray-900">
            Accessible multimedia?
          </p>
          <p class="text-gray-600">
            Another category of content that can create accessibility problems
            is multimedia — video, audio, and image content need to be given
            proper textual alternatives, so they can be understood by assistive
            technologies and their users. This article shows how.
          </p>
          <p class="mt-10 mb-3 font-semibold text-gray-900">
            Mobile accessibility?
          </p>
          <p class="text-gray-600">
            With web access on mobile devices being so popular, and popular
            platforms such as iOS and Android.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
