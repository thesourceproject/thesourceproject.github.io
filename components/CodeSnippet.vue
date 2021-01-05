<template>
  <div class="mx-10 my-4">
    <pre><code :class="lang">{{ code }}</code></pre>
  </div>
</template>

<script>
import Prism from "~/plugins/prism";
export default {
  name: "CodeSnippet",
  props: ["code", "lang"],
  mounted() {
    Prism.highlightAll();
  },
};
</script>