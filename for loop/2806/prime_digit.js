let n= 1234;
console.log("number = ",n);
console.log("prime digits are");
for(let i=1;n>0;i++){
    a= n%10;
    c=0;
    for(let j=1; j<=a;j++){
        if(a%j==0){
            c++;
        }
    }
    if(c==2){
        console.log(a);
    }
    n=parseInt(n/10);
}

