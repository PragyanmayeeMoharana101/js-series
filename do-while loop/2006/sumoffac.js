let n=6;
let s=0;
console.log("number is",n);
let i=1;
do{
    if(n%i==0){
        s=s+i;
    }
    i++;
}while(i<=n);
console.log("sum of factors is",s);