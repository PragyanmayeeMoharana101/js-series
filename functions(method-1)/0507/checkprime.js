function checkprime(){
    let n=5;
    console.log("number is",n);
    let c =0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log("number is prime");
    }else{
        console.log("number is composite")
    }

}
checkprime();