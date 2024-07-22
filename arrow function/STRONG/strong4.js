let strong = (p) => {
    s=0;
    while(p!=0){
        d=p%10;
        f=factorial(d);
        s=s+f;
        p=parseInt(p/10);
    }
    return s;
}
let factorial= (d) => {
    let f=1;
    for(let i=1;i<=d;i++){
        f=f*i;
    }
    return f;
}
let n= 145;
let r= strong(n);
if(n==r){
    console.log(n,"is a strong number");
}else{
    console.log(n,"is not a strong number");
}