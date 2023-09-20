const arr =  [-4, 3, -9 ,0 ,4 ,1];

const array= []
const evenNumber = arr.filter(num=>num%2===0 && num!==0).length
const oddNumber = arr.filter(num=>num%2>0).length
const zeros = arr.filter(num=>num===0).length
array.push((evenNumber/arr.length).toFixed(6))
array.push((oddNumber/arr.length).toFixed(6))
array.push((zeros/arr.length).toFixed(6))


//stair case 


const n =6
const hash = '#'
for(let i=1;i<n+1;i++){
   const space = ' '.repeat(n-i)
   console.log(space+hash.repeat(i))
}

let hash2 = '#';
let space= ' '
const n2 = 6;

for(let i=1;i<=n2;i++){
  
    console.log(space.repeat(n2-i) + hash2.repeat(i))
}





