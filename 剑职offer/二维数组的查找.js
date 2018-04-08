/**
 * 面试题3：二维数组中的查找
 * 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

/**
 * 1、顺序查找：2次循环，算法复杂度 O(n^2)
 */
function orderFind(nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = 0, len2 = nums[i].length; j < len2; j++) {
            if (nums[i][j] == target) return true;
        }
    }
    return false;
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//console.log(orderFind(arr, 10))

/**
 * 2、二分法查找：算法复杂度 O(nlogn), 数组已经排好序，可以使用二分法
 */

function binaryFind(nums, target) {
    function binary(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (target == arr[mid]) return mid;
            else if (target > arr[mid]) low = mid + 1;
            else high = mid - 1;
        }
        return -1
    }
    for (let i = 0, len = nums.length; i < len; i++) {
        if (binary(nums[i], target) == -1) return false;
        return true;
    }
}
//console.log(binaryFind(arr, 1))

/**
 * first：选取数组中右上角的数字temp，if(temp==target) return true
 *  if(temp>target),剔除temp所在的列；
 *  if(temp<target),剔除temp所在的行；
 * 即，如果要查找的数字不在数组的右上角，则每一次都在数组的查找范围中剔除一行或一列。
 */

function rectFind(nums, target) {
    let rows = nums.length,
        columns = nums[0] && nums[0].length;
    while (nums[0] && rows > 0 && columns > 0) {

        let len = nums[0].length;
        let temp = nums[0][len - 1];
        if (temp == target) return true;
        if (temp > target) {
            nums.forEach(v => v.pop()); // 剔除最后一列
            console.log(nums)
        }
        if (temp < target) {
            nums.shift() //剔除第一行
            console.log(nums)
        }
    }
    return false;
}

// console.log(rectFind(arr, 10))

function rectFind2(nums, target) {
    let rows = nums.length,
        columns = nums[0].length,
        row = 0,
        column = columns - 1;
    while (row < rows && column >= 0) {
        if (target == nums[row][column]) return [row, column];
        if (target < nums[row][column]) column--;
        if (target > nums[row][column]) row++;
    }
    return false
}

console.log(rectFind2(arr, 9))