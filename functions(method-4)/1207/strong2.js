function checkstrong(p){
    let s=0;
    while(p!=0){
        let d= p%10;
        f= factorial(d);
        s=s+f;
        p=parseInt(p/10);
    }
    return s;
}
function factorial(d){
    let f=1;
    for(let i=1; i<=d; i++){
        f=f*i;
    }
    return f;
} 
let n= 145;
let r= checkstrong(n);
if(n==r){
    console.log(n,"is a strong number");
}else{
    console.log(n,"is not a strong number");
}