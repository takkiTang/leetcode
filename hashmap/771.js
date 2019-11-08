/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let hashMap = new Map()
    let count =0 
    for(let i=0;i<J.length;i++){
        hashMap.set(J[i],J[i])
    }
    for(let i=0;i<S.length;i++){
        if(hashMap.get(S[i])){
            count ++
        }
    }
    return count 
};