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
        any ASCII character and not just lower-case letters. Hence, we'll
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
        <strong>O(n<sup>3</sup>)</strong> because of the
        <strong>O(n)</strong> time taken by <em>hasDistinctCharacters()</em>.
        Also, it has a space complexity of <strong>O(n)</strong>, which is
        required to store a substring. This solution will exceed the time limit
        and won't be accepted.<br /><br />
        We can improve this solution slightly by checking the longer substrings
        first. This way, we can return the length of the first substring we come
        across that has no repeating characters.
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
        Although this solution is definitely faster than the previous one, it
        still has the same time and space complexity. This is because in the
        worst case(i.e. when the answer is 1) our solution will have to process
        every substring.<br /><br />
        By now, it is clear that the brute-force approach will not work. The
        constraints of the problem don't even allow an
        <strong>O(n<sup>2</sup>)</strong> solution, let alone an
        <strong>O(n<sup>3</sup>)</strong> one.<br />
        These types of problems are solved using the
        <strong>sliding window</strong> technique. But, what does it mean?
      </p>
      <img
        src="~/assets/images/article/11/competitive11-1.png"
        alt="Sliding Window"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        In the diagram above, we can see a sliding window of size 5 moving
        across the array(or string). A sliding window doesn't need to have a
        constant size as long as <em>L</em> &lt;= <em>R</em>. A sliding window
        expands towards the right and shrinks from the left while keeping track
        of its contents in <strong>O(1)</strong> time. But how can this help us?
      </p>
      <img
        src="~/assets/images/article/11/competitive11-2.png"
        alt="Sliding Window For Longest Substring Without Repeating Characters"
        class="mx-auto mt-6 max-w-full"
      />
      <p class="mt-6">
        The approach seems to be simple enough. The only thing that remains is
        the implementation and there are many ways to do that.<br /><br />
        One way is to use an array to store the character counts of our window.
        The maximum distance between <em>L</em> and <em>R</em> at any given time
        will be the answer. We just have to make sure whenever we come across a
        character present in our window, we have to keep removing characters
        from the left until the repeated character is removed.
      </p>
      <CodeSnippet
        code="// Java
public int lengthOfLongestSubstring(String s) {
    int ans = 0, l = 0, r = 0, count[] = new int[256]; // Create an array to store the count of characters.
    while(r < s.length()) { // Stop at the last character.
        char c = s.charAt(r);
        while(count[c] > 0) { // Run loop if the character is present in the window.
            --count[s.charAt(l)]; // Remove characters of the window from the left.
            ++l;
        }
        ++count[c]; // Add this character to the window.
        ++r;
        ans = Math.max(ans, r - l); // Store the maximum size of the window till now.
    }
    return ans;
}"
        lang="language-java"
      />
      <CodeSnippet
        code="# Python3
def lengthOfLongestSubstring(self, s: str) -> int:
    ans, l, r, count = 0, 0, 0, [0] * 256  # Create an array to store the count of characters.
    while(r < len(s)):  # Stop at the last character.
        c = ord(s[r])
        while(count[c] > 0):  # Run loop if the character is present in the window.
            count[ord(s[l])] -= 1  # Remove characters of the window from the left.
            l += 1
        count[c] += 1  # Add this character to the window.
        r += 1
        ans = max(ans, r - l)  # Store the maximum size of the window till now.
    return ans"
        lang="language-python"
      />
      <p>
        This solution has both the optimal <strong>O(n)</strong> time and
        <strong>O(1)</strong> space complexities. <br />
        <strong>Note</strong> - The auxiliary space used is constant because our
        <em>count</em> array has a fixed size that is known beforehand.<br /><br />
        It is impossible to go faster or be more efficient than this, but there
        is a tiny optimization that we can make. Notice that we don't need to
        store the count of characters as we can only have at most one of each
        type in our window. Instead, we can use an array to store the last
        position of a character. How will this help us? Well, upon encountering
        a repeated character, we can directly skip over to its previous
        position.
      </p>
      <CodeSnippet
        code="// Java
public int lengthOfLongestSubstring(String s) {
    int ans = 0, l = 0, r = 0, pos[] = new int[256];
    for(int i = 0; i < 256; ++i) {
        pos[i] = -1; // '-1' indicates that character has not been found yet.
    }
    while(r < s.length()) {
        char c = s.charAt(r);
        l = Math.max(l, pos[c] + 1); // 'l' should not change if 'pos[c]' is outside the window.
        pos[c] = r; // Store the current position of this character.
        ++r;
        ans = Math.max(ans, r - l);
    }
    return ans;
}"
        lang="language-java"
      />
      <CodeSnippet
        code="# Python3
def lengthOfLongestSubstring(self, s: str) -> int:
    ans, l, r, pos = 0, 0, 0, [-1] * 256  # '-1' indicates that character has not been found yet.
    while(r < len(s)):
        c = ord(s[r])
        l = max(l, pos[c] + 1)  # 'l' should not change if 'pos[c]' is outside the window.
        pos[c] = r  # Store the current position of this character.
        r += 1
        ans = max(ans, r - l)
    return ans"
        lang="language-python"
      />
      <p>
        This solution is slightly faster than the previous one, though it has
        the same worst-case time and space complexities.<br /><br />
        We have discussed a few of the many possible approaches to this problem.
        One thing to remember is that you should always consider the sliding
        window technique when facing problems similar to this one. It is
        commonly used when you are looking for a range in an array or string
        while following some conditions.<br /><br />
        Now try to come up with your own methods to solve this problem and keep
        on practicing.
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