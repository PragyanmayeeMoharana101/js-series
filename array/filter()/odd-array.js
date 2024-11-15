const arr= [10,15,7,19,20,15,18,16,25,39];
const displayeven=(x)=>{
    return x%2;
}
const result= arr.filter(displayeven);
console.log(result);