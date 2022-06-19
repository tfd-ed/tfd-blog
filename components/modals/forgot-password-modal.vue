<template>
  <ModalTemplate id="forgot-password-modal">
    <template #content>
      <label
        ref="register_label"
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
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form
          method="post"
          class="flex flex-col mt-16 space-y-2"
          @submit.prevent="handleSubmit(handleForm)"
        >
          <BasicInput
            v-model="email"
            name="email"
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
    </template>
  </ModalTemplate>
</template>
<script>
import ModalTemplate from "./modal-template";
import { ValidationObserver } from "vee-validate";
import ShadowButton from "../button/shadow-button";
import BasicInput from "../inputs/basic-input";
export default {
  components: { BasicInput, ShadowButton, ValidationObserver, ModalTemplate },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleForm() {},
  },
};
</script>
