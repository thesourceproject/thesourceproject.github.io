<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="How to use lambda functions for custom sorting"
        date="29 Mar '21"
        readTime="10 min read"
        :tags="[
          'basics',
          'data',
          'structures',
          'algorithms',
          'java',
          'python',
          'beginner',
        ]"
      />
      <p>
        Java and Python provide an inbuilt sorting functionality that sorts
        items in a non-decreasing manner. But, what if we want to use a custom
        sorting logic?
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        <strong>Note</strong> - This tutorial assumes you have some basic
        understanding of Java and Python. You may refer to our
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          :to="{ path: '/find', query: { q: 'basics' } }"
          >previous tutorials</NuxtLink
        >
        before you continue.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Java</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CodeSnippet
        code="// Java
import java.util.*; // Import 'Arrays' and 'Comparator' classes.
class CustomSorting {
    public static void main(String[] args) {
        int[] array1 = { 2, 4, 1, 5, 3 }; // Declare a primitive int array.
        Arrays.sort(array1); // Sort this array in a non-decreasing order.
        System.out.println(Arrays.toString(array1)); // [1, 2, 3, 4, 5]
        Integer[] array2 = { 2, 4, 1, 5, 3 }; // Declare an Integer array.
        Arrays.sort(array2, Comparator.reverseOrder()); // Reverse the sorting order.
        System.out.println(Arrays.toString(array2)); // [5, 4, 3, 2, 1]
    }
}"
        lang="language-java"
      />
      <p>
        The <em>java.util.Arrays</em> class of Java provides an in-place(i.e.
        using no auxiliary space) <em>sort()</em> function that is used to sort
        arrays in a non-decreasing manner. One big limitation of this function
        is that
        <strong>it can only sort generic-type arrays with a comparator</strong
        >.<br />
        We cannot use custom comparators or even
        <em>Comparator.reverseOrder()</em> with primitive-type(int, long,
        char,float, double) arrays. In that case, we can copy our array to its
        respective wrapper-value(Integer, Long, Character, Float, Double) array
        and apply the <em>sort()</em> function on it.
      </p>
      <CodeSnippet
        code="// Java
import java.util.*;
class CustomSorting {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(2, 4, 1, 5, 3); // Create a new list.
        Collections.sort(list); // Sort the list with its natural order.
        System.out.println(list); // [1, 2, 3, 4, 5]
        Collections.sort(list, Comparator.reverseOrder()); // Reverse the sorting order.
        System.out.println(list); // [5, 4, 3, 2, 1]
    }
}"
        lang="language-java"
      />
      <p>
        The Java Collections Interface also provides a similar
        <em>sort()</em> function which can be used on any sequential
        data-structures. It also takes an optional comparator to define the
        sorting order.<br /><br />
        Lambda expressions are used to create anonymous functions(i.e. which do
        not belong to any class) which act like objects. They make the code
        concise, especially if we only want a single functionality without
        creating a separate class for it.<br />
        <strong>Comparator</strong> is a functional-interface(i.e. it has only
        one abstract method - <nobr><em>compare(T o1, T o2)</em></nobr
        >) and can therefore be used as the assignment target for a lambda
        expression.<br />
        Let's understand this with an example.
      </p>
      <CodeSnippet
        code="// Java
import java.util.*; // Import 'Arrays' and 'Comparator' classes.

class CompareBySecond implements Comparator<Integer[]> {
    public int compare(Integer[] a, Integer[] b) {
        return a[1].compareTo(b[1]); // Same as 'a[1] - b[1]' but safe from overflow.
    }
}

