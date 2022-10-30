<!--This form only works in production when you integrate your site with Netlify.-->
<template>
  <form method="POST" :action="$config.FORMSPREE" class="flex flex-wrap -m-2">
    <p class="hidden">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
    </p>
    <input type="hidden" name="form-name" value="Contact" />
    <div class="p-2 w-1/2">
      <div class="relative">
        <label for="name" class="leading-7 text-sm text-gray-600">{{
          $t("name")
        }}</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div class="p-2 w-1/2">
      <div class="relative">
        <label for="email" class="leading-7 text-sm text-gray-600">{{
          $t("email")
        }}</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
    <div class="p-2 w-full">
      <div class="relative">
        <label for="message" class="leading-7 text-sm text-gray-600">{{
          $t("message")
        }}</label>
        <textarea
          id="message"
          name="message"
          required
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
    </div>
    <!--    <div data-netlify-recaptcha="true"></div>-->
    <div class="p-2 w-full">
      <button
        type="submit"
        class="flex mx-auto text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
      >
        {{ $t("submit") }}
      </button>
    </div>
  </form>
</template>
