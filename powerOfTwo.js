const powerOfTwo = (n)=>{
    if(n<2)return false;

    while(n>2){
        n = n /2;
        }
        if(n !== 2){
            return false
        }
        return true;
}

console.log(powerOfTwo(12))

//correct solution 
function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2 !== 0){
            return false
        }
        n = n/2
    }
    return true;
}

function isPowerOfwoBitwise(n){
    if(n<1){
        return false;
    }
    return (n & (n-1))=== 0;
}