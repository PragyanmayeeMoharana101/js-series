let n= 1234;
let e=0;
let o=0;
console.log("number = ",n);
let i=1;
while(n>0){
    a= n%10;
    if(a%2==0){
        e=e+a;
    }else{
        o=o+a;
    }
    n=parseInt(n/10);
    i++;
}
console.log("sum of even digits = ",e);
console.log("sum of odd digits = ",o);
