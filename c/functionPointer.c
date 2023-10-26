#include <stdio.h>

void findValue(int *num)
{
    *num = 39;
}

 int* findSquare(int *number) {
    int square = *number * *number;
    *number = square;
    return number;
}

int* addTwoNumbers(int* num1, int* num2){
    int* sum;
    *sum =   *num1 + *num2;
    return sum;
}

int main()
{

    int number = 21;
    int *ptr = &number;

    int* result;
    int num1 = 3;
    int num2 = 4;

    result = addTwoNumbers(&num1, &num2);

    printf("Number: %d", *result);

    return 0;
}