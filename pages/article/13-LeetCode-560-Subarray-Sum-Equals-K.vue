<template>
  <main>
    <article class="w-full max-w-4xl mx-auto flex flex-col">
      <ArticleHeader
        title="LeetCode #560 Subarray Sum Equals K"
        date="19 Apr '21"
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
          href="https://leetcode.com/problems/subarray-sum-equals-k/"
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
        Given an array of integers <strong>nums</strong> and an integer
        <strong>k</strong>, return the total number of continuous subarrays
        whose sum equals to <strong>k</strong>.<br /><br />
        <strong class="text-lg">Example 1:</strong><br />
        <strong>Input:</strong> nums = nums = [1,1,1], k = 2<br />
        <strong>Output:</strong> 2<br /><br />
        <strong class="text-lg">Example 2:</strong><br />
        <strong>Input:</strong> nums = [1,2,3], k = 3<br />
        <strong>Output:</strong> 2<br /><br />
        <strong class="text-lg">Constraints:</strong>
      </p>
      <ul class="list-disc list-inside">
        <li>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></li>
        <li>-1000 &lt;= nums[i] &lt;= 1000</li>
        <li>-10<sup>7</sup> &lt;= k &lt;= 10<sup>7</sup></li>
      </ul>
      <div class="mt-12 flex flex-col">
        <h2 class="text-2xl">Getting Started</h2>
        <div class="w-6 h-1 bg-background-2 rounded-full"></div>
      </div>
      <p class="mt-8">
        A <strong>subarray</strong> is a contiguous sequence of items within an
        array. For example, [1, 2] and [1, 2, 3] are subarrays of [0, 1, 2,
        3].<br />
        Before finding an optimal solution to a problem, we should always try
        the brute-force technique. It helps us understand the problem better. We
        will start by checking every subarray whether it adds up to the given
        target.<br />
        <strong>Note</strong> - This is an intermediate level problem. If you
        are a beginner, you might want to solve
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/6-LeetCode-1-Two-Sum"
          >this problem</NuxtLink
        >
        before you continue.
      </p>
      <CodeSnippet
        code='// Java
public int subarraySum(int[] nums, int k) {
    int ans = 0; // Store the answer.
    for (int left = 0; left < nums.length; ++left) { // Run a loop from "0" to "nums.length - 1" for the left-index.
        for (int right = left; right < nums.length; ++right) { // Run a loop from "left" to "nums.length - 1" for the right-index.
            int sum = 0; // Store the sum of current subarray.
            for (int i = left; i <= right; ++i) { // Run a loop from "left" to "right".
                sum += nums[i]; // Add the current number to "sum".
            }
            if (sum == k) { // If "sum" is equal to "k", increment "ans".
                ++ans;
            }
        }
    }
    return ans; // Return the answer.
}'
        lang="language-java"
      />
      <CodeSnippet
        code='# Python3
def subarraySum(nums: List[int], k: int) -> int:
    ans = 0  # Store the answer.
    for left in range(len(nums)):  # Run a loop from "0" to "nums.length - 1" for the left-index.
        for right in range(left, len(nums)):  # Run a loop from "left" to "nums.length - 1" for the right-index.
            sum = 0  # Store the sum of current subarray.
            for i in range(left, right + 1):  # Run a loop from "left" to "right".
                sum += nums[i]  # Add the current number to "sum".
            if(sum == k):  # If "sum" is equal to "k", increment "ans".
                ans += 1
    return ans  # Return the answer.'
        lang="language-python"
      />
      <p>
        Clearly, this solution takes <strong>O(n<sup>3</sup>)</strong> time as
        result of the three nested for-loops. No extra space is required for
        this.<br />
        We can make a simple optimisation to this. Instead of running a loop to
        find the sum of every subarray, we can obtain it directly using a
        prefix-sum array. We will modify the original array to store the
        cumulative sum of all numbers until that index.<br />
        For example, if we have an array [1, 2, 3, 4, 5], it will be modified to
        [1, 3, 6, 10, 15]. Now, if we wanted to find the sum from index 2 to
        4(inclusive), we simply subtract
        <em>nums[1]</em> from <em>nums[4]</em> to obtain 12. To visualize this,
        <em>(1 + 2 + 3 + 4 + 5) - (1 + 2) = (3 + 4 + 5)</em>.
      </p>
      <CodeSnippet
        code='// Java
public int subarraySum(int[] nums, int k) {
    for (int i = 1; i < nums.length; ++i) { // Generate the prefix-sum array.
        nums[i] += nums[i - 1]; // Add the cumulative sum of the previous index.
    }
    int ans = 0;
    for (int left = 0; left < nums.length; ++left) {
        for (int right = left; right < nums.length; ++right) {
            int lSum = 0; // Initial sum is "0" before the left-most number.
            if (left > 0) {
                lSum = nums[left - 1]; // Cumulative sum of numbers till "left - 1".
            }
            int rSum = nums[right]; // Cumulative sum of numbers to till "right".
            if (rSum - lSum == k) {
                ++ans;
            }
        }
    }
    return ans;
}'
        lang="language-java"
      />
      <CodeSnippet
        code='# Python3
