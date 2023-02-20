#include <iostream>
#include <string>

using namespace std;

class Queue
{
private:
    int rear;
    int front;
    int arr[5];

public:
    Queue()
    {
        rear = -1;
        front = -1;
        for (int i = 0; i < 5; i++)
        {
            arr[i] = 0;
        }
    }
    bool isEmpty()
    {
        if (rear==-1 && front== -1)
        {
            return true;
        }else{
            return false;
        }

    }
    bool isFull()
    {
        if (rear == 4)
        {

            return true;
        }else
        {
           return false;
        }

    }
    void enqueue(int val)
    {
        if (isFull())
        {
            cout << "queue is full" << endl;
            return;
        }
        if (isEmpty())
        {
            front=rear=0;
            arr[rear]= val;
        }
        else
        {
            rear++;
            arr[rear] = val;
        }

    }
    int dequeue()
    {

        if (isEmpty())
        {
            cout << "queue is empty" << endl;
            return 0;
        }
        if (rear == front)
        {

            arr[rear]= 0;
            rear = front = -1;
        }
        else
        {

            arr[front] = 0;
            front++;
        }

    }
      void display(){
        cout<<"the queue looks like this"<< endl;
        for(int i=0;i<5;i++){
            cout<<arr[i]<<endl;
        }
    }
};

int main()
{
    Queue queueObject;
    queueObject.enqueue(5);
    queueObject.enqueue(5);
    queueObject.enqueue(5);
queueObject.enqueue(5);
queueObject.enqueue(5);
queueObject.enqueue(5);
queueObject.dequeue();
queueObject.dequeue();
queueObject.dequeue();
queueObject.dequeue();
queueObject.dequeue();
queueObject.dequeue();
    queueObject.display();
    return 0;
}
