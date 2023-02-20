 #include<iostream> 
 using namespace std;

int main(){
    int var = 5;
    //data type *pointer name 
    int *ip; //pointer to an integer
    double *dp; //pointer to a double
    float *fp; //pointer to a float
    char *cp; //pointer to a char

    ip= &var;
    cout<<"variable value"<<" "<<var<<endl;
    cout<<"Address value"<<" "<<ip<<endl;
    cout<<"pointer pointing to a value "<<*ip;
}