#include <stdio.h>
#include<stdbool.h>


bool palindrome(int x)
{

if(x<1){
    return false;
}
    int reverse = 0, remainder;
    int original = x;

    while (x != 0)
    {
        remainder = x % 10;
        reverse = reverse * 10 + remainder;
        x /= 10;
    }
    return reverse ==original;
}

int main()
{

    bool n = palindrome(-2349);
    printf("%d", n);
    return 0;
}