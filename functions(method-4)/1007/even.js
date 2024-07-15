function even(p){
    if(p%2==0){
        return 0;
    }
    return 1;
}
let n= 6;
let s= even(n);
if(s==0){
    console.log(n,"is even");
}else{
    console.log(n,"is odd")
}