function prime(p){
    let c=0;
    for(let i=1;i<=p;i++){
        if(p%i==0){
            c++;
        }
    }
    return c;
}
let n= 5;
s= prime(n);
if(s==2){
    console.log(n,"is a prime number");
}else{
    console.log(n,"is a composite number");
}