let strong = (n) => {
    let m=n;
    s=0;
    while(n!=0){
        d=n%10;
        f=factorial(d);
        s=s+f;
        n=parseInt(n/10);
    }
    if(m==s){
        console.log(m,"is a strong number");
    }else{
        console.log(m,"is not a strong number");
    }
}
let factorial= (d) => {
    let f=1;
    for(let i=1;i<=d;i++){
        f=f*i;
    }
    return f;
}
let n= 145;
strong(n);