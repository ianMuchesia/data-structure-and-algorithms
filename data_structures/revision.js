class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.size++;
            
        }else{
            let temp = this.head
            this.head =node;
            node.next = temp;
            this.size++;

        }
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.size++;
        }else{
            let  previous = this.head;

            while(previous.next){
                previous = previous.next 
                console.log(previous)
            }
             console.log(previous)
            previous.next = node;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empty")
        }else{
            let current = this.head;
            
            let listValues = '';

            while(current){
                listValues += `${current.value} `
                current = current.next;
            }

            console.log(listValues)

        }
    }


}


const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(40)

console.log("the list is empty: "+ list.isEmpty())
list.print()
