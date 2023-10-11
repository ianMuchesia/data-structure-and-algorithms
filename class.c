#include <stdio.h>

int main()
{

    float avg;
    int sum;
    int a, b, c;

    printf("Enter marks for the subject one");
    scanf("%d", &a);
    printf("Enter marks for the subject two");
    scanf("%d", &b);
    printf("Enter marks for the subject three");
    scanf("%d", &c);

    //scanf("%d%d%d", &a, &b, &c);

    sum = a + b + c;

    avg = sum / 3;

    if (avg >= 0 && avg <= 39)
    {
        printf("\nfail");
    }
    else if (avg >= 40 && avg <= 49)
    {
        printf("\nD");
    }
    else if (avg >= 50 && avg <= 59)
    {
        printf("\nC");
    }
    else if (avg >= 60 && avg <= 69)
    {
        printf("\nB");
    }
    else if (avg >= 70 && avg <= 100)
    {
        printf("\nA");
    }
    else
    {
        printf("\nWrong answer");
    }

    return 0;
}
