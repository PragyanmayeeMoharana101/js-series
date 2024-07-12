let n=6;
let c=0;
console.log("number is",n);
let i=1;
while(i<=n){
    if(n%i==0){
        c=c+1;
    }
    i++;
}
console.log("numbers of factors are",c)