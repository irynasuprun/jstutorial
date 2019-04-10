//let and const
/*
//ES 5
var name5 =  'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES 6
const name6= 'Jane Smith';
let age6 = 23;
name6= 'Jane Miller';
console.log(name6);

//ES5 
function driversLicence5(passedTest){
    if (passedTest){
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + '  born in ' + yearOfBirth + ' is now officially alllowed to drive this car');
}

driversLicence5(true); 



//ES6 
function driversLicence6(passedTest){

    let firstName;
    const yearOfBirth = 1990;
    if (passedTest){
        firstName = 'John';
    }
    console.log(firstName + '  born in ' + yearOfBirth + ' is now officially alllowed to drive this car');
}

driversLicence6(true);


let i = 23;
for (let i = 0; i <5; i++){
    console.log(i);
}

console.log(i);

*/
//ES6
/*
{
    const a = 1;
    let b = 2;
    var c = 4;
    
}

//console.log (a+b);
console.log(c);
*/

//Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el){
    return 2019 - el;
});

console.log(ages5)


//es6

let ages6 = years.map(el => 2019 - el);
console.log(ages6);


ages6 = years.map((el, index) => `Age element ${index +1}: ${2019-el}.`);
console.log(ages6);

ages6 = years.map((el, index) => { 
    const now = new Date().getFullYear();
    const age = now -el;
    return  `Age element ${index +1}: ${age}.`
    
});


console.log(ages6);
*/
//es5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self  =  this;
        document.querySelector('.green').addEventListener('click', function(){var str = 'this is box number '+ self.position + ' and it is '+ self.color; alert(str);});
    }
}

box5.clickMe();
//es6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', ()=>{var str = 'this is box number '+ this.position + ' and it is '+ this.color; alert(str);});
    }
}

box6.clickMe();

*/

//es6
/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', ()=>{var str = 'this is box number '+ this.position + ' and it is '+ this.color; alert(str);});
    }
}

box6.clickMe();

*/
/*

function Person(name){
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = 
function(friends){
    
    var arr = friends.map(function(el){
        return this.name + '  is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['bob', 'elsa', 'irna'];
new Person('John').myFriends5(friends);
       
//ES6

Person.prototype.myFriends6 = 
function(friends){
    
    var arr = friends.map(el => ` ${this.name} is friends with ${el}`);
    console.log(arr);
}


new Person('Mike').myFriends6(friends);

*/

/***************
//Destructuring
//ES5
var johm = ['John', 28];
//var name = johm[0];
//var age = john[1];

//ES6
const [name, year] = ['John', 26]
console.log(name);
console.log(year);

const obj = {
    firstName: 'john',
    lastname: 'Smith'
}

const {firstName, lastname} = obj;
console.log(firstName);
console.log(lastname);


const {firstName:a, lastname: b} = obj;

console.log(a);
console.log(b);


function caclAgeRetirement(year){
    const age = new Date().getFullYear - year;
    return [age, 65-age];
}

const [age2, retirement] = caclAgeRetirement(1990);

console.log(age2);
console.log(retirement);

******************************/

//Array
const boxes = document.querySelectorAll('.box');
//ES5
/* 
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});
*/

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue')

//ES5
/*
for (var i = 0; i < boxesArr5.length; i ++)
{
        if(boxesArr5[i].className === 'box blue'){
            continue;
        }
        boxesArr5[i].textContent = 'I changed to blue!';
}
*/
//Es6
for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//ES5 
var ages = [7, 12, 25, 11, 17];
var full = ages.map(function(cur){
    return cur >= 18;
})

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur>=18))
console.log(ages.find(cur => cur>=18))