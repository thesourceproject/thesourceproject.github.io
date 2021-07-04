<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Using inbuilt data structures of Python"
        date="10 Mar '21"
        readTime="10 min read"
        :tags="[
          'basics',
          'data',
          'structures',
          'algorithms',
          'python',
          'beginner',
        ]"
      />
      <p>
        Python is slower than C++ and Java, yet it is being adopted more and
        more for its simplicity. In this tutorial, we will understand the
        important data structures available in Python. You'll need to understand
        these if you're planning to use Python for competitive programming.
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        This tutorial will cover <strong>Array</strong>, <strong>Stack</strong>,
        <strong>Queue</strong>, <strong>Set</strong>, <strong>Map</strong>, and
        <strong>Heap</strong>.<br />
        <strong>Note</strong> - This tutorial assumes you have some basic
        understanding of Python. You may refer to
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/3-Python-fundamentals"
          >this tutorial</NuxtLink
        >
        before you continue.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Array</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        An array is a data structure that allows for O(1) read/write operations.
        This is because its items are kept in contiguous memory locations which
        makes it easy to calculate the address of any position.
      </p>
      <CodeSnippet
        code="array = []  # Create a new list. Same as -> array = list()
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
        A stack is a data structure that only allows read/write operations at
        one end(i.e. the top) in O(1) time. Stack items are accessed according
        to the <strong>LIFO</strong>(last in first out) rule.
      </p>
      <CodeSnippet
        code="stack = []
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
        A queue is a data structure that allows adding(offering) items to the
        back and removing(polling) them from the front in O(1) time. Queue items
        are accessed according to the
        <strong>FIFO</strong>(first in first out) rule.
      </p>
      <CodeSnippet
        code="from collections import deque  # Import the deque module.
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
        Fortunately, Python contains a <strong>deque</strong> module that
        internally uses a doubly-linked list. This allows for O(1) appends and
        pops from both ends making it suitable for implementing both stacks and
        queues.
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
        code="set1 = set()  # Create an empty set. Avoid using names of inbuilt functions as variable names.
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
    print(num)  # Perform action for every set item."
        lang="language-python"
      />
      <p>Python provides an easy to use set object using <em>set()</em>.</p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">Map</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-4">
        A map is a special data structure that allows mapping of unique keys to
        a respective value. Similar to a set, it allows lookup in O(k) time
        where
        <strong>k</strong> is the length of the key.
      </p>
      <CodeSnippet
        code="map = {}  # Create a new map(dictionary). Same as -> map = dict()
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
        Heap is a tree-like data structure that satisfies the heap property. It
        means that, in a min-heap, the value of every node is greater than or
        equal to its parent. This ensures that the root of the tree always
        contains the smallest value and vice-versa for max-heap.<br />
        Min-heaps allow insertion and retrieval of minimum(or maximum in case of
        max-heaps) in O(log n) time.
      </p>
      <CodeSnippet
        code="import heapq
heap = []  # Create an empty list which will be used as a min-heap.
heapq.heappush(heap, 2)  # Add 2 to the heap.
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
print(heap)  # [1, 5, 2] (Not necessarily in sorted order but the root will always contain the smallest element in a min-heap)
print(len(heap))  # 3
print(heap[0])  # 1 (Peek at the root element without removing it, IndexError will be thrown if heap is empty)
print(heapq.heappop(heap))  # 1 (Remove and return the root element, IndexError will be thrown if heap is empty)
print(heapq.heappop(heap))  # 2
print(heapq.heappop(heap))  # 5
print(heap)  # []"
        lang="language-python"
      />
      <p>
        Python provides a <strong>heapq</strong> module for working with heaps.
        An ordinary list is used to store the elements and the heap is
        implemented using the heapq methods.<br />
        By default, heapq implements a min-heap but we can use it as a max-heap
        too. Simply invert the sign of each number when it is inserted and
        restore it on removal.
      </p>
      <CodeSnippet
        code="import heapq
heap = []
heapq.heappush(heap, (2, 3))  # Add heap items as tuples in the form of priority-value pairs.
heapq.heappush(heap, (0, 6))
heapq.heappush(heap, (1, 2))
print(heap)  # [(0, 6), (2, 3), (1, 2)]"
        lang="language-python"
      />
      <p>
        If we want a different priority for each element we can store heap items
        in tuples. The heapq functions will use the tuple's first argument to
        compare heap items.
      </p>
      <CodeSnippet
        code="import heapq
heap = [3, 6, 1]
heapq.heapify(heap)  # Heapify the list
print(heap)  # [1, 6, 3]"
        lang="language-python"
      />
      <p>
        The heapq module also provides a <em>heapify()</em> function that
        converts an existing list into a heap in O(n) time.<br /><br />
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
  name: "basics9",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Using inbuilt data structures of Python | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Python is slower than C++ and Java, yet it is being adopted more and more for its simplicity. In this tutorial, we will understand the important data structures available in Python.",
      },
    ],
  },
};
</script>