/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    word_count = 0;
    for(let i = s.length -1; i >= 0; i--){
        if(s[i] ===" " && word_count !== 0){
        return word_count
    }if(s[i]!==" "){
        word_count += 1
    }
    
    }
    return word_count
};