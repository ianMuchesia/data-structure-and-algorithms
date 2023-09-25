#include <stdio.h>

// a = location of apple
// b=location of oranges
// s = starting distance
// t = ending distance

void countApplesAndOranges(int s, int t, int a, int b, int apples_count, int *apples, int oranges_count, int *oranges)
{

    int finalArray[2];

    int counterApple = 0;
    int counterOrange = 0;

    // int sizeOfApple = sizeof(apples)/sizeof(apples[0]);

    // int sizeOfOrange = sizeof(oranges)/sizeof(oranges[0]);

    for (int i = 0; i < apples_count; i++)
    {
        if (apples[i] + a >= s && apples[i] + a <= t)
        {
            counterApple = counterApple + 1;
        }
    
    }

    for (int j = 0; j < oranges_count; j++)
    {
        if ((oranges[j] + b >= s) && (oranges[j] + b <= t))
        {
            counterOrange++;
        }
    
    }

    finalArray[0] = counterApple;
    finalArray[1] = counterOrange;


    for (int k = 0; k<2; k++){
       printf("%d\n", finalArray[k]);
    }
}

int main()
{

    int orangesArray[2] = {5, -6};
    int applesArray[3] = {-2, 2, 1};

    countApplesAndOranges(7, 11, 5, 15, 3, applesArray, 2, orangesArray);

    return 0;
}