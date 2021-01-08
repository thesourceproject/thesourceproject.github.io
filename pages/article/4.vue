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
        order to create dynamic applications.<br />
        <strong>Note</strong> - This tutorial assumes you have some basic
        understanding of Python. You may refer to our
        <NuxtLink
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          to="/article/3#Python-fundamentals"
          >previous tutorial</NuxtLink
        >
        before you continue.
      </p>
      <div class="flex flex-col max-w-4xl mt-12">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">Let's start with a basic example.</p>
      <CodeSnippet
        code="name = input('Enter your name: ')
print('Hello', name)"
        lang="language-python"
      />
      <p>
        When you run this, Python will prompt you to enter your name in the
        terminal. Type anything and press enter to continue. It will print
        <em>Hello</em> , then a space and then your name.<br />
        What we did here was that we captured the user input and stored in a
        variable called <strong>name</strong> and then printed a message using
        that variable. The <strong>input()</strong> function can also take an
        <em>optional</em> string which can be shown to the user before giving an
        input which in our case was <strong>Enter your name:</strong
        ><br /><br />
        Now let's perform some mathematical operations on user input but before
        we continue we need to learn a bit about data types in Python. Python
        has some basic data types -
      </p>
      <ul class="mt-4 list-disc list-inside">
        <li>Integer : represents mathematical integers.</li>
        <li>Floating-Point Number : numbers with a fractional part.</li>
        <li>
          Boolean : data type that can only have one of the two values,
          <strong>True</strong> or <strong>False</strong>.
        </li>
        <li>
          String : set of characters such as letters, numbers, symbols, etc.
        </li>
      </ul>
      <p class="mt-4">
        The <strong>input()</strong> function returns a string that represents
        the captured user input but we cannot directly perform mathematical
        operations on strings in Python.<br />
        Therefore, we need to convert our input string to an appropriate data
        type first.<br />
        Run the following.
      </p>
      <CodeSnippet
        code="number = int(input())
print('Cube of the given number is ', number ** 3)"
        lang="language-python"
      />
      <p>
        Before storing our user input in the variable
        <strong>number</strong>, we convert it to an integer using the
        <strong>int()</strong> function. Now we use the
        <strong>**</strong>(Exponentiation operator) to find the cube of the
        integer.<br />
        <strong>Note</strong> - if you supply a non-integer value to the
        program, you will receive a message like
        <em>ValueError: invalid literal for int() with base 10</em>. This is
        because the <strong>int()</strong> function expects an integer string in
        order to convert its type.
      </p>
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
          "While developing Python applications we often need to allow user interaction, either to obtain necessary data or to direct the flow of our program. Python enables this functionality through its inbuilt input() function.",
      },
    ],
  },
};
</script>