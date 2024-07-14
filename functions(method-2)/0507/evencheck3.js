function checkeven(){
    let n=6;
    console.log("number is",n);
    if(n%2==0){
        return 0;
    }else{
        return 1;
    }
}
let r=checkeven();
if(r==0){
    console.log("number is even");
}else{
    console.log("number is odd")
}