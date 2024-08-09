let n = [10,20,30,40,50,60];
let a = n.length;
console.log("before swapping");
console.log(n);
if(a%2==0){
    p = a-1;
    for(let i = 0; i<=p ; i++){
        c=n[i];
        n[i]=n[p];
        n[p]=c;
        p=p-1;
    }
    console.log("after swapping");
    console.log(n);
}else{
    console.log("length of array is odd");
}