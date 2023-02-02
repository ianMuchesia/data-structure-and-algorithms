#include <iostream>
#include<string>
using namespace std;
class Stack{
private:
    int top;
    int arr[5];
public:
    Stack()
    {
        top = -1;
        for(int i= 0;i<5;i++)
        {
            arr[i]= 0;
        }
    
    }
    //we are checking stack underflow
    bool isEmpty()
    {
        if(top == -1)
            return true;
        else
            return false;
    }
    //we are checking stack overflow 
    bool isFull()
    {
        if(top == 4){
            return true;
        }else{
            return false;
        }
    }
    //adding items to the stack using push
    void push(int val)
    {
        if(isFull()){
            cout<<"stack overflow"<<endl;
        }else{
            top++;//top will become 0
            arr[top] = val;
        }
    }
    //removing items in the array 
    int pop()
    {
        if(isEmpty()){
            cout<<"stack underflow"<<endl;
            return 0;
        }else{
           int topValue = arr[top];
           arr[top] = 0;
           top--;
           return popValue;
        }
    }
    //count number of elements in the array
    int count()
    {
        return top+1;       
    }
    //access the item position
    int peek(int pos)
    {
       if(pos>top){
        cout<<"element does not exist"<<endl;
        return 0;
       }else{
           return arr[pos];
       }
       
    }
    // change the position
    void change(int pos, int val)
    {
        if(isEmpty()){
            cout<<"stack underflow"<<endl;
        }else{
            arr[pos] = val;
             cout<<"value changed at the location"<<pos<<endl;
        } 
    }
    //displaying the value in a descending order
    void display()
    {
        cout<<"this is the stack: "<<endl:
            for(let i=top+1;i>=0;i--){
                cout<<arr[i]<<endl;
            }
    }
    
    
};


int main()
{
    //create an instance or object of class Stack
    Stack stackObj;
    int position, option, value;
    
    do{
        cout<<"which operation do you want to perfom"<<endl;
        
    }while(option != 0);
    return 0;
}
