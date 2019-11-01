/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = []
    let res = []
    let n = T.length
    for(let i=n-1;i>=0;i--){
        while(stack.length && T[i] >= T[stack[stack.length -1 ]]){
              stack.pop()
        }
        res[i] = stack.length ? stack[stack.length -1 ] - i : 0
        stack.push(i)
    }
    return res 
};