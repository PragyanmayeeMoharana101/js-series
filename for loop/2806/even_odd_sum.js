let n= 1234;
let e=0;
let o=0;
console.log("number = ",n);
for(let i=1;n>0;i++){
    a= n%10;
    if(a%2==0){
        e=e+a;
    }else{
        o=o+a;
    }
    n=parseInt(n/10);
}
console.log("sum of even digits = ",e);
console.log("sum of odd digits = ",o);
