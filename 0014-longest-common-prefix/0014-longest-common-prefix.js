/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // console.log(strs[0][0])
    let answer = ""
    for(i =0; i < strs[0].length; i++){
        const word = strs[0][i];
        for(j = 1; j< strs.length; j++){
            if(word !== strs[j][i] | i >= strs[j].length){
                return answer
            }
        
        }
        answer += word
    }
    return answer
};