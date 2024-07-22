const armstrong = () => {
    const n= 153;
    const c= count(n);
    const p = product(n,c);
    if(p==n){
        console.log(n,"is a armstrong number");
    }else{
        console.log(n,"is not a armstrong number");
    }
}
const count =(n) => {
    let c =0;
    while(n!=0){
        c++;
        n=parseInt(n/10);
    }
    return c;
}
const product = (n,c) => {
    let s=0;
    while(n!=0){
        d=n%10;
        let f=1;
        for(let i=1;i<=c;i++){
            f=f*d;
        }
        n= parseInt(n/10);
        s=s+f;
    }
    return s;
}
armstrong();