<template>
  <ValidationProvider
    v-slot="{ errors }"
    ref="uploader"
    :vid="id"
    :name="name"
    tag="div"
    :rules="rules"
    class="space-y-1 text-center"
  >
    <svg
      class="mx-auto h-12 w-12 text-gray-400"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div v-if="file === ''" class="text-sm text-gray-600">
      <label
        :for="id"
        class="relative cursor-pointer bg-white rounded-md font-medium text-blue hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <span>{{ $t("upload_a_file") }}</span>
        <input
          :id="id"
          ref="file"
          :name="name"
          type="file"
          class="sr-only"
          accept="image/jpeg,image/png,image/jpg"
          @change="onChange"
        />
      </label>
    </div>
    <div v-else>
      <div class="cursor-pointer flex flex-row justify-center items-center">
        <label class="btn btn-xs btn-warning btn-square" @click="clearFile"
          >✕</label
        >
        <p class="ml-2 text-sm text-gray-500">
          {{ file.name }}
        </p>
      </div>
    </div>

    <p class="text-xs text-gray-500">PNG, JPG, JPEG up to {{ getFileSize }}</p>
    <p class="text-xs text-red-600">{{ errors[0] }}</p>
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
  },
  data() {
    return {
      file: "",
    };
  },
  computed: {
    getFileSize() {
      const size = this.rules.match("size:(.*)")[1];
      return this.formatBytes(size);
    },
  },
  methods: {
    async onChange(event) {
      const { valid } = await this.$refs.uploader.validate(event);
      if (valid) {
        /// Reference to the DOM input element
        const { files } = event.target;
        // Ensure that you have a file before attempting to read it
        if (files && files[0]) {
          // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
          if (this.file.src) {
            URL.revokeObjectURL(this.file.src);
          }
          // 2. Create the blob link to the file to optimize performance:
          const blob = URL.createObjectURL(files[0]);

          // 3. Update the image. The type will be derived from the extension and it can lead to an incorrect result:
          this.file = {
            src: blob,
            name: files[0].name,
            type: files[0].type,
          };
        }
        this.$emit("input", this.file);
      }
    },
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";
      bytes = bytes * 1000;

      const k = 1000;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
    clearFile() {
      this.file = "";
      this.$emit("input", "");
    },
  },
};
</script>
