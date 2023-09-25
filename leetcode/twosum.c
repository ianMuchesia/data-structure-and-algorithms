#include <stdio.h>

void findTarget(int arr[], int size, int target)
{
    int index_1;
    int index_2;

    for (int i = 0; i < size - 1; i++)
    {

        int j = i + 1;
        for (j; j < size; j++)
        {
            int total = arr[i] + arr[j];

            if (total == target)
            {
                index_1 = arr[i];
                index_2 = arr[j];
            }
        }
    }

    printf("index 1: %d", index_1);
    printf("\nindex 2: %d", index_2);
}

int main()
{

    int arr[] = {2, 7, 11, 15};

    int arrSize = sizeof(arr) / sizeof(arr[0]);

    findTarget(arr, arrSize, 26);

    return 0;
}