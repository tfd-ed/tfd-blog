<template>
  <ModalTemplate id="purchase-modal">
    <template v-if="getCourse" #content>
      <label
        ref="purchase_label"
        for="purchase-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        @click="resetForm"
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
          v-if="getCourse.type === 'PAID'"
          class="flex items-center justify-center w-full px-8 py-2 mt-4 capitalize text-white bg-aba_dark rounded-lg transition hover:scale-90"
          @click="openPayment(getCourse.paymentLink)"
        >
          {{ $t("pay_via") }}
          <img src="https://i.imgur.com/MGe6N9C.png" class="h-14" />
        </button>
        <button
          v-if="getCourse.type === 'PAID'"
          class="flex items-center justify-center w-full px-8 py-2 mt-4 capitalize text-white bg-bakong rounded-lg transition hover:scale-90"
          @click="openPayment(getCourse.bkPaymentLink)"
        >
          {{ $t("pay_via") }}
          <img src="/bakong_icon.png" class="h-14" />
        </button>
        <div class="space-y-2 py-4">
          <details class="group">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <title>ic_help_48px</title>
                <g fill="#34495e">
                  <path
                    d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"
                  ></path>
                </g>
              </svg>
              <h2
                class="text-center text-sm md:text-base font-medium text-gray-900"
              >
                {{ $t("pay_with_aba") }}
              </h2>

              <svg
                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <img
              src="/payment_sample.png"
              class="w-11/12 mx-auto shadow-2xl mt-2 mb-2 rounded-lg"
              alt="purchase sample"
            />
          </details>
          <details class="group">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <title>ic_help_48px</title>
                <g fill="#34495e">
                  <path
                    d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"
                  ></path>
                </g>
              </svg>
              <h2
                class="text-center text-sm md:text-base font-medium text-gray-900"
              >
                {{ $t("pay_with_bakong") }}
              </h2>

              <svg
                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <img
              src="/bakong-sample.png"
              class="w-11/12 mx-auto shadow-2xl mt-2 mb-2 rounded-lg"
              alt="purchase sample"
            />
          </details>
        </div>

        <!--        <p v-else class="mt-8 max-w-lg text-gray-500 italic">-->
        <!--          នេះជាមេរៀន {{ $t("free") }} សូមវាយបញ្ចូលលេខ-->
        <!--          <strong>000000000000000</strong> នៅក្នុងប្រអប់ រួចចុច-->
        <!--          {{ $t("submit") }} ដើម្បីទទួលបានមេរៀន-->
        <!--        </p>-->
        <form
          class="flex flex-col mt-8 space-y-2"
          method="post"
          @submit.prevent="handleSubmit(submitPurchase)"
        >
          <SimpleSelectLocal
            id="purchased_type"
            v-model="paymentType"
            name="purchased_type"
            label="purchased_from"
            rules="required"
            :options="options"
          />
          <BasicInput
            id="transaction_number"
            v-model="transaction_number"
            name="transaction_number"
            label="transaction_number"
            :rules="
              paymentType === 'ABA'
                ? 'required|digits:15'
                : 'required|alpha_num|max:8'
            "
            :auto-complete="false"
          />
          <div class="flex justify-center py-4">
            <button type="submit">
              <ShadowButton text="submit" color="bg-red-700" />
            </button>
          </div>
          <label @click="close">
            <TosRemind />
          </label>
        </form>
      </ValidationObserver>
      <div
        v-if="submitting && !submitted"
        class="transition rounded-lg p-8 flex flex-col mx-auto w-full"
      >
        <GeneralContentLoading />
      </div>
      <div
        v-if="submitted && !approved"
        class="flex flex-row justify-center mx-auto py-24"
      >
        <p class="text-center leading-relaxed items-center">
          <DoneIcon class="inline" /> {{ $t("confirming_payment") }}<br />
          {{ $t("please_wait_for_a_while") }}
        </p>
      </div>
      <Transition v-if="approved && submitted" appear>
        <div class="flex flex-col mx-auto">
          <p
            class="text-center font-bold leading-relaxed text-2xl lg:text-3xl items-center"
          >
            {{ $t("purchase_confirmation_done") }}
          </p>
          <p
            class="mt-16 text-gray-700 text-center leading-relaxed text-xl lg:text-2xl items-center"
          >
            {{ $t("thanks_for_purchase") }}
          </p>
          <img class="mx-auto w-40 lg:w-56" src="/cute.gif" alt="thanks" />

          <label
            for="purchase-modal"
            class="mt-16 mx-auto"
            @click="goChapter(1)"
          >
            <ShadowButton text="learn" color="bg-tfd" />
          </label>
        </div>
      </Transition>
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import SimpleSelectLocal from "@/components/inputs/simple-select-local";
export default {
  components: {
    SimpleSelectLocal,
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
      paymentType: "",
      options: ["ABA", "Bakong"],
      loading: false,
      submitting: false,
      submitted: false,
      approved: false,
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
    ...mapMutations({
      updatePurchase: "course/UPDATE_PURCHASE",
    }),
    openPayment(link) {
      window.open(link, "popup", "width=800,height=600");
      return false;
    },
    async goChapter(number) {
      await this.$router.push(
        this.localePath(`/course/${this.getCourse.titleURL}/chapter/${number}`)
      );
    },
    async submitPurchase() {
      // console.log(this.loggedInUser);
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
        this.initializeNotification();
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
    close() {
      this.$refs.purchase_label.click();
      this.resetForm();
    },
    resetForm() {
      this.transaction_number = "";
      this.loading = false;
      this.submitting = false;
      this.submitted = false;
    },
    initializeNotification() {
      console.log(
        `${this.loggedInUser.username}_${this.getCourse.titleURL}_purchase`
      );
      let channel = this.$pusher.subscribe(
        `${this.loggedInUser.username}_${this.getCourse.titleURL}_purchase`
      );
      console.log("Channel Initialized");
      channel.bind("purchase-approved", (log) => {
        // console.log(log);
        this.updatePurchase(log);
        this.approved = true;
      });
    },
  },
};
</script>
