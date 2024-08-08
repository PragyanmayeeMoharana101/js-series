let n = [10,20,30,40,50,60,70,80,90,100];
let p =1;
if(n.length>p && p!=0){
    for(let i = n.length; i>p-1 ; i--){
        n[i]=n[i-1];
    }
    n[p-1]=5;
    console.log(n);
}else{
    console.log("invalid position");
}
