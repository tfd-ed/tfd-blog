<template>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <div>
      <nuxt-link :to="localePath('/')"
        ><img src="/tfd_logo.jpeg" class="w-12"
      /></nuxt-link>
      <p>TFD<br />Teaching For Devs</p>
      <a :href="`mailto:${$config.EMAIL}`">{{ $config.EMAIL }}</a>
    </div>
    <div>
      <span class="footer-title">{{ $t("more") }}</span>
      <nuxt-link :to="localePath('about-us')" class="capitalize">{{
        $t("about_us")
      }}</nuxt-link>
      <nuxt-link :to="localePath('contact-us')" class="capitalize">{{
        $t("contact")
      }}</nuxt-link>
      <nuxt-link :to="localePath('tos')" class="capitalize">{{
        $t("term_of_service")
      }}</nuxt-link>
      <nuxt-link :to="localePath('privacy')" class="capitalize">{{
        $t("privacy")
      }}</nuxt-link>
    </div>
    <div>
      <span class="footer-title">{{ $t("social") }}</span>
      <div class="grid grid-flow-col gap-4">
        <a href="https://t.me/tfdTech" target="_blank">
          <img class="w-6" src="/telegram-svgrepo-com.svg" alt="Telegram" />
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
        <a :href="$config.INSTAGRAM_URL" target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            class="fill-current"
          >
            <path
              d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
            ></path>
          </svg>
        </a>
        <a :href="$config.GITHUB_URL" target="_blank">
          <img class="w-6" src="/github.png" alt="Github" />
        </a>
      </div>
    </div>
  </footer>
</template>
