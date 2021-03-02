<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Let's learn CSS Flexbox"
        date="2 Mar '21"
        readTime="10 min read"
        :tags="['frontend', 'html', 'css', 'beginner']"
      />
      <p>
        If you're just starting out with HTML and CSS, you must have heard about
        <a
          class="text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none"
          href="https://fonts.google.com/"
          target="_blank"
          >Flexbox</a
        >. This tutorial will teach you the basics of Flexbox so you can use it
        in your own projects in no time.
      </p>
      <a
        title="Rudloff, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg"
        target="_blank"
        class="mx-auto mt-6 p-6 bg-white rounded-2xl"
        ><img
          alt="CSS3 logo and wordmark"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"
          class="w-64"
      /></a>
      <p class="mt-6">
        But what is Flexbox and why should we use it?<br /><br />
        Before Flexbox, positioning of items inside its parent container was
        very cumbersome and in some cases impossible. It required the use of
        <strong>float</strong> and <strong>position</strong> properties and the
        advent of mobile devices with different screen sizes didn't make it any
        easier.<br /><br />
        Flexbox solves these problems by providing an easy method to arrange
        items in one dimension inside a container.
      </p>
      <div class="flex flex-col max-w-4xl mt-12">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        To demonstrate the power of Flexbox we will create a parent container
        and place a few items in it.
      </p>
      <CodeSnippet
        code='<div class="parent">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  ...
</div>'
        lang="language-html"
      />
      <p>
        And we will style the child items so that we can distinguish them from
        the parent and other items.
      </p>
      <CodeSnippet
        code=".parent > div {
  border: var(--border-2) dashed 2px;
  border-radius: 2rem;
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
}"
        lang="language-css"
      />
      <p>
        Now we will learn about different properties used to work with Flexbox
        using our interactive examples.<br />
      </p>
      <CSSHelper
        :elements="[
          {
            ref: 'eg1-parent',
            name: 'parent',
            properties: [
              {
                name: 'display',
                values: ['block', 'flex'],
              },
              {
                name: 'flex-direction',
                values: [
                  'initial',
                  'row',
                  'column',
                  'row-reverse',
                  'column-reverse',
                ],
              },
            ],
          },
        ]"
        ><div ref="eg1-parent" class="parent">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div></CSSHelper
      >
      <p>
        And there you go. We have successfully created a countdown timer app
        using Javascript.
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
import CSSHelper from "~/components/CSSHelper.vue";
export default {
  name: "frontend5",
  components: {
    ArticleHeader,
    CodeSnippet,
    CSSHelper,
  },
  head: {
    title: "Let's learn CSS Flexbox | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "If you're just starting out with HTML and CSS, you must have heard about Flexbox. This tutorial will teach you the basics of Flexbox so you can use it in your own projects in no time.",
      },
    ],
  },
};
</script>