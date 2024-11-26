const person = {
    setfirstname: (fname)=>{
        this.firstname= fname;
    },
    setlastname: (lname)=>{
        this.lastname= lname;
    },
    getfullname: ()=>{
        return this.firstname +" "+this.lastname;
    }
}
person.setfirstname("ram");
person.setlastname("roy");
const fullname = person.getfullname();
console.log("your name is ",fullname);
console.log(person);