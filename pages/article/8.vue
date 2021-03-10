<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Using built-in data structures of Java and Python -
      Part 1"
        date="7 Mar'21"
        readTime="10 min read"
        :tags="[
          'competitive',
          'data',
          'structures',
          'algorithms',
          'java',
          'python',
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
        In this tutorial we will cover <strong>Array</strong>,
        <strong>Stack</strong> and <strong>Queue</strong>. More advanced ones
        will be covered in the
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/9#Using-built-in-data-structures-of-Java-and-Python---Part-2"
          >next tutorial</NuxtLink
        >.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Array</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        Array is a data structure which allows for O(1) read/write operations.
        This is because its items are kept in contiguous memory locations which
        makes it easy to calculate the address of any position.
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
        The <strong>List</strong> interface contains all the basic methods
        required for read/write operations while remaining more generic and
        flexible. Therefore, it is preferred to ArrayList(which implements the
        List interface) to declare list-like data structures.<br />
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
        In Python, a <strong>list</strong>(not to be confused with linked-list)
        is used to store multiple items in an array-like manner. Python lists
        are resizable by default and can store objects of any type.<br />
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
        end(i.e. the top) in O(1) time. Stack items are accessed according to
        the <strong>LIFO</strong>(last in first out) rule.
      </p>
      <CodeSnippet
        code="// Java
import java.util.*;
class DataStructures {
    public static void main(String args[]) {
        ArrayDeque<Character> stack = new ArrayDeque<>(); // Create an ArrayDeque of Character type.
        System.out.println(stack); // []
        System.out.println(stack.isEmpty()); // true
        stack.push('A'); // Push 'A' onto the stack.
        stack.push('B');
        System.out.println(stack); // [B, A] (Last in first out)
        System.out.println(stack.peek()); // B (Peek at the top item without removing it)
        System.out.println(stack.size()); // 2
        System.out.println(stack.pop()); // B (Pop and return the character on top of the stack)
        System.out.println(stack); // [A]
    }
}"
        lang="language-java"
      />
      <p>
        There are multiple ways of implementing a stack(including ArrayList) in
        Java but <strong>ArrayDeque</strong> is the most preferred one. It
        allows amortized O(1) pushes and pops from both ends, making it ideal
        for using as a stack. It implements the
        <strong>Queue</strong> interface(not List) and therefore does not allow
        random access of its items.<br />
        <strong>Note</strong> - there is also a dedicated
        <strong>Stack</strong> class in Java that extends
        <strong>Vector</strong>(which itself implements the List interface). It
        is a thread-safe legacy class which comes with a performance cost but
        may be useful in a multi-threaded environment.
      </p>
      <CodeSnippet
        code="# Python3
stack = []
print(stack)  # []
stack.append('A')  # Push 'A' onto the stack.
stack.append('B')
print(stack)  # ['A', 'B'] (Python prints lists from left to right)
print(stack[-1])  # B (Peek at the top item without removing it)
print(len(stack))  # 2
print(stack.pop())  # B (Pop and return the character on top of the stack)
print(stack)  # ['A']"
        lang="language-python"
      />
      <p>
        In Python, a list can easily be used as a stack. We just have to make
        sure that we apply push(append)/pop operations only at the end of the
        list.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Queue</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        Queue is a data structure which allows adding(offering) of items to the
        back and removing(polling) them from the front in O(1) time. Queue items
        are accessed according to the
        <strong>FIFO</strong>(first in first out) rule.
      </p>
      <CodeSnippet
        code='// Java
import java.util.*;
class DataStructures {
    public static void main(String args[]) {
        Queue<String> queue = new ArrayDeque<>(); // Create a Queue of String type.
        System.out.println(queue); // []
        System.out.println(queue.isEmpty()); // true
        queue.offer("Apple"); // Add "Apple" to the back of the queue.
        queue.offer("Banana");
        System.out.println(queue); // [Apple, Banana] (First in first out)
        System.out.println(queue.peek()); // Apple (Peek at the front item without removing it)
        System.out.println(queue.size()); // 2
        System.out.println(queue.poll()); // Apple (Remove and return the front item)
        System.out.println(queue); // [Banana]
    }
}'
        lang="language-java"
      />
      <p>
        Like stacks, there are multiple ways of implementing a queue in Java.
        Notice that we declared our ArrayDeque with
        <em>Queue&lt;String&gt;</em> as the Queue interface provides all the
        neccessary functionality and we don't need any ArrayDeque-specific
        methods(like we did for stacks, i.e. <em>push()</em> and
        <em>pop()</em>).
      </p>
      <CodeSnippet
        code="# Python3
from collections import deque  # Import the deque module.
queue = deque()  # Create a queue.
print(queue)  # deque([])
queue.append('Apple')  # Add 'Apple' to the right(back of the queue)
queue.append('Banana')
print(queue)  # deque(['Apple', 'Banana'])
print(queue[0])  # Apple (Peek at the first(front) item without removing it)
print(len(queue))  # 2
print(queue.popleft())  # Apple (Pop and return the left(first) item)
print(queue)  # deque(['Banana'])"
        lang="language-python"
      />
      <p>
        Python lists are not suitable for implementing queues. Though it allows
        amortized O(1) appends at one end, it takes O(n) time to remove an item
        at the start. This is because all the subsequent items have to be
        shifted to the left.<br />
        Fortunately, Python contains a <strong>deque</strong> module which
        internally uses a doubly-linked list. This allows for O(1) appends and
        pops from both ends making it suitable for implementing both stacks and
        queues.<br /><br />
        Now that we have a basic understanding of some important data
        structures, what remains now is practice. So, try to do some algorithmic
        problems on your own.
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
      "Using built-in data structures of Java and Python - Part 1 | The Source Project",
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