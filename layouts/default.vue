<template>
  <main class="dark:bg-gray-800 font-sans bg-white relative h-screen">
    <NavBar />
    <nuxt />
    <Footer />
  </main>
</template>
<script>
import NavBar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
export default {
  components: { Footer, NavBar },
};
</script>
