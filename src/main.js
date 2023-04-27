let myName="Gokarna"
console.log("Naam (let):" +myName)

const permanent="Deze variable ka niet veranderen van waarde!";

const yearOfBirth=1995;

console.log("Geboortejaar (const):"+yearOfBirth)

var nationality="Belgie";
console.log("Nationaliteit (var):"+nationality)

let isMale=true;
console.log("gender (let):"+isMale)

let hobbies=["lezen", "koken", "wandelen"];
console.log("hobbies: "+hobbies)

let person={
    firstName: "Quinten",
    lastName: "De Clerck",
    age: 27,
    nationality:"Belgie",
    hobbies: ["lezen", "koken", "wandelen"]

}

console.log("person: ",person);
let persons=[
    {
        firstName: "Gokarna",
        lastName: "Bhusal",
        age: 26,
        nationality: "belge"
    },
    {
        firstName: "Raul",
        lastName: "Bhusal",
        age: 9,
        nationality: "belge"

    }
]
console.log("persoon 1 voornaam: ",persons[0].firstName)
console.log("persoon 2 nationality: ",persons[1].nationality)

let age=27;
if(age>18){
    var isAdult=true;
}
console.log("isadult: ",isAdult)

function demoLet(){
    if(age>18){
        let isAdult2=true;
        console.log("(binnen de if)isadult 2: ",isAdult2);
    }
    //console.log("(buiten de if)is adult: ",isAdult2); //zal een reference error opleveren

}
demoLet();

let notANumber="abc"/5;
console.log("not a number is : ",notANumber);

let numberOne=10;
let numberTwo=10;
let numberThree="10";

console.log("numberOne===numberTwo: ",numberOne===numberTwo);
console.log("numberOne===numberThree: ",numberOne===numberThree);