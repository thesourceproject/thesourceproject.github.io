<template>
  <div class="my-4">
    <div
      class="mb-4 p-4 bg-gray-800 rounded-md text-white grid gap-4 font-mono"
    >
      <div v-for="element in elements" :key="element.ref">
        <span class="text-yellow-200">.{{ element.name }}</span> {
        <div class="ml-4">
          <div
            v-for="property in element.properties"
            :key="property.name"
            class="flex gap-4"
          >
            <p class="text-blue-300">{{ property.name }}:</p>
            <div class="flex flex-wrap gap-4">
              <button
                v-for="value in property.values"
                :key="value"
                :class="
                  active[element.ref][property.name] === value &&
                  'text-green-400'
                "
                @click="setProperty(element.ref, property.name, value)"
              >
                {{ value }}
              </button>
            </div>
          </div>
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