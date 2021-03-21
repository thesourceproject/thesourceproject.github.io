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
        This tutorial assumes that you have some basic understanding of Java
        particularly data-types. Before we dive into the code, first we need to
        understand how input works. When you type in characters in the console
        and press
        <strong>Enter</strong>, your input(including the newline character at
        the end) goes to the program as a stream. The Scanner and BufferedReader
        classes process this stream of characters in a slightly different
        manner.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Scanner</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        Let's start with an example of Scanner class. It is present in the
        <em>java.util</em> package. To use it, we need to create an instance of
        the Scanner class tied to <em>System.in</em>(input stream which is
        typically connected to keyboard input of console programs).
      </p>
      <CodeSnippet
        code='import java.util.Scanner; // Import the Scanner class.
class JavaInput {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.next(); // John
        System.out.println("Hello " + name); // Hello John
    }
}'
        lang="language-java"
      />
      <p>
        The <em>next()</em> method of the Scanner class reads in the stream of
        characters until it encounters any whitespace(including newline). It
        then returns those characters as a string(without the terminating
        newline).<br />
        We cannot use this method if we want to input a string with any spaces
        in it. Try to run it again with multiple words. It will only capture the
        first word and ignore the rest. For this, we have another method named
        <em>nextLine()</em>.<br />
        <strong>Note</strong> - If your IDE(text-editor) gives you a warning
        like <em>Resource leak: 'sc' is never closed</em>, you can safely ignore
        it. Unlike file streams, resources tied to <em>System.in</em> are not
        required to be closed.
      </p>
      <CodeSnippet
        code='import java.util.Scanner; // Import the Scanner class.
class JavaInput {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine(); // John Smith
        System.out.println("Hello " + name); // Hello John Smith
    }
}'
        lang="language-java"
      />
      <p>
        What if we need to input numbers and not strings. The Scanner class has
        a number of methods for capturing primitive data-types. These work
        similar to the <em>next()</em> method by returning the next token(group
        of non-whitespace characters). The following are the most commonly used
        ones.
      </p>
      <ul class="mt-4 list-disc list-inside">
        <li><em>nextInt()</em></li>
        <li><em>nextLong()</em></li>
        <li><em>nextFloat()</em></li>
        <li><em>nextDouble()</em></li>
        <li>
          <em>nextBoolean()</em> - Only accepts <em>true</em> or <em>false</em>.
        </li>
      </ul>
      <CodeSnippet
        code='import java.util.Scanner; // Import the Scanner class.
class JavaInput {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter random data: "); // Input can be given in single or multiple lines.
        int i = sc.nextInt(); // 29
        long l = sc.nextLong(); // 4921
        float f = sc.nextFloat(); // 0.5
        double d = sc.nextDouble(); // 2.57843
        boolean b = sc.nextBoolean(); // false
        System.out.println(i + " " + l + " " + f + " " + d + " " + b + " "); // 29 4921 0.5 2.57843 false
    }
}'
        lang="language-java"
      />
      <p>
        Scanner does not have a separate method to read in a character. Instead
        we can use the <em>next()</em> method to input a single character string
        and use <em>charAt(0)</em> to get the first and only character.
      </p>
      <CodeSnippet
        code='import java.util.Scanner; // Import the Scanner class.
class JavaInput {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a single character: ");
        char c = sc.next().charAt(0); // A
        System.out.println(c); // A
    }
}'
        lang="language-java"
      />
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">BufferedReader</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        The Scanner class provides an easy-to-remember way of taking user input
        but it has one major disadvantage. It performs poorly when there is a
        very large amount of data. This becomes a determining factor in
        competitive programming.<br />
        BufferedReader, due to its larger buffer size, performs much better. It
        is also synchronized, meaning that it is thread-safe, when working in a
        multi-threading environment.<br /><br />
        Let's look at a basic example of BufferedReader.
      </p>
      <CodeSnippet
        code='import java.util.Scanner; // Import the Scanner class.
class JavaInput {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.next(); // John
        System.out.println("Hello " + name); // Hello John
    }
}'
        lang="language-java"
      />
      <p>
        Let's start with an example of Scanner class. It is present in the
        <em>java.util</em> package. To use it, we need to create an instance of
        the Scanner class tied to <em>System.in</em>(input stream which is
        typically connected to keyboard input of console programs).
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