<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="LeetCode #6 ZigZag Conversion"
        date="17 Jun '21"
        readTime="10 min read"
        :tags="[
          'competitive',
          'data',
          'structures',
          'algorithms',
          'java',
          'python',
          'intermediate',
        ]"
      />
      <p>
        Check out
        <a
          rel="noopener noreferrer"
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://leetcode.com/problems/zigzag-conversion/"
          target="_blank"
          >this</a
        >
        problem on LeetCode.
      </p>
      <a
        rel="noopener noreferrer"
        title="LeetCode, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:LeetCode_Logo_black_with_text.svg"
        target="_blank"
        class="mx-auto mt-6 p-6 bg-white rounded-2xl"
        ><img
          alt="LeetCode Logo black with text"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/640px-LeetCode_Logo_black_with_text.svg.png"
          class="w-96"
      /></a>
      <p class="mt-6">
        The string <strong>"PAYPALISHIRING"</strong> is written in a zigzag
        pattern on a given number of rows like this: (you may want to display
        this pattern in a fixed font for better legibility)
      </p>
      <CodeSnippet
        code="P   A   H   N
A P L S I I G
Y   I   R"
        lang="language-none"
      />
      <p>
        And then read line by line: <strong>"PAHNAPLSIIGYIR"</strong><br />
        Write the code that will take a string and make this conversion given a
        number of rows:
      </p>
      <CodeSnippet
        code="string convert(string s, int numRows);"
        lang="language-none"
      />
      <p>
        <strong class="text-lg">Example 1:</strong><br />
        <strong>Input:</strong> s = "PAYPALISHIRING", numRows = 3<br />
        <strong>Output:</strong> "PAHNAPLSIIGYIR"<br /><br />
        <strong class="text-lg">Example 2:</strong><br />
        <strong>Input:</strong> s = "PAYPALISHIRING", numRows = 4<br />
        <strong>Output:</strong> "PINALSIGYAHRPI"<br />
        <strong>Explanation:</strong>
      </p>
      <CodeSnippet
        code="P     I     N
A   L S   I G
Y A   H R
P     I"
        lang="language-none"
      />
      <p>
        <strong class="text-lg">Example 3:</strong><br />
        <strong>Input:</strong> s = "A", numRows = 1<br />
        <strong>Output:</strong> "A"<br /><br />
        <strong class="text-lg">Constraints:</strong>
      </p>
      <ul class="list-disc list-inside">
        <li>1 &lt;= s.length &lt;= 1000</li>
        <li>
          <strong>s</strong> consists of English letters (lower-case and
          upper-case), <strong>' , '</strong> and <strong>' . '</strong>.
        </li>
        <li>1 &lt;= numRows &lt;= 1000</li>
      </ul>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        We are given a string
        <strong>s</strong> and <strong>numRows</strong> i.e. number of rows in
        the zigzag. The problem wants us to return a string representing
        <strong>s</strong>'s zigzag form row-wise.<br />
        There are multiple approaches to this problem. Many of them involve
        using extra space apart from what is required to store the output. Here,
        we will discuss an algorithm that uses simple arithmetic to achieve our
        goal.<br /><br />
        Before getting to the actual problem, we will first cover the base case,
        i.e. when <strong>numRows</strong> is 1. Meaning, there is a single row
        and the zigzag will be identical to <strong>s</strong>. In this case, we
        will return <strong>s</strong> directly.<br /><br />
        Now, let's take an example.
      </p>
      <img
        src="~/assets/images/article/15/competitive15-1.png"
        alt="Zigzag String"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Now, we should notice the top row of the zigzag carefully. We can see
        that the first row contains characters separated by a constant number.
        But what is that number?<br />
        From <strong>A</strong> to <strong>I</strong>, we go down and up 4 times
        to return to the same row. If <strong>numRows</strong> was 10. We would
        go down and up 9 times to reach the next character of the top row.
      </p>
      <img
        src="~/assets/images/article/15/competitive15-2.png"
        alt="First and last rows"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        By this, we can derive that the jump distance between two characters in
        the first row is <strong>(numRows - 1) × 2</strong>.<br />
        The same applies to the bottom row. The only difference is the starting
        character.<br /><br />
        We have completed the easy part. Now, we need to find a way to derive
        the middle rows.
      </p>
      <img
        src="~/assets/images/article/15/competitive15-3.png"
        alt="Middle rows"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        Looking at the middle rows, we observe that the characters can be seen
        as pairs of equal gaps. The distance between <strong>B</strong> and
        <strong>H</strong> is the same as <strong>J</strong> and
        <strong>P</strong>.<br />
        In the zigzag traversal, we visit <strong>B</strong> going down and
        <strong>H</strong> when going up. It's the same for every pair in the
        same row. We need to calculate the gap in each pair of a row.<br /><br />
        On Row 1, We go down and back up 3 times.<br />
        On Row 2, We go down and back up 2 times.<br />
        On Row 3, We go down and back up 1 time.<br /><br />
        To complete a pair, we skip characters equal to twice the number of rows
        below it. For example, there are 2 rows below <strong>C</strong>, so we
        skip 4 characters to reach <strong>G</strong>. Therefore, the pair gap
        is equal to <strong>(numRows - 1 - Row</strong><sub>0-indexed</sub
        ><strong>) × 2</strong><br /><br />
        But how many characters should be skipped to reach the next pair?<br />
        We can observe that the gap between the first characters of consecutive
        pairs is the same as for the first and last rows, i.e.
        <strong>(numRows - 1) × 2</strong>.<br /><br />
        We have now understood the basic arithmetic needed to solve this
        problem. It's time to write the code for this.
      </p>
      <CodeSnippet
        code="// Java
