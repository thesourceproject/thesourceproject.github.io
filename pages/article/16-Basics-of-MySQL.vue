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
        If you haven't installed MySQL yet, refer to our
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/14-Installing-MySQL-on-Windows"
          >previous tutorial</NuxtLink
        >.<br /><br />
        We will cover the following in this tutorial.
      </p>
      <ul class="mt-2 list-inside list-disc">
        <li>How to create databases and tables.</li>
        <li>Data types in SQL.</li>
        <li>Performing CRUD(create/read/update/delete) operations.</li>
      </ul>
      <p class="mt-6">
        Before diving into to SQL, we need to plan our database first. This
        includes the tables along with their respective columns any relations.
      </p>
      <img
        src="~/assets/images/article/16/backend16-1.png"
        alt="Set the root password"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        We can see in our <em>company</em> database that there are 2 tables
        named <em>employee</em> and <em>department</em>. As you might have
        guessed, the <em>head</em> column of <em>department</em> is a
        foreign-key that refers to the primary key of
        <em>employee</em>.<br /><br />
        But what are primary and foreign keys?<br /><br />
        In simple words, primary key is a column or a group of columns that can
        uniquely identify a row of its table. Because a primary key can refer to
        exactly 1 row, it needs to be unique. For example, if all employees are
        guaranteed to have a different email address, it may be used as a
        primary key.<br /><br />
        However, it is not considered the best practice to use values that
        describe the data. This is why we will use an integer <em>id</em> which
        will auto-increment starting from 1, thus ensuring uniqueness. Also,
        because the number itself contains no data, it will never need to change
        later.
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