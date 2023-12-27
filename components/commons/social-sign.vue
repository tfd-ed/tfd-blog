<template>
  <div class="mt-7 flex flex-col gap-2">
    <p class="mt-4 text-center text-gray-600 dark:text-gray-400">
      or sign in with
    </p>

    <button
      class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
      @click="openPopup"
    >
      <img
        src="https://www.svgrepo.com/show/512317/github-142.svg"
        alt="GitHub"
        class="h-[18px] w-[18px]"
      />
      Continue with GitHub
    </button>

    <button
      class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
      @click="googleLogin()"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        class="h-[18px] w-[18px]"
      />Continue with Google
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    googleLogin() {
      this.$auth.loginWith("google", {
        params: { prompt: "select_account" },
      });
    },
    githubLogin() {
      try {
        this.$auth.loginWith("github", {
          params: { prompt: "select_account" },
        });
        // await this.$auth.fetchUser();
      } catch (err) {
        this.$toast.error("Github Logging error", {
          duration: 3000,
        });
      }
    },
    openPopup() {
      const popupWindow = window.open("", "_blank", "width=500,height=500");

      // Listen for messages from the popup window
      window.addEventListener("message", (event) => {
        if (event.source === popupWindow && event.data === "popupFinished") {
          // Handle the popup finished event
          console.log("Popup execution finished");

          // You can resume the flow of your component's function here
          // For example, call another method or set a flag
          this.handlePopupFinished();
        }
      });

      // Call the function in the popup window
      this.runCodeInPopup(popupWindow);
    },

    async runCodeInPopup(popupWindow) {
      // You can add your code to be executed in the popup window here
      // popupWindow.document.write("<p>Popup Content</p>");
      // this.$auth.loginWith("github", {
      //   params: { prompt: "select_account" },
      // });
      // Example HTTP request using the fetch API
      // try {
      //   const response = await fetch("http://localhost/v1/auth/github");
      //   const data = await response.json();
      //
      //   // Display the data in the popup
      //   popupWindow.document.write(`<p>${JSON.stringify(data)}</p>`);
      // } catch (error) {
      //   console.error("Error making HTTP request:", error);
      // }
      const websiteUrl = "http://localhost/v1/auth/github";
      popupWindow.location.href = websiteUrl;

      // Notify the parent window when the execution is finished
      popupWindow.postMessage("popupFinished", "*");
    },

    handlePopupFinished() {
      // Resume the flow of your component's function
      console.log("Resuming component flow");
    },
  },
};
</script>
