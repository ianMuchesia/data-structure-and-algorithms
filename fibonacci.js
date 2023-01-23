newArray = [1,2,3,4,5]

const fibonacciFunc =(n)=>{
    let fibArray = [0,1];
    for(let i=2;i<n;i++){
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
    }
    return fibArray;


}
console.log(fibonacciFunc(7))

//final solution

function fibonacci(n){
    const fib = [0,1]
    for(let i =2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}