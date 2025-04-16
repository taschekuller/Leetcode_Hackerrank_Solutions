let a = [1,2,3,7,8,9,14,15];
let b = [4,5,6,10,11,12,13,16,17];

function longestSequence(a, b) {
  let seq = [];
  let i = 0, j = 0;
  let fromA = true;
  let last = -Infinity;

  while (i < a.length || j < b.length) {
    if (fromA) {
      while (i < a.length && a[i] <= last) i++;
      if (i < a.length) {
        seq.push(a[i]);
        last = a[i];
        i++;
        fromA = false;
      } else {
        break;
      }
    } else {
      while (j < b.length && b[j] <= last) j++;
      if (j < b.length) {
        seq.push(b[j]);
        last = b[j];
        j++;
        fromA = true;
      } else {
        break;
      }
    }
  }

  return seq;
}

console.log(longestSequence(a, b));
