const findElement=(n,t)=>{
    for(let i = 0;i<n.length;i++){
         if(n[i]=== t){
            return i;
         }
        
    }
    return -1;
}

console.log(findElement([-5,2,10,4,6], 6))