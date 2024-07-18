let armstrong = function(n){
    let m=n;
    let c=0;
    while(n!=0){
        c++;
        n=parseInt(n/10);
    }
    let s=0;
    while(m!=0){
        a=m%10;
        let p=1;
        for(let i=1;i<=c;i++){
            p=p*a;
        }
        m=parseInt(m/10);
        s=s+p;
    }
    return s;
}
let p=153;
let r= armstrong(p);
if(p==r){
    console.log(p,"is an armstrong number");
}else{
    console.log(p,"is not an armstrong number");
}