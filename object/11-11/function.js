const person = {
    firstname : "ram",
    lastname: "roy",
    age: 20,
    display: function(){
        console.log(this.firstname+" "+this.lastname+"is"+this.age+"years old");
    }
}
const rohit = person;
console.log(rohit);