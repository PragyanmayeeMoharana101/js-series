let armstrong = function(n){
    let c= count(n);
    let d= product(n,c);
    if(n==d){
        console.log(n,"is an armstrong number");
    }else{
        console.log(n,"is not an armstrong number");
    }
    
}
let count= function(n){
    let c=0;
    while(n!=0){
        c++;
        n= parseInt(n/10);
    }
    return c;
}
let product = function(n,c){
    let s=0;
    while(n!=0){
        a=n%10;
        let p=1;
        for(let i=1;i<=c;i++){
            p=p*a;
        }
        s=s+p;
        n=parseInt(n/10);
    }
    return s;

}
let n=153;
armstrong(n);
