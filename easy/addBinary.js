/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = [], add = 0, i = a.length - 1, j = b.length -1;
    while(i >= 0 || j >= 0){
    	let sum = add;
    	if(j >= 0) sum += +b[j--];
    	if(i >= 0) sum += +a[i--];
    	res.push(sum%2);
    	add = Math.floor(sum / 2);
    }
    if(add != 0) res.push(add);
    return res.reverse().join('');
};