let evenodd= function(p){
    if(p%2==0){
        return 0;
    }else{
        return 1;
    }
}
let n= 6;
r= evenodd(n);
if(r==0){
    console.log(n,"is even");
}else{
    console.log(n,"is odd");
}