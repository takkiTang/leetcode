/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
    let stack = []
    for(let i=0;i<S.length;i++){
        if(S[i]=='c' && stack[stack.length -1] == 'b' && stack[stack.length -2 ]== 'a'){
            stack.pop()
            stack.pop()
        }else{
            stack.push(S[i])
        }
    }
    return stack.length === 0
};