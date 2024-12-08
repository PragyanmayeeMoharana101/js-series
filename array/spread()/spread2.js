const person = {
    "first name": "ram",
    "lastname": "roy",
    "age": 20
}
const address ={
    city: "sambalpur",
    state: "odisha"
}
let person1= {...person,...address};
console.log(person1);