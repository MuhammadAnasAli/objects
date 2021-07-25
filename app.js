//Q no.1
var obj = [
  { name: "Juice", price: "100", quality: "1" },
  { name: "Cookie", price: "20", quality: "10" },
  { name: "Shirt", price: "500", quality: "2" },
  { name: "Pen", price: "60", quality: "5" },
];

var allTotal = 0;
for (let i = 0; i < obj.length; i++) {
  let eachTotal = parseInt(obj[i].price) * parseInt(obj[i].quality);
  allTotal += eachTotal;
  console.log(obj[i].name + " Total Price " + eachTotal);

}
console.log("Total price " + allTotal);

//Q no.2

var info = [
  { name: "Anas", email: "an@gmail.com", password: "1234", age: 30, gender: "Male", city: "karachi", country: "Pakistan" },
  { name: "Ahmed", email: "ah@gmail.com", password: "1234", age: 30, gender: "Male", city: "Lahore", country: "Pakistan" },
  { name: "Ali", email: "Ali@gmail.com", password: "1234", age: 30, gender: "Male", city: "karachi", country: "Pakistan" },
];

if (info.hasOwnProperty('name')) {
  console.log('Property is founded');
}

for (inf in info) {
  if (info[inf].hasOwnProperty('age')) {
    console.log('Property founded name');
  }
  if (info[inf].hasOwnProperty('country')) {
    console.log('Country property founded');
  }
  if (info[inf].hasOwnProperty('First Name')) {
    console.log('Property founded');
  }
  else {
    console.log('First Name property not founded');

  }
  if (info[inf].hasOwnProperty('lasstName')) {
    console.log('Property founded');
  }
  else {
    console.log('Last Name property not founded');

  }
}
// Q no.3
function Personal(name, email, age) {
  this.name = name,
    this.email = email,
    this.age = age
}
var person_a = new Personal('Anas', 'Anas@mail.cm', 25);
var person_b = new Personal('ahmed', 'ahmed@mail.com', 30);
var person_c = new Personal('ali', 'ali@mail.com', 40);

console.log(person_a);
console.log(person_b);
console.log(person_c);


//Q no.4
function userInfo(name, address, gen, education, profession) {
  this.name = name,
    this.address = address,
    this.gen = gen,
    this.education = education,
    this.profession = profession
}
var arr = [];
function saveInfo() {
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;
  var gen = document.getElementById('gen').value;
  var education = document.getElementById('eduction').value;
  var profession = document.getElementById('profession').value;
  var data = new userInfo(name, address, gen, education, profession);
  arr.push(data);
  console.log(arr);
  localStorage.setItem('userData', JSON.stringify(arr));
  console.log('local storage ', localStorage.getItem('userData'));

  setDom(name, address, gen, education, profession);
}
function setDom(name, address, gen, education, profession) {
  document.getElementById('result').style = 'display:inline';
  document.getElementById('l_name').innerHTML = name;
  document.getElementById('l_address').innerHTML = address;
  document.getElementById('l_gender').innerHTML = gen;
  document.getElementById('l_edu').innerHTML = education;
  document.getElementById('l_prof').innerHTML = profession;
}
