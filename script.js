let btn = document.getElementById("btn");

let birthdate = document.getElementById("birthday");
console.log(birthdate.value)
let para = document.getElementById("para");
para.innerText = `Your current age is ${calculateAge()}`

function calculateAge(){
let currDate = new Date(); 

let birthDate = new Date(birthdate.value);
let ans = currDate.getFullYear()-birthDate.getFullYear();
para.innerText = `Your current age is ${ans} years old`
}


btn.addEventListener("click", calculateAge)