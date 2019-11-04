/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let stack = [0]
    for(let i=0;i<S.length;i++){
        if(S[i] == '('){
            stack.push(0)
        }else{
            let v = stack.pop()
            stack[stack.length -1 ] += Math.max(2*v,1)
        }
    }
    return stack.pop()
};