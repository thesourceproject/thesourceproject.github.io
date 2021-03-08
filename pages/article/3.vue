<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Python fundamentals"
        date="6 Jan '21"
        readTime="15 min read"
        :tags="['basics', 'python', 'beginner']"
      />
      <p>
        <a
          class="text-text-3 text-lg font-bold hover:underline focus:underline focus:outline-none"
          href="https://www.python.org/"
          target="_blank"
          >Python</a
        >
        is an interpreted, high-level and general-purpose programming language.
        Python is being used in web development, machine learning and even
        desktop applications. Its easy to learn syntax is very well suited for
        beginners as well as experienced programmers.
      </p>
      <a
        title="www.python.org, GPL &lt;http://www.gnu.org/licenses/gpl.html&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Python_logo_and_wordmark.svg"
        target="_blank"
        class="mx-auto mt-6 p-6 bg-white rounded-2xl"
        ><img
          alt="Python logo and wordmark"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/640px-Python_logo_and_wordmark.svg.png"
          class="w-96"
      /></a>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        First we need to install Python. You can download Python from the
        <a
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://www.python.org/downloads/"
          target="_blank"
          >official website</a
        >.<br />
        At the time of writing this article, the latest version available is
        <strong>3.9.1</strong>.<br />
        Once the download is complete, you may begin the installation
        process.<br />
        <strong>Note</strong> - Make sure the
        <strong>Add Python 3.9 to PATH</strong> option is checked. This will
        allow you to access the Python interpreter in the Windows Powershell
        from anywhere.
      </p>
      <img
        src="~/assets/images/article/3/basics3-1.png"
        alt="Install Python"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Open a Powershell window, type in <em>python</em> and press
        <strong>Enter</strong>.<br />
        This will open the Python interpreter. You can try out Python here.
      </p>
      <img
        src="~/assets/images/article/3/basics3-2.png"
        alt="Windows Powershell"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Let's start with everyone's favourite, the
        <strong>Hello World!</strong> program. Enter this code in the python
        shell and press <strong>Enter</strong>.
      </p>
      <CodeSnippet code="print('Hello World!')" lang="language-python" />
      <p>
        It should print <strong>Hello World!</strong>(Obviously). But now let's
        try some statements. Enter these statements one by one in the python
        shell.
      </p>
      <CodeSnippet
        :code="`x = 5
y = 7
# Can also be written as --> x, y = 5, 7
z = x * y
print(z)`"
        lang="language-python"
      />
      <p>
        It should print <strong>35</strong>. What we did here was that we first
        declared a variable <strong>x</strong> while giving it a value of
        <strong>5</strong>. Similarly we also declared <strong>y</strong> and
        gave it a value of <strong>7</strong>. We then stored the product of
        <strong>x</strong> and <strong>y</strong> in <strong>z</strong>(In
        Python, as in most programming languages, the <strong>*</strong> symbol
        means multiplication).<br />
        After that we simply print the value of
        <strong>z</strong>(i.e. 35).<br />
        <strong>Note</strong> - You can add comments by writing
        <strong>#</strong> and then typing in the desired comment. These do not
        change the output of the program.<br /><br />
        Now let's take it up a notch. Till now we were using the Python shell to
        type and run our code. It's a great tool to try out Python but real-life
        applications are created in Python scripts. So now we will learn how to
        use the popular text editor
        <a
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://code.visualstudio.com/"
          target="_blank"
          >Visual Studio Code</a
        >
        to create Python scripts.<br />
        <strong>Note</strong> - For instructions on how to install and work with
        VS Code, refer to
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/1/#Installing-Visual-Studio-Code-and-Git-in-Windows"
          >this tutorial</NuxtLink
        >.<br /><br />
        Create a new folder on your computer named
        <strong>TheSourceProject</strong>, right click on it and open it in VS
        Code.<br />
        Now create a new file <strong>myFirstProgram.py</strong> and paste in
        the following code.
      </p>
      <CodeSnippet
        :code="`# Formula for simple interest --> (p * r * t) / 100
