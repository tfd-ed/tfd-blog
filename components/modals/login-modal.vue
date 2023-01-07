<template>
  <ModalTemplate id="login-modal">
    <template #content>
      <Transition appear>
        <label
          v-show="!logged"
          ref="login_label"
          for="login-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="resetForm"
          >✕</label
        >
      </Transition>
      <div v-show="!logging && !logged">
        <div>
          <h2
            class="mt-6 text-center text-xl md:text-3xl font-bold text-black capitalize leading-relaxed"
          >
            {{ $t("join_community") }}
          </h2>
        </div>
        <ValidationObserver ref="form_login" v-slot="{ handleSubmit }">
          <form
            class="mt-16 space-y-2"
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
                @click="close"
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
        <label @click="close">
          <TosRemind />
        </label>
        <div class="mt-12 mx-auto text-center h-8">
          <p class="text-xs text-gray-500">
            {{ $t("no_account") }}
            <label
              for="user-registration-modal"
              class="capitalize text-blue-600 cursor-pointer"
              @click="close"
              >{{ $t("sign_up_now") }}</label
            >
          </p>
        </div>
      </div>
      <div v-if="logging" class="flex justify-center">
        <GeneralLoading text="loading" />
      </div>
      <Transition>
        <div v-if="logged">
          <div class="py-6">
            <h2
              class="text-center text-xl md:text-3xl font-bold text-black capitalize leading-relaxed"
            >
              {{ $t("welcome_to") }} TFDevs
            </h2>
          </div>
        </div>
      </Transition>
    </template>
  </ModalTemplate>
</template>
<script>
import ShadowButton from "~/components/buttons/shadow-button";
import ModalTemplate from "~/components/modals/modal-template";
import TosRemind from "~/components/commons/tos-remind";
import GeneralLoading from "~/components/loadings/general-loading";
import { ValidationObserver } from "vee-validate";
import BasicInput from "~/components/inputs/basic-input";
import { mapGetters } from "vuex";
export default {
  components: {
    BasicInput,
    ValidationObserver,
    GeneralLoading,
    TosRemind,
    ModalTemplate,
    ShadowButton,
  },
  data: function () {
    return {
      login: {
        email: "",
        password: "",
      },
      logging: false,
      logged: false,
    };
  },
  computed: {
    ...mapGetters({
      loggedUser: "loggedInUser",
    }),
  },
  methods: {
    close() {
      this.$refs.login_label.click();
    },
    resetForm() {
      this.$refs.form_login.reset();
    },
    async emailLogin() {
      this.logging = true;
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        /**
         * Persist token in Storage to prevent false retrieval
         */
        // console.log(response);
        this.$auth.$storage.setUniversal("access", response.data.accessToken);
        this.$auth.$storage.setUniversal("refresh", response.data.refreshToken);
        // this.$auth.setUser(response.data.user);
        // this.$router.push("/");
        this.logging = false;
        this.logged = true;
        // this.$toast.success(this.$i18n.t("welcome_to_sarpheab"), {
        //   duration: 3000,
        // });
        setTimeout(async () => {
          this.resetForm();
          this.close();
          this.logged = false;
          await this.$router.push(this.localePath("/course"));
        }, 1000);
        this.login = {
          email: "",
          password: "",
        };
      } catch (err) {
        // this.$toast.global.error(); //Using custom toast
        console.log(err);
        this.logging = false;
        this.$refs.form_login.setErrors({
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
