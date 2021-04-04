<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Creating a countdown timer using Javascript"
        date="9 Feb '21"
        readTime="20 min read"
        :tags="['frontend', 'html', 'css', 'javascript', 'beginner']"
      />
      <p>
        In this tutorial, we will learn how to create a simple countdown timer
        application using Javascript that can then be run in your web browser.
      </p>
      <img
        src="~/assets/images/article/5/frontend5-1.png"
        alt="Countdown Timer"
        class="mx-auto mt-6 max-w-full"
      />
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        First, we need to write the HTML for our countdown timer.<br />
        Create an empty file on your computer named
        <strong>myCountdownTimer.html</strong> and paste in the following markup
        in the <strong>body</strong> tag.
      </p>
      <CodeSnippet
        code='<div id="countdownTimer">
  <input id="duration" type="number" placeholder="Timer Duration" />
  <fieldset id="controls">
    <button id="startButton" title="Start">Start</button>
    <button id="stopButton" title="Stop">Stop</button>
    <button id="resetButton" title="Reset">Reset</button>
  </fieldset>
  <p id="timer">0.0</p>
</div>'
        lang="language-html"
      />
      <p>
        We are giving each of our elements a unique
        <strong>id</strong> attribute. This will help us with the styling and
        also allow us to access the element with Javascript.<br />
        <strong>Note</strong> - The <strong>class</strong> attribute should be
        used for styling elements but since all of our elements are unique, we
        may use <strong>id</strong>. Also, the <strong>id</strong> will be
        required for our Javascript.<br /><br />
        If you open this HTML file right now, you'll notice that it doesn't look
        anything like the image above. This is because we haven't added any CSS
        yet. Time to add some styling.<br />
        Paste the following CSS inside a <strong>style</strong> tag in the
        <strong>head</strong> section of your HTML file.
      </p>
      <CodeSnippet
        code='@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");'
        lang="language-css"
      />
      <p>
        First, we import <strong>Open Sans</strong> font-family from
        <a
          rel="noopener noreferrer"
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://fonts.google.com/"
          target="_blank"
          >Google Fonts</a
        >. Google Fonts has a large catalog of free fonts that you may use in
        any of your projects.
      </p>
      <CodeSnippet
        code="body {
  margin: 0;
  display: flex;
  min-height: 100vh;
}"
        lang="language-css"
      />
      <p>
        Then we add some styling to the <strong>body</strong> tag. We set its
        <strong>min-height</strong> property to <strong>100vh</strong>(vh means
        hundredths of the viewport height). This makes the
        <strong>body</strong> at least as tall as the height of the current
        viewport. This, along with the <strong>display: flex</strong> property,
        will help us to center the countdown timer on the screen.
      </p>
      <CodeSnippet
        code="#countdownTimer {
  margin: auto;
}"
        lang="language-css"
      />
      <p>
        We use <strong>margin: auto</strong> property on the countDownTimer
        element to equally apply margin on all 4 sides, this will center the
        element horizontally as well as vertically.<br />
        <strong>Note</strong> - We referred to the body tag with
        <strong>body</strong> but the countDownTimer element with
        <strong>#countDownTimer</strong>(with a <strong>#</strong>). The
        <strong>#</strong> symbol is a CSS selector used to apply styles on a
        specific <strong>id</strong>. If we want to style any HTML elements, we
        can do it so using their names(such as <strong>h1</strong>,
        <strong>input</strong>), without any CSS selectors.
      </p>
      <CodeSnippet
        code='input,
button,
p {
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: none;
  text-align: center;
}'
        lang="language-css"
      />
      <p>
        We add padding of 0.5rem(1rem equals the font size of the
        <em>html</em> element - which for most browsers has a default value of
        16px) to our elements and increase the font-size to 1.25rem. We continue
        to add the rest of the styles, including our imported font-family.<br />
        <strong>Note</strong> - We applied the font-family property to the
        <strong>input</strong>, <strong>button</strong>, and
        <strong>p</strong> elements instead of just applying it on the body tag.
        This is because form elements such as <strong>input</strong>,
        <strong>button</strong>, <strong>textarea</strong>, and
        <strong>select</strong> don't inherit the font-family automatically.
      </p>
      <CodeSnippet
        code="button {
  border-radius: 0.25rem;
  cursor: pointer;
}"
        lang="language-css"
      />
      <p>
        Now we add a border-radius of 0.25rem to the button element to make its
        corners slightly round. The
        <strong>cursor: pointer</strong> property changes the mouse cursor to a
        pointer when it's over this element.
      </p>
      <CodeSnippet
        code="#duration {
  outline: none;
  border-bottom: 2px solid lightgrey;
}

