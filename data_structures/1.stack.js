class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
       return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
    print(){
        
        console.log(this.items.toString());
        // for(let i = this.items.length-1; i>0;i--){
        //     console.log(this.items.length[i]);
        // }
    }
}



const stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(30)
console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())
stack.print()