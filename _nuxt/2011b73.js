(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{227:function(e,t,n){"use strict";n.r(t);n(104),n(29),n(30),n(105),n(69);var r=n(200),o={name:"find",head:{title:"Find | The Source Project"},data:function(){return{query:"",articles:[{id:6,category:"competitive",title:"LeetCode #1 Two Sum",date:"20 Feb '21",readTime:"10 min read",fragment:"Check out this problem on LeetCode. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target...",tags:["competitive","data","structures","algorithms","beginner"]},{id:5,category:"frontend",title:"Creating a countdown timer using Javascript",date:"9 Feb '21",readTime:"30 min read",fragment:"In this tutorial, we will learn how to create a simple countdown timer application using Javascript that can then be run in your web-browser...",tags:["frontend","html","css","javascript","beginner"]},{id:4,category:"basics",title:"Handling user input in Python",date:"8 Jan '21",readTime:"5 min read",fragment:"While developing Python applications we often need to allow user interaction, either to obtain necessary data or to direct the flow of our program. Python enables this functionality through its inbuilt input() function...",tags:["basics","python","beginner"]},{id:3,category:"basics",title:"Python fundamentals",date:"6 Jan '21",readTime:"15 min read",fragment:"Python is an interpreted, high-level and general-purpose programming language. Python is being used in web development, machine learning and even desktop applications...",tags:["basics","python","beginner"]},{id:2,category:"misc",title:"Publishing your first project to Github",date:"4 Jan '21",readTime:"10 min read",fragment:"GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere...",tags:["miscellaneous","git","github","beginner"]},{id:1,category:"misc",title:"Installing Visual Studio Code and Git in Windows",date:"23 Dec '20",readTime:"20 min read",fragment:"Visual Studio Code(also known as VS Code) is a powerful free open source text editor by Microsoft. VS Code is available for Windows, Linux, and macOS...",tags:["miscellaneous","vscode","git","windows","beginner"]}]}},methods:{kebabCase:function(title){return title.split(/\s+/).join("-")},getBackground:function(e){return{basics:"bg-basics",competitive:"bg-competitive",frontend:"bg-frontend",backend:"bg-backend",misc:"bg-misc"}[e]}},computed:{fuse:function(){return new r.a(this.articles,{keys:["title","tags"],shouldSort:!0})},queryArticles:function(){return this.query?this.fuse.search(this.query).map((function(e){return e.item})):this.articles}},mounted:function(){this.query=this.$route.query.q||""}},l=n(16),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("label",{staticClass:"mx-auto w-full max-w-md px-6 py-4 rounded-full flex items-center bg-background-4 text-text-3"},[e.query?n("button",{staticClass:"focus:outline-none",on:{click:function(t){e.query=""}}},[n("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"}},[n("path",{attrs:{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}})])]):n("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{fill:"currentColor",d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query,expression:"query",modifiers:{trim:!0}}],staticClass:"ml-3 w-full bg-transparent placeholder-current focus:outline-none",attrs:{type:"text",placeholder:"Type in something"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("section",{staticClass:"max-w-4xl mx-auto mt-8 grid gap-8 text-text-2"},e._l(e.queryArticles,(function(article){return n("article",{key:article.id,class:e.getBackground(article.category)+" p-5 rounded-3xl flex flex-col text-sm"},[n("NuxtLink",{staticClass:"hover:underline focus:underline focus:outline-none",attrs:{to:"/article/"+article.id+"#"+e.kebabCase(article.title)}},[n("h2",{staticClass:"text-3xl leading-snug"},[e._v(e._s(article.title))])]),e._v(" "),n("p",{staticClass:"mt-1"},[e._v(e._s(article.date)+" | "+e._s(article.readTime))]),e._v(" "),n("p",{staticClass:"mt-6 leading-loose"},[e._v(e._s(article.fragment))]),e._v(" "),n("p",{staticClass:"mt-6 flex flex-wrap"},e._l(article.tags,(function(t){return n("button",{key:t,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",on:{click:function(n){e.query=t}}},[e._v("\n          #"+e._s(t)+"\n        ")])})),0)],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);