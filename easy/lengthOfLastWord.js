/**
 * @param {string} s
 * @return {number}
 * @description 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
 */
var lengthOfLastWord = function(s) {
    s= s.trim()
     let len = s.length;
    let re = 0;
    for(let i = len -1; i >=0; i--){
    	if(s[i]!=' ') re++;
    	else return re;
    }
    return re;
};