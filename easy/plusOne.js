/**
 * @param {number[]} digits
 * @return {number[]}
 * @description 给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

var plusOne = function(digits) {
    let len = digits.length;
    for(let i = len-1; i >= 0; i--){
    	if(digits[i] < 9){
    		digits[i]++;
    		return digits
    	}
    	digits[i]=0;
    }
   	
    let newNums = new Array(len + 1).fill(0);
    newNums[0] = 1;
    return newNums; 
};
	
var plusOne = function(digits) {
  const n = digits.length;
  let i = n-1;
  for (; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      break;
    }
  }
  if (i >= 0) digits[i] += 1;
  else digits.unshift(1);
  return digits;
};