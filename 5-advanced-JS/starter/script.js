//function constractor
/*
var john = {
    name: 'John',
    yearsOfBirth: 1990,
    job: 'teacher'
};


var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
        console.log(2019-this.yearOfBirth)
        
}
Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1990, 'teacher'); 

var jane = new Person('Jane', 1999, 'driver');

var mark = new Person('Mark', 1949, 'retired');
    john.calculateAge();
    jane.calculateAge();
    mark.calculateAge();
    mark.lastName;
    jane.lastName;
    john.lastName;
console.log(john.lastName);
*/

//Object.creat
/*
var personProto = {
    calculateAge: function(){
    console.log(2019-this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = "John"
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{ 
  name: {value:  'Jane'},
  yearOfBirth: {value:1990},
  job: {value: "designer"}    
                         
});
*/
//Primitives vs Objects
/*
var a = 23;
var b = a;
a = 46;
console.log('a '+ a);
console.log('b '+ b);

var obj1={
    name: 'John', 
    age: 26
}

var obj2= obj1;
obj1.age = 30;
console.log('obj1 ' + obj1.age)
console.log('obj2 ' + obj2.age)

//functions
var age=27;
var obj={
    name: 'iryna', 
    city: 'springfield'
}

function change(a, b){
    a=37;
    b.city = "NYC"
}

change(age, obj);
console.log('age:'+ age);
console.log('obj:'+ obj);

*/
//Passing functions as arguments
/*
var years = [2004, 1965, 1937, 1998, 1856];

function arrayCalc(arr, fn ){
    var arrRes = [];
    for (var i= 0; i < arr.length; i++)
        {
            arrRes.push(fn(arr[i]));
        }
    return arrRes;
}

function calculateAge(el){
    return 2016-el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    if (el >=18 && el <=81){
        return Math.round(206.9-(0.67*el));
    }else{
        return -1;
    }
    
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullages = arrayCalc(years, isFullAge);
console.log(fullages);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

*/


//IIFE

/*
function game(){
    var score = Math.random()*10;
    console.log(score >=5);
}
game();

(function(){
        var score = Math.random()*10;
    console.log(score >=5);
} )();

(function(goodluck){
        var score = Math.random()*10;
    console.log(score >=5-goodluck);
} )(5);
*/
//Closures
/*
function retirement(retirementAge){
    var a = ' years until retirement. ';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIsland = retirement(67);

retirementGermany(1990);
retirementIsland(1990);
retirementUS(1990);
*/
//Returning functions
/*
function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ' can you please explain what UX design is?')
        }
    }else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach ' + name);
        }
    }else{
         return function(name){
            console.log('What do you do ' + name);
        }
    }
        
}

var teachersQuestion = interviewQuestion('teacher');
teachersQuestion('john');
var designerQuestgion = interviewQuestion('designer');
designerQuestgion('jane')


interviewQuestion('teacher')('mark')
*/
/*
function interviewQuestion(job){
   return function(name){
    if (job === 'designer'){
      console.log(name + ' can you please explain what UX design is?')
    }else if (job === 'teacher'){
      console.log('What subject do you teach ' + name);
    }else{
      console.log('What do you do ' + name);
    }
  }
     
}

interviewQuestion('teacher')('John')
interviewQuestion('designer')('Mary')
*/
//Bind, call and apply

var joh = {
    name: 'John',
    age:26,
    job: 'teacher',
    presentation: function (style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + ' ladies and gentelmen! I\'m '+ this.name + ' I\'m a ' + this.job + ' I am ' + this.age + ' years old' )
        }else if (style ==='friendly'){
            console.log('Hey! Whats up! I\m '+ this.name + 'Im a ' + this.job + 'I am ' + this.age + ' years old' )
        }
    }
}

var emily = {
    name: 'Emily',
    age:26,
    job: 'designer',
}
//borrowing
joh.presentation('formal', 'morning');
joh.presentation.call(emily, 'friendly', 'afternoon')
//apply
//joh.presentation.apply(emily, ['friendly', 'afternoon'])
//bind
var johFriendly = joh.presentation.bind(joh, 'friendly');
johFriendly('night');
var emilyInformal = joh.presentation.bind(emily, 'formal');
emilyInformal ('afternoon')

