<template>
  <ValidationProvider
    v-slot="{ errors }"
    :vid="name"
    :name="name"
    tag="div"
    :rules="rules"
  >
    <label
      class="relative block p-3 bg-white border-2 rounded-lg"
      :class="errors.length ? 'border-red-500' : 'border-gray-200'"
      :for="name"
    >
      <input
        :id="name"
        :value="value"
        class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
        :type="type"
        :placeholder="getPlaceHolder"
        :autoComplete="autoComplete"
        @input="onInput"
        @change="onChange"
      />
      <span
        class="absolute bg-transparent text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-sarpheab peer-focus:dark:text-sarpheab peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {{ $t(name) }}
      </span>
    </label>
    <div class="text-xs font-medium text-red-500 mt-2">
      {{ errors[0] }}
    </div>
    <slot name="guide"></slot>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    rules: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    autoComplete: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getPlaceHolder() {
      return this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
    },
  },
  methods: {
    onInput(event) {
      // Can add validation here
      this.$emit("input", event.target.value);
    },
    onChange(event) {
      // Supports .lazy
      // Can add validation here
      this.$emit("change", event.target.value);
    },
  },
};
</script>
