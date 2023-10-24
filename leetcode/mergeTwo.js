
function mergeTwoSortedLists(list1, list2){

    let firstPointer = 0;
    let secondPointer = 0;

    let sortedList = [];
    let counter = 0;

   while(secondPointer<list1.length && secondPointer<list2.length){
    if(list1[firstPointer] === list2[secondPointer]){
        sortedList.push(list1[firstPointer])
        sortedList.push(list2[secondPointer])
        firstPointer++;
        secondPointer++;
    }else if(list1[firstPointer]<list2[firstPointer]){
        sortedList.push(list1[firstPointer]);
        firstPointer++;
    }else{
        sortedList.push(list2[secondPointer])
        secondPointer++
    }
    counter ++
   }

const arr = sortedList.split("")
return arr;



}

console.log(mergeTwoSortedLists([1,2,4],[1,3,4]))



