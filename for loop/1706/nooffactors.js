let n=5;
let c=0;
console.log("number is",n);
for(let i=1;i<=n;i++){
    if(n%i==0){
        c=c+1;
    }
}
console.log("number of factors are",c)