public String convert(String s, int numRows) {
    if (numRows == 1) { // Base case.
        return s;
    }
    StringBuilder zigzag = new StringBuilder(); // To store the output.
    for (int i = 0; i < s.length(); i += (numRows - 1) * 2) {
        zigzag.append(s.charAt(i)); // Append the characters of the first row.
    }
    for (int r = 1; r < numRows - 1; ++r) { // Iterate for all the middle-rows.
        int i = r; // Starting character of each row
        while (true) {
            if (i >= s.length()) {
                break; // Break the loop if the character is out of bounds.
            }
            zigzag.append(s.charAt(i)); // Append the first character of the pair.
            if (i + (numRows - r - 1) * 2 >= s.length()) {
                break;
            }
            zigzag.append(s.charAt(i + (numRows - r - 1) * 2)); // Append the second character of the pair.
            i += (numRows - 1) * 2; // Skip over to the next pair.
        }
    }
    for (int i = numRows - 1; i < s.length(); i += (numRows - 1) * 2) {
        zigzag.append(s.charAt(i)); // Append the characters of the last row.
    }
    return zigzag.toString(); // Return the zigzag as a String.
}"
        lang="language-java"
      />
      <CodeSnippet
        code='# Python3
def convert(s, numRows):
    if (numRows == 1):  # Base case.
        return s
    zigzag = []
    for i in range(0, len(s), (numRows - 1) * 2):
        zigzag.append(s[i])  # Append the characters of the first row.
    for r in range(1, numRows - 1):
        i = r  # Starting character of each row
        while(True):
            if(i >= len(s)):
                break  # Break the loop if the character is out of bounds.
            zigzag.append(s[i])
            if(i + (numRows - r - 1) * 2 >= len(s)):
                break
            zigzag.append(s[i + (numRows - r - 1) * 2])  # Append the second character of the pair.
            i += (numRows - 1) * 2  # Skip over to the next pair.
    for i in range(numRows - 1, len(s), (numRows - 1) * 2):
        zigzag.append(s[i])  # Append the characters of the last row.
    return "".join(zigzag)  # Return the zigzag as a String.
'
        lang="language-python"
      />
      <p>
        This solution has the optimal <strong>O(n)</strong> time complexity. It
        also uses <strong>O(n)</strong> extra space for the
        <em>zigzag</em> StringBuilder/List object.<br /><br />
        Hooray! You've solved one more problem. Now go and try some more.
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "competitive13",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title: "LeetCode #6 ZigZag Conversion | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          'Check out this problem on LeetCode. The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:',
      },
    ],
  },
};
</script>