function cartesianProduct(arr1, arr2) {
  const result = [];

  console.log(arr1, arr2)

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let innerResult = [];
   

      innerResult.push(arr1[i]);

      innerResult.push(arr2[j]);
      
      result.push(innerResult);

     
    }
   
  }

 return result;
}

const arr1 = [1, 2];

const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2));
