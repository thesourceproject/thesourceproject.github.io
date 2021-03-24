<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Handling user input in Python"
        date="8 Jan '21"
        readTime="5 min read"
        :tags="['basics', 'python', 'beginner']"
      />
      <p>
        While developing Python applications we often need to allow user
        interaction, either to obtain necessary data or to direct the flow of
        our program. Python enables this functionality through its inbuilt
        <strong>input()</strong>
        function. In this tutorial, we will learn how to use it to create
        dynamic applications.<br />
        <strong>Note</strong> - This tutorial assumes you have some basic
        understanding of Python. You may refer to our
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/3-Python-fundamentals"
          >previous tutorial</NuxtLink
        >
        before you continue.
      </p>
      <div class="mt-12 flex flex-col">
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
        <em>Hello</em>, then space, and then your name.<br />
        What we did here was that we captured the user input and stored it in a
        variable called <strong>name</strong> and then printed a message using
        that variable. The <em>input()</em> function can also take an
        <em>optional</em> string that can be shown to the user before giving an
        input which in our case was <strong>Enter your name:</strong
        ><br /><br />
        Now let's perform some mathematical operations on user input but before
        we continue we need to learn a bit about data types in Python. Python
        has some basic data types -
      </p>
      <ul class="mt-4 list-disc list-inside">
        <li>Integer: represents mathematical integers.</li>
        <li>Floating-Point Number: numbers with a fractional part.</li>
        <li>
          Boolean: a data type that can only have one of the two values,
          <strong>True</strong> or <strong>False</strong>.
        </li>
        <li>
          String: a set of characters such as letters, numbers, symbols, etc.
        </li>
      </ul>
      <p class="mt-4">
        The <em>input()</em> function returns a string that represents the
        captured user input but we cannot directly perform mathematical
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
        because the <strong>int()</strong> function expects an integer string to
        convert its type.<br /><br />
        Similarly, we can input floating-point numbers by using the
        <strong>float()</strong> function.
      </p>
      <CodeSnippet
        code="num1 = float(input())
num2 = float(input())
print('Sum of the given numbers is ', num1 + num2)"
        lang="language-python"
      />
      <p>
        This program can not only take integers(e.g. 1, 4, 200512) but also
        fractional-numbers(e.g. 3.14, 5.6, 925.163) as input.<br />
        Like in the previous program, it will throw a <em>ValueError</em> if a
        non-numeric value is supplied.<br /><br />
        We can also use the <em>input()</em> function inside a loop. This is
        useful when we do not know in advance how many times the user input is
        needed.
      </p>
      <CodeSnippet
        code="total = 0
numbers = int(input('How many numbers do you want to enter: '))
for i in range(numbers):
  total = total + float(input()) # total += float(input())
print('Sum of the given numbers is ', total)"
        lang="language-python"
      />
      <p>
        First, we create a variable <strong>total</strong>(not <em>sum</em>, as
        <em>sum</em> is an in-built function of Python and therefore, should be
        avoided). Then we ask the user how many numbers he/she will input.<br />
        After that, we run a <strong>for</strong> loop that many times, each
        time asking for a number and adding it to our
        <strong>total</strong>.<br /><br />
        What if the user provides all input values in a single line separated by
        spaces? For example, <em>10 25 12 47</em>. How will we unpack the
        individual values?<br />
        We know that the <em>input()</em> function returns a string. Python
        strings have an inbuilt function called <strong>split()</strong> which
        splits the string based on a given delimiter(by default, whitespace) and
        returns a list containing the individual strings.
      </p>
      <CodeSnippet
        code="fruits = input('Enter the names of fruits separated by comma: ')  # Apple, Banana, Cherry
print(fruits.split(', '))  # ['Apple', 'Banana', 'Cherry'] (Split the string using the delimiter ', ')"
        lang="language-python"
      />
      <p>
        Notice that the split function will return a list of strings. But, what
        if we had numbers in our input? We will simply loop over each string in
        this list and call the <em>int()</em> or <em>float()</em> function upon
        it.
      </p>
      <CodeSnippet
        code="numbers = input('Enter the numbers separated by space: ')  # 10 25 12 47
numberList = numbers.split()  # By default, the string will be split based on whitespace.
print(numberList)  # ['10', '25', '12', '47']
for i in range(len(numberList)):
    numberList[i] = int(numberList[i])  # Convert each string to an integer.
print(numberList)  # [10, 25, 12, 47]"
        lang="language-python"
      />
      <p>
        Luckily, Python has an easier way of doing this with the help of the
        <strong>map()</strong> function. The <em>map()</em> function returns an
        iterator that applies the given function to each of the items in the
        iterable(list). We wrap this in a <em>list()</em> function call so that
        we obtain the list from this iterator.
      </p>
      <CodeSnippet
        code="numbers = input('Enter the numbers separated by space: ')  # 10 25 12 47
numberList = list(map(int, numbers.split()))
print(numberList)  # [10, 25, 12, 47]"
        lang="language-python"
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
  name: "basics4",
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