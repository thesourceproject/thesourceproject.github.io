<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Let's learn CSS Flexbox"
        date="2 Mar '21"
        readTime="15 min read"
        :tags="['frontend', 'html', 'css', 'intermediate']"
      />
      <p>
        If you're just starting with HTML and CSS, you must have heard about
        Flexbox. This tutorial will teach you the basics of Flexbox so you can
        use it in your projects in no time.
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
      <div class="mt-12 flex flex-col">
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
  border: red dashed 2px;
  border-radius: 2rem;
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
}"
        lang="language-css"
      />
      <p>
        Now we will learn about different properties commonly used to work with
        Flexbox using our interactive examples.<br />
        Just click on any of the values for the respective CSS property to see
        its output.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">flex-direction</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
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
                values: ['row', 'column', 'row-reverse', 'column-reverse'],
              },
            ],
          },
        ]"
        ><div ref="eg1-parent" class="parent">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div></CSSHelper
      >
      <p>
        To use Flexbox we need to use the <em>flex</em>
        <strong>display</strong> property.<br />
        Flex items are initially arranged in the row direction(left to right).
        This can be changed using the <strong>flex-direction</strong> property.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">flex-wrap</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CSSHelper
        :elements="[
          {
            ref: 'eg2-parent',
            name: 'parent',
            properties: [
              {
                name: 'display',
                values: ['block', 'flex'],
              },
              {
                name: 'flex-direction',
                values: ['row', 'column', 'row-reverse', 'column-reverse'],
              },
              {
                name: 'flex-wrap',
                values: ['nowrap', 'wrap', 'wrap-reverse'],
              },
            ],
          },
        ]"
        ><div ref="eg2-parent" class="parent">
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
        The <strong>flex-wrap</strong> property will allow us to control whether
        the items are fitted in a single line(and possibly overflowing) or wrap
        across multiple lines as needed.<br />
        <em>wrap-reverse</em> will wrap the items from bottom to top.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">justify-content</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CSSHelper
        :elements="[
          {
            ref: 'eg3-parent',
            name: 'parent',
            properties: [
              {
                name: 'display',
                values: ['block', 'flex'],
              },
              {
                name: 'flex-direction',
                values: ['row', 'column', 'row-reverse', 'column-reverse'],
              },
              {
                name: 'justify-content',
                values: [
                  'flex-start',
                  'flex-end',
                  'center',
                  'space-between',
                  'space-around',
                  'space-evenly',
                ],
              },
            ],
          },
        ]"
        ><div ref="eg3-parent" class="parent">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div></CSSHelper
      >
      <p>
        The <strong>justify-content</strong> property controls the position of
        the child elements in the main axis(direction of flex items).<br />
        This property is useful for distributing the remaining space left around
        child items.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">align-items</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CSSHelper
        :elements="[
          {
            ref: 'eg4-parent',
            name: 'parent',
            properties: [
              {
                name: 'display',
                values: ['block', 'flex'],
              },
              {
                name: 'flex-direction',
                values: ['row', 'column', 'row-reverse', 'column-reverse'],
              },
              {
                name: 'align-items',
                values: [
                  'stretch',
                  'flex-start',
                  'flex-end',
                  'center',
                  'baseline',
                ],
              },
            ],
          },
          {
            ref: 'eg4-item1',
            name: 'item1',
            properties: [
              {
                name: 'font-size',
                values: ['2rem', '3rem', '4rem'],
              },
            ],
          },
          {
            ref: 'eg4-item2',
            name: 'item2',
            properties: [
              {
                name: 'font-size',
                values: ['2rem', '3rem', '4rem'],
              },
            ],
          },
          {
            ref: 'eg4-item3',
            name: 'item3',
            properties: [
              {
                name: 'font-size',
                values: ['2rem', '3rem', '4rem'],
              },
            ],
          },
        ]"
        ><div ref="eg4-parent" class="parent">
          <div ref="eg4-item1">1</div>
          <div ref="eg4-item2">2</div>
          <div ref="eg4-item3">3</div>
        </div></CSSHelper
      >
      <p>
        The <strong>align-items</strong> property controls the positioning of
        flex items on the cross axis(column direction if the flex items are
        arranged row-wise and vice-versa).<br />
        <em>baseline</em> arranges the items so that their baselines are
        aligned.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">align-content</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CSSHelper
        :elements="[
          {
            ref: 'eg5-parent',
            name: 'parent',
            properties: [
              {
                name: 'display',
                values: ['block', 'flex'],
              },
              {
                name: 'flex-direction',
                values: ['row', 'column', 'row-reverse', 'column-reverse'],
              },
              {
                name: 'flex-wrap',
                values: ['nowrap', 'wrap', 'wrap-reverse'],
              },
              {
                name: 'align-content',
                values: [
                  'stretch',
                  'flex-start',
                  'flex-end',
                  'center',
                  'space-between',
                  'space-around',
                  'space-evenly',
                ],
              },
            ],
          },
        ]"
        ><div ref="eg5-parent" class="parent">
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
        The <strong>align-content</strong> property is similar to the
        <strong>justify-content</strong> property but this works along the cross
        axis.<br />
        This property only works when the flex items are wrapped onto multiple
        lines. This means that the
        <strong>flex-wrap</strong> property must be set to either
        <em>wrap</em> or <em>wrap-reverse</em>.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">flex-grow</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CSSHelper
        :elements="[
          {
            ref: 'eg6-parent',
            name: 'parent',
            properties: [
              {
                name: 'display',
                values: ['block', 'flex'],
              },
              {
                name: 'flex-direction',
                values: ['row', 'column', 'row-reverse', 'column-reverse'],
              },
            ],
          },
          {
            ref: 'eg6-item1',
            name: 'item1',
            properties: [
              {
                name: 'flex-grow',
                values: ['0', '1', '2', '3'],
              },
            ],
          },
          {
            ref: 'eg6-item2',
            name: 'item2',
            properties: [
              {
                name: 'flex-grow',
                values: ['0', '1', '2', '3'],
              },
            ],
          },
          {
            ref: 'eg6-item3',
            name: 'item3',
            properties: [
              {
                name: 'flex-grow',
                values: ['0', '1', '2', '3'],
              },
            ],
          },
        ]"
        ><div ref="eg6-parent" class="parent">
          <div ref="eg6-item1">1</div>
          <div ref="eg6-item2">2</div>
          <div ref="eg6-item3">3</div>
        </div></CSSHelper
      >
      <p>
        The <strong>flex-grow</strong> property indicates how much the flex item
        grows compared to the other flex items along the main axis.<br />
        Its initial value is 0 meaning that the flex item will not grow to take
        over the remaining space.
      </p>
      <div class="mt-6 flex flex-col">
        <h3 class="text-xl">align-self</h3>
        <div class="w-4 h-1 bg-background-2 rounded-full"></div>
      </div>
      <CSSHelper
        :elements="[
          {
            ref: 'eg7-parent',
            name: 'parent',
            properties: [
              {
                name: 'display',
                values: ['block', 'flex'],
              },
              {
                name: 'flex-direction',
                values: ['row', 'column', 'row-reverse', 'column-reverse'],
              },
            ],
          },
          {
            ref: 'eg7-item1',
            name: 'item1',
            properties: [
              {
                name: 'font-size',
                values: ['2rem', '3rem', '4rem'],
              },
              {
                name: 'align-self',
                values: [
                  'stretch',
                  'flex-start',
                  'flex-end',
                  'center',
                  'baseline',
                ],
              },
            ],
          },
          {
            ref: 'eg7-item2',
            name: 'item2',
            properties: [
              {
                name: 'font-size',
                values: ['2rem', '3rem', '4rem'],
              },
              {
                name: 'align-self',
                values: [
                  'stretch',
                  'flex-start',
                  'flex-end',
                  'center',
                  'baseline',
                ],
              },
            ],
          },
          {
            ref: 'eg7-item3',
            name: 'item3',
            properties: [
              {
                name: 'font-size',
                values: ['2rem', '3rem', '4rem'],
              },
              {
                name: 'align-self',
                values: [
                  'stretch',
                  'flex-start',
                  'flex-end',
                  'center',
                  'baseline',
                ],
              },
            ],
          },
        ]"
        ><div ref="eg7-parent" class="parent">
          <div ref="eg7-item1">1</div>
          <div ref="eg7-item2">2</div>
          <div ref="eg7-item3">3</div>
        </div></CSSHelper
      >
      <p>
        The <strong>align-self</strong> property is similar to the
        <strong>align-items</strong> property but for individual items.<br />
        Use this property on child items to override the parent container's
        <strong>align-items</strong> property.<br /><br />
        We've covered the most commonly used Flexbox features but there are
        more(e.g. <em>flex-flow</em>, <em>flex-shrink</em>, <em>flex-basis</em>,
        etc) that are not used as often. You can learn more about them
        <a
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
          target="_blank"
          >here</a
        >.<br /><br />
        Now that you have understood the basics of Flexbox, why not use this
        powerful CSS feature in your work?
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
import CSSHelper from "~/components/CSSHelper.vue";
export default {
  name: "frontend7",
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
          "If you're just starting with HTML and CSS, you must have heard about Flexbox. This tutorial will teach you the basics of Flexbox so you can use it in your projects in no time.",
      },
    ],
  },
};
</script>
<style scoped>
.parent {
  max-height: 32rem;
  overflow: auto;
  border: var(--border-1) solid 2px;
  border-radius: 0.25rem;
}
.parent > div {
  border: var(--border-2) dashed 2px;
  border-radius: 2rem;
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
}
</style>