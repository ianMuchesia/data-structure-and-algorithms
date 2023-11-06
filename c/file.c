#include <stdio.h>

int main()
{
    FILE* fptr;

    fptr = fopen("text.txt", "r");

    if(fptr != NULL)
    {
        printf("file opened successfully");
    }else{
          printf("file not opened"); 
    }
    return 0;
}