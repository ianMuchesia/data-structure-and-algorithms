#include <stdio.h>
#include <string.h>

int main()
{

    // strlen()
    //  char language[] = "C programming";

    // printf("%s" , language);

    // printf("\nLength: %zu", strlen(language));


//strcpy
    // char food[] = "pizza";

    // char bestFood[strlen(food)];

    // strcpy(bestFood, food);

    // printf("%s", bestFood);


    //strcat()

    // char text1[] = "Ian";

    // char text2[] = " Msodoki";


    // printf("%s" , strcat(text1, text2));

    
    //strcamp

    // char text1[] = "Ian";

    // char text2[] = "ian";

    // printf("%d", strcmp(text1, text2));

    char text1[20];
    char text2[20];

    printf("Enter the first string");
    fgets(text1, sizeof(text1),stdin);

    printf("\nEnter the second string");
    fgets(text2, sizeof(text2), stdin);

    int biggerText = strcmp(text1, text2);

    if(biggerText>0){
        printf("\nText 1 is bigger");
    }else if(biggerText  == 0){
        printf("\nThey are both equal");
    }else{
        printf("\nText two is bigger");
    }

    
    return 0;
}