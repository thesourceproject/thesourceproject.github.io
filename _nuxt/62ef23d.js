(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,t,n){"use strict";n.r(t);var r={name:"ArticleHeader",props:["title","readTime","date","tags"]},o=n(16),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"my-8 flex flex-col"},[n("h1",{staticClass:"text-5xl font-bold leading-snug"},[e._v(e._s(e.title))]),e._v(" "),n("p",{staticClass:"mt-6 opacity-50"},[e._v(e._s(e.date)+" | "+e._s(e.readTime))]),e._v(" "),n("p",{staticClass:"mt-2 flex flex-wrap"},e._l(e.tags,(function(t){return n("NuxtLink",{key:t,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",attrs:{to:{path:"/find",query:{q:t}}}},[e._v("\n      #"+e._s(t)+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(50).default})},194:function(e,t,n){"use strict";n.r(t);var r=n(68),o=(n(195),n(196),{name:"CodeSnippet",props:["code","lang"],mounted:function(){r.a.highlightAll()}}),l=n(16),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-10 my-4"},[t("pre",[t("code",{class:this.lang},[this._v(this._s(this.code))])])])}),[],!1,null,null,null);t.default=component.exports},195:function(e,t){!function(e){var t=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:{function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:{}}}},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,boolean:/\$(?:true|false)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},n=t.string[0].inside;n.boolean=t.boolean,n.variable=t.variable,n.function.inside=t}(Prism)},196:function(e,t){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},219:function(e,t,n){e.exports=n.p+"img/basics3-2.8fb93b6.png"},220:function(e,t,n){e.exports=n.p+"img/basics3-3.ad7548f.png"},221:function(e,t,n){e.exports=n.p+"img/basics3-1.ba76c1e.png"},229:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{staticClass:"text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://www.python.org/",target:"_blank"}},[this._v("Python")]),this._v("\n        is an interpreted, high-level and general-purpose programming language.\n        Python is being used in web development, machine learning and even\n        desktop applications. Its easy to learn syntax is very well suited for\n        beginners as well as experienced programmers.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"mx-auto mt-6",attrs:{href:"https://www.python.org/",target:"_blank"}},[t("img",{staticClass:"w-96 rounded-2xl",attrs:{src:n(221),alt:"Python"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex flex-col max-w-4xl mt-12"},[t("h2",{staticClass:"text-2xl"},[this._v("Getting Started")]),this._v(" "),t("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-8"},[e._v("\n        First we need to install Python. You can download Python from the\n        "),n("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{href:"https://www.python.org/downloads/",target:"_blank"}},[e._v("official website")]),e._v("."),n("br"),e._v("\n        At the time of writing this article, the latest version available is\n        "),n("strong",[e._v("3.9.1")]),e._v("."),n("br"),e._v("\n        Once the download is complete, you may begin the installation\n        process."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - Make sure the\n        "),n("strong",[e._v("Add Python 3.9 to PATH")]),e._v(" option is checked. This will\n        allow you to access the Python interpreter in the Windows Powershell\n        from anywhere.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-6"},[this._v("\n        Open a Powershell window, type in "),t("em",[this._v("python")]),this._v(" and press\n        "),t("strong",[this._v("Enter")]),this._v("."),t("br"),this._v("\n        This will open the Python interpreter. You can try out Python here.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-6"},[this._v("\n        Let's start with everyone's favourite, the\n        "),t("strong",[this._v("Hello World!")]),this._v(" program. Enter this code in the python\n        shell and press "),t("strong",[this._v("Enter")]),this._v(".\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        It should print "),t("strong",[this._v("Hello World!")]),this._v("(Obviously). But now let's\n        try some statements. Enter these statements one by one in the python\n        shell.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Save the file and then open the in-built Powershell("),t("strong",[this._v("Ctrl + `")]),this._v(") and it should show you the current working directory. Now type in the\n        following command.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        This command will run your program and you will get the output as three\n        comma separated numbers\n        "),n("strong",[e._v("300.0, 300.0, 480.0")]),e._v("(The default separator for the\n        "),n("strong",[e._v("print")]),e._v(" function is a single space but it can be changed\n        to anything as in the example)."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - It is important to know that variable/function\n        names can only start with either a letter or an underscore and may\n        contain digits, letters and underscores after that."),n("br"),n("br"),e._v("\n        You might have noticed that we are reusing the same logic for\n        calculating simple interest for 3 different values which is causing\n        duplication in our code. Functions(Or methods) will help us avoid this\n        duplication."),n("br"),e._v("\n        Erase everything and type in the following statements and run the\n        program.\n        "),n("strong",[e._v("Don't forget the whitespace")]),e._v(" before the\n        "),n("strong",[e._v("return")]),e._v(" statement.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Now we can reuse our "),n("strong",[e._v("simpleInterest")]),e._v(" function as many\n        times as needed. Also if we have to modify the logic we only need to do\n        it in one place. Therefore, this code is a lot more maintainable than\n        the previous one."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - Notice that it is "),n("em",[e._v("necessary")]),e._v(" to add\n        white-space when starting a new block of code, like after declaring a\n        function, loop or an if-else statement. Using camel-case for\n        variable/function names is "),n("em",[e._v("optional")]),e._v(" but usually preferred."),n("br"),n("br"),e._v("\n        In our previous code we ran our\n        "),n("strong",[e._v("simpleInterest")]),e._v(" function 3 times, what if wanted to run\n        it a 100 times or even a 1000 times. Now we need to learn about loops.\n        Run the following program.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        This is the simplest way to run a "),n("strong",[e._v("for")]),e._v(" loop. Here an\n        iterator "),n("strong",[e._v("i")]),e._v(" is created and it's value changes from 0 to\n        4(i.e less than 5). The "),n("code",[e._v("print(i)")]),e._v(" statement in the block\n        prints the current value of "),n("strong",[e._v("i")]),e._v(" each time the loop is\n        executed(In our case "),n("em",[e._v("0, 1, 2, 3, 4")]),e._v("). We can also modify the\n        "),n("strong",[e._v("for")]),e._v(" loop so that it iterates through our required\n        range.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Here our iterator "),t("strong",[this._v("i")]),this._v(" is created and it's value changes\n        from 10 to 100(i.e less than 101) with a step value of 4(i.e. 10, 14,\n        18, 22...)."),t("br"),t("br"),this._v("\n        That's all for now. We will cover more topics in later tutorials.\n        Meanwhile, why don't you play around with Python yourself?\n      ")])}],o=n(193),l=n(194),c={name:"basics3",components:{ArticleHeader:o.default,CodeSnippet:l.default},head:{title:"Python fundamentals | The Source Project",meta:[{hid:"description",name:"description",content:"Python is an interpreted, high-level and general-purpose programming language. Python is being used in web development, machine learning and even desktop applications."}]}},h=n(16),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[r("ArticleHeader",{attrs:{title:"Python fundamentals",date:"6 Jan '21",readTime:"15 min read",tags:["basics","python","beginner"]}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(219),alt:"Install Python"}}),e._v(" "),e._m(4),e._v(" "),r("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(220),alt:"Windows Powershell"}}),e._v(" "),e._m(5),e._v(" "),r("CodeSnippet",{attrs:{code:"print('Hello World!')",lang:"language-python"}}),e._v(" "),e._m(6),e._v(" "),r("CodeSnippet",{attrs:{code:"x = 5\ny = 7\n# Can also be written as --\x3e x, y = 5, 7\nz = x * y\nprint(z)",lang:"language-python"}}),e._v(" "),r("p",[e._v("\n        It should print "),r("strong",[e._v("35")]),e._v(". What we did here was that we first\n        declared a variable "),r("strong",[e._v("x")]),e._v(" while giving it a value of\n        "),r("strong",[e._v("5")]),e._v(". Similarly we also declared "),r("strong",[e._v("y")]),e._v(" and\n        gave it a value of "),r("strong",[e._v("7")]),e._v(". We then stored the product of\n        "),r("strong",[e._v("x")]),e._v(" and "),r("strong",[e._v("y")]),e._v(" in "),r("strong",[e._v("z")]),e._v("(In\n        Python, as in most programming languages, the "),r("strong",[e._v("*")]),e._v(" symbol\n        means multiplication)."),r("br"),e._v("\n        After that we simply print the value of\n        "),r("strong",[e._v("z")]),e._v("(i.e. 35)."),r("br"),e._v(" "),r("strong",[e._v("Note")]),e._v(" - You can add comments by writing\n        "),r("strong",[e._v("#")]),e._v(" and then typing in the desired comment. These do not\n        change the output of the program."),r("br"),r("br"),e._v("\n        Now let's take it up a notch. Till now we were using the Python shell to\n        type and run our code. It's a great tool to try out Python but real-life\n        applications are created in Python scripts. So now we will learn how to\n        use the popular text editor\n        "),r("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{href:"https://code.visualstudio.com/",target:"_blank"}},[e._v("Visual Studio Code")]),e._v("\n        to create Python scripts."),r("br"),e._v(" "),r("strong",[e._v("Note")]),e._v(" - For instructions on how to install and work with\n        VS Code, refer to\n        "),r("NuxtLink",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{to:"/article/1/#Installing-Visual-Studio-Code-and-Git-in-Windows"}},[e._v("this tutorial")]),e._v("."),r("br"),r("br"),e._v("\n        Create a new folder on your computer named\n        "),r("strong",[e._v("TheSourceProject")]),e._v(", right click on it and open it in VS\n        Code."),r("br"),e._v("\n        Now create a new file "),r("strong",[e._v("myFirstProgram.py")]),e._v(" and paste in\n        the following code.\n      ")],1),e._v(" "),r("CodeSnippet",{attrs:{code:"# Formula for simple interest --\x3e (p * r * t) / 100\np1, p2, p3 = 1200, 1500, 2000\nr1, r2, r3 = 5, 10, 8\nt1, t2, t3 = 5, 2, 3\na1 = (p1 * r1 * t1) / 100\na2 = (p2 * r2 * t2) / 100\na3 = (p3 * r3 * t3) / 100\nprint(a1, a2, a3, sep=', ')",lang:"language-python"}}),e._v(" "),e._m(7),e._v(" "),r("CodeSnippet",{attrs:{code:"python myFirstProgram.py",lang:"language-powershell"}}),e._v(" "),e._m(8),e._v(" "),r("CodeSnippet",{attrs:{code:"# Same program as above, now using a function\ndef simpleInterest(p, r, t):\n  return (p * r * t) / 100\np1, p2, p3 = 1200, 1500, 2000\nr1, r2, r3 = 5, 10, 8\nt1, t2, t3 = 5, 2, 3\na1 = simpleInterest(p1, r1, t1)\na2 = simpleInterest(p2, r2, t2)\na3 = simpleInterest(p3, r3, t3)\nprint(a1, a2, a3, sep=', ')",lang:"language-python"}}),e._v(" "),e._m(9),e._v(" "),r("CodeSnippet",{attrs:{code:"for i in range(5):\n  print(i)",lang:"language-python"}}),e._v(" "),e._m(10),e._v(" "),r("CodeSnippet",{attrs:{code:"for i in range(10, 101, 4):\n  print(i)",lang:"language-python"}}),e._v(" "),e._m(11)],1)])}),r,!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(193).default,CodeSnippet:n(194).default})}}]);