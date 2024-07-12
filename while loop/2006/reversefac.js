let n=6;
console.log("number is",n);
console.log("factors in reverse order are");
let i=n;
while(i>=1){
    if(n%i==0){
        console.log(i);
    }
    i--;
}