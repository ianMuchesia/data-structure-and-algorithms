#include <stdio.h>

int main()
{

    // memory address
    //  int age = 25 ;

    // printf("%p" , &age);

    // creating pointers
    // int *ptr;
    // int var;

    // var = 25;

    // ptr = &var;

    // printf("\n%p", ptr);

    // accessing the value of a variable using a pointer

    // int age = 25;

    // int *ptr = &age;

    // printf("Value is: %d", *ptr);

    // change the value of a variable using pointer variable

    // int age = 25;

    // int *ptr = &age;

    // *ptr = 31;

    // printf("The value is : %d", age);


    double salary;

    printf("please input your salary: ");
    scanf("%lf", &salary);

    double* ptr = &salary;

    printf("\nThe salary using a pointer: %lf", *ptr);

    // ptr = *ptr * 2;

    // printf("The new salary is: %lf", *ptr);
    *ptr = *ptr * 2;

printf("\nThe new salary is: %lf", *ptr);

    return 0;
}