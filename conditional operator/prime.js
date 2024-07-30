let prime =(p) => {
    let c =0;
    for(let i=1;i<=n;i++){
        if(p%i==0){
            c++;
        }
    }
    return c;
}
let n= 5;
let r=prime(n);
let ans = r==2? "is a prime number" : "is a composite number";
console.log(n,ans);
