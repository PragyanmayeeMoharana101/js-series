const armstrong = (n,c) => p= product(n,c); 

const count = (n) => {
    let c=0;
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
        f=1;
        for(let i=1;i<=c;i++){
            f=f*d;
        }
        n=parseInt(n/10);
        s=s+f;
    }
    return s; 
}
let n= 153;
let c= count(n);
const r= armstrong(n,c);
if(n==r){
    console.log(n,"is an armstrong number");
}else{
    console.log(n,"is not an armstrong number");
}