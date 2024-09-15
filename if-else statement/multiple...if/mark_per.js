let phy = 81;
let chem = 85;
let math = 76;
let eng = 93;
let cs = 90;
let total= phy+chem+math+eng+cs ;
let per = total/500*100;
console.log("total mark out of 500 = ",total);
console.log("total percentage = ",per);
if(per>=60){
    console.log("division = first");
}else if(per>=50){
    console.log("division = secong");
}else if(per>=40){
    console.log("division = third");
}else if(per<40){
    console.log("FAIL");
}else{
    console.log("invalid percentage");
}