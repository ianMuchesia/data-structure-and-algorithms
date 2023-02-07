#include <iostream>
#include <string>

using namespace std;

class CircularQueue
{
private:
    int rear;
    int front;
    int arr[5];

public:
    CircularQueue()
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
        if (rear == front == -1)
        {
            return true;
        }
        return false;
    }
    bool isFull()
    {
        if ((rear + 1) % 5 == front)
        {
            cout << "yeah" << endl;
            return true;
        }
        return false;
    }
    void enqueue(int val)
    {
        if (isFull())
        {
            cout << "queue is full" << endl;
            return;
        }
        if (rear == front)
        {

            arr[front] = val;
        }
        else
        {
            arr[rear] = val;
        }
        rear++;
    }
    void dequeue()
    {
        if (isEmpty())
        {
            cout << "queue is empty" << endl;
            return;
        }
        if (rear == front)
        {
            arr[rear] = 0;
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
    CircularQueue queueObject;

    return 0;
}