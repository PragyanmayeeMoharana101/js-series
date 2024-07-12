let n=6;
let s=0;
console.log("number is",n);
let i=1;
while(i<=n){
    if(n%i==0){
        s=s+i;
    }
    i++;
}
console.log("sum of factors are",s);