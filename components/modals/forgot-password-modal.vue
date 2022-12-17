<template>
  <ModalTemplate id="forgot-password-modal">
    <template #content>
      <label
        ref="forgot_label"
        for="forgot-password-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div>
        <h2
          class="mt-6 text-center text-xl md:text-3xl font-bold text-black capitalize leading-relaxed"
        >
          {{ $t("forgot_password") }}
        </h2>
      </div>
      <div v-show="!doing && !done">
        <ValidationObserver ref="reset_form" v-slot="{ handleSubmit }">
          <form
            method="post"
            class="flex flex-col mt-16 space-y-2"
            @submit.prevent="handleSubmit(handleForm)"
          >
            <BasicInput
              id="reset_email"
              v-model="email"
              name="email"
              label="email"
              rules="required|email"
              :auto-complete="false"
            />

            <div class="flex justify-center py-4">
              <button type="submit">
                <ShadowButton text="submit" color="bg-green-700" />
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div v-if="doing" class="flex justify-center">
        <GeneralLoading text="loading" />
      </div>
      <Transition>
        <div v-if="done">
          <div class="py-6">
            <h2 class="text-center leading-relaxed items-center">
              {{ $t("your_password_is_reset") }}
            </h2>
          </div>
        </div>
      </Transition>
    </template>
  </ModalTemplate>
</template>
<script>
import ModalTemplate from "./modal-template";
import { ValidationObserver } from "vee-validate";
import ShadowButton from "../buttons/shadow-button";
import BasicInput from "../inputs/basic-input";
import GeneralLoading from "../loadings/general-loading";
export default {
  components: {
    GeneralLoading,
    BasicInput,
    ShadowButton,
    ValidationObserver,
    ModalTemplate,
  },
  data() {
    return {
      email: "",
      geetest: "",
      doing: false,
      done: false,
    };
  },
  // mounted() {
  //   this.initializeGeeTest();
  // },
  methods: {
    async handleForm() {
      this.doing = true;
      this.initializeGeeTest();
      /**
       * Verify reCaptcha
       */
      setTimeout(() => {
        this.geetest.showBox();
      }, 2000);
      // this.geetest.showBox();
    },
    initializeGeeTest() {
      let web = this;
      initGeetest4(
        {
          captchaId: web.$config.GEETEST_ID_RESET,
          product: "bind",
          language: "eng",
        },
        async function (captchaObj) {
          web.geetest = captchaObj;
          captchaObj
            .onReady(function () {
              console.log("GeeTest Ready!");
            })
            .onSuccess(async function () {
              /**
               * verify token with GeeTest server
               */
              const result = captchaObj.getValidate();
              const recaptcha_response = await web.$axios.$get(
                "/api/check-token",
                {
                  params: {
                    ...result,
                    captcha_key: web.$config.GEETEST_KEY_RESET,
                  },
                }
              );
              /**
               * If reCAPTCHA is validated, let go
               */
              if (recaptcha_response === "success") {
                await web.resetPassword();
              }
            })
            .onError(function () {
              web.$toast("Bot verification error!", {
                duration: 3000,
              });
            });
        }
      );
    },
    async resetPassword() {
      try {
        const response = await this.$axios.$post("/v1/auth/forgot-password", {
          email: this.email,
        });
        this.doing = false;
        this.done = true;
      } catch (e) {
        this.doing = false;
        this.$toast.error(e.response.data.message, {
          duration: 3000,
        });
        this.$refs.reset_form.setErrors({
          reset_email: e.response.data.message,
        });
      }
    },
  },
};
</script>
