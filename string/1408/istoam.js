let str= "i is pragyan";
let str1= "";
for(let i = 0; i< str.length ; i++){
    if(str[i]==="i" && str[i+1]==="s"){
        i=i+1;
        str1= str1 + "am";
    }else{
        str1= str1 + str[i];
    }    
}
console.log("modified name = ",str1);