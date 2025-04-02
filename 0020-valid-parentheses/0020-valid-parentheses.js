/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // 닫는 괄호인 경우
        if (pairs[char]) {
            // 스택에서 마지막 요소를 꺼내서 비교
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            // 여는 괄호인 경우 스택에 추가
            stack.push(char);
        }
    }

    // 스택이 비어 있으면 유효한 문자열
    return stack.length === 0;
};
