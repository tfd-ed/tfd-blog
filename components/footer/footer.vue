<template>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <div>
      <nuxt-link :to="localePath('/')"
        ><nuxt-img src="/tfd_logo.jpeg" class="w-12"></nuxt-img
      ></nuxt-link>
      <p>TFD<br />Teaching For Devs</p>
      <a :href="`mailto:${$config.EMAIL}`">{{ $config.EMAIL }}</a>
    </div>
    <div>
      <span class="footer-title">{{ $t("more") }}</span>
      <nuxt-link :to="localePath('about-us')" class="capitalize">{{
        $t("about_us")
      }}</nuxt-link>
      <!--      <nuxt-link :to="localePath('contact')" class="capitalize">{{-->
      <!--        $t("contact")-->
      <!--      }}</nuxt-link>-->
    </div>
    <div>
      <span class="footer-title">{{ $t("social") }}</span>
      <div class="grid grid-flow-col gap-4">
        <a href="https://t.me/tfdTech" target="_blank">
          <nuxt-img class="w-6" src="/telegram-svgrepo-com.svg"></nuxt-img>
        </a>
        <a :href="$config.YOUTUBE_URL" target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path></svg
        ></a>
        <a :href="$config.FACEBOOK_URL" target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            ></path></svg
        ></a>
        <a :href="$config.GITHUB_URL" target="_blank">
          <nuxt-img class="w-6" src="/github.png"></nuxt-img>
        </a>
      </div>
    </div>
  </footer>
</template>
