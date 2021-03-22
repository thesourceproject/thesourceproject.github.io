<template>
  <main>
    <section
      class="bg-background-3 p-8 rounded-3xl flex items-center flex-col-reverse md:flex-row justify-evenly"
    >
      <div class="flex flex-col">
        <p
          class="mt-6 md:mt-0 text-text-2 text-2xl leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl lg:leading-loose xl:text-3xl xl:leading-extra-loose"
        >
          Collection of free<br />
          tutorials to level-up<br />
          your coding skills_
        </p>
        <NuxtLink
          to="/find"
          class="mt-4 lg:mt-6 self-center md:self-start bg-background-2 py-3 px-6 md:text-sm lg:text-base xl:text-lg rounded-full text-text-2"
        >
          Get Started
        </NuxtLink>
      </div>
      <img
        class="h-72 md:h-48 lg:h-64 xl:h-80"
        src="~/assets/images/hero-image.svg"
        alt="The Source Project"
      />
    </section>
    <section class="mt-16">
      <div class="flex flex-col">
        <h2 class="text-2xl">Category</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <div
        class="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 text-text-2 text-xl"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="{ path: '/find', query: { q: category.id } }"
          class="h-52 p-5 rounded-3xl flex flex-col group focus:outline-none"
          :class="getBackground(category.id)"
        >
          <p>{{ category.name }}</p>
          <svg
            class="mt-auto ml-auto h-5 w-5 group-hover:animate-shake group-focus:animate-shake"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
            /></svg
        ></NuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
import helper from "~/mixins/helper";

export default {
  name: "home",
  mixins: [helper],
  data() {
    return {
      categories: [
        { id: "basics", name: "Programming Basics" },
        { id: "competitive", name: "Competitive Programming" },
        { id: "frontend", name: "Frontend Development" },
        { id: "backend", name: "Backend Development" },
        { id: "miscellaneous", name: "Miscellaneous" },
      ],
    };
  },
};
</script>