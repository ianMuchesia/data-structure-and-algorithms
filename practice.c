#include <stdio.h>

int main()
{

 double salary;

 printf("please enter the salary");
 scanf("%lf", &salary);

 double* salaryPointer = &salary;

 printf("\nThe value of the salary is: %lf", *salaryPointer);

 printf("\nThe value of the salary double is: %lf", *salaryPointer*2);



return  0;
}