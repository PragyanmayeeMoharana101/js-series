function display (callback){
    callback();
    console.log("world");
}
display(function show(){
    console.log("hello");
});
