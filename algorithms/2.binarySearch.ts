//only applies to sorted arrays 

function binarySearch(n:number[], t:number):number{


let leftIndex = 0;
let rightIndex = n.length-1;


while(leftIndex<=rightIndex){

    let middleIndex = Math.floor((leftIndex + rightIndex )/2);

    console.log(middleIndex)
    if(t===n[middleIndex]){
        return middleIndex;
    }else if(t>n[middleIndex]){
        leftIndex = middleIndex+1;
    }else{
        rightIndex = middleIndex-1;
    }
}




    return -1;
}


console.log(binarySearch([-5,2,4,6,10],-5))