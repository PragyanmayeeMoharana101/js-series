function primearray(m){
    c=0;
    for(let i = 1;i<=m;i++){
        if(m%i==0){
            c++
        }
    }
    if(c==2){
        return m;
    }
    return 0;
}
let n = [1,2,3,4,5,6,7,8,9,10];
console.log("prime numbers are")
for(let i = 0;i<n.length;i++){
    let s = primearray(n[i]);
    if(s!=0){
        console.log(s);
    }
    
}
