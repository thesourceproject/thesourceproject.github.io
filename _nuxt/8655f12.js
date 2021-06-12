(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{221:function(e,t,n){e.exports=n.p+"img/backend14-1.5077d93.png"},222:function(e,t,n){e.exports=n.p+"img/backend14-2.464b828.png"},223:function(e,t,n){e.exports=n.p+"img/backend14-3.c00ba23.png"},224:function(e,t,n){e.exports=n.p+"img/backend14-4.c598279.png"},225:function(e,t,n){e.exports=n.p+"img/backend14-5.4474b4d.png"},226:function(e,t,n){e.exports=n.p+"img/backend14-6.97bb74e.png"},248:function(e,t,n){"use strict";n.r(t);var o=n(110),r=n(111),l={name:"backend14",components:{ArticleHeader:o.default,CodeSnippet:r.default},head:{title:"Installing MySQL on Windows | The Source Project",meta:[{hid:"description",name:"description",content:"If you are starting with backend development or just want to dabble in SQL, you need to understand databases. In this tutorial, we will learn how to install the world's most popular database on Windows."}]}},d=n(8),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("article",{staticClass:"w-full max-w-4xl mx-auto flex flex-col"},[o("ArticleHeader",{attrs:{title:"Installing MySQL on Windows",date:"11 Jun '21",readTime:"5 min read",tags:["backend","database","sql","mysql","windows","beginner"]}}),e._v(" "),o("p",[e._v("\n        If you are starting with backend development or just want to dabble in\n        SQL, you need to understand databases. In this tutorial, we will learn\n        how to install the world's most popular database on Windows.\n      ")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(221),alt:"Download MySQL Community Server"}}),e._v(" "),e._m(2),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(222),alt:"Create the option file name my.ini"}}),e._v(" "),e._m(3),e._v(" "),o("CodeSnippet",{attrs:{code:"[mysqld]\n# set basedir to your installation path\nbasedir=E:/mysql\n# set datadir to the location of your data directory\ndatadir=E:/mydata/data",lang:"language-ini"}}),e._v(" "),e._m(4),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(223),alt:"Initialize MySQL"}}),e._v(" "),o("p",{staticClass:"mt-6"},[e._v("\n        Enter the following two commands in the PowerShell window.\n      ")]),e._v(" "),o("CodeSnippet",{attrs:{code:"./mysqld.exe --initialize-insecure\n./mysqld.exe",lang:"language-powershell"}}),e._v(" "),e._m(5),e._v(" "),o("CodeSnippet",{attrs:{code:"./mysql.exe -u root",lang:"language-powershell"}}),e._v(" "),o("p",[e._v("\n        You will log in to MySQL as the root user. Before creating any new\n        databases, we should set a password for the root user.\n      ")]),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(224),alt:"Set the root password"}}),e._v(" "),e._m(6),e._v(" "),o("CodeSnippet",{attrs:{code:"ALTER USER 'root'@'localhost' IDENTIFIED BY 'root-password';",lang:"language-sql"}}),e._v(" "),e._m(7),e._v(" "),o("CodeSnippet",{attrs:{code:"./mysql.exe -u root -p",lang:"language-powershell"}}),e._v(" "),e._m(8),e._v(" "),o("CodeSnippet",{attrs:{code:"CREATE DATABASE classroom;\nUSE classroom;\nCREATE TABLE student (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), marks TINYINT UNSIGNED);\nINSERT INTO student (name, marks) VALUES ('Ryan Smith', 25), ('James Adams', 33), ('Jeremy Williams', 29);",lang:"language-sql"}}),e._v(" "),o("p",[e._v('Now, we have created a database "classroom" and a table "student".')]),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(225),alt:"Set the root password"}}),e._v(" "),e._m(9),e._v(" "),o("CodeSnippet",{attrs:{code:'SELECT * FROM student;\nDELETE FROM student WHERE name = "James Adams";\nSELECT * FROM student;',lang:"language-sql"}}),e._v(" "),e._m(10),e._v(" "),o("img",{staticClass:"mx-auto mt-6 max-w-full",attrs:{src:n(226),alt:"Set the root password"}}),e._v(" "),e._m(11)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-12 flex flex-col"},[n("h2",{staticClass:"text-2xl"},[e._v("Getting Started")]),e._v(" "),n("div",{staticClass:"w-6 h-1 bg-background-2 rounded-full"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-8"},[e._v("\n        MySQL also comes with an installer that can simplify the process though\n        I prefer to use the ZIP archive as it offers more flexibility and can\n        easily be upgraded or removed."),n("br"),n("br"),e._v("\n        Download MySQL Community Server from the\n        "),n("a",{staticClass:"text-text-3 hover:underline focus:underline focus:outline-none",attrs:{rel:"noopener noreferrer",href:"https://dev.mysql.com/downloads/mysql/",target:"_blank"}},[e._v("official website")]),e._v(". Look for "),n("strong",[e._v("Windows (x86, 64-bit), ZIP Archive")]),e._v(" under\n        "),n("strong",[e._v("Other Downloads")]),e._v("."),n("br"),e._v("\n        At the time of writing this article, the latest version available is\n        "),n("strong",[e._v("8.0.25")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        Extract this ZIP archive and create an option file named\n        "),n("strong",[e._v("my.ini")]),e._v(" in it. Then, create an empty directory\n        "),n("strong",[e._v("data")]),e._v(" anywhere on your system.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        Now, open the\n        "),n("strong",[e._v("my.ini")]),e._v(" file using notepad or any other text editor and\n        paste the following.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Don't forget to replace the above paths with the actual ones. Here,\n        "),n("em",[e._v("basedir")]),e._v(" refers to the location where you extracted the ZIP\n        archive."),n("br"),e._v(" "),n("strong",[e._v("Note")]),e._v(" - You can shorten the name of your extracted\n        folder to just "),n("strong",[e._v("mysql")]),e._v(" as in the example. It can make it\n        easier to access it using the command line."),n("br"),n("br"),e._v("\n        Now, open the "),n("strong",[e._v("bin")]),e._v(" folder inside the\n        "),n("strong",[e._v("mysql")]),e._v(" folder in "),n("strong",[e._v("Windows PowerShell")]),e._v(".\n        You can do this by pressing and holding "),n("strong",[e._v("shift")]),e._v(" and\n        "),n("strong",[e._v("right-clicking")]),e._v(" the folder. In the context menu, it will\n        give you an option saying "),n("strong",[e._v("Open PowerShell window here")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        The first command will initialize the data directory without a root\n        password. The second command will start the MySQL server. Now, let's\n        access our MySQL installation using the command-line client."),n("br"),n("br"),e._v("\n        Leave this window running and open another PowerShell window in the same\n        directory. Then, run the following command. Notice this time it's\n        "),n("strong",[e._v("mysql")]),e._v(" and not "),n("strong",[e._v("mysqld")]),e._v(".\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        Enter the following command in MySQL. Replace\n        "),n("strong",[e._v("root-password")]),e._v(" with any password of your choice.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        Now, exit MySQL by typing "),n("strong",[e._v("exit")]),e._v(" and login again using\n        the new password.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        You will be prompted for the root password. We are now ready to play\n        around with some SQL."),n("br"),e._v("\n        Type the following SQL queries in command line.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        Let's see the contents of the "),n("strong",[e._v("student")]),e._v(" table. Enter\n        these SQL queries.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        We deleted a row using the "),n("strong",[e._v("DELETE")]),e._v(" query. Now, our table\n        looks like this.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-6"},[e._v("\n        We can see that our MySQL installation works like a charm. It's also\n        easy to upgrade to a newer version later. Just extract the new ZIP\n        archive and create an option file like this one while referring to the\n        same data directory."),n("br"),n("br"),e._v("\n        We have installed MySQL in Windows in the simplest way possible. Now,\n        why not play around with some SQL queries on your own?\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ArticleHeader:n(110).default,CodeSnippet:n(111).default})}}]);