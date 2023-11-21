class LinkNode {
  value: number;
  next: LinkNode | null;
  constructor(value: number, next?: null | LinkNode) {
    this.value = value;
    this.next = next === undefined ? null : next;
  }
}

class ListNodes {
  head: LinkNode | null;
  tail: LinkNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prependValue(value: number) {
    const node = new LinkNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value: number) {
    const node = new LinkNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
    }
    this.size++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.head?.value;
      if (this.head) {
        this.head = this.head?.next;
      }
      this.size--;
      return value;
    }
  }

  removeEnd() {
    if (this.isEmpty()) {
      return null;
    } else {
      if (this.tail && this.head) {
        const value = this.tail.value;
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let prev = this.head;
          while (prev?.next !== this.tail) {
            if (prev.next) {
              prev = prev?.next;
            }
            
          }
          prev.next = null;
        this.tail = prev;
        }
        this.size--;
        return value;
      }
    }
  }

  print(){
    if(this.isEmpty()){
        return null;
    }else{
        let current = this.head;
        let returnValue = " ";

        while(current){
            returnValue+= `${" " + current.value+ " " }` ;
            current= current.next

        }

        console.log(returnValue);
    }
  }
}



// const listnodes = new ListNodes();

// listnodes.append(1)
// listnodes.append(2)
// listnodes.append(3)
// listnodes.append(4)
// listnodes.prependValue(5);
// listnodes.append(10)
// listnodes.removeEnd()
// listnodes.removeFront()
// listnodes.print()

export default ListNodes;