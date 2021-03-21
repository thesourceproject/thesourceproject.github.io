<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Handling user input in Java"
        date="21 Mar '21"
        readTime="10 min read"
        :tags="['basics', 'java', 'beginner']"
      />
      <p>
        In Java, there are two main classes for dealing with user input, namely
        <strong>Scanner</strong> and <strong>BufferedReader</strong>. But which
        one is better? In this tutorial we will learn and compare the two. If
        you're planning to go into competitive programming, this tutorial is a
        must for you.
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        Before we dive into the code, first we need to understand how input
        works. When you type in characters in the console and press
        <strong>Enter</strong>, your input(including the newline character at
        the end) goes to the program as a stream. The <em>Scanner</em> and
        <em>BufferedReader</em> classes process this stream of characters in a
        slightly different manner.<br /><br />Let's start with an example of
        <em>Scanner</em> class. It is present in the <em>java.util</em> package.
      </p>
      <CodeSnippet
        code='import java.util.Scanner; // Import the Scanner class.
class JavaInput {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.next(); // John
        System.out.println("Hello " + name); // Hello John
        sc.close();
    }
}'
        lang="language-java"
      />
      <p>
        That's all you need to know about handling user input in Python. Now you
        can practice making some programs requiring user input on your own.
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "basics10",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Handling user input in Java | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "In Java, there are two main classes for dealing with user input, namely Scanner and BufferedReader. But which one is better? In this tutorial we will learn and compare the two.",
      },
    ],
  },
};
</script>