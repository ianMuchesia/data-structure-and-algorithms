const factorialFunc = (n)=>{
    let product=1
    for(let i=n;i>0;i--){
        product = product * i
    }
    return product;
}
console.log(factorialFunc(5))