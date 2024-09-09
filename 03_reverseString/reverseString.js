const reverseString = function (string) {
  let stringReversed = Array.from(string);

  let stringStart = 0;
  let stringEnd = stringReversed.length - 1;

  while (stringStart < stringEnd) {
    [stringReversed[stringStart], stringReversed[stringEnd]] = [
      stringReversed[stringEnd],
      stringReversed[stringStart],
    ];
    stringStart++;
    stringEnd--;
  }
  return stringReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
