<template>
  <header class="my-8 flex flex-col">
    <h1 class="text-5xl font-bold leading-snug">{{ title }}</h1>
    <p class="mt-6 opacity-50">{{ date }} | {{ readTime }}</p>
    <p class="mt-2 flex flex-wrap">
      <NuxtLink
        v-for="tag in tags"
        :key="tag"
        :to="`/find/${tag}`"
        class="mr-4 hover:underline focus:underline focus:outline-none"
      >
        #{{ tag }}
      </NuxtLink>
    </p>
  </header>
</template>

<script>
export default {
  name: "ArticleHeader",
  props: ["title", "readTime", "date", "tags"],
};
</script>