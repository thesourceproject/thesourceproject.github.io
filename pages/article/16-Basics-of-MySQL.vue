<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="Basics of MySQL"
        date="4 Jul '21"
        readTime="25 min read"
        :tags="['backend', 'database', 'sql', 'mysql', 'beginner']"
      />
      <p>
        We will learn the basics behind MySQL. After learning these, you will be
        able to create dynamic web applications. Even if you prefer other SQL
        databases such as MariaDB or PostgreSQL, this tutorial will be helpful
        as the difference between them is mostly syntactical.
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
        Before diving into SQL, we need to plan our database first which
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
        guessed, the <em>head</em> column of <em>department</em> is a foreign
        key that refers to the primary key of <em>employee</em>. But what is a
        primary key?<br /><br />
        In simple words, a primary key is a column or a group of columns that
        can uniquely identify a row. Because it can refer to exactly 1 row, it
        needs to be unique. For example, if all employees are guaranteed to have
        a different email address, it may be used as a primary key.<br /><br />
        However, it is not considered the best practice to use values that
        describe the data. This is why we will use an integer <em>id</em> which
        will auto-increment starting from 1, thus ensuring uniqueness. Also,
        because the number itself contains no data, it will never need to change
        later.<br /><br />
        Enough theory. It's time to code. Let's start by creating our database.
      </p>
      <CodeSnippet
        :code="`CREATE DATABASE company;
USE company;`"
        lang="language-sql"
      />
      <p>
        This will create a new database named <em>company</em> and make it
        active.<br /><br />
        Now we need to create our tables and select the appropriate data type
        for each column. This is similar to selecting data types for variables
        in programming viz. by considering its possible values.<br /><br />
        You can refer to the
        <a
          rel="noopener noreferrer"
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://dev.mysql.com/doc/refman/8.0/en/data-types.html"
          target="_blank"
          >official website</a
        >
        for a complete list of data types.
      </p>
      <CodeSnippet
        :code="`CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
phone VARCHAR(15) NOT NULL,
date_of_birth DATE NOT NULL,
joining DATE NOT NULL DEFAULT (CURRENT_DATE)
);`"
        lang="language-sql"
      />
      <p>
        We have created a new table <em>employee</em> with the following
        columns.
      </p>
      <ul class="mt-2 list-inside list-disc">
        <li>
          id - an integer value that will auto-increment from 1. This will be
          our primary key. <em>NOT NULL</em> ensures that a field is required.
        </li>
        <li>name - a variable-length string with a maximum length of 50.</li>
        <li>
          email - similar to name but with a
          <em>UNIQUE</em> constraint so that no two employees can share the same
          email address.
        </li>
        <li>
          phone - it is possible for phone numbers to have special characters
          like '+'. So they are stored as strings and not integers.
        </li>
        <li>
          date_of_birth - the <em>DATE</em> data type stores dates in
          'YYYY‑MM‑DD' format.
        </li>
        <li>
          joining - the <em>DEFAULT</em> constraint sets a default value for
          this field if it is not given. In this case, the current date.
        </li>
      </ul>
      <p class="mt-6">
        Now we will create our second table <em>department</em>. But first,
        let's understand foreign keys.<br /><br />
        A foreign key is a column or group of columns that refer to the primary
        key of another table. This is one of the main benefits of relational
        databases as it helps in reducing data duplication.<br /><br />
        In our case, each department has a head who is an employee. Instead of
        duplicating all of the employee details in <em>department</em>, we can
        refer to that employee using a foreign key. Later, if the head of a
        department changes, we only need to change the foreign key to refer to
        another employee, thus saving time.
      </p>
      <CodeSnippet
        :code="`CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
location VARCHAR(50) NOT NULL,
date_established DATE NOT NULL DEFAULT (CURRENT_DATE),
head INT,
FOREIGN KEY (head) REFERENCES employee(id) ON DELETE SET NULL
);`"
        lang="language-sql"
      />
      <p>We have created a new table employee with the following columns.</p>
      <ul class="mt-2 list-inside list-disc">
        <li>
          id, name, location, date_established - these are similar to our
          previous table.
        </li>
        <li>
          head - this will be our foreign key. It has the same data type as the
          column it is referring to. We've also specified an action to take if
          its referred row gets deleted. In our case, if the head employee gets
          deleted from the <em>employee</em> table, the department's head will
          be set to <em>NULL</em>. This will ensure that there are no references
          to non-existent employees.
        </li>
      </ul>
      <p class="mt-6">
        <strong>Notice</strong> - The order of creation of tables is important.
        The parent table must be created before the child table. Here, the
        <em>department</em> table is the child table as it has a foreign key
        referring to <em>employee</em>.<br />
        Also, as a result, circular dependencies cannot exist.<br /><br />
        Our tables are ready to be filled with data. Let's start with
        <em>employee</em>.
      </p>
      <CodeSnippet
        :code="`INSERT INTO employee (name, email, phone, date_of_birth) VALUES
