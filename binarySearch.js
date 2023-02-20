const binarySearch = (n, t)=>{
    if(n == []){
        return -1;
    }
    let leftIndex = 0
    let rightIndex = n.length -1
     while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(t == n[middleIndex]){
         
            return middleIndex;
        }
        else if(t>middleIndex){
            leftIndex =middleIndex+1
        }else{
            rightIndex = middleIndex-1
        }
    } 
    return -1
}
//console.log(binarySearch([-5,2,4,6,10], 10))
/* console.log(binarySearch([-5,2,4,6,10], 6)) */


//recursion version
const recursiveBinarySearch = (n,t)=>{
    if (n ==[]){
        return -1
    }
    let leftIndex = 0
    let rightIndex = n.length - 1
    let middleIndex = Math.floor((rightIndex + leftIndex)/2)
    if(t === n[middleIndex]){
        return middleIndex;

    }else if(t > n[middleIndex]){
        return recursiveBinarySearch(n.slice(middleIndex+1),t)
    }else if(t<n[middleIndex]){
        return recursiveBinarySearch(n.slice(0,middleIndex),t)
    }else{
        return -1;
    }
    
   
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 6))

//correct version
const recursionBinarySearch = (arr, target)=>{
    return search(arr, target, 0, arr.length-1);
}

const search =( arr, target, leftIndex, rightIndex)=>{

    if(leftIndex> rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleIndex])return middleIndex;

    if(target>middleIndex){
        return search(arr, target, middleIndex+1, rightIndex)
    }else{
        return search(arr, target, leftIndex, middleIndex-1)
    }
}
 