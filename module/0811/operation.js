
function prime(n){
    let c= 0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        console.log(n,"is a prime number")
    }else{
        console.log(n,"is a composite number")
    }
}

/*function display(callback){
    callback(5);
}*/
function armstrong(n){
    let m=n;
    let c=0;
    while(n>0){
        c++;
        n=parseInt(n/10);
    }
    let d=m;
    let s=0;
    while(m>0){
        let p=1;
        let a=m%10;
        for(let i=1;i<=c;i++){
            p=p*a;
        }
        s=s+p;
        m=parseInt(m/10);
    }
    if(d==s){
        console.log(d,"is an armstrong number");
    }else{
        console.log(d,"is not an armstrong number");
    }
}

function strong (n){
    let m=n;
    let s=0;
    while(n>0){
        let f=1;
        let a= n%10;
        for(let i=1;i<=a;i++){
            f=f*i;
        }
        s=s+f;
        n=parseInt(n/10);
    }
    if(s==m){
        console.log(m,"is a strong nmber");
    }else{
        console.log(m,"is not an strong number");
    }
}

module.exports = {prime,armstrong,strong}