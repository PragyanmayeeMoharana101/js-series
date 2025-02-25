function register(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register end");
            resolve();
        },1000)
    }) 
}
function sendmail(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("send mail end");
            resolve();
        },1000)
    })
}
function login(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login end");
            resolve();
        },1000)
    })
}
function getdata(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("get data end");
            resolve();
        },1000)
    })
}
function displaydata(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("display data end");
            resolve();
        },1000)
    })
}
register().then(sendmail).then(login).then(getdata).then(displaydata);