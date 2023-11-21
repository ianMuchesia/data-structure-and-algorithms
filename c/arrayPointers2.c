#include <stdio.h>

int main()
{

    int arr[5] = {34, 12, 21, 54, 48};

    int largest = *arr;

    for (int i = 0; i < 5; i++)
    {
        if(*(arr + i) > largest){
            largest = *(arr + i);
        }
    }

    printf("%d", largest);

    return 0;
}