class TreeNode{
    left:TreeNode|null;
    right:TreeNode|null;
    value:number;
    constructor(value:number)
    {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}



class BinarySearchTree{
    root:TreeNode|null;
    constructor()
    {
        this.root = null;
    }


    isEmpty(){
       return this.root === null;
    }
    //insert node;
    insert(value:number){
        const newNode = new TreeNode(value);
        if(this.isEmpty())
        {
            this.root = newNode;
        }else{
            this.insertNode(this.root!, newNode)

        }
    }

    insertNode(root:TreeNode, newNode:TreeNode)
    {
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root:TreeNode|null, value:number):boolean
    {
        if(!root){
            console.log("the value does not exist in the tree")
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(value<root.value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }

    }

    preOrder(root:TreeNode|null){
        if(root){
            console.log(root.value)
            this.preOrder(root.left);
            this.preOrder(root.right)

        }
    }

    inOrder(root:TreeNode|null){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrderTraversal(root:TreeNode|null){
        if(root){
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.value)
        }
    }
}


const bst = new BinarySearchTree();
console.log("the tree is empty? ",bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(30)
bst.insert(7)

//console.log("it does exist?:", bst.search(bst.root,3))
bst.preOrder(bst.root)

bst.postOrderTraversal(bst.root)