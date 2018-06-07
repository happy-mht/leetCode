/**
 * @param {string} s
 * @return {boolean}
 * @description 有效的括号
 */

// 如果length 为奇数，返回FALSE
var isValid = function(s) {
	let len = s.length;
	if(len%2 !== 0) return false;

    let map = {"}": "{", "]": "[", ")": "("};
    let stack = [];
    for(let i = 0; i < len; i++) {
    	if(s[i] === '}' || s[i] === ']' || s[i] === ')'){
    		let temp = stack.pop();
    		if(map[s[i]] !== temp) return false;
    	}else {
    		stack.push(s[i]);
    	}
    }
    return stack.length === 0;

};