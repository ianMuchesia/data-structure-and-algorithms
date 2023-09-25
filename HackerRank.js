const a = [17, 28 ,30]
const b = [99, 16, 8]

function compareTriplets(a, b) {
    let myReturnArrauy = [0,0];

    
     for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
              myReturnArrauy[0] += 1
        }else if(b[i]>a[i]){
                myReturnArrauy[1] += 1
        }else{
             myReturnArrauy = myReturnArrauy
        }
        }
    
    return myReturnArrauy;
}

console.log(compareTriplets(a,b))