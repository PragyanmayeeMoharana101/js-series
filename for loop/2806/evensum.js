let s=0;
console.log("even numbers beween 1 to 10 are");
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
        s=s+i;
    }
    
}
console.log("sum of even numbers are",s);