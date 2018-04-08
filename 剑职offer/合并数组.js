/**
 * 题目：有两个排序的数组 A1 和 A2， 内存在 A1 的末尾有足够多的空余空间容纳 A2。
 * 请实现一个函数，把 A2 中的所有数字插入到 A1 中并且所有的数字是排序的。
 * @param {Array} A1
 * @param {Array} A2
 * @return {Array} A1
 */

function copyArr(A1, A2) {
    let lenA1 = A1.length,
        lenA2 = A2.length,
        newLen = lenA1 + lenA2 - 1;
    if (!lenA1 || !lenA2) return;
    let i = lenA1 - 1,
        j = lenA2 - 1;
    while (i >= 0 && j >= 0 && newLen >= 0) {
        A2[j] > A1[i] ? A1[newLen--] = A2[j--] : A1[newLen--] = A1[i--]
    }
    return A1
}
console.log(copyArr([1, 2, 7], [3, 4, 5]))