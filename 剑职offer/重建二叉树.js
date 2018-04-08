/**
 * 题目：输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列 {1,2,4,7,3,5,6,8} 和中序遍历序列 {4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */
/**
 * 前序：根-左-右
 * 中序：左-根-右
 * 后续：左-右-根
 */

/**
 * 思路：先序遍历 preArr[0]是树的root，preArr[1,p]是左子树的先序子数组，preArr[p+1,]是右子树的先序子数组，
 * 中序遍历的 root 在中间p，则 InOrderArr[0,p-1]是左子树的中序数组，InOrderArr[p+1,]是右子树的中序数组；
 * 把四个数组找出来，分左右递归调用即可。
 */

// class BinaryTreeNode {
//     constructor(val, right, left) {
//         this.val = val;
//         this.right = null;
//         this.left = null;
//     }
// }

function reConstructBinaryTree(pre, vin) {
    if (!pre || !vin) {
        return;
    }
    let treeNode = { val: pre[0] }
    for (let i = 0, len = pre.length; i < len; i++) {
        if (vin[i] == pre[0]) {
            treeNode.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i))
            treeNode.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1))
        }
    }
    return treeNode
}

function preOrderTree(node, arr = []) {
    if (node && node.val) {
        arr.push(node.val)
        preOrderTree(node.left, arr)
        preOrderTree(node.right, arr)
    }
    return arr
}

function inOrderTree(node, arr = []) {
    if (node && node.val) {
        inOrderTree(node.left, arr)
        arr.push(node.val)
        inOrderTree(node.right, arr)
    }
    return arr
}

function afterOrder(node, arr = []) {
    if (node && node.val) {
        afterOrder(node.left, arr)
        afterOrder(node.right, arr)
        arr.push(node.val)
    }
    return arr
}
let tree = reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6])
let preArr = preOrderTree(tree)
let tree1 = reConstructBinaryTree([1, 2, 4], [4, 2, 1])
console.log(tree1)
console.log(inOrderTree(tree1))