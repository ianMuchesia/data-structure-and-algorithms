const factorialFunc = (n)=>{
    let product=1
    for(let i=n;i>0;i--){
        product = product * i
    }
    return product;
}
console.log(factorialFunc(5))

//final solution 
const factorial= (n)=>{
    let result = 1;
    for(let i = 2; i<=n ; i++){
        result = result * i
    }
    return result;
}

const recursiveFactorial = (n)=>{
    if(n>1){
        return n * recursiveFactorial(n-1)
    }else{
        return 1;
    }
}
console.log(recursiveFactorial(4))