/**
 * @param {number} n
 * @return {string}
 * @description 报数序列是指一个整数序列，按照其中的整数的顺序进行报数，得到下一个数
 */

// 后一个数字是前一个数字的读音
var countAndSay = function(n) {
    if(n == 0) return '';
    let res = '1';
    
    while(--n){
    	let cur = '';
    	let count = 1;
    	for(let i = 0; i < res.length; i++){
    		if(i+1 < res.length && res[i] == res[i+1]) count++
    	    else{
    	    	cur += count + res[i];
    	    	count = 1;
    	    }
    	}
    	res = cur;
    }
    return res;
};

var countAndSay = function(n) {
    if(n == 0) return '';
    let res = '1';
    while(--n){
    	let cur = '';
    	for (let i = 0; i < res.length; i++){
    		let count = 1;
    		while(i + 1 < res.length && res[i] == res[i + 1]){
    			count++;
    			i++
    		}
    		cur += count + res[i];
    	}
    	res = cur;
    }
    return res;
};