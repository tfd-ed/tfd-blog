<template>
  <ModalTemplate id="user-registration-modal">
    <template #content>
      <label
        ref="register_label"
        for="user-registration-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        @click="clearData"
        >✕</label
      >
      <div>
        <h2
          class="mt-6 text-center text-xl md:text-3xl font-bold text-black capitalize leading-relaxed"
        >
          {{ $t("join_community") }}
        </h2>
      </div>
      <ValidationObserver
        v-show="!submitting && !submitted"
        ref="form_reg"
        v-slot="{ handleSubmit }"
      >
        <form
          method="post"
          class="flex flex-col mt-16 space-y-2"
          @submit.prevent="handleSubmit(handleForm)"
        >
          <BasicInput
            id="firstname_sign_up"
            v-model.trim="firstname"
            name="firstname"
            label="firstname"
            rules="required|alpha"
            :auto-complete="false"
          />
          <BasicInput
            id="lastname_sign_up"
            v-model.trim="lastname"
            name="lastname"
            label="lastname"
            rules="required|alpha"
            :auto-complete="false"
          />
          <BasicInput
            id="email_sign_up"
            v-model.trim="email"
            name="email"
            label="email"
            rules="required|email"
            :auto-complete="false"
          />
          <BasicInput
            id="password_sign_up"
            v-model="password"
            name="password"
            label="password"
            rules="required|min:8"
            type="password"
            :auto-complete="false"
          />
          <BasicInput
            id="confirmation_sign_up"
            v-model="confirmation"
            name="confirmation"
            label="confirmation"
            rules="required|confirmed:password_sign_up"
            type="password"
            :auto-complete="false"
          />
          <div class="flex justify-center py-4">
            <button type="submit">
              <ShadowButton text="sign_up" color="bg-green-700" />
            </button>
          </div>
          <label @click="close">
            <TosRemind />
          </label>
          <div class="mt-12 mx-auto text-center h-8">
            <p class="text-xs text-gray-500">
              {{ $t("have_account") }}
              <label
                for="login-modal"
                class="capitalize text-blue-600 cursor-pointer"
                @click="close"
                >{{ $t("login_now") }}</label
              >
            </p>
          </div>
        </form>
      </ValidationObserver>
      <div
        v-if="submitting && !submitted"
        class="transition rounded-lg p-8 flex flex-col mx-auto w-full"
      >
        <GeneralContentLoading />
      </div>
      <div v-if="submitted" class="flex flex-row mx-auto py-24">
        <p class="text-center leading-relaxed items-center">
          <DoneIcon class="inline" /> {{ $t("registration_done") }}<br />
          {{ $t("please_check_email_inbox") }}
        </p>
      </div>
    </template>
  </ModalTemplate>
</template>
<script>
import ModalTemplate from "~/components/modals/modal-template";
import DoneIcon from "~/components/icons/done-icon";
import ShadowButton from "~/components/buttons/shadow-button";
import TosRemind from "~/components/commons/tos-remind";
import { ValidationObserver } from "vee-validate";
import BasicInput from "~/components/inputs/basic-input";
import GeneralContentLoading from "~/components/loadings/general-content-loading";
export default {
  components: {
    GeneralContentLoading,
    BasicInput,
    ValidationObserver,
    TosRemind,
    ShadowButton,
    DoneIcon,
    ModalTemplate,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmation: "",
      loading: false,
      submitting: false,
      submitted: false,
      geetest: "",
    };
  },
  // mounted() {
  //   this.initializeGeeTest();
  // },
  methods: {
    close() {
      this.$refs.register_label.click();
      this.$refs.form_reg.reset();
    },
    async handleForm() {
      this.submitting = true;
      this.initializeGeeTest();
      /**
       * Verify reCaptcha
       */
      setTimeout(() => {
        this.geetest.showBox();
      }, 2000);
    },
    async register() {
      try {
        await this.$axios.$post("/v1/auth/register", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          passwordConfirmation: this.confirmation,
        });
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        /**
         * Persist token in Storage to prevent false retrieval
         */
        this.$auth.$storage.setUniversal(
          "access",
          this.$auth.strategy.token.get()
        );
        this.$auth.$storage.setUniversal(
          "refresh",
          this.$auth.strategy.refreshToken.get()
        );
        this.close();
        // setTimeout(async () => {
        //   this.resetForm();
        //   this.close();
        //   this.logged = false;
        //   await this.$router.push(this.localePath("/course"));
        // }, 1000);
        this.submitting = false;
        await this.$nuxt.refresh();
        // this.submitted = true;
        this.$refs.form_reg.reset();
      } catch (e) {
        console.log(e.response.data.message);
        this.submitting = false;
        this.$refs.form_reg.setErrors({
          email_sign_up: e.response.data.message,
        });
      }
    },
    async initializeGeeTest() {
      let web = this;
      await initGeetest4(
        {
          captchaId: web.$config.GEETEST_ID_SIGN_UP,
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
                    captcha_key: web.$config.GEETEST_KEY_SIGN_UP,
                  },
                }
              );
              /**
               * If reCAPTCHA is validated, let go
               */
              if (recaptcha_response === "success") {
                await web.register();
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
    clearData() {
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.loading = false;
      this.submitting = false;
      this.submitted = false;
    },
  },
};
</script>
