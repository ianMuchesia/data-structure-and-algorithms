class Queue {
    constructor() {
        this.listItems = [];
    }

    enqueue(element) {
        this.listItems = [ ...this.listItems,element];
    }
    dequeue() {
        this.listItems.shift();
    }
    peek() {
        return this.listItems[0];
    }
    print() {
   console.log(this.listItems.toString())
    }

    isEmpty() {
        return this.listItems.length === 0;
    }
}


// const queue = new Queue;

// queue.enqueue(1);

// queue.enqueue(2);
// queue.enqueue(3);

// console.log(queue.peek());

// console.log(queue.isEmpty())
// queue.dequeue();

// queue.print()


//it has a linear time complexity so it is not recommended


class QueueObj {
    constructor(){
        this.listItems ={};
        this.rear = 0;
        this.front = 0;
    }


    enqueue(element){
        this.listItems[this.rear] = element;
        this.rear ++;
    }

    dequeue(){
        const item = this.listItems[this.front]
        delete this.listItems[this.front];
        this.front ++;
        return item;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    peek(){
        return this.listItems[this.front];
    }
    size(){
        return this.rear - this.front;
    }
    print(){
        console.log(this.listItems)
    }

}

const queue = new QueueObj;
console.log(queue.isEmpty())
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
queue.dequeue()

queue.print()

