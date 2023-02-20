newArray = [1,2,3,4,5]

const fibonacciFunc =(n)=>{
    const fibArray = [0,1];
    for(let i=2;i<n;i++){
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
    }
    return fibArray;


}
//console.log(fibonacciFunc(7))

//final solution

function fibonacci(n){
    const fib = [0,1]
    for(let i =2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}

//recursive solution
const recursiveFibonacci=(n)=>{
    let fibArray = [0,1];
    if(n>2){
        fibArray.push(recursiveFibonacci(n-1)[n-1] + recursiveFibonacci(n-2)[n-2]);
        return fibArray;
    }else{
        return fibArray.slice(0,n);
    }

}
console.log(recursiveFibonacci(3))