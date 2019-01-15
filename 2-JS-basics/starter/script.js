/*
var firstName = 'Iryna';
console.log(firstName);
var lastName = 'Suprun';
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job='Teacher';

console.log(job);
*
/
/*
variable mutation and type coercion
*/
/*
var firstName = 'Iryna';
var age = 28;
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = true;
console.log(firstName+'is a ' + age + 'years old'+ job+'. Is she married? '+ isMarried);

//Variable mutation
age='twenty eight'; 
job = 'driver';
alert(firstName+'is a ' + age + ' years old'+ job+'. Is she married? '+ isMarried);

var lastName = prompt('What is her last Name?');
console.log(firstName, lastName)
*/

/*****************************
basic opereators
*****************************/
/*
var year, yearJohn, yearMark;

year = 2018;
ageJohn=26;
ageMark =30;
yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log(yearJohn);
console.log(yearMark);

//logical operator
var johnOder = ageJohn > ageMark;
console.log(johnOder);

//typeof operator
console.log(typeof johnOder);
*/

//Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= 18;
console.log(isFullAge);
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/2;
console.log(average);

//Muliple assigments
var x, y;
x = y= (3+5)*4-6;
console.log(x, y);

x=x*2;
console.log(x);
x*=2;
console.log(x);
x+=10;
console.log(x);
x++;
console.log(x);
*/

//coding challenge
/*
var MarkWeihgt = 167;
var JohnWeight = 196;

var MarkHeight = 108;
var JohnHeight = 100;

var MarkBMI = MarkWeihgt / (MarkHeight*MarkHeight);
var JohnBMI = JohnWeight/ (JohnHeight*JohnHeight);

var isMarksBMIHighter = MarkBMI > JohnBMI;
console.log('MarkBMI?', MarkBMI);
console.log('JohnBMI?', JohnBMI);
console.log('Is Mark\'s BMI highter than John?', isMarksBMIHighter);
*/
//control statements

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus==='married'){
    console.log(firstName + ' is married');
}else{
    console.log(firstName + '  will hopefully marry soon');
}


var isMarried =false;
if (isMarried){
    console.log(firstName + ' is married');
}else{
    console.log(firstName + '  is single');
}
    


var MarkWeihgt = 120; //kg
var JohnWeight = 100; //kg

var MarkHeight = 1.95; //m
var JohnHeight = 1.95; //m

var MarkBMI = MarkWeihgt / (MarkHeight*MarkHeight);
var JohnBMI = JohnWeight/ (JohnHeight*JohnHeight);

var isMarksBMIHighter = MarkBMI > JohnBMI;
if (MarkBMI > JohnBMI){
    console.log('Marks BMI is highger than John\'s');
}else{
    console.log('Johns BMI is highger than Marks\'s');
}
    
*/
/*
var firstName = 'John';
var age = 20;

if (age <13){
    console.log(firstName + ' is a boy');
}else if(age >=13 && age <20){
         console.log(firstName + ' is a teenager');
    }
else if(age >=20 && age <30){
         console.log(firstName + ' is a yong man');
    }
else{
         console.log(firstName + ' is a man');
         }
*/

/*
Ternary Operation and Switch
*/
/*
var firstName = 'John';
var age = 40;


age >=18 ? console.log(firstName + ' drinks beer.')
: console.log (firstName + ' drinks juice.')

var drink = age >=18 ? 'beer': 'juice'

console.log (drink)

var job = 'instructor';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' desing beautiful sites');
        break;
    default:
        console.log(firstName + ' does something esle');
    
}

switch(true){
    case age <13:
        console.log(firstName + ' is a teenager');
        break;
    case age >=13 && age <20:
        console.log(firstName + ' is a teenager');    
        break;
    case age >=20 && age <30:
        console.log(firstName + ' is a yong man');
        break;
    default:    
        console.log(firstName + ' is a man');
            
}
*/
/*
var height;
height=23;
if (height || height === 0){
    console.log('variable is defined')
}else{
    console.log('variable is not defined')
}


if (height=='23'){
    console.log('== does type coercion')
}
*/


/***************
*Function
*/
function calculateAge(birthYear){
    return 2018-birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn)
var ageJane = calculateAge(1968);
console.log(ageJane)

function yearsUntilRetirement(birthYear, firstName){
    var age=calculateAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years');
    }else{
        console.log(firstName + ' is already retired for ' + retirement + ' years');
    }
}
yearsUntilRetirement(1990, 'Jonh');
yearsUntilRetirement(1937, 'Jake');
yearsUntilRetirement(1969, 'Jabe');

/*****************************************
*Function Statements and Expressions
*/
//Function Declaration
//function whatDoYouDo(job, firstName){}

//Function Expression
 var whatDoYouDo = function(job, firstName){
     switch(job){
         case 'teacher':
             return firstName + ' teaches kids to code';
         case 'driver':
             return firstName + ' drives car in Lisbon';
         case 'designer':     
             return firstName + ' builds websites';
         default:
             return firstName + ' does something else';
     }
 }

 
 console.log(whatDoYouDo('teacher', 'John'));


/******************
*Arrays
*/
//Initialize new Array
var names  = ['Jonh', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1498);

console.log(names[0]);
console.log(names);
console.log(names.length);
//Mutate array data
names[1]='Ben';
names[names.length]='Merry';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
console.log(john);
john.unshift('Mister');
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);
console.log(john.indexOf('Smith'));
console.log(john.indexOf('23'));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer':'John is a designer';
console.log(isDesigner);






