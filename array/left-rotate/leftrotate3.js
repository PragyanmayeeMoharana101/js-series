let n = [10,20,30,40,50,60];
let a= n[0];
let l = n.length;
for(var i = 1; i<l ; i++){
    n[i-1]=n[i];
}
n[i-1]=a;
console.log(n);