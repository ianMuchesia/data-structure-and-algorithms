#include <stdio.h>
#include <stdbool.h>

// use a do while loop because it is very efficient than the one you implemented you are using recursions
//you don't need to check the last element against the element after it
void checkSwapped(int *arr)
{


  bool swapped;

//loop until second last element 

  for(int i = 0; i<4; i++){

 
    if(arr[i]>arr[i+1]){
           
           int firstPlaceholder = arr[i];
           int secondPlaceholder = arr[ i + 1];

        arr[i]=secondPlaceholder;
        arr[i+1]= firstPlaceholder;
        swapped = true;

    }
  }

  if(swapped){
    checkSwapped(arr);
  }

  

 
}

int main()
{

    int arr[5] = {-6, 20, 8, -2, 4};

    checkSwapped(arr);

    for (int i = 0; i < 5; i++)
    {
        printf("%d\n", arr[i]);
    }

    return 0;
}