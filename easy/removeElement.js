/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @description 移除元素
 */
var removeElement = function(nums, val) {
    let index = 0;
    for(let i = 0, len = nums.length; i < len;i++){
    	if(nums[i] == val) {
    		continue;
    	};
    	if(index < i) nums[index] = nums[i];
    	index++;
    } 
    return index;
};