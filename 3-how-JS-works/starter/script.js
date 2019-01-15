///////////////////////////////////////
// Lecture: Hoisting

///functions
/*
calcualateAge(1965);

//retiremetn(1990);


function calcualateAge(year){
    console.log(2019- year);
}


var retiremetn = function(year){
    console.log(65-(2019-year));
}



//variables
console.log(age);

var age =23;
console.log(age);

function foo(){
    var age = 99;
    console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/* 
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
 

*/
// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
 

*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this)


/*calcualateAge(1965);

function calcualateAge(year){
    console.log(2019- year);
    console.log(this)
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(this.yearOfBirth);
/*
        function innerFunction(){
            console.log(this);
        }
         innerFunction();
*/        
       
    }
}

john.calculateAge();

var Mike = {
    name: 'Mike', 
    yearOfBirth: 1994
};

Mike.calculateAge=john.calculateAge;
Mike.calculateAge();
