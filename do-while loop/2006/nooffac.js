let n=6;
let c=0;
console.log("number is",n);
let i=1;
do{
    if(n%i==0){
        c=c+1;
    }
    i++;
}while(i<=n);
console.log("number of factors are",c);