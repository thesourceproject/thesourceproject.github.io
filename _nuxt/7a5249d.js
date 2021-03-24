(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{193:function(e,t,n){"use strict";n.r(t);var r={name:"ArticleHeader",props:["title","readTime","date","tags"]},o=n(16),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"my-8 flex flex-col"},[n("h1",{staticClass:"text-5xl font-bold leading-snug"},[e._v(e._s(e.title))]),e._v(" "),n("p",{staticClass:"mt-6 opacity-50"},[e._v(e._s(e.date)+" | "+e._s(e.readTime))]),e._v(" "),n("p",{staticClass:"mt-2 flex flex-wrap"},e._l(e.tags,(function(t){return n("NuxtLink",{key:t,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",attrs:{to:{path:"/find",query:{q:t}}}},[e._v("\n      #"+e._s(t)+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(50).default})},194:function(e,t,n){"use strict";n.r(t);var r=n(68),o=(n(195),n(196),n(197),{name:"CodeSnippet",props:["code","lang"],mounted:function(){r.a.highlightAll()}}),l=n(16),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-10 my-4"},[t("pre",[t("code",{class:this.lang},[this._v(this._s(this.code))])])])}),[],!1,null,null,null);t.default=component.exports},195:function(e,t){!function(e){var t=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:{function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:{}}}},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,boolean:/\$(?:true|false)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},n=t.string[0].inside;n.boolean=t.boolean,n.variable=t.variable,n.function.inside=t}(Prism)},196:function(e,t){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},197:function(e,t){!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{"class-name":[r,{pattern:RegExp(n+/[A-Z]\w*(?=\s+\w+\s*[;,=())])/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(\:\:\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},237:function(e,t,n){"use strict";n.r(t);var r=n(193),o=n(194),l={name:"competitive9",components:{ArticleHeader:r.default,CodeSnippet:o.default},head:{title:"Using inbuilt data structures of Python | The Source Project",meta:[{hid:"description",name:"description",content:"In this tutorial we will understand the important data structures available in Python. Python is slower than C++ and Java, yet it is being adopted for its simplicity."}]}},h=n(16),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[n("ArticleHeader",{attrs:{title:"Using inbuilt data structures of Python",date:"10 Mar'21",readTime:"10 min read",tags:["competitive","data","structures","algorithms","python","beginner"]}}),e._v(" "),n("p",[e._v("\n        Python is slower than C++ and Java, yet it is being adopted more and\n        more for its simplicity. In this tutorial, we will understand the\n        important data structures available in Python. You'll need to understand\n        these if you're planning to use Python for competitive programming.\n      ")]),e._v(" "),e._m(0),e._v(" "),n("p",{staticClass:"mt-8"},[e._v("\n        This tutorial will cover "),n("strong",[e._v("Array")]),e._v(", "),n("strong",[e._v("Stack")]),e._v(",\n        "),n("strong",[e._v("Queue")]),e._v(", "),n("strong",[e._v("Set")]),e._v(", "),n("strong",[e._v("Map")]),e._v(", and\n        "),n("strong",[e._v("Heap")]),e._v("."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - This tutorial assumes you have some basic\n        understanding of Python. You may refer to\n        "),n("NuxtLink",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{to:"/article/3-Python-fundamentals"}},[e._v("this tutorial")]),e._v("\n        before you continue.\n      ")],1),e._v(" "),e._m(1),e._v(" "),n("p",{staticClass:"mt-4"},[e._v("\n        An array is a data structure that allows for O(1) read/write operations.\n        This is because its items are kept in contiguous memory locations which\n        makes it easy to calculate the address of any position.\n      ")]),e._v(" "),n("CodeSnippet",{attrs:{code:"array = []  # Create a new list. Same as -> array = list()\nprint(array)  # []\narray.append(3)  # Add value 3 to the end of list.\narray.append(6)\nprint(array)  # [3, 6]\nprint(array[1])  # 6 (Get value at index 1)\narray[1] = 7  # Set value at index 1 to 7.\nprint(len(array))  # 2 (Get size of list)\nprint(array.pop(0))  # 3 (Remove and return value at index 0)\nprint(array)  # [7]",lang:"language-python"}}),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("CodeSnippet",{attrs:{code:"stack = []\nprint(stack)  # []\nstack.append('A')  # Push 'A' onto the stack.\nstack.append('B')\nprint(stack)  # ['A', 'B'] (Python prints lists from left to right)\nprint(stack[-1])  # B (Peek at the top item without removing it)\nprint(len(stack))  # 2\nprint(stack.pop())  # B (Pop and return the character on top of the stack)\nprint(stack)  # ['A']",lang:"language-python"}}),e._v(" "),n("p",[e._v("\n        In Python, a list can easily be used as a stack. We just have to make\n        sure that we apply push(append)/pop operations only at the end of the\n        list.\n      ")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("CodeSnippet",{attrs:{code:"from collections import deque  # Import the deque module.\nqueue = deque()  # Create a queue.\nprint(queue)  # deque([])\nqueue.append('Apple')  # Add 'Apple' to the right(back of the queue)\nqueue.append('Banana')\nprint(queue)  # deque(['Apple', 'Banana'])\nprint(queue[0])  # Apple (Peek at the first(front) item without removing it)\nprint(len(queue))  # 2\nprint(queue.popleft())  # Apple (Pop and return the left(first) item)\nprint(queue)  # deque(['Banana'])",lang:"language-python"}}),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),n("CodeSnippet",{attrs:{code:"set1 = set()  # Create an empty set. Avoid using names of inbuilt functions as variable names.\nprint(set1)  # set()\nset1.add(3)  # Add 3 to the set.\nset1.add(6)\nprint(set1)  # {3, 6}\nprint(len(set1))  # 2\nprint(6 in set1)  # True (Check if 6 is in the set)\nset1.remove(6)  # Remove 6 from the set.\nprint(6 in set1)  # False\nprint(set1)  # {3}\nfor num in set1:\n    print(num)  # Perform action for every set item.",lang:"language-python"}}),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),n("CodeSnippet",{attrs:{code:"map = {}  # Create a new map(dictionary). Same as -> map = dict()\nprint(map)  # {}\nmap['A'] = 'Apple'  # Map the key 'A' to the value \"Apple\"\nmap['B'] = 'Banana'\nprint(map.setdefault('B', 'Blueberry'))  # Banana (Return the value for the key 'B'. If it does not exist, map it to the value \"Blueberry\")\nprint(map)  # {'A': 'Apple', 'B': 'Banana'}\nprint(len(map))  # 2\nprint('C' in map)  # False (Check if 'C' exists in the map as a key)\nprint(map['A'])  # Apple (Get the value mapped for the key 'A'. Throws KeyError exception if the key does not exist)\nprint(map.get('C', 'Cherry'))  # Cherry (Get the value mapped for the key 'C', if it does not exist return \"Cherry\")\nmap.pop('A')  # Remove the key 'A' and return its value. Throws KeyError exception if the key does not exist.\nprint(map)  # {'B': 'Banana'}\nfor key in map:  # Same as -> for key in map.keys()\n    print(key)  # Perform action for every key in map.\nfor value in map.values():\n    print(value)  # Perform action for every value mapped.",lang:"language-python"}}),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),n("CodeSnippet",{attrs:{code:"import heapq\nheap = []  # Create an empty list which will be used as a min-heap.\nheapq.heappush(heap, 2)  # Add 2 to the heap.\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 1)\nprint(heap)  # [1, 5, 2] (Not necessarily in sorted order but the root will always contain the smallest element in a min-heap)\nprint(len(heap))  # 3\nprint(heap[0])  # 1 (Peek at the root element without removing it, IndexError will be thrown if heap is empty)\nprint(heapq.heappop(heap))  # 1 (Remove and return the root element, IndexError will be thrown if heap is empty)\nprint(heapq.heappop(heap))  # 2\nprint(heapq.heappop(heap))  # 5\nprint(heap)  # []",lang:"language-python"}}),e._v(" "),e._m(16),e._v(" "),n("CodeSnippet",{attrs:{code:"import heapq\nheap = []\nheapq.heappush(heap, (2, 3))  # Add heap items as tuples in the form of priority-value pairs.\nheapq.heappush(heap, (0, 6))\nheapq.heappush(heap, (1, 2))\nprint(heap)  # [(0, 6), (2, 3), (1, 2)]",lang:"language-python"}}),e._v(" "),n("p",[e._v("\n        If we want a different priority for each element we can store heap items\n        in tuples. The heapq functions will use the tuple's first argument to\n        compare heap items.\n      ")]),e._v(" "),n("CodeSnippet",{attrs:{code:"import heapq\nheap = [3, 6, 1]\nheapq.heapify(heap)  # Heapify the list\nprint(heap)  # [1, 6, 3]",lang:"language-python"}}),e._v(" "),e._m(17)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-12 flex flex-col"},[t("h2",{staticClass:"text-2xl"},[this._v("Getting Started")]),this._v(" "),t("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-6 flex flex-col"},[t("h3",{staticClass:"text-xl"},[this._v("Array")]),this._v(" "),t("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        In Python, a "),n("strong",[e._v("list")]),e._v("(not to be confused with linked-list)\n        is used to store multiple items in an array-like manner. Python lists\n        are resizable by default and can store objects of any type."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - Python has a module "),n("em",[e._v("array.array")]),e._v(" which\n        is used to create C-like arrays which can store only a single type of\n        basic values(integers, characters, floating-point numbers). These take\n        up a lesser amount of space but are less flexible than lists.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-6 flex flex-col"},[t("h3",{staticClass:"text-xl"},[this._v("Stack")]),this._v(" "),t("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-4"},[this._v("\n        A stack is a data structure that only allows read/write operations at\n        one end(i.e. the top) in O(1) time. Stack items are accessed according\n        to the "),t("strong",[this._v("LIFO")]),this._v("(last in first out) rule.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-6 flex flex-col"},[t("h3",{staticClass:"text-xl"},[this._v("Queue")]),this._v(" "),t("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-4"},[this._v("\n        A queue is a data structure that allows adding(offering) items to the\n        back and removing(polling) them from the front in O(1) time. Queue items\n        are accessed according to the\n        "),t("strong",[this._v("FIFO")]),this._v("(first in first out) rule.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Python lists are not suitable for implementing queues. Though it allows\n        amortized O(1) appends at one end, it takes O(n) time to remove an item\n        at the start. This is because all the subsequent items have to be\n        shifted to the left."),t("br"),this._v("\n        Fortunately, Python contains a "),t("strong",[this._v("deque")]),this._v(" module that\n        internally uses a doubly-linked list. This allows for O(1) appends and\n        pops from both ends making it suitable for implementing both stacks and\n        queues.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-6 flex flex-col"},[t("h3",{staticClass:"text-xl"},[this._v("Set")]),this._v(" "),t("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-4"},[this._v("\n        Set is an unordered data structure. This means that they do not remember\n        the order of insertion. They are used to store unique values and allow\n        lookups in O(k) time, where "),t("strong",[this._v("k")]),this._v(" is the length of the\n        key(1 in case of numbers).\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Python provides an easy to use set object using "),t("em",[this._v("set()")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-6 flex flex-col"},[t("h3",{staticClass:"text-xl"},[this._v("Map")]),this._v(" "),t("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-4"},[this._v("\n        A map is a special data structure that allows mapping of unique keys to\n        a respective value. Similar to a set, it allows lookup in O(k) time\n        where\n        "),t("strong",[this._v("k")]),this._v(" is the length of the key.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        In Python, maps are known as dictionaries. They can be created using\n        "),t("em",[this._v("{}")]),this._v(" or "),t("em",[this._v("dict()")]),this._v(".\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-6 flex flex-col"},[t("h3",{staticClass:"text-xl"},[this._v("Heap")]),this._v(" "),t("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-4"},[this._v("\n        Heap is a tree-like data structure that satisfies the heap property. It\n        means that, in a min-heap, the value of every node is greater than or\n        equal to its parent. This ensures that the root of the tree always\n        contains the smallest value and vice-versa for max-heap."),t("br"),this._v("\n        Min-heaps allow insertion and retrieval of minimum(or maximum in case of\n        max-heaps) in O(log n) time.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Python provides a "),t("strong",[this._v("heapq")]),this._v(" module for working with heaps.\n        An ordinary list is used to store the elements and the heap is\n        implemented using the heapq methods."),t("br"),this._v("\n        By default, heapq implements a min-heap but we can use it as a max-heap\n        too. Simply invert the sign of each number when it is inserted and\n        restore it on removal.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        The heapq module also provides a "),t("em",[this._v("heapify()")]),this._v(" function that\n        converts an existing list into a heap in O(n) time."),t("br"),t("br"),this._v("\n        And there you go. We have covered all the important inbuilt data\n        structures of Python. Now use these to solve your algorithmic problems\n        more efficiently.\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(193).default,CodeSnippet:n(194).default})}}]);