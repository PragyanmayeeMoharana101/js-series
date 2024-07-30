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
let ans= n==r? "is a strong number": "is not a strong number";
console.log(n,ans);