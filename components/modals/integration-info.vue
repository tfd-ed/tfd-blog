<template>
  <ModalTemplate id="integration-info">
    <template #content>
      <label
        for="integration-info"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div class="flex space-x-4">
        <img
          v-if="getCurrent.provider === 'GOOGLE'"
          class="h-7 w-7"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt=""
        />
        <img
          v-if="getCurrent.provider === 'FACEBOOK'"
          class="h-7 w-7"
          src="https://www.svgrepo.com/show/448224/facebook.svg"
          alt=""
        />
        <img
          v-if="getCurrent.provider === 'GITHUB'"
          class="h-7 w-7"
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 48 48"
        >
          <title>app-store</title>
          <g>
            <rect
              x="3"
              y="3"
              width="17"
              height="17"
              rx="3"
              fill="#6cc4f5"
            ></rect>
            <path
              d="M46.138,9.419,38.581,1.862a2.945,2.945,0,0,0-4.162,0L26.862,9.419a2.943,2.943,0,0,0,0,4.162l7.557,7.557a2.948,2.948,0,0,0,4.162,0l7.557-7.557a2.943,2.943,0,0,0,0-4.162Z"
              fill="#c456eb"
            ></path>
            <rect
              x="28"
              y="28"
              width="17"
              height="17"
              rx="3"
              fill="#6cc4f5"
            ></rect>
            <rect
              x="3"
              y="28"
              width="17"
              height="17"
              rx="3"
              fill="#6cc4f5"
            ></rect>
          </g>
        </svg>
        <h3 class="text-lg font-bold">
          {{ $t("integration") }}
        </h3>
      </div>
      <p class="py-4 leading-loose text-sm text-center">
        {{ getCurrent.provider }}
        {{ $t("integration_description") }}
      </p>
      <p class="leading-loose text-sm text-center">
        {{ $moment(getCurrent.createdDate).format("ll") }}
      </p>
      <div class="flex flex-row space-x-2 justify-center">
        <label for="integration-info">
          <ShadowButton text="acceptAll" color="bg-green-600" />
        </label>
      </div>
    </template>
  </ModalTemplate>
</template>
<script>
import ModalTemplate from "@/components/modals/modal-template.vue";
import ShadowButton from "@/components/buttons/shadow-button.vue";
import { mapGetters } from "vuex";

export default {
  components: { ShadowButton, ModalTemplate },
  computed: {
    ...mapGetters({
      getCurrent: "integration/getCurrent",
    }),
  },
};
</script>
