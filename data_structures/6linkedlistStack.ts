import ListNodes from "./5linkedlistTail";


class LinkedListStack{
    list:ListNodes;
    constructor(){
        this.list = new ListNodes()
    }

    push(value:number){
        this.list.prependValue(value)


    }
    pop(){
        return this.list.removeFront()

    }
    peek(){
        if(this.list.head){
            return this.list.head.value;
        }else{
            return null;
        }
       

    }
    isEmpty(){

        return this.list.size === 0;

    }
    getSize(){
        return this.list.getSize();

    }
    print(){
        return this.list.print()
    }
} 


const stack = new LinkedListStack()

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop()
console.log(stack.peek())

stack.print()