let n= 1234;
console.log("number = ",n);
console.log("prime digits are");
let i=1;
while(n>0){
    a= n%10;
    c=0;
    let j=1;
    while( j<=a){
        if(a%j==0){
            c++;
        }
        j++;
    }
    if(c==2){
        console.log(a);
    }
    n=parseInt(n/10);
    i++;
}

