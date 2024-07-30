const lastdigit =(n)=>{
    let d= n%10;
    return d;
}
let n= 123;
let r= lastdigit(n);
console.log("number is",n);
console.log("last digit is",r);