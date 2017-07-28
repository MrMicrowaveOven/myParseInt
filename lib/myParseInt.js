var myParseInt = function(s, base) {
  // Replace with your version!
  // return parseInt(s, base);
  base = base || 10;

  function intWithNeg() {
    return isNegative ? -1 * currentInt : currentInt;
  }

  // turn s to a String
  let stringOfS = s + "";
  let baseAlphabet = ALPHABET.slice(0, base);

  // If negative, remember that it is and remove the `-` for now
  let isNegative = stringOfS[0] == "-"
  if (isNegative) {stringOfS = stringOfS.slice(1);}

  let char;
  let currentInt = 0;
  let indexChar;
  // Iterates through string, dismisses everything after first non-int, or int that is >= base.
  for(let i = 0; i < stringOfS.length; i++){
    char = stringOfS[i].toLowerCase()
    indexChar = baseAlphabet.indexOf(char);

    if(indexChar === -1){
//    Early return if it hasn't found any numbers yet
      if (i == 0){
        return NaN
      }
      return intWithNeg()

    } else {
      currentInt *= base;
      currentInt += indexChar;
    }
  }
  return intWithNeg()
}

// Finds index of char (lowercase) in ALPHABET, will give int conversion base 36.

const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz".split("");

module.exports = {
  myParseInt: function(s, base) {
    return myParseInt(s, base);
  }
};
