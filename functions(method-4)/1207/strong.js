function checkstrong(p){
    let s=0;
    while(p!=0){
        let d= p%10;
        let f= 1;
        for(let i=1;i<=d;i++){
            f=f*i;
        }
    s=s+f;
    n=parseInt(p/10);
    }
    return s;
}
let n= 145;
let r= checkstrong(n);
if(n==s){
    console.log(n,"is a strong number");
}else{
    console.log(n,"is not a strong number");
}