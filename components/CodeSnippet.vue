<template>
  <code class="mx-8 whitespace-pre-wrap">
    {{ code }}
  </code>
</template>

<script>
export default {
  name: "CodeSnippet",
  props: ["code"],
};
</script>