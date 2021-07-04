<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Basics of MySQL"
        date="4 Jul '21"
        readTime="15 min read"
        :tags="['backend', 'database', 'sql', 'mysql', 'beginner']"
      />
      <p>
        We will learn the basics behind MySQL. After learning these, you will be
        able to create dynamic web applications. Even if you prefer other SQL
        databases such as MariaDB or PostgreSQL, this tutorial be helpful as the
        difference between them is mostly syntactical.
      </p>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        MySQL also comes with an installer that can simplify this process though
        I prefer the ZIP archive method as it offers more flexibility and can
        easily be upgraded or removed.<br /><br />
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
        src="~/assets/images/article/14/backend14-1.png"
        alt="Download MySQL Community Server"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Extract this ZIP archive and create an option file named
        <strong>my.ini</strong> in it. Then, create an empty directory
        <strong>data</strong> anywhere on your system.
      </p>
      <img
        src="~/assets/images/article/14/backend14-2.png"
        alt="Create the option file name my.ini"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Now, open the
        <strong>my.ini</strong> file using notepad or any other text editor and
        paste the following.
      </p>
      <CodeSnippet
        :code="`[mysqld]
# set basedir to your installation path
basedir=E:/mysql
# set datadir to the location of your data directory
datadir=E:/mydata/data`"
        lang="language-ini"
      />
      <p>
        Don't forget to replace the above paths with the actual ones. Here,
        <em>basedir</em> refers to the location where you extracted the ZIP
        archive.<br />
        <strong>Note</strong> - You can shorten the name of your extracted
        folder to just <strong>mysql</strong> as in the example. It will make it
        easier to access it using the command line.<br /><br />
        Now, open the <strong>bin</strong> folder inside the
        <strong>mysql</strong> folder in <strong>Windows PowerShell</strong>.
        You can do this by pressing and holding <strong>shift</strong> and
        <strong>right-clicking</strong> the folder. In the context menu, it will
        give you an option saying <strong>Open PowerShell window here</strong>.
      </p>
      <img
        src="~/assets/images/article/14/backend14-3.png"
        alt="Initialize MySQL"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Enter the following two commands in the PowerShell window.
      </p>
      <CodeSnippet
        :code="`./mysqld.exe --initialize-insecure
./mysqld.exe`"
        lang="language-powershell"
      />
      <p>
        The first command will initialize the data directory without a root
        password. The second command will start the MySQL server. Now, let's
        access our MySQL installation using the command-line client.<br /><br />
        Leave this window running and open another PowerShell window in the same
        directory. Then, run the following command. Notice this time it's
        <strong>mysql</strong> and not <strong>mysqld</strong>.
      </p>
      <CodeSnippet :code="`./mysql.exe -u root`" lang="language-powershell" />
      <p>
        You will log in to MySQL as the root user. Before creating any new
        databases, we should set a password for the root user.
      </p>
      <img
        src="~/assets/images/article/14/backend14-4.png"
        alt="Set the root password"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Enter the following command in MySQL. Replace
        <strong>root-password</strong> with any password of your choice.
      </p>
      <CodeSnippet
        :code="`ALTER USER 'root'@'localhost' IDENTIFIED BY 'root-password';`"
        lang="language-sql"
      />
      <p>
        Now, exit MySQL by typing <strong>exit</strong> and login again using
        the new password.
      </p>
      <CodeSnippet
        :code="`./mysql.exe -u root -p`"
        lang="language-powershell"
      />
      <p>
        You will be prompted for the root password. We are now ready to play
        around with SQL.<br />
        Type the following SQL queries in command line.
      </p>
      <CodeSnippet
        :code="`CREATE DATABASE classroom;
USE classroom;
CREATE TABLE student (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), marks TINYINT UNSIGNED);
INSERT INTO student (name, marks) VALUES ('Ryan Smith', 25), ('James Adams', 33), ('Jeremy Williams', 29);`"
        lang="language-sql"
      />
      <p>Now, we have created a database "classroom" and a table "student".</p>
      <img
        src="~/assets/images/article/14/backend14-5.png"
        alt="Set the root password"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Let's see the contents of the <strong>student</strong> table. Enter
        these SQL queries.
      </p>
      <CodeSnippet
        :code="`SELECT * FROM student;
DELETE FROM student WHERE name = &quot;James Adams&quot;;
SELECT * FROM student;`"
        lang="language-sql"
      />
      <p>
        We deleted a row using the <strong>DELETE</strong> query. Now, our table
        looks like this.
      </p>
      <img
        src="~/assets/images/article/14/backend14-6.png"
        alt="Set the root password"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        And there you go! Our MySQL installation works like a charm. It's also
        easy to upgrade to a newer version later. Just extract the new ZIP
        archive and create an option file like this one while referring to the
        same data directory.<br /><br />
        We have installed MySQL in Windows in the simplest way possible. Now,
        why not play around with some SQL queries on your own?
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "backend16",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "Basics of MySQL | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "We will learn the basics behind MySQL. After learning these, you will be able to create dynamic web applications.",
      },
    ],
  },
};
</script>