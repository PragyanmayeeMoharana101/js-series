let prime =(p) => {
    let c =0;
    for(let i=1;i<=n;i++){
        if(p%i==0){
            c++;
        }
    }
    return c;
}
let n= 5;
let r=prime(n);
if(r==2){
    console.log(n,"is a prime number");
}else{
    console.log(n,"is a composite number");
}