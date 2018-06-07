/**
 * @param {number[]} nums
 * @return {number}
 * @description 删除数组中的重复项 
 * @condition 已经排序，原地删除
 */

var removeDuplicates = function(nums) {
	let index = 0;
	for(let i = 0,len = nums.length; i < len; i++){
		if(nums[i] !== nums[index]) {
			nums[++index] = nums[i];
		}
	}
	return ++index;
};