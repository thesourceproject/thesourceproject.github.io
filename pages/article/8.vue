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
      <div class="flex flex-col max-w-4xl mt-12">
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
      <h3 class="mt-6 text-xl">Array</h3>
      <p class="mt-4">
        An array is a data structure which allows for
        <strong>O(1)</strong> read/write operations. This is because its
        elements are kept in contiguous memory locations which makes it easy to
        calculate the address of any position.
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
        <em>java.util</em> package.
      </p>
      <CodeSnippet
        code="// Java
import java.util.ArrayList;
class DataStructures {
    public static void main(String args[]) {
        List<Integer> arrayList = new ArrayList<>(); // Create an ArrayList of Integer type.
        System.out.println(arrayList); // []
        arrayList.add(3); // Add value 3 to the end of list.
        arrayList.add(6);
        System.out.println(arrayList); // [3, 6]
        System.out.println(arrayList.get(1)); // 6 (Get value at index 1)
        arrayList.set(1, 7); // Set value at index 1 to 7.
        System.out.println(arrayList); // [3, 7]
        arrayList.remove(0); // Remove value at index 0.
        System.out.println(arrayList); // [7]
    }
}"
        lang="language-java"
      />
      <p>
        <strong>Notice</strong> - we declared our ArrayList using
        <em>List&lt;Integer&gt;</em> instead of <em>List&lt;int&gt;</em> because
        Java collections can only store objects and not primitive types.
        Therefore, we need to use the wrapper classes(<em>Integer</em>,
        <em>Long</em>, <em>Float</em>, <em>Double</em>, <em>Character</em>,
        <em>Boolean</em>) for them.
      </p>
      <CodeSnippet
        code="# Python3
def twoSum(self, nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
        for j in range(len(nums)):
            if(i != j):
                if(nums[i] + nums[j] == target):
                    return [i, j]"
        lang="language-python"
      />
      <p>Notice we added a default return value in the Java code at the end.</p>
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