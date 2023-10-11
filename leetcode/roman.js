function romanToInt(s) {
  const obj = {
    I: 1,
    X: 10,
    C: 100,
    V: 5,
    L: 50,
    D: 500,
    M: 1000,
  };


  let output = 0;

  let skipped = false;

  for (let i = 0; i < s.length; i++) {

 
    if (skipped) {
      output -= obj[s[i - 1]];
      skipped = false
    }
    if (obj[s[i]] < obj[s[i + 1]]) {
      skipped = true
    } else {
      output += obj[s[i]];
    }

  }

  return output;
}
// console.log(romanToInt("M"));
console.log(romanToInt("XXC"));
