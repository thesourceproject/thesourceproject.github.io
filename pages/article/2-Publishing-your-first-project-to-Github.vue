<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Publishing your first project to Github"
        date="4 Jan '21"
        readTime="10 min read"
        :tags="['miscellaneous', 'git', 'github', 'beginner']"
      />
      <p>
        In our
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/1-Installing-Visual-Studio-Code-and-Git-in-Windows"
          >previous tutorial</NuxtLink
        >, we learned how to create a local Git repository and make commits to
        it. Now it's time to show off your first project to the world.
      </p>
      <a
        title="GitHub, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:GitHub_logo_2013.svg"
        target="_blank"
        class="mx-auto mt-6 p-6 bg-white rounded-2xl"
        ><img
          alt="GitHub logo 2013"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/512px-GitHub_logo_2013.svg.png"
          class="w-96"
      /></a>
      <p class="mt-6">
        <strong>GitHub</strong> is a code hosting platform for version control
        and collaboration. It allows you to showcase your work and lets you and
        others work together on projects from anywhere.
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        <strong>Note</strong> - You need to have Visual Studio Code and local
        Git repository set up before you can continue. You may refer to
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/1-Installing-Visual-Studio-Code-and-Git-in-Windows"
          >this tutorial</NuxtLink
        >
        for instructions on how to install VS Code and create a local Git
        repository.<br />
        Sign up on
        <a
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://github.com/"
          target="_blank"
          >Github</a
        >. After completing the sign-up process, open your project folder in VS
        Code.<br />
        Click the <strong>Publish to Github</strong> button in the status bar on
        the bottom.
      </p>
      <img
        src="~/assets/images/article/2/misc2-1.png"
        alt="Publish to Github"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        A prompt will appear asking
        <em>The extension 'Github' wants to sign in using Github</em><br />
        Click <strong>Allow</strong>.
      </p>
      <img
        src="~/assets/images/article/2/misc2-2.png"
        alt="The extension 'Github' wants to sign in using Github"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Your browser will be opened automatically and you will receive another
        prompt asking you to authorize Visual Studio Code to access Github.<br />
        Click <strong>Continue</strong>.
      </p>
      <img
        src="~/assets/images/article/2/misc2-3.png"
        alt="Authorize Visual Studio Code to access Github"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        You will then see a prompt asking you to allow an extension to open this
        URI.<br />
        Click <strong>Open</strong>.
      </p>
      <img
        src="~/assets/images/article/2/misc2-4.png"
        alt="Allow an extension to open this
        URI"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Once the authentication is complete you will be asked by VS Code to set
        a repository name for Github. By default, it is set to the current
        folder name.<br />
        You are also given two options, whether to publish to a private
        repository or a public repository. If you want your repository to be
        private i.e. only be seen by you, you can select
        <em>Publish to Github private repository</em>.<br />
        But for now, select
        <em>Publish to Github public repository</em>.
      </p>
      <img
        src="~/assets/images/article/2/misc2-5.png"
        alt="Allow an extension to open this
        URI"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        You will be prompted to sign in to Github.<br />
        Click <strong>Sign in with your browser</strong> to continue.
      </p>
      <img
        src="~/assets/images/article/2/misc2-6.png"
        alt="Sign in to Github with your browser"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Your browser will show you that the authentication has succeeded. Close
        the tab and return to VS Code.
      </p>
      <img
        src="~/assets/images/article/2/misc2-7.png"
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
        src="~/assets/images/article/2/misc2-8.png"
        alt="Sign in to Github with your browser"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        And there you go! You have published your first project to Github. Now
        you are ready to showcase your work to the world!
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
export default {
  name: "misc2",
  components: {
    ArticleHeader,
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