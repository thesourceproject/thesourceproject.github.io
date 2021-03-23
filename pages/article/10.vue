<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Handling user input in Java"
        date="21 Mar '21"
        readTime="15 min read"
        :tags="['basics', 'java', 'beginner']"
      />
      <p>
        In Java, there are two main classes for dealing with user input, namely
        <strong>Scanner</strong> and <strong>BufferedReader</strong>. But which
        one is better? In this tutorial, we will learn how to use both. If
        you're planning to go into competitive programming, this tutorial is a
        must for you.
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        This tutorial assumes that you have some basic understanding of Java,
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
        Let's start with an example of the Scanner class. It is present in the
        <em>java.util</em> package. To use it, we need to create an instance of
        the Scanner class tied to <em>System.in</em>(input stream which is
        typically connected to the keyboard input of console programs).
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
        similar to the <em>next()</em> method by returning the next token(a
        group of non-whitespace characters). The following are the most commonly
        used ones.
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
      <p class="mt-4">
        <strong>Note</strong> - These functions will throw an
        <em>InputMismatchException</em> if the input is of an unexpected type.
      </p>
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
        System.out.println(i + " " + l + " " + f + " " + d + " " + b); // 29 4921 0.5 2.57843 false
    }
}'
        lang="language-java"
      />
      <p>
        Scanner does not have a separate method to read in a character. Instead,
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
        competitive programming. BufferedReader, due to its larger buffer size,
        performs much better.<br />
        It is also synchronized, meaning that it is thread-safe, when working in
        a multi-threading environment.<br /><br />
        Let's look at a basic example of BufferedReader.
      </p>
      <CodeSnippet
        code='import java.io.*; // Import the InputStreamReader, BufferedReader, and IOException classes.
class JavaInput {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter you name: ");
        String name = br.readLine(); // John Smith
        System.out.println(name); // John Smith
    }
}'
        lang="language-java"
      />
      <p>
        The syntax for BufferedReader is slightly more difficult to remember.
        One notable difference is that the <em>readLine()</em> and
        <em>read()</em> methods of BufferedReader throw <em>IOException</em>.
        Therefore, it must either be caught(in a try-catch) or thrown by
        <em>main()</em>.<br />
        The <em>readLine()</em> method works similar to the
        <em>nextLine()</em> method of Scanner and does not split the input into
        tokens.<br />
        Unlike Scanner, BufferedReader does not do any parsing of the input.
        This means we have to manually convert the returned string to our
        desired data-type using their wrapper class functions.<br />
        <strong>Note</strong> - Exception handling in Java will be covered in
        detail in a later tutorial.
      </p>
      <ul class="mt-4 list-disc list-inside">
        <li><em>Integer.parseInt()</em></li>
        <li><em>Long.parseLong()</em></li>
        <li><em>Float.parseFloat()</em></li>
        <li><em>Double.parseDouble()</em></li>
        <li>
          <em>Boolean.parseBoolean()</em> - will only return true only if the
          string is exactly <em>true</em>, otherwise false.
        </li>
      </ul>
      <p class="mt-4">
        <strong>Note</strong> - These functions will throw a
        <em>NumberFormatException</em> if the input is of an unexpected type.
      </p>
      <CodeSnippet
        code='import java.io.*; // Import the InputStreamReader, BufferedReader, and IOException classes.
class JavaInput {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter random data:"); // Input has to be given using multiple lines.
        int i = Integer.parseInt(br.readLine()); // 29
        long l = Long.parseLong(br.readLine()); // 4921
        float f = Float.parseFloat(br.readLine()); // 0.5
        double d = Double.parseDouble(br.readLine()); // 2.57843
        boolean b = Boolean.parseBoolean(br.readLine()); // false
        System.out.println(i + " " + l + " " + f + " " + d + " " + b); // 29 4921 0.5 2.57843 false
    }
}'
        lang="language-java"
      />
      <p>
        Unlike Scanner, BufferedReader has a method for reading in a single
        character(as an <em>int</em>, not char) named <em>read()</em>. But use
        this method carefully as it does not ignore the terminating newline
        character. To understand this, run the following.
      </p>
      <CodeSnippet
        code='import java.io.*; // Import the InputStreamReader, BufferedReader, and IOException classes.
class JavaInput {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter first character:");
        char c1 = (char) (br.read()); // Typecast int to char.
        System.out.println("Enter second character:");
        char c2 = (char) (br.read());
        System.out.println(c1 + " " + c2);
    }
}'
        lang="language-java"
      />
      <p>
        When you type in your first character and press <strong>Enter</strong>,
        the program doesn't prompt you for the second time. This is because the
        terminating newline in your first input gets counted as the second
        character.<br />
        To avoid this problem, you can use the same idea used for Scanner i.e.
        taking input using <em>readLine()</em> and obtain its first character
        using <em>charAt(0)</em>.<br /><br />
        In competitive programming, the input is usually given in the form of
        space-separated integers or strings. The Scanner class has methods to
        directly parse these tokens. But how can this be done with
        BufferedReader? The
        <strong>StringTokenizer</strong> class will help us here.
      </p>
      <CodeSnippet
        code='import java.io.*; // Import the InputStreamReader, BufferedReader, and IOException classes.
import java.util.StringTokenizer; // Import the StringTokenizer class.
class JavaInput {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter numbers separated by comma:");
        StringTokenizer st = new StringTokenizer(br.readLine(), ", "); // 10, 20, 30, 40 (Tokenize the string using ", " as the delimiter)
        int sum = 0;
        while (st.hasMoreTokens()) {
            sum += Integer.parseInt(st.nextToken());
        }
        System.out.println(sum); // 100
    }
}'
        lang="language-java"
      />
      <p>
        The <em>StringTokenizer()</em> constructor takes in two arguments. The
        original string and the delimiter(optional, whitespace by default). The
        <em>hasMoreTokens()</em> method checks whether there are any tokens
        remaining and <em>nextToken()</em> returns it as a string. It is then up
        to us how to parse it.<br /><br />
        That's all you need to know about user input in Java. Now try to use the
        Scanner and BufferedReader classes in your programs and see which one
        suits your use-case better.
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
          "In Java, there are two main classes for dealing with user input, namely Scanner and BufferedReader. But which one is better? In this tutorial, we will learn how to use both.",
      },
    ],
  },
};
</script>