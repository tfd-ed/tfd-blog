<template>
  <ValidationProvider
    v-slot="{ errors }"
    :vid="id"
    :name="name"
    tag="div"
    :rules="rules"
  >
    <p
      class="text-gray-600 mb-4 text-base md:text-lg text-center"
      :class="errors.length ? 'text-red-500' : 'text-gray-600'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        class="inline-flex"
      >
        <title>handout</title>
        <g>
          <circle fill="#EFD358" cx="33" cy="17" r="6"></circle>
          <circle fill="#EFD358" cx="19" cy="7" r="6"></circle>
          <path
            fill="#B29930"
            d="M21,8h-4c-0.55273,0-1-0.44727-1-1s0.44727-1,1-1h4c0.55273,0,1,0.44727,1,1S21.55273,8,21,8z"
          ></path>
          <path
            fill="#B29930"
            d="M35,18h-4c-0.55273,0-1-0.44727-1-1s0.44727-1,1-1h4c0.55273,0,1,0.44727,1,1S35.55273,18,35,18z"
          ></path>
          <path
            fill="#EAD8C5"
            d="M44.01177,35.25985L26.4911,36.78338c-1.62204,0.14105-3.24851-0.21619-4.66215-1.02398L17,33h11.26765 C29.77669,33,31,31.77669,31,30.26765v-0.00001c0-1.31485-0.93648-2.44324-2.22881-2.68555l-10.11726-1.89699 C16.22322,25.22935,13.75547,25,11.28239,25H3v14.479l16.44922,6.85742c1.8208,0.68256,3.83527,0.67297,5.68848,0.20508L47,38 v-0.00049C47,36.38671,45.6185,35.12013,44.01177,35.25985z"
          ></path>
          <path
            fill="#5A7A84"
            d="M7,44H2c-0.55228,0-1-0.44772-1-1V24c0-0.55228,0.44772-1,1-1h5c0.55228,0,1,0.44772,1,1v19 C8,43.55228,7.55228,44,7,44z"
          ></path>
        </g>
      </svg>
      {{ $t(label) }}
    </p>
    <v-select
      :value="value"
      label="name"
      :filterable="false"
      :options="options"
      @input="onInput"
    >
      <template slot="option" slot-scope="option">
        <div class="d-center">
          {{ option.name }}
        </div>
      </template>
      <template slot="selected-option" slot-scope="option">
        <div class="selected d-center">
          {{ option.name }}
        </div>
      </template>
      <template #search="{ attributes, events }">
        <input class="vs__search" v-bind="attributes" v-on="events" />
      </template>
    </v-select>
    <span class="text-xs font-medium text-red-500 mt-2"> {{ errors[0] }}</span>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from "vee-validate";
import "vue-select/dist/vue-select.css";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    rules: {
      type: String,
      default: "",
    },
    route: {
      type: String,
      default: "",
    },

    autoComplete: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    getPlaceHolder() {
      return this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
    },
  },
  methods: {
    onInput(event) {
      // Can add validation here
      if (event) {
        this.$emit("input", event);
      } else {
        this.$emit("input", "");
      }
    },
  },
};
</script>
