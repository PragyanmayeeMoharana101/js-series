let n = [30,40,50,60,10,20];
let a = n.length;
let c= 0;
for(let i = a-1; i>=0 ; i--){
    if(n[i]<n[0]){
        c++;
    }else{
        break;
    }
}
console.log("number of left rotate: ",c); 