p1, p2, p3 = 1200, 1500, 2000
r1, r2, r3 = 5, 10, 8
t1, t2, t3 = 5, 2, 3
a1 = (p1 * r1 * t1) / 100
a2 = (p2 * r2 * t2) / 100
a3 = (p3 * r3 * t3) / 100
print(a1, a2, a3, sep=', ')`"
        lang="language-python"
      />
      <p>
        Save the file and then open the in-built Powershell(<strong
          >Ctrl + `</strong
        >) and it should show you the current working directory. Now type in the
        following command.
      </p>
      <CodeSnippet
        :code="`python myFirstProgram.py`"
        lang="language-powershell"
      />
      <p>
        This command will run your program and you will get the output as three
        comma separated numbers
        <strong>300.0, 300.0, 480.0</strong>(The default separator for the
        <strong>print</strong> function is a single space but it can be changed
        to anything as in the example).<br />
        <strong>Note</strong> - It is important to know that variable/function
        names can only start with either a letter or an underscore and may
        contain digits, letters and underscores after that.<br /><br />
        You might have noticed that we are reusing the same logic for
        calculating simple interest for 3 different values which is causing
        duplication in our code. Functions(Or methods) will help us avoid this
        duplication.<br />
        Erase everything and type in the following statements and run the
        program.
        <strong>Don't forget the whitespace</strong> before the
        <strong>return</strong> statement.
      </p>
      <CodeSnippet
        :code="`# Same program as above, now using a function
def simpleInterest(p, r, t):
  return (p * r * t) / 100
p1, p2, p3 = 1200, 1500, 2000
r1, r2, r3 = 5, 10, 8
t1, t2, t3 = 5, 2, 3
a1 = simpleInterest(p1, r1, t1)
a2 = simpleInterest(p2, r2, t2)
a3 = simpleInterest(p3, r3, t3)
print(a1, a2, a3, sep=', ')`"
        lang="language-python"
      />
      <p>
        Now we can reuse our <strong>simpleInterest</strong> function as many
        times as needed. Also if we have to modify the logic we only need to do
        it in one place. Therefore, this code is a lot more maintainable than
        the previous one.<br />
        <strong>Note</strong> - Notice that it is <em>necessary</em> to add
        white-space when starting a new block of code, like after declaring a
        function, loop or an if-else statement. Using camel-case for
        variable/function names is <em>optional</em> but usually preferred.<br /><br />
        In our previous code we ran our
        <strong>simpleInterest</strong> function 3 times, what if wanted to run
        it a 100 times or even a 1000 times. Now we need to learn about loops.
        Run the following program.
      </p>
      <CodeSnippet
        :code="`for i in range(5):
  print(i)`"
        lang="language-python"
      />
      <p>
        This is the simplest way to run a <strong>for</strong> loop. Here an
        iterator <strong>i</strong> is created and it's value changes from 0 to
        4(i.e less than 5). The <code>print(i)</code> statement in the block
        prints the current value of <strong>i</strong> each time the loop is
        executed(In our case <em>0, 1, 2, 3, 4</em>). We can also modify the
        <strong>for</strong> loop so that it iterates through our required
        range.
      </p>
      <CodeSnippet
        :code="`for i in range(10, 101, 4):
  print(i)`"
        lang="language-python"
      />
      <p>
        Here our iterator <strong>i</strong> is created and it's value changes
        from 10 to 100(i.e less than 101) with a step value of 4(i.e. 10, 14,
        18, 22...).<br /><br />
        That's all for now. We will cover more topics in later tutorials.
        Meanwhile, why don't you play around with Python yourself?
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "basics3",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Python fundamentals | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Python is an interpreted, high-level and general-purpose programming language. Python is being used in web development, machine learning and even desktop applications.",
      },
    ],
  },
};
</script>