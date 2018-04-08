/**
 * 题目：给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。
 * 设计一个算法使得这 m 个子数组各自和的最大值最小。
 * 分析: if m = nums.length, 那么每个数组都是一个子数组，return Math.max(...nums),
 * if m = 1，那么整个nums数组就是一个子数组，return sum(nums)，
 * 所以对于其他有效的m值, 返回的值必定在上面两个值之间，我们可以用二分搜索法来做。
 */

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

var splitArray = function(nums, m) {
    let max = 0,
        sum = 0;
    sum = nums.reduce((a, b) => a + b);
    max = Math.max(...nums);
    if (m == 1) return sum;

    // binary search
    let l = max,
        r = sum;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        valid(mid, nums, m) ? r = mid : l = mid + 1;
    }
    return l;
};

function valid(target, nums, m) {
    let count = 1,
        total = 0; //子数组的个数
    for (let i = 0, len = nums.length; i < len; i++) {
        total += nums[i];

        //make sure that the sum of numbers between each two cuts (inclusive) is large enough but still less than mid.
        if (total > target) {
            total = nums[i];
            count++;

            //if count < m , mid 偏大, return true --> r = mid
            // else mid 偏小, return false --> l = mid + 1
            if (count > m) {
                console.log(count)
                return false;
            }
        }
    }
    return true;
}

console.log(splitArray([7, 2, 5, 10, 8], 2))