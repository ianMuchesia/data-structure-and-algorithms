#include <stdio.h>

enum Size
{
    Small,
    Medium,
    Large,
    ExtraLarge,
};

int main()
{
    enum Size shoeSize;

    shoeSize = Small;

    printf("%d", shoeSize);

    return 0;
}

// enum Size shoeSize;

// shoeSize = Small;