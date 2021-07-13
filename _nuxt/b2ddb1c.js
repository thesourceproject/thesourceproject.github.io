(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{230:function(e,t,n){e.exports=n.p+"img/backend16-1.8ab22dc.png"},231:function(e,t,n){e.exports=n.p+"img/backend16-2.943beb6.png"},232:function(e,t,n){e.exports=n.p+"img/backend16-3.6e2af07.png"},233:function(e,t,n){e.exports=n.p+"img/backend16-4.130714e.png"},257:function(e,t,n){"use strict";n.r(t);var o=n(110),r=n(111),l={name:"backend16",components:{ArticleHeader:o.default,CodeSnippet:r.default},head:{title:"Basics of MySQL | The Source Project",meta:[{hid:"description",name:"description",content:"We will learn the basics behind MySQL. After learning these, you will be able to create dynamic web applications."}]}},m=n(8),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[o("ArticleHeader",{attrs:{title:"Basics of MySQL",date:"4 Jul '21",readTime:"25 min read",tags:["backend","database","sql","mysql","beginner"]}}),e._v(" "),o("p",[e._v("\n        We will learn the basics behind MySQL. After learning these, you will be\n        able to create dynamic web applications. Even if you prefer other SQL\n        databases such as MariaDB or PostgreSQL, this tutorial will be helpful\n        as the difference between them is mostly syntactical.\n      ")]),e._v(" "),e._m(0),e._v(" "),o("p",{staticClass:"mt-8"},[e._v("\n        If you haven't installed MySQL yet, refer to our\n        "),o("NuxtLink",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{to:"/article/14-Installing-MySQL-on-Windows"}},[e._v("previous tutorial")]),e._v("."),o("br"),o("br"),e._v("\n        We will cover the following in this tutorial.\n      ")],1),e._v(" "),e._m(1),e._v(" "),o("p",{staticClass:"mt-6"},[e._v("\n        Before diving into SQL, we need to plan our database first which\n        includes the tables along with their respective columns any relations.\n      ")]),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(230),alt:"Set the root password"}}),e._v(" "),e._m(2),e._v(" "),o("CodeSnippet",{attrs:{code:"CREATE DATABASE company;\nUSE company;",lang:"language-sql"}}),e._v(" "),e._m(3),e._v(" "),o("CodeSnippet",{attrs:{code:"CREATE TABLE employee (\nid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\nname VARCHAR(50) NOT NULL,\nemail VARCHAR(50) NOT NULL UNIQUE,\nphone VARCHAR(15) NOT NULL,\ndate_of_birth DATE NOT NULL,\njoining DATE NOT NULL DEFAULT (CURRENT_DATE)\n);",lang:"language-sql"}}),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),o("CodeSnippet",{attrs:{code:"CREATE TABLE department (\nid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\nname VARCHAR(50) NOT NULL UNIQUE,\nlocation VARCHAR(50) NOT NULL,\ndate_established DATE NOT NULL DEFAULT (CURRENT_DATE),\nhead INT,\nFOREIGN KEY (head) REFERENCES employee(id) ON DELETE SET NULL\n);",lang:"language-sql"}}),e._v(" "),o("p",[e._v("We have created a new table employee with the following columns.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),o("CodeSnippet",{attrs:{code:'INSERT INTO employee (name, email, phone, date_of_birth) VALUES\n("John Smith", "johnsmith@mail.com", "12345", "1985-11-02"),\n("Mike Walker", "mikewalker@mail.com", "24613", "1989-02-12"),\n("Steve Simpson", "stevesimpson@mail.com", "11472", "1972-05-25"),\n("Jack Robinson", "jackrobinson@mail.com", "27465", "1991-09-18");',lang:"language-sql"}}),e._v(" "),e._m(9),e._v(" "),o("CodeSnippet",{attrs:{code:"SELECT * FROM employee;\nSELECT id, name, email FROM employee;",lang:"language-sql"}}),e._v(" "),e._m(10),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(231),alt:"Create the option file name my.ini"}}),e._v(" "),e._m(11),e._v(" "),o("CodeSnippet",{attrs:{code:"SELECT * FROM employee WHERE id > 1;",lang:"language-sql"}}),e._v(" "),e._m(12),e._v(" "),o("CodeSnippet",{attrs:{code:'INSERT INTO department (name, location, date_established, head) VALUES\n("Research", "Portland, Oregon", "2010-07-21", 1),\n("Human Resources", "Jacksonville, Florida", "2011-03-02", 3);',lang:"language-sql"}}),e._v(" "),e._m(13),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(232),alt:"Create the option file name my.ini"}}),e._v(" "),e._m(14),e._v(" "),o("CodeSnippet",{attrs:{code:"SELECT * FROM department JOIN employee ON department.head = employee.id;\nSELECT department.name, location, employee.name, phone FROM department JOIN employee ON department.head = employee.id;",lang:"language-sql"}}),e._v(" "),o("p",[e._v("\n        Once again, we can specify the columns we want to retrieve. Keep in\n        mind, when a column name is same in both the joined tables, we also\n        specify the table name.\n      ")]),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(233),alt:"Create the option file name my.ini"}}),e._v(" "),e._m(15),e._v(" "),o("CodeSnippet",{attrs:{code:"DELETE FROM employee WHERE id = 4;",lang:"language-sql"}}),e._v(" "),e._m(16),e._v(" "),o("CodeSnippet",{attrs:{code:'UPDATE department SET date_established = "2010-09-19" WHERE id = 2;',lang:"language-sql"}}),e._v(" "),e._m(17)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-12 flex flex-col"},[n("h2",{staticClass:"text-2xl"},[e._v("Getting Started")]),e._v(" "),n("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mt-2 list-inside list-disc"},[n("li",[e._v("How to create databases and tables.")]),e._v(" "),n("li",[e._v("Data types in SQL.")]),e._v(" "),n("li",[e._v("Performing CRUD(create/read/update/delete) operations.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        We can see in our "),n("em",[e._v("company")]),e._v(" database that there are 2 tables\n        named "),n("em",[e._v("employee")]),e._v(" and "),n("em",[e._v("department")]),e._v(". As you might have\n        guessed, the "),n("em",[e._v("head")]),e._v(" column of "),n("em",[e._v("department")]),e._v(" is a foreign\n        key that refers to the primary key of "),n("em",[e._v("employee")]),e._v(". But what is a\n        primary key?"),n("br"),n("br"),e._v("\n        In simple words, a primary key is a column or a group of columns that\n        can uniquely identify a row. Because it can refer to exactly 1 row, it\n        needs to be unique. For example, if all employees are guaranteed to have\n        a different email address, it may be used as a primary key."),n("br"),n("br"),e._v("\n        However, it is not considered the best practice to use values that\n        describe the data. This is why we will use an integer "),n("em",[e._v("id")]),e._v(" which\n        will auto-increment starting from 1, thus ensuring uniqueness. Also,\n        because the number itself contains no data, it will never need to change\n        later."),n("br"),n("br"),e._v("\n        Enough theory. It's time to code. Let's start by creating our database.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        This will create a new database named "),n("em",[e._v("company")]),e._v(" and make it\n        active."),n("br"),n("br"),e._v("\n        Now we need to create our tables and select the appropriate data type\n        for each column. This is similar to selecting data types for variables\n        in programming viz. by considering its possible values."),n("br"),n("br"),e._v("\n        You can refer to the\n        "),n("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{rel:"noopener noreferrer",href:"https://dev.mysql.com/doc/refman/8.0/en/data-types.html",target:"_blank"}},[e._v("official website")]),e._v("\n        for a complete list of data types.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We have created a new table "),n("em",[e._v("employee")]),e._v(" with the following\n        columns.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mt-2 list-inside list-disc"},[n("li",[e._v("\n          id - an integer value that will auto-increment from 1. This will be\n          our primary key. "),n("em",[e._v("NOT NULL")]),e._v(" ensures that a field is required.\n        ")]),e._v(" "),n("li",[e._v("name - a variable-length string with a maximum length of 50.")]),e._v(" "),n("li",[e._v("\n          email - similar to name but with a\n          "),n("em",[e._v("UNIQUE")]),e._v(" constraint so that no two employees can share the same\n          email address.\n        ")]),e._v(" "),n("li",[e._v("\n          phone - it is possible for phone numbers to have special characters\n          like '+'. So they are stored as strings and not integers.\n        ")]),e._v(" "),n("li",[e._v("\n          date_of_birth - the "),n("em",[e._v("DATE")]),e._v(" data type stores dates in\n          'YYYY‑MM‑DD' format.\n        ")]),e._v(" "),n("li",[e._v("\n          joining - the "),n("em",[e._v("DEFAULT")]),e._v(" constraint sets a default value for\n          this field if it is not given. In this case, the current date.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        Now we will create our second table "),n("em",[e._v("department")]),e._v(". But first,\n        let's understand foreign keys."),n("br"),n("br"),e._v("\n        A foreign key is a column or group of columns that refer to the primary\n        key of another table. This is one of the main benefits of relational\n        databases as it helps in reducing data duplication."),n("br"),n("br"),e._v("\n        In our case, each department has a head who is an employee. Instead of\n        duplicating all of the employee details in "),n("em",[e._v("department")]),e._v(", we can\n        refer to that employee using a foreign key. Later, if the head of a\n        department changes, we only need to change the foreign key to refer to\n        another employee, thus saving time.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mt-2 list-inside list-disc"},[n("li",[e._v("\n          id, name, location, date_established - these are similar to our\n          previous table.\n        ")]),e._v(" "),n("li",[e._v("\n          head - this will be our foreign key. It has the same data type as the\n          column it is referring to. We've also specified an action to take if\n          its referred row gets deleted. In our case, if the head employee gets\n          deleted from the "),n("em",[e._v("employee")]),e._v(" table, the department's head will\n          be set to "),n("em",[e._v("NULL")]),e._v(". This will ensure that there are no references\n          to non-existent employees.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[n("strong",[e._v("Notice")]),e._v(" - The order of creation of tables is important.\n        The parent table must be created before the child table. Here, the\n        "),n("em",[e._v("department")]),e._v(" table is the child table as it has a foreign key\n        referring to "),n("em",[e._v("employee")]),e._v("."),n("br"),e._v("\n        Also, as a result, circular dependencies cannot exist."),n("br"),n("br"),e._v("\n        Our tables are ready to be filled with data. Let's start with\n        "),n("em",[e._v("employee")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        The stored data can be seen using the "),n("em",[e._v("SELECT")]),e._v(" command. You can\n        also retrieve specific columns by mentioning the column names.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        The "),n("em",[e._v("id")]),e._v(" field does not need to be inserted and increments\n        automatically.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        We can filter rows using the "),n("em",[e._v("WHERE")]),e._v(" clause with a condition.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Now, let's create some departments. In the "),n("em",[e._v("head")]),e._v(" column, we will\n        insert the "),n("em",[e._v("id")]),e._v(" of the employee that we want to refer to. For\n        example, to make "),n("em",[e._v("John Smith")]),e._v(" the head of "),n("em",[e._v("Research")]),e._v(", we\n        will use his employee id i.e. 1.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Let's look at rows of "),n("em",[e._v("department")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        We can only see the employee id in the "),n("em",[e._v("head")]),e._v(" column. So, how can\n        we retrieve the details of the employee that is being referred?"),n("br"),n("br"),e._v("\n        The "),n("em",[e._v("JOIN")]),e._v(" clause. This is one of the most powerful features of\n        RDBMS. The "),n("em",[e._v("JOIN")]),e._v(" clause compares every row from the first table\n        with every row from the second table based on some condition known as\n        the predicate."),n("br"),n("br"),e._v("\n        Here, we want to join the two tables and only retrieve the rows where\n        the "),n("em",[e._v("id")]),e._v(" value of "),n("em",[e._v("employee")]),e._v(" is equal to the\n        "),n("em",[e._v("head")]),e._v(" value of "),n("em",[e._v("department")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        Rows can be deleted using the "),n("em",[e._v("DELETE")]),e._v(" command combined with the\n        "),n("em",[e._v("WHERE")]),e._v(" clause. Don't forget to specify the condition, or else\n        you may end up deleting every row of the table.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        The "),n("em",[e._v("UPDATE")]),e._v(" command is used to update rows in a table. The\n        "),n("em",[e._v("WHERE")]),e._v(" clause is used to specify the row/rows. Just like\n        "),n("em",[e._v("DELETE")]),e._v(", use this command carefully.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We've covered the absolute basics of MySQL. There is a lot more to learn\n        about databases, but it's going to be a much easier journey from here\n        on."),n("br"),e._v("\n        Try to experiment with SQL on your own and come up with databases for\n        different real-life use cases.\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(110).default,CodeSnippet:n(111).default})}}]);