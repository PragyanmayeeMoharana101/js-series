console.log("prime numbers between 10 and 20 are");
let n=10;
do{
    let c=0;
    let i=1;
    do{
        if(n%i==0){
            c++;
        }
        i++;
    }while(i<=n);
    if(c==2){
        console.log(n);
    }
    n++;
}while(n<=20);