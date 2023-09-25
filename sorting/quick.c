#include <stdio.h>
#include <stdlib.h>

// void quickSort(int arr[], int size)
// {
//     if (size <= 1)
//     {
//         return;
//     }

//     int pivot = arr[size - 1];

//     int *leftArray = malloc(size * sizeof(int));  // Dynamic allocation
//     int *rightArray = malloc(size * sizeof(int)); // Dynamic allocation

//     int leftSize = 0;
//     int rightSize = 0;

//     for (int i = 0; i < size - 1; i++)
//     {
//         if (arr[i] > pivot)
//         {
//             rightArray[rightSize] = arr[i];
//             rightSize++;
//         }
//         else
//         {
//             leftArray[leftSize] = arr[i];
//             leftSize++;
//         }
//     }

//     quickSort(leftArray, leftSize);
//     quickSort(rightArray, rightSize);

//     for (int i = 0; i < leftSize; i++)
//     {
//         arr[i] = leftArray[i];
//     }
//     arr[leftSize] = pivot;
//     for (int i = 0; i < rightSize; i++)
//     {
//         arr[leftSize + 1 + i] = rightArray[i];
//     }

//     free(leftArray);
//     free(rightArray);
// }

void swap(int *x, int *y);
void quickSort(int array[], int length);
void quick_recursion(int array[], int low, int high);
int partition(int array[], int low, int high);

int main()
{
    int arr[6] = {-6, 20, 8, -2, 4, 4};
    int size = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, size);

    for (int i = 0; i < size; i++)
    {
        printf("%d\n", arr[i]);
    }

    return 0;
}

void swap(int *x, int *y)
{
    int temp = *x;

    *x = *y;

    *y = temp;
}

void quickSort(int array[], int length)
{
    quick_recursion(array, 0, length - 1);
}

void quick_recursion(int array[], int low, int high)
{

if(low<high){
  int pivot_index = partition(array, low, high);
    quick_recursion(array, low, pivot_index - 1);
    quick_recursion(array, pivot_index + 1, high);
}
  
}


int partition(int array[], int low, int high)
{
    int pivot_value = array[high];
    int i = low;

    for(int j = low ; j<high; j++){
        if(array[j] <= pivot_value){
            swap(&array[i], &array[j]);
            i++;
        }
    }

    swap(&array[i], &array[high]);
    return i;

}