<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Using built-in data structures of Java and Python - Part 2"
        date="10 Mar'21"
        readTime="10 min read"
        :tags="['competitive', 'data', 'structures', 'algorithms', 'beginner']"
      />
      <p>
        In our
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/8#Using-built-in-data-structures-of-Java-and-Python---Part-1"
          >previous tutorial</NuxtLink
        >
        we covered some basic data structures. Here we will understand some more
        and like the previous ones, these are essential from a competitive
        programming perspective.
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        In this tutorial we will cover
        <strong>Set</strong>, <strong>Map</strong> and <strong>Heap</strong>.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Set</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        Set is an unordered data structure. This means that they do not remember
        the order of insertion. They are used to store unique values and allow
        lookups in O(k) time, where <strong>k</strong> is the length of the
        key(1 in case of Numbers).
      </p>
      <CodeSnippet
        code="// Java
import java.util.*;
class DataStructures {
    public static void main(String args[]) {
        Set<Integer> set = new HashSet<>(); // Create a new empty set.
        System.out.println(set); // []
        System.out.println(set.isEmpty()); // true
        set.add(3); // Add 3 to the set.
        set.add(6);
        System.out.println(set); // [3, 6]
        System.out.println(set.contains(6)); // true (Check if set contains 6)
        set.remove(6); // Remove 6 from the set
        System.out.println(set); // [3]
        System.out.println(set.contains(6)); // false
    }
}"
        lang="language-java"
      />
      <p>
        There are multiple ways of creating sets in Java. The most popular of
        them are <strong>HashSet</strong> and <strong>TreeSet</strong>(both of
        which implement the <strong>Set</strong> interface). Hashset performs
        much faster than TreeSet in most cases but take up more space.
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
        In Python, a <em>list</em> (not to be confused with linked-list) is used
        to store multiple items in an array-like manner. Python lists are
        resizable by default and can store objects of any type.<br />
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
        There are multiple ways of implementing a stack(including
        <em>ArrayList</em>) in Java but <strong>ArrayDeque</strong> is the most
        preferred one. It allows amortized O(1) pushes and pops from both ends,
        making it ideal for using as a stack. It implements the
        <em>Queue</em> interface(not <em>List</em>) and does not allow random
        access of its items.<br />
        <strong>Note</strong> - there is also a dedicated <em>Stack</em> class
        in Java that extends <em>Vector</em>(which itself implements the
        <em>List</em> interface). It is a thread-safe legacy class which comes
        with a performance cost but may be useful in a multi-threaded
        environment.
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
        Like a stack, there are multiple ways of implementing a queue in Java.
        We declared our <em>ArrayDeque</em> with <em>Queue&lt;String&gt;</em> as
        the Queue interface provides the neccessary functionality and we don't
        need any ArrayDeque-specific methods(like we did for a stack, i.e.
        <em>push()</em> and <em>pop()</em>).
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
      "Using built-in data structures of Java and Python - Part 2 | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "In our previous tutorial we covered some basic data structures. Here we will understand some more and like the previous ones, these are essential from a competitive programming perspective.",
      },
    ],
  },
};
</script>