/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

function threeSum(nums, target) {

    /*设一个满足条件的三元组<a,b,c>，如果有重复的三元组与之相同，则说明a,b,c中至少有一个元素的值在数组中出现至少两次。
    假如a的值2，在数组中出现多次，则其必然是连续的（数组已经排序），因此可以使用如上的方法去除重复的三元组。
    该方法时间复杂度O(nlogn)+O(n^2)，空间复杂度为O(1)。*/

    let result = [];
    let s = {};
    // sort A in ascending order
    nums.sort((a, b) => a - b)

    for (let i = 0, len = nums.length; i < len; i++) {
        if (i > 0 && nums[i - 1] == nums[i]) continue; // skip duplication
        for (let j = i + 1, k = len - 1; j < k;) {
            if (j > i + 1 && nums[j - 1] == nums[j]) { // skip duplication
                ++j;
                continue;
            }
            if (k < len - 1 && nums[k] == nums[k + 1]) { // skip duplication
                --k;
                continue;
            }
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > target) --k;
            else if (sum < target) ++j;
            else {
                result.push([nums[i], nums[j++], nums[k--]])
            }
        }
    }
    return result;
}
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6], 0))
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))
console.log(threeSum([0, -1, -1, 2], 0))