<template>
  <footer class="container mx-auto mt-24 p-4 sm:px-8">
    <div class="flex justify-between">
      <NuxtLink
        class="flex flex-col items-center group focus:outline-none"
        to="/about-us"
      >
        <span class="block">About Us</span>
        <svg
          class="
            mt-2
            h-10
            w-10
            group-hover:animate-bounce group-focus:animate-bounce
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
          />
        </svg>
      </NuxtLink>
      <button
        @click="goToTop"
        class="flex flex-col items-center group focus:outline-none"
      >
        <span class="block">Back To Top</span>
        <svg
          class="
            mt-2
            h-10
            w-10
            group-hover:animate-bounce group-focus:animate-bounce
            focus:outline-none
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          fill="none"
          stroke="currentColor"
          stroke-width="25"
        >
          <circle cx="250.22" cy="250.39" r="236.49" />
          <path
            d="M183.31 283.89l65.81-69.12 68.01 71.24"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <p class="mt-4 text-center text-sm opacity-75">
      {{ new Date().getFullYear() }}, The Source Project
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>