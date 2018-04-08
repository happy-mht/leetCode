/**
 * 题目：将只字符串中的空格替换为%20
 * 步骤：1）第一个指针指向字符串的末尾一次，第二个指针指向替换之后的字符串的末尾；
 * 2）依次复制字符串的内容，直至第一个指针碰到第一个空格；
 * 3) 把第一个空格替换成 %20，把第一个指针向前移动1格，把第二个指针向前移动3格。
 * 4) 一次向前复制字符串中的字符，直到碰到空格。
 * 5) 替换字符中倒数第二个空格，把第一个指针向前移动一格，把第二个指针向前移动3格。
 * @param {String} str
 * @return {String} str
 */
function replaceBlank(str) {
    let originLen = str.length;
    let blankNum = 0;
    let strArr = [];
    for (let i of str) {
        if (i == ' ') {
            blankNum++;
        }
    }
    let newLen = originLen + blankNum * 2 - 1;
    let indexOfOrigin = originLen - 1,
        indexOfNew = newLen;
    while (indexOfOrigin >= 0) {
        if (str[indexOfOrigin] == " ") {
            strArr[indexOfNew--] = '0';
            strArr[indexOfNew--] = '2';
            strArr[indexOfNew--] = '%';
        } else {
            strArr[indexOfNew--] = str[indexOfOrigin]
        }
        --indexOfOrigin;
    }
    return strArr.join('')
}
console.log(replaceBlank('dd s  '))