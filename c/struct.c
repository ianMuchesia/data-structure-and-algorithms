#include<stdio.h>

struct Person{
    int age;
    double salary;
};

typedef struct Country{
    int size;
    int people;

}country;


int main(){

    struct Person person1;
    person1.age = 25;
    person1.salary= 700000.880;


    struct Person person2;
    person2.age = 25;
    person2.salary = 6000000.50;

    struct Person person3= {.age = 31, .salary=800000.20};

    country Kenya;
    Kenya.people = 50000000;
    Kenya.size = 300;


    printf("Age is: %d\n", person1.age);
    printf("Age is: %d\n", person2.age);
      printf("Age is: %d\n", person3.age);
          printf("Size is: %d\n", Kenya.size);



    return 0;
}