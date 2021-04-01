(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{229:function(e,t,n){e.exports=n.p+"img/frontend5-1.1f29032.png"},230:function(e,t,n){e.exports=n.p+"img/frontend5-2.3808aea.png"},241:function(e,t,n){"use strict";n.r(t);var r=n(110),o=n(111),l={name:"frontend5",components:{ArticleHeader:r.default,CodeSnippet:o.default},head:{title:"Creating a countdown timer using Javascript | The Source Project",meta:[{hid:"description",name:"description",content:"In this tutorial, we will learn how to create a simple countdown timer application using Javascript that can then be run in your web-browser."}]}},c=n(8),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[r("ArticleHeader",{attrs:{title:"Creating a countdown timer using Javascript",date:"9 Feb '21",readTime:"20 min read",tags:["frontend","html","css","javascript","beginner"]}}),e._v(" "),r("p",[e._v("\n        In this tutorial, we will learn how to create a simple countdown timer\n        application using Javascript that can then be run in your web browser.\n      ")]),e._v(" "),r("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(229),alt:"Countdown Timer"}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),r("CodeSnippet",{attrs:{code:'<div id="countdownTimer">\n  <input id="duration" type="number" placeholder="Timer Duration" />\n  <fieldset id="controls">\n    <button id="startButton" title="Start">Start</button>\n    <button id="stopButton" title="Stop">Stop</button>\n    <button id="resetButton" title="Reset">Reset</button>\n  </fieldset>\n  <p id="timer">0.0</p>\n</div>',lang:"language-html"}}),e._v(" "),e._m(2),e._v(" "),r("CodeSnippet",{attrs:{code:'@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");',lang:"language-css"}}),e._v(" "),e._m(3),e._v(" "),r("CodeSnippet",{attrs:{code:"body {\n  margin: 0;\n  display: flex;\n  min-height: 100vh;\n}",lang:"language-css"}}),e._v(" "),e._m(4),e._v(" "),r("CodeSnippet",{attrs:{code:"#countdownTimer {\n  margin: auto;\n}",lang:"language-css"}}),e._v(" "),e._m(5),e._v(" "),r("CodeSnippet",{attrs:{code:'input,\nbutton,\np {\n  font-family: "Open Sans", sans-serif;\n  padding: 0.5rem;\n  font-size: 1.25rem;\n  border: none;\n  text-align: center;\n}',lang:"language-css"}}),e._v(" "),e._m(6),e._v(" "),r("CodeSnippet",{attrs:{code:"button {\n  border-radius: 0.25rem;\n  cursor: pointer;\n}",lang:"language-css"}}),e._v(" "),e._m(7),e._v(" "),r("CodeSnippet",{attrs:{code:"#duration {\n  outline: none;\n  border-bottom: 2px solid lightgrey;\n}\n\n#duration:focus {\n  border-color: darkblue;\n}",lang:"language-css"}}),e._v(" "),e._m(8),e._v(" "),r("CodeSnippet",{attrs:{code:"#controls {\n  margin-top: 0.5rem;\n  padding: 0;\n  border: none;\n  display: flex;\n  justify-content: center;\n}",lang:"language-css"}}),e._v(" "),r("p",[e._v("\n        We use the "),r("strong",[e._v("display: flex")]),e._v(" and\n        "),r("strong",[e._v("justify-content: center")]),e._v(" properties to center the\n        buttons."),r("br"),e._v(" "),r("strong",[e._v("Note")]),e._v(" - You can learn more about the flex display\n        property in\n        "),r("NuxtLink",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{to:"/article/7-Lets-learn-CSS-Flexbox"}},[e._v("this tutorial")]),e._v(".\n      ")],1),e._v(" "),r("CodeSnippet",{attrs:{code:"#startButton {\n  background-color: lightgreen;\n}\n\n#stopButton {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background-color: orangered;\n  color: white;\n}\n\n#resetButton {\n  background-color: yellow;\n}\n\n#timer {\n  margin: 0;\n  font-size: 10rem;\n}",lang:"language-css"}}),e._v(" "),e._m(9),e._v(" "),r("CodeSnippet",{attrs:{code:'const duration = document.getElementById("duration");\nconst startButton = document.getElementById("startButton");\nconst stopButton = document.getElementById("stopButton");\nconst resetButton = document.getElementById("resetButton");\nconst timer = document.getElementById("timer");\n\nlet interval;',lang:"language-js"}}),e._v(" "),e._m(10),e._v(" "),r("CodeSnippet",{attrs:{code:'startButton.addEventListener("click", () => {\n  let remainingTime = Number(duration.value);\n  timer.innerText = remainingTime;\n  interval = setInterval(() => {\n    remainingTime = remainingTime - 0.1;\n    timer.innerText = remainingTime;\n    if (remainingTime == 0) {\n      clearInterval(interval);\n    }\n  }, 100);\n});',lang:"language-js"}}),e._v(" "),e._m(11),e._v(" "),r("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(230),alt:"Floating-Point Arithmetic Precision Problem"}}),e._v(" "),e._m(12),e._v(" "),r("CodeSnippet",{attrs:{code:"remainingTime = (remainingTime - 0.1).toFixed(1);",lang:"language-js"}}),e._v(" "),e._m(13),e._v(" "),r("CodeSnippet",{attrs:{code:'startButton.addEventListener("click", () => {\n  clearInterval(interval);\n  let remainingTime = Number(duration.value);\n  if (Number.isInteger(remainingTime) && remainingTime > 0) {\n    timer.innerText = remainingTime;\n    interval = setInterval(() => {\n      remainingTime = (remainingTime - 0.1).toFixed(1);\n      timer.innerText = remainingTime;\n      if (remainingTime == 0) {\n        clearInterval(interval);\n      }\n    }, 100);\n  } else {\n    alert("Please enter a valid duration!");\n  }\n});',lang:"language-js"}}),e._v(" "),r("p",[e._v("\n        Now what's left is the easy stuff. We need to add the functionalities\n        for the stop and reset buttons.\n      ")]),e._v(" "),r("CodeSnippet",{attrs:{code:'stopButton.addEventListener("click", () => {\n  clearInterval(interval);\n});\n\nresetButton.addEventListener("click", () => {\n  clearInterval(interval);\n  timer.innerText = "0.0";\n});',lang:"language-js"}}),e._v(" "),r("p",[e._v("\n        And there you go. We have successfully created a countdown timer app\n        using Javascript. Now try building a stopwatch application on your own\n        with what you've learned and keep learning.\n      ")]),e._v(" "),r("h3",{staticClass:"mt-6 text-xl"},[e._v("Complete Code")]),e._v(" "),r("CodeSnippet",{attrs:{code:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>My Countdown Timer</title>\n    <style>\n      @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");\n\n      body {\n        margin: 0;\n        display: flex;\n        min-height: 100vh;\n      }\n\n      #countdownTimer {\n        margin: auto;\n      }\n\n      input,\n      button,\n      p {\n        font-family: "Open Sans", sans-serif;\n        padding: 0.5rem;\n        font-size: 1.25rem;\n        border: none;\n        text-align: center;\n      }\n\n      button {\n        cursor: pointer;\n      }\n\n      #duration {\n        border-bottom: 2px solid lightgrey;\n        outline: none;\n      }\n\n      #duration:focus {\n        border-color: darkblue;\n      }\n\n      #controls {\n        margin-top: 0.5rem;\n        padding: 0;\n        border: none;\n        display: flex;\n        justify-content: center;\n      }\n\n      #startButton {\n        background-color: lightgreen;\n        border-radius: 0.25rem;\n      }\n\n      #stopButton {\n        margin-left: 0.5rem;\n        margin-right: 0.5rem;\n        background-color: orangered;\n        color: white;\n        border-radius: 0.25rem;\n      }\n\n      #resetButton {\n        background-color: yellow;\n        border-radius: 0.25rem;\n      }\n\n      #timer {\n        margin: 0;\n        font-size: 10rem;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="countdownTimer">\n      <input id="duration" type="number" placeholder="Timer Duration" />\n      <fieldset id="controls">\n        <button id="startButton" title="Start">Start</button>\n        <button id="stopButton" title="Stop">Stop</button>\n        <button id="resetButton" title="Reset">Reset</button>\n      </fieldset>\n      <p id="timer">0.0</p>\n    </div>\n    <script>\n      const duration = document.getElementById("duration");\n      const startButton = document.getElementById("startButton");\n      const stopButton = document.getElementById("stopButton");\n      const resetButton = document.getElementById("resetButton");\n      const timer = document.getElementById("timer");\n\n      let interval;\n\n      startButton.addEventListener("click", () => {\n        clearInterval(interval);\n        let remainingTime = Number(duration.value);\n        if (Number.isInteger(remainingTime) && remainingTime > 0) {\n          timer.innerText = remainingTime;\n          interval = setInterval(() => {\n            remainingTime = (remainingTime - 0.1).toFixed(1);\n            timer.innerText = remainingTime;\n            if (remainingTime == 0) {\n              clearInterval(interval);\n            }\n          }, 100);\n        } else {\n          alert("Please enter a valid duration!");\n        }\n      });\n\n      stopButton.addEventListener("click", () => {\n        clearInterval(interval);\n      });\n\n      resetButton.addEventListener("click", () => {\n        clearInterval(interval);\n        timer.innerText = "0.0";\n      });\n    <\/script>\n  </body>\n</html>',lang:"language-html"}})],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-12 flex flex-col"},[n("h2",{staticClass:"text-2xl"},[e._v("Getting Started")]),e._v(" "),n("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-8"},[e._v("\n        First, we need to write the HTML for our countdown timer."),n("br"),e._v("\n        Create an empty file on your computer named\n        "),n("strong",[e._v("myCountdownTimer.html")]),e._v(" and paste in the following markup\n        in the "),n("strong",[e._v("body")]),e._v(" tag.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We are giving each of our elements a unique\n        "),n("strong",[e._v("id")]),e._v(" attribute. This will help us with the styling and\n        also allow us to access the element with Javascript."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - The "),n("strong",[e._v("class")]),e._v(" attribute should be\n        used for styling elements but since all of our elements are unique, we\n        may use "),n("strong",[e._v("id")]),e._v(". Also, the "),n("strong",[e._v("id")]),e._v(" will be\n        required for our Javascript."),n("br"),n("br"),e._v("\n        If you open this HTML file right now, you'll notice that it doesn't look\n        anything like the image above. This is because we haven't added any CSS\n        yet. Time to add some styling."),n("br"),e._v("\n        Paste the following CSS inside a "),n("strong",[e._v("style")]),e._v(" tag in the\n        "),n("strong",[e._v("head")]),e._v(" section of your HTML file.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        First, we import "),n("strong",[e._v("Open Sans")]),e._v(" font-family from\n        "),n("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{href:"https://fonts.google.com/",target:"_blank"}},[e._v("Google Fonts")]),e._v(". Google Fonts has a large catalog of free fonts that you may use in\n        any of your projects.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Then we add some styling to the "),n("strong",[e._v("body")]),e._v(" tag. We set its\n        "),n("strong",[e._v("min-height")]),e._v(" property to "),n("strong",[e._v("100vh")]),e._v("(vh means\n        hundredths of the viewport height). This makes the\n        "),n("strong",[e._v("body")]),e._v(" at least as tall as the height of the current\n        viewport. This, along with the "),n("strong",[e._v("display: flex")]),e._v(" property,\n        will help us to center the countdown timer on the screen.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We use "),n("strong",[e._v("margin: auto")]),e._v(" property on the countDownTimer\n        element to equally apply margin on all 4 sides, this will center the\n        element horizontally as well as vertically."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - We referred to the body tag with\n        "),n("strong",[e._v("body")]),e._v(" but the countDownTimer element with\n        "),n("strong",[e._v("#countDownTimer")]),e._v("(with a "),n("strong",[e._v("#")]),e._v("). The\n        "),n("strong",[e._v("#")]),e._v(" symbol is a CSS selector used to apply styles on a\n        specific "),n("strong",[e._v("id")]),e._v(". If we want to style any HTML elements, we\n        can do it so using their names(such as "),n("strong",[e._v("h1")]),e._v(",\n        "),n("strong",[e._v("input")]),e._v("), without any CSS selectors.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We add padding of 0.5rem(1rem equals the font size of the\n        "),n("em",[e._v("html")]),e._v(" element - which for most browsers has a default value of\n        16px) to our elements and increase the font-size to 1.25rem. We continue\n        to add the rest of the styles, including our imported font-family."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - We applied the font-family property to the\n        "),n("strong",[e._v("input")]),e._v(", "),n("strong",[e._v("button")]),e._v(", and\n        "),n("strong",[e._v("p")]),e._v(" elements instead of just applying it on the body tag.\n        This is because form elements such as "),n("strong",[e._v("input")]),e._v(",\n        "),n("strong",[e._v("button")]),e._v(", "),n("strong",[e._v("textarea")]),e._v(", and\n        "),n("strong",[e._v("select")]),e._v(" don't inherit the font-family automatically.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Now we add a border-radius of 0.25rem to the button element to make its\n        corners slightly round. The\n        "),n("strong",[e._v("cursor: pointer")]),e._v(" property changes the mouse cursor to a\n        pointer when it's over this element.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("outline: none")]),e._v(" removes the black outline which is shown\n        when the element is focused upon. Instead, we will add a light-grey\n        bottom border to the element which will change to dark-blue on focus. We\n        achieve this using the "),n("strong",[e._v(":focus")]),e._v(" pseudo-class."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - border-bottom is a shorthand property for\n        setting border width, style, and color.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We go on to add some background color and text color to the buttons and\n        the timer element."),n("br"),n("br"),e._v("\n        It looks much better now but we haven't added any functionality yet. So\n        let's move on to Javascript.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        First, we fetch all of our necessary elements by using the\n        "),n("strong",[e._v("document.getElementById()")]),e._v(" function. We use the same ids\n        that we used in the HTML."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - We used "),n("strong",[e._v("const")]),e._v(" for declaring the\n        variables for the HTML elements because they will never be reassigned\n        whereas the "),n("strong",[e._v("interval")]),e._v(" variable(declared using\n        "),n("strong",[e._v("let")]),e._v(") will be reassigned later."),n("br"),n("br"),e._v("\n        Now that our elements are ready, we will implement the functionality of\n        the start button using the "),n("strong",[e._v("addEventListener")]),e._v(" function.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        What we did here was that created a temporary variable\n        "),n("strong",[e._v("remainingTime")]),e._v(" that will store the remaining time which\n        will be shown to the user. Then we use the\n        "),n("strong",[e._v("setInterval()")]),e._v(" function to create a routine that will be\n        run at the end of every 100 milliseconds."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - The "),n("strong",[e._v("setInterval()")]),e._v(" function\n        returns an Interval ID which we store in the\n        "),n("strong",[e._v("interval")]),e._v(" variable. This will be used later to stop the\n        routine."),n("br"),n("br"),e._v("\n        In our routine, we subtract 0.1(100 milliseconds) from\n        "),n("strong",[e._v("remainingTime")]),e._v(" and update the timer. Then we check if\n        remainingTime is 0 and pass our "),n("strong",[e._v("interval")]),e._v(" variable to\n        the "),n("strong",[e._v("clearInterval()")]),e._v(" function to stop the routine."),n("br"),e._v("\n        Now let's try to run this. When you click the start button the timer\n        starts normally but soon you will see something like this.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        This is because of floating-point arithmetic. Due to their binary\n        nature, some decimal numbers cannot be represented with perfect accuracy\n        in Javascript. Therefore we will use the\n        "),n("strong",[e._v("toFixed()")]),e._v(" function to truncate the remaining time to 1\n        decimal place. Change\n        "),n("strong",[e._v("remainingTime = remainingTime - 0.1")]),e._v(" to this.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Now if you run the timer again, it will run normally. But there's one\n        more problem."),n("br"),e._v("Try to click the start button again before the timer\n        runs out. You'll notice that you have started 2 timers simultaneously\n        and the remaining time keeps switching back and forth between the\n        two."),n("br"),e._v("\n        We can solve this problem simply by clearing the interval before we\n        start the timer. We'll also add additional checks to ensure that our\n        timer does not accept invalid durations. Now our function looks like\n        this.\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(110).default,CodeSnippet:n(111).default})}}]);