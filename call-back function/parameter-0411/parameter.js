function show (name){
    console.log("hello",name);
}
function display (callback){
    callback("ram");
    console.log("world");
}
display(show);