#duration:focus {
  border-color: darkblue;
}"
        lang="language-css"
      />
      <p>
        <strong>outline: none</strong> removes the black outline which is shown
        when the element is focused upon. Instead, we will add a light-grey
        bottom border to the element which will change to dark-blue on focus. We
        achieve this using the <strong>:focus</strong> pseudo-class.<br />
        <strong>Note</strong> - border-bottom is a shorthand property for
        setting border width, style, and color.
      </p>
      <CodeSnippet
        code="#controls {
  margin-top: 0.5rem;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
}"
        lang="language-css"
      />
      <p>
        We use the <strong>display: flex</strong> and
        <strong>justify-content: center</strong> properties to center the
        buttons.<br />
        <strong>Note</strong> - You can learn more about the flex display
        property in
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/7-Lets-learn-CSS-Flexbox"
          >this tutorial</NuxtLink
        >.
      </p>
      <CodeSnippet
        code="#startButton {
  background-color: lightgreen;
}

#stopButton {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: orangered;
  color: white;
}

#resetButton {
  background-color: yellow;
}

#timer {
  margin: 0;
  font-size: 10rem;
}"
        lang="language-css"
      />
      <p>
        We go on to add some background color and text color to the buttons and
        the timer element.<br /><br />
        It looks much better now but we haven't added any functionality yet. So
        let's move on to Javascript.
      </p>
      <CodeSnippet
        code='const duration = document.getElementById("duration");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const timer = document.getElementById("timer");

