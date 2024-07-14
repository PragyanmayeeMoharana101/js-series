let n=5;
let s=0;
console.log("number is",n);
let i=1;
do{
    if(n%i==0){
        s=s+i;
    }
    i++;
}while(i<=n);
if(s==n*2){
    console.log("number is a perfect number");
}else{
    console.log("number is not a perfect number");
}