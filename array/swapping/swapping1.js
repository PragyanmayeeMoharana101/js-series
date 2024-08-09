let n = [10,20,30,40,50,60];
let a = n.length;
console.log("before swapping");
console.log(n);
if(a%2==0){
    p=a/2;
    for(let i = 0; i<p; i++){
        c=n[i];
        n[i]=n[i+p];
        n[i+p]=c;
    }
    console.log("after swapping");
    console.log(n);
}else{
    console.log("length of array is odd");
}