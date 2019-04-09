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































