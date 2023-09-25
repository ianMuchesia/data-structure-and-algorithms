function climbingStairCase(n){
    // if(n>2){
    //     return climbingStairCase(n-1) + climbingStairCase(n-2);
    // }

    // return n;

    const noOfWays = [ 1,2];
    for(let i= 0;i<=n;i++){
        noOfWays = noOfWays[i-1] + noOfWays[i-2];
    }

    return noOfWays[n-1];
}


console.log(climbingStairCase(5))