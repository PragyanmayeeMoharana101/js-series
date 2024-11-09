const arr= [10,15,7,19,20,15,18,16,25,39];
function changearr(x){
    x=x+10;
    return x;
}
const result= arr.map(changearr);
console.log(result);