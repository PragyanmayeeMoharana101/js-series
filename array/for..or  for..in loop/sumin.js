let n = [1,2,3,4,5,6,7,8,9,10];
let s=0;
for(const item in n){
    s=s+ n[item];
}
console.log("sum is",s);