// function isValid(s) {

//   const map = new Map([["(", ")"], ["{", "}"], ["[", "]"]])

//   const newArr = s.split("")

//   for(let i = 0; i<=newArr.length; i++){

//      if(i % 2 === 0){
//       if(map.has(newArr[i])){

//         if(map.get(newArr[i]) !== newArr[i+1]){

//           return false
//         }
//       }else{
//         return false
//       }
//      }

//   }

//   return true;
// }

// console.log(isValid("()"));

class Stack {
  constructor() {
    this.items = [];
  }

  addItem(item) {
  
    this.items.push(item);
  }

  removeItem() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  print(){
        
    console.log(this.items);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function isValid(s) {
  
  const stack = new Stack;

  const map = new Map([["(", ")"], ["{", "}"], ["[", "]"]])
  const newArr = s.split('')
  //console.log(newArr)


  for(const item of newArr){
    console.log(item)
    if(map.has(item)){
      console.log("here")
      stack.addItem(item)
   
    }else{

      const topItem = stack.peek(item)
     stack.print()
      if(map.get(topItem) === item){
       
        stack.removeItem()
      }else{
        stack.addItem(item)
      }
    }
   
  }

  if(stack.isEmpty()){
    return true
  }else{
    return false
  }
  
}
console.log(isValid("{]"))



function isValid(s) {
  const stack = [];

  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
  ]);

  for (const char of s) {
    if (map.has(char)) {
      stack.push(char); // Push opening brackets onto the stack
    } else {
      const topChar = stack.pop();
      if (!topChar || map.get(topChar) !== char) {
        return false; // Invalid if closing bracket doesn't match the top of the stack
      }
    }
  }

  return stack.length === 0; // Valid if the stack is empty
}
