<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Using built-in data structures of Java and Python"
        date="7 Mar'21"
        readTime="20 min read"
        :tags="[
          'basics',
          'competitive',
          'data',
          'structures',
          'algorithms',
          'beginner',
        ]"
      />
      <p>
        Today we will learn about data structures that are available in Java and
        Python. These are a must-know if you want to get into competitive
        programming.<br />
        Although you can implement these data structures yourself too, it is
        impossible to do so for every problem. So why reinvent the wheel when
        you've got these built right into the library itself?
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        We will start from the basic data structures -
        <strong>Array</strong>, <strong>Stack</strong>, <strong>Queue</strong>,
        <strong>Linked List</strong> and then we will move on to the more
        advanced ones - <strong>Set</strong>, <strong>Map</strong>,
        <strong>Heap</strong>.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Array</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        Array is a data structure which allows for O(1) read/write operations.
        This is because its elements are kept in contiguous memory locations
        which makes it easy to calculate the address of any position.
      </p>
      <CodeSnippet
        code="// Java
import java.util.Arrays; // Only required for using the Arrays.toString() function.
class DataStructures {
    public static void main(String args[]) {
        int array[] = new int[5]; // Create a primitive int array.
        System.out.println(Arrays.toString(array)); // [0, 0, 0, 0, 0]
        array[0] = 3; // Set value at index 0 to 3.
        array[2] = 6;
        System.out.println(Arrays.toString(array)); // [3, 0, 6, 0, 0]
        System.out.println(array[2]); // 6 (Get value at index 2)
        System.out.println(array.length); // 5 (Get size of array)
    }
}"
        lang="language-java"
      />
      <p>
        In Java, arrays are non-resizable and its size must be provided at
        creation time.<br />
        However, the Java Collections Framework provides the
        <strong>ArrayList</strong> class which is an array-like data structure
        but can dynamically grow in size as needed. It is present in the
        <em>java.util</em> package(like the others below).
      </p>
      <CodeSnippet
        code="// Java
import java.util.*;
class DataStructures {
    public static void main(String args[]) {
        List<Integer> arrayList = new ArrayList<>(); // Create an ArrayList of Integer type.
        System.out.println(arrayList); // []
        System.out.println(arrayList.isEmpty()); // true
        arrayList.add(3); // Add value 3 to the end of list.
        arrayList.add(6);
        System.out.println(arrayList); // [3, 6]
        System.out.println(arrayList.get(1)); // 6 (Get value at index 1)
        arrayList.set(1, 7); // Set value at index 1 to 7.
        System.out.println(arrayList); // [3, 7]
        System.out.println(arrayList.size()); // 2 (Get size of arraylist)
        System.out.println(arrayList.remove(0)); // 3 (Remove and return value at index 0)
        System.out.println(arrayList); // [7]
    }
}"
        lang="language-java"
      />
      <p>
        The <em>List</em> interface contains all the basic methods required for
        read/write operations while remaining more generic and flexible.
        Therefore, it is preferred to ArrayList(which implements the
        <em>List</em> interface) to declare list-like data structures.<br />
        We can also declare our ArrayList with
        <em>ArrayList&lt;Integer&gt;</em> which would allow us to use
        ArrayList-specific methods like <em>ensureCapacity()</em>.<br />
        <strong>Note</strong> - You might wonder why we used
        <em>List&lt;Integer&gt;</em> instead of <em>List&lt;int&gt;</em>. This
        is because Java collections can only store objects and not primitive
        types. Therefore, we need to use their respective wrapper
        classes(<em>Integer</em>, <em>Long</em>, <em>Float</em>,
        <em>Double</em>, <em>Character</em>, <em>Boolean</em>) for them.
      </p>
      <CodeSnippet
        code="# Python3
array = []  # same as -> array = list()
print(array)  # []
array.append(3)  # Add value 3 to the end of list.
array.append(6)
print(array)  # [3, 6]
print(array[1])  # 6 (Get value at index 1)
array[1] = 7  # Set value at index 1 to 7.
print(len(array))  # 2 (Get size of list)
print(array.pop(0))  # 3 (Remove and return value at index 0)
print(array)  # [7]"
        lang="language-python"
      />
      <p>
        In Python, a <em>list</em> is used to store multiple elements in an
        array-like manner. Python lists are resizable by default and can store
        objects of any type.<br />
        <strong>Note</strong> - Python has a module <em>array.array</em> which
        is used to create C-like arrays which can store only a single type of
        basic values(integers, characters, floating-point numbers). These take
        up a lesser amount of space but are less flexible than lists.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Stack</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        Stack is a data structure which only allows read/write operations at one
        end(i.e. the top) in O(1) time. Stack elements are accessed according to
        the <strong>LIFO</strong>(last in first out) rule.
      </p>
      <CodeSnippet
        code="// Java
import java.util.Arrays; // Only required for using the Arrays.toString() function.
class DataStructures {
    public static void main(String args[]) {
        int array[] = new int[5]; // Create a primitive int array.
        System.out.println(Arrays.toString(array)); // [0, 0, 0, 0, 0]
        array[0] = 3; // Set value at index 0 to 3.
        array[2] = 6;
        System.out.println(Arrays.toString(array)); // [3, 0, 6, 0, 0]
        System.out.println(array[2]); // 6 (Get value at index 2)
        System.out.println(array.length); // 5 (Get size of array)
    }
}"
        lang="language-java"
      />
      <p>
        The <em>List</em> interface contains all the basic methods required for
        read/write operations while remaining more generic and flexible.
        Therefore, it is preferred to <em>ArrayList</em> (which implements the
        <em>List</em> interface) to declare list-like data structures.<br />
        We can also declare our ArrayList with
        <em>ArrayList&lt;Integer&gt;</em> which would allow us to use
        ArrayList-specific methods like <em>ensureCapacity()</em>.<br />
        <strong>Note</strong> - You might wonder why we used
        <em>List&lt;Integer&gt;</em> instead of <em>List&lt;int&gt;</em>. This
        is because Java collections can only store objects and not primitive
        types. Therefore, we need to use their respective wrapper
        classes(<em>Integer</em>, <em>Long</em>, <em>Float</em>,
        <em>Double</em>, <em>Character</em>, <em>Boolean</em>) for them.
      </p>
      <CodeSnippet
        code="# Python3
array = []  # same as -> array = list()
print(array)  # []
array.append(3)  # Add value 3 to the end of list.
array.append(6)
print(array)  # [3, 6]
print(array[1])  # 6 (Get value at index 1)
array[1] = 7  # Set value at index 1 to 7.
print(len(array))  # 2 (Get size of list)
print(array.pop(0))  # 3 (Remove and return value at index 0)
print(array)  # [7]"
        lang="language-python"
      />
      <p>
        In Python, a <em>list</em> is used to store multiple elements in an
        array-like manner. Python lists are resizable by default and can store
        objects of any type.
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "basics8",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title:
      "Using built-in data structures of Java and Python | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Today we will learn about data structures that are available in Java and Python. These are a must-know if you want to get into competitive programming.",
      },
    ],
  },
};
</script>