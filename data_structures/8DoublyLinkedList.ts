// class DoublyNode{
//     value:number;
//     next:DoublyNode|null;
//     prev:DoublyNode|null;
//     constructor(value:number, next?:DoublyNode|null, prev?:DoublyNode|null)
//     {
//         this.value = value;
//         this.next = (next === undefined ?null:next);
//         this.prev = (prev=== undefined?null:prev);
//     }
// }

// class DoubleLinkedList{
//     head:DoublyNode|null;
//     tail:DoublyNode|null;
//     size:number;

//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     prepend(value:number){

//         const node = new DoublyNode(value);
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             if(this.head){
               
//                 node.next = this.head;
//                 this.head.prev = node;
//                 this.head = node;
                
//             }
          
//         }
//         this.size++
   
        
        
//     }


//     append(value:number){
//         const node = new DoublyNode(value);

//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node;
//         }else{
//             if(this.tail){
//                 this.tail.next = node;
//                 node.prev = this.tail;
//                 this.tail = node;
//             }
//             console.log(this.tail)
//         }
//      this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("Emty")
//             return null
//         }
//         let current = this.head;
//         let value = "";
//         while(current){
//             value += `${current.value+" "  }`;
//             current = current.next;

//         }

//         console.log(value);
//     }

// }


// const doublyList  = new DoubleLinkedList()

// doublyList.prepend(10);
// doublyList.prepend(20)
// doublyList.prepend(30)
// doublyList.append(40)
// doublyList.print()


class DoublyNode {
    value: number;
    next: DoublyNode | null;
    prev: DoublyNode | null;
  
    constructor(value: number, next: DoublyNode | null = null, prev: DoublyNode | null = null) {
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class DoublyLinkedList {
    head: DoublyNode | null;
    tail: DoublyNode | null;
    size: number;
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    prepend(value: number) {
      const node = new DoublyNode(value, this.head);
      if (this.head) {
        this.head.prev = node;
      } else {
        this.tail = node;
      }
      this.head = node;
      this.size++;
    }
  
    append(value: number) {
      const node = new DoublyNode(value, null, this.tail);
      if (this.tail) {
        this.tail.next = node;
      } else {
        this.head = node;
      }
      this.tail = node;

      console.log(this.tail)
      this.size++;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Empty");
        return;
      }
  
      let current = this.head;
      let values:number[] = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
  
      console.log(values.join(" "));
    }
  }
  
  const doublyList = new DoublyLinkedList();
  
  doublyList.prepend(10);
  doublyList.prepend(20);
  doublyList.prepend(30);
  doublyList.append(40);
  doublyList.print();
  