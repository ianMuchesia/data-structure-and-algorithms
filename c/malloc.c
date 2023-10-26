#include <stdio.h>
#include <stdlib.h>

int main()
{

    int *ages;

    int n = 4;

    ages = (int *)malloc(n * sizeof(int));

    printf("input elements of the array\n");

    for (int i = 0; i < 4; i++)
    {
        scanf("%d", (ages + i));
    }
    prntf("The elements of the array include: \n");
    for (int i = 0; i < n; i++)
    {
        printf("Element of array: %d\n", *(ages + i));
    }

    n = 6;

    ages = realloc(ages, n*sizeof(int));

    

    return 0;
}