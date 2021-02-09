<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Creating a countdown timer using Javascript"
        date="9 Feb'21"
        readTime="30 min read"
        :tags="['javascript', 'basics', 'beginner']"
      />
      <p>
        In this tutorial, we will learn how to create a simple countdown timer
        application using Javascript that can then be run in your web-browser.
      </p>
      <img
        src="~/assets/images/article/5/Javascript5-1.png"
        alt="Countdown Timer"
        class="mx-auto mt-6 max-w-full"
      />
      <div class="flex flex-col max-w-4xl mt-12">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        First we need to write the HTML for our countdown timer.<br />
        Create an empty file on your computer named
        <strong>myCountdownTimer.html</strong> and paste in the following markup
        in the <strong>body</strong> tag.
      </p>
      <CodeSnippet
        code='&lt;div id="countdownTimer"&gt;
  &lt;input id="duration" type="number" placeholder="Timer Duration" min="0" /&gt;
  &lt;fieldset id="controls"&gt;
    &lt;button id="startButton" title="Start"&gt;Start&lt;/button&gt;
    &lt;button id="stopButton" title="Stop"&gt;Stop&lt;/button&gt;
    &lt;button id="resetButton" title="Reset"&gt;Reset&lt;/button&gt;
  &lt;/fieldset&gt;
  &lt;p id="timer"&gt;0.0&lt;/p&gt;
&lt;/div&gt;'
        lang="language-html"
      />
      <p>
        We are giving each of our elements a unique
        <strong>id</strong> attribute. This will help us with the styling and
        also allow us to access the element with Javascript.<br />
        <strong>Note</strong> - the <strong>class</strong> attribute should be
        used for styling elements but since all of our elements are unique, we
        may use <strong>id</strong>. Also the <strong>id</strong> will be
        required for our Javascript.<br /><br />
        If you open this HTML file right now, you'll notice that it doesn't look
        anything like the image above. Don't worry, this is because we have not
        added any CSS yet. Time to add some styling.<br />
        Paste the following CSS inside a <strong>style</strong> tag in the
        <strong>head</strong> section of your HTML file.
      </p>
      <CodeSnippet
        code='@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

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

#duration {
  border-bottom: 2px solid lightgrey;
  outline: none;
}

#duration:focus {
  border-bottom: 2px solid darkblue;
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
  cursor: pointer;
}

#stopButton {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: orangered;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
}

#resetButton {
  background-color: yellow;
  border-radius: 0.25rem;
  cursor: pointer;
}

#timer {
  margin: 0;
  font-size: 10rem;
}'
        lang="language-css"
      />
      <p>
        Now this looks much better. Let's go through the CSS to see how we
        managed to do this.<br />
        At the top we imported <strong>Open Sans</strong> font-family from
        <a
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://fonts.google.com/"
          target="_blank"
          >Google Fonts</a
        >. It has a large collection of free fonts that you may use in any of
        your own projects.<br /><br />
        Then we add some styling to the <strong>body</strong> tag. We set its
        <strong>min-height</strong> property to <strong>100vh</strong>(vh :
        hundredths of the viewport height). This makes the
        <strong>body</strong> at least as tall as the height of the current
        viewport. This, along with the <strong>display: flex</strong> property,
        will help us to center the countdown timer on the screen.<br />
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "Javascript5",
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