import ListNodes from "./5linkedlistTail";


class LinkedListQueue{
    list:ListNodes;
    constructor(){
        this.list = new ListNodes()
    }

    enqueue(value:number){
        return this.list.append(value)

    }
    dequeue(){
        return this.list.removeFront();
    }

    isEmpty(){
        return this.list.size === 0;
    }
    peek(){
        return this.list?.head?.value || null;
    }
}