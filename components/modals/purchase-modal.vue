<template>
  <ModalTemplate id="purchase-modal">
    <template #content>
      <label
        for="purchase-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div v-if="getCourse">
        <h2
          class="mt-2 text-center text-green-600 text-3xl md:text-4xl font-semibold uppercase"
        >
          ${{ getCourse.price }}
        </h2>
      </div>
      <button
        class="flex items-center justify-center w-full px-8 py-2 mt-4 capitalize text-white bg-aba_dark rounded-lg transition hover:scale-90"
        @click="openPayment(getCourse.paymentLink)"
      >
        {{ $t("ចុចទីនេះដើម្បីទូទាត់ជាមួយ") }}
        <img src="https://i.imgur.com/MGe6N9C.png" class="h-14" />
      </button>
      <ValidationObserver
        v-show="!submitting && !submitted"
        ref="purchase_form"
        v-slot="{ handleSubmit }"
      >
        <form
          method="post"
          class="flex flex-col mt-16 space-y-2"
          @submit.prevent="handleSubmit(handleForm)"
        >
          <BasicInput
            id="transaction_number"
            v-model="transaction_number"
            name="transaction_number"
            label="transaction_number"
            rules="required|digits:15"
            :auto-complete="false"
          />
          <div class="flex justify-center py-4">
            <button type="button">
              <ShadowButton text="submit" color="bg-red-700" />
            </button>
          </div>
          <TosRemind />
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
import ModalTemplate from "./modal-template";
import { mapGetters } from "vuex";
import { ValidationObserver } from "vee-validate";
import BasicInput from "../inputs/basic-input";
import TosRemind from "../common/tos-remind";
import ShadowButton from "../button/shadow-button";
import DoneIcon from "../icons/done-icon";
import GeneralContentLoading from "../loadings/general-content-loading";
export default {
  components: {
    GeneralContentLoading,
    DoneIcon,
    ShadowButton,
    TosRemind,
    BasicInput,
    ValidationObserver,
    ModalTemplate,
  },
  computed: {
    ...mapGetters({
      getCourse: "course/getCourse",
    }),
  },
  data() {
    return {
      transaction_number: "",
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
  methods: {
    openPayment(link) {
      window.open(link, "popup", "width=800,height=600");
      return false;
    },
    handleForm() {},
  },
};
</script>
