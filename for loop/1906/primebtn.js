let c=0;
console.log("prime numbers between 10 and 20 are");
for(let n=10;n<=20;n++){
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log(n);
    }
    c=0;
}