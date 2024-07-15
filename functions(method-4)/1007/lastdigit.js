function lastdigit(p){
    let r= p%10;
    return r;
}
let n= 123;
let s= lastdigit(n);
console.log("number is",n);
console.log("last digit is",s)