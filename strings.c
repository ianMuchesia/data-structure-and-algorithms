#include <stdio.h>

int main()
{

    // strings are collection of characters that are used to represent textual data

    // strings in c is an aray of characters

   //char str[] = "Msodoki";

    char str2[10];

    printf("please enter your name");

    fgets(str2, sizeof(str2), stdin);

    printf("%s", str2);

    return 0;
}