let n=145;
let m=n;
console.log("number is",n);
let s=0;
for(; n>0;){
    d=n%10;
    f=1;
    for(let i=1; i<=d; i++){
        f=f*i;
    }
    s=s+f;
    n = parseInt(n/10);

}
if(s==m){
    console.log("number is a strong number");
}else{
    console.log("number is not a strong number");
}
