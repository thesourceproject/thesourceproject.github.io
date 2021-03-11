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
        set.remove(6); // Remove 6 from the set
        System.out.println(set); // [3]
        System.out.println(set.contains(6)); // false
        for (Integer num : set) {
            System.out.println(num); // Perform action for every set element.
        }
    }
}"
        lang="language-java"
      />
      <p>
        There are multiple ways of creating sets in Java. The most popular of
        them are <strong>HashSet</strong> and <strong>TreeSet</strong>(both of
        which implement the <strong>Set</strong> interface).<br />
        Hashsets perform much faster than TreeSets in most cases but take up
        more space. This is because TreeSets internally use a self-balancing
        binary tree, thus ensuring a O(k×log n) time for operations(compared to
        O(k) of HashSets).<br />
        <strong>Note</strong> - HashSets can store a single
        <strong>null</strong> value whereas TreeSets cannot.
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
set1.remove(6)  # Remove 6 from the set.
print(6 in set1)  # False
print(set1)  # {3}
for num in set1:
    print(num)  # Perform action for every set element."
        lang="language-python"
      />
      <p>Python provides an easy to use set object using <em>set()</em>.</p>
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
        System.out.println(map.get('A')); // Apple (Get the value mapped for the key 'A'. Returns null if the key does not exist)
        System.out.println(map.getOrDefault('C', &quot;Cherry&quot;)); // Cherry (Get the value mapped for the key 'C', if it does not exist return &quot;Cherry&quot;)
        map.remove('A'); // Remove the key 'A' and return its value. Returns null if the key does not exist.
        System.out.println(map); // {B=Banana}
        for (Character key : map.keySet()) {
            System.out.println(key); // Perform action for every key in map.
        }
        for (String value : map.values()) {
            System.out.println(value); // Perform action for every value mapped.
        }
    }
}"
        lang="language-java"
      />
      <p>
        Like sets, there are two main classes for creating a map in Java. They
        are <strong>HashMap</strong> and <strong>TreeMap</strong>(both
        implementing the <strong>Map</strong> interface).<br />
        <strong>Note</strong> - HashMaps can store a single
        <strong>null</strong> key whereas TreeMaps cannot.
      </p>
      <CodeSnippet
        code="# Python3
map = {}  # Create a new map(dictionary). Same as -> map = dict()
print(map)  # {}
map['A'] = 'Apple'  # Map the key 'A' to the value &quot;Apple&quot;
map['B'] = 'Banana'
print(map.setdefault('B', 'Blueberry'))  # Banana (Return the value for the key 'B'. If it does not exist, map it to the value &quot;Blueberry&quot;)
print(map)  # {'A': 'Apple', 'B': 'Banana'}
print(len(map))  # 2
print('C' in map)  # False (Check if 'C' exists in the map as a key)
print(map['A'])  # Apple (Get the value mapped for the key 'A'. Throws KeyError exception if the key does not exist)
print(map.get('C', 'Cherry'))  # Cherry (Get the value mapped for the key 'C', if it does not exist return &quot;Cherry&quot;)
map.pop('A')  # Remove the key 'A' and return its value. Throws KeyError exception if the key does not exist.
print(map)  # {'B': 'Banana'}
for key in map:  # Same as -> for key in map.keys()
    print(key)  # Perform action for every key in map.
for value in map.values():
    print(value)  # Perform action for every value mapped."
        lang="language-python"
      />
      <p>
        In Python, maps are known as dictionaries. They can be created using
        <em>{}</em> or <em>dict()</em>.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Heap</h3>
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