(&quot;John Smith&quot;, &quot;johnsmith@mail.com&quot;, &quot;12345&quot;, &quot;1985-11-02&quot;),
(&quot;Mike Walker&quot;, &quot;mikewalker@mail.com&quot;, &quot;24613&quot;, &quot;1989-02-12&quot;),
(&quot;Steve Simpson&quot;, &quot;stevesimpson@mail.com&quot;, &quot;11472&quot;, &quot;1972-05-25&quot;),
(&quot;Jack Robinson&quot;, &quot;jackrobinson@mail.com&quot;, &quot;27465&quot;, &quot;1991-09-18&quot;);`"
        lang="language-sql"
      />
      <p>
        The stored data can be seen using the <em>SELECT</em> command. You can
        also retrieve specific columns by mentioning the column names.
      </p>
      <CodeSnippet
        :code="`SELECT * FROM employee;
SELECT id, name, email FROM employee;`"
        lang="language-sql"
      />
      <p>
        The <em>id</em> field does not need to be inserted and increments
        automatically.
      </p>
      <img
        src="~/assets/images/article/16/backend16-2.png"
        alt="Create the option file name my.ini"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        We can filter rows using the <em>WHERE</em> clause with a condition.
      </p>
      <CodeSnippet
        :code="`SELECT * FROM employee WHERE id > 1;`"
        lang="language-sql"
      />
      <p>
        Now, let's create some departments. In the <em>head</em> column, we will
        insert the <em>id</em> of the employee that we want to refer to. For
        example, to make <em>John Smith</em> the head of <em>Research</em>, we
        will use his employee id i.e. 1.
      </p>
      <CodeSnippet
        :code="`INSERT INTO department (name, location, date_established, head) VALUES
(&quot;Research&quot;, &quot;Portland, Oregon&quot;, &quot;2010-07-21&quot;, 1),
(&quot;Human Resources&quot;, &quot;Jacksonville, Florida&quot;, &quot;2011-03-02&quot;, 3);`"
        lang="language-sql"
      />
      <p>Let's look at rows of <em>department</em>.</p>
      <img
        src="~/assets/images/article/16/backend16-3.png"
        alt="Create the option file name my.ini"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        We can only see the employee id in the <em>head</em> column. So, how can
        we retrieve the details of the employee that is being referred?<br /><br />
        The <em>JOIN</em> clause. This is one of the most powerful features of
        RDBMS. The <em>JOIN</em> clause compares every row from the first table
        with every row from the second table based on some condition known as
        the predicate.<br /><br />
        Here, we want to join the two tables and only retrieve the rows where
        the <em>id</em> value of <em>employee</em> is equal to the
        <em>head</em> value of <em>department</em>.
      </p>
      <CodeSnippet
        :code="`SELECT * FROM department JOIN employee ON department.head = employee.id;
SELECT department.name, location, employee.name, phone FROM department JOIN employee ON department.head = employee.id;`"
        lang="language-sql"
      />
      <p>
        Once again, we can specify the columns we want to retrieve. Keep in
        mind, when a column name is same in both the joined tables, we also
        specify the table name.
      </p>
      <img
        src="~/assets/images/article/16/backend16-4.png"
        alt="Create the option file name my.ini"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Rows can be deleted using the <em>DELETE</em> command combined with the
        <em>WHERE</em> clause. Don't forget to specify the condition, or else
        you may end up deleting every row of the table.
      </p>
      <CodeSnippet
        :code="`DELETE FROM employee WHERE id = 4;`"
        lang="language-sql"
      />
      <p>
        The <em>UPDATE</em> command is used to update rows in a table. The
        <em>WHERE</em> clause is used to specify the row/rows. Just like
        <em>DELETE</em>, use this command carefully.
      </p>
      <CodeSnippet
        :code="`UPDATE department SET date_established = &quot;2010-09-19&quot; WHERE id = 2;`"
        lang="language-sql"
      />
      <p>
        We've covered the absolute basics of MySQL. There is a lot more to learn
        about databases, but it's going to be a much easier journey from here
        on.<br />
        Try to experiment with SQL on your own and come up with databases for
        different real-life use cases.
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