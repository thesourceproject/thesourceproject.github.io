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
          :to="{ path: '/find', query: { q: 'c++' } }"
          class="h-52 bg-cpp p-5 rounded-3xl flex flex-col hover:shadow-lg focus:shadow-lg focus:outline-none"
        >
          <p>C++</p>
          <svg
            class="mt-auto ml-auto h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
            /></svg
        ></NuxtLink>
        <NuxtLink
          :to="{ path: '/find', query: { q: 'java' } }"
          class="h-52 bg-java p-5 rounded-3xl flex flex-col hover:shadow-lg focus:shadow-lg focus:outline-none"
        >
          <p>Java</p>
          <svg
            class="mt-auto ml-auto h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
            /></svg></NuxtLink
        ><NuxtLink
          :to="{ path: '/find', query: { q: 'javascript' } }"
          class="h-52 bg-javascript p-5 rounded-3xl flex flex-col hover:shadow-lg focus:shadow-lg focus:outline-none"
        >
          <p>Javascript</p>
          <svg
            class="mt-auto ml-auto h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
            /></svg></NuxtLink
        ><NuxtLink
          :to="{ path: '/find', query: { q: 'python' } }"
          class="h-52 bg-python p-5 rounded-3xl flex flex-col hover:shadow-lg focus:shadow-lg focus:outline-none"
        >
          <p>Python</p>
          <svg
            class="mt-auto ml-auto h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink
          :to="{ path: '/find', query: { q: 'miscellaneous' } }"
          class="h-52 bg-misc p-5 rounded-3xl flex flex-col hover:shadow-lg focus:shadow-lg focus:outline-none"
        >
          <p>Miscellaneous</p>
          <svg
            class="mt-auto ml-auto h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
            />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "home",
};
</script>