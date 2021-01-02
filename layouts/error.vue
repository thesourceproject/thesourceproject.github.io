<template>
  <main class="w-full max-w-4xl mx-auto flex flex-col">
    <figure>
      <img src="../assets/images/404-image.svg" alt="404 Page Not Found" />
      <figcaption class="mt-6">
        <h1 class="font-title font-bold text-text-5 text-6xl text-center">
          OOPS!
        </h1>
        <p class="mt-4 text-text-5 text-2xl text-center">
          We can't seem to find this page.
        </p>
      </figcaption>
    </figure>
    <NuxtLink
      to="/"
      class="mt-10 mx-auto bg-background-2 px-8 py-2 text-text-2 rounded-full text-lg hover:shadow-md focus:shadow-md focus:outline-none"
    >
      Home
    </NuxtLink>
  </main>
</template>

<script>
export default {
  name: "error",
};
</script>