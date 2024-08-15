let sname= "pragyan";
let vname= "";
for(let i =0; i<sname.length; i++){
    if(sname[i]!="a" && sname[i]!="e" && sname[i]!="i" && sname[i]!="o" && sname[i]!="u" && sname[i]!="A" && sname[i]!="E" && sname[i]!="I" && sname[i]!="O" && sname[i]!="U" ){
        vname=vname+sname[i];
    }
}
console.log("string without vowel is",vname);