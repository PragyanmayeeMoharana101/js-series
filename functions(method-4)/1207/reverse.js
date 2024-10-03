function reverse (n){
    let s=0;
    let v=100;
        while(n>0){
        a= n%10;
        s= s+a*v;
        n=parseInt(n/10);
        v= parseInt(v/10);
    }
    return s;
}
let n= 123;
let s= reverse(n);
console.log("number = ",n);
console.log("reverse of digits = ",s);
