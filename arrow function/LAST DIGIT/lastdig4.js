let lastdigit= (p) =>{
    let s=p%10;
    return s;
}
let n=123;
let r=lastdigit(n);
console.log("number is ",n);
console.log("last digit is ",r);