public class CustomSorting {
    public static void main(String[] args) {
        Integer[][] array = { { 1, 2, 0 }, { 4, 1, 1 }, { 5, 0, 1 }, { 2, 5, 1 }, { 6, 3, 4 } }; // Declare a 2-D Integer array.
        Arrays.sort(array, new CompareBySecond()); // Sort by second-indexed value.
        System.out.println(Arrays.deepToString(array)); // [[5, 0, 1], [4, 1, 1], [1, 2, 0], [6, 3, 4], [2, 5, 1]]
    }
}"
        lang="language-java"
      />
      <p>
        The syntax for a lambda expression is
        <nobr><strong>(parameter1, parameter2) -> expression</strong></nobr
        ><br />
        If we use a lambda expression instead, our code will look something like
        this.
      </p>
      <CodeSnippet
        code="// Java
import java.util.*; // Import 'Arrays' and 'Comparator' classes.
public class CustomSorting {
    public static void main(String[] args) {
        Integer[][] array = { { 1, 2, 0 }, { 4, 1, 1 }, { 5, 0, 1 }, { 2, 5, 1 }, { 6, 3, 4 } };
        Arrays.sort(array, (a, b) -> a[1].compareTo(b[1])); // Pass lambda expression as comparator.
        System.out.println(Arrays.deepToString(array)); // [[5, 0, 1], [4, 1, 1], [1, 2, 0], [6, 3, 4], [2, 5, 1]]
    }
}"
        lang="language-java"
      />
      <p>
        Notice how concise it looks now. No need for creating separate classes
        for different comparators. If we wanted to sort according to the
        third-indexed value, we simply modify the lambda expression.<br /><br />
        We are not limited to simple expressions and can also use more complex
        sorting logic in our lambda expressions. Simply enclose the multiple
        statements and the return statement within curly braces.<br />
        Suppose, we wanted to sort the integer arrays by the first-index, then
        the second-index, and then finally the third index. Our lambda
        expression would look like this.
      </p>
      <CodeSnippet
        code="// Java
public class CustomSorting {
    public static void main(String[] args) {
        Integer[][] array = { { 1, 2, 0 }, { 2, 1, 5 }, { 2, 1, 1 }, { 1, 5, 1 }, { 2, 3, 4 } };
        Arrays.sort(array, (a, b) -> {
            if (a[0] != b[0]) {
                return a[0].compareTo(b[0]);
            }
            if (a[1] != b[1]) {
                return a[1].compareTo(b[1]);
            }
            return a[2].compareTo(b[2]);
        });
        System.out.println(Arrays.deepToString(array)); // [[1, 2, 0], [1, 5, 1], [2, 1, 1], [2, 1, 5], [2, 3, 4]]
    }
}"
        lang="language-java"
      />
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Python</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CodeSnippet
        code="# Python3
array1 = [2, 4, 1, 5, 3]  # Declare our array.
array1.sort()  # Sort the array.
print(array1)  # [1, 2, 3, 4, 5]
array2 = [2, 4, 1, 5, 3]
array2.sort(reverse=True)  # Reverse the sorting order.
print(array2)  # [5, 4, 3, 2, 1]"
        lang="language-python"
      />
      <p>
        Python lists have an in-place <em>sort()</em> function which accepts an
        optional <em>reverse</em> parameter that reverses the sorting order.<br />
        There's also a very helpful <em>sorted()</em> function that creates a
        copy of the list, sorts it, and then returns it.
      </p>
      <CodeSnippet
        code="# Python3
array1 = [2, 4, 1, 5, 3]
array2 = sorted(array1, reverse=True)  # Return a reverse-sorted copy of the list.
print(array1)  # [2, 4, 1, 5, 3] (Original list remains unmodified)
print(array2)  # [5, 4, 3, 2, 1]"
        lang="language-python"
      />
      <p>
        And there you go. We have covered all the important inbuilt data
        structures of Python. Now use these to solve your algorithmic problems
        more efficiently.
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "basics12",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title:
      "How to use lambda functions for custom sorting | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Java and Python provide an inbuilt sorting functionality that sorts items in a non-decreasing manner. But, what if we want to use a custom sorting logic?",
      },
    ],
  },
};
</script>