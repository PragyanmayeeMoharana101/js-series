let n = [1,2,3,4,5,6,7,8,9,10];
console.log("prime numbers are");
for(const item of n){
    let c=0;
    for(let i=1;i<=item;i++){
        if(item % i ==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log(item);
    }
}
