<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Installing Visual Studio Code and Git in Windows"
        date="23 Dec '20"
        readTime="20 min read"
        :tags="[
          'miscellaneous',
          'vscode',
          'git',
          'windows',
          'basics',
          'beginner',
        ]"
      />
      <p>
        <a
          class="text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none"
          href="https://code.visualstudio.com/"
          target="_blank"
          >Visual Studio Code</a
        >
        is a powerful free open source text editor by Microsoft. VS Code is
        available for Windows, Linux, and macOS. Use it to code in any
        programming language, without switching editors. Visual Studio Code has
        support for many languages, including Python, Java, C++, JavaScript, and
        more.
        <br /><br />
        <a
          class="text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none"
          href="https://git-scm.com/"
          target="_blank"
          >Git</a
        >
        is a free and open source distributed version control system designed to
        handle everything from small to very large projects with speed and
        efficiency. <br /><br />
        VS Code has integrated source control and includes Git support
        in-the-box. VS Code will leverage your machine's Git installation, so
        you need to install Git first before you get these features.
      </p>
      <div class="flex flex-col max-w-4xl mt-12">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        Download VS Code from the
        <a
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          href="https://code.visualstudio.com/"
          target="_blank"
          >official website</a
        >.
      </p>
      <img
        src="../../assets/images/article/1/Misc1-1.png"
        alt="Download VS Code"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-8">
        After downloading it, follow the instructions in the setup to install VS
        Code on your computer.<br />
        Then download Git from the
        <a
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          href="https://git-scm.com/"
          target="_blank"
          >official website</a
        >. At the time of writing this article, the latest version available is
        <strong>2.29.2</strong>.
      </p>
      <img
        src="../../assets/images/article/1/Misc1-2.png"
        alt="Download Git"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        After downloading it, follow the instructions in the setup to install
        Git on your computer.<br />
        Make sure you select
        <strong>Use Visual Studio Code as Git's default editor</strong> when
        prompted.<br />
        Continue the rest of the steps with the default options checked.
      </p>
      <img
        src="../../assets/images/article/1/Misc1-3.png"
        alt="Choosing the default editor used by Git"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        And there you go. You have now installed VS Code and Git on your
        computer.<br />
        Now time to write your first piece of code.<br /><br />
        Create a new folder in your computer, right-click on it and select
        <strong>Open with Code</strong> in the context menu.<br />
        <strong>Note -</strong> It is important to open a folder(not a file) in
        VS Code otherwise the source control functions will not work.<br />
        This folder will now act as a workspace for your project.<br /><br />
        Now go to <strong>Source Control</strong> in the side bar and initialise
        the local repository. Ignore the <em>Publish to Github</em> button for
        now, we will cover that in the next tutorial.
      </p>
      <img
        src="../../assets/images/article/1/Misc1-4.png"
        alt="Initialize Repository"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Now go to <strong>Explorer</strong> and create a new file named
        <strong>myFirstProject.html</strong>.<br />
      </p>
      <img
        src="../../assets/images/article/1/Misc1-5.jpg"
        alt="Create New File"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Now type <strong>!</strong>(yes, just an exclaimation mark) in the
        editor and VS Code will show you that its an Emmet abbreviation.<br />
        Press <strong>Enter</strong> and the file will be populated by some
        boiler-plate code automatically.(Pretty cool, huh?)
      </p>
      <img
        src="../../assets/images/article/1/Misc1-6.jpg"
        alt="Emmet Abbreviation"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Now paste this code in the <strong>&lt;body&gt;</strong> tag of your
        document.
      </p>
      <CodeSnippet
        :code="`
&lt;h1 style=&quot;margin-top: 2rem;color: #ff2f2f;font-family: sans-serif;text-align: center;&quot;&gt;My First Project&lt;/h1&gt;
&lt;h2 style=&quot;color: #002e46;font-family: monospace;text-align: center;&quot;&gt;For More Tutorials Visit &lt;a href=&quot;https://thesourceproject.github.io&quot; target=&quot;_blank&quot;&gt;TheSourceProject&lt;/a&gt;&lt;/h2&gt;
    `"
      />
      <p>Run this HTML file in your browser to see the result.</p>
      <img
        src="../../assets/images/article/1/Misc1-7.png"
        alt="My First Project"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Not bad for a start. Now go back to <strong>Source Control</strong> and
        type in <strong>first commit</strong> in the text box and press
        <strong>Ctrl + Enter</strong> to make your first commit in the
        repository.<br />
      </p>
      <img
        src="../../assets/images/article/1/Misc1-8.png"
        alt="First Commit"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        A prompt will appear asking
        <em
          >Would you like to stage all your changes and commit them
          directly?</em
        ><br />
        Click <strong>Always</strong>. You can learn more about changes
        <a
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          href="https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository"
          target="_blank"
          >here</a
        ><br />
      </p>
      <img
        src="../../assets/images/article/1/Misc1-9.png"
        alt="No Staged Commits"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Oops! We get an error message because we haven't yet configured our Git
        user's name and email. Simply open the in-built
        <strong>Windows Powershell</strong> in VS Code(Ctrl + `) and type in the
        following two commands. <br />
        Don't forget to replace the name and email for your own.
      </p>
      <p class="mt-2 mx-8">
        <code>git config --global user.name "My Name"</code><br /><code
          >git config --global user.email "myname@example.com"</code
        >
      </p>
      <img
        src="../../assets/images/article/1/Misc1-10.png"
        alt="Configure user.name and user.email"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Once you have configured the username and email try to make the commit
        once more and it should work as normal.<br /><br />
        And there you go! You have created your first local Git repository and
        made your first commit. You're now ready to start creating!
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "../../components/ArticleHeader.vue";
import CodeSnippet from "../../components/CodeSnippet.vue";
export default {
  name: "Misc1",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title:
      "Installing Visual Studio Code and Git in Windows | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Visual Studio Code is a powerful free open source text editor by Microsoft. Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      },
    ],
  },
};
</script>