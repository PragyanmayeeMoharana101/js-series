let n=5;
let c=0;
console.log("enter a number:",n);
for(let i=1;i<=n;i++){
    if(n%i==0){
        c=c+1;
    }
}
if(c==2){
    console.log("number is prime");
}else{
    console.log("number is composite");
}