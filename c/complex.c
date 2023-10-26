#include<stdio.h>

struct Complex{
    double  real;
    double imagine;
};

int main(){

    struct Complex c1;
    c1.real = 21.87;
    c1.imagine = 30;

    struct Complex c2;
    c2.real = 213.34;
    c2.imagine = 112.23;


    struct Complex sum;
    sum.real = c1.real + c2.real;
    sum.imagine = c1.imagine + c2.imagine;


    printf("Result is: %.2lf + %.3lf" , sum.real , sum.imagine);

    


    


    return 0;
}