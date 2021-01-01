(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,n){"use strict";n.r(e);var o={name:"ArticleHeader",props:["title","readTime","date","tags"]},r=n(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"my-8 flex flex-col"},[n("h1",{staticClass:"text-5xl font-bold leading-snug"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"mt-6 opacity-50"},[t._v(t._s(t.date)+" | "+t._s(t.readTime))]),t._v(" "),n("p",{staticClass:"mt-2 flex flex-wrap"},t._l(t.tags,(function(e){return n("NuxtLink",{key:e,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",attrs:{to:"/find/"+e}},[t._v("\n      #"+t._s(e)+"\n    ")])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(65).default})},200:function(t,e,n){"use strict";n.r(e);var o={name:"CodeSnippet",props:["code"]},r=n(16),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("code",{staticClass:"mx-8 whitespace-pre-wrap"},[this._v("\n  "+this._s(this.code)+"\n")])}),[],!1,null,null,null);e.default=component.exports},203:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-1.989a9ea.png"},204:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-2.7bc069a.png"},205:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-3.932df5b.png"},206:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-4.3f9d648.png"},207:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-5.e931116.jpg"},208:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-6.fb4a541.jpg"},209:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-7.2436757.png"},210:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-8.7ccb90c.png"},211:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-9.6b7ce4d.png"},212:function(t,e,n){t.exports=n.p+"img/Miscellaneous1-10.3f19a8d.png"},216:function(t,e,n){"use strict";n.r(e);var o=n(199),r=n(200),l={name:"Miscellaneous1",components:{ArticleHeader:o.default,CodeSnippet:r.default},head:{title:"Installing Visual Studio Code and Git in Windows | The Source Project",meta:[{hid:"description",name:"description",content:"Home page description"}]}},c=n(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[o("ArticleHeader",{attrs:{title:"Installing Visual Studio Code and Git in Windows",date:"23 Dec '20",readTime:"20 min read",tags:["miscellaneous","vscode","git","windows","basics","beginner"]}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(203),alt:"Download VS Code"}}),t._v(" "),t._m(3),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(204),alt:"Download Git"}}),t._v(" "),t._m(4),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(205),alt:"Choosing the default editor used by Git"}}),t._v(" "),t._m(5),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(206),alt:"Initialize Repository"}}),t._v(" "),t._m(6),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(207),alt:"Create New File"}}),t._v(" "),t._m(7),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(208),alt:"Emmet Abbreviation"}}),t._v(" "),t._m(8),t._v(" "),o("CodeSnippet",{attrs:{code:'\n<h1 style="margin-top: 2rem;color: #ff2f2f;font-family: sans-serif;text-align: center;">My First Project</h1>\n<h2 style="color: #002e46;font-family: monospace;text-align: center;">For More Tutorials Visit <a href="https://thesourceproject.github.io" target="_blank">TheSourceProject</a></h2>\n    '}}),t._v(" "),o("p",[t._v("Run this HTML file in your browser to see the result.")]),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(209),alt:"First Commit"}}),t._v(" "),t._m(9),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(210),alt:"First Commit"}}),t._v(" "),t._m(10),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(211),alt:"First Commit"}}),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(212),alt:"First Commit"}}),t._v(" "),t._m(13)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://code.visualstudio.com/",target:"_blank"}},[this._v("Visual Studio Code")]),this._v("\n        is a powerful free open source text editor by Microsoft. VS Code is\n        available for Windows, Linux, and macOS. Use it to code in any\n        programming language, without switching editors. Visual Studio Code has\n        support for many languages, including Python, Java, C++, JavaScript, and\n        more.\n        "),e("br"),e("br"),this._v(" "),e("a",{staticClass:"text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://git-scm.com/",target:"_blank"}},[this._v("Git")]),this._v("\n        is a free and open source distributed version control system designed to\n        handle everything from small to very large projects with speed and\n        efficiency. "),e("br"),e("br"),this._v("\n        VS Code has integrated source control and includes Git support\n        in-the-box. VS Code will leverage your machine's Git installation, so\n        you need to install Git first before you get these features.\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col max-w-4xl mt-12"},[e("h2",{staticClass:"text-2xl"},[this._v("Getting Started")]),this._v(" "),e("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        Download VS Code from the\n        "),e("a",{staticClass:"text-text-3 font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://code.visualstudio.com/",target:"_blank"}},[this._v("official website")]),this._v(".\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        After downloading it, follow the instructions in the setup to install VS\n        Code on your computer."),e("br"),this._v("\n        Then download Git from the\n        "),e("a",{staticClass:"text-text-3 font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://git-scm.com/",target:"_blank"}},[this._v("official website")]),this._v(". At the time of writing this article, the latest version available is\n        "),e("strong",[this._v("2.29.2")]),this._v(".\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        After downloading it, follow the instructions in the setup to install\n        Git on your computer."),e("br"),this._v("\n        Make sure you select\n        "),e("strong",[this._v("Use Visual Studio Code as Git's default editor")]),this._v(" when\n        prompted."),e("br"),this._v("\n        Continue the rest of the steps with the default options checked.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-8"},[t._v("\n        And there you go. You have now installed VS Code and Git on your\n        computer."),n("br"),t._v("\n        Now time to write your first piece of code."),n("br"),n("br"),t._v("\n        Create a new folder in your computer, right-click on it and select\n        "),n("strong",[t._v("Open with Code")]),t._v(" in the context menu."),n("br"),t._v(" "),n("strong",[t._v("Note -")]),t._v(" It is important to open a folder(not a file) in\n        VS Code otherwise the source control functions will not work."),n("br"),t._v("\n        This folder will now act as a workspace for your project."),n("br"),n("br"),t._v("\n        Now go to "),n("strong",[t._v("Source Control")]),t._v(" in the side bar and initialise\n        the local repository. Ignore the "),n("em",[t._v("Publish to Github")]),t._v(" button for\n        now, we will cover that in the next tutorial.\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        Now go to "),e("strong",[this._v("Explorer")]),this._v(" and create a new file named\n        "),e("strong",[this._v("myFirstProject.html")]),this._v("."),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        Now type "),e("strong",[this._v("!")]),this._v("(yes, just an exclaimation mark) in the\n        editor and VS Code will show you that its an Emmet abbreviation."),e("br"),this._v("\n        Press "),e("strong",[this._v("Enter")]),this._v(" and the file will be populated by some\n        boiler-plate code automatically.(Pretty cool, huh?)\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        Now paste this code in the "),e("strong",[this._v("<body>")]),this._v(" tag of your\n        document.\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        Not bad for a start. Now go back to "),e("strong",[this._v("Source Control")]),this._v(" and\n        type in "),e("strong",[this._v("first commit")]),this._v(" in the text box and press\n        "),e("strong",[this._v("Ctrl + Enter")]),this._v(" to make your first commit in the\n        repository."),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        A prompt will appear asking\n        "),e("em",[this._v("Would you like to stage all your changes and commit them\n          directly?")]),e("br"),this._v("\n        Click "),e("strong",[this._v("Always")]),this._v(". You can learn more about changes\n        "),e("a",{staticClass:"text-text-3 font-bold hover:underline focus:underline focus:outline-none",attrs:{href:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",target:"_blank"}},[this._v("here")]),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        Oops! We get an error message because we haven't yet configured our Git\n        user's name and email. Simply open the in-built\n        "),e("strong",[this._v("Windows Powershell")]),this._v(" in VS Code(Ctrl + `) and type in the\n        following two commands. "),e("br"),this._v("\n        Don't forget to replace the name and email for your own.\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-2 mx-8"},[e("code",[this._v('git config --global user.name "My Name"')]),e("br"),e("code",[this._v('git config --global user.email "myname@example.com"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-8"},[this._v("\n        Once you have configured the username and email try to make the commit\n        once more and it should work as normal."),e("br"),e("br"),this._v("\n        And there you go! You have created your first local Git repository and\n        made your first commit. You're now ready to start creating!\n      ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleHeader:n(199).default,CodeSnippet:n(200).default})}}]);