let interval;'
        lang="language-js"
      />
      <p>
        First, we fetch all of our necessary elements by using the
        <strong>document.getElementById()</strong> function. We use the same ids
        that we used in the HTML.<br />
        <strong>Note</strong> - We used <strong>const</strong> for declaring the
        variables for the HTML elements because they will never be reassigned
        whereas the <strong>interval</strong> variable(declared using
        <strong>let</strong>) will be reassigned later.<br /><br />
        Now that our elements are ready, we will implement the functionality of
        the start button using the <strong>addEventListener</strong> function.
      </p>
      <CodeSnippet
        code='startButton.addEventListener("click", () => {
  let remainingTime = Number(duration.value);
  timer.innerText = remainingTime;
  interval = setInterval(() => {
    remainingTime = remainingTime - 0.1;
    timer.innerText = remainingTime;
    if (remainingTime == 0) {
      clearInterval(interval);
    }
  }, 100);
});'
        lang="language-js"
      />
      <p>
        What we did here was that created a temporary variable
        <strong>remainingTime</strong> that will store the remaining time which
        will be shown to the user. Then we use the
        <strong>setInterval()</strong> function to create a routine that will be
        run at the end of every 100 milliseconds.<br />
        <strong>Note</strong> - The <strong>setInterval()</strong> function
        returns an Interval ID which we store in the
        <strong>interval</strong> variable. This will be used later to stop the
        routine.<br /><br />
        In our routine, we subtract 0.1(100 milliseconds) from
        <strong>remainingTime</strong> and update the timer. Then we check if
        remainingTime is 0 and pass our <strong>interval</strong> variable to
        the <strong>clearInterval()</strong> function to stop the routine.<br />
        Now let's try to run this. When you click the start button the timer
        starts normally but soon you will see something like this.
      </p>
      <img
        src="~/assets/images/article/5/frontend5-2.png"
        alt="Floating-Point Arithmetic Precision Problem"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        This is because of floating-point arithmetic. Due to their binary
        nature, some decimal numbers cannot be represented with perfect accuracy
        in Javascript. Therefore we will use the
        <strong>toFixed()</strong> function to truncate the remaining time to 1
        decimal place. Change
        <strong>remainingTime = remainingTime - 0.1</strong> to this.
      </p>
      <CodeSnippet
        code="remainingTime = (remainingTime - 0.1).toFixed(1);"
        lang="language-js"
      />
      <p>
        Now if you run the timer again, it will run normally. But there's one
        more problem.<br />Try to click the start button again before the timer
        runs out. You'll notice that you have started 2 timers simultaneously
        and the remaining time keeps switching back and forth between the
        two.<br />
        We can solve this problem simply by clearing the interval before we
        start the timer. We'll also add additional checks to ensure that our
        timer does not accept invalid durations. Now our function looks like
        this.
      </p>
      <CodeSnippet
        code='startButton.addEventListener("click", () => {
  clearInterval(interval);
  let remainingTime = Number(duration.value);
  if (Number.isInteger(remainingTime) && remainingTime > 0) {
    timer.innerText = remainingTime;
    interval = setInterval(() => {
      remainingTime = (remainingTime - 0.1).toFixed(1);
      timer.innerText = remainingTime;
      if (remainingTime == 0) {
        clearInterval(interval);
      }
    }, 100);
  } else {
    alert("Please enter a valid duration!");
  }
});'
        lang="language-js"
      />
      <p>
        Now what's left is the easy stuff. We need to add the functionalities
        for the stop and reset buttons.
      </p>
      <CodeSnippet
        code='stopButton.addEventListener("click", () => {
  clearInterval(interval);
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  timer.innerText = "0.0";
});'
        lang="language-js"
      />
      <p>
        And there you go. We have successfully created a countdown timer app
        using Javascript. Now try building a stopwatch application on your own
        with what you've learned and keep learning.
      </p>
      <h3 class="mt-6 text-xl">Complete Code</h3>
      <CodeSnippet
        code='<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Countdown Timer</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

      body {
        margin: 0;
        display: flex;
        min-height: 100vh;
      }

      #countdownTimer {
        margin: auto;
      }

      input,
      button,
      p {
        font-family: "Open Sans", sans-serif;
        padding: 0.5rem;
        font-size: 1.25rem;
        border: none;
        text-align: center;
      }

      button {
        cursor: pointer;
      }

      #duration {
        border-bottom: 2px solid lightgrey;
        outline: none;
      }

      #duration:focus {
        border-color: darkblue;
      }

      #controls {
        margin-top: 0.5rem;
        padding: 0;
        border: none;
        display: flex;
        justify-content: center;
      }

      #startButton {
        background-color: lightgreen;
        border-radius: 0.25rem;
      }

      #stopButton {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        background-color: orangered;
        color: white;
        border-radius: 0.25rem;
      }

      #resetButton {
        background-color: yellow;
        border-radius: 0.25rem;
      }

      #timer {
        margin: 0;
        font-size: 10rem;
      }
    </style>
  </head>

  <body>
    <div id="countdownTimer">
      <input id="duration" type="number" placeholder="Timer Duration" />
      <fieldset id="controls">
        <button id="startButton" title="Start">Start</button>
        <button id="stopButton" title="Stop">Stop</button>
        <button id="resetButton" title="Reset">Reset</button>
      </fieldset>
      <p id="timer">0.0</p>
    </div>
    <script>
      const duration = document.getElementById("duration");
      const startButton = document.getElementById("startButton");
      const stopButton = document.getElementById("stopButton");
      const resetButton = document.getElementById("resetButton");
      const timer = document.getElementById("timer");

      let interval;

      startButton.addEventListener("click", () => {
        clearInterval(interval);
        let remainingTime = Number(duration.value);
        if (Number.isInteger(remainingTime) && remainingTime > 0) {
          timer.innerText = remainingTime;
          interval = setInterval(() => {
            remainingTime = (remainingTime - 0.1).toFixed(1);
            timer.innerText = remainingTime;
            if (remainingTime == 0) {
              clearInterval(interval);
            }
          }, 100);
        } else {
          alert("Please enter a valid duration!");
        }
      });

      stopButton.addEventListener("click", () => {
        clearInterval(interval);
      });

      resetButton.addEventListener("click", () => {
        clearInterval(interval);
        timer.innerText = "0.0";
      });
    </script>
  </body>
</html>'
        lang="language-html"
      />
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "frontend5",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Creating a countdown timer using Javascript | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "In this tutorial, we will learn how to create a simple countdown timer application using Javascript that can then be run in your web-browser.",
      },
    ],
  },
};
</script>