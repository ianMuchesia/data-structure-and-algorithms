#include <stdio.h>

void checkInsertion(int *arr){

    int numberToBeInserted;

    for(int i = 0; i<5; i++){
        numberToBeInserted = arr[i];
       int j=i-1;
       while(j>=0 && numberToBeInserted<arr[j]){
        arr[j+1]=arr[j];
        j--;
       }
       arr[j+1]=numberToBeInserted;
    }
}


int main()
{
    int arr[5] = {6, 20, 8, -2, 4};

    checkInsertion(arr);

    for (int i = 0; i < 5; i++)
    {
        printf("%d\n", arr[i]);
    }

    return 0;
}