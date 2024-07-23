let prime =() => {
    let n= 5;
    let c =0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    return c;
}
let r=prime();
if(r==2){
    console.log(" prime number");
}else{
    console.log( "composite number");
}
