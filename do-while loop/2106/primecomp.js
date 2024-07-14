let n=5;
let s=0;
console.log("number is",n);
let i=1;
do{
    if(n%i==0){
        s=s+1;
    }
    i++;
}while(i<=n);
if(s==2){
    console.log("number is prime");
}else{
    console.log("number is composite");
}