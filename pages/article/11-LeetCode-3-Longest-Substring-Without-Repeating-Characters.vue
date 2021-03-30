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
        <li>s consists of English letters, digits, symbols and spaces.</li>
      </ul>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        We need to find a pair of numbers in the given array that adds up to
        <strong>target</strong>. The most straightforward way to find it is to
        try every possible pair.
      </p>
      <CodeSnippet
        code="// Java
public int[] twoSum(int[] nums, int target) {
    for(int i = 0; i < nums.length; i++) {
        for(int j = 0; j < nums.length; j++) {
            if(i != j) { // You may not use the same element twice.
                if(nums[i] + nums[j] == target) {
                    return new int[] {i, j}; // Return the indices in an array.
                }
            }
        }
    }
    return new int[] {-1, -1}; // Default return value if there is no solution.
}"
        lang="language-java"
      />
      <CodeSnippet
        code="# Python3
def twoSum(self, nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
        for j in range(len(nums)):
            if(i != j):
                if(nums[i] + nums[j] == target):
                    return [i, j]"
        lang="language-python"
      />
      <p>
        Notice that we added a default return value in the Java code at the end.
        This is because the return type of the function is of
        <strong>int[]</strong> type, therefore the function must return an array
        of integers for all conditions. This is not required in the Python
        version as the question states that we will get a unique solution for
        every test case.<br /><br />
        This solution has a time complexity of
        <strong>O(n<sup>2</sup>)</strong> because we run 2 nested loops which
        each run for the complete length of the array in the worst case. If we
        submit this, it will get accepted. But we can improve upon this solution
        slightly.<br /><br />
        If you see our code, it runs 2 loops from the beginning and we are
        checking every pair 2 times. For example, initially we check the pair
        (i, j) = (0, 1) and when the inner loop completes once, we check the
        pair (i, j) = (1, 0). The sum is going to be the same in either order so
        we can save some time by skipping these pairs.<br />
        Let's see how we can achieve this.<br /><br />
        Suppose there's an array [0, 1, 2, 3, 4]. In the first outer loop we
        will check the pairs (0, 1), (0, 2), (0, 3), (0, 4). For the next loop,
        we can start from (1, 2) instead of (1, 0) and continue (1, 3), (1, 4).
        And then (2, 3), (2, 4) and finally (3, 4).<br />
        We observe that we can start the inner loop from <em>i + 1</em> to avoid
        the visited pairs.
      </p>
      <CodeSnippet
        code="// Java
public int[] twoSum(int[] nums, int target) {
    for(int i = 0; i < nums.length; i++) {
        for(int j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return new int[] {i, j};
            }
        }
    }
    return new int[] {-1, -1};
}"
        lang="language-java"
      />
      <CodeSnippet
        code="# Python3
def twoSum(self, nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if(nums[i] + nums[j] == target):
                return [i, j]"
        lang="language-python"
      />
      <p>
        This solution like the previous one has a space complexity of
        <strong>O(1)</strong> as we only use a constant amount of memory to
        store our variables. Notice now we don't have to check for
        <em>i != j</em> as i and j will never be equal.<br /><br />
        We improved our solution slightly but it's time complexity is still
        <strong>O(n<sup>2</sup>)</strong>. This is because in the worst case our
        solution checks (n - 1) + (n - 2) + (n - 3) + ... + 2 + 1 = (n)(n - 1) ÷
        2 pairs, thereby giving it an upper bound of
        <strong>O(n<sup>2</sup>)</strong>.<br /><br />
        Can we bring our solution down to
        <strong>O(n)?</strong><br />
        Yes! We can. Here comes
        <strong>HashMap/Dictionary</strong> to the rescue.<br /><br />
        Java Hashmaps &amp; Python Dictionaries can store key-value pairs that
        allow lookup in <strong>O(1)</strong> time. But how will it help us? For
        every number, if we could check whether its difference from
        <strong>target</strong> exists in the array, we will get the answer.<br />
        <strong>Note</strong> - You can learn more about
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/8-Using-inbuilt-data-structures-of-Java"
          >HashMaps</NuxtLink
        >
        and
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/9-Using-inbuilt-data-structures-of-Python"
          >Dictionaries</NuxtLink
        >
        in our tutorials.
      </p>
      <CodeSnippet
        code="// Java
// import java.util.*; // For the HashMap class, it is automatically imported on LeetCode.
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> indices = new HashMap<>();
    for(int i = 0; i < nums.length; i++) {
        if(indices.containsKey(target - nums[i])) {
            return new int[] {indices.get(target - nums[i]), i};
        }
        indices.put(nums[i], i);
    }
    return new int[] {-1, -1};
}"
        lang="language-java"
      />
      <CodeSnippet
        code="# Python3
def twoSum(self, nums: List[int], target: int) -> List[int]:
    indices = {};
    for i in range(len(nums)):
        if((target - nums[i]) in indices):
            return [indices[target - nums[i]], i]
        indices[nums[i]] = i"
        lang="language-python"
      />
      <p>
        Here we create a HashMap/Dictionary to store the indices of the array
        elements. Then we traverse over the array while checking if we have
        encountered <em>target - nums[i]</em> previously. If not, we store the
        index with the array element as the key in our HashMap/Dictionary.<br /><br />
        So now we have a solution with a time complexity of
        <strong>O(n)</strong> making it much faster than the previous ones,
        however it also has a space complexity of <strong>O(n)</strong> because
        we are using additional memory for the HashMap/Dictionary proportional
        to the size of the input array in the worst case.<br /><br />
        So why stop here? Try some more problems and keep on learning.
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