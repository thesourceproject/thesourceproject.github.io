(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{214:function(t,e,n){"use strict";n.r(e);n(105),n(29),n(30),n(106),n(68);var r=n(201),o={name:"find",head:{title:"Find | The Source Project"},data:function(){return{query:"",articles:[{id:1,category:"misc",title:"Installing Visual Studio Code and Git in Windows",readTime:"20 min read",date:"23 Dec '20",fragment:"Visual Studio Code(also known as VS Code) is a powerful free open source text editor by Microsoft. VS Code is available for Windows, Linux, and macOS...",tags:["miscellaneous","vscode","git","windows","basics","beginner"]}]}},methods:{kebabCase:function(title){return title.split(/\s+/).join("-")},getBackground:function(t){return{cpp:"bg-cpp",java:"bg-java",javascript:"bg-javascript",python:"bg-python",misc:"bg-misc"}[t]}},computed:{fuse:function(){return new r.a(this.articles,{keys:["title","tags"],shouldSort:!0})},queryArticles:function(){return this.query?this.fuse.search(this.query).map((function(t){return t.item})):this.articles}},mounted:function(){this.query=this.$route.query.q||""}},l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("label",{staticClass:"mx-auto w-full max-w-md px-6 py-4 rounded-full flex items-center bg-background-4 text-text-3"},[t.query?n("button",{staticClass:"focus:outline-none",on:{click:function(e){t.query=""}}},[n("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"}},[n("path",{attrs:{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}})])]):n("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{fill:"currentColor",d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"ml-3 w-full bg-transparent placeholder-current focus:outline-none",attrs:{type:"text",placeholder:"Type in something"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),n("section",{staticClass:"max-w-4xl mx-auto mt-8 grid gap-8 text-text-2"},t._l(t.queryArticles,(function(article){return n("article",{key:article.id,class:t.getBackground(article.category)+" p-5 rounded-3xl flex flex-col text-sm"},[n("NuxtLink",{staticClass:"hover:underline focus:underline focus:outline-none",attrs:{to:"/article/"+article.id+"#"+t.kebabCase(article.title)}},[n("h2",{staticClass:"text-3xl leading-snug"},[t._v(t._s(article.title))])]),t._v(" "),n("p",{staticClass:"mt-1"},[t._v(t._s(article.date)+" | "+t._s(article.readTime))]),t._v(" "),n("p",{staticClass:"mt-6 leading-loose"},[t._v(t._s(article.fragment))]),t._v(" "),n("p",{staticClass:"mt-6 flex flex-wrap"},t._l(article.tags,(function(e){return n("button",{key:e,staticClass:"mr-4 hover:underline focus:underline focus:outline-none",on:{click:function(n){t.query=e}}},[t._v("\n          #"+t._s(e)+"\n        ")])})),0)],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);