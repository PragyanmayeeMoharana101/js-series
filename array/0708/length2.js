let n = [10,20,30,40,50];
for(let i = n.length;i>0;i--){
    n[i]=n[i-1];
}
n[0]=60;
console.log(n);