class Node{
    constructor(value){
        this.value = value;
        this.next = null;
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
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let previous = this.head;

            while(previous.next){
                previous = previous.next
            }
            previous.next = node;
        }
        this.size++
    }
}

function createLinkedList(arr){
    const list = new LinkedList()
    for(let i = 0; i<arr.length;i++){
        list.append(arr[i]);
    }

    return list;
}

function mergeLists(list1, list2) {
    const mergedList  = new LinkedList()

    let current1 = list1.head
    let current2 = list2.head

    while(current1 && current2){
        if(current1.value === current2.value){
            mergedList.append(current1.value)
            mergedList.append(current2.value)
            current1 = current1.next
            current2 = current2.next
        }else if(current1.value<current2.value){
            mergedList.append(current1.value)
            current1 = current1.next;
        }else{
            mergedList.append(current2.value);
            current2 = current2.next
        }
 
       
    }
    while(current1){
        mergedList.append(current1.value)
        current1 = current1.next;
    }

    while(current2){
        mergedList.append(current2.value)
        current2 = current2.next;
    }

    return mergedList.head
}

// Example usage:
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const merged = mergeLists(list1, list2);

console.log(merged)
