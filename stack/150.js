/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let hashmap = {
        '+':(x,y)=>x+y,
        '-':(x,y)=>x-y,
        '*':(x,y)=>x*y,
        '/':(x,y)=>parseInt(x/y),
    }
    let stack = []
    for(let i=0;i<tokens.length;i++){
        if(hashmap[tokens[i]]){
            let a = stack.pop()
            let b = stack.pop()
            let res = hashmap[tokens[i]](b,a)
            stack.push(res)
        }else{
            stack.push(Number(tokens[i]))
        }
    }
    return stack.pop() 
};
