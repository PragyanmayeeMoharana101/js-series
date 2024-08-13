let str = "learn while you play";
let c= 0;
for(let i=0; i<str.length; i++){
    if(str[i]== " "){
        c++;
    }
}
console.log("number of words = ",c+1);