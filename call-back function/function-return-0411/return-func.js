function show(){
    function display (){
        console.log("hello world");
    }
    return display;
}
const res = show();
console.log(res);
res();