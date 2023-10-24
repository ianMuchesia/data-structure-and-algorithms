#include <stdio.h>
#include <stdbool.h>

int palindrome(int input)
{

    if (input < 1)
    {
        return 0;
    }

    int original = input;

    int reverseNumber = 0;
    int remainder = 0; 
    while (input > 0)
    {
        remainder = input % 10;
        input = input / 10;
        reverseNumber = (reverseNumber * 10) + remainder;
    }

    return reverseNumber == original;
}

int main()
{

    int pali = palindrome(-121);

    printf("the value is %d", pali);

    return 0;
}