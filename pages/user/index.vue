<template>
  <div v-if="!$fetchState.pending && !loading">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-3xl mt-2 font-bold text-gray-900">
            {{ $t("user") }} / {{ getAuth.username }}
          </h1>
          <div>
            <!--            Insert Options Here-->
          </div>
        </div>
      </div>
    </header>
    <div>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2">
              <LazyLoadersImageLoader
                id="profile-viewer"
                class="object-cover w-full"
                :src="
                  admin.profile
                    ? admin.profile.path
                    : 'https://dummyimage.com/720x400'
                "
              />
              <div class="shadow-lg rounded-lg">
                <div class="px-4 py-3 border-0 card-header">
                  <h4 class="font-semibold mt-2 text-gray-800">
                    {{ $t("user") }}
                  </h4>
                </div>
                <div class="px-4 mb-1 -mt-2 divide-y divide-gray-200 card-body">
                  <div class="flex items-center justify-between py-3 text-sm">
                    <div class="flex items-center space-x-2 text-gray-700">
                      <LazyIconsStatusIcon />
                      <span>{{ $t("roles") }}</span>
                    </div>
                    <span
                      v-for="(role, index) in getAuth.roles"
                      :key="index"
                      class="flex items-center border-green-500 justify-center space-x-1.5 rounded-full border-2 px-3 py-1 text-xs font-medium text-gray-800"
                    >
                      <span
                        class="-ml-0.5 h-2 w-2 shrink-0 rounded-full bg-green-600 border-green-500"
                      ></span>
                      <span class="capitalize">{{ role }}</span>
                    </span>
                  </div>
                  <div class="flex items-center justify-between py-3 text-sm">
                    <div class="flex items-center space-x-2 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        class="flex-none w-5 h-5"
                      >
                        <title>multiple-11</title>
                        <g
                          stroke-linecap="square"
                          stroke-linejoin="miter"
                          stroke-width="2"
                          fill="none"
                          stroke="#34495e"
                          stroke-miterlimit="10"
                        >
                          <path
                            d="M10.713,13.719 C10.232,12.705,9.197,12,8,12H4c-1.657,0-3,1.343-3,3v5h2v7h6"
                            stroke-linecap="butt"
                            stroke="#34495e"
                          ></path>
                          <circle cx="6" cy="6" r="3" stroke="#34495e"></circle>
                          <path
                            d="M21.287,13.719 C21.768,12.705,22.803,12,24,12h4c1.657,0,3,1.343,3,3v5h-2v7h-6"
                            stroke-linecap="butt"
                            stroke="#34495e"
                          ></path>
                          <circle
                            cx="26"
                            cy="6"
                            r="3"
                            stroke="#34495e"
                          ></circle>
                          <path
                            d="M19,31h-6v-8h-3v-7 c0-2.209,1.791-4,4-4h4c2.209,0,4,1.791,4,4v7h-3V31z"
                          ></path>
                          <circle cx="16" cy="5" r="4"></circle>
                        </g>
                      </svg>
                      <span>{{ $t("username") }}</span>
                    </div>
                    <span class="font-mono text-gray-900">
                      {{ displayUsername }}</span
                    >
                  </div>
                  <div class="flex items-center justify-between py-3 text-sm">
                    <div class="flex items-center space-x-2 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#34495e"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                      <span>{{ $t("email") }}</span>
                    </div>
                    <span class="font-mono text-gray-900">
                      {{ getAuth.email }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="p-2 bg-white rounded-b-lg shadow-lg lg:p-10 lg:col-span-3 border-t-8 border-red-600"
            >
              <ValidationObserver
                ref="admin_edit_form"
                v-slot="{ handleSubmit }"
              >
                <p class="font-semibold text-lg text-gray-700 py-4">
                  {{ $t("general_info") }}
                </p>
                <form
                  method="post"
                  class="space-y-4"
                  @submit.prevent="handleSubmit(updateUserInfo)"
                >
                  <LazyInputsBasicInput
                    id="admin_name_edit"
                    v-model="admin.username"
                    name="username"
                    label="username"
                    rules="required"
                  />

                  <LazyInputsBasicInput
                    id="admin_firstname_edit"
                    v-model="admin.firstname"
                    name="firstname"
                    label="firstname"
                    rules="required"
                  />

                  <LazyInputsBasicInput
                    id="admin_lastname_edit"
                    v-model="admin.lastname"
                    name="lastname"
                    label="lastname"
                    rules="required"
                  />

                  <!--                  <BasicInput-->
                  <!--                    id="admin_email_edit"-->
                  <!--                    v-model="admin.email"-->
                  <!--                    name="email"-->
                  <!--                    label="email"-->
                  <!--                    rules="email|required"-->
                  <!--                    disabled="true"-->
                  <!--                  />-->

                  <LazyInputsBasicInput
                    id="admin_dob"
                    v-model="admin.dateOfBirth"
                    type="date"
                    name="date_of_birth"
                    label="date_of_birth"
                  />

                  <LazyInputsBasicInput
                    id="admin_password_edit"
                    v-model="password"
                    name="password"
                    type="password"
                    label="password"
                    rules="min:8"
                  />

                  <LazyInputsBasicInput
                    id="admin_password_edit_2"
                    v-model="confirmation"
                    name="confirmation"
                    label="confirmation"
                    rules="min:8|confirmed:admin_password_edit"
                  />

                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <LazyInputsSimpleFileUpload
                      id="admin_tb_edit"
                      v-model="thumbnail"
                      class="col-span-2"
                      name="user_tb"
                      label="user_tb"
                      rules="mimes:image/jpeg,image/png,image/jpg|size:3000"
                    />
                  </div>

                  <div class="mt-4 flex flex-row justify-center">
                    <button type="submit">
                      <LazyButtonsShadowButton
                        color="bg-green-700"
                        text="submit"
                      />
                    </button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="transition lg:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full"
  >
    <LazyLoadingsGeneralContentLoading />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { RequestQueryBuilder } from "@nestjsx/crud-request";
import { ValidationObserver } from "vee-validate";
// import * as nsfwjs from "nsfwjs";
export default {
  components: {
    ValidationObserver,
  },
  middleware: "auth",
  data() {
    return {
      name: "",
      admin: {},
      displayUsername: "",
      thumbnail: "",
      password: "",
      confirmation: "",
      nsfwModel: "",
      loading: false,
    };
  },
  async fetch() {
    // Load NSFW model
    // this.nsfwModel = await nsfwjs.load();
    const join = [
      {
        field: "profile",
        select: ["path"],
      },
    ];
    this.admin = await this.$axios.$get(
      `/v1/user-own-management/${this.getAuth.id}`,
      {
        params: {},
        paramsSerializer: (param) => {
          return RequestQueryBuilder.create({
            join: join,
          }).query();
        },
      }
    );
    this.displayUsername = this.admin.username;
  },
  computed: {
    ...mapGetters({
      getAuth: "loggedInUser",
    }),
  },

  methods: {
    popCourseUpdated() {
      this.$toast.success(
        this.$i18n.t("user") +
          ": " +
          this.admin.username +
          " " +
          this.$i18n.t("updated"),
        {
          duration: 3000,
        }
      );
    },
    async updateUserInfo() {
      try {
        this.loading = true;
        let file = "";
        if (this.thumbnail) {
          console.log("Checking NSFW");
          const img = document.getElementById("profile-viewer");
          if (img) {
            // To-do
            // // Classify the image
            // const predictions = await this.nsfwModel.classify(img);
            // console.log("Predictions: ", predictions);
          }
          /**
           * Replace TB
           */
          let formData = new FormData();
          let blob = await fetch(this.thumbnail.src).then((r) => r.blob());
          formData.append("file", blob, this.thumbnail.name);
          file = await this.$axios.$post("/v1/files", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          /**
           * Release Object URL
           */
          URL.revokeObjectURL(this.thumbnail.src);
          /**
           * Call API to delete old file later...
           * To-do
           */
          await this.$axios.$patch(
            `/v1/user-own-management/${this.getAuth.id}`,
            {
              username: this.admin.username,
              dateOfBirth: this.admin.dateOfBirth,
              firstname: this.admin.firstname,
              lastname: this.admin.lastname,
              profile: file.id,
            }
          );
        } else {
          // console.log("Called block 2");
          await this.$axios.$patch(
            `/v1/user-own-management/${this.getAuth.id}`,
            {
              username: this.admin.username,
              dateOfBirth: this.admin.dateOfBirth,
              firstname: this.admin.firstname,
              lastname: this.admin.lastname,
            }
          );
          this.displayUsername = this.admin.username;
        }
        /**
         * Password Updated
         */
        if (this.password) {
          // console.log("Called block 3");
          await this.$axios.$patch(
            `/v1/user-own-management/${this.getAuth.id}`,
            {
              password: this.password,
            }
          );
        }
        this.loading = false;
        this.popCourseUpdated();
        /**
         * Wait for image to be uploaded to AWS
         */
        setTimeout(() => {
          this.admin.profile = file;
          this.thumbnail = "";
        }, 3000);
      } catch (e) {
        this.loading = false;
        // console.log(e.response.data.detail);
        this.$toast.error(e.response.data.detail, {
          duration: 6000,
        });
      }
    },
  },
};
</script>
