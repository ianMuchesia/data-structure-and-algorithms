

const array = [
    {a:0, b:1},
    {a:0, b:2},
    {a:0, b:10},
    {a:0, b:9},
    {a:0, b:6},
];

const nums = [1,2,3,4,5,6,7,8,9,10,11,12];

for (let counter = 1; counter <= nums.length; counter++) {
    let matchFound = false;
   
    for (let i = 0; i < array.length; i++) {
        if (array[i].b === counter) {
            matchFound = true;
            console.log("selected");
            break;
        }
    }

    if (!matchFound) {
        console.log(counter);
    }
}
