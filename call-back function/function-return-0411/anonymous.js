function show(){
    return function (){
        console.log("hello world");
    }
    
}
const res = show();
console.log(res);
res();