function biggestnum(){
    let a = 5;
    let b = 3;
    console.log("first number =",a);
    console.log("second number =",b);
    if(a>b){
        return a;
    }
    return b;
}
let n= biggestnum();
console.log("biggest number is ",n);