(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(e,t,n){"use strict";n.r(t);var r={name:"ArticleHeader",props:["title","readTime","date","tags"]},o=n(16),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"my-8 flex flex-col"},[n("h1",{staticClass:"text-5xl font-bold leading-snug"},[e._v(e._s(e.title))]),e._v(" "),n("p",{staticClass:"mt-6 opacity-50"},[e._v(e._s(e.date)+" | "+e._s(e.readTime))]),e._v(" "),n("p",{staticClass:"mt-2 flex flex-wrap"},e._l(e.tags,(function(t){return n("NuxtLink",{key:t,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",attrs:{to:{path:"/find",query:{q:t}}}},[e._v("\n      #"+e._s(t)+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(50).default})},194:function(e,t,n){"use strict";n.r(t);var r=n(68),o=(n(195),n(196),n(197),{name:"CodeSnippet",props:["code","lang"],mounted:function(){r.a.highlightAll()}}),l=n(16),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-10 my-4"},[t("pre",[t("code",{class:this.lang},[this._v(this._s(this.code))])])])}),[],!1,null,null,null);t.default=component.exports},195:function(e,t){!function(e){var t=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:{function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:{}}}},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,boolean:/\$(?:true|false)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},n=t.string[0].inside;n.boolean=t.boolean,n.variable=t.variable,n.function.inside=t}(Prism)},196:function(e,t){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},197:function(e,t){!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{"class-name":[r,{pattern:RegExp(n+/[A-Z]\w*(?=\s+\w+\s*[;,=())])/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(\:\:\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},234:function(e,t,n){"use strict";n.r(t);var r=n(193),o=n(194),l={name:"frontend5",components:{ArticleHeader:r.default,CodeSnippet:o.default},head:{title:"LeetCode #1 Two Sum | The Source Project",meta:[{hid:"description",name:"description",content:"Check out this problem on LeetCode. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."}]}},c=n(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[n("ArticleHeader",{attrs:{title:"LeetCode #1 Two Sum",date:"20 Feb'21",readTime:"10\n      min read",tags:["competitive","data","structures","algorithms","beginner"]}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("CodeSnippet",{attrs:{code:"// Java\npublic int[] twoSum(int[] nums, int target) {\n    for(int i = 0; i < nums.length; i++) {\n        for(int j = 0; j < nums.length; j++) {\n            if(i != j) { // You may not use the same element twice.\n                if(nums[i] + nums[j] == target) {\n                    return new int[] {i, j}; // Return the indices in an array.\n                }\n            }\n        }\n    }\n    return new int[] {-1, -1}; // Default return value if there is no solution.\n}",lang:"language-java"}}),e._v(" "),n("CodeSnippet",{attrs:{code:"# Python3\ndef twoSum(self, nums: List[int], target: int) -> List[int]:\n    for i in range(len(nums)):\n        for j in range(len(nums)):\n            if(i != j):\n                if(nums[i] + nums[j] == target):\n                    return [i, j]",lang:"language-python"}}),e._v(" "),e._m(5),e._v(" "),n("CodeSnippet",{attrs:{code:"// Java\npublic int[] twoSum(int[] nums, int target) {\n    for(int i = 0; i < nums.length; i++) {\n        for(int j = i + 1; j < nums.length; j++) {\n            if(nums[i] + nums[j] == target) {\n                return new int[] {i, j};\n            }\n        }\n    }\n    return new int[] {-1, -1};\n}",lang:"language-java"}}),e._v(" "),n("CodeSnippet",{attrs:{code:"# Python3\ndef twoSum(self, nums: List[int], target: int) -> List[int]:\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if(nums[i] + nums[j] == target):\n                return [i, j]",lang:"language-python"}}),e._v(" "),e._m(6),e._v(" "),n("CodeSnippet",{attrs:{code:"// Java\n// import java.util.*; // For the HashMap class, it is automatically imported on LeetCode.\npublic int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> indices = new HashMap<>();\n    for(int i = 0; i < nums.length; i++) {\n        if(indices.containsKey(target - nums[i])) {\n            return new int[] {indices.get(target - nums[i]), i};\n        }\n        indices.put(nums[i], i);\n    }\n    return new int[] {-1, -1};\n}",lang:"language-java"}}),e._v(" "),n("CodeSnippet",{attrs:{code:"# Python3\ndef twoSum(self, nums: List[int], target: int) -> List[int]:\n    indices = {};\n    for i in range(len(nums)):\n        if((target - nums[i]) in indices):\n            return [indices[target - nums[i]], i]\n        indices[nums[i]] = i",lang:"language-python"}}),e._v(" "),e._m(7)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Check out\n        "),t("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{href:"https://leetcode.com/problems/two-sum/",target:"_blank"}},[this._v("this")]),this._v("\n        problem on LeetCode.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"mx-auto mt-6 p-6 bg-white rounded-2xl",attrs:{title:"LeetCode, Public domain, via Wikimedia Commons",href:"https://commons.wikimedia.org/wiki/File:LeetCode_Logo_black_with_text.svg",target:"_blank"}},[t("img",{staticClass:"w-96",attrs:{alt:"LeetCode Logo black with text",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/640px-LeetCode_Logo_black_with_text.svg.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        Given an array of integers "),n("strong",[e._v("nums")]),e._v(" and an integer\n        "),n("strong",[e._v("target")]),e._v(", return\n        "),n("em",[e._v("indices of the two numbers such that they add up to\n          "),n("strong",[e._v("target")])]),e._v("."),n("br"),e._v("\n        You may assume that each input would have\n        "),n("strong",[n("em",[e._v("exactly")]),e._v(" one solution")]),e._v(", and you may not use the\n        "),n("em",[e._v("same")]),e._v(" element twice."),n("br"),e._v("\n        You can return the answer in any order.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex flex-col max-w-4xl mt-12"},[t("h2",{staticClass:"text-2xl"},[this._v("Getting Started")]),this._v(" "),t("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-8"},[this._v("\n        Basically we need to find a pair of numbers in the given array that add\n        up to "),t("strong",[this._v("target")]),this._v(". The most straight-forward way to find it\n        is to try every possible pair.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Notice we added a default return value in the Java code at the end. This\n        is because the return type of the function is of\n        "),n("strong",[e._v("int[]")]),e._v(" type, therefore the function must return an array\n        of integers for all conditions. This is not required in the Python\n        version as the question states that we will get a unique solution for\n        every test case."),n("br"),n("br"),e._v("\n        This solution has a time complexity of\n        "),n("strong",[e._v("O(n"),n("sup",[e._v("2")]),e._v(")")]),e._v(" because we run 2 nested loops which\n        each run for the complete length of the array in the worst case. If we\n        submit this, it will get accepted. But we can improve upon this solution\n        slightly."),n("br"),n("br"),e._v("\n        If you see our code, it runs 2 loops from the beginning and we are\n        checking every pair 2 times. For example, initially we check the pair\n        (i, j) = (0, 1) and when the inner loop completes once, we check the\n        pair (i, j) = (1, 0). The sum is going to be the same in either order so\n        we can save some time by skipping these pairs."),n("br"),e._v("\n        Let's see how we can achieve this."),n("br"),n("br"),e._v("\n        Suppose there's an array [0, 1, 2, 3, 4]. In the first outer loop we\n        will check the pairs (0, 1), (0, 2), (0, 3), (0, 4). For the next loop\n        we can start from (1, 2) instead of (1, 0) and continue on (1, 3), (1,\n        4). And then (2, 3), (2, 4) and finally (3, 4)."),n("br"),e._v("\n        We observe that we can start the inner loop from "),n("em",[e._v("i + 1")]),e._v(" to avoid\n        the visited pairs.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        This solution like the previous one has a space complexity of\n        "),n("strong",[e._v("O(1)")]),e._v(" as we only use constant amount of memory to store\n        our variables. Notice now we don't have to check for "),n("em",[e._v("i != j")]),e._v(" as\n        i and j will never be equal."),n("br"),n("br"),e._v("\n        We improved our solution slightly but it's time complexity is still\n        "),n("strong",[e._v("O(n"),n("sup",[e._v("2")]),e._v(")")]),e._v(". This is because in the worst case our\n        solution checks (n - 1) + (n - 2) + (n - 3) + ... + 2 + 1 = (n)(n - 1) ÷\n        2 pairs, thereby giving it an upper bound of\n        "),n("strong",[e._v("O(n"),n("sup",[e._v("2")]),e._v(")")]),e._v("."),n("br"),n("br"),e._v("\n        Can we bring our solution down to\n        "),n("strong",[e._v("O(n)?")]),n("br"),e._v("\n        Yes! We can. Here comes\n        "),n("strong",[e._v("HashMap/Dictionary")]),e._v(" to the rescue."),n("br"),n("br"),e._v("\n        Java Hashmaps & Python Dictionaries can store key-value pairs that\n        allow lookup in "),n("strong",[e._v("O(1)")]),e._v(" time. But how will it help us? For\n        every number, if we could check whether its difference from\n        "),n("strong",[e._v("target")]),e._v(" exists in the array, we will get the answer.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Here we create a HashMap/Dictionary to store the indices of the array\n        elements. Then we traverse over the array while checking if we have\n        encountered "),n("em",[e._v("target - nums[i]")]),e._v(" previously. If not, we store the\n        index with the array element as the key in our HashMap/Dictionary."),n("br"),n("br"),e._v("\n        So now we have a solution with a time complexity of\n        "),n("strong",[e._v("O(n)")]),e._v(" making it much faster than the previous ones,\n        however it also has a space complexity of "),n("strong",[e._v("O(n)")]),e._v(" because\n        we are using additional memory proportional to the size of the input\n        array in the worst case."),n("br"),n("br"),e._v("\n        So why stop here? Try some more problems and keep on learning.\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(193).default,CodeSnippet:n(194).default})}}]);