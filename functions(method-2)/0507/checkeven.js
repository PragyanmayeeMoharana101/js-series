function even(){
    let n=6;
    console.log("number is",n);
    s=n%2;
    return s;
}
r=even();
if(r==0){
    console.log("number is even");
}else{
    console.log("number is odd")
}