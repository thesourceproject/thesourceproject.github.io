<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Publishing your first project to Github"
        date="4 Jan '21"
        readTime="10 min read"
        :tags="['miscellaneous', 'github', 'git', 'basics', 'beginner']"
      />
      <p>
        In our
        <NuxtLink
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          to="/article/1/#Installing-Visual-Studio-Code-and-Git-in-Windows"
          >previous tutorial</NuxtLink
        >
        we learnt how to create a local Git repository and make commits to it.
        Now it's time to show-off your first project to the world.
      </p>
      <a
        class="mx-auto mt-6 w-96 bg-white rounded-2xl"
        href="https://github.com/"
        target="_blank"
      >
        <img src="../../assets/images/article/2/Misc2-1.png" alt="Github" />
      </a>
      <p class="mt-6">
        <a
          class="text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none"
          href="https://github.com/"
          target="_blank"
          >GitHub</a
        >
        is a code hosting platform for version control and collaboration. It
        allows you to showcase your work and lets you and others work together
        on projects from anywhere.
      </p>
      <div class="flex flex-col max-w-4xl mt-12">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        <strong>Note</strong> - You need to have
        <a
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          href="https://code.visualstudio.com/"
          target="_blank"
          >Visual Studio Code</a
        >
        and local
        <a
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          href="https://git-scm.com/"
          target="_blank"
          >Git</a
        >
        repository set up before you can continue. You may refer to our
        <NuxtLink
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          to="/article/1/#Installing-Visual-Studio-Code-and-Git-in-Windows"
          >previous tutorial</NuxtLink
        >
        for instructions on how to install VS Code and create a local Git
        repository.<br />
        Sign up on
        <a
          class="text-text-3 font-bold hover:underline focus:underline focus:outline-none"
          href="https://github.com/"
          target="_blank"
          >Github</a
        >. After completing the sign-up process, open your project folder in VS
        Code.<br />
        Click the <strong>Publish to Github</strong> button in the status bar on
        the bottom.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-2.png"
        alt="Publish to Github"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        A prompt will appear asking
        <em>The extension 'Github' wants to sign in using Github</em><br />
        Click <strong>Allow</strong>.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-3.png"
        alt="The extension 'Github' wants to sign in using Github"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Your browser will be opened automatically and you will receive another
        prompt asking you to authorize Visual Studio Code to access Github.<br />
        Click <strong>Continue</strong>.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-4.png"
        alt="Authorize Visual Studio Code to access Github"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        You will then see a prompt asking you to allow an extension to open this
        URI.<br />
        Click <strong>Open</strong>.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-5.png"
        alt="Allow an extension to open this
        URI"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Once the authentication is complete you will be asked by VS Code to set
        a repository name for Github. By default it is set to the current folder
        name.<br />
        You are also given two options, whether to publish to a private
        repository or a public repository. If you want your repository to be
        private i.e. only be seen by you, you can select
        <em>Publish to Github private repository</em>.<br />
        But for now select
        <em>Publish to Github public repository</em>.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-6.png"
        alt="Allow an extension to open this
        URI"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        You will prompted to sign in to Github.<br />
        Click <strong>Sign in with your browser</strong> to continue.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-7.png"
        alt="Sign in to Github with your browser"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Your browser will show you that the authentication has succeeded. Close
        the tab and return to VS Code.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-8.png"
        alt="Sign in to Github with your browser"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        You will see a notification below saying that the repository has been
        published successfully. You may click the
        <strong>Open in Github</strong> button to open the repository in your
        browser<br />
        It may also show you another notification asking you to allow VS Code to
        periodically run <em>git fetch</em>. You can ignore this for now.
      </p>
      <img
        src="../../assets/images/article/2/Misc2-9.png"
        alt="Sign in to Github with your browser"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        And there you go! You have published your first project to Github. Now
        it's time to show-off your work to your friends!
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
    title: "Publishing your first project to Github | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "In our previous tutorial we learnt how to create a local Git repository and make commits to it. Now it's time to show-off your first project to the world. GitHub is a code hosting platform for version control and collaboration.",
      },
    ],
  },
};
</script>