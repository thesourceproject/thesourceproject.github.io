<template>
  <main>
    <label
      class="mx-auto w-full max-w-md px-6 py-4 rounded-full flex items-center bg-background-4 text-text-3"
      ><button v-if="query" class="focus:outline-none" @click="query = ''">
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          />
        </svg>
      </button>
      <svg
        v-else
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        />
      </svg>
      <input
        type="text"
        class="ml-3 w-full bg-transparent placeholder-current focus:outline-none"
        placeholder="Type in something"
        v-model.trim="query"
      />
    </label>
    <section class="max-w-4xl mx-auto mt-8 grid gap-8 text-text-2">
      <article
        v-for="article in queryArticles"
        :key="article.id"
        :class="`${getBackground(
          article.category
        )} p-5 rounded-3xl flex flex-col text-sm`"
      >
        <NuxtLink
          :to="`/article/${article.id}#${kebabCase(article.title)}`"
          class="hover:underline focus:underline focus:outline-none"
          ><h2 class="text-3xl leading-snug">{{ article.title }}</h2>
        </NuxtLink>
        <p class="mt-1">{{ article.date }} | {{ article.readTime }}</p>
        <p class="mt-6 leading-loose">{{ article.fragment }}</p>
        <p class="mt-6 flex flex-wrap">
          <button
            v-for="tag in article.tags"
            :key="tag"
            class="mr-4 hover:underline focus:underline focus:outline-none"
            @click="query = tag"
          >
            #{{ tag }}
          </button>
        </p>
      </article>
    </section>
  </main>
</template>

<script>
import Fuse from "fuse.js";

export default {
  name: "find",
  head: {
    title: "Find | The Source Project",
  },
  data() {
    return {
      query: "",
      articles: [
        {
          id: 2,
          category: "misc",
          title: "Publishing your first project to Github",
          readTime: "10 min read",
          date: "4 Jan '21",
          fragment:
            "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere...",
          tags: ["miscellaneous", "github", "git", "basics", "beginner"],
        },
        {
          id: 1,
          category: "misc",
          title: "Installing Visual Studio Code and Git in Windows",
          readTime: "20 min read",
          date: "23 Dec '20",
          fragment:
            "Visual Studio Code(also known as VS Code) is a powerful free open source text editor by Microsoft. VS Code is available for Windows, Linux, and macOS...",
          tags: [
            "miscellaneous",
            "vscode",
            "git",
            "windows",
            "basics",
            "beginner",
          ],
        },
      ],
    };
  },
  methods: {
    kebabCase(title) {
      return title.split(/\s+/).join("-");
    },
    getBackground(category) {
      return {
        cpp: "bg-cpp",
        java: "bg-java",
        javascript: "bg-javascript",
        python: "bg-python",
        misc: "bg-misc",
      }[category];
    },
  },
  computed: {
    fuse() {
      return new Fuse(this.articles, {
        keys: ["title", "tags"],
        shouldSort: true,
      });
    },
    queryArticles() {
      if (this.query) {
        return this.fuse
          .search(this.query)
          .map((searchItem) => searchItem.item);
      } else {
        return this.articles;
      }
    },
  },
  mounted() {
    this.query = this.$route.query.q || "";
  },
};
</script>