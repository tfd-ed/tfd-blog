<template>
  <ModalTemplate id="purchase-modal">
    <template v-if="getCourse" #content>
      <label
        for="purchase-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <ValidationObserver
        v-show="!submitting && !submitted"
        ref="purchase_form"
        v-slot="{ handleSubmit }"
      >
        <h2 class="mt-2 text-center text-gray-700 text-2xl md:text-xl">
          {{ $t("choose_payment_method") }}:
        </h2>
        <button
          class="flex items-center justify-center w-full px-8 py-2 mt-4 capitalize text-white bg-aba_dark rounded-lg transition hover:scale-90"
          @click="openPayment(getCourse.paymentLink)"
        >
          {{ $t("ចុចទីនេះដើម្បីទូទាត់ជាមួយ") }}
          <img src="https://i.imgur.com/MGe6N9C.png" class="h-14" />
        </button>
        <form
          class="flex flex-col mt-16 space-y-2"
          method="post"
          @submit.prevent="handleSubmit(submitPurchase)"
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
            <button type="submit">
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
      <div v-if="submitted" class="flex flex-row justify-center mx-auto py-24">
        <p class="text-center leading-relaxed items-center">
          <DoneIcon class="inline" /> {{ $t("confirming_payment") }}<br />
          {{ $t("please_wait_for_a_while") }}
        </p>
      </div>
    </template>
  </ModalTemplate>
</template>
<script>
import ModalTemplate from "./modal-template";
import { ValidationObserver } from "vee-validate";
import BasicInput from "../inputs/basic-input";
import TosRemind from "../commons/tos-remind";
import ShadowButton from "../buttons/shadow-button";
import DoneIcon from "../icons/done-icon";
import GeneralContentLoading from "../loadings/general-content-loading";
import { mapActions, mapGetters } from "vuex";
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
  data() {
    return {
      transaction_number: "",
      loading: false,
      submitting: false,
      submitted: false,
    };
  },
  computed: {
    ...mapGetters({
      getCourse: "course/getCourse",
      loggedInUser: "loggedInUser",
    }),
  },
  methods: {
    ...mapActions({
      fetchPurchase: "course/fetchCoursePurchase",
    }),
    openPayment(link) {
      window.open(link, "popup", "width=800,height=600");
      return false;
    },
    async submitPurchase() {
      this.submitting = true;
      try {
        const result = await this.$axios.$post(
          `/v1/courses/${this.getCourse.id}/purchase`,
          {
            byUser: this.loggedInUser.id,
            course: this.getCourse.id,
            price: this.getCourse.price,
            transaction: this.transaction_number,
          }
        );
        await this.fetchPurchase({
          id: this.getCourse.id,
          userId: this.loggedInUser.id,
        });
        this.submitting = false;
        this.submitted = true;
      } catch (e) {
        this.submitting = false;
        this.$toast.error(e.response.data.message, {
          duration: 3000,
        });
        this.$refs.purchase_form.setErrors({
          transaction_number: e.response.data.message,
        });
      }
    },
  },
};
</script>
