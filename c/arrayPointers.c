#include<stdio.h>

int main(){
    int numbers[5] = { 1,3,5,7,9};

    // for(int i =0; i<5;i++ ){
    //     printf("%d = %p\n", numbers[i], &numbers[i] );
    // }


//   for(int i =0; i<5;i++ ){
//         printf("%d = %p\n", numbers[i], numbers+i );
//     }
/*printf("array address of 1 is: %p\n", numbers);
printf("array address of 3 is: %p\n", numbers +1);

printf("array address of 5 is: %p\n", numbers + 2);

printf("array address of 7 is: %p\n", numbers + 3);*/
//   for(int i =0; i<5;i++ ){
//         printf("%d = %p\n", *(numbers+i), numbers+i );
//     }
*numbers = 4;
*(numbers+4)=11;


  for(int i =0; i<5;i++ ){
        printf("%d = %p\n", *(numbers+i), numbers+i );
    }


    return 0;
}