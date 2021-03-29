<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Using inbuilt data structures of Java"
        date="7 Mar '21"
        readTime="10 min read"
        :tags="[
          'basics',
          'data',
          'structures',
          'algorithms',
          'java',
          'beginner',
        ]"
      />
      <p>
        Today we will learn about data structures that are available in Java.
        These are a must-know if you want to get into competitive
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
        This tutorial will cover <strong>Array</strong>, <strong>Stack</strong>,
        <strong>Queue</strong>, <strong>Set</strong>, <strong>Map</strong>, and
        <strong>Heap</strong>.
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
        code="import java.util.Arrays; // Only required for using the Arrays.toString() function.
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
        In Java, arrays are non-resizable and their size must be provided at
        creation time.<br />
        However, the Java Collections Framework provides the
        <strong>ArrayList</strong> class which is an array-like data structure
        but can dynamically grow in size as needed. It is present in the
        <em>java.util</em> package(like the others below).
      </p>
      <CodeSnippet
        code="import java.util.*;
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
        code="import java.util.*;
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
        for use as a stack. It implements the
        <strong>Queue</strong> interface(not List) and therefore does not allow
        random access of its items.<br />
        <strong>Note</strong> - there is also a dedicated
        <strong>Stack</strong> class in Java that extends
        <strong>Vector</strong>(which itself implements the List interface). It
        is a thread-safe legacy class that comes with a performance cost but may
        be useful in a multi-threaded environment.
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
        code='import java.util.*;
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
        necessary functionality and we don't need any ArrayDeque-specific
        methods(like we did for stacks, i.e. <em>push()</em> and
        <em>pop()</em>).
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
        code="import java.util.*;
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
            System.out.println(num); // Perform action for every set item.
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
        binary tree, thus ensuring an O(k×log n) time for operations(compared to
        O(k) of HashSets).<br />
        <strong>Note</strong> - HashSets can store a single
        <strong>null</strong> value whereas TreeSets cannot.
      </p>
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
        code="import java.util.*;
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
        code="import java.util.*;
class DataStructures {
    public static void main(String args[]) {
        Queue<Integer> minHeap = new PriorityQueue<>(); // Create a new min-heap.
        System.out.println(minHeap); // []
        System.out.println(minHeap.isEmpty()); // true
        minHeap.offer(2); // Add 2 to the heap.
        minHeap.offer(5);
        minHeap.offer(1);
        System.out.println(minHeap); // [1, 5, 2] (Not necessarily in sorted order but the root will always contain the smallest element in a min-heap)
        System.out.println(minHeap.size()); // 3
        System.out.println(minHeap.peek()); // 1 (Peek at the root element without removing it, if heap is empty, return null)
        System.out.println(minHeap.poll()); // 1 (Remove and return the root element, if heap is empty, return null)
        System.out.println(minHeap.poll()); // 2
        System.out.println(minHeap.poll()); // 5
        System.out.println(minHeap); // []
    }
}"
        lang="language-java"
      />
      <p>
        Java provides the <strong>PriorityQueue</strong> class(which implements
        the Queue interface) that can be used to create a heap. By default, it
        creates a min-heap(i.e. the root contains the smallest element). We can
        easily create a max-heap by passing a custom comparator to the
        PriorityQueue constructor like this.
      </p>
      <CodeSnippet
        code="...
Queue<Integer> maxHeap = new PriorityQueue<>((a, b) -> -a.compareTo(b));
// Or
Queue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b.compareTo(a));
// Or
Queue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
..."
        lang="language-java"
      />
      <p>
        We will learn more about Java's Comparator interface in a later
        tutorial.<br /><br />
        Now that we have understood the important inbuilt data structures of
        Java, what remains now is practice. So, try to do some algorithmic
        problems on your own.
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "competitive8",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Using inbuilt data structures of Java | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Today we will learn about data structures that are available in Java. These are a must-know if you want to get into competitive programming.",
      },
    ],
  },
};
</script>