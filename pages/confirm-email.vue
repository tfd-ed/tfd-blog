<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
      <div
        v-if="$fetchState.pending"
        class="transition lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full"
      >
        <GeneralContentLoading />
      </div>
      <div v-else>
        <div v-if="!error">
          <EmailIcon
            :width="120"
            class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
          />
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
              {{ $t("email_verification_done") }}
            </h1>
            <div class="py-6">
              <label for="login-modal">
                <ShadowButton text="login" color="bg-red-600" />
              </label>
            </div>
          </div>
        </div>
        <div v-if="error">
          <Confused
            width="120"
            class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
          />
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
              {{ $t("verification_error") }}
            </h1>
            <h1 class="text-2xl font-medium title-font mb-2 text-red-600">
              {{ errorMsg }}
            </h1>

            <!--            <div class="py-6">-->
            <!--              <ShadowButton text="retry" color="bg-yellow-600" />-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ShadowButton from "~/components/buttons/shadow-button";
import EmailIcon from "~/components/icons/email-icon";
import GeneralContentLoading from "~/components/loadings/general-content-loading";
import Confused from "../components/commons/confused";

export default {
  components: {
    Confused,
    GeneralContentLoading,
    EmailIcon,
    ShadowButton,
  },
  data() {
    return {
      error: false,
      errorMsg: "",
      done: false,
    };
  },
  async fetch() {
    const token = this.$route.query.token;
    if (!token) {
      // Error no token provided
      await this.$router.push("/");
    }
    try {
      const result = await this.$axios.$post("/v1/auth/confirm", {
        token: token,
      });
      this.$toast.info(result.result, {
        duration: 3000,
      });
    } catch (err) {
      this.error = true;
      this.errorMsg = err.response.data.message;
      this.$toast.error(err.response.data.message, {
        duration: 5000,
      });
    }
  },
  fetchOnServer: false,
  fetchDelay: 500,
};
</script>
