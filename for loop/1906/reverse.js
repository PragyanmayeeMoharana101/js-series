let n= 123;
let m =n;
let s=0;
let v=100;
console.log("number = ",n);
for(let i=1;n>0;i++){
    a= n%10;
    s= s+a*v;
    n=parseInt(n/10);
    v= parseInt(v/10);
}
console.log("reverse of digits = ",s);
if(m== s){
    console.log("number is a palindrome number");
}else{
    console.log("number is not a palindrome number");
}