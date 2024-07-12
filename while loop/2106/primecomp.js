let n=5;
let s=0;
console.log("number is",n);
let i=1;
while(i<=n){
    if(n%i==0){
        s=s+1;
    }
    i++;
}
if(s==2){
    console.log("number is prime");
}else{
    console.log("number is composite");
}