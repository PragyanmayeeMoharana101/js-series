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
if(s==n*2){
    console.log("number is a perfect number");
}else{
    console.log("number is not a perfect number");
}