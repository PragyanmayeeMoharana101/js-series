let strong = function(){
    let n= 145;
    let m=n;
    s=0;
    while(n!=0){
        d=n%10;
        let f=1;
        for(let i=1;i<=d;i++){
            f=f*i;
        }
        s=s+f;
        n=parseInt(n/10);
    }
    if(m==s){
        console.log(m,"is a strong number");
    }else{
        console.log(m,"is not a strong number");
    }
}
strong();