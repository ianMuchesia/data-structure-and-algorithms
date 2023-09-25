var longestCommonPrefix = function (strs) {
  if (!strs[0]) return "";
  if (strs.length === 1) return strs[0];
  let same = true
  for(let i =1;i<strs.length;i++){
    if(strs[i] !==strs[0]){
        same = false;
    }
  }
  if(same){
    return strs[0];
  }
  let prefix = "";
  return checkPrefix(strs, 1, prefix);
};

function checkPrefix(arr, n, prefix) {
  let fullChecked = true;

  let tempPrefix = arr[0].substring(0, n);

  for (let i = 1; i <arr.length; i++) {
    //console.log(arr[i])
    if (arr[i].substring(0, n) !== tempPrefix) {
      fullChecked = false;
    }
  }

  if (fullChecked) {
    prefix = tempPrefix;
    return checkPrefix(arr, n + 1, prefix);
  } else {
    return prefix;
  }

}

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
