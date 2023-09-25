const arr3D = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diag1 += arr[i][i];
  }

 let counter = 0
  for(let j = arr.length-1;j>=0;j--){
 
    diag2 += arr[j][counter];
    counter++
  }
 
  if(diag1>diag2){
    
    return diag1-diag2;
  }
 
  return diag2-diag1
}

diagonalDifference(arr3D);
