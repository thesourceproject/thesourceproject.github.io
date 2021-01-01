<template>
  <footer class="container mx-auto mt-24 p-4 sm:px-8">
    <section class="flex justify-between">
      <figure class="flex flex-col items-center group">
        <figcaption>Follow Us On</figcaption>
        <a
          class="mt-2 group-hover:animate-bounce focus:outline-none"
          href="https://www.instagram.com/the_source_project"
          target="_blank"
        >
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
      </figure>
      <figure class="flex flex-col items-center group">
        <figcaption>About Us</figcaption>
        <NuxtLink
          to="/about-us"
          class="mt-2 group-hover:animate-bounce focus:outline-none"
        >
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            />
          </svg>
        </NuxtLink>
      </figure>
      <figure class="flex flex-col items-center group">
        <figcaption>Back To Top</figcaption>
        <button
          class="mt-2 group-hover:animate-bounce focus:outline-none"
          @click="goToTop"
        >
          <svg
            class="h-10 w-10"
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
      </figure>
    </section>
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