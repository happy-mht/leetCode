/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 利用hashtab, 时间复杂度为O(n), 空间复杂度O(n)
 */
var twoSum = function(nums, target) {
    let s = new Set();
    let result = [];
    nums.forEach((v, i) => {
        s[v] = i;
    });

    for (let i = 0, len = nums.length; i < len; i++) {
        if (s[target - nums[i]]) {
            result[0] = i;
            result[1] = s[target - nums[i]];
            break;
        }
    }
    return result;
};

console.log(twoSum([1, 2, 3, 4], 5))