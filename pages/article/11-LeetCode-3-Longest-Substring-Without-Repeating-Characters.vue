<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="LeetCode #3 Longest Substring Without Repeating Characters"
        date="30 Mar '21"
        readTime="15 min read"
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
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          href="https://leetcode.com/problems/longest-substring-without-repeating-characters/"
          target="_blank"
          >this</a
        >
        problem on LeetCode.
      </p>
      <a
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
        Given a string <strong>s</strong>, find the length of the
        <strong>longest substring</strong> without repeating characters.<br /><br />
        <strong class="text-lg">Example 1:</strong><br />
        <strong>Input:</strong> s = "abcabcbb"<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The answer is "abc", with the length of
        3.<br /><br />
        <strong class="text-lg">Example 2:</strong><br />
        <strong>Input:</strong> s = "bbbbb"<br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> The answer is "b", with the length of
        1.<br /><br />
        <strong class="text-lg">Example 3:</strong><br />
        <strong>Input:</strong> s = "pwwkew"<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The answer is "wke", with the length of 3.
        Notice that the answer must be a substring, "pwke" is a subsequence and
        not a substring.<br /><br />
        <strong class="text-lg">Example 4:</strong><br />
        <strong>Input:</strong> s = ""<br />
        <strong>Output:</strong> 0<br /><br />
        <strong class="text-lg">Constraints:</strong>
      </p>
      <ul class="list-disc list-inside">
        <li>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></li>
        <li>
          <strong>s</strong> consists of English letters, digits, symbols and
          spaces.
        </li>
      </ul>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        A <strong>substring</strong> is a contiguous sequence of characters
        within a string. For example, <em>"cat"</em> is a substring of
        <em>"a cat jumps"</em>.<br />
        The brute-force approach is to try all possible substrings and find the
        ones without any repeating characters. Among these, we will return the
        length of the longest substring. Here, <strong>s</strong> can contain
        any ASCII character, and not just lower-case letters. Hence, we'll
        require an array of size 256.<br />
        <strong>Note</strong> - This tutorial assumes you have some basic
        understanding of Java and Python. You may refer to our
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          :to="{ path: '/find', query: { q: 'basics' } }"
          >previous tutorials</NuxtLink
        >
        before you continue.
      </p>
      <CodeSnippet
        code="// Java
public int lengthOfLongestSubstring(String s) {
    int maxLength = 0;
    for (int i = 0; i < s.length(); ++i) {
        for (int j = i + 1; j < s.length() + 1; ++j) {
            if (hasDistinctCharacters(s.substring(i, j))) { // Check if the substring of 's' from 'i' to 'j - 1' has distinct characters.
                maxLength = Math.max(maxLength, j - i); // Store this length if it's greater than 'maxLength'.
            }
        }
    }
    return maxLength;
}
boolean hasDistinctCharacters(String s) {
    boolean[] exists = new boolean[256];
    for (int i = 0; i < s.length(); ++i) {
        if (exists[s.charAt(i)]) { // Check whether this character has been encountered previously.
            return false;
        }
        exists[s.charAt(i)] = true; // Set the flag for this character to 'true'.
    }
    return true; // Default return value.
}"
        lang="language-java"
      />
      <CodeSnippet
        code="# Python3
def lengthOfLongestSubstring(s: str) -> int:
    maxLength = 0
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            if(hasDistinctCharacters(s[i:j])):  # Check if the substring of 's' from 'i' to 'j - 1' has distinct characters.
                maxLength = max(maxLength, j - i)  # Store this length if it's greater than 'maxLength'.
    return maxLength

def hasDistinctCharacters(s: str) -> bool:
    exists = [False] * 256
    for c in s:  # For every character 'c' in 's'.
        if(exists[ord(c)]):  # Check whether this character has been encountered previously.
            return False
        exists[ord(c)] = True  # Set the flag for this character to 'true'.
    return True  # Default return value."
        lang="language-python"
      />
      <p>
        At first glance, due to the two nested <em>for</em> loops, this solution
        appears to be <strong>O(n<sup>2</sup>)</strong>. But in fact, it is
        actually <strong>O(n<sup>3</sup>)</strong> because of the
        <strong>O(n)</strong> time taken by <em>hasDistinctCharacters()</em>.
        Also, it has a space complexity of <strong>O(n)</strong>, which is
        required to store a substring. This solution will exceed the time limit
        and won't be accepted.<br /><br />
        We can improve this solution slightly by checking the longer substrings
        first. This way, we can return the length of the first substring we
        encounter that has no repeating characters.
      </p>
      <CodeSnippet
        code="// Java
public int lengthOfLongestSubstring(String s) {
    for (int i = s.length(); i > 0; --i) { // 'i' is the length of the substring.
        for (int j = 0; j < s.length() - i + 1; ++j) { // 'j' is the starting index of the substring.
            if (hasDistinctCharacters(s.substring(j, j + i))) { // Check if the substring of 's' from 'j' to 'j + i - 1' has distinct characters.
                return i; // Return this length.
            }
        }
    }
    return 0; // Default return value.
}"
        lang="language-java"
      />
      <CodeSnippet
        code="# Python3
def lengthOfLongestSubstring(s: str) -> int:
    for i in range(len(s), 0, -1):  # 'i' is the length of the substring
        for j in range(len(s) - i + 1):  # 'j' is the starting index of the substring
            if(hasDistinctCharacters(s[j:j + i])):  # Check if the substring of 's' from 'j' to 'j + i - 1' has distinct characters.
                return i  # Return this length.
    return 0  # Default return value."
        lang="language-python"
      />
      <p>
        Although, this solution is definitely faster than the previous one, it
        still has the same time and space complexity. This is because, in the
        worst case(i.e. when the answer is 1) our solution will have to process
        every substring.<br /><br />
        By now, it is clear that the brute-force approach will not work. The
        constraints of the problem don't even allow an
        <strong>O(n<sup>2</sup>)</strong> solution, let alone an
        <strong>O(n<sup>3</sup>)</strong> one.<br />
        These types of problems are solved using the sliding window technique.
        But, what does it mean?
      </p>
      <img
        src="~/assets/images/article/11/competitive11-1.png"
        alt="Sliding Window"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        In the diagram above, we can see a sliding window of size 5 moving
        across the array(or string). It is not necessary for a sliding window to
        have a constant size as long as <em>L</em> &lt;= <em>R</em>. A sliding
        window expands towards the right and shrinks from the left while keeping
        track of its contents in <strong>O(1)</strong> time. But how can this
        help us?
      </p>
      <img
        src="~/assets/images/article/11/competitive11-2.png"
        alt="Sliding Window For Longest Substring Without Repeating Characters"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        In the diagram above, we can see a sliding window of size 5 moving
        across the array(or string). It is not necessary for a sliding window to
        have a constant size as long as <em>L</em> &lt;= <em>R</em>. A sliding
        window expands towards the right and shrinks from the left while keeping
        track of its contents in <strong>O(1)</strong> time. But how can this
        help us?
      </p>
    </article>
  </main>
</template>

<script>
import ArticleHeader from "~/components/ArticleHeader.vue";
import CodeSnippet from "~/components/CodeSnippet.vue";
export default {
  name: "competitive11",
  components: {
    ArticleHeader,
    CodeSnippet,
  },
  head: {
    title:
      "LeetCode #3 Longest Substring Without Repeating Characters | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Check out this problem on LeetCode. Given a string s, find the length of the longest substring without repeating characters.",
      },
    ],
  },
};
</script>