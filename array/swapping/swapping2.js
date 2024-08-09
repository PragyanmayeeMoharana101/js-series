let n = [10,20,30,40,50,60,70,80];
let a = n.length;
console.log("before swapping");
console.log(n);
if(a%2==0){
    for(let i = 0; i<a-1 ; i=i+2){
        c=n[i];
        n[i]=n[i+1];
        n[i+1]=c;
    }
    console.log("after swapping");
    console.log(n);
}