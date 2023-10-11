const set = new Set([1,2,3]);

//add 
set.add(4);

//check
console.log(set.has(2))

for (const item of set){
    console.log(item)
}