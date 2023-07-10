function minMax(arr){
   arr.sort((a, b) => a - b);
     const maxSum = arr.slice(1).reduce((a,c)=>{return a + c},0)
     const minSum = arr.slice(0,-1).reduce((a,c)=>{return a + c},0)

   return [maxSum, minSum]

}

console.log(minMax([1,2,3,4,5]));