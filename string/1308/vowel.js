let sname = "pragyan";
let c=0;
for(let i =0;i<sname.length;i++){
    
    if(sname[i]=="a" || sname[i]=="e" || sname[i]=="i" || sname[i]=="o" || sname[i]=="u" ||sname[i]=="A" ||sname[i]=="E" ||sname[i]=="I" ||sname[i]=="0" || sname[i]=="U" ){
        c++;
    }

}
console.log("number of vowels = ", c);