/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let stack = []
    let res = ''
    let start = 0
    for(let i=0;i<S.length;i++){
        if(S.charAt(i) == '('){
            stack.push(S.charAt(i))
        }else{
            stack.pop()
            if(!stack.length){
                res += S.substring(start + 1,i)
                start = i + 1
            }
        }
    }
    return res 
};