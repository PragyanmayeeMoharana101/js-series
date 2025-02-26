function register(callback){
    setTimeout(()=>{
        console.log("register end");
        callback();
    },1000)
}
function sendmail(callback){
    setTimeout(()=>{
        console.log("send mail end");
        callback();
    },1000)
}
function login(callback){
    setTimeout(()=>{
        console.log("login end");
        callback();
    },3000)
}
function getdata(callback){
    setTimeout(()=>{
        console.log("get data end");
        callback();
    },1000)
}
function displaydata(){
    setTimeout(()=>{
        console.log("display data end");
    },1000)
}
register(function(){
    sendmail(function(){
        login(function(){
            getdata(function(){
                displaydata();
            }); 
        });  
    });
});

console.log("other application executed")
      