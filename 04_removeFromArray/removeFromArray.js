const removeFromArray = function (array, ...removeValue) {
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    if (removeValue.includes(array[i])) continue;
    tempArr.push(array[i]);
  }

  return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;