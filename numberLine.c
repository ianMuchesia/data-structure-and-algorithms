// consider two inputs of 1 and 2
// one has the location and the other is jump

#include <stdio.h>
#include <math.h>

int numberLine(int x1, int v1, int x2, int v2)
{
    double n = (x1 - x2) / (v2 - v1);

    if (fmod(n, 1.0) == 0.0 && n > 0) {
        return 1; // Kangaroos meet
    } else {
        return 0; // Kangaroos don't meet
    }
}

int main()
{
    int result = numberLine(2, 1, 1, 2);

    if (result == 1) {
        printf("YES\n");
    } else {
        printf("NO\n");
    }

    return 0;
}
