function arrayeven(m){
    if(m%2==0){
        return m;
    }
    return 0;
}
let n = [1,2,3,4,5,6,7,8,9,10];
console.log("even numbers are");
for(let i=0; i<n.length;i++){
    let s= arrayeven(n[i]);
    if(s!=0){
        console.log(s);
    }
    
}
