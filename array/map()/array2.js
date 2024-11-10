const arr= [10,15,7,19,20,15,18,16,25,39];
function changearr(x){
    return x+10;
}
const result= arr.map(changearr);
console.log(result);