(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(e,t,n){"use strict";n.r(t);var r={name:"ArticleHeader",props:["title","readTime","date","tags"]},o=n(16),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"my-8 flex flex-col"},[n("h1",{staticClass:"text-5xl font-bold leading-snug"},[e._v(e._s(e.title))]),e._v(" "),n("p",{staticClass:"mt-6 opacity-50"},[e._v(e._s(e.date)+" | "+e._s(e.readTime))]),e._v(" "),n("p",{staticClass:"mt-2 flex flex-wrap"},e._l(e.tags,(function(t){return n("NuxtLink",{key:t,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",attrs:{to:{path:"/find",query:{q:t}}}},[e._v("\n      #"+e._s(t)+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(50).default})},194:function(e,t,n){"use strict";n.r(t);var r=n(68),o=(n(195),n(196),n(197),{name:"CodeSnippet",props:["code","lang"],mounted:function(){r.a.highlightAll()}}),l=n(16),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-10 my-4"},[t("pre",[t("code",{class:this.lang},[this._v(this._s(this.code))])])])}),[],!1,null,null,null);t.default=component.exports},195:function(e,t){!function(e){var t=e.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:{function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:{}}}},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,boolean:/\$(?:true|false)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},n=t.string[0].inside;n.boolean=t.boolean,n.variable=t.variable,n.function.inside=t}(Prism)},196:function(e,t){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},197:function(e,t){!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{"class-name":[r,{pattern:RegExp(n+/[A-Z]\w*(?=\s+\w+\s*[;,=())])/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(\:\:\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},222:function(e,t,n){e.exports=n.p+"img/frontend5-1.221b737.png"},223:function(e,t,n){e.exports=n.p+"img/frontend5-2.db0c51f.png"},233:function(e,t,n){"use strict";n.r(t);var r=n(193),o=n(194),l={name:"frontend5",components:{ArticleHeader:r.default,CodeSnippet:o.default},head:{title:"Creating a countdown timer using Javascript | The Source Project",meta:[{hid:"description",name:"description",content:"In this tutorial, we will learn how to create a simple countdown timer application using Javascript that can then be run in your web-browser."}]}},c=n(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[r("ArticleHeader",{attrs:{title:"Creating a countdown timer using Javascript",date:"9 Feb'21",readTime:"30 min read",tags:["frontend","html","css","javascript","beginner"]}}),e._v(" "),r("p",[e._v("\n        In this tutorial, we will learn how to create a simple countdown timer\n        application using Javascript that can then be run in your web-browser.\n      ")]),e._v(" "),r("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(222),alt:"Countdown Timer"}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),r("CodeSnippet",{attrs:{code:'<div id="countdownTimer">\n  <input id="duration" type="number" placeholder="Timer Duration" />\n  <fieldset id="controls">\n    <button id="startButton" title="Start">Start</button>\n    <button id="stopButton" title="Stop">Stop</button>\n    <button id="resetButton" title="Reset">Reset</button>\n  </fieldset>\n  <p id="timer">0.0</p>\n</div>',lang:"language-html"}}),e._v(" "),e._m(2),e._v(" "),r("CodeSnippet",{attrs:{code:'@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");',lang:"language-css"}}),e._v(" "),e._m(3),e._v(" "),r("CodeSnippet",{attrs:{code:"body {\n  margin: 0;\n  display: flex;\n  min-height: 100vh;\n}",lang:"language-css"}}),e._v(" "),e._m(4),e._v(" "),r("CodeSnippet",{attrs:{code:"#countdownTimer {\n  margin: auto;\n}",lang:"language-css"}}),e._v(" "),e._m(5),e._v(" "),r("CodeSnippet",{attrs:{code:'input,\nbutton,\np {\n  font-family: "Open Sans", sans-serif;\n  padding: 0.5rem;\n  font-size: 1.25rem;\n  border: none;\n  text-align: center;\n}',lang:"language-css"}}),e._v(" "),e._m(6),e._v(" "),r("CodeSnippet",{attrs:{code:"button {\n  border-radius: 0.25rem;\n  cursor: pointer;\n}",lang:"language-css"}}),e._v(" "),e._m(7),e._v(" "),r("CodeSnippet",{attrs:{code:"#duration {\n  outline: none;\n  border-bottom: 2px solid lightgrey;\n}\n\n#duration:focus {\n  border-color: darkblue;\n}",lang:"language-css"}}),e._v(" "),e._m(8),e._v(" "),r("CodeSnippet",{attrs:{code:"#controls {\n  margin-top: 0.5rem;\n  padding: 0;\n  border: none;\n  display: flex;\n  justify-content: center;\n}",lang:"language-css"}}),e._v(" "),r("p",[e._v("\n        We use the "),r("strong",[e._v("display: flex")]),e._v(" and\n        "),r("strong",[e._v("justify-content: center")]),e._v(" properties to center the\n        buttons."),r("br"),e._v(" "),r("strong",[e._v("Note")]),e._v(" - You can learn more about the flex display\n        property in\n        "),r("NuxtLink",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{to:"/article/7#Let's-learn-CSS-Flexbox"}},[e._v("this")]),e._v("\n        tutorial.\n      ")],1),e._v(" "),r("CodeSnippet",{attrs:{code:"#startButton {\n  background-color: lightgreen;\n}\n\n#stopButton {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background-color: orangered;\n  color: white;\n}\n\n#resetButton {\n  background-color: yellow;\n}\n\n#timer {\n  margin: 0;\n  font-size: 10rem;\n}",lang:"language-css"}}),e._v(" "),e._m(9),e._v(" "),r("CodeSnippet",{attrs:{code:'const duration = document.getElementById("duration");\nconst startButton = document.getElementById("startButton");\nconst stopButton = document.getElementById("stopButton");\nconst resetButton = document.getElementById("resetButton");\nconst timer = document.getElementById("timer");\n\nlet interval;',lang:"language-js"}}),e._v(" "),e._m(10),e._v(" "),r("CodeSnippet",{attrs:{code:'startButton.addEventListener("click", () => {\n  let remainingTime = Number(duration.value);\n  timer.innerText = remainingTime;\n  interval = setInterval(() => {\n    remainingTime = remainingTime - 0.1;\n    timer.innerText = remainingTime;\n    if (remainingTime == 0) {\n      clearInterval(interval);\n    }\n  }, 100);\n});',lang:"language-js"}}),e._v(" "),e._m(11),e._v(" "),r("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(223),alt:"Floating-Point Arithmetic Precision Problem"}}),e._v(" "),e._m(12),e._v(" "),r("CodeSnippet",{attrs:{code:"remainingTime = (remainingTime - 0.1).toFixed(1);",lang:"language-js"}}),e._v(" "),e._m(13),e._v(" "),r("CodeSnippet",{attrs:{code:'startButton.addEventListener("click", () => {\n  clearInterval(interval);\n  let remainingTime = Number(duration.value);\n  if (Number.isInteger(remainingTime) && remainingTime > 0) {\n    timer.innerText = remainingTime;\n    interval = setInterval(() => {\n      remainingTime = (remainingTime - 0.1).toFixed(1);\n      timer.innerText = remainingTime;\n      if (remainingTime == 0) {\n        clearInterval(interval);\n      }\n    }, 100);\n  } else {\n    alert("Please enter a valid duration!");\n  }\n});',lang:"language-js"}}),e._v(" "),r("p",[e._v("\n        Now what's left is the easy stuff. We need to add the functionalities\n        for the stop and reset button.\n      ")]),e._v(" "),r("CodeSnippet",{attrs:{code:'stopButton.addEventListener("click", () => {\n  clearInterval(interval);\n});\n\nresetButton.addEventListener("click", () => {\n  clearInterval(interval);\n  timer.innerText = "0.0";\n});',lang:"language-js"}}),e._v(" "),e._m(14),e._v(" "),r("CodeSnippet",{attrs:{code:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>My Countdown Timer</title>\n    <style>\n      @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");\n\n      body {\n        margin: 0;\n        display: flex;\n        min-height: 100vh;\n      }\n\n      #countdownTimer {\n        margin: auto;\n      }\n\n      input,\n      button,\n      p {\n        font-family: "Open Sans", sans-serif;\n        padding: 0.5rem;\n        font-size: 1.25rem;\n        border: none;\n        text-align: center;\n      }\n\n      button {\n        cursor: pointer;\n      }\n\n      #duration {\n        border-bottom: 2px solid lightgrey;\n        outline: none;\n      }\n\n      #duration:focus {\n        border-color: darkblue;\n      }\n\n      #controls {\n        margin-top: 0.5rem;\n        padding: 0;\n        border: none;\n        display: flex;\n        justify-content: center;\n      }\n\n      #startButton {\n        background-color: lightgreen;\n        border-radius: 0.25rem;\n      }\n\n      #stopButton {\n        margin-left: 0.5rem;\n        margin-right: 0.5rem;\n        background-color: orangered;\n        color: white;\n        border-radius: 0.25rem;\n      }\n\n      #resetButton {\n        background-color: yellow;\n        border-radius: 0.25rem;\n      }\n\n      #timer {\n        margin: 0;\n        font-size: 10rem;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="countdownTimer">\n      <input id="duration" type="number" placeholder="Timer Duration" />\n      <fieldset id="controls">\n        <button id="startButton" title="Start">Start</button>\n        <button id="stopButton" title="Stop">Stop</button>\n        <button id="resetButton" title="Reset">Reset</button>\n      </fieldset>\n      <p id="timer">0.0</p>\n    </div>\n    <script>\n      const duration = document.getElementById("duration");\n      const startButton = document.getElementById("startButton");\n      const stopButton = document.getElementById("stopButton");\n      const resetButton = document.getElementById("resetButton");\n      const timer = document.getElementById("timer");\n\n      let interval;\n\n      startButton.addEventListener("click", () => {\n        clearInterval(interval);\n        let remainingTime = Number(duration.value);\n        if (Number.isInteger(remainingTime) && remainingTime > 0) {\n          timer.innerText = remainingTime;\n          interval = setInterval(() => {\n            remainingTime = (remainingTime - 0.1).toFixed(1);\n            timer.innerText = remainingTime;\n            if (remainingTime == 0) {\n              clearInterval(interval);\n            }\n          }, 100);\n        } else {\n          alert("Please enter a valid duration!");\n        }\n      });\n\n      stopButton.addEventListener("click", () => {\n        clearInterval(interval);\n      });\n\n      resetButton.addEventListener("click", () => {\n        clearInterval(interval);\n        timer.innerText = "0.0";\n      });\n    <\/script>\n  </body>\n</html>',lang:"language-html"}})],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex flex-col max-w-4xl mt-12"},[t("h2",{staticClass:"text-2xl"},[this._v("Getting Started")]),this._v(" "),t("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-8"},[this._v("\n        First we need to write the HTML for our countdown timer."),t("br"),this._v("\n        Create an empty file on your computer named\n        "),t("strong",[this._v("myCountdownTimer.html")]),this._v(" and paste in the following markup\n        in the "),t("strong",[this._v("body")]),this._v(" tag.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We are giving each of our elements a unique\n        "),n("strong",[e._v("id")]),e._v(" attribute. This will help us with the styling and\n        also allow us to access the element with Javascript."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - The "),n("strong",[e._v("class")]),e._v(" attribute should be\n        used for styling elements but since all of our elements are unique, we\n        may use "),n("strong",[e._v("id")]),e._v(". Also the "),n("strong",[e._v("id")]),e._v(" will be\n        required for our Javascript."),n("br"),n("br"),e._v("\n        If you open this HTML file right now, you'll notice that it doesn't look\n        anything like the image above. This is because we haven't added any CSS\n        yet. Time to add some styling."),n("br"),e._v("\n        Paste the following CSS inside a "),n("strong",[e._v("style")]),e._v(" tag in the\n        "),n("strong",[e._v("head")]),e._v(" section of your HTML file.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        First we import "),t("strong",[this._v("Open Sans")]),this._v(" font-family from\n        "),t("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{href:"https://fonts.google.com/",target:"_blank"}},[this._v("Google Fonts")]),this._v(". Google Fonts has a large catalog of free fonts that you may use in\n        any of your own projects.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Then we add some styling to the "),n("strong",[e._v("body")]),e._v(" tag. We set its\n        "),n("strong",[e._v("min-height")]),e._v(" property to "),n("strong",[e._v("100vh")]),e._v("(vh means\n        hundredths of the viewport height). This makes the\n        "),n("strong",[e._v("body")]),e._v(" at least as tall as the height of the current\n        viewport. This, along with the "),n("strong",[e._v("display: flex")]),e._v(" property,\n        will help us to center the countdown timer on the screen.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We use "),n("strong",[e._v("margin: auto")]),e._v(" property on the countDownTimer\n        element to equally apply margin on all 4 sides, this will center the\n        element horizontally as well as vertically."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - We referred to the body tag with\n        "),n("strong",[e._v("body")]),e._v(" but the countDownTimer element with\n        "),n("strong",[e._v("#countDownTimer")]),e._v("(with a "),n("strong",[e._v("#")]),e._v("). The\n        "),n("strong",[e._v("#")]),e._v(" symbol is a CSS selector used to apply styles on a\n        specific "),n("strong",[e._v("id")]),e._v(". If we want to style any HTML elements, we\n        can do it so using their names, without any CSS selectors(such as\n        "),n("strong",[e._v("h1")]),e._v(", "),n("strong",[e._v("input")]),e._v(").\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We add a padding of 0.5rem(1rem equals the font size of the html element\n        - which for most browsers has a default value of 16px) to our elements\n        and increase the font-size to 1.25rem. We continue on to add the rest of\n        the styles, including our imported font-family."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - We applied the font-family property to the\n        "),n("strong",[e._v("input")]),e._v(", "),n("strong",[e._v("button")]),e._v(" and\n        "),n("strong",[e._v("p")]),e._v(" elements instead of just applying it on the body tag.\n        This is because form elements such as "),n("strong",[e._v("input")]),e._v(",\n        "),n("strong",[e._v("button")]),e._v(", "),n("strong",[e._v("textarea")]),e._v(" and\n        "),n("strong",[e._v("select")]),e._v(" don't inherit the font-family automatically.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Now we add a border radius of 0.25rem to the button element to make its\n        corners slightly round. The\n        "),t("strong",[this._v("cursor: pointer")]),this._v(" property changes the mouse cursor to a\n        pointer when it's over this element.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("outline: none")]),this._v(" removes the black outline which is shown\n        when the element is focused upon. Instead we will add a light-grey\n        bottom border to the element which will change to dark-blue on focus. We\n        achieve this using the "),t("strong",[this._v(":focus")]),this._v(" pseudo-class."),t("br"),this._v(" "),t("strong",[this._v("Note")]),this._v(" - border-bottom is a shorthand property for\n        setting border width, style and color.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        We go on to add some background color and text color to the buttons and\n        the timer element."),t("br"),t("br"),this._v("\n        It looks much better now but we haven't added any functionality yet. So\n        let's move on to the Javascript.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        First we fetch all of our necessory elements by using the\n        "),n("strong",[e._v("document.getElementById()")]),e._v(" function. We use the same ids\n        that we used in the HTML."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - We used "),n("strong",[e._v("const")]),e._v(" for declaring the\n        variables for the HTML elements because they will never be reassigned\n        whereas the "),n("strong",[e._v("interval")]),e._v(" variable(declared using\n        "),n("strong",[e._v("let")]),e._v(") will be reassigned later."),n("br"),n("br"),e._v("\n        Now that our elements are ready, we will implement the functionality of\n        the start button using the "),n("strong",[e._v("addEventListener")]),e._v(" function.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        What we did here was that created a temporary variable\n        "),n("strong",[e._v("remainingTime")]),e._v(" that will store the remaining time which\n        will be shown to the user. Then we use the\n        "),n("strong",[e._v("setInterval()")]),e._v(" function to create a routine that will be\n        run at the end of every 100 milliseconds."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - The "),n("strong",[e._v("setInterval()")]),e._v(" function\n        returns an Interval ID which we store in the\n        "),n("strong",[e._v("interval")]),e._v(" variable. This will be used later to stop the\n        routine."),n("br"),n("br"),e._v("\n        In our routine we subtract 0.1(100 milliseconds) from\n        "),n("strong",[e._v("remainingTime")]),e._v(" and update the timer. Then we check if\n        remainingTime is 0 and pass our "),n("strong",[e._v("interval")]),e._v(" variable to\n        the "),n("strong",[e._v("clearInterval()")]),e._v(" function to stop the routine."),n("br"),e._v("\n        Now let's try to run this. When you click the start button the timer\n        starts normally but soon you will see something like this.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-6"},[this._v("\n        This is because of floating-point arithmetic. Due to the their binary\n        nature, some decimal numbers cannot be represented with perfect accuracy\n        in Javascript. Therefore we will use the\n        "),t("strong",[this._v("toFixed()")]),this._v(" function to truncate the remaining time to 1\n        decimal place. Change\n        "),t("strong",[this._v("remainingTime = remainingTime - 0.1")]),this._v(" to this.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        Now if you run the timer again, it will run normally. But there's one\n        more problem."),t("br"),this._v("Try to click the start button again before the timer\n        runs out. You'll notice that you have started 2 timers simultaneously\n        and the remaining time keeps switching back and forth between the\n        two."),t("br"),this._v("\n        We can solve this problem simply by clearing the interval before we\n        start the timer. We'll also add additional checks to ensure that our\n        timer does not accept invalid durations. Now our function looks like\n        this.\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        And there you go. We have successfully created a countdown timer app\n        using Javascript. Now try building a stopwatch application on your own\n        with what you've learnt and keep learning."),t("br"),t("br"),this._v("\n        Complete Code\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(193).default,CodeSnippet:n(194).default})}}]);