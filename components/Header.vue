<template>
  <header
    class="container mx-auto px-4 py-6 sm:px-8 flex items-center justify-between"
  >
    <NuxtLink to="/" class="font-title text-lg text-text-4 select-none">
      <span>TheSourceProject<strong class="text-text-3">_</strong></span>
    </NuxtLink>
    <nav class="hidden md:inline mx-auto">
      <NuxtLink
        to="/"
        class="hover:underline focus:underline focus:outline-none"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about-us"
        class="ml-4 hover:underline focus:underline focus:outline-none"
        >About Us
      </NuxtLink>
    </nav>
    <nav class="flex items-center">
      <button class="p-2" title="Change Theme" @click="changeTheme">
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
          />
        </svg>
      </button>
      <NuxtLink
        to="/find"
        class="ml-2 sm:ml-4 bg-background-2 px-6 py-2 rounded-full text-text-2 hover:shadow-md focus:shadow-md focus:outline-none"
        title="Find Article"
      >
        <figure class="flex items-center">
          <figcaption class="mr-4">Find</figcaption>
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </figure>
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    changeTheme() {
      this.$emit("change-theme");
    },
  },
};
</script>
