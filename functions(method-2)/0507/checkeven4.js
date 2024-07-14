function even(){
    let n=6;
    console.log("number is",n);
    if(n%2==0){
        return 0;
    }
    return 1;
}
let r= even();
if(r==0){
    console.log("even");
}else{
    console.log("odd");
}