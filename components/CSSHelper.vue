<template>
  <div class="sm:mx-10 my-6">
    <div
      class="mb-6 bg-code-1 rounded-md text-code-2 grid gap-4 font-mono whitespace-nowrap overflow-x-auto"
    >
      <div class="p-4">
        <div v-for="element in elements" :key="element.ref">
          <code class="text-code-3">.{{ element.name }} {</code>
          <div
            v-for="property in element.properties"
            :key="property.name"
            class="ml-4"
          >
            <code class="text-code-4">{{ property.name }}:</code>
            <template v-for="(value, i) in property.values">
              <code v-if="i > 0" :key="'span' + value"> | </code
              ><button
                :key="'button' + value"
                class="focus:outline-none focus:underline"
                :class="
                  active[element.ref][property.name] === value && 'text-code-5'
                "
                @click="setProperty(element.ref, property.name, value)"
              >
                <code>{{ value }}</code>
              </button></template
            ><code>;</code>
          </div>
          }
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Prism from "~/plugins/prism";
export default {
  name: "CSSHelper",
  props: ["elements"],
  data() {
    return { active: {} };
  },
  methods: {
    setProperty(ref, property, value) {
      this.$parent.$refs[ref].style.setProperty(property, value);
      this.active[ref][property] = value;
    },
  },
  created() {
    const newActive = {};
    for (const element of this.elements) {
      newActive[element.ref] = {};
      for (const property of element.properties) {
        newActive[element.ref][property.name] = property.values[0];
      }
    }
    this.active = newActive;
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>