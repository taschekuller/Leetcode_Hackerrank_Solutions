/**
 * @param {string} s
 * @return {boolean}
 */

const parentheses = ["{", "[", "(", ")", "]", "}"]
const isParenthesesExist = (s) => {
    return !parentheses.some( el => s.includes(el))
}
var isValid = function(s) {
    tmpArr = [];
    let idx;
    for(i=0; i < s.length; i++) {
        tmpArr.push(s[i])
    }
    if(!isParenthesesExist(s)){
        return true
    }
    switch(s) {
        case(s.includes(")")):
            idx = s.findIndex(p => p=="(");
            if(idx<0){
                tmpArr.splice(idx, 1);
            }
        case(s.includes("]")):
            idx = s.findIndex(p => p=="[");
            if(idx<0){
                tmpArr.splice(idx, 1);
            }

        case(s.includes("}")):
            idx = s.findIndex(p => p=="{");
            if(idx<0){
                tmpArr.splice(idx, 1);
            }
    }
    return isParenthesesExist(tmpArr)

};

/*
 better version
 var isValid = function(s) {
        const stack = [];
        const mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const c of s) {
            if (Object.values(mapping).includes(c)) {
                stack.push(c);
            } else if (mapping.hasOwnProperty(c)) {
                if (!stack.length || mapping[c] !== stack.pop()) {
                    return false;
                }
            }
        }

        return stack.length === 0;
};

*/