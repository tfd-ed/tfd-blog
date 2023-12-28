<template>
  <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          {{ $t("hey") }} {{ $route.query.name }}!
        </h1>
        <p class="leading-relaxed mt-4">
          {{ $t("we_found_that_your_email") }}: <b>{{ $route.query.email }}</b>
          {{ $t("already_registered_using") }} <b>{{ $route.query.previous }}</b
          >{{ $i18n.locale === "km" ? "។" : "." }} <br />
          <br />
          {{ $t("please_sign_using") }} <b>{{ $route.query.previous }}</b>
          {{ $t("then_you_can_link") }}
        </p>
      </div>
      <div
        class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          {{ $t("login") }}
        </h2>
        <ValidationObserver
          v-if="$route.query.previous === 'email'"
          ref="form_login_2"
          v-slot="{ handleSubmit }"
        >
          <form
            class="space-y-2"
            method="post"
            @submit.prevent="handleSubmit(emailLogin)"
          >
            <BasicInput
              id="login_email"
              v-model="login.email"
              name="email"
              label="email"
              rules="required|email"
            />
            <BasicInput
              id="login_password"
              v-model="login.password"
              name="password"
              label="password"
              rules="required|min:8"
              type="password"
            />
            <div class="mt-4 mx-auto text-center cursor-pointer">
              <label
                for="forgot-password-modal"
                class="cursor-pointer text-sm text-gray-500"
                >{{ $t("forgot_password") }}</label
              >
            </div>
            <div class="flex justify-center mt-6">
              <button type="submit">
                <ShadowButton text="login" color="bg-red-600" />
              </button>
            </div>
          </form>
        </ValidationObserver>

        <SocialButtonLarge
          v-if="$route.query.previous === 'google'"
          type="google"
        />
        <SocialButtonLarge
          v-if="$route.query.previous === 'github'"
          type="github"
        />
        <SocialButtonLarge
          v-if="$route.query.previous === 'facebook'"
          type="facebook"
        />
        <TosRemind />
      </div>
    </div>
  </div>
</template>
<script>
import SocialButtonLarge from "~/components/buttons/social-button-large.vue";
import TosRemind from "~/components/commons/tos-remind.vue";
import ShadowButton from "~/components/buttons/shadow-button.vue";
import BasicInput from "~/components/inputs/basic-input.vue";
import { ValidationObserver } from "vee-validate";

export default {
  components: {
    BasicInput,
    ShadowButton,
    TosRemind,
    SocialButtonLarge,
    ValidationObserver,
  },
  middleware: "check-params",
  data: function () {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async emailLogin() {
      try {
        await this.$auth.loginWith("local", {
          data: this.login,
        });
        this.login = {
          email: "",
          password: "",
        };
      } catch (err) {
        console.log(err);
        this.$refs.form_login_2.setErrors({
          login_email: err.response.data.message,
        });
        this.$toast.error(err.response.data.message, {
          duration: 3000,
        });
      }
    },
  },
};
</script>
