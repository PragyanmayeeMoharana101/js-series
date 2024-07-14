let n=6;
console.log("number is",n);
console.log("factors in reverse order are");
let i=n;
do{
    if(n%i==0){
        console.log(i);
    }
    i--;
}while(i>=1);