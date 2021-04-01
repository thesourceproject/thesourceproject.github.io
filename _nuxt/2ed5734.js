(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{244:function(e,t,n){"use strict";n.r(t);var r=n(110),o=n(111),l={name:"competitive8",components:{ArticleHeader:r.default,CodeSnippet:o.default},head:{title:"Using inbuilt data structures of Java | The Source Project",meta:[{hid:"description",name:"description",content:"Today we will learn about data structures that are available in Java. These are a must-know if you want to get into competitive programming."}]}},m=n(8),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[n("ArticleHeader",{attrs:{title:"Using inbuilt data structures of Java",date:"7 Mar '21",readTime:"10 min read",tags:["basics","data","structures","algorithms","java","beginner"]}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",{staticClass:"mt-4"},[e._v("\n        An array is a data structure that allows for O(1) read/write operations.\n        This is because its items are kept in contiguous memory locations which\n        makes it easy to calculate the address of any position.\n      ")]),e._v(" "),n("CodeSnippet",{attrs:{code:"import java.util.Arrays; // Only required for using the Arrays.toString() function.\nclass DataStructures {\n    public static void main(String args[]) {\n        int array[] = new int[5]; // Create a primitive int array.\n        System.out.println(Arrays.toString(array)); // [0, 0, 0, 0, 0]\n        array[0] = 3; // Set value at index 0 to 3.\n        array[2] = 6;\n        System.out.println(Arrays.toString(array)); // [3, 0, 6, 0, 0]\n        System.out.println(array[2]); // 6 (Get value at index 2)\n        System.out.println(array.length); // 5 (Get size of array)\n    }\n}",lang:"language-java"}}),e._v(" "),e._m(4),e._v(" "),n("CodeSnippet",{attrs:{code:"import java.util.*;\nclass DataStructures {\n    public static void main(String args[]) {\n        List<Integer> arrayList = new ArrayList<>(); // Create an ArrayList of Integer type.\n        System.out.println(arrayList); // []\n        System.out.println(arrayList.isEmpty()); // true\n        arrayList.add(3); // Add value 3 to the end of list.\n        arrayList.add(6);\n        System.out.println(arrayList); // [3, 6]\n        System.out.println(arrayList.get(1)); // 6 (Get value at index 1)\n        arrayList.set(1, 7); // Set value at index 1 to 7.\n        System.out.println(arrayList); // [3, 7]\n        System.out.println(arrayList.size()); // 2 (Get size of arraylist)\n        System.out.println(arrayList.remove(0)); // 3 (Remove and return value at index 0)\n        System.out.println(arrayList); // [7]\n    }\n}",lang:"language-java"}}),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),n("CodeSnippet",{attrs:{code:"import java.util.*;\nclass DataStructures {\n    public static void main(String args[]) {\n        ArrayDeque<Character> stack = new ArrayDeque<>(); // Create an ArrayDeque of Character type.\n        System.out.println(stack); // []\n        System.out.println(stack.isEmpty()); // true\n        stack.push('A'); // Push 'A' onto the stack.\n        stack.push('B');\n        System.out.println(stack); // [B, A] (Last in first out)\n        System.out.println(stack.peek()); // B (Peek at the top item without removing it)\n        System.out.println(stack.size()); // 2\n        System.out.println(stack.pop()); // B (Pop and return the character on top of the stack)\n        System.out.println(stack); // [A]\n    }\n}",lang:"language-java"}}),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),n("CodeSnippet",{attrs:{code:'import java.util.*;\nclass DataStructures {\n    public static void main(String args[]) {\n        Queue<String> queue = new ArrayDeque<>(); // Create a Queue of String type.\n        System.out.println(queue); // []\n        System.out.println(queue.isEmpty()); // true\n        queue.offer("Apple"); // Add "Apple" to the back of the queue.\n        queue.offer("Banana");\n        System.out.println(queue); // [Apple, Banana] (First in first out)\n        System.out.println(queue.peek()); // Apple (Peek at the front item without removing it)\n        System.out.println(queue.size()); // 2\n        System.out.println(queue.poll()); // Apple (Remove and return the front item)\n        System.out.println(queue); // [Banana]\n    }\n}',lang:"language-java"}}),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),n("CodeSnippet",{attrs:{code:"import java.util.*;\nclass DataStructures {\n    public static void main(String args[]) {\n        Set<Integer> set = new HashSet<>(); // Create an empty set.\n        System.out.println(set); // []\n        System.out.println(set.isEmpty()); // true\n        set.add(3); // Add 3 to the set.\n        set.add(6);\n        System.out.println(set); // [3, 6]\n        System.out.println(set.size()); // 2\n        System.out.println(set.contains(6)); // true (Check if set contains 6)\n        set.remove(6); // Remove 6 from the set\n        System.out.println(set); // [3]\n        System.out.println(set.contains(6)); // false\n        for (Integer num : set) {\n            System.out.println(num); // Perform action for every set item.\n        }\n    }\n}",lang:"language-java"}}),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),n("CodeSnippet",{attrs:{code:"import java.util.*;\nclass DataStructures {\n    public static void main(String args[]) {\n        Map<Character, String> map = new HashMap<>(); // Create an empty map(Character to String)\n        System.out.println(map); // {}\n        System.out.println(map.isEmpty()); // true\n        map.put('A', \"Apple\"); // Map the key 'A' to the value \"Apple\"\n        map.put('B', \"Banana\");\n        map.putIfAbsent('B', \"Blueberry\"); // If the key 'B' does not exist, map it to the value \"Blueberry\"\n        System.out.println(map); // {A=Apple, B=Banana}\n        System.out.println(map.size()); // 2\n        System.out.println(map.containsKey('C')); // false (Check if 'C' exists in the map as a key)\n        System.out.println(map.get('A')); // Apple (Get the value mapped for the key 'A'. Returns null if the key does not exist)\n        System.out.println(map.getOrDefault('C', \"Cherry\")); // Cherry (Get the value mapped for the key 'C', if it does not exist return \"Cherry\")\n        map.remove('A'); // Remove the key 'A' and return its value. Returns null if the key does not exist.\n        System.out.println(map); // {B=Banana}\n        for (Character key : map.keySet()) {\n            System.out.println(key); // Perform action for every key in map.\n        }\n        for (String value : map.values()) {\n            System.out.println(value); // Perform action for every value mapped.\n        }\n    }\n}",lang:"language-java"}}),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),n("CodeSnippet",{attrs:{code:"import java.util.*;\nclass DataStructures {\n    public static void main(String args[]) {\n        Queue<Integer> minHeap = new PriorityQueue<>(); // Create a new min-heap.\n        System.out.println(minHeap); // []\n        System.out.println(minHeap.isEmpty()); // true\n        minHeap.offer(2); // Add 2 to the heap.\n        minHeap.offer(5);\n        minHeap.offer(1);\n        System.out.println(minHeap); // [1, 5, 2] (Not necessarily in sorted order but the root will always contain the smallest element in a min-heap)\n        System.out.println(minHeap.size()); // 3\n        System.out.println(minHeap.peek()); // 1 (Peek at the root element without removing it, if heap is empty, return null)\n        System.out.println(minHeap.poll()); // 1 (Remove and return the root element, if heap is empty, return null)\n        System.out.println(minHeap.poll()); // 2\n        System.out.println(minHeap.poll()); // 5\n        System.out.println(minHeap); // []\n    }\n}",lang:"language-java"}}),e._v(" "),e._m(20),e._v(" "),n("CodeSnippet",{attrs:{code:"...\nQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> -a.compareTo(b));\n// Or\nQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b.compareTo(a));\n// Or\nQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());\n...",lang:"language-java"}}),e._v(" "),e._m(21)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Today we will learn about data structures that are available in Java.\n        These are a must-know if you want to get into competitive\n        programming."),n("br"),e._v("\n        Although you can implement these data structures yourself too, it is\n        impossible to do so for every problem. So why reinvent the wheel when\n        you've got these built right into the library itself?\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-12 flex flex-col"},[n("h2",{staticClass:"text-2xl"},[e._v("Getting Started")]),e._v(" "),n("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-8"},[e._v("\n        This tutorial will cover "),n("strong",[e._v("Array")]),e._v(", "),n("strong",[e._v("Stack")]),e._v(",\n        "),n("strong",[e._v("Queue")]),e._v(", "),n("strong",[e._v("Set")]),e._v(", "),n("strong",[e._v("Map")]),e._v(", and\n        "),n("strong",[e._v("Heap")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-6 flex flex-col"},[n("h3",{staticClass:"text-xl"},[e._v("Array")]),e._v(" "),n("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        In Java, arrays are non-resizable and their size must be provided at\n        creation time."),n("br"),e._v("\n        However, the Java Collections Framework provides the\n        "),n("strong",[e._v("ArrayList")]),e._v(" class which is an array-like data structure\n        but can dynamically grow in size as needed. It is present in the\n        "),n("em",[e._v("java.util")]),e._v(" package(like the others below).\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        The "),n("strong",[e._v("List")]),e._v(" interface contains all the basic methods\n        required for read/write operations while remaining more generic and\n        flexible. Therefore, it is preferred to ArrayList(which implements the\n        List interface) to declare list-like data structures."),n("br"),e._v("\n        We can also declare our ArrayList with\n        "),n("em",[e._v("ArrayList<Integer>")]),e._v(" which would allow us to use\n        ArrayList-specific methods like "),n("em",[e._v("ensureCapacity()")]),e._v("."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - You might wonder why we used\n        "),n("em",[e._v("List<Integer>")]),e._v(" instead of "),n("em",[e._v("List<int>")]),e._v(". This\n        is because Java collections can only store objects and not primitive\n        types. Therefore, we need to use their respective wrapper\n        classes("),n("em",[e._v("Integer")]),e._v(", "),n("em",[e._v("Long")]),e._v(", "),n("em",[e._v("Float")]),e._v(",\n        "),n("em",[e._v("Double")]),e._v(", "),n("em",[e._v("Character")]),e._v(", "),n("em",[e._v("Boolean")]),e._v(") for them.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-6 flex flex-col"},[n("h3",{staticClass:"text-xl"},[e._v("Stack")]),e._v(" "),n("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-4"},[e._v("\n        A stack is a data structure that only allows read/write operations at\n        one end(i.e. the top) in O(1) time. Stack items are accessed according\n        to the "),n("strong",[e._v("LIFO")]),e._v("(last in first out) rule.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        There are multiple ways of implementing a stack(including ArrayList) in\n        Java but "),n("strong",[e._v("ArrayDeque")]),e._v(" is the most preferred one. It\n        allows amortized O(1) pushes and pops from both ends, making it ideal\n        for use as a stack. It implements the\n        "),n("strong",[e._v("Queue")]),e._v(" interface(not List) and therefore does not allow\n        random access of its items."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - there is also a dedicated\n        "),n("strong",[e._v("Stack")]),e._v(" class in Java that extends\n        "),n("strong",[e._v("Vector")]),e._v("(which itself implements the List interface). It\n        is a thread-safe legacy class that comes with a performance cost but may\n        be useful in a multi-threaded environment.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-6 flex flex-col"},[n("h3",{staticClass:"text-xl"},[e._v("Queue")]),e._v(" "),n("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-4"},[e._v("\n        A queue is a data structure that allows adding(offering) items to the\n        back and removing(polling) them from the front in O(1) time. Queue items\n        are accessed according to the\n        "),n("strong",[e._v("FIFO")]),e._v("(first in first out) rule.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Like stacks, there are multiple ways of implementing a queue in Java.\n        Notice that we declared our ArrayDeque with\n        "),n("em",[e._v("Queue<String>")]),e._v(" as the Queue interface provides all the\n        necessary functionality and we don't need any ArrayDeque-specific\n        methods(like we did for stacks, i.e. "),n("em",[e._v("push()")]),e._v(" and\n        "),n("em",[e._v("pop()")]),e._v(").\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-6 flex flex-col"},[n("h3",{staticClass:"text-xl"},[e._v("Set")]),e._v(" "),n("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-4"},[e._v("\n        Set is an unordered data structure. This means that they do not remember\n        the order of insertion. They are used to store unique values and allow\n        lookups in O(k) time, where "),n("strong",[e._v("k")]),e._v(" is the length of the\n        key(1 in case of numbers).\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        There are multiple ways of creating sets in Java. The most popular of\n        them are "),n("strong",[e._v("HashSet")]),e._v(" and "),n("strong",[e._v("TreeSet")]),e._v("(both of\n        which implement the "),n("strong",[e._v("Set")]),e._v(" interface)."),n("br"),e._v("\n        Hashsets perform much faster than TreeSets in most cases but take up\n        more space. This is because TreeSets internally use a self-balancing\n        binary tree, thus ensuring an O(k×log n) time for operations(compared to\n        O(k) of HashSets)."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - HashSets can store a single\n        "),n("strong",[e._v("null")]),e._v(" value whereas TreeSets cannot.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-6 flex flex-col"},[n("h3",{staticClass:"text-xl"},[e._v("Map")]),e._v(" "),n("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-4"},[e._v("\n        A map is a special data structure that allows mapping of unique keys to\n        a respective value. Similar to a set, it allows lookup in O(k) time\n        where\n        "),n("strong",[e._v("k")]),e._v(" is the length of the key.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Like sets, there are two main classes for creating a map in Java. They\n        are "),n("strong",[e._v("HashMap")]),e._v(" and "),n("strong",[e._v("TreeMap")]),e._v("(both\n        implementing the "),n("strong",[e._v("Map")]),e._v(" interface)."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - HashMaps can store a single\n        "),n("strong",[e._v("null")]),e._v(" key whereas TreeMaps cannot.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-6 flex flex-col"},[n("h3",{staticClass:"text-xl"},[e._v("Heap")]),e._v(" "),n("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-4"},[e._v("\n        Heap is a tree-like data structure that satisfies the heap property. It\n        means that, in a min-heap, the value of every node is greater than or\n        equal to its parent. This ensures that the root of the tree always\n        contains the smallest value and vice-versa for max-heap."),n("br"),e._v("\n        Min-heaps allow insertion and retrieval of minimum(or maximum in case of\n        max-heaps) in O(log n) time.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Java provides the "),n("strong",[e._v("PriorityQueue")]),e._v(" class(which implements\n        the Queue interface) that can be used to create a heap. By default, it\n        creates a min-heap(i.e. the root contains the smallest element). We can\n        easily create a max-heap by passing a custom comparator to the\n        PriorityQueue constructor like this.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We will learn more about Java's Comparator interface in a later\n        tutorial."),n("br"),n("br"),e._v("\n        Now that we have understood the important inbuilt data structures of\n        Java, what remains now is practice. So, try to do some algorithmic\n        problems on your own.\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(110).default,CodeSnippet:n(111).default})}}]);