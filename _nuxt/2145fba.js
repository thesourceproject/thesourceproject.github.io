(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{195:function(e,t,n){"use strict";n.r(t);var r={name:"ArticleHeader",props:["title","readTime","date","tags"]},o=n(16),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"my-8 flex flex-col"},[n("h1",{staticClass:"text-5xl font-bold leading-snug"},[e._v(e._s(e.title))]),e._v(" "),n("p",{staticClass:"mt-6 opacity-50"},[e._v(e._s(e.date)+" | "+e._s(e.readTime))]),e._v(" "),n("p",{staticClass:"mt-2 flex flex-wrap"},e._l(e.tags,(function(t){return n("NuxtLink",{key:t,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",attrs:{to:{path:"/find",query:{q:t}}}},[e._v("\n      #"+e._s(t)+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(50).default})},196:function(e,t,n){"use strict";n.r(t);var r=n(69),o=(n(197),n(198),{name:"CodeSnippet",props:["code","lang"],mounted:function(){r.a.highlightAll()}}),l=n(16),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-10 my-4"},[t("pre",[t("code",{class:this.lang},[this._v(this._s(this.code))])])])}),[],!1,null,null,null);t.default=component.exports},197:function(e,t){!function(e){var t=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:{function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:{}}}},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,boolean:/\$(?:true|false)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},n=t.string[0].inside;n.boolean=t.boolean,n.variable=t.variable,n.function.inside=t}(Prism)},198:function(e,t){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},230:function(e,t,n){"use strict";n.r(t);var r=n(195),o=n(196),l={name:"Python3",components:{ArticleHeader:r.default,CodeSnippet:o.default},head:{title:"Handling user input in Python | The Source Project",meta:[{hid:"description",name:"description",content:"While developing Python applications we often need to allow user interaction, either to obtain necessary data or to direct the flow of our program. Python enables this functionality through its inbuilt input() function."}]}},c=n(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[n("ArticleHeader",{attrs:{title:"Handling user input in Python",date:"8 Jan '21",readTime:"5 min read",tags:["python","basics","beginner"]}}),e._v(" "),n("p",[e._v("\n        While developing\n        "),n("a",{staticClass:"text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://www.python.org/",target:"_blank"}},[e._v("Python")]),e._v("\n        applications we often need to allow user interaction, either to obtain\n        necessary data or to direct the flow of our program. Python enables this\n        functionality through its inbuilt\n        "),n("a",{staticClass:"text-text-3 font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://docs.python.org/3/library/functions.html#input",target:"_blank"}},[e._v("input()")]),e._v("\n        function. In this tutorial we will learn how to use this function in\n        order to create dynamic applications."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - This tutorial assumes you have some basic\n        understanding of Python. You may refer to our\n        "),n("NuxtLink",{staticClass:"text-text-3 font-bold hover:underline focus:underline focus:outline-none",attrs:{to:"/article/3#Python-fundamentals"}},[e._v("previous tutorial")]),e._v("\n        before you continue.\n      ")],1),e._v(" "),e._m(0),e._v(" "),n("p",{staticClass:"mt-8"},[e._v("Let's start with a basic example.")]),e._v(" "),n("CodeSnippet",{attrs:{code:"name = input('Enter your name: ')\nprint('Hello', name)",lang:"language-python"}}),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("CodeSnippet",{attrs:{code:"number = int(input())\nprint('Cube of the given number is ', number ** 3)",lang:"language-python"}}),e._v(" "),e._m(4),e._v(" "),n("CodeSnippet",{attrs:{code:"num1 = float(input())\nnum2 = float(input())\nprint('Sum of the given numbers is ', num1 + num2)",lang:"language-python"}}),e._v(" "),e._m(5),e._v(" "),n("CodeSnippet",{attrs:{code:"total = 0\nnumbers = int(input('How many numbers do you want to enter: '))\nfor i in range(numbers):\n  total = total + float(input()) # total += float(input())\nprint('Sum of the given numbers is ', total)",lang:"language-python"}}),e._v(" "),e._m(6)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex flex-col max-w-4xl mt-12"},[t("h2",{staticClass:"text-2xl"},[this._v("Getting Started")]),this._v(" "),t("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        When you run this, Python will prompt you to enter your name in the\n        terminal. Type anything and press enter to continue. It will print\n        "),n("em",[e._v("Hello")]),e._v(" , then a space and then your name."),n("br"),e._v("\n        What we did here was that we captured the user input and stored in a\n        variable called "),n("strong",[e._v("name")]),e._v(" and then printed a message using\n        that variable. The "),n("strong",[e._v("input()")]),e._v(" function can also take an\n        "),n("em",[e._v("optional")]),e._v(" string which can be shown to the user before giving an\n        input which in our case was "),n("strong",[e._v("Enter your name:")]),n("br"),n("br"),e._v("\n        Now let's perform some mathematical operations on user input but before\n        we continue we need to learn a bit about data types in Python. Python\n        has some basic data types -\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mt-4 list-disc list-inside"},[n("li",[e._v("Integer : represents mathematical integers.")]),e._v(" "),n("li",[e._v("Floating-Point Number : numbers with a fractional part.")]),e._v(" "),n("li",[e._v("\n          Boolean : data type that can only have one of the two values,\n          "),n("strong",[e._v("True")]),e._v(" or "),n("strong",[e._v("False")]),e._v(".\n        ")]),e._v(" "),n("li",[e._v("\n          String : set of characters such as letters, numbers, symbols, etc.\n        ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-4"},[this._v("\n        The "),t("strong",[this._v("input()")]),this._v(" function returns a string that represents\n        the captured user input but we cannot directly perform mathematical\n        operations on strings in Python."),t("br"),this._v("\n        Therefore, we need to convert our input string to an appropriate data\n        type first."),t("br"),this._v("\n        Run the following.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Before storing our user input in the variable\n        "),n("strong",[e._v("number")]),e._v(", we convert it to an integer using the\n        "),n("strong",[e._v("int()")]),e._v(" function. Now we use the\n        "),n("strong",[e._v("**")]),e._v("(Exponentiation operator) to find the cube of the\n        integer."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - if you supply a non-integer value to the\n        program, you will receive a message like\n        "),n("em",[e._v("ValueError: invalid literal for int() with base 10")]),e._v(". This is\n        because the "),n("strong",[e._v("int()")]),e._v(" function expects an integer string in\n        order to convert its type."),n("br"),n("br"),e._v("\n        Similarly, we can input floating-point numbers by using the\n        "),n("strong",[e._v("float()")]),e._v(" function.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        This program can not only take integers(e.g. 1, 4, 200512) but also\n        fractional-numbers(e.g. 3.14, 5.6, 925.163) as input."),t("br"),this._v("\n        Like in the previous program, it will throw a "),t("em",[this._v("ValueError")]),this._v(" if a\n        non-numeric value is supplied."),t("br"),t("br"),this._v("\n        We can also use the "),t("strong",[this._v("input()")]),this._v(" function inside a loop.\n        This is useful when we do not know in advance how many times the user\n        input is needed.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        First we create a variable "),n("strong",[e._v("total")]),e._v("(not "),n("em",[e._v("sum")]),e._v(", as\n        "),n("em",[e._v("sum")]),e._v(" is an in-built function of Python). Then we ask the user\n        how many numbers he/she will input."),n("br"),e._v("\n        After that, we run a "),n("strong",[e._v("for")]),e._v(" loop that many times, each\n        time asking for a number and adding it to our\n        "),n("strong",[e._v("total")]),e._v("."),n("br"),n("br"),e._v("\n        That's all you need to know about handling user input. Now you can\n        practice making some programs requiring user input on your own.\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(195).default,CodeSnippet:n(196).default})}}]);