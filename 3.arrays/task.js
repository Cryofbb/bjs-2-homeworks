function compareArrays(arr1, arr2) {
  let result = false;

  function equality(element, index) {
    return element === arr2[index];
  }

  if (arr1.length == arr2.length) {
    result = arr1.every(equality, arr2);
  }

  return result;
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(element => ((element > 0) && ((element % 3)) == 0)).map(element => element = element * 10);
  return resultArr;
}
