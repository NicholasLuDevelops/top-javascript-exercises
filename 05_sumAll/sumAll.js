const sumAll = function (first, last) {
  if (
    first < 0 ||
    last < 0 ||
    !Number.isInteger(first) ||
    !Number.isInteger(last)
  )
    return "ERROR";

  let sum = 0;

  switch (first < last) {
    case true:
      while (first <= last) {
        sum += first;
        first++;
      }
      break;

    case false:
      while (first >= last) {
        sum += first;
        first--;
      }

    default:
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
