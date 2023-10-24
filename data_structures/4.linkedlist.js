 class Node{
    constructor(value){
        this.value = value;
        this.next  = null
    }
 }


 class LinkedList{
    constructor(){
        this.head = null
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;


    }

    getSize(){
        return this.size;

    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++ 

    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let previous = this.head;
            while(previous.next){
                previous = previous.next
            }
            previous.next = node;
        }
        
        this.size++;

    }
    insert(value, index){
        if(index<0 || index>this.size){
            console.log("invalid index")
            return;
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let previousPointer = this.head;
            for(let i=0;i<index-1;i++){

                previousPointer=previousPointer.next;
               
            }
            
            //previousPointer.next here is at the index position
            node.next = previousPointer.next
            previousPointer.next = node;
            this.size++;

        }

    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            console.log("invalid index")
            return null;

        }
        let removedNode;
        if(index ===0){
            removedNode = this.head;
            this.head = this.head.next;
        }else{
            let previousPointer = this.head;

            for(let i=0;i<index-1;i++){
                previousPointer=previousPointer.next
            }
            removedNode = previousPointer.next
            previousPointer.next = removedNode.next

        }
        this.size--;
        return removedNode.value
    }

    print(){
       if(this.isEmpty()){
        console.log("the list is empty")
       } else {
        let current = this.head;
        let listValues = ''
        while(current){
            listValues += `${current.value + " " }`;
            current = current.next
        }
        console.log(listValues)
       }
    }

 }


 const list  = new LinkedList()

 console.log("List is empty: "+ list.isEmpty())

 console.log("List size: "+ list.getSize())
 list.print()
 list.append(10)
 list.print()
 list.append(20)

 list.prepend(30)
 list.insert(50,2)
 list.insert(100,0)
 list.removeFrom(3)
 list.print()