def subarraySum(nums: List[int], k: int) -> int:
    for i in range(1, len(nums)):  # Generate the prefix-sum array.
        nums[i] += nums[i - 1]  # Add the cumulative sum of the previous index.
    ans = 0
    for left in range(len(nums)):
        for right in range(left, len(nums)):
            lSum = 0  # Initial sum is "0" before the left-most number.
            if(left > 0):
                lSum = nums[left - 1]  # Cumulative sum of numbers till "left - 1".
            rSum = nums[right]  # Cumulative sum of numbers to till "right".
            if(rSum - lSum == k):
                ans += 1
    return ans'
        lang="language-python"
      />
      <p>
        We have optimized our solution to <strong>O(n<sup>2</sup>)</strong>, as
        the subarray sum is obtained in constant time now. The space complexity
        is either <strong>O(n)</strong> or <strong>O(1)</strong> depending on
        whether or not modifying the original array counts as using extra
        space.<br />
        This solution is much faster than the previous one, but still too
        slow.<br /><br />
        At first glance, this problem might appear to be solvable with the
        <NuxtLink
          class="text-text-3 hover:underline focus:underline focus:outline-none"
          to="/article/11-LeetCode-3-Longest-Substring-Without-Repeating-Characters"
          >sliding window technique</NuxtLink
        >, but it's not the case. Let's see why. Suppose, we have a large array
        like [1, -1, 1, -1......1, -1, 1] and the target sum is 0. The number of
        subarrays with equal number of 0's and 1's are of an order of
        <strong>n<sup>2</sup></strong
        >. A sliding window will not be able count all of these. This is because
        a sliding window expands towards the right and shrinks from the left
        <strong>n</strong> times each.<br />
        Let's consider the previous example again. [1, -1, 1, -1, 1, -1] can be
        modified to a prefix-sum array [1, 0, 1, 0, 1, 0]. If the target sum is
        0, the subarrays will be 9 in total. Let's traverse our prefix-sum array
        <em>sum</em> from left to right to see if we can find a pattern.<br /><br />
        At <em>nums[0]</em> our <em>rSum</em> is 1. In order to obtain 0 as the
        final sum, we need to find an <em>lSum</em> equal to 1(i.e. 1 - 1 = 0).
        As this is the first index, we cannot find a non-zero <em>lSum</em> to
        the left.<br />
        At <em>nums[1]</em> our <em>rSum</em> is 0. We need to find an
        <em>lSum</em> equal to 0. This time, the <em>lSum</em> before the first
        index(initial sum) is equal to zero. So, we have obtained 1 subarray so
        far.<br />
        At <em>nums[2]</em>, our <em>rSum</em> is 1. We have already encountered
        a 1 before and can obtain another subarray, bringing our tally to 2.<br />
        At <em>nums[3]</em>, our <em>rSum</em> is 0. We have encountered 0
        twice(before the first index and at index-1) and can obtain 2 more
        zero-sum subarrays.<br />
        We repeat this process for the remaining elements to find a total of 9
        subarrays.<br /><br />
        We notice that if the target sum is <em>k</em>, for every cumulative sum
        <em>rSum</em>, we need to find the total number of cumulative sums to
        the left that are equal to <em>rSum - k</em> (since
        <em>rSum - lSum = k</em>).<br />
        Now, let's look at the code.
      </p>
      <CodeSnippet
        code='// Java
public int subarraySum(int[] nums, int k) {
    for (int i = 1; i < nums.length; ++i) {
        nums[i] += nums[i - 1];
    }
    Map<Integer, Integer> count = new HashMap<>(); // Maintain a count of each sum obtained so far.
    count.put(0, 1); // Initial sum of "0" encountered once at the beginning.
    int ans = 0;
    for (int i = 0; i < nums.length; ++i) {
        ans += count.getOrDefault(nums[i] - k, 0); // Add the count of "nums[i] - k" encountered till now.
        count.put(nums[i], count.getOrDefault(nums[i], 0) + 1); // Increment the count of the current sum "nums[i]".
    }
    return ans;
}'
        lang="language-java"
      />
      <CodeSnippet
        code='# Python3
def subarraySum(nums: List[int], k: int) -> int:
    from collections import defaultdict  # Dictionary that returns a default value for non-existing keys.
    for i in range(1, len(nums)):
        nums[i] += nums[i - 1]
    ans = 0
    count = defaultdict(int)  # Maintain a count of each sum obtained so far. This "defaultdict" returns "0" by default.
    count[0] = 1  # Initial sum of "0" encountered once at the beginning.
    for i in range(len(nums)):
        ans += count[nums[i] - k]  # Add the count of "nums[i] - k" encountered till now.
        count[nums[i]] += 1  # Increment the count of the current sum "nums[i]".
    return ans'
        lang="language-python"
      />
      <p>
        This solution has the optimal <strong>O(n)</strong> time complexity. It
        also uses <strong>O(n)</strong> extra space for the
        <em>count</em> map/dictionary.<br />
        The problem turned out to be much simpler than it looked. We simply
        started from the brute-force technique and optimized it little by little
        by observing patterns.<br /><br />
        Hooray! You've solved a medium-level problem. But don't stop here and
        try some more problems.
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
    title: "LeetCode #560 Subarray Sum Equals K | The Source Project",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.",
      },
    ],
  },
};
</script>