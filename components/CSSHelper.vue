<template>
  <div class="mx-10 my-4">
    <div
      class="mb-4 p-4 bg-code-1 rounded-md text-code-2 grid gap-4 font-mono whitespace-nowrap overflow-x-auto"
    >
      <div v-for="element in elements" :key="element.ref">
        <span class="text-code-3">.{{ element.name }}</span> {
        <div
          v-for="property in element.properties"
          :key="property.name"
          class="ml-4"
        >
          <span class="text-code-4">{{ property.name }}:</span>
          <template v-for="(value, i) in property.values">
            <span v-if="i > 0" :key="'span' + value"> | </span
            ><button
              :key="'button' + value"
              class="focus:outline-none focus:underline"
              :class="
                active[element.ref][property.name] === value && 'text-code-5'
              "
              @click="setProperty(element.ref, property.name, value)"
            >
              {{ value }}
            </button></template
          >;
        </div>
        }
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