<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Using built-in data structures of Java and Python - Part 2"
        date="10 Mar'21"
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
        key(1 in case of numbers).
      </p>
      <CodeSnippet
        code="// Java
import java.util.*;
class DataStructures {
    public static void main(String args[]) {
        Set<Integer> set = new HashSet<>(); // Create an empty set.
        System.out.println(set); // []
        System.out.println(set.isEmpty()); // true
        set.add(3); // Add 3 to the set.
        set.add(6);
        System.out.println(set); // [3, 6]
        System.out.println(set.size()); // 2
        System.out.println(set.contains(6)); // true (Check if set contains 6)
        System.out.println(!set.contains(2)); // true (Check if set does not contain 2)
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
        which implement the <strong>Set</strong> interface). Hashsets perform
        much faster than TreeSets in most cases but take up more space.
      </p>
      <CodeSnippet
        code="# Python3
set1 = set()  # Create an empty set. Avoid using names of inbuilt functions as variable names.
print(set1)  # set()
set1.add(3)  # Add 3 to the set.
set1.add(6)
print(set1)  # {3, 6}
print(len(set1))  # 2
print(6 in set1)  # True (Check if 6 is in the set)
print(2 not in set1)  # True (Check if 2 is not in the set)
set1.remove(6)  # Remove 6 from the set.
print(6 in set1)  # False
print(set1)  # {3}"
        lang="language-python"
      />
      <p>Python provides a set object using <em>set()</em> which we can use.</p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Map</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        Map is a special data structure that allows mapping of unique keys to a
        respective value. Similar to a set, it allows lookup in O(k) time where
        <strong>k</strong> is the length of key.
      </p>
      <CodeSnippet
        code="// Java
import java.util.*;
class DataStructures {
    public static void main(String args[]) {
        Map<Character, String> map = new HashMap<>(); // Create an empty map(Character to String)
        System.out.println(map); // {}
        System.out.println(map.isEmpty()); // true
        map.put('A', &quot;Apple&quot;); // Map the key 'A' to the value &quot;Apple&quot;
        map.put('B', &quot;Banana&quot;);
        map.putIfAbsent('B', &quot;Blueberry&quot;); // If the key 'B' does not exist, map it to the value &quot;Blueberry&quot;
        System.out.println(map); // {A=Apple, B=Banana}
        System.out.println(map.size()); // 2
        System.out.println(map.containsKey('C')); // false (Check if 'C' exists in the map as a key)
        System.out.println(map.get('A')); // Apple (Get the value mapped for the key 'A')
        System.out.println(map.getOrDefault('C', &quot;Cherry&quot;)); // Cherry (Get the value mapped for the key 'C', if it does not exist return &quot;Cherry&quot;)
        map.remove('A'); // Remove the key(and its respective value) 'A'
        System.out.println(map); // {B=Banana}
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