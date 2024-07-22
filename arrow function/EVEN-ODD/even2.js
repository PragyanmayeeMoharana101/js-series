let evenodd= () => {
    let n=6;
    if(n%2==0){
        return 0;
    }
    return 1;
}
let r= evenodd();
if(r==0){
    console.log(" number is even");
}else{
    console.log(" number is odd");
}