function lengthOfLongestSubstring(s) {
    let maxLen = 0;              
    let start = 0;               
    const usedChar = new Map();  

    for (let i = 0; i < s.length; i++) {
        if (usedChar.has(s[i]) && usedChar.get(s[i]) >= start) {
            start = usedChar.get(s[i]) + 1;
        }
        usedChar.set(s[i], i);
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
}
