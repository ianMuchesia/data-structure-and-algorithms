const greatestCommonDivisor =(num_1, num_2)=>{
    let smallestNum = num_1
    let divisorsArray = [];
    let gcd = 0;
    if(num_1>num_2){
       smallestNum = num_2;
    }

    for(let i = 1; i<=smallestNum;i++){
        if(num_1%i === 0 && num_2%i === 0){
            divisorsArray.push(i)
        }
    }
   
    return divisorsArray[divisorsArray.length-1];
       
}

console.log(greatestCommonDivisor(21,44))