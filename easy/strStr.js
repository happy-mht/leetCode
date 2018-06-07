/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * @description 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。就是String 的 indexOf 方法。
 */
var strStr = function(haystack, needle) {
    for(let i = 0; ; i++){
    	for(let j = 0; ; j++){
    		if(j === needle.length) return i;
    		if(i + j === haystack.length-1) return -1
    	    if(needle.charAt(j) !== haystack.charAt(i+j)) break;
    	} 
    }
};