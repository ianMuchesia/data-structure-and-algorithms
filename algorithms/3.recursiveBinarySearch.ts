function recallBinarySearch(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middlepoint = Math.floor((start + end) / 2);

    console.log(nums[middlepoint])
   
    if (nums[middlepoint] === target) {
      return middlepoint;
    } else if (nums[middlepoint] < target) {
        
  start = middlepoint+1;
   

    } else {
      end = middlepoint - 1;
    }
  }

  return -1;
}

function recursiveBinarySearch(nums: number[], target: number): number {
  

    function searchTarget(start:number, end:number,nums:number[],target:number ):number{
        if(start<end){
            return -1;
        }

        let middlepoint = Math.floor((start + end)/2)
        if(nums[middlepoint] === target)
        {
            return target;
        }else if(nums[middlepoint]>target){
            return searchTarget(start,middlepoint-1,nums,target);
        }else{
            return searchTarget(middlepoint+1,end,nums,target)
        }

    }
    return searchTarget(0, nums.length-1,nums,target)
}

console.log(recallBinarySearch([1, 2, 3, 5, 8, 11, 16, 19], 1));
console.log(recursiveBinarySearch([1, 2, 3, 5, 8, 11, 16, 19], 1));
