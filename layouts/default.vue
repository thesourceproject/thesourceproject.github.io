<template>
  <div
    class="min-h-screen flex flex-col bg-background-1 text-text-1 font-body break-words transition-colors"
    :class="theme"
  >
    <Header @change-theme="changeTheme" />
    <Nuxt
      class="flex-grow container mx-auto p-4 sm:px-8 flex flex-col leading-loose"
    />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
      localStorage.setItem("theme", this.theme);
    },
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "light";
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

:root {
  --cpp: #ed217c;
  --java: #045fa0;
  --javascript: #5703c2;
  --python: #00a341;
  --misc: #1b998b;
}

.light {
  --background-1: #ffffff;
  --background-2: #ff2f2f;
  --background-3: #002e46;
  --background-4: #ffe5e5;
  --text-1: #000000;
  --text-2: #ffffff;
  --text-3: #ff2f2f;
  --text-4: #002e46;
  --text-5: #ffffff;
}

.dark {
  --background-1: #0b0b17;
  --background-2: #fc4422;
  --background-3: #191d30;
  --background-4: #ffe5e5;
  --text-1: #eeeeee;
  --text-2: #eeeeee;
  --text-3: #fc4422;
  --text-4: #eeeeee;
  --text-5: #eeeeee;
}
</style>