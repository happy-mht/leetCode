/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @description 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */

// 顺序搜索
var searchInsert = function(nums, target) {
	let index = 0;
    for(let i=0, len = nums.length;i < len; i++){
    	if(nums[i] == target) index = i;
    	if(nums[i] > target) {
    		index = i -1;
    		nums[i+1] = nums[i];
    		nums[i] = target;
    	}
    }
    return index;
};


// 二分法搜索更快
var searchInsert = function searchInsert(nums, target) {
    let len = nums.length,
        l = 0, r = len - 1;
    while(l <= r){
        let mid = Math.floor((l + r)/2);
        if(nums[mid] > target) r = mid - 1;
        else if(nums[mid] < target) l = mid + 1;
        else return mid;
    }
    return l;
}