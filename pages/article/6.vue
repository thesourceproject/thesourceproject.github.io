<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="LeetCode #1 Two Sum"
        date="20 Feb'21"
        readTime="10
      min read"
        :tags="['competitive', 'data', 'structures', 'algorithms', 'beginner']"
      />
      <p>
        Check out this problem on
        <a
          class="text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none"
          href="https://leetcode.com/problems/two-sum/"
          target="_blank"
          >LeetCode</a
        >.<br /><br />
        Given an array of integers <b>nums</b> and an integer <b>target</b>,
        return
        <em
          >indices of the two numbers such that they add up to <b>target</b></em
        >.<br />
        You may assume that each input would have
        <b><em>exactly</em> one solution</b>, and you may not use the
        <em>same</em> element twice.<br />
        You can return the answer in any order.
      </p>
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
        may use <strong>id</strong>. Also the <strong>id</strong> will be
        required for our Javascript.<br /><br />
        If you open this HTML file right now, you'll notice that it doesn't look
        anything like the image above. This is because we haven't added any CSS
        yet. Time to add some styling.<br />
        Paste the following CSS inside a <strong>style</strong> tag in the
        <strong>head</strong> section of your HTML file.
      </p>
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