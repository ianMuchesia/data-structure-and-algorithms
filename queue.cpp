#include<iostream>
#include<string>
using namespace std;


class Queue{
    private:
    int front;
    int rear;
    int arr[5];

    public:
    //constructor
    Queue(){
        front = -1;
        rear = -1;
        for(int i=0;i<5;i++){
            arr[i] = 0;
        }
    }
    bool isFull(){
        if(rear = size(arr)-1){
            return true;
        }else{
            return false;
        }
    }
    bool isEmpty(){
        if(front == -1 && rear==-1){
            return true;
        }
        return false;
    }
    

    void enqueue(int val){
        if(isFull()){
            cout<<"queue is full"<<endl;
            return;
        }
        else if(isEmpty()){
            front = rear = 0;
        }
        else{
            rear++;
        }
        arr[rear] = val;
    }

    int dequeue(){
        int x = 0;
        if(isEmpty()){
            cout<<"deque is full"<<endl;
            return 0;
        }
        if(front = rear){
            x = arr[rear];
            arr[rear]= 0 ;
            front=rear=-1;
        }else{
            x = arr[rear];
            arr[front] = 0;
            front++;
        }
        return x;
    }

    int count(){
        if(isEmpty()){
            cout<<"the queue is empty"<<endl;
            return 0;
        }
        
        return rear - front +1;
        
    }
    void display(){
        if(isEmpty()){
            cout<<"the queue is empty"<<endl;
            
        }
        cout<<"the queue looks as follows: "<<endl;
        for(int i =front;i<=rear;i++){
            cout<<arr[i]<<endl;
        }

    }


};

int main(){

    Queue queueObj;

    int option;
    do{
        cout<<"\n\nWhat operations do you want to perfom? Select an option number. Enter 0 to exit."<<endl;
        cout<<"1. Enqueue() "<<endl;
        cout<<"2. Dequeue() "<<endl;
        cout<<"1. isEmpty() "<<endl;
        cout<<"1. isFull() "<<endl;
        cout<<"1. count() "<<endl;
        cout<<"1. display() "<<endl;
        cout<<"1. Clear Screen() "<<endl;


    }while(option != 0);


    return 0;
}