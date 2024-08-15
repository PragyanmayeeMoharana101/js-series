let str = "madam";
let rstr= "";
for(let i = str.length-1;i>=0;i--){
    rstr+=str[i];
}
if(str===rstr){
    console.log("string is palindrome");
}else{
    console.log("string is not palindrome");
}