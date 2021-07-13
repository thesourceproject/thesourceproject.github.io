(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{249:function(e,t,n){"use strict";n.r(t);n(38),n(113),n(51),n(82),n(114),n(159);var r=n(208),o={name:"find",head:{title:"Find | The Source Project"},data:function(){return{fuse:null,query:"",articles:[{id:16,category:"backend",title:"Basics of MySQL",date:"4 Jul '21",readTime:"25 min read",fragment:"We will learn the basics behind MySQL. After learning these, you will be able to create dynamic web applications...",tags:["backend","database","sql","mysql","beginner"]},{id:15,category:"competitive",title:"LeetCode #6 ZigZag Conversion",date:"17 Jun '21",readTime:"10 min read",fragment:'Check out this problem on LeetCode. The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this...',tags:["competitive","data","structures","algorithms","java","python","intermediate"]},{id:14,category:"backend",title:"Installing MySQL on Windows",date:"11 Jun '21",readTime:"5 min read",fragment:"If you are just starting with backend development or want to dabble in SQL, you will need to understand databases. In this tutorial, we will learn how to install the world's most popular database on Windows...",tags:["backend","database","sql","mysql","windows","beginner"]},{id:13,category:"competitive",title:"LeetCode #560 Subarray Sum Equals K",date:"19 Apr '21",readTime:"10 min read",fragment:"Check out this problem on LeetCode. Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k...",tags:["competitive","data","structures","algorithms","java","python","intermediate"]},{id:12,category:"basics",title:"How to use lambda functions for custom sorting",date:"4 Apr '21",readTime:"10 min read",fragment:"Java and Python provide an inbuilt sorting functionality that sorts items in a non-decreasing manner. But, what if we want to use a custom sorting logic?..",tags:["basics","data","structures","algorithms","java","python","beginner"]},{id:11,category:"competitive",title:"LeetCode #3 Longest Substring Without Repeating Characters",date:"30 Mar '21",readTime:"15 min read",fragment:"Check out this problem on LeetCode. Given a string s, find the length of the longest substring without repeating characters...",tags:["competitive","data","structures","algorithms","java","python","intermediate"]},{id:10,category:"basics",title:"Handling user input in Java",date:"21 Mar '21",readTime:"15 min read",fragment:"In Java, there are two main classes for dealing with user input, namely Scanner and BufferedReader. But which one is better? In this tutorial, we will learn how to use both...",tags:["basics","java","beginner"]},{id:9,category:"basics",title:"Using inbuilt data structures of Python",date:"10 Mar '21",readTime:"10 min read",fragment:"Python is slower than C++ and Java, yet it is being adopted more and more for its simplicity. In this tutorial we will understand the important data structures available in Python...",tags:["basics","data","structures","algorithms","python","beginner"]},{id:8,category:"basics",title:"Using inbuilt data structures of Java",date:"7 Mar '21",readTime:"10 min read",fragment:"Today we will learn about data structures that are available in Java. These are a must-know if you want to get into competitive programming...",tags:["basics","data","structures","algorithms","java","beginner"]},{id:7,category:"frontend",title:"Let's learn CSS Flexbox",date:"2 Mar '21",readTime:"15 min read",fragment:"If you're just starting out with HTML and CSS, you must have heard about Flexbox. This tutorial will teach you the basics of Flexbox so you can use it in your own projects in no time...",tags:["frontend","html","css","intermediate"]},{id:6,category:"competitive",title:"LeetCode #1 Two Sum",date:"20 Feb '21",readTime:"10 min read",fragment:"Check out this problem on LeetCode. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target...",tags:["competitive","data","structures","algorithms","java","python","beginner"]},{id:5,category:"frontend",title:"Creating a countdown timer using Javascript",date:"9 Feb '21",readTime:"20 min read",fragment:"In this tutorial, we will learn how to create a simple countdown timer application using Javascript that can then be run in your web-browser...",tags:["frontend","html","css","javascript","beginner"]},{id:4,category:"basics",title:"Handling user input in Python",date:"8 Jan '21",readTime:"5 min read",fragment:"While developing Python applications we often need to allow user interaction, either to obtain necessary data or to direct the flow of our program. Python enables this functionality through its inbuilt input() function...",tags:["basics","python","beginner"]},{id:3,category:"basics",title:"Python fundamentals",date:"6 Jan '21",readTime:"15 min read",fragment:"Python is an interpreted, high-level and general-purpose programming language. Python is being used in web development, machine learning and even desktop applications...",tags:["basics","python","beginner"]},{id:2,category:"miscellaneous",title:"Publishing your first project to Github",date:"4 Jan '21",readTime:"10 min read",fragment:"In our previous tutorial, we learned how to create a local Git repository and make commits to it. Now it's time to show off your first project to the world...",tags:["miscellaneous","git","github","beginner"]},{id:1,category:"miscellaneous",title:"Installing Visual Studio Code and Git in Windows",date:"23 Dec '20",readTime:"20 min read",fragment:"Visual Studio Code(also known as VS Code) is a powerful free open source text editor by Microsoft. VS Code is available for Windows, Linux, and macOS...",tags:["miscellaneous","vscode","git","windows","beginner"]}]}},computed:{queryArticles:function(){return this.query?this.fuse.search(this.query).map((function(e){return e.item})):this.articles}},methods:{getBackground:function(e){return{basics:"bg-basics",competitive:"bg-competitive",frontend:"bg-frontend",backend:"bg-backend",miscellaneous:"bg-miscellaneous"}[e]},kebabCase:function(title){return title.split(/\s+/).join("-").replace(/[^0-9a-zA-Z-]/,"")}},mounted:function(){this.fuse=new r.a(this.articles,{keys:["title","tags"],shouldSort:!0}),this.query=this.$route.query.q||""}},l=n(8),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("label",{staticClass:"\n      mx-auto\n      w-full\n      max-w-md\n      px-6\n      py-4\n      rounded-full\n      flex\n      items-center\n      bg-background-4\n      text-text-3\n    "},[e.query?n("button",{staticClass:"focus:outline-none",on:{click:function(t){e.query=""}}},[n("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"}},[n("path",{attrs:{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}})])]):n("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{fill:"currentColor",d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query,expression:"query",modifiers:{trim:!0}}],staticClass:"\n        ml-3\n        w-full\n        bg-transparent\n        placeholder-current\n        focus:outline-none\n      ",attrs:{type:"text",placeholder:"Type in something"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("section",{staticClass:"max-w-4xl mx-auto mt-8 grid gap-8 text-text-2"},e._l(e.queryArticles,(function(article){return n("article",{key:article.id,class:e.getBackground(article.category)+" p-5 rounded-3xl flex flex-col text-sm"},[n("NuxtLink",{staticClass:"hover:underline focus:underline focus:outline-none",attrs:{to:"/article/"+article.id+"-"+e.kebabCase(article.title)}},[n("h2",{staticClass:"text-3xl leading-snug"},[e._v(e._s(article.title))])]),e._v(" "),n("p",{staticClass:"mt-1"},[e._v(e._s(article.date)+" | "+e._s(article.readTime))]),e._v(" "),n("p",{staticClass:"mt-6 leading-loose"},[e._v(e._s(article.fragment))]),e._v(" "),n("p",{staticClass:"mt-6 flex flex-wrap"},e._l(article.tags,(function(t){return n("button",{key:t,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",on:{click:function(n){e.query=t}}},[e._v("\n          #"+e._s(t)+"\n        ")])})),0)],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);