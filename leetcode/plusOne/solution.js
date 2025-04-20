/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let tmpTotal=[];
  for(i=0; i<digits.length; i++) {
      if(i == digits.length-1) {
          if(digits[i] == 9){
              tmpTotal.push(1,0)
          } else {
          tmpTotal.push(digits[i]+1);
          }
      }
      else {
          tmpTotal.push(digits[i])
      }
  }
  return tmpTotal
};

/* better solution
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] + 1 !== 10) {
          digits[i] += 1;
          return digits;
      }
      digits[i] = 0;
      if (i === 0) {
          digits.unshift(1);
          return digits;
      }
  }
};
*/