<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Installing MySQL on Windows"
        date="11 Jun '21"
        readTime="5 min read"
        :tags="['backend', 'database', 'sql', 'windows', 'beginner']"
      />
      <p>
        If you are starting out with backend development or just want to dabble
        a bit in SQL, you need to understand about databases. In this tutorial,
        we will learn how to install the world's most popular database on
        Windows.
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        MySQL comes with its own installer that can simplify the process but I
        prefer to use the ZIP archive as it offers more flexibility and can be
        easily removed if not needed.<br /><br />
        Download MySQL Community Server from the
        <a
          rel="noopener noreferrer"
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://dev.mysql.com/downloads/mysql/"
          target="_blank"
          >official website</a
        >. Look for <strong>Windows (x86, 64-bit), ZIP Archive</strong> under
        <strong>Other Downloads</strong>.<br />
        At the time of writing this article, the latest version available is
        <strong>8.0.25</strong>.
      </p>
      <img
        src="~/assets/images/article/14/backend-1.png"
        alt="Download MySQL Community Server"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Extract this ZIP file and create an option file named
        <strong>my.ini</strong> in it. Paste the following in this file.
      </p>
      <CodeSnippet
        :code="`[mysqld]
# set basedir to your installation path
basedir=E:/mysql
# set datadir to the location of your data directory
datadir=E:/mydata/data`"
        lang="language-powershell"
      />
      <p>
        This solution has the optimal <strong>O(n)</strong> time complexity. It
        also uses <strong>O(n)</strong> extra space for the
        <em>count</em> map/dictionary.<br />
        The problem turned out to be much simpler than it looked initially. We
        started from the brute-force technique and optimized it further and
        further.<br /><br />
        Hooray! You've solved a medium-level problem. But don't stop here and
        try some more problems.
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "backend14",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Installing MySQL on Windows | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "If you are starting out with backend development or just want to dabble a bit in SQL, you need to understand about databases. In this tutorial, we will learn how to install the world's most popular database on Windows.",
      },
    ],
  },
};
</script>