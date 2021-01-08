<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Handling user input in Python"
        date="8 Jan '21"
        readTime="5 min read"
        :tags="['python', 'basics', 'beginner']"
      />
      <p>
        While developing
        <a
          class="text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none"
          href="https://www.python.org/"
          target="_blank"
          >Python</a
        >
        applications we often need to allow user interaction, either to obtain
        necessary data or to direct the flow of our program. Python enables this
        functionality through its inbuilt
        <a
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          href="https://docs.python.org/3/library/functions.html#input"
          target="_blank"
          >input()</a
        >
        function. In this tutorial we will learn how to use this function in
        order to create dynamic applications.
      </p>
      <div class="flex flex-col max-w-4xl mt-12">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        Let's start with everyone's favourite, the
        <strong>Hello World!</strong> program. Enter this code in the python
        shell and press <strong>Enter</strong>.
      </p>
      <CodeSnippet code="print('Hello World!')" lang="language-python" />
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "Python3",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Handling user input in Python | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Python is an interpreted, high-level and general-purpose programming language. Python is being used in web development, machine learning and even desktop applications.",
      },
    ],
  },
};
</script>