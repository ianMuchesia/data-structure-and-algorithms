#include<stdio.h>
#include<stdlib.h>


int main()
{
     int n =4;

     int* ptr;

     ptr = (int*)malloc(n* sizeof(int));

     if(ptr == NULL){
        printf("memory allocation process failed\n");
     }

     printf("Please input the numbers\n");

     for(int i = 0; i<4; i++){
        scanf("%d", (ptr + i));
     }

     printf("The number entered include: \n");

     for(int i=0; i<4; i++){
        printf("The number is: %d\n" , *(ptr+i));
     }



printf("the size of n is: %d\n", n);
     //free(ptr);
     printf("Allocated memory\n");

     for(int i=0;i<4;i++){
        printf("The allocated memory is: %p\n", (ptr + i));
     }

     n= 6;

     ptr = realloc(ptr,n*sizeof(int));

    printf("Newly allocated memory\n");

    for(int i =0; i<n;i++){
        printf("%p\n",ptr+i);
    }


    free(ptr);




    return 0;
}