function biggestnum(a,b){
    if(a>b){
        return a;
    }
    return b;
}
let a = 5;
let b = 3;
console.log("first number =",a);
console.log("second number =",b);
let n= biggestnum(a,b);
console.log("biggest number is ",n);