let str= "pragyan";
let str1= "";
for(let i = 0; i< str.length ; i++){
    if(str[i]==="a"){
        str1= str1 + "A";
    }else{
        str1= str1 + str[i];
    }    
}
console.log("modified name = ",str1);