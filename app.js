const os = require('os');
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('userInfo: ', os.userInfo());
const fs = require('fs');
const genders = ['M', 'F'];
const maleNames = ['John', 'Tom', 'Mark'];
const femaleNames = ['Kate', 'Emma', 'Jennifer'];
const lastNames = ['Doe', 'Biden', 'Oldman'];
const people = [];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let i = 1; i <= 20; i++) {
  const pearson = {};
  pearson.gender = randChoice(genders);
  pearson.name = randChoice(pearson.gender == 'M' ? maleNames : femaleNames);
  pearson.lastName = randChoice(lastNames);
  pearson.age = Math.floor(Math.random() * 61 + 18);
  people.push(pearson);
}
console.log(people);
const data = JSON.stringify(people);
fs.writeFile('people.json', data, (err) => {
  if (err) throw new err('Something went wrong');
  console.log('File has been successfully generated! Check people.json');
});
