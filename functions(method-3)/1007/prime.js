function prime(p){
    let c=0;
    for(let i=1; i<=p ; i++){
        if(p%i==0){
            c++;
        }
    }
    if(c==2){
        console.log(p,"is a prime number");
    }else{
        console.log(p,"is a composite number");
    }
}
let n= 6;
prime(n);