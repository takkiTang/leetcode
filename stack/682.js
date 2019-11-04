/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = []
    let n = ops.length
    for(let i=0;i<n;i++){
        switch(ops[i]){
            case '+' :{
                stack.push(parseInt(stack[stack.length -1]) + parseInt(stack[stack.length - 2]))
             break;   
            }
            case 'D':{
                stack.push(2*stack[stack.length -1])
                break;
            }
            case 'C':{
                stack.pop()
                break;
            }
            default:{
                stack.push(parseInt(ops[i]))
            }
        }
    }
    return stack.reduce((p,n)=>p+n)
};