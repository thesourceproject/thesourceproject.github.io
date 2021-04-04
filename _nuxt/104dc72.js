(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{203:function(e,t,r){},231:function(e,t,r){"use strict";r(203)},243:function(e,t,r){"use strict";r.r(t);var n=r(110),l=r(111),o=r(112),v={name:"frontend7",components:{ArticleHeader:n.default,CodeSnippet:l.default,CSSHelper:o.default},head:{title:"Let's learn CSS Flexbox | The Source Project",meta:[{hid:"description",name:"description",content:"If you're just starting with HTML and CSS, you must have heard about Flexbox. This tutorial will teach you the basics of Flexbox so you can use it in your projects in no time."}]}},m=(r(231),r(8)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[r("ArticleHeader",{attrs:{title:"Let's learn CSS Flexbox",date:"2 Mar '21",readTime:"15 min read",tags:["frontend","html","css","intermediate"]}}),e._v(" "),r("p",[e._v("\n        If you're just starting with HTML and CSS, you must have heard about\n        Flexbox. This tutorial will teach you the basics of Flexbox so you can\n        use it in your projects in no time.\n      ")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",{staticClass:"mt-8"},[e._v("\n        To demonstrate the power of Flexbox we will create a parent container\n        and place a few items in it.\n      ")]),e._v(" "),r("CodeSnippet",{attrs:{code:'<div class="parent">\n  <div class="item1">1</div>\n  <div class="item2">2</div>\n  <div class="item3">3</div>\n  ...\n</div>',lang:"language-html"}}),e._v(" "),r("p",[e._v("\n        And we will style the child items so that we can distinguish them from\n        the parent and other items.\n      ")]),e._v(" "),r("CodeSnippet",{attrs:{code:".parent > div {\n  border: red dashed 2px;\n  border-radius: 2rem;\n  padding: 2rem;\n  font-size: 2rem;\n  text-align: center;\n}",lang:"language-css"}}),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("CSSHelper",{attrs:{elements:[{ref:"eg1-parent",name:"parent",properties:[{name:"display",values:["block","flex"]},{name:"flex-direction",values:["row","column","row-reverse","column-reverse"]}]}]}},[r("div",{ref:"eg1-parent",staticClass:"parent"},[r("div",[e._v("1")]),e._v(" "),r("div",[e._v("2")]),e._v(" "),r("div",[e._v("3")])])]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("CSSHelper",{attrs:{elements:[{ref:"eg2-parent",name:"parent",properties:[{name:"display",values:["block","flex"]},{name:"flex-direction",values:["row","column","row-reverse","column-reverse"]},{name:"flex-wrap",values:["nowrap","wrap","wrap-reverse"]}]}]}},[r("div",{ref:"eg2-parent",staticClass:"parent"},[r("div",[e._v("1")]),e._v(" "),r("div",[e._v("2")]),e._v(" "),r("div",[e._v("3")]),e._v(" "),r("div",[e._v("4")]),e._v(" "),r("div",[e._v("5")]),e._v(" "),r("div",[e._v("6")]),e._v(" "),r("div",[e._v("7")]),e._v(" "),r("div",[e._v("8")])])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("CSSHelper",{attrs:{elements:[{ref:"eg3-parent",name:"parent",properties:[{name:"display",values:["block","flex"]},{name:"flex-direction",values:["row","column","row-reverse","column-reverse"]},{name:"justify-content",values:["flex-start","flex-end","center","space-between","space-around","space-evenly"]}]}]}},[r("div",{ref:"eg3-parent",staticClass:"parent"},[r("div",[e._v("1")]),e._v(" "),r("div",[e._v("2")]),e._v(" "),r("div",[e._v("3")])])]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),r("CSSHelper",{attrs:{elements:[{ref:"eg4-parent",name:"parent",properties:[{name:"display",values:["block","flex"]},{name:"flex-direction",values:["row","column","row-reverse","column-reverse"]},{name:"align-items",values:["stretch","flex-start","flex-end","center","baseline"]}]},{ref:"eg4-item1",name:"item1",properties:[{name:"font-size",values:["2rem","3rem","4rem"]}]},{ref:"eg4-item2",name:"item2",properties:[{name:"font-size",values:["2rem","3rem","4rem"]}]},{ref:"eg4-item3",name:"item3",properties:[{name:"font-size",values:["2rem","3rem","4rem"]}]}]}},[r("div",{ref:"eg4-parent",staticClass:"parent"},[r("div",{ref:"eg4-item1"},[e._v("1")]),e._v(" "),r("div",{ref:"eg4-item2"},[e._v("2")]),e._v(" "),r("div",{ref:"eg4-item3"},[e._v("3")])])]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),r("CSSHelper",{attrs:{elements:[{ref:"eg5-parent",name:"parent",properties:[{name:"display",values:["block","flex"]},{name:"flex-direction",values:["row","column","row-reverse","column-reverse"]},{name:"flex-wrap",values:["nowrap","wrap","wrap-reverse"]},{name:"align-content",values:["stretch","flex-start","flex-end","center","space-between","space-around","space-evenly"]}]}]}},[r("div",{ref:"eg5-parent",staticClass:"parent"},[r("div",[e._v("1")]),e._v(" "),r("div",[e._v("2")]),e._v(" "),r("div",[e._v("3")]),e._v(" "),r("div",[e._v("4")]),e._v(" "),r("div",[e._v("5")]),e._v(" "),r("div",[e._v("6")]),e._v(" "),r("div",[e._v("7")]),e._v(" "),r("div",[e._v("8")])])]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),r("CSSHelper",{attrs:{elements:[{ref:"eg6-parent",name:"parent",properties:[{name:"display",values:["block","flex"]},{name:"flex-direction",values:["row","column","row-reverse","column-reverse"]}]},{ref:"eg6-item1",name:"item1",properties:[{name:"flex-grow",values:["0","1","2","3"]}]},{ref:"eg6-item2",name:"item2",properties:[{name:"flex-grow",values:["0","1","2","3"]}]},{ref:"eg6-item3",name:"item3",properties:[{name:"flex-grow",values:["0","1","2","3"]}]}]}},[r("div",{ref:"eg6-parent",staticClass:"parent"},[r("div",{ref:"eg6-item1"},[e._v("1")]),e._v(" "),r("div",{ref:"eg6-item2"},[e._v("2")]),e._v(" "),r("div",{ref:"eg6-item3"},[e._v("3")])])]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),r("CSSHelper",{attrs:{elements:[{ref:"eg7-parent",name:"parent",properties:[{name:"display",values:["block","flex"]},{name:"flex-direction",values:["row","column","row-reverse","column-reverse"]}]},{ref:"eg7-item1",name:"item1",properties:[{name:"font-size",values:["2rem","3rem","4rem"]},{name:"align-self",values:["stretch","flex-start","flex-end","center","baseline"]}]},{ref:"eg7-item2",name:"item2",properties:[{name:"font-size",values:["2rem","3rem","4rem"]},{name:"align-self",values:["stretch","flex-start","flex-end","center","baseline"]}]},{ref:"eg7-item3",name:"item3",properties:[{name:"font-size",values:["2rem","3rem","4rem"]},{name:"align-self",values:["stretch","flex-start","flex-end","center","baseline"]}]}]}},[r("div",{ref:"eg7-parent",staticClass:"parent"},[r("div",{ref:"eg7-item1"},[e._v("1")]),e._v(" "),r("div",{ref:"eg7-item2"},[e._v("2")]),e._v(" "),r("div",{ref:"eg7-item3"},[e._v("3")])])]),e._v(" "),e._m(17)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"mx-auto mt-6 p-6 bg-white rounded-2xl",attrs:{rel:"noopener noreferrer",title:"Rudloff, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons",href:"https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg",target:"_blank"}},[t("img",{staticClass:"w-64",attrs:{alt:"CSS3 logo and wordmark",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"mt-6"},[e._v("\n        But what is Flexbox and why should we use it?"),r("br"),r("br"),e._v("\n        Before Flexbox, positioning of items inside its parent container was\n        very cumbersome and in some cases impossible. It required the use of\n        "),r("strong",[e._v("float")]),e._v(" and "),r("strong",[e._v("position")]),e._v(" properties and the\n        advent of mobile devices with different screen sizes didn't make it any\n        easier."),r("br"),r("br"),e._v("\n        Flexbox solves these problems by providing an easy method to arrange\n        items in one dimension inside a container.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-12 flex flex-col"},[r("h2",{staticClass:"text-2xl"},[e._v("Getting Started")]),e._v(" "),r("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        Now we will learn about different properties commonly used to work with\n        Flexbox using our interactive examples."),r("br"),e._v("\n        Just click on any of the values for the respective CSS property to see\n        its output.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6 flex flex-col"},[r("h3",{staticClass:"text-xl"},[e._v("flex-direction")]),e._v(" "),r("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        To use Flexbox we need to use the "),r("em",[e._v("flex")]),e._v(" "),r("strong",[e._v("display")]),e._v(" property."),r("br"),e._v("\n        Flex items are initially arranged in the row direction(left to right).\n        This can be changed using the "),r("strong",[e._v("flex-direction")]),e._v(" property.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6 flex flex-col"},[r("h3",{staticClass:"text-xl"},[e._v("flex-wrap")]),e._v(" "),r("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        The "),r("strong",[e._v("flex-wrap")]),e._v(" property will allow us to control whether\n        the items are fitted in a single line(and possibly overflowing) or wrap\n        across multiple lines as needed."),r("br"),e._v(" "),r("em",[e._v("wrap-reverse")]),e._v(" will wrap the items from bottom to top.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6 flex flex-col"},[r("h3",{staticClass:"text-xl"},[e._v("justify-content")]),e._v(" "),r("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        The "),r("strong",[e._v("justify-content")]),e._v(" property controls the position of\n        the child elements in the main axis(direction of flex items)."),r("br"),e._v("\n        This property is useful for distributing the remaining space left around\n        child items.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6 flex flex-col"},[r("h3",{staticClass:"text-xl"},[e._v("align-items")]),e._v(" "),r("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        The "),r("strong",[e._v("align-items")]),e._v(" property controls the positioning of\n        flex items on the cross axis(column direction if the flex items are\n        arranged row-wise and vice-versa)."),r("br"),e._v(" "),r("em",[e._v("baseline")]),e._v(" arranges the items so that their baselines are\n        aligned.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6 flex flex-col"},[r("h3",{staticClass:"text-xl"},[e._v("align-content")]),e._v(" "),r("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        The "),r("strong",[e._v("align-content")]),e._v(" property is similar to the\n        "),r("strong",[e._v("justify-content")]),e._v(" property but this works along the cross\n        axis."),r("br"),e._v("\n        This property only works when the flex items are wrapped onto multiple\n        lines. This means that the\n        "),r("strong",[e._v("flex-wrap")]),e._v(" property must be set to either\n        "),r("em",[e._v("wrap")]),e._v(" or "),r("em",[e._v("wrap-reverse")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6 flex flex-col"},[r("h3",{staticClass:"text-xl"},[e._v("flex-grow")]),e._v(" "),r("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        The "),r("strong",[e._v("flex-grow")]),e._v(" property indicates how much the flex item\n        grows compared to the other flex items along the main axis."),r("br"),e._v("\n        Its initial value is 0 meaning that the flex item will not grow to take\n        over the remaining space.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-6 flex flex-col"},[r("h3",{staticClass:"text-xl"},[e._v("align-self")]),e._v(" "),r("div",{staticClass:"w-4 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n        The "),r("strong",[e._v("align-self")]),e._v(" property is similar to the\n        "),r("strong",[e._v("align-items")]),e._v(" property but for individual items."),r("br"),e._v("\n        Use this property on child items to override the parent container's\n        "),r("strong",[e._v("align-items")]),e._v(" property."),r("br"),r("br"),e._v("\n        We've covered the most commonly used Flexbox features but there are\n        more(e.g. "),r("em",[e._v("flex-flow")]),e._v(", "),r("em",[e._v("flex-shrink")]),e._v(", "),r("em",[e._v("flex-basis")]),e._v(",\n        etc) that are not used as often. You can learn more about them\n        "),r("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{rel:"noopener noreferrer",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",target:"_blank"}},[e._v("here")]),e._v("."),r("br"),r("br"),e._v("\n        Now that you have understood the basics of Flexbox, why not use this\n        powerful CSS feature in your work?\n      ")])}],!1,null,"71141b84",null);t.default=component.exports;installComponents(component,{ArticleHeader:r(110).default,CodeSnippet:r(111).default,CSSHelper:r(112).default})}}]);