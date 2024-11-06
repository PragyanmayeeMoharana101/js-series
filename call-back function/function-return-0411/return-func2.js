function show(){
    return function display (){
        console.log("hello world");
    }
    
}
const res = show();
console.log(res);
res();