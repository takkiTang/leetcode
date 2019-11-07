/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            stack.push(i)
        }else if(s[i] == ')'){
            if(stack.length && s[stack[stack.length - 1]] == '('){
                stack.pop()
            }else{
                stack.push(i)
            }
        }
    }
    while(stack.length){
        let i = stack.pop()
        s = s.substr(0,i) + s.substr(i+1)
    }
    return s 
};