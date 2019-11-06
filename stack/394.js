/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    let multi = 0
    let res = ''
    for(let i=0;i<s.length;i++){
        if(s[i] >= 0 && s[i] <= 9){
            multi = multi * 10 + parseInt(s[i])
        }else if(s[i] === '['){
            stack.push([multi,res])
            multi = 0
            res = ''
        }else if(s[i] === ']'){
            let [cur_multi,last_res] = stack.pop()
            res = last_res +  res.repeat(cur_multi)
        }else{
            res = res + s[i]
        }
    }
    return res
};