<template>
  <ModalTemplate id="user-registration-modal">
    <template #content>
      <label
        ref="register_label"
        for="user-registration-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
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
        ref="form"
        v-slot="{ handleSubmit }"
      >
        <form
          method="post"
          class="flex flex-col mt-16 space-y-2"
          @submit.prevent="handleSubmit(handleForm)"
        >
          <BasicInput
            v-model="firstname"
            name="firstname"
            rules="required|alpha_spaces"
            :auto-complete="false"
          />
          <BasicInput
            v-model="lastname"
            name="lastname"
            rules="required|alpha"
            :auto-complete="false"
          />
          <BasicInput
            v-model="email"
            name="email"
            rules="required|email"
            :auto-complete="false"
          />
          <BasicInput
            v-model="password"
            name="password"
            rules="required|min:8"
            type="password"
            :auto-complete="false"
          />
          <BasicInput
            v-model="confirmation"
            name="confirmation"
            rules="required|confirmed:password"
            type="password"
            :auto-complete="false"
          />
          <div class="flex justify-center py-4">
            <button type="submit">
              <ShadowButton text="sign_up" color="bg-green-700" />
            </button>
          </div>
          <TosRemind />
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
import ShadowButton from "~/components/button/shadow-button";
import TosRemind from "~/components/common/tos-remind";
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
  mounted() {
    this.initializeGeeTest();
  },
  methods: {
    close() {
      this.$refs.register_label.click();
      this.$refs.form.reset();
    },
    async handleForm() {
      /**
       * Verify reCaptcha
       */
      this.geetest.showBox();
    },
    async register() {
      try {
        this.submitting = true;
        const response = await this.$axios.$post("/v1/user-auth/register", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          passwordConfirmation: this.confirmation,
        });
        this.submitting = false;
        this.submitted = true;
        this.$refs.form.reset();
      } catch (e) {
        this.submitting = false;
        this.$refs.form.setErrors({
          email: this.$i18n.t("email_already_exists"),
        });
      }
    },
    async initializeGeeTest() {
      let web = this;
      await initGeetest4(
        {
          captchaId: web.$config.GEETEST_ID,
          product: "bind",
          language: "eng",
        },
        function (captchaObj) {
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
                  params: result,
                }
              );
              /**
               * If reCAPTCHA is validated, let go
               */
              if (recaptcha_response === "success") {
                web.register();
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
    },
  },
};
</script>
