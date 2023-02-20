 #include<iostream> 
 using namespace std;

class Node{
public:
int key;
int data;
Node * next;

Node(){
    key = 0;
    data=0;
    next =NULL;
}
Node (int k, int d ){
    key = k;
    data = d;
    
}
};

class SinglyLinkedList{
    public:
    Node * head;
    SinglyLinkedList(){
        head = NULL;
    }
    SinglyLinkedList(Node *n){
        head = n;
    }
    //1. check if node exist using key values 
    Node* nodeExists(int k){
        Node* temp = NULL;

        Node* ptr = head;
        while(ptr!=NULL){
            if(ptr->key == k){
                temp = ptr;
                break;
            }
            ptr = ptr->next;
        }
        return temp;
    }
    //2. append a node tio the list
    void appendNode(Node *n){
        if(nodeExists(n->key) != NULL)
        {
            cout << "Node already exists : "<<n->key<<".Append another node with different key value" << endl;
         
        }else{
            if(head == NULL){
                head = n;
                cout<<"Node appended"<<endl;
            }else{
                Node* ptr = head; 
                while(ptr->next!= NULL){
                    ptr = ptr->next;
                }
                temp->next = n;
                cout<<"Node appended"<<endl;
            }
        }
    }
};
int main()
{


}