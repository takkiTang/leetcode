/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let map = {}
    for(let i=0;i<s.length;i++){
        map[s[i]] = map[s[i]] ? ++map[s[i]] :1
        map[t[i]] = map[t[i]] ? --map[t[i]] :-1
    }
    for(let k in  map){
        if(map[k]!=0){
            return false
        }
    }
    return true
};