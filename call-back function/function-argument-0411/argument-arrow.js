function display (callback){
    callback();
    console.log("world");
}
display( ()=>{
    console.log("hello");
});