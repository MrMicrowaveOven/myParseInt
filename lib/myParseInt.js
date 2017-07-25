var myParseInt = function(s, base) {
  // Replace with your version!
  // return parseInt(s, base);
  base = base || 10;

  // turn s to a String
  let stringOfS = s + "";
  let baseAlphabet = ALPHABET.slice(0, base);

  let isNegative = false;
  if (stringOfS[0] == "-") {
    isNegative = true;
    stringOfS = stringOfS.slice(1);
  }

  let char;
  let currentInt = 0;
  let indexChar;
  // Iterates through string, dismisses everything after first non-int, or int that is >= base.
  for(let i = 0; i < stringOfS.length; i++){
    char = stringOfS[i].toLowerCase()
    indexChar = baseAlphabet.indexOf(char);
    // console.log(char)
    // console.log(indexChar);
    if(indexChar === -1){
//       Early return
      if (i == 0){
        return NaN
      }
      return isNegative ? -1 * currentInt : currentInt;

    } else {
      currentInt *= base;
      currentInt += indexChar;
    }
  }
  return isNegative ? -1 * currentInt : currentInt;
}

// Finds index of char (lowercase) in ALPHABET, will give int conversion base 36.

const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz".split("");

module.exports = {
  myParseInt: function(s, base) {
    return myParseInt(s, base);
  }
};
