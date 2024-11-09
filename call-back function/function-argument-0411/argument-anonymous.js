function display (callback){
    callback();
    console.log("world");
}
display(function (){
    console.log("hello");
});