console.log("prime numbers between 10 and 20 are");
let n=10;
while(n<=20){
    let c=0;
    let i=1;
    while(i<=n){
        if(n%i==0){
            c++;
        }
        i++;
    }
    if(c==2){
        console.log(n);
    }
    n++;
}