function arraySum(m){
    let s = 0;
    for(let i = 0 ;i<m.length;i++){
        s=s+m[i];
    }
    return s;
}
let n = [1,2,3,4,5,6,7,8,9,10];
let s = arraySum(n);
console.log("